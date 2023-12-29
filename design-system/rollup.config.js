import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import copy from "rollup-plugin-copy";
import generatePackageJson from "rollup-plugin-generate-package-json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import { getFolders } from "./scripts/getFolders.js";

const packageJson = require("./package.json");

const plugins = [
  postcss({
    config: {
      path: "./postcss.config.cjs",
      minimize: true,
      modules: false,
    },
  }),
  peerDepsExternal(),
  resolve(),
  commonjs(),
  terser(),
  typescript({
    tsconfig: "tsconfig.json",
    useTsconfigDeclarationDir: true,
  }),
  copy({
    targets: [{ src: "./tailwind.config.js", dest: "./build" }],
  }),
];

const subPackagesConfig = (type, name) => ({
  input: `src/${type}/${name}/index.${type === "components" ? "tsx" : "ts"}`,
  output: [
    {
      file: `build/${type}/${name}/index.js`,
      sourcemap: true,
      exports: "named",
      format: "esm",
    },
    {
      file: `build/${type}/${name}/index.cjs`,
      sourcemap: true,
      exports: "named",
      format: "cjs",
    },
  ],
  plugins: [
    ...plugins,
    generatePackageJson({
      baseContents: {
        name: `${name}`,
        main: "./index.cjs", // --> points to cjs format entry point of whole library
        module: "./index.js", // --> points to esm format entry point of individual component
        types: `./index.d.ts`, // --> points to types definition file of individual component
      },
    }),
  ],
  external: ["react", "react-dom"],
});

const componentPackages = getFolders("./src/components").map((name) =>
  subPackagesConfig("components", name)
);

const hookPackages = getFolders("./src/hooks").map((name) =>
  subPackagesConfig("hooks", name)
);
const utilPackages = getFolders("./src/utils").map((name) =>
  subPackagesConfig("utils", name)
);

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins,
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins,
    external: ["react", "react-dom"],
  },
  ...componentPackages,
  ...utilPackages,
  ...hookPackages,
];
