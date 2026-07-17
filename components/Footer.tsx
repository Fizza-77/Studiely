import Link from "next/link";

const MAKE_MY_LESSON_URL = "https://makemylesson.ai";
const LINGUATUDE_URL = "https://linguatude.com";
const BG = "#252636";

const footerLinkClass =
  "text-white/90 underline underline-offset-[3px] decoration-white/35 hover:text-white hover:decoration-white/70";

type FooterProps = {
  variant?: "default" | "marketing";
};

const MarketingFooter = () => (
  <footer className="text-white" style={{ backgroundColor: BG }}>
    <div className="wrap px-4 pb-12 pt-10 sm:px-6 sm:pb-14">
      <div className="mb-10 text-left">
        <h2 className="mb-2 font-sans text-[clamp(1.75rem,3vw,2.25rem)] font-bold leading-tight text-white">
          Studiely
        </h2>
        <p className="m-0 max-w-[560px] font-sans text-[14px] leading-relaxed text-white/90 sm:text-[15px]">
          Studiely is a sister platform of{" "}
          <a
            href={MAKE_MY_LESSON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={footerLinkClass}
          >
            Make My Lesson
          </a>{" "}
          and{" "}
          <a
            href={LINGUATUDE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={footerLinkClass}
          >
            Linguatude
          </a>
          .
        </p>
      </div>

      <div className="mx-auto max-w-[920px] space-y-3 text-center font-sans text-[11px] leading-[1.65] text-white/45 sm:text-[12px]">
        <p>
          © 2024 Studiely. All rights reserved. Built for major curricula across
          the UK, US, IB, Australia, and Canada.
        </p>
        <p>
          Studiely is a product of Skyen Solutions, a trade name of Qismat
          Ventures W.L.L. (CR 190698-1) — Office 501, Building 1025, Road 3621,
          Block 436, Al Seef, Bahrain.
        </p>
        <p>
          Studiely is not affiliated with, endorsed by, or an official product
          of Cambridge Assessment International Education, Pearson Edexcel, AQA,
          OCR, the IB Organisation, or any other examination board. Content
          does not replace official syllabus materials.
        </p>
      </div>
    </div>
  </footer>
);

const DefaultFooter = () => (
  <footer className="border-t border-border-default bg-bg-base py-5">
    <div className="wrap flex flex-col gap-3">
      <nav
        className="flex flex-wrap items-center justify-center gap-2 text-[10px] whitespace-nowrap sm:text-[11px] md:text-[12px]"
        aria-label="Footer"
      >
        <Link href="/blog" className="text-body hover:text-navy">
          Blog
        </Link>
        <Link href="/faqs" className="text-body hover:text-navy">
          FAQs
        </Link>
        <Link href="/privacy-policy" className="text-body hover:text-navy">
          Privacy Policy
        </Link>
        <Link href="/terms-of-service" className="text-body hover:text-navy">
          Terms of Service
        </Link>
        <Link href="/acceptable-use" className="text-body hover:text-navy">
          Acceptable Use Policy
        </Link>
        <Link href="/cookie-policy" className="text-body hover:text-navy">
          Cookie Policy
        </Link>
        <Link href="/disclaimer" className="text-body hover:text-navy">
          Disclaimer
        </Link>
      </nav>

      <div className="mx-auto max-w-[920px] space-y-2.5 border-t border-border-lt pt-3 text-center text-[11px] leading-[1.65] text-[#6b6b76]">
        <p>
          Studiely is a sister platform of{" "}
          <a
            href={MAKE_MY_LESSON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6b6b76] underline underline-offset-[3px] decoration-[#6b6b76]/50 hover:text-navy"
          >
            Make My Lesson
          </a>{" "}
          and{" "}
          <a
            href={LINGUATUDE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6b6b76] underline underline-offset-[3px] decoration-[#6b6b76]/50 hover:text-navy"
          >
            Linguatude
          </a>
          .
        </p>
        <p>
          Studiely is a product of Skyen Solutions, a trade name of Qismat
          Ventures W.L.L. (CR 190698-1) — Office 501, Building 1025, Road 3621,
          Block 436, Al Seef, Bahrain.
        </p>
        <p>
          Studiely is not affiliated with, endorsed by, or an official product
          of Cambridge Assessment International Education, Pearson Edexcel, AQA,
          OCR, the IB Organisation, or any other examination board. Content
          does not replace official syllabus materials.
        </p>
      </div>
    </div>
  </footer>
);

export const Footer = ({ variant = "default" }: FooterProps) => {
  if (variant === "marketing") {
    return <MarketingFooter />;
  }

  return <DefaultFooter />;
};
