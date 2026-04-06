import fs from "fs";
import path from "path";

const LEGAL_ROOT = path.join(process.cwd(), "content", "legal");

export type LegalDocument = {
  html: string;
  title: string;
  description?: string;
};

/**
 * Loads a full HTML document from content/legal (not served as a static file;
 * avoids duplicate /legal/*.html URLs alongside App Router routes).
 */
export function loadLegalDocument(relativePath: string): LegalDocument {
  const filePath = path.join(LEGAL_ROOT, relativePath);
  const html = fs.readFileSync(filePath, "utf-8");
  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  const descMatch = html.match(
    /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i
  );
  return {
    html,
    title: titleMatch?.[1]?.replace(/\s+/g, " ").trim() ?? "Studiely — Legal",
    description: descMatch?.[1]?.trim(),
  };
}
