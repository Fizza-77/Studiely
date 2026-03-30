import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

/**
 * When no local Flutter `build/web` copy exists, repopulate deploy/app from production
 * by parsing RESOURCES from flutter_service_worker.js (same file list the PWA precaches).
 */
export async function syncFlutterAppFromLive(appDir) {
  const baseUrl = process.env.FLUTTER_APP_BASE_URL || "https://www.studiely.com/app/";
  const swUrl =
    process.env.FLUTTER_SERVICE_WORKER_URL ||
    new URL("flutter_service_worker.js", baseUrl).href;

  mkdirSync(appDir, { recursive: true });

  const swRes = await fetch(swUrl);
  if (!swRes.ok) throw new Error(`Failed to fetch ${swUrl}: ${swRes.status}`);
  const swText = await swRes.text();

  if (/^\s*</.test(swText) || swText.includes("<!DOCTYPE")) {
    throw new Error(
      `${swUrl} returned HTML, not JS. Set FLUTTER_APP_BASE_URL (e.g. https://www.studiely.com/app/) or use FLUTTER_WEB_BUILD.`
    );
  }

  const literal = extractResourcesObjectLiteral(swText);
  const RESOURCES = new Function(`return (${literal})`)();

  const relPaths = new Set();
  for (const key of Object.keys(RESOURCES)) {
    if (typeof key !== "string" || key.startsWith("http")) continue;
    if (key === "/") {
      relPaths.add("index.html");
      continue;
    }
    const rel = key.startsWith("/") ? key.slice(1) : key;
    if (rel) relPaths.add(rel);
  }

  const list = [...relPaths];
  const concurrency = 12;
  let ok = 0;
  let failed = 0;

  async function fetchOne(rel) {
    const url = new URL(rel, baseUrl).href;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.error("[sync-flutter] HTTP", res.status, url);
        failed++;
        return;
      }
      const buf = Buffer.from(await res.arrayBuffer());
      const out = join(appDir, rel);
      mkdirSync(dirname(out), { recursive: true });
      writeFileSync(out, buf);
      ok++;
    } catch (e) {
      console.error("[sync-flutter]", url, e?.message || e);
      failed++;
    }
  }

  let i = 0;
  async function worker() {
    while (i < list.length) {
      const idx = i++;
      await fetchOne(list[idx]);
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, list.length) }, () => worker()));

  console.log(`[sync-flutter] ${ok} files written under app/, ${failed} failed (${list.length} paths)`);
  if (failed > 0) {
    throw new Error("Flutter app sync had failures; aborting deploy merge.");
  }
}

function extractResourcesObjectLiteral(text) {
  const assignRe = /(?:const|let|var)\s+RESOURCES\s*=\s*/;
  const m = assignRe.exec(text);
  if (!m) {
    throw new Error(
      "RESOURCES = not found in flutter_service_worker.js (format may have changed). Use FLUTTER_WEB_BUILD."
    );
  }

  let i = m.index + m[0].length;
  while (i < text.length && /\s/.test(text[i])) i++;
  if (text[i] !== "{") {
    throw new Error("Expected { after RESOURCES = in service worker");
  }

  let depth = 0;
  const start = i;

  for (; i < text.length; i++) {
    const c = text[i];
    if (c === '"') {
      i++;
      while (i < text.length) {
        if (text[i] === "\\") {
          i += 2;
          continue;
        }
        if (text[i] === '"') break;
        i++;
      }
      continue;
    }
    if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) return text.slice(start, i + 1);
    }
  }

  throw new Error("Unclosed RESOURCES object in service worker");
}
