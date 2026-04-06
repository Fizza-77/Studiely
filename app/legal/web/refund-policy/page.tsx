import type { Metadata } from "next";
import { LegalDocumentView } from "@/lib/legal/LegalDocumentView";
import { legalPageMetadata } from "@/lib/legal/legalPageMetadata";

const FILE = "web/refund-policy.html";
const PATH = "/legal/web/refund-policy";

export const metadata: Metadata = legalPageMetadata(FILE, PATH);

export default function LegalWebRefundPolicyPage() {
  return <LegalDocumentView file={FILE} />;
}
