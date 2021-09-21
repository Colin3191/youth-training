#!/usr/bin/env node
import fs from "fs";
import { createIndexTemplate } from "./indexTemplate.js";
import { createPackageJsonTemplate } from "./indexPackage.js";
import { question } from "./question/index.js";
import { createConfig } from "./config.js";
import execa from "execa";
import path from "path";

const answer = await question();
const config = createConfig(answer);

// 创建文件夹
fs.mkdirSync(getRootPath());

// 创建index
fs.writeFileSync(getRootPath() + "/index.js", createIndexTemplate(config));
// 创建package
fs.writeFileSync(
  getRootPath() + "/package.json",
  createPackageJsonTemplate(config)
);

execa("yarn", {
  cwd: getRootPath(),
  stdio: [2, 2, 2],
});

function getRootPath() {
  return path.resolve(process.cwd(), config.packageName);
}
