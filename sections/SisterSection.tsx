"use client";

import Image from "next/image";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";

const ExternalArrow = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6 shrink-0 text-[#C8C8D4] sm:h-7 sm:w-7"
    fill="none"
    aria-hidden
  >
    <path
      d="M7 17 17 7M17 7H9M17 7v8"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden>
    <path
      d="M6 3h7v7M13 3 6 10M9 3H3v10h10V9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ECOSYSTEM_CARDS = [
  {
    name: "Make My Lesson",
    subtitle: "— For Teachers",
    badge: "AI-POWERED LESSON PLANNING",
    badgeBg: LIME,
    badgeColor: BLUE,
    edgeColor: LIME,
    href: "https://makemylesson.ai",
    linkLabel: "Visit Make My Lesson",
    logo: "/logo-makemylesson.png",
    paragraphs: [
      "Generates complete, curriculum-aligned teaching materials from a single topic lesson plans, presentations, activities and assessments.",
      "Make My Lesson is our sister platform built for teachers. Where Studiely supports the student preparing for the exam, Make My Lesson supports the teacher preparing the lesson.",
    ],
  },
  {
    name: "Linguatude",
    subtitle: "— For English Test Preparation",
    badge: "IELTS, TOEFL, PTE AND CAMBRIDGE",
    badgeBg: PINK,
    badgeColor: "#FFFFFF",
    edgeColor: PINK,
    href: "https://linguatude.com",
    linkLabel: "Visit Linguatude",
    logo: "/logo-linguatude.jpg",
    paragraphs: [
      "Built for learners whose next university place, immigration step or career opportunity depends on achieving a target English score.",
      "Linguatude is built for learners whose next university place, immigration step or career opportunity depends on achieving a target English score. Where Studiely supports curriculum study, Linguatude supports the test that opens the next door.",
    ],
  },
] as const;

interface SisterSectionProps {
  sectionRef?: React.Ref<HTMLElement>;
}

export const SisterSection = ({ sectionRef }: SisterSectionProps) => (
  <section ref={sectionRef} className="bg-bg-base pt-[clamp(1rem,2vw,1.5rem)]">
    <div
      className="px-4 py-7 text-center sm:px-6 sm:py-8"
      style={{ backgroundColor: LIME }}
    >
      <h2
        className="mx-auto mb-3 max-w-[900px] font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold leading-[1.15] tracking-[-0.02em]"
        style={{ color: BLUE }}
      >
        Part of a Wider EdTech Family
      </h2>
      <p
        className="mx-auto w-full max-w-[22rem] text-center font-sans text-[clamp(0.8rem,0.65rem+0.5vw,1.1rem)] leading-snug sm:max-w-none sm:whitespace-nowrap"
        style={{ color: BLUE }}
      >
        Studiely is one of three platforms built by Skyen Solutions to support
        learning at every stage.
      </p>
    </div>

    <div className="wrap py-[clamp(1.25rem,2.5vw,1.75rem)]">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {ECOSYSTEM_CARDS.map((card) => (
          <article
            key={card.name}
            className="flex flex-col rounded-[28px] border-b-[5px] bg-white px-7 py-8 shadow-[0_14px_32px_rgba(30,27,75,0.1)] sm:px-8 sm:py-9"
            style={{ borderColor: card.edgeColor }}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full sm:h-14 sm:w-14"
                style={{ backgroundColor: BLUE }}
              >
                <Image
                  src={card.logo}
                  alt=""
                  width={56}
                  height={56}
                  unoptimized
                  className="h-full w-full object-cover"
                  aria-hidden
                />
              </span>
              <ExternalArrow />
            </div>

            <h3 className="mb-4 flex flex-wrap items-baseline gap-x-2 font-jakarta font-extrabold leading-tight text-[#1E1B4B]">
              <span className="text-[clamp(1.35rem,2vw,1.65rem)]">
                {card.name}
              </span>
              <span className="text-[clamp(1rem,1.35vw,1.15rem)] font-bold text-[#3D3D4A]">
                {card.subtitle}
              </span>
            </h3>

            <span
              className="mb-3 inline-flex w-fit rounded-full px-3.5 py-1.5 font-heading text-[9px] font-extrabold uppercase tracking-[0.1em] sm:text-[10px]"
              style={{ backgroundColor: card.badgeBg, color: card.badgeColor }}
            >
              {card.badge}
            </span>

            <div className="mb-8 flex flex-col gap-4">
              {card.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="m-0 font-sans text-[14px] leading-relaxed text-[#5B5A6A] sm:text-[15px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <a
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 font-sans text-[15px] font-semibold text-[#2563EB] transition-opacity hover:opacity-80"
            >
              {card.linkLabel}
              <ExternalLinkIcon />
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);
