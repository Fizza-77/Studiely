import { ThemedLegalDocument } from "@/components/ThemedLegalDocument";
import { loadLegalHtmlFromRoot } from "@/lib/legal/loadLegalHtmlFromRoot";
import { buildBreadcrumbSchema } from "@/lib/seo";

const breadcrumbSchema = buildBreadcrumbSchema("Privacy Policy", "/privacy-policy");

export default function PrivacyPolicy() {
  const html = loadLegalHtmlFromRoot("studiely-privacy-policy.html");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <ThemedLegalDocument html={html} badge="Legal & Privacy" />
    </>
  );
}
