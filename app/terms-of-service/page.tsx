import { ThemedLegalDocument } from "@/components/ThemedLegalDocument";
import { loadLegalHtmlFromRoot } from "@/lib/legal/loadLegalHtmlFromRoot";
import { buildBreadcrumbSchema } from "@/lib/seo";

const breadcrumbSchema = buildBreadcrumbSchema("Terms of Service", "/terms-of-service");

export default function TermsOfService() {
  const html = loadLegalHtmlFromRoot("V1.4_Terms_of_Service_Studiely.html");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <ThemedLegalDocument html={html} badge="Legal & Terms" />
    </>
  );
}
