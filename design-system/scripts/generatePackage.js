const { getFolders } = require("./getFolders.js");
const { resolve, join } = require("path");
const { readFile, writeFile } = require("fs-extra");

const packagePath = process.cwd();
const buildPath = join(packagePath, "./build");

const writeJson = (targetPath, obj) =>
  writeFile(targetPath, JSON.stringify(obj, null, 2), "utf8");

async function createPackageFile() {
  const packageData = await readFile(
    resolve(packagePath, "./package.json"),
    "utf8"
  );
  const { scripts, devDependencies, ...packageOthers } =
    JSON.parse(packageData);

  const generateExport = (acc, curr, type) => {
    acc[curr] = {
      import: `./${type}/${curr}/index.js`,
      require: `./${type}/${curr}/index.cjs`,
      types: `./${type}/${curr}/index.d.ts`,
    };
    return acc;
  };

  const componentExports = getFolders("./build/components").reduce(
    (acc, curr) => generateExport(acc, curr, "components"),
    {}
  );
  const hookExports = getFolders("./build/hooks").reduce(
    (acc, curr) => generateExport(acc, curr, "hooks"),
    {}
  );
  const utilExports = getFolders("./build/utils").reduce(
    (acc, curr) => generateExport(acc, curr, "utils"),
    {}
  );

  const newPackageData = {
    ...packageOthers,
    exports: {
      "tailwind.config": {
        import: "./tailwind.config.js",
        require: "./tailwind.config.js",
      },
      ...componentExports,
      ...hookExports,
      ...utilExports,
    },
    private: false,
    typings: "./index.d.ts",
    main: "./cjs/index.js",
    module: "./index.js",
  };

  const targetPath = resolve(buildPath, "./package.json");

  await writeJson(targetPath, newPackageData);
  console.log(`Created package.json in ${targetPath}`);
}

async function run() {
  try {
    await createPackageFile();
    // await includeFileInBuild("./README.md");
    // await includeFileInBuild('../../LICENSE');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
