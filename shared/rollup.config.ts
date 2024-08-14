import typescript from "rollup-plugin-typescript2";
import packageJSON from "./package.json" assert { type: "json" };

const plugins = [
  typescript({
    tsconfig: "tsconfig.json",
    useTsconfigDeclarationDir: true,
  }),
];

const config = [
  {
    input: "./index.ts",
    output: [
      {
        format: "esm",
        file: packageJSON.module,
      },
      {
        format: "cjs",
        file: packageJSON.main,
      },
    ],
    plugins,
  },
];

export default config;
