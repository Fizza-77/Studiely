import type { Metadata } from "next";
import { NylaFooter } from "@/components/NylaFooter";
import { NylaHeroSection } from "@/sections/NylaHeroSection";
import { NylaWhySection } from "@/sections/NylaWhySection";
import { NylaMeetSection } from "@/sections/NylaMeetSection";
import { NylaStudyFlowSection } from "@/sections/NylaStudyFlowSection";
import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { buildBreadcrumbSchema, buildNylaFeatureSchema } from "@/lib/seo";

const nylaTitle = "Nyla — AI Tutor & Study Assistant for IGCSE, IB & Exam Practice";
const nylaDescription =
  "Meet Nyla: Studiely’s AI tutor for syllabus-aware help, flashcards, and exam practice. " +
  "Built for students who want AI learning that matches their curriculum and grade.";

export const metadata: Metadata = {
  title: nylaTitle,
  description: nylaDescription,
  alternates: { canonical: `${SITE_URL}/nyla` },
  openGraph: {
    title: "Nyla — Studiely’s AI Tutor for Curriculum-Aligned Learning",
    description: nylaDescription,
    url: `${SITE_URL}/nyla`,
    siteName: "Studiely",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE_PATH, alt: "Studiely — Nyla AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nyla — AI Tutor for IGCSE & IB",
    description: nylaDescription,
    images: [DEFAULT_OG_IMAGE_PATH],
  },
};

const breadcrumbSchema = buildBreadcrumbSchema("Nyla", "/nyla");

export default function NylaFeaturePage() {
  const nylaPageSchema = buildNylaFeatureSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(nylaPageSchema),
        }}
      />
      <main className="min-h-screen bg-bg-base">
        <NylaHeroSection />
        <NylaWhySection />
        <NylaMeetSection />
        <NylaStudyFlowSection />
      </main>
      <NylaFooter />
    </>
  );
}
