"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import {
  Facebook,
  Instagram,
  Link as LinkIcon,
  Linkedin,
  Play,
  X,
  Youtube,
} from "lucide-react";

/** Empty strings = non-navigating placeholder until you add the URL (including `APP_DOWNLOAD_SMART_LINK`). */
const SOCIAL_YOUTUBE = "https://www.youtube.com/@Studiely";
const SOCIAL_X = "https://x.com/studiely_";
const SOCIAL_LINKEDIN = "https://www.linkedin.com/company/studiely/";
const SOCIAL_INSTAGRAM = "https://www.instagram.com/studiely_";
const SOCIAL_FACEBOOK = "https://www.facebook.com/Studiely/";
const SOCIAL_TIKTOK = "https://www.tiktok.com/@studiely_";
const APP_STORE_IOS = "https://apps.apple.com/us/app/eduplayce/id6758246110";
const APP_STORE_ANDROID = "https://play.google.com/store/apps/details?id=com.skyensolutions.eduplayce.eduplayce";
/** Smart link (e.g. Branch / deferred deep link) — add URL when ready. */
const APP_DOWNLOAD_SMART_LINK = "www.studiely.com/smartlink";

const socialIconClass =
  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/85 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white sm:h-10 sm:w-10";

function SocialAnchor({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const active = href.trim() !== "";
  return (
    <a
      href={active ? href : "#"}
      target={active ? "_blank" : undefined}
      rel={active ? "noopener noreferrer" : undefined}
      aria-label={label}
      aria-disabled={!active}
      className={cn(socialIconClass, !active && "opacity-55")}
      onClick={(e) => {
        if (!active) e.preventDefault();
      }}
    >
      {children}
    </a>
  );
}

function StoreAnchor({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const active = href.trim() !== "";
  return (
    <a
      href={active ? href : "#"}
      target={active ? "_blank" : undefined}
      rel={active ? "noopener noreferrer" : undefined}
      aria-label={label}
      aria-disabled={!active}
      className={cn(
        "inline-flex min-h-[44px] min-w-0 flex-1 basis-0 items-center justify-center rounded-lg border border-white/18 px-2.5 py-2.5 text-[12px] font-medium text-white/90 transition-colors hover:border-white/35 hover:bg-white/10 sm:px-4 sm:text-[13px]",
        !active && "opacity-55"
      )}
      onClick={(e) => {
        if (!active) e.preventDefault();
      }}
    >
      {children}
    </a>
  );
}

export const CTASection = () => (
  <section className="bg-navy py-10 sm:py-12 md:py-14 text-center relative overflow-hidden">
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 50%, rgba(0,176,155,.1) 0%, transparent 65%)",
      }}
    />

    <div className="wrap relative">
      {/* Manual Header (tight spacing) */}
      <Reveal>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">
          Studiely
        </h2>
        <p className="mt-2 text-sm sm:text-base text-white/80">
          AI study tools for GCSE, IB, A-Level, SAT, HSC and every major curriculum.
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-6 pt-5 border-t border-white/10 max-w-lg mx-auto">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/45 mb-3">
            Follow us
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <SocialAnchor href={SOCIAL_YOUTUBE} label="YouTube">
              <Youtube className="size-[18px]" strokeWidth={1.75} aria-hidden />
            </SocialAnchor>

            <SocialAnchor href={SOCIAL_X} label="X (Twitter)">
              <X className="size-[18px]" strokeWidth={1.75} aria-hidden />
            </SocialAnchor>

            <SocialAnchor href={SOCIAL_LINKEDIN} label="Linkedin">
              <Linkedin className="size-[18px]" strokeWidth={1.75} aria-hidden />
            </SocialAnchor>

            <SocialAnchor href={SOCIAL_INSTAGRAM} label="Instagram">
              <Instagram className="size-[18px]" strokeWidth={1.75} aria-hidden />
            </SocialAnchor>

            <SocialAnchor href={SOCIAL_FACEBOOK} label="Facebook">
              <Facebook className="size-[18px]" strokeWidth={1.75} aria-hidden />
            </SocialAnchor>

            <SocialAnchor href={SOCIAL_TIKTOK} label="TikTok">
              <svg
                className="size-[18px] shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </SocialAnchor>
          </div>

          <div className="mt-6 mb-3 flex items-center justify-center gap-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/45">
              Study anywhere. Download the app.
            </p>
           {/* <a
              href={
                APP_DOWNLOAD_SMART_LINK.trim()
                  ? /^https?:\/\//i.test(APP_DOWNLOAD_SMART_LINK.trim())
                    ? APP_DOWNLOAD_SMART_LINK.trim()
                    : `https://${APP_DOWNLOAD_SMART_LINK.trim()}`
                  : "#"
              }
              target={APP_DOWNLOAD_SMART_LINK.trim() ? "_blank" : undefined}
              rel={APP_DOWNLOAD_SMART_LINK.trim() ? "noopener noreferrer" : undefined}
              aria-label="App download smart link"
              className={cn(
                "inline-flex shrink-0 rounded-sm text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40",
                !APP_DOWNLOAD_SMART_LINK.trim() && "pointer-events-none opacity-50",
              )}
              onClick={(e) => {
                if (!APP_DOWNLOAD_SMART_LINK.trim()) e.preventDefault();
              }}
            >
              <LinkIcon
                className="size-4 sm:size-[17px]"
                strokeWidth={2}
                aria-hidden
              />
            </a> */}
          </div>

          <div className="flex w-full flex-row flex-nowrap items-stretch justify-center gap-2 sm:gap-3">
            <StoreAnchor href={APP_STORE_IOS} label="Download on the App Store">
              <span className="flex items-center gap-2">
                <svg
                  className="size-[18px] shrink-0 opacity-90"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </span>
            </StoreAnchor>

            <StoreAnchor href={APP_STORE_ANDROID} label="Get it on Google Play">
              <span className="flex items-center gap-2">
                <Play className="size-[18px] shrink-0 opacity-90" strokeWidth={1.75} />
                Google Play
              </span>
            </StoreAnchor>
          </div>

          <div className="mt-6 pt-5 border-t border-white/10 flex flex-col items-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/45 mb-3">
              Scan QR
            </p>
            <Image
              src="/QR.jpeg"
              alt="QR code to open Studiely"
              width={88}
              height={88}
              className="h-[80px] w-[80px] sm:h-[88px] sm:w-[88px] shrink-0 rounded-md border border-white/20 object-contain bg-white p-1"
            />
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);