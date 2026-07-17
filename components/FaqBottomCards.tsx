"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { STUDIELY_APP } from "@/lib/appUrls";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";

export const FaqBottomCards = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 md:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] md:gap-5">
      <article
        className="funky-card relative overflow-hidden rounded-[28px] px-6 py-7 sm:rounded-[32px] sm:px-8 sm:py-8"
        style={{ backgroundColor: BLUE }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#FF36C6]/45 blur-[48px] sm:h-48 sm:w-48"
        />

        <div className="relative z-[1]">
          <h2 className="mb-2 font-jakarta text-[clamp(1.35rem,2.4vw,1.75rem)] font-extrabold leading-tight text-white">
            Still need help?
          </h2>
          <p className="mb-10 max-w-[420px] font-jakarta text-[13px] leading-[1.7] text-white/85 sm:mb-12 sm:text-[14px]">
            If you couldn&apos;t find what you needed, contact the Studiely team
            — we typically respond within 24 hours.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/contact"
              className="funky-button inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-jakarta text-[13px] font-bold text-[#1E1B4B] sm:text-[14px]"
              style={{ backgroundColor: LIME }}
            >
              <Mail className="h-4 w-4" strokeWidth={2.2} aria-hidden />
              Contact Us
            </Link>
            <Link
              href="/"
              className="funky-button inline-flex items-center justify-center rounded-full border-2 border-white/70 bg-transparent px-5 py-3 font-jakarta text-[13px] font-semibold text-white transition-colors hover:border-white hover:bg-white/10 sm:text-[14px]"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </article>

      <article
        className="funky-card flex flex-col items-center overflow-hidden rounded-[28px] px-6 py-8 text-center sm:rounded-[32px] sm:px-7 sm:py-9"
        style={{
          backgroundColor: LIME,
          borderBottom: `5px solid ${PINK}`,
          boxShadow: `0 8px 24px rgba(255,54,198,0.22)`,
        }}
      >
        <Image
          src="/FAQ-rocket.png"
          alt=""
          width={96}
          height={96}
          unoptimized
          aria-hidden
          className="funky-icon mx-auto h-16 w-16 object-contain sm:h-20 sm:w-20"
        />

        <h2 className="mb-2 mt-4 font-jakarta text-[clamp(1.25rem,2.2vw,1.55rem)] font-extrabold leading-tight text-[#1E1B4B] sm:mt-5">
          Ready to Start?
        </h2>
        <p className="mb-6 font-jakarta text-[13px] leading-relaxed text-[#1E1B4B]/80 sm:mb-7 sm:text-[14px]">
          Join 50k+ students leveling up their grades.
        </p>

        <a
          href={STUDIELY_APP.signUp}
          target="_blank"
          rel="noopener noreferrer"
          className="funky-button inline-flex w-full max-w-[220px] items-center justify-center rounded-full px-6 py-3 font-jakarta text-[13px] font-bold text-white sm:text-[14px]"
          style={{ backgroundColor: BLUE }}
        >
          Sign Up Free
        </a>
      </article>
    </div>
  );
};
