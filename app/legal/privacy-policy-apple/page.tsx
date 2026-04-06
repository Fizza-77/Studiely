import type { Metadata } from "next";
import { LegalDocumentView } from "@/lib/legal/LegalDocumentView";
import { legalPageMetadata } from "@/lib/legal/legalPageMetadata";

const FILE = "privacy-policy-apple.html";
const PATH = "/legal/privacy-policy-apple";

export const metadata: Metadata = legalPageMetadata(FILE, PATH);

export default function LegalPrivacyPolicyApplePage() {
  return <LegalDocumentView file={FILE} />;
}
