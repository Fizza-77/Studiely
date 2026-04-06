import type { Metadata } from "next";
import { LegalDocumentView } from "@/lib/legal/LegalDocumentView";
import { legalPageMetadata } from "@/lib/legal/legalPageMetadata";

const FILE = "privacy-policy.html";
const PATH = "/legal/privacy-policy";

export const metadata: Metadata = legalPageMetadata(FILE, PATH);

export default function LegalPrivacyPolicyPage() {
  return <LegalDocumentView file={FILE} />;
}
