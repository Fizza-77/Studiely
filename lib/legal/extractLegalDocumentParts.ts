const stripTags = (value: string) =>
  value
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export type LegalDocumentParts = {
  title: string;
  metaItems: string[];
  bodyHtml: string;
};

/**
 * Pulls the title, header meta pills, and full body content out of the
 * standalone legal HTML documents so they can be rendered inside the
 * themed site shell instead of as a full separate page.
 */
export function extractLegalDocumentParts(html: string): LegalDocumentParts {
  const headerTitle = html.match(/<header[\s\S]*?<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1];
  const titleTag = html.match(/<title>([^<]+)<\/title>/i)?.[1];
  const title = stripTags(headerTitle || titleTag?.split("—").pop() || "Legal Document");

  const metaItems = [...html.matchAll(/<span class="meta-pill">([\s\S]*?)<\/span>/gi)].map(
    (match) => stripTags(match[1]),
  );

  const bodyHtml = extractContainerContent(html);

  return { title, metaItems, bodyHtml };
}

/**
 * The container div has many nested divs, so a lazy regex would truncate the
 * document at the first closing tag. Slice from the container's opening tag
 * to the explicit `<!-- /container -->` marker, or the footer as a fallback.
 */
function extractContainerContent(html: string): string {
  const openTag = '<div class="container">';
  const start = html.indexOf(openTag);

  if (start !== -1) {
    const contentStart = start + openTag.length;

    const markerEnd = html.indexOf("<!-- /container -->", contentStart);
    if (markerEnd !== -1) {
      const content = html.slice(contentStart, markerEnd);
      return content.replace(/<\/div>\s*$/, "").trim();
    }

    const footerEnd = html.indexOf("<footer", contentStart);
    if (footerEnd !== -1) {
      const content = html.slice(contentStart, footerEnd);
      return content.replace(/<\/div>\s*$/, "").trim();
    }

    const bodyEnd = html.indexOf("</body>", contentStart);
    if (bodyEnd !== -1) {
      const content = html.slice(contentStart, bodyEnd);
      return content.replace(/<\/div>\s*$/, "").trim();
    }
  }

  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1];
  if (body) {
    return body
      .replace(/<header[\s\S]*?<\/header>/i, "")
      .replace(/<footer[\s\S]*?<\/footer>/i, "")
      .trim();
  }

  return html;
}
