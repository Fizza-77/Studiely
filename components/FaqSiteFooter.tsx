import Image from "next/image";
import Link from "next/link";
import { Globe, GraduationCap, Bot } from "lucide-react";

const LIME = "#E8FF2F";
const BG = "#252636";

const linkHeadingClass =
  "mb-4 font-jakarta text-[14px] font-bold leading-none sm:mb-5 sm:text-[15px]";

const footerLinkClass =
  "font-jakarta text-[13px] leading-snug text-white/70 transition-colors hover:text-white sm:text-[14px]";

const socialButtonClass =
  "inline-flex h-8 w-8 items-center justify-center text-white transition-transform hover:scale-110";

const RESOURCE_LINKS = [
  { label: "Global Curricula", href: "/#curriculum" },
  { label: "Partner Schools", href: "/contact" },
  { label: "Blogs", href: "/blog" },
] as const;

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookie Policy", href: "/cookie-policy" },
] as const;

const SUPPORT_LINKS = [
  { label: "Contact Support", href: "/contact" },
  { label: "FAQs", href: "/faqs" },
] as const;

export const FaqSiteFooter = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: BG }}>
      <div className="h-2 w-full" style={{ backgroundColor: LIME }} aria-hidden />

      <div className="wrap px-4 py-10 sm:px-6 sm:py-12 md:py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)] lg:gap-12 xl:gap-16">
          <div>
            <Link href="/" className="mb-5 inline-flex sm:mb-6" aria-label="Studiely home">
              <Image
                src="/white-logo.png"
                alt="Studiely"
                width={134}
                height={41}
                unoptimized
                className="h-[34px] w-auto object-contain sm:h-[38px]"
              />
            </Link>

            <p className="mb-6 max-w-[340px] font-jakarta text-[14px] leading-[1.7] text-white/70 sm:mb-7 sm:text-[15px]">
              Empowering global students with the kinetic energy of AI-driven
              learning. Your success is our mission.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://studiely.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Studiely website"
                className={socialButtonClass}
              >
                <Globe className="h-6 w-6" strokeWidth={2.2} />
              </a>
              <Link href="/nyla" aria-label="Nyla AI" className={socialButtonClass}>
                <Bot className="h-6 w-6" strokeWidth={2.2} />
              </Link>
              <Link href="/curriculum" aria-label="Curricula" className={socialButtonClass}>
                <GraduationCap className="h-6 w-6" strokeWidth={2.2} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-right sm:grid-cols-3 sm:gap-6">
            <nav aria-label="Resources">
              <h2 className={linkHeadingClass} style={{ color: LIME }}>
                Resources
              </h2>
              <ul className="m-0 flex list-none flex-col items-end gap-3 p-0">
                {RESOURCE_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className={footerLinkClass}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Legal">
              <h2 className={linkHeadingClass} style={{ color: LIME }}>
                Legal
              </h2>
              <ul className="m-0 flex list-none flex-col items-end gap-3 p-0">
                {LEGAL_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className={footerLinkClass}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Support">
              <h2 className={linkHeadingClass} style={{ color: LIME }}>
                Support
              </h2>
              <ul className="m-0 flex list-none flex-col items-end gap-3 p-0">
                {SUPPORT_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className={footerLinkClass}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:mt-12 sm:pt-7 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <p className="m-0 shrink-0 font-jakarta text-[11px] leading-relaxed text-white/40 sm:text-[12px]">
            © 2024 Studiely Kinetic. Empowering global students.
          </p>
          <div className="max-w-[720px] space-y-2 font-jakarta text-[10px] leading-[1.65] text-white/35 sm:text-[11px] lg:text-right">
            <p className="m-0">
              Studiely is a product of Skyen Solutions, a trade name of Qismat
              Ventures W.L.L. (CR 190698-1) — Office 501, Building 1025, Road
              3621, Block 436, Al Seef, Bahrain.
            </p>
            <p className="m-0">
              Studiely is not affiliated with, endorsed by, or an official
              product of Cambridge Assessment International Education, Pearson
              Edexcel, AQA, OCR, the IB Organisation, or any other examination
              board. Content does not replace official syllabus materials.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
