import type { Metadata } from "next";
import { LegalDocumentView } from "@/lib/legal/LegalDocumentView";
import { legalPageMetadata } from "@/lib/legal/legalPageMetadata";

const FILE = "delete-account-and-data.html";
const PATH = "/legal/delete-account-and-data";

export const metadata: Metadata = legalPageMetadata(FILE, PATH);

export default function LegalDeleteAccountPage() {
  return <LegalDocumentView file={FILE} />;
}
