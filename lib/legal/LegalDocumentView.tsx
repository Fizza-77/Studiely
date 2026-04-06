import { loadLegalDocument } from "./loadLegalDocument";

export function LegalDocumentView({ file }: { file: string }) {
  const { html } = loadLegalDocument(file);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
