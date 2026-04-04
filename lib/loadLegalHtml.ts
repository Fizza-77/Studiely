import fs from "fs";
import path from "path";

export function loadLegalHtml(filename: string): string {
  return fs.readFileSync(path.join(process.cwd(), "legal", filename), "utf-8");
}
