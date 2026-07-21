import Image from "next/image";
import Link from "next/link";
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
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:border-white/55 hover:bg-white/10 sm:h-11 sm:w-11";

const storeButtonClass =
  "flex items-center gap-3 rounded-[16px] border border-white/15 bg-white/[0.06] px-4 py-3.5 text-left transition-colors hover:border-white/25 hover:bg-white/[0.1] sm:px-5 sm:py-4";

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

type FooterProps = {
  /** @deprecated All pages now use the same footer design. */
  variant?: "default" | "marketing";
};

export const Footer = (_props: FooterProps = {}) => {
  return (
    <footer className="text-white" style={{ backgroundColor: BG }}>
      <div className="h-2 w-full" style={{ backgroundColor: LIME }} aria-hidden />

      <div className="wrap px-4 pb-10 pt-12 sm:px-6 sm:pb-12 sm:pt-14">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          {/* Left — brand + social */}
          <div className="max-w-[420px]">
            <Link href="/" className="inline-flex" aria-label="Studiely home">
              <Image
                src="/white-logo.png"
                alt="Studiely"
                width={160}
                height={48}
                unoptimized
                className="h-[40px] w-auto object-contain sm:h-[46px]"
              />
            </Link>
            <p className="mb-0 mt-4 font-sans text-[14px] leading-relaxed text-white/75 sm:mt-5 sm:text-[15px]">
              AI study tools for GCSE, IB, A-Level, SAT, HSC and every major
              curriculum.
            </p>

            <div className="mt-6 flex items-center gap-3 sm:mt-7">
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
          </div>

          {/* Right — store buttons + QR */}
          <div className="flex w-full flex-col items-stretch sm:max-w-[440px] lg:items-end">
            <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              <a
                href={APP_STORE_IOS}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
                className={storeButtonClass}
              >
                <AppStoreGridIcon />
                <span>
                  <span className="block font-sans text-[10px] font-medium uppercase tracking-[0.08em] text-white/65">
                    Download on the
                  </span>
                  <span className="block font-sans text-[1.05rem] font-bold leading-tight text-white sm:text-[1.15rem]">
                    App Store
                  </span>
                </span>
              </a>

              <a
                href={APP_STORE_ANDROID}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
                className={storeButtonClass}
              >
                <GooglePlayBagIcon />
                <span>
                  <span className="block font-sans text-[10px] font-medium uppercase tracking-[0.08em] text-white/65">
                    Get it on
                  </span>
                  <span className="block font-sans text-[1.05rem] font-bold leading-tight text-white sm:text-[1.15rem]">
                    Google Play
                  </span>
                </span>
              </a>
            </div>

            <div className="mt-6 flex flex-col items-center self-center lg:self-center">
              <div className="inline-flex rounded-[14px] bg-white p-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.22)]">
                <Image
                  src="/QR.jpeg"
                  alt="QR code to download Studiely"
                  width={120}
                  height={120}
                  unoptimized
                  className="h-[108px] w-[108px] rounded-[8px] object-contain sm:h-[120px] sm:w-[120px]"
                />
              </div>
              <p className="mb-0 mt-3 font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-white/55">
                Scan QR to download
              </p>
            </div>
          </div>
        </div>

        {/* Bottom legal */}
        <div className="mt-12 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:mt-14 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          <p className="m-0 font-sans text-[11px] leading-[1.7] text-white/40 sm:text-[12px]">
            <span className="block">© 2024 Studiely. All rights reserved.</span>
            <span className="mt-1.5 block">
              Built for major curricula across the UK, US, IB, Australia, and
              Canada.
            </span>
          </p>
          <p className="m-0 font-sans text-[11px] leading-[1.7] text-white/40 sm:text-[12px] lg:text-right">
            <span className="block">
              Studiely is a product of Skyen Solutions, a trade name of Gismat
              Ventures W.L.L. (CR 160618-1) - Office 501, Building 1025, Road
              3621, Block 436, Al Seef, Bahrain.
            </span>
            <span className="mt-1.5 block">
              Studiely is not affiliated with, endorsed by, or an official
              product of Cambridge Assessment International Education, Pearson
              Edexcel, AQA, OCR, the IB Organisation, or any other examination
              board.
            </span>
            <span className="mt-1.5 block">
              Content does not replace official syllabus materials.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
