import { rmSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..");
try {
  rmSync(join(root, ".next", "dev"), { recursive: true, force: true });
} catch {
  /* ignore */
}
