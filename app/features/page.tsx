import type { Metadata } from "next";
import { HomePageContent } from "@/components/HomePageContent";
import { SITE_URL } from "@/lib/site";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Features — AI Study Tools",
  description:
    "Notes, flashcards, quizzes, and exam-style questions — curriculum-aligned AI study tools on one platform.",
  alternates: { canonical: `${SITE_URL}/` },
};

const breadcrumbSchema = buildBreadcrumbSchema("Features", "/features");

export default function FeaturesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <HomePageContent scrollToFeaturesOnMount />
    </>
  );
}
