import ejs from "ejs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import prettier from "prettier";

export function createPackageJsonTemplate(config) {
  const __dirname = fileURLToPath(import.meta.url);
  const template = fs.readFileSync(
    path.resolve(__dirname, "../template/package.ejs")
  );

  const code = ejs.render(template.toString(), {
    middleware: config.middleware,
    packageName: config.packageName,
  });

  return prettier.format(code, { parser: "json" });
}
