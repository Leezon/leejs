import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";

const config = defineConfig({
  input: "src/index.ts",
  output: [
    {
      file: "lib/index.umd.js",
      format: "cjs",
    },
    {
      file: "lib/index.esm.js",
      format: "esm",
    },
    {
      file: "lib/index.min.js",
      format: "iife",
      name: "lee",
      plugins: [terser()],
      globals: {
        dayjs: "dayjs",
      },
    },
  ],
  external: [],
  plugins: [
    typescript(),
    json(),
    babel({
      babelHelpers: "bundled",
      // 只转换源代码，不运行外部依赖
      exclude: "node_modules/**",
      extensions: [".js", ".ts"],
    }),
  ],
});
export default config;
