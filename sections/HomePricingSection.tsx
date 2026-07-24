"use client";

import Image from "next/image";
import Link from "next/link";
import { STUDIELY_APP } from "@/lib/appUrls";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF4D8D";
const TITLE_BLUE = "#3B5BDB";

type Feature = {
  text: string;
  highlight?: boolean;
};

type Plan = {
  name: string;
  price: string;
  priceSuffix?: string;
  orig?: string;
  cad: string;
  feats: Feature[];
  cta: string;
  fine: string;
  href: string;
  badge?: { label: string; bg: string; color: string };
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Free",
    price: "$0",
    cad: "Forever free",
    feats: [
      { text: "5 total generations", highlight: true },
      { text: "Notes (5 only)" },
      { text: "Flashcards (5 only)" },
    ],
    cta: "Get Started",
    fine: "After 5 gens, upgrade.",
    href: STUDIELY_APP.signUp,
  },
  {
    name: "Monthly",
    price: "$9.99",
    priceSuffix: "/mo",
    orig: "$ 14.99",
    cad: "One payment per month of access",
    feats: [
      { text: "Total 100 generations for 1 month", highlight: true },
      { text: "Unlimited all tools" },
      { text: "Export PDF & Word" },
    ],
    cta: "Choose Monthly",
    fine: "Cancel anytime.",
    href: STUDIELY_APP.pricing,
  },
  {
    name: "3 Months",
    price: "$26.99",
    priceSuffix: " total",
    orig: "$ 39.99",
    cad: "$14.99 USD/mo - one payment per 3 months of access",
    feats: [
      { text: "Total 300 generations for 3 months", highlight: true },
      { text: "Everything in Monthly" },
      { text: "Unlimited all tools" },
    ],
    cta: "Choose 3 Months",
    fine: "Cancel anytime.",
    href: STUDIELY_APP.pricing,
  },
  {
    name: "6 Months",
    price: "$49.99",
    priceSuffix: " total",
    orig: "$ 74.99",
    cad: "$14.99 USD/mo - one payment per 6 months of access",
    feats: [
      { text: "Total 600 generations for 6 months", highlight: true },
      { text: "Everything in Monthly" },
      { text: "Unlimited all tools" },
    ],
    cta: "Choose 6 Months",
    fine: "Cancel anytime.",
    href: STUDIELY_APP.pricing,
    badge: { label: "POPULAR", bg: BLUE, color: "#FFFFFF" },
  },
  {
    name: "Annual",
    price: "$89.99",
    priceSuffix: " total",
    orig: "$ 139.99",
    cad: "$14.99 USD/mo - One annual payment",
    feats: [
      { text: "Total 1200 generations for 12 months", highlight: true },
      { text: "Everything in Monthly" },
      { text: "Unlimited all tools" },
    ],
    cta: "Choose Annual",
    fine: "Cancel anytime.",
    href: STUDIELY_APP.pricing,
    badge: { label: "BEST VALUE", bg: PINK, color: "#FFFFFF" },
    featured: true,
  },
];

