import fs from 'fs';
import path from 'path';
import { buildBreadcrumbSchema } from "@/lib/seo";

const breadcrumbSchema = buildBreadcrumbSchema("Cookie Policy", "/cookie-policy");

export default function CookiePolicy() {
  const filePath = path.join(process.cwd(), 'legal/studiely-cookie-policy.html');
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
