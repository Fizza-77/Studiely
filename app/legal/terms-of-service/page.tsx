import type { Metadata } from "next";
import { LegalDocumentView } from "@/lib/legal/LegalDocumentView";
import { legalPageMetadata } from "@/lib/legal/legalPageMetadata";

const FILE = "terms-of-service.html";
const PATH = "/legal/terms-of-service";

export const metadata: Metadata = legalPageMetadata(FILE, PATH);

export default function LegalTermsOfServicePage() {
  return <LegalDocumentView file={FILE} />;
}
