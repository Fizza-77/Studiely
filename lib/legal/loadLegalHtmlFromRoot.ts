import fs from "fs";
import path from "path";

export function loadLegalHtmlFromRoot(fileName: string) {
  const filePath = path.join(process.cwd(), "legal", fileName);
  return fs.readFileSync(filePath, "utf-8");
}
