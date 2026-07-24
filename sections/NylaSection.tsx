"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { STUDIELY_APP } from "@/lib/appUrls";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";

interface NylaSectionProps {
  sectionRef?: React.Ref<HTMLElement>;
}

const TypingDots = () => (
  <div
    className="inline-flex max-w-[72px] items-center gap-1.5 rounded-[14px] rounded-tl-sm bg-[#ECEEF6] px-3.5 py-3"
    aria-label="Nyla is typing"
  >
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="nyla-typing-dot h-1.5 w-1.5 rounded-full bg-[#4F35F2]/75"
        style={{ animationDelay: `${i * 0.16}s` }}
      />
    ))}
  </div>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="9" fill={BLUE} />
    <path
      d="M12 7.5V12l3 2"
      stroke="white"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type Feature =
  | {
      title: string;
      desc: string;
      iconSrc: string;
    }
  | {
      title: string;
      desc: string;
      Icon: () => React.JSX.Element;
    };

const FEATURES: Feature[] = [
  {
    title: "Expert explanations",
    desc: "Complex topics broken down into simple, easy-to-digest concepts.",
    iconSrc: "/tick.png",
  },
  {
    title: "Available 24/7",
    desc: "Late night study sessions or early morning exam prep, Nyla is always ready.",
    Icon: ClockIcon,
  },
];

