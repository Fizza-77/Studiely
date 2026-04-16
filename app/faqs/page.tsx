import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { FAQ_SECTIONS } from "@/lib/faq";
import { FAQ_PAGE_JSON_LD } from "@/lib/faqSchema";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { FaqItem } from "@/components/FaqItem";
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
      <PageHeader
        label="Support & Help"
        title="Frequently Asked Questions (FAQ)"
        sub="Find answers about Studiely AI study tools, curricula, pricing, generations, Nyla, and account security."
        variant="compact"
      />
      <main className="bg-bg-base min-h-screen pt-[32px] pb-[40px]">
        <div className="wrap max-w-[1120px] mx-auto px-4 space-y-8">
          {FAQ_SECTIONS.map((section) => (
            <section key={section.id} className="space-y-4" aria-labelledby={`${section.id}-title`}>
              <p
                id={`${section.id}-title`}
                className="text-[12px] font-semibold uppercase tracking-[1.4px] text-muted"
              >
                {section.title}
              </p>
              <p className="text-[12px] text-muted">{section.intro}</p>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <FaqItem key={item.question} question={item.question}>
                    {item.answer}
                  </FaqItem>
                ))}
              </div>
            </section>
          ))}

          <section className="mt-10 bg-white border border-border-default rounded-xl p-6 md:p-8 shadow-[0_6px_24px_rgba(0,0,0,0.03)]">
            <h2 className="font-serif text-[20px] md:text-[22px] text-navy mb-2">
              Still need help?
            </h2>
            <p className="text-[13px] md:text-[14px] text-body leading-[1.75] mb-5">
              If you couldn&apos;t find what you needed, contact the Studiely team — we typically respond within 24
              hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-navy text-white px-5 py-3 text-[13px] font-semibold hover:bg-navy/90 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-lg border border-border-default bg-white text-navy px-5 py-3 text-[13px] font-semibold hover:border-navy transition-colors"
              >
                Back to Homepage
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
