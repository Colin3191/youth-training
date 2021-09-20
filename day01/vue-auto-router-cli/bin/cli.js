#!/usr/bin/env node
const program = require("commander");
const packageJson = require("./../package.json");

program.version(packageJson.version);
program
  .command("init <name>")
  .description("init project")
  .action(require("../lib/init"));

program
  .command("refresh")
  .description("refresh routers...")
  .action(require("../lib/refresh"));
program.parse(process.argv);
