import fs from 'fs';
import path from 'path';
import { buildBreadcrumbSchema } from "@/lib/seo";

const breadcrumbSchema = buildBreadcrumbSchema("Privacy Policy", "/privacy-policy");

export default function PrivacyPolicy() {
  const filePath = path.join(process.cwd(), 'legal/studiely-privacy-policy.html');
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