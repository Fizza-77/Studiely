import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { NylaSection } from "@/sections/NylaSection";
import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Nyla — Your 24/7 AI Tutor for GCSE, IB & All Curricula",
  description:
    "Nyla knows your curriculum, exam board and grade level. Ask anything about your syllabus and get instant, accurate answers anytime.",
  alternates: { canonical: "https://www.studiely.com/nyla" },
  openGraph: {
    title: "Nyla — Studiely’s Built-In AI Tutor",
    description:
      "Help when you’re stuck on a topic, without waiting for chat that ignores your syllabus.",
    url: `${SITE_URL}/nyla`,
    siteName: "Studiely",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE_PATH, alt: "Studiely — Nyla AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nyla AI — Studiely",
    description:
      "Natural-language help that respects your curriculum, grade, and exam expectations.",
    images: [DEFAULT_OG_IMAGE_PATH],
  },
};

const breadcrumbSchema = buildBreadcrumbSchema("Nyla", "/nyla");

export default function NylaFeaturePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <PageHeader
        label="Nyla AI"
        title="Your Personal AI Study Assistant"
        sub="See how Nyla explains concepts, answers questions, and connects directly to your Study Tools so every topic feels less confusing and more manageable."
        eyebrowColorClass="text-indigo"
        variant="compact"
      />
      <main className="bg-bg-base min-h-screen pt-[32px] pb-[40px]">
        <NylaSection />
        <section className="bg-white border-t border-border-default">
          <div className="wrap py-12 md:py-16 grid gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <h2 className="font-serif text-[22px] text-navy mb-3">
                How Nyla fits into your study flow
              </h2>
              <p className="text-[13px] text-muted">
                Nyla is always just one tap away — inside Notes, Flashcards, Quizzes, and Exam Practice —
                so help is available exactly when you get stuck.
              </p>
            </div>
            <div className="md:col-span-2 grid gap-4 text-[13px] text-muted">
              <div className="border border-border-default rounded-lg p-4">
                <h3 className="font-semibold text-[14px] text-navy mb-1">
                  1. Ask questions in natural language
                </h3>
                <p>
                  Type questions the way you would ask a tutor. Nyla adapts the explanation to your
                  curriculum, grade, and topic.
                </p>
              </div>
              <div className="border border-border-default rounded-lg p-4">
                <h3 className="font-semibold text-[14px] text-navy mb-1">
                  2. Turn answers into study assets
                </h3>
                <p>
                  From any explanation, you can quickly generate notes, flashcards, quizzes, or exam-style
                  questions so your learning turns into practice.
                </p>
              </div>
              <div className="border border-border-default rounded-lg p-4">
                <h3 className="font-semibold text-[14px] text-navy mb-1">
                  3. Stay aligned with your syllabus
                </h3>
                <p>
                  Nyla is guided by your selected curriculum and grade, helping keep content at the right
                  depth and aligned to real exam expectations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

