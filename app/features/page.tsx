import type { Metadata } from "next";
import { HomePageContent } from "@/components/HomePageContent";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Features — AI Study Tools",
  description:
    "Notes, flashcards, quizzes, and exam-style questions — curriculum-aligned AI study tools on one platform.",
  alternates: { canonical: `${SITE_URL}/` },
};

export default function FeaturesPage() {
  return <HomePageContent scrollToFeaturesOnMount />;
}
