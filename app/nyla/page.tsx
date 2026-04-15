import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { NylaSection } from "@/sections/NylaSection";
import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { STUDIELY_APP } from "@/lib/appUrls";
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
      <PageHeader
        label="Nyla AI"
        title="Your Personal AI Study Assistant"
        sub="See how Nyla explains concepts, answers questions, and connects directly to your Study Tools so every topic feels less confusing and more manageable."
        eyebrowColorClass="text-indigo"
        variant="compact"
      />
      <main className="bg-bg-base min-h-screen pt-[32px] pb-[40px]">
        <div className="wrap max-w-[1120px] mx-auto px-4 pb-10">
          <section
            className="bg-white border border-border-default rounded-xl p-6 md:p-8 shadow-[0_6px_24px_rgba(0,0,0,0.03)]"
            aria-labelledby="nyla-intro-heading"
          >
            <h2 id="nyla-intro-heading" className="font-serif text-[20px] md:text-[22px] text-navy mb-3">
              Why students use Nyla for AI learning &amp; revision
            </h2>
            <div className="text-[13px] md:text-[14px] text-body leading-[1.75] space-y-4">
              <p>
                Most generic chat tools are not built for school: they guess your level, ignore mark schemes, and drift
                off-topic.{" "}
                <strong className="font-semibold text-navy">Nyla</strong> is different—she is Studiely’s built-in{" "}
                <strong className="font-semibold text-navy">AI study assistant</strong> that uses your selected
                curriculum, exam board, and grade so explanations stay within syllabus expectations. Whether you are
                revising for <strong className="font-semibold text-navy">IGCSE</strong>, IB, GCSE, or other international
                programs, you get answers you can trust as a starting point, then turn into{" "}
                <strong className="font-semibold text-navy">flashcards</strong>, quizzes, or structured{" "}
                <strong className="font-semibold text-navy">exam practice</strong> inside the same app.
              </p>
              <p>
                Parents and students often ask how this relates to a human tutor. Nyla does not replace your teacher or
                past papers—but she is there at midnight when a question blocks you, and she connects cleanly to the rest
                of Studiely’s <strong className="font-semibold text-navy">student tools</strong> so revision stays
                organised. Explore{" "}
                      <Link href="/features#features" className="text-teal hover:text-teal-dk underline underline-offset-2">
                  all features
                </Link>
                , read the{" "}
                <Link href="/faqs" className="text-teal hover:text-teal-dk underline underline-offset-2">
                  FAQ
                </Link>
                , compare plans on{" "}
                <a
                  href={STUDIELY_APP.pricing}
                  className="text-teal hover:text-teal-dk underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  pricing
                </a>
                , or browse study tips on the{" "}
                <Link href="/blog" className="text-teal hover:text-teal-dk underline underline-offset-2">
                  blog
                </Link>
                . You can always return to the{" "}
                <Link href="/" className="text-teal hover:text-teal-dk underline underline-offset-2">
                  Studiely homepage
                </Link>{" "}
                for the full product story.
              </p>
            </div>
          </section>
        </div>
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

