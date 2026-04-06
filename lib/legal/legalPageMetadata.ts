import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { loadLegalDocument } from "./loadLegalDocument";

export function legalPageMetadata(
  file: string,
  pathname: string
): Metadata {
  const doc = loadLegalDocument(file);
  const url = `${SITE_URL}${pathname}`;
  return {
    title: { absolute: doc.title },
    description: doc.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      title: doc.title,
      description: doc.description,
      url,
      siteName: "Studiely",
    },
  };
}
