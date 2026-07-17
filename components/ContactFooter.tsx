import Image from "next/image";
import Link from "next/link";

const BG = "#2D2D42";
const LIME = "#E8FF2F";

const COMPANY_LINKS = [
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
] as const;

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Disclaimer", href: "/disclaimer" },
] as const;

const POLICY_LINKS = [
  { label: "Acceptable Use", href: "/acceptable-use" },
  { label: "Cookie Policy", href: "/cookie-policy" },
] as const;

const footerLinkClass =
  "funky-link font-jakarta text-[12px] font-semibold leading-relaxed text-[#D9F232] transition-colors hover:text-white sm:text-[13px]";

export const ContactFooter = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: BG }}>
      <div className="h-2 w-full" style={{ backgroundColor: LIME }} aria-hidden />

      <div className="wrap py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.8fr)_repeat(3,minmax(120px,1fr))] lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex transition-transform hover:scale-[1.03]" aria-label="Studiely home">
              <Image
                src="/white-logo.png"
                alt="Studiely"
                width={134}
                height={41}
                unoptimized
                className="h-[34px] w-auto object-contain sm:h-[38px]"
              />
            </Link>
            <p className="mb-0 mt-5 max-w-[310px] font-jakarta text-[12px] leading-[1.7] text-white/45 sm:text-[13px]">
              Revolutionizing education through AI. Part of the Skyen Solutions
              family of EdTech products.
            </p>
          </div>

          {[
            { title: "Company", links: COMPANY_LINKS },
            { title: "Legal", links: LEGAL_LINKS },
            { title: "Policies", links: POLICY_LINKS },
          ].map(({ title, links }) => (
            <nav key={title} aria-label={title}>
              <h2
                className="mb-4 font-jakarta text-[12px] font-extrabold uppercase tracking-[0.06em] sm:text-[13px]"
                style={{ color: LIME }}
              >
                {title}
              </h2>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className={footerLinkClass}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 border-t border-white/[0.07] pt-9 sm:mt-16 sm:pt-10">
          <div className="space-y-5 font-jakarta text-[8px] uppercase leading-[1.8] tracking-[0.045em] text-white/25 sm:text-[9px]">
            <p className="m-0">
              Studiely is a sister platform of Make My Lesson and Linguatude.
            </p>
            <p className="m-0">
              Studiely is a product of Skyen Solutions, a trade name of Qismat
              Ventures W.L.L. (CR 190698-1) — Office 501, Building 1025, Road
              3621, Block 436, Al Seef, Bahrain.
            </p>
            <p className="m-0">
              Studiely is part of the Skyen Solutions family of EdTech products.
              For custom software development, websites, and mobile applications,
              visit Skyen Systems.
            </p>
            <p className="m-0">
              Studiely is not affiliated with, endorsed by, or an official
              product of Cambridge Assessment International Education, Pearson
              Edexcel, AQA, OCR, the IB Organisation, or any other examination
              board. Content does not replace official syllabus materials.
            </p>
          </div>

          <p className="mb-0 mt-11 text-center font-jakarta text-[10px] font-semibold text-white/55 sm:mt-12 sm:text-[11px]">
            © 2024 Studiely. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