const LimeCheck = ({ featured = false }: { featured?: boolean }) => (
  <span
    className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full"
    style={{ backgroundColor: LIME }}
    aria-hidden
  >
    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none">
      <path
        d="M2.5 6.2 4.8 8.5 9.5 3.5"
        stroke={featured ? BLUE : "#1E1B4B"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

interface HomePricingSectionProps {
  sectionRef?: React.Ref<HTMLElement>;
}

export const HomePricingSection = ({ sectionRef }: HomePricingSectionProps) => {
  return (
    <section
      id="pricing"
      ref={sectionRef}
      aria-labelledby="homepage-pricing-heading"
      className="bg-bg-base pb-[clamp(1.75rem,4vw,3rem)] pt-0"
    >
      <div className="wrap">
        <h2
          id="homepage-pricing-heading"
          className="mb-[clamp(1.15rem,2.25vw,1.65rem)] text-center font-heading text-[clamp(2rem,3.8vw,3rem)] font-bold tracking-[-0.02em] text-[#1E1B4B]"
        >
          Pricing
        </h2>

        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-4">
          {PLANS.map((plan) => {
            const featured = Boolean(plan.featured);

            return (
              <div
                key={plan.name}
                role="article"
                aria-label={`${plan.name} plan`}
                className={`relative flex h-full flex-col rounded-[24px] px-4 py-4 shadow-[0_14px_32px_rgba(30,27,75,0.12)] transition-[translate,box-shadow] duration-300 ease-out hover:z-10 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(30,27,75,0.18)] motion-reduce:transition-none motion-reduce:hover:translate-none sm:px-5 sm:py-5 ${
                  featured ? "" : "border border-[#ECECF2] bg-white"
                }`}
                style={featured ? { backgroundColor: BLUE } : undefined}
              >
                {plan.name === "Free" && (
                  <Image
                    src="/swirl.svg"
                    alt=""
                    width={360}
                    height={360}
                    unoptimized
                    aria-hidden
                    className="pointer-events-none absolute -right-20 -top-24 z-[1] h-auto w-[16rem] select-none sm:-right-16 sm:-top-20 sm:w-[19rem]"
                    draggable={false}
                  />
                )}

                {plan.badge && (
                  <span
                    className="absolute -right-1.5 -top-2.5 rounded-full px-3 py-1 font-sans text-[9px] font-extrabold uppercase tracking-[0.1em] shadow-[0_4px_12px_rgba(30,27,75,0.18)] sm:right-2 sm:top-[-10px]"
                    style={{ backgroundColor: plan.badge.bg, color: plan.badge.color }}
                  >
                    {plan.badge.label}
                  </span>
                )}

                {/* Fixed header stack keeps titles / strikethrough / prices / cad on one row across cards */}
                <div className="relative z-[2] mb-3 flex shrink-0 flex-col">
                  <h3
                    className="mb-1.5 min-h-[1.35rem] font-sans text-[1.2rem] font-extrabold leading-none sm:min-h-[1.4rem] sm:text-[1.3rem]"
                    style={{ color: featured ? "#FFFFFF" : TITLE_BLUE }}
                  >
                    {plan.name}
                  </h3>

                  <div
                    className={`mb-0.5 flex min-h-[1.125rem] items-center font-heading text-[12px] leading-none line-through ${
                      featured ? "text-white/45" : "text-[#A8A8B5]"
                    }`}
                  >
                    {plan.orig ?? "\u00A0"}
                  </div>

                  <div className="mb-1 flex min-h-[2.1rem] flex-wrap items-baseline gap-x-1 sm:min-h-[2.25rem]">
                    <span
                      className={`font-heading text-[clamp(1.65rem,2.1vw,2.05rem)] font-extrabold leading-none tracking-[-0.03em] ${
                        featured ? "text-white" : "text-[#1E1B4B]"
                      }`}
                    >
                      {plan.price}
                    </span>
                    {plan.priceSuffix && (
                      <span
                        className={`font-heading text-[clamp(1rem,1.35vw,1.2rem)] font-bold leading-none tracking-[-0.02em] ${
                          featured ? "text-white" : "text-[#1E1B4B]"
                        }`}
                      >
                        {plan.priceSuffix}
                      </span>
                    )}
                  </div>

                  <p
                    className={`min-h-[2.25rem] font-sans text-[11px] leading-snug ${
                      featured ? "text-white/65" : "text-[#5B5A6A]"
                    }`}
                  >
                    {plan.cad}
                  </p>
                </div>

                <div
                  className={`mb-3 h-px w-full shrink-0 ${featured ? "bg-white/20" : "bg-[#ECECF2]"}`}
                  aria-hidden
                />

                <ul className="m-0 mb-4 flex list-none flex-col gap-2 p-0">
                  {plan.feats.map((feat) => (
                    <li key={feat.text} className="flex items-start gap-2">
                      <LimeCheck featured={featured} />
                      <span
                        className={`font-sans text-[12px] leading-snug ${
                          featured
                            ? feat.highlight
                              ? "font-semibold text-[#E8FF2F]"
                              : "text-white"
                            : feat.highlight
                              ? "font-medium text-[#3B5BDB]"
                              : "text-[#2A2B36]"
                        }`}
                      >
                        {feat.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`mt-auto inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 font-sans text-[13px] font-bold transition-opacity hover:opacity-90 ${
                    featured ? "" : "text-white"
                  }`}
                  style={{
                    backgroundColor: featured ? LIME : BLUE,
                    color: featured ? BLUE : undefined,
                  }}
                >
                  {plan.cta}
                </Link>

                <span
                  className={`mt-2 block text-center font-sans text-[10px] ${
                    featured ? "text-white/45" : "text-[#A8A8B5]"
                  }`}
                >
                  {plan.fine}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
