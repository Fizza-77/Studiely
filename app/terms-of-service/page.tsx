import { loadLegalHtml } from "@/lib/loadLegalHtml";

export default function TermsOfService() {
  const html = loadLegalHtml("V1.4_Terms_of_Service_Studiely.html");

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
