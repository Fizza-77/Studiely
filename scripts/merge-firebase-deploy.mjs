import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { syncFlutterAppFromLive } from "./sync-flutter-app-from-live.mjs";
import { syncRootPreservedFromLive } from "./sync-root-preserved-from-live.mjs";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const deploy = join(root, "deploy");
const outDir = join(root, "out");
const flutterDir = process.env.FLUTTER_WEB_BUILD || join(root, "flutter-web-build");

if (!existsSync(outDir)) {
  console.error("Missing out/ — run `npm run build` first.");
  process.exit(1);
}

rmSync(deploy, { recursive: true, force: true });
mkdirSync(deploy, { recursive: true });
cpSync(outDir, deploy, { recursive: true });

if (existsSync(flutterDir)) {
  const appDest = join(deploy, "app");
  rmSync(appDest, { recursive: true, force: true });
  cpSync(flutterDir, appDest, { recursive: true });
  console.log("Merged Flutter web → deploy/app from", flutterDir);
} else if (process.env.SKIP_FLUTTER_APP_SYNC === "1") {
  console.warn(
    "[merge-firebase-deploy] SKIP_FLUTTER_APP_SYNC=1 and no local Flutter build — deploy/app omitted (unsafe for production if /app must exist)."
  );
} else {
  console.warn(
    "[merge-firebase-deploy] No local Flutter build; syncing /app from FLUTTER_APP_BASE_URL (default https://www.studiely.app/app/)."
  );
  await syncFlutterAppFromLive(join(deploy, "app"));
}

if (process.env.SKIP_PRESERVE_ROOT_SYNC === "1") {
  console.warn("[merge-firebase-deploy] SKIP_PRESERVE_ROOT_SYNC=1 — /legal, tawk, etc. not synced from production.");
} else {
  await syncRootPreservedFromLive(deploy);
}

console.log("Firebase deploy folder ready at", deploy);
