import fs from 'fs';
import path from 'path';
import { buildBreadcrumbSchema } from "@/lib/seo";

const breadcrumbSchema = buildBreadcrumbSchema("Terms of Service", "/terms-of-service");

export default function TermsOfService() {
  const filePath = path.join(
    process.cwd(),
    'legal/V1.4_Terms_of_Service_Studiely.html'
  );
  const html = fs.readFileSync(filePath, 'utf-8');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
