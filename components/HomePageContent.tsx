"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRef, useEffect } from "react";
import { STUDIELY_APP } from "@/lib/appUrls";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/sections/HeroSection";
import { StatsSection } from "@/sections/StatsSection";

const HowItWorksSection = dynamic(
  () => import("@/sections/HowItWorksSection").then((m) => m.HowItWorksSection),
  { ssr: true }
);
const NylaSection = dynamic(() => import("@/sections/NylaSection").then((m) => m.NylaSection), {
  ssr: true,
});
const SupportedCountriesSection = dynamic(
  () => import("@/sections/SupportedCountriesSection").then((m) => m.SupportedCountriesSection),
  { ssr: true }
);
const RewardsProgressSection = dynamic(
  () => import("@/sections/RewardsProgressSection").then((m) => m.RewardsProgressSection),
  { ssr: true }
);
const ReviewsSection = dynamic(() => import("@/sections/ReviewsSection").then((m) => m.ReviewsSection), {
  ssr: true,
});
const SisterSection = dynamic(() => import("@/sections/SisterSection").then((m) => m.SisterSection), {
  ssr: true,
});
const CTASection = dynamic(() => import("@/sections/CTASection").then((m) => m.CTASection), {
  ssr: true,
});

type HomePageContentProps = {
  /** When true (e.g. `/features` route), scroll to the hero after mount. */
  scrollToHeroOnMount?: boolean;
};

export function HomePageContent({ scrollToHeroOnMount = false }: HomePageContentProps) {
  const nylaHref = "/nyla";
  const nylaRef = useRef<HTMLElement>(null);
  const curriculumRef = useRef<HTMLElement>(null);
  const rewardsRef = useRef<HTMLElement>(null);
  const reviewsRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);
  const sisterRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!scrollToHeroOnMount) return;
    const scroll = () => {
      document.getElementById("hero")?.scrollIntoView({ behavior: "instant", block: "start" });
    };
    const frame = window.requestAnimationFrame(scroll);
    return () => window.cancelAnimationFrame(frame);
  }, [scrollToHeroOnMount]);

  return (
    <>
      <main role="main">
        <HeroSection />
        <StatsSection />
        <HowItWorksSection />
        <NylaSection sectionRef={nylaRef} />
        <SupportedCountriesSection sectionRef={curriculumRef} />
        <RewardsProgressSection sectionRef={rewardsRef} />
        <ReviewsSection sectionRef={reviewsRef} />
        <section
          id="pricing"
          ref={pricingRef}
          aria-labelledby="homepage-pricing-heading"
          className="bg-white border-t border-border-default"
        >
          <div className="wrap section-y">
            <div className="mb-[clamp(1.6rem,2.9vw,2.5rem)] text-center">
              <p className="fluid-eyebrow mb-1.5 font-semibold uppercase text-teal">
                Pricing
              </p>
              <h2
                id="homepage-pricing-heading"
                className="fluid-h2 mb-[clamp(0.6rem,1.15vw,0.95rem)] font-serif text-navy"
              >
                Choose a Plan That Works for You
              </h2>
              <p className="fluid-body mx-auto mb-[clamp(0.9rem,1.4vw,1.3rem)] max-w-[460px] text-gray-600">
                Free to start. No hidden fees. Cancel anytime.
              </p>
            </div>

            <div className="responsive-card-grid [--card-min:250px]">
              <article className="responsive-card border border-border-default bg-[#fafaf8] text-center">
                <p className="fluid-eyebrow mb-1.5 font-semibold uppercase text-teal">Free</p>
                <h3 className="mb-1 text-[clamp(1.35rem,0.95vw+1.05rem,1.75rem)] text-navy">Free</h3>
                <p className="mb-[clamp(0.7rem,1.1vw,1rem)] text-[clamp(0.86rem,0.28vw+0.78rem,0.97rem)] text-body">Get started today</p>
                <ul className="m-0 space-y-[clamp(0.3rem,0.55vw,0.5rem)] pl-0 text-left text-[clamp(0.84rem,0.28vw+0.76rem,0.95rem)] leading-[1.68] text-body">
                  <li className="flex items-start gap-2"><span className="text-teal font-bold">✓</span> 5 one-time credits to try every study tool.</li>
                  <li className="flex items-start gap-2"><span className="text-teal font-bold">✓</span> 3 one-time Exam Practice trials.</li>
                  <li className="flex items-start gap-2"><span className="text-teal font-bold">✓</span> Per email account - not monthly.</li>
                </ul>
              </article>

              <article className="responsive-card border border-border-default bg-[#fafaf8] text-center">
                <p className="fluid-eyebrow mb-1.5 font-semibold uppercase text-indigo">Premium</p>
                <h3 className="mb-1 text-[clamp(1.35rem,0.95vw+1.05rem,1.75rem)] text-navy">Premium</h3>
                <p className="mb-[clamp(0.7rem,1.1vw,1rem)] text-[clamp(0.86rem,0.28vw+0.78rem,0.97rem)] text-body">For serious exam preparation</p>
                <ul className="m-0 space-y-[clamp(0.3rem,0.55vw,0.5rem)] pl-0 text-left text-[clamp(0.84rem,0.28vw+0.76rem,0.95rem)] leading-[1.68] text-body">
                  <li className="flex items-start gap-2"><span className="text-indigo font-bold">✓</span> Unlimited AI study generations (fair usage).</li>
                  <li className="flex items-start gap-2"><span className="text-indigo font-bold">✓</span> PDF export</li>
                  <li className="flex items-start gap-2"><span className="text-indigo font-bold">✓</span> Offline access.</li>
                  <li className="flex items-start gap-2"><span className="text-indigo font-bold">✓</span> Priority Nyla responses.</li>
                  <li className="flex items-start gap-2"><span className="text-indigo font-bold">✓</span> Learning analytics.</li>
                  <li className="flex items-start gap-2"><span className="text-indigo font-bold">✓</span> Full rewards system - streaks, certificates, referrals.</li>
                  <li className="flex items-start gap-2"><span className="text-indigo font-bold">✓</span> Available monthly, 3-month, 6-month and annually.</li>
                </ul>
              </article>

              <article className="responsive-card border border-border-default bg-[#fafaf8] text-center">
                <p className="fluid-eyebrow mb-1.5 font-semibold uppercase text-amber">Exam Practice</p>
                <h3 className="mb-1 text-[clamp(1.35rem,0.95vw+1.05rem,1.75rem)] text-navy">Exam Practice</h3>
                <p className="mb-[clamp(0.7rem,1.1vw,1rem)] text-[clamp(0.86rem,0.28vw+0.78rem,0.97rem)] text-body">Available separately</p>
                <ul className="m-0 space-y-[clamp(0.3rem,0.55vw,0.5rem)] pl-0 text-left text-[clamp(0.84rem,0.28vw+0.76rem,0.95rem)] leading-[1.68] text-body">
                  <li className="flex items-start gap-2"><span className="text-amber font-bold">✓</span> Dedicated exam-style practice with three modes - Untimed, Timed and Exam Simulation.</li>
                  <li className="flex items-start gap-2"><span className="text-amber font-bold">✓</span> Includes OCR handwriting upload and Report Card.</li>
                  <li className="flex items-start gap-2"><span className="text-amber font-bold">✓</span> 3 one-time free trials included with every account.</li>
                </ul>
              </article>
            </div>

            <div className="mt-[clamp(1.1rem,2vw,1.8rem)] flex md:justify-end">
              <Link
                href={STUDIELY_APP.pricing}
                className="inline-flex w-full items-center justify-center rounded-lg bg-navy px-[clamp(1.35rem,2vw,2rem)] py-[clamp(0.72rem,0.95vw,0.9rem)] text-[clamp(0.9rem,0.25vw+0.82rem,1rem)] font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.16)] transition-all duration-200 hover:bg-navy/90 hover:shadow-[0_16px_40px_rgba(0,0,0,0.18)] sm:w-auto"
              >
                View Pricing
                <span className="ml-2 text-[clamp(0.92rem,0.34vw+0.82rem,1.06rem)]">→</span>
              </Link>
            </div>
          </div>
        </section>
        <SisterSection sectionRef={sisterRef} />
        <CTASection />
      </main>
      <Footer />

      <Link
        href={nylaHref}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[450] flex h-20 w-20 sm:h-[5.5rem] sm:w-[5.5rem] shrink-0 overflow-hidden rounded-full shadow-[0_8px_22px_rgba(0,0,0,0.28),0_3px_10px_rgba(0,0,0,0.16)] animate-fab-float motion-reduce:animate-none transition-shadow duration-200 hover:shadow-[0_12px_28px_rgba(0,0,0,0.34),0_5px_14px_rgba(0,0,0,0.2)] active:scale-95"
        aria-label="Go to Nyla"
      >
        <Image
          src="/nyla-avatar.png"
          alt="Nyla"
          width={88}
          height={88}
          priority
          className="h-full w-full object-cover"
        />
      </Link>
    </>
  );
}
