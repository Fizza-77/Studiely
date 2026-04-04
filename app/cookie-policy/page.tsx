import { loadLegalHtml } from "@/lib/loadLegalHtml";

export default function CookiePolicy() {
  const html = loadLegalHtml("studiely-cookie-policy.html");

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
