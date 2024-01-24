/* eslint-disable no-console */
const { resolve, join } = require("path");
const { readFile, writeFile, copyFile } = require("fs-extra");
const { getFolders } = require("./getFolders");
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

  const componentExports = getFolders("./build/components").reduce(
    (acc, curr) => {
      const accCopy = {
        ...acc,
        [`./${curr}`]: {
          import: `./components/${curr}/index.js`,
          require: `./components/${curr}/index.cjs`,
          types: `./components/${curr}/index.d.ts`,
        },
      };
      return accCopy;
    },
    {}
  );

  const utilExports = getFolders("./build/utils").reduce((acc, curr) => {
    const accCopy = {
      ...acc,
      [`./${curr}`]: {
        import: `./utils/${curr}/index.js`,
        require: `./utils/${curr}/index.cjs`,
        types: `./utils/${curr}/index.d.ts`,
      },
    };
    return accCopy;
  }, {});

  const hookExports = getFolders("./build/hooks").reduce((acc, curr) => {
    const accCopy = {
      ...acc,
      [`./${curr}`]: {
        import: `./hooks/${curr}/index.js`,
        require: `./hooks/${curr}/index.cjs`,
        types: `./hooks/${curr}/index.d.ts`,
      },
    };
    return accCopy;
  }, {});

  const newPackageData = {
    ...packageOthers,
    private: false,
    main: "./cjs/index.js",
    module: "./index.js",
    exports: {
      ".": {
        import: "./index.js",
        require: "./cjs/index.js",
        types: "./index.d.ts",
      },
      "./tailwindConfig": "./tailwind.config.js",
      ...componentExports,
      ...hookExports,
      ...utilExports,
    },
  };

  const targetPath = resolve(buildPath, "./package.json");

  await writeJson(targetPath, newPackageData);
  console.log(`Created package.json in ${targetPath}`);
}

async function includeFileInBuild(filePath) {
  copyFile(resolve(packagePath, filePath), resolve(buildPath, filePath));
}

async function run() {
  try {
    await createPackageFile();
    await includeFileInBuild("./README.md");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
