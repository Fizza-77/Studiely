"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { STUDIELY_APP } from "@/lib/appUrls";
import { Footer } from "@/components/Footer";
import { NylaAvatar } from "@/components/Icons";
import { HeroSection } from "@/sections/HeroSection";
import { StatsSection } from "@/sections/StatsSection";
import { HowItWorksSection } from "@/sections/HowItWorksSection";
import { SupportedCountriesSection } from "@/sections/SupportedCountriesSection";
import { RewardsProgressSection } from "@/sections/RewardsProgressSection";
import { StudyToolsSection } from "@/sections/StudyToolsSection";
import { WritingSection } from "@/sections/WritingSection";
import { NylaSection } from "@/sections/NylaSection";
import { ReviewsSection } from "@/sections/ReviewsSection";
import { CTASection } from "@/sections/CTASection";
import { SisterSection } from "@/sections/SisterSection";

type HomePageContentProps = {
  /** When true (e.g. `/features` route), scroll to the features section after mount. */
  scrollToFeaturesOnMount?: boolean;
};

export function HomePageContent({ scrollToFeaturesOnMount = false }: HomePageContentProps) {
  const nylaHref = "/nyla";
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const curriculumRef = useRef<HTMLElement>(null);
  const toolsRef = useRef<HTMLElement>(null);
  const writingRef = useRef<HTMLElement>(null);
  const nylaRef = useRef<HTMLElement>(null);
  const rewardsRef = useRef<HTMLElement>(null);
  const reviewsRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);
  const sisterRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ORDER = ["curriculum", "tools", "writing", "nyla", "rewards", "reviews", "pricing", "sister"];
    const sections = [
      { id: "curriculum", ref: curriculumRef },
      { id: "tools", ref: toolsRef },
      { id: "writing", ref: writingRef },
      { id: "nyla", ref: nylaRef },
      { id: "rewards", ref: rewardsRef },
      { id: "reviews", ref: reviewsRef },
      { id: "pricing", ref: pricingRef },
      { id: "sister", ref: sisterRef },
    ];

    const observers = sections.map(({ id, ref }) => {
      const o = new IntersectionObserver(
        ([entry]) => {
          setVisibleSections((prev) => {
            if (entry.isIntersecting) {
              if (prev.includes(id)) return prev;
              return ORDER.filter((s) => [...prev, id].includes(s));
            } else {
              return prev.filter((s) => s !== id);
            }
          });
        },
        { threshold: 0.18, rootMargin: "-66px 0px 0px 0px" }
      );
      if (ref.current) o.observe(ref.current);
      return o;
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (!scrollToFeaturesOnMount) return;
    const scroll = () => {
      document.getElementById("features")?.scrollIntoView({ behavior: "instant", block: "start" });
    };
    scroll();
    const t1 = window.setTimeout(scroll, 50);
    const t2 = window.setTimeout(scroll, 200);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [scrollToFeaturesOnMount]);

  return (
    <>
      <Navbar visibleSections={visibleSections} />
      <main role="main">
        <HeroSection />
        <StatsSection />
        <StudyToolsSection sectionRef={toolsRef} />
        <WritingSection sectionRef={writingRef} />
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
          <div className="wrap py-10 sm:py-12 md:py-14">
            <div className="mb-7 sm:mb-8 text-center">
              <p className="text-[11px] uppercase tracking-[1.4px] font-semibold text-teal mb-1.5">
                Pricing
              </p>
              <h2
                id="homepage-pricing-heading"
                className="font-serif text-[clamp(26px,3vw,32px)] text-navy mb-3"
              >
                Choose a Plan That Works for You
              </h2>
              <p className="text-[14px] text-gray-600 max-w-[460px] mx-auto mb-4">
                Free to start. No hidden fees. Cancel anytime.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
              <article className="rounded-xl border border-border-default bg-[#fafaf8] p-5 sm:p-6 text-center">
                <p className="text-[11px] uppercase tracking-[1.3px] font-semibold text-teal mb-1.5">Free</p>
                <h3 className="text-[22px] text-navy mb-1">Free</h3>
                <p className="text-[13px] text-muted mb-3.5">Get started today</p>
                <p className="text-[13px] text-muted leading-[1.7] whitespace-pre-line text-left">
                  5 one-time credits to try every study tool.{"\n"}
                  3 one-time Exam Practice trials.{"\n"}
                  Per email account - not monthly.
                </p>
              </article>

              <article className="rounded-xl border border-border-default bg-[#fafaf8] p-5 sm:p-6 text-center">
                <p className="text-[11px] uppercase tracking-[1.3px] font-semibold text-indigo mb-1.5">Premium</p>
                <h3 className="text-[22px] text-navy mb-1">Premium</h3>
                <p className="text-[13px] text-muted mb-3.5">For serious exam preparation</p>
                <p className="text-[13px] text-muted leading-[1.7] whitespace-pre-line text-left">
                  Unlimited AI study generations (fair usage).{"\n"}
                  PDF export{"\n"}
                  Offline access.{"\n"}
                  Priority Nyla responses.{"\n"}
                  Learning analytics.{"\n"}
                  Full rewards system - streaks, certificates, referrals.{"\n"}
                  Available monthly, 3-month, 6-month and annually.
                </p>
              </article>

              <article className="rounded-xl border border-border-default bg-[#fafaf8] p-5 sm:p-6 text-center">
                <p className="text-[11px] uppercase tracking-[1.3px] font-semibold text-amber mb-1.5">Exam Practice</p>
                <h3 className="text-[22px] text-navy mb-1">Exam Practice</h3>
                <p className="text-[13px] text-muted mb-3.5">Available separately</p>
                <p className="text-[13px] text-muted leading-[1.7] whitespace-pre-line text-left">
                  Dedicated exam-style practice with three modes - Untimed, Timed and Exam Simulation.{"\n"}
                  Includes OCR handwriting upload and Report Card.{"\n"}
                  3 one-time free trials included with every account.
                </p>
              </article>
            </div>

            <div className="mt-6 sm:mt-7 flex md:justify-end">
              <Link
                href={STUDIELY_APP.pricing}
                className="inline-flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3 rounded-lg bg-navy text-white text-[14px] font-medium shadow-[0_10px_30px_rgba(0,0,0,0.16)] hover:bg-navy/90 hover:shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition-all duration-200"
              >
                View Pricing
                <span className="ml-2 text-[15px]">→</span>
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
        className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#6d4ede] shadow-[0_10px_25px_rgba(0,0,0,0.26)] transition-transform duration-200 hover:-translate-y-1 active:scale-95"
        aria-label="Go to Nyla"
      >
        <NylaAvatar size={42} noBackground />
      </Link>
    </>
  );
}
