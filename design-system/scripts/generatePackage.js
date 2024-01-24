/* eslint-disable no-console */
const { resolve, join } = require("path");
const { readFile, writeFile, copyFile } = require("fs-extra");
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

  const newPackageData = {
    ...packageOthers,
    private: false,
    main: "./cjs/index.js",
    module: "./index.js",
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
