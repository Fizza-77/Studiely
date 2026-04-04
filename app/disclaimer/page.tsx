import { loadLegalHtml } from "@/lib/loadLegalHtml";

export default function Disclaimer() {
  const html = loadLegalHtml("studiely-disclaimer.html");

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
