import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import { Footer } from "@/components/Footer";
import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { FAQ_SECTIONS } from "@/lib/faq";
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

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildFaqItemsHtml(sections: ServerFaqSection[]): string {
  return sections
    .map((section) => {
      const itemsHtml = section.items
        .map(
          (item) =>
            `<details class="faq-item group border border-border-lt rounded-lg bg-bg-base/40 p-4 md:p-5">` +
            `<summary class="flex items-start justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">` +
            `<h3 class="text-[14px] md:text-[15px] font-semibold text-navy pr-4">${escapeHtml(item.question)}</h3>` +
            `<span aria-hidden="true" class="mt-[2px] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border-default text-[12px] text-muted transition-transform duration-300 group-open:rotate-180">▼</span>` +
            `</summary>` +
            `<div class="faq-answer-panel grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-300 ease-out group-open:grid-rows-[1fr] group-open:opacity-100">` +
            `<div class="faq-answer overflow-hidden pt-4"><p class="text-[13px] md:text-[14px] text-body leading-[1.75]">${escapeHtml(item.answer)}</p></div>` +
            `</div>` +
            `</details>`
        )
        .join("");

      return (
        `<section class="space-y-4" aria-labelledby="${escapeHtml(section.id)}-title">` +
        `<p id="${escapeHtml(section.id)}-title" class="text-[12px] font-semibold uppercase tracking-[1.4px] text-muted">${escapeHtml(section.title)}</p>` +
        `<p class="text-[12px] text-muted">${escapeHtml(section.intro)}</p>` +
        `<div class="space-y-4">${itemsHtml}</div>` +
        `</section>`
      );
    })
    .join("");
}

export default async function FaqsPage() {
  const sections = await getFaqSections();
  const faqTemplatePath = path.join(
    process.cwd(),
    "content",
    "faqs",
    "studiely-faqs.html"
  );
  const faqTemplate = fs.readFileSync(faqTemplatePath, "utf-8");
  const faqItemsHtml = buildFaqItemsHtml(sections);
  const faqHtml = faqTemplate.replace("{{FAQ_ITEMS}}", `<div class="space-y-8">${faqItemsHtml}</div>`);

  return (
    <>
      <PageHeader
        label="Support & Help"
        title="Frequently Asked Questions (FAQ)"
        sub="Find answers about Studiely AI study tools, curricula, pricing, generations, Nyla, and account security."
        variant="compact"
      />
      <main className="bg-bg-base min-h-screen pt-[32px] pb-[40px]">
        <div dangerouslySetInnerHTML={{ __html: faqHtml }} />
      </main>
      <Footer />
    </>
  );
}
