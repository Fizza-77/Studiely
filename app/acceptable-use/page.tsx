import { loadLegalHtml } from "@/lib/loadLegalHtml";

export default function AcceptableUsePolicy() {
  const html = loadLegalHtml("studiely-acceptable-use-policy.html");

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
