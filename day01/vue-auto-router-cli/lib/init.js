const { promisify } = require("util");
const clear = require("clear");
const figlet = promisify(require("figlet"));
const chalk = require("chalk");
const log = (content) => console.log(chalk.green(content));
const { clone } = require("./download");

const spawn = async (...args) => {
  const { spawn } = require("child_process");
  return new Promise((resolve, reject) => {
    const proc = spawn(...args);
    // 把子进程的输出流合并到主进程
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    proc.on("close", (code) => {
      if (code !== 0) {
        reject({
          command: `${command} ${args.join(" ")}`,
        });
        return;
      }
      resolve();
    });
  });
};

module.exports = async (name) => {
  // 打印欢迎界面
  clear();
  const data = await figlet("Welcome");
  log(data);

  // 下载项目
  log("创建项目 " + name);
  await clone("github:su37josephxia/vue-template", name);

  // 安装依赖
  log("安装依赖...");
  const command = /^win/.test(process.platform) ? "npm.cmd" : "npm";

  try {
    await spawn(command, ["install"], { cwd: `./${name}` });
    log(`
  安装完成：
  To get start:
  ================
  cd ${name}
  npm run serve
  ================
  `);
  } catch (error) {
    console.error(error.command);
  }
};
