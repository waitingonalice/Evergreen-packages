import fs, {copyFile} from "fs";
import path from "path";
import packageJSON from "../package.json" assert { type: "json" };

const packagePath = process.cwd();
const buildPath = path.join(packagePath, "./build");

const buildPackageJson = () => {
  // const packageJsonPath = require(path.join(packagePath, "./package.json"));
  // const packageData = fs.readFileSync(packageJsonPath);
  const { scripts, devDependencies, ...rest } = packageJSON;
  const build = {
    ...rest,
    main: './index.cjs',
    module: './index.js',
    types: './index.d.ts',
   };
  const packageJsonBuildPath = path.join(buildPath, "./package.json");
  fs.writeFileSync(packageJsonBuildPath, JSON.stringify(build));
};

// const removeUnwantedBundle = () => {
//   const options = {
//     recursive: true
//   }

//   const handleError = (err) => {
//     if (err) {
//       console.error(err)
//       process.exit(1)
//     }
//   }
//   fs.rm(path.join(buildPath, "./constants"), options, handleError)
//   fs.rm(path.join(buildPath, "./utils"), options, handleError)
// }

const extractReadMe = () => {
  copyFile(path.join(packagePath, "./README.md"), path.join(buildPath, "./README.md"),
    (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    }); 
}

function run() {
  buildPackageJson();
  // removeUnwantedBundle();
  extractReadMe();
}

run();
