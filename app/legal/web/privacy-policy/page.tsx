import type { Metadata } from "next";
import { LegalDocumentView } from "@/lib/legal/LegalDocumentView";
import { legalPageMetadata } from "@/lib/legal/legalPageMetadata";

const FILE = "web/privacy-policy.html";
const PATH = "/legal/web/privacy-policy";

export const metadata: Metadata = legalPageMetadata(FILE, PATH);

export default function LegalWebPrivacyPolicyPage() {
  return <LegalDocumentView file={FILE} />;
}
