import fs from 'fs';
import path from 'path';
import { buildBreadcrumbSchema } from "@/lib/seo";

const breadcrumbSchema = buildBreadcrumbSchema("Acceptable Use Policy", "/acceptable-use");

export default function AcceptableUsePolicy() {
  const filePath = path.join(
    process.cwd(),
    'legal/studiely-acceptable-use-policy.html'
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
