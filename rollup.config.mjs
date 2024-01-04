import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import { readFileSync } from "fs";
const pkg = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url), "utf8"),
);

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
      name: pkg.name,
      plugins: [terser()],
      globals: {
        dayjs: "dayjs",
      },
    },
  ],
  external: ["dayjs"],
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
