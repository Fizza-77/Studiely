import { loadLegalHtml } from "@/lib/loadLegalHtml";

export default function PrivacyPolicy() {
  const html = loadLegalHtml("studiely-privacy-policy.html");

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}