import { ThemedLegalDocument } from "@/components/ThemedLegalDocument";
import { loadLegalHtmlFromRoot } from "@/lib/legal/loadLegalHtmlFromRoot";
import { buildBreadcrumbSchema } from "@/lib/seo";

const breadcrumbSchema = buildBreadcrumbSchema("Cookie Policy", "/cookie-policy");

export default function CookiePolicy() {
  const html = loadLegalHtmlFromRoot("studiely-cookie-policy.html");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <ThemedLegalDocument html={html} badge="Legal & Cookies" />
    </>
  );
}
