import type { Metadata } from "next";
import fs from 'fs';
import path from 'path';
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { buildBreadcrumbSchema } from "@/lib/seo";

const LEGAL_DOCS = {
  "privacy-policy": {
    file: "studiely-privacy-policy.html",
    title: "Privacy Policy",
  },
  "terms-of-service": {
    file: "V1.4_Terms_of_Service_Studiely.html",
    title: "Terms of Service",
  },
  disclaimer: {
    file: "studiely-disclaimer.html",
    title: "Disclaimer",
  },
  "cookie-policy": {
    file: "studiely-cookie-policy.html",
    title: "Cookie Policy",
  },
  "acceptable-use": {
    file: "studiely-acceptable-use-policy.html",
    title: "Acceptable Use Policy",
  },
} as const;

type DocSlug = keyof typeof LEGAL_DOCS;

type PageProps = {
  params: { doc: string };
};

export function generateStaticParams(): { doc: string }[] {
  return (Object.keys(LEGAL_DOCS) as DocSlug[]).map((doc) => ({ doc }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: PageProps): Metadata {
  const slug = params.doc as DocSlug;
  const entry = LEGAL_DOCS[slug];
  if (!entry) return { title: "Legal" };

  const canonicalPath = `/${slug}`;
  return {
    title: entry.title,
    alternates: {
      canonical: `${SITE_URL}${canonicalPath}`,
    },
  };
}

export default function LegalDocPage({ params }: PageProps) {
  const slug = params.doc as DocSlug;
  const entry = LEGAL_DOCS[slug];
  if (!entry) notFound();

  const canonicalPath = `/${slug}`;
  const breadcrumbSchema = buildBreadcrumbSchema(entry.title, canonicalPath);
  const filePath = path.join(process.cwd(), 'legal', entry.file);
  const html = fs.readFileSync(filePath, 'utf-8');
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
