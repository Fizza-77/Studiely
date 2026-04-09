import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { PricingSection } from "@/sections/PricingSection";
import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { STUDIELY_APP } from "@/lib/appUrls";
import { buildBreadcrumbSchema, buildPricingPageSchema } from "@/lib/seo";
import { Button } from "@/components/Button";

const title = "Studiely Pricing — AI Study Assistant, Flashcards & Exam Practice";
const description =
  "Compare Free and Premium plans for Studiely: AI learning, IGCSE-friendly student tools, flashcards, quizzes, " +
  "exam practice, and Nyla AI tutor. Start free, upgrade when you are ready.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/app/pricing` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/app/pricing`,
    siteName: "Studiely",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE_PATH, alt: "Studiely pricing" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [DEFAULT_OG_IMAGE_PATH],
  },
};

export default function AppPricingPage() {
  const breadcrumbSchema = buildBreadcrumbSchema("Pricing", "/app/pricing");
  const pricingSchema = buildPricingPageSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <PageHeader
        label="Plans"
        title="Studiely pricing — simple plans for serious revision"
        sub="Start free with credits, then choose Monthly, quarterly, 6-month, or Annual Premium. Cancel anytime."
        variant="compact"
      />
      <main className="bg-bg-base min-h-screen pt-[32px] pb-[40px]">
        <div className="wrap max-w-[1120px] mx-auto px-4">
          <section
            className="mb-10 bg-white border border-border-default rounded-xl p-6 md:p-8 shadow-[0_6px_24px_rgba(0,0,0,0.03)]"
            aria-labelledby="pricing-intro-heading"
          >
            <h2 id="pricing-intro-heading" className="font-serif text-[20px] md:text-[22px] text-navy mb-3">
              AI learning &amp; student tools — what your plan includes
            </h2>
            <div className="text-[13px] md:text-[14px] text-body leading-[1.75] space-y-4">
              <p>
                Studiely bundles everything serious students need in one place: curriculum-aware{" "}
                <strong className="font-semibold text-navy">AI learning</strong> for notes and explanations,{" "}
                <strong className="font-semibold text-navy">flashcards</strong> for memorisation, quizzes for recall, and
                structured <strong className="font-semibold text-navy">exam practice</strong> so you can rehearse under
                realistic conditions. The Free tier lets you try core{" "}
                <strong className="font-semibold text-navy">student tools</strong> with a small credit allowance; Premium
                unlocks ongoing generation within a fair-usage policy, exports, analytics, streaks, and priority access to{" "}
                <Link href="/nyla" className="text-teal hover:text-teal-dk underline underline-offset-2">
                  Nyla
                </Link>
                , your on-demand <strong className="font-semibold text-navy">IGCSE tutor</strong>-style assistant that
                respects your board and grade.
              </p>
              <p>
                Use this page to compare headline prices. For billing in your region, renewals, and add-ons (such as
                Exam Practice packs), open the app or read the{" "}
                <Link href="/faqs" className="text-teal hover:text-teal-dk underline underline-offset-2">
                  FAQs
                </Link>
                . Looking for study ideas? Visit the{" "}
                <Link href="/blog" className="text-teal hover:text-teal-dk underline underline-offset-2">
                  blog
                </Link>
                . Return to the{" "}
                <Link href="/" className="text-teal hover:text-teal-dk underline underline-offset-2">
                  Studiely homepage
                </Link>{" "}
                for a full feature tour.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={STUDIELY_APP.home} variant="solid" className="py-2.5 px-5 text-[13px]">
                Open app &amp; subscribe
              </Button>
              <Button href={STUDIELY_APP.signUp} variant="outline" className="py-2.5 px-5 text-[13px]">
                Create free account
              </Button>
            </div>
          </section>
        </div>
        <PricingSection compact />
      </main>
      <Footer />
    </>
  );
}
