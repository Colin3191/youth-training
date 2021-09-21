import ejs from "ejs";
import fs from "fs";
import { fileURLToPath } from "url";
import prettier from "prettier";
import path from "path";

export function createIndexTemplate(config) {
  const __dirname = fileURLToPath(import.meta.url);
  const template = fs.readFileSync(
    path.resolve(__dirname, "../template/index.ejs")
  );

  const code = ejs.render(template.toString(), {
    middleware: config.middleware,
    port: config.port,
  });

  return prettier.format(code, { parser: "babel" });
}
