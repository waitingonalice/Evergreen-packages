import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import copy from "rollup-plugin-copy";
import generatePackageJson from "rollup-plugin-generate-package-json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
// import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import { getFolders } from "./scripts/getFolder";

const packageJson = require("./package.json");
const plugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  terser(),
  typescript({
    tsconfig: "tsconfig.json",
    useTsconfigDeclarationDir: true,
  }),
];

const subfolderPlugins = (folderName) => [
  ...plugins,
  generatePackageJson({
    baseContents: {
      name: `${packageJson.name}-${folderName}`,
      version: packageJson.version,
      private: false,
      publishConfig: {
        access: "public",
      },
      main: "../cjs/index.js", // --> points to cjs format entry point of whole library
      module: "./index.js", // --> points to esm format entry point of individual component
      types: "./index.d.ts", // --> points to types definition file of individual component
    },
  }),
];

const folderBuilds = getFolders("./src/components").map((folder) => {
  return {
    input: `src/components/${folder}/index.tsx`,
    output: [
      {
        file: `build/${folder}/index.js`,
        sourcemap: true,
        exports: "named",
        format: "esm",
      },
    ],
    plugins: subfolderPlugins(folder),
    external: ["react", "react-dom"],
  };
});

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [
      ...plugins,
      copy({
        targets: [{ src: "./tailwind.config.js", dest: "./build" }],
      }),
      // postcss({
      //   config: {
      //     path: "./postcss.config.cjs",
      //     minimize: true,
      //     modules: false,
      //   },
      // }),
    ],
    external: ["react", "react-dom"],
  },
  ...folderBuilds,
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
    ],
    external: ["react", "react-dom"],
    plugins,
  },
];
