import type { Metadata } from "next";
import { CurriculumHeroSection } from "@/sections/CurriculumHeroSection";
import { CurriculumPathwayBuilder } from "@/sections/CurriculumPathwayBuilder";
import { CurriculumClosingSection } from "@/sections/CurriculumClosingSection";
import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { buildBreadcrumbSchema } from "@/lib/seo";

const curriculumTitle =
  "Curriculum Pathways — GCSE, IGCSE, IB, US, Australia & Canada";
const curriculumDescription =
  "Choose your curriculum, exam board, and academic pathway. Studiely supports UK, US, IB, Australian, and Canadian students.";

export const metadata: Metadata = {
  title: curriculumTitle,
  description: curriculumDescription,
  alternates: { canonical: `${SITE_URL}/curriculum` },
  openGraph: {
    title: curriculumTitle,
    description: curriculumDescription,
    url: `${SITE_URL}/curriculum`,
    type: "website",
    siteName: "Studiely",
    images: [{ url: DEFAULT_OG_IMAGE_PATH, alt: "Studiely curriculum pathways" }],
  },
  twitter: {
    card: "summary_large_image",
    title: curriculumTitle,
    description: curriculumDescription,
    images: [DEFAULT_OG_IMAGE_PATH],
  },
};

const breadcrumbSchema = buildBreadcrumbSchema("Curriculum", "/curriculum");

export default function CurriculumPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen bg-bg-base">
        <CurriculumHeroSection />
        <CurriculumPathwayBuilder />
        <CurriculumClosingSection />
      </main>
    </>
  );
}
