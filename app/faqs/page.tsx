import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { STUDIELY_APP } from "@/lib/appUrls";
import { PageHeader } from "@/components/PageHeader";
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

type ServerFaqItem = {
  question: string;
  answer: string;
};

type ServerFaqSection = {
  id: string;
  title: string;
  intro: string;
  items: ServerFaqItem[];
};

async function getFaqSections(): Promise<ServerFaqSection[]> {
  return FAQ_SECTIONS.map((section) => ({
    id: section.id,
    title: section.title,
    intro: section.intro,
    items: section.items.map((item) => ({
      question: item.question,
      answer: item.schemaText,
    })),
  }));
}

function buildFaqJsonLd(sections: ServerFaqSection[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sections.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      }))
    ),
  };
}

export default async function FaqsPage() {
  const sections = await getFaqSections();
  const faqJsonLd = buildFaqJsonLd(sections);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHeader
        label="Support & Help"
        title="Frequently Asked Questions (FAQ)"
        sub="Find answers about Studiely AI study tools, curricula, pricing, generations, Nyla, and account security."
        variant="compact"
      />
      <main className="bg-bg-base min-h-screen pt-[32px] pb-[40px]">
        <section className="faq-section wrap max-w-[1120px] mx-auto px-4 bg-white border border-border-default rounded-xl p-6 md:p-8 shadow-[0_6px_24px_rgba(0,0,0,0.03)]">
          <h2 className="font-serif text-[20px] md:text-[22px] text-navy mb-3">FAQs</h2>
          <div className="text-[13px] md:text-[14px] text-body leading-[1.75] space-y-4 mb-8">
            <p>
              Studiely is an <strong className="font-semibold text-navy">AI-powered study platform</strong> built for
              school students from Grade 1 through Grade 12. It starts from your exact academic route — curriculum,
              exam board, grade, subject, and topic — then delivers <strong className="font-semibold text-navy">Summary
              Notes</strong>, <Link href="/features" className="text-teal hover:text-teal-dk underline underline-offset-2">Flashcards</Link>, <strong className="font-semibold text-navy">Quiz</strong>, and <strong className="font-semibold text-navy">Exam Practice</strong> in one place, without generic answers that ignore your syllabus.
            </p>
            <p>
              This FAQ covers accounts, free vs Premium, generations, curricula (including British, IB, US, Canadian,
              and Australian), <Link href="/nyla" className="text-teal hover:text-teal-dk underline underline-offset-2">Nyla</Link>, rewards, our <Link href={LEGAL_ROUTES.privacyPolicy} className={complianceLinkClass}>Privacy Policy</Link>, and support. For plan options, see our <a href={STUDIELY_APP.pricing} className="text-teal hover:text-teal-dk underline underline-offset-2" target="_blank" rel="noopener noreferrer">pricing page</a>. For articles and guides, visit the <Link href="/blog" className="text-teal hover:text-teal-dk underline underline-offset-2">Studiely blog</Link>. New here? Start from the <Link href="/" className="text-teal hover:text-teal-dk underline underline-offset-2">homepage</Link> or browse the questions below.
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.id} className="space-y-4" aria-labelledby={`${section.id}-title`}>
                <p className="text-[12px] font-semibold uppercase tracking-[1.4px] text-muted">
                  <span id={`${section.id}-title`}>{section.title}</span>
                </p>
                <p className="text-[12px] text-muted">{section.intro}</p>

                <div className="space-y-4">
                  {section.items.map((item) => (
                    <details
                      key={item.question}
                      className="faq-item group border border-border-lt rounded-lg bg-bg-base/40 p-4 md:p-5"
                    >
                      <summary className="flex items-start justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                        <h3 className="text-[14px] md:text-[15px] font-semibold text-navy pr-4">
                          {item.question}
                        </h3>
                        <span
                          aria-hidden="true"
                          className="mt-[2px] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border-default text-[12px] text-muted transition-transform duration-300 group-open:rotate-180"
                        >
                          ▼
                        </span>
                      </summary>
                      <div className="faq-answer-panel grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-300 ease-out group-open:grid-rows-[1fr] group-open:opacity-100">
                        <div className="faq-answer overflow-hidden pt-4">
                          <p className="text-[13px] md:text-[14px] text-body leading-[1.75]">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
