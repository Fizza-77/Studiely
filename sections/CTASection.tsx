"use client";

import Image from "next/image";
import { AtSign, Play, Users } from "lucide-react";

const LIME = "#E8FF2F";
const BG = "#252636";

const SOCIAL_YOUTUBE = "https://www.youtube.com/@Studiely";
const SOCIAL_X = "https://x.com/studiely_";
const SOCIAL_LINKEDIN = "https://www.linkedin.com/company/studiely/";
const APP_STORE_IOS =
  "https://apps.apple.com/us/app/eduplayce/id6758246110";
const APP_STORE_ANDROID =
  "https://play.google.com/store/apps/details?id=com.skyensolutions.eduplayce.eduplayce";

const socialButtonClass =
  "funky-button inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white/50 hover:bg-white/10";

const AppStoreGridIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" aria-hidden>
    <rect x="4" y="4" width="6" height="6" rx="1.2" fill={LIME} />
    <rect x="14" y="4" width="6" height="6" rx="1.2" fill={LIME} />
    <rect x="4" y="14" width="6" height="6" rx="1.2" fill={LIME} />
    <rect x="14" y="14" width="6" height="6" rx="1.2" fill={LIME} />
  </svg>
);

const GooglePlayBagIcon = () => (
  <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0" fill="none" aria-hidden>
    <rect
      x="12"
      y="5"
      width="8"
      height="4"
      rx="1.5"
      stroke={LIME}
      strokeWidth="2"
    />
    <rect
      x="5"
      y="10"
      width="22"
      height="17"
      rx="3"
      stroke={LIME}
      strokeWidth="2"
    />
    <path d="M14.5 14.5v9l7.5-4.5-7.5-4.5z" fill={LIME} />
  </svg>
);

export const CTASection = () => (
  <section
    className="relative overflow-hidden text-center text-white"
    style={{ backgroundColor: BG }}
  >
    <div className="h-2 w-full" style={{ backgroundColor: LIME }} aria-hidden />

    <div className="wrap px-4 py-12 sm:py-14 md:py-16">
      <div className="mx-auto mb-4 flex items-center justify-center">
        <Image
          src="/white-logo.png"
          alt="Studiely"
          width={134}
          height={41}
          unoptimized
          priority
          className="h-[41px] w-[134px] max-w-none object-contain object-center"
        />
      </div>

      <p className="mx-auto mb-8 max-w-[560px] font-sans text-[14px] leading-relaxed text-white/85 sm:text-[15px]">
        AI study tools for GCSE, IB, A-Level, SAT, HSC and every major
        curriculum.
      </p>

      <div className="mb-8 flex items-center justify-center gap-4">
        <a
          href={SOCIAL_YOUTUBE}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className={socialButtonClass}
        >
          <Play className="h-4 w-4 fill-white" strokeWidth={0} />
        </a>
        <a
          href={SOCIAL_X}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          className={socialButtonClass}
        >
          <AtSign className="h-4 w-4" strokeWidth={2} />
        </a>
        <a
          href={SOCIAL_LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={socialButtonClass}
        >
          <Users className="h-4 w-4" strokeWidth={2} />
        </a>
      </div>

      <div className="mx-auto mb-10 flex max-w-[560px] flex-col gap-3 sm:flex-row sm:gap-4">
        <a
          href={APP_STORE_IOS}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download on the App Store"
          className="flex flex-1 items-center gap-3 rounded-[18px] border border-white/15 bg-white/[0.04] px-5 py-4 text-left transition-colors hover:border-white/25 hover:bg-white/[0.07]"
        >
          <AppStoreGridIcon />
          <span>
            <span className="block font-sans text-[10px] font-medium uppercase tracking-[0.08em] text-white/65">
              Download on the
            </span>
            <span className="block font-sans text-[1.15rem] font-bold leading-tight text-white sm:text-[1.2rem]">
              App Store
            </span>
          </span>
        </a>

        <a
          href={APP_STORE_ANDROID}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get it on Google Play"
          className="flex flex-1 items-center gap-3 rounded-[18px] border border-white/15 bg-white/[0.04] px-5 py-4 text-left transition-colors hover:border-white/25 hover:bg-white/[0.07]"
        >
          <GooglePlayBagIcon />
          <span>
            <span className="block font-sans text-[10px] font-medium uppercase tracking-[0.08em] text-white/65">
              Get it on
            </span>
            <span className="block font-sans text-[1.15rem] font-bold leading-tight text-white sm:text-[1.2rem]">
              Google Play
            </span>
          </span>
        </a>
      </div>

      <p className="mb-4 font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-white/55">
        Scan QR to download
      </p>

      <div className="mx-auto inline-flex rounded-[18px] bg-white p-3 shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
        <Image
          src="/QR.jpeg"
          alt="QR code to download Studiely"
          width={112}
          height={112}
          className="h-[104px] w-[104px] rounded-[12px] object-contain sm:h-[112px] sm:w-[112px]"
        />
      </div>
    </div>

    <div className="border-t border-white/10" aria-hidden />
  </section>
);
