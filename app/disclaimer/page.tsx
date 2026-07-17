import { ThemedLegalDocument } from "@/components/ThemedLegalDocument";
import { loadLegalHtmlFromRoot } from "@/lib/legal/loadLegalHtmlFromRoot";
import { buildBreadcrumbSchema } from "@/lib/seo";

const breadcrumbSchema = buildBreadcrumbSchema("Disclaimer", "/disclaimer");

export default function Disclaimer() {
  const html = loadLegalHtmlFromRoot("studiely-disclaimer.html");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <ThemedLegalDocument html={html} badge="Legal & Disclaimer" />
    </>
  );
}
