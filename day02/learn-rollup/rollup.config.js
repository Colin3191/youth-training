import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser"; //压缩
import nodeResolve from "@rollup/plugin-node-resolve"; //打包依赖
import commonjs from "@rollup/plugin-commonjs"; // 支持commonjs

export default {
  input: "src/main.js",
  output: [
    {
      file: "dist/bundle.cjs.js",
      format: "cjs",
    },
    {
      file: "dist/bundle.esm.js",
      format: "esm",
      plugins: [terser()],
    },
  ],
  plugins: [json(), nodeResolve(), commonjs()],
  external: ["vue"], // 不参与打包
};
