import type { Metadata } from "next";
import { FaqPageContent } from "@/components/FaqPageContent";
import { FaqSiteFooter } from "@/components/FaqSiteFooter";
import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { FaqHeroSection } from "@/sections/FaqHeroSection";
import { FAQ_SECTIONS } from "@/lib/faq";
import { FAQ_PAGE_JSON_LD } from "@/lib/faqSchema";
import { buildBreadcrumbSchema } from "@/lib/seo";
import "./faq.module.css";

const faqTitle = "Studiely FAQs — AI Study Platform, Curricula & Student Tools";
const faqDescription =
  "Answers about Studiely: curriculum-aligned AI study tools, summaries, flashcards, quizzes, exam practice, " +
  "free vs Premium, Nyla, generations, pricing, and privacy — for students and parents.";

export const metadata: Metadata = {
  title: faqTitle,
  description: faqDescription,
  alternates: { canonical: `${SITE_URL}/faqs` },
  openGraph: {
    title: "Studiely FAQs — AI Study Platform & Exam Prep",
    description: faqDescription,
    url: `${SITE_URL}/faqs`,
    type: "website",
    siteName: "Studiely",
    images: [{ url: DEFAULT_OG_IMAGE_PATH, alt: "Studiely FAQs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studiely FAQs — AI Learning & Student Tools",
    description: faqDescription,
    images: [DEFAULT_OG_IMAGE_PATH],
  },
};

const breadcrumbSchema = buildBreadcrumbSchema("FAQs", "/faqs");

export default function FaqsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_PAGE_JSON_LD) }}
      />
      <div className="font-jakarta">
        <FaqHeroSection />
        <main className="min-h-screen overflow-x-clip bg-bg-base">
          <FaqPageContent sections={FAQ_SECTIONS} />
        </main>
        <FaqSiteFooter />
      </div>
    </>
  );
}
