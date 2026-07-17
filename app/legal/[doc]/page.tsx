import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ThemedLegalDocument } from "@/components/ThemedLegalDocument";
import { loadLegalHtmlFromRoot } from "@/lib/legal/loadLegalHtmlFromRoot";
import { SITE_URL } from "@/lib/site";
import { buildBreadcrumbSchema } from "@/lib/seo";

const LEGAL_DOCS = {
  "privacy-policy": {
    file: "studiely-privacy-policy.html",
    title: "Privacy Policy",
    badge: "Legal & Privacy",
  },
  "terms-of-service": {
    file: "V1.4_Terms_of_Service_Studiely.html",
    title: "Terms of Service",
    badge: "Legal & Terms",
  },
  disclaimer: {
    file: "studiely-disclaimer.html",
    title: "Disclaimer",
    badge: "Legal & Disclaimer",
  },
  "cookie-policy": {
    file: "studiely-cookie-policy.html",
    title: "Cookie Policy",
    badge: "Legal & Cookies",
  },
  "acceptable-use": {
    file: "studiely-acceptable-use-policy.html",
    title: "Acceptable Use Policy",
    badge: "Legal & Policies",
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
  const html = loadLegalHtmlFromRoot(entry.file);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <ThemedLegalDocument html={html} badge={entry.badge} />
    </>
  );
}
