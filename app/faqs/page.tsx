import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { STUDIELY_APP } from "@/lib/appUrls";
import { FaqItem } from "@/components/FaqItem";
import { PageHeader } from "@/components/PageHeader";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { FAQ_PAGE_JSON_LD } from "@/lib/faqSchema";
import { FAQ_SECTIONS } from "@/lib/faq";
import { LEGAL_ROUTES, complianceLinkClass } from "@/lib/legalRoutes";

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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
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
        <div className="wrap max-w-[1120px] mx-auto px-4">
          <section
            className="mb-8 bg-white border border-border-default rounded-xl p-6 md:p-8 shadow-[0_6px_24px_rgba(0,0,0,0.03)]"
            aria-labelledby="faq-intro-heading"
          >
            <h2 id="faq-intro-heading" className="font-serif text-[20px] md:text-[22px] text-navy mb-3">
              Curriculum-aligned AI study — how Studiely helps students
            </h2>
            <div className="text-[13px] md:text-[14px] text-body leading-[1.75] space-y-4">
              <p>
                Studiely is an{" "}
                <strong className="font-semibold text-navy">AI-powered study platform</strong> built for school
                students from Grade 1 through Grade 12. It starts from your exact academic route — curriculum, exam
                board, grade, subject, and topic — then delivers{" "}
                <strong className="font-semibold text-navy">Summary Notes</strong>,{" "}
                <Link href="/features" className="text-teal hover:text-teal-dk underline underline-offset-2">
                  Flashcards
                </Link>
                , <strong className="font-semibold text-navy">Quiz</strong>, and{" "}
                <strong className="font-semibold text-navy">Exam Practice</strong> in one place, without generic answers
                that ignore your syllabus.
              </p>
              <p>
                This FAQ covers accounts, free vs Premium, generations, curricula (including British, IB, US,
                Canadian, and Australian),{" "}
                <Link href="/nyla" className="text-teal hover:text-teal-dk underline underline-offset-2">
                  Nyla
                </Link>
                , rewards, our{" "}
                <Link href={LEGAL_ROUTES.privacyPolicy} className={complianceLinkClass}>
                  Privacy Policy
                </Link>
                , and support. For plan options, see our{" "}
                <a
                  href={STUDIELY_APP.pricing}
                  className="text-teal hover:text-teal-dk underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  pricing page
                </a>
                . For articles and guides, visit the{" "}
                <Link href="/blog" className="text-teal hover:text-teal-dk underline underline-offset-2">
                  Studiely blog
                </Link>
                . New here? Start from the{" "}
                <Link href="/" className="text-teal hover:text-teal-dk underline underline-offset-2">
                  homepage
                </Link>{" "}
                or browse the sections below.
              </p>
            </div>
          </section>

          {FAQ_SECTIONS.map((section) => (
            <section
              key={section.id}
              aria-labelledby={section.id}
              className="bg-white border border-border-default rounded-xl p-6 md:p-8 shadow-[0_6px_24px_rgba(0,0,0,0.03)] mb-8"
            >
              <h2 id={section.id} className="text-[18px] md:text-[20px] font-serif text-navy mb-1.5">
                {section.title}
              </h2>
              <p className="text-[12px] text-muted mb-5">{section.intro}</p>
              <dl className="space-y-3">
                {section.items.map((item) => (
                  <FaqItem key={item.question} question={item.question}>
                    {item.answer}
                  </FaqItem>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
