import fs from "fs";
import path from "path";

const LEGAL_DIRS = [
  path.join(process.cwd(), "content", "legal"),
  path.join(process.cwd(), "content", "legal", "web"),
  path.join(process.cwd(), "legal"),
];

/**
 * Backward-compatible loader used by legacy legal pages.
 */
export function loadLegalHtml(filename: string): string {
  for (const dir of LEGAL_DIRS) {
    const filePath = path.join(dir, filename);
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, "utf-8");
    }
  }

  throw new Error(
    `Legal file not found: ${filename}. Checked: ${LEGAL_DIRS.join(", ")}`
  );
}