export const NylaSection = ({ sectionRef }: NylaSectionProps) => {
  const chatPreviewRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"idle" | "typing" | "replied">("idle");

  useEffect(() => {
    const el = chatPreviewRef.current;
    if (!el) return;

    let replyTimer: ReturnType<typeof setTimeout> | undefined;

    const startSequence = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setPhase("replied");
        return;
      }
      setPhase("typing");
      replyTimer = setTimeout(() => setPhase("replied"), 1000);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startSequence();
          observer.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (replyTimer) clearTimeout(replyTimer);
    };
  }, []);

  useEffect(() => {
    const box = messagesRef.current;
    if (!box) return;
    box.scrollTop = box.scrollHeight;
  }, []);

  useEffect(() => {
    const box = messagesRef.current;
    if (!box || phase === "idle") return;
    box.scrollTo({ top: box.scrollHeight, behavior: "smooth" });
  }, [phase]);

  return (
    <section
      id="nyla"
      ref={sectionRef}
      aria-labelledby="nyla-heading"
      className="bg-bg-base pb-[clamp(1.5rem,3.5vw,2.5rem)] pt-[clamp(0.5rem,1.5vw,1rem)]"
    >
      <div className="wrap">
        <div className="relative overflow-hidden rounded-[28px] md:rounded-[40px]">
          <div className="grid lg:grid-cols-2">
            {/* Left panel */}
            <div
              className="relative px-[clamp(1.25rem,4vw,3.25rem)] py-[clamp(1.35rem,3vw,2.25rem)]"
              style={{
                background:
                  "linear-gradient(145deg, #4F35F2 0%, #4A30E8 55%, #4530E0 100%)",
              }}
            >
              <h2
                id="nyla-heading"
                className="mb-4 max-w-[16ch] font-heading text-[clamp(1.85rem,4vw,3rem)] font-extrabold leading-[1.12] tracking-[-0.02em] text-white"
              >
                Meet <span style={{ color: LIME }}>Nyla</span>, Your personal AI Tutor
              </h2>
              <p className="mb-5 max-w-[34rem] font-sans text-[clamp(0.95rem,1.05vw,1.1rem)] leading-relaxed text-white/85">
                Nyla understands your curriculum and knows exactly where you are in your study
                journey.
              </p>

              <ul className="m-0 flex list-none flex-col gap-5 p-0">
                {FEATURES.map((feature) => (
                  <li key={feature.title} className="flex gap-3.5">
                    <span
                      className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: LIME }}
                    >
                      {"iconSrc" in feature ? (
                        <Image
                          src={feature.iconSrc}
                          alt=""
                          width={22}
                          height={22}
                          unoptimized
                          className="h-[22px] w-[22px] object-contain"
                          aria-hidden
                        />
                      ) : (
                        <feature.Icon />
                      )}
                    </span>
                    <div>
                      <p className="mb-1 font-heading text-[1rem] font-bold text-white">
                        {feature.title}
                      </p>
                      <p className="m-0 font-sans text-[14px] leading-relaxed text-white/75">
                        {feature.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right panel — 10% less opaque */}
            <div
              className="relative isolate overflow-hidden px-[clamp(1.25rem,3.5vw,2.75rem)] py-[clamp(1.35rem,3vw,2.25rem)]"
              style={{
                background:
                  "linear-gradient(145deg, rgba(79,53,242,0.9) 0%, rgba(74,48,232,0.9) 55%, rgba(61,40,212,0.9) 100%)",
              }}
            >
              {/* Rectangle swirl glow — top right */}
              <Image
                src="/Rectangle.svg"
                alt=""
                width={452}
                height={452}
                unoptimized
                priority
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-10 z-[1] h-[260px] w-[260px] select-none object-contain sm:-right-6 sm:-top-8 sm:h-[320px] sm:w-[320px] md:h-[380px] md:w-[380px]"
              />

              {/* Swirl — top right of blue card, outside chat preview */}
              <Image
                src="/swirl.svg"
                alt=""
                width={320}
                height={320}
                unoptimized
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-8 z-[3] h-auto w-[clamp(12rem,28vw,18rem)] select-none sm:-right-8 sm:-top-10 sm:w-[clamp(13rem,30vw,20rem)]"
                draggable={false}
              />

              <div className="relative z-[2] mx-auto flex w-full max-w-[340px] items-center justify-center py-8 sm:max-w-[360px]">
                {/* Gray ring behind chat */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-square w-[128%] max-w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[18px] border-white/25"
                />

                {/* Chat preview — matches design */}
                <div ref={chatPreviewRef} className="relative z-[1] w-full">
                  <div className="relative z-[1] w-full overflow-hidden rounded-[20px] bg-white shadow-[0_18px_48px_rgba(0,0,0,0.3)]">
                  <div
                    className="flex items-center gap-3 px-4 py-3.5"
                    style={{ backgroundColor: BLUE }}
                  >
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: LIME }}
                    >
                      <Image
                        src="/Nyla.png"
                        alt=""
                        width={20}
                        height={18}
                        unoptimized
                        className="h-[18px] w-auto object-contain"
                        aria-hidden
                      />
                    </span>
                    <div className="min-w-0">
                      <p className="font-heading text-[15px] font-bold leading-none text-white">
                        Nyla AI Tutor
                      </p>
                      <p className="mt-1.5 flex items-center gap-1.5 font-hanken text-[10px] font-medium uppercase tracking-[0.12em] text-white">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7CFF8A]" />
                        Online
                      </p>
                    </div>
                  </div>

                  <div
                    ref={messagesRef}
                    className="nyla-chat-scroll flex max-h-[210px] flex-col gap-3 overflow-y-auto overscroll-contain bg-white px-3.5 py-4 sm:max-h-[220px]"
                  >
                    <div className="max-w-[88%] rounded-[14px] rounded-tl-sm bg-[#ECEEF6] px-3.5 py-2.5 font-sans text-[12.5px] leading-[1.55] text-[#2A2B36]">
                      Hi! I&apos;m Nyla. Need help understanding Mitosis?
                    </div>
                    <div
                      className="ml-auto max-w-[88%] rounded-[14px] rounded-tr-sm px-3.5 py-2.5 font-sans text-[12.5px] font-medium leading-[1.55]"
                      style={{ backgroundColor: LIME, color: BLUE }}
                    >
                      Yes please! Can you summarize the Prophase?
                    </div>
                    <div className="max-w-[92%] rounded-[14px] rounded-tl-sm bg-[#ECEEF6] px-3.5 py-2.5 font-sans text-[12.5px] leading-[1.55] text-[#2A2B36]">
                      Absolutely. In Prophase, chromosomes condense and become visible…
                    </div>
                    <div
                      className="ml-auto max-w-[88%] rounded-[14px] rounded-tr-sm px-3.5 py-2.5 font-sans text-[12.5px] font-medium leading-[1.55]"
                      style={{ backgroundColor: LIME, color: BLUE }}
                    >
                      Got it! What happens next in Metaphase?
                    </div>
                    {phase === "typing" ? <TypingDots /> : null}
                    {phase === "replied" ? (
                      <>
                        <div className="max-w-[92%] rounded-[14px] rounded-tl-sm bg-[#ECEEF6] px-3.5 py-2.5 font-sans text-[12.5px] leading-[1.55] text-[#2A2B36]">
                          In Metaphase, chromosomes line up at the cell&apos;s equator so they can
                          separate evenly.
                        </div>
                        <TypingDots />
                      </>
                    ) : null}
                  </div>

                  <div className="bg-white px-3.5 pb-3.5 pt-0">
                    <div className="flex items-center gap-2 rounded-full bg-[#ECEEF6] px-2 py-1.5 pl-4">
                      <span className="flex-1 font-sans text-[12.5px] text-[#8B8D9A]">
                        Type your question…
                      </span>
                      <Link
                        href={STUDIELY_APP.nyla}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white transition-opacity hover:opacity-90"
                        style={{ backgroundColor: BLUE }}
                        aria-label="Open Nyla chat"
                      >
                        <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" aria-hidden>
                          <path
                            d="M4 10h10.5M10.5 5.5 15 10l-4.5 4.5"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
