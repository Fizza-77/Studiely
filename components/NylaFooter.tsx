"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, Mail, Share2 } from "lucide-react";
import { FormEvent, useState } from "react";

const LIME = "#E8FF2F";
const BG = "#252636";
const SITE_URL = "https://studiely.com";

const PRODUCT_LINKS = [
  { label: "Explore", href: "/" },
  { label: "Courses", href: "/#curriculum" },
  { label: "Nyla AI", href: "/nyla" },
  { label: "Blog", href: "/blog" },
] as const;

const SUPPORT_LINKS = [
  { label: "Help Center", href: "/faqs" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Contact Us", href: "/contact" },
] as const;

const socialButtonClass =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white/70 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white";

const linkHeadingClass =
  "mb-4 font-heading text-[15px] font-bold leading-none sm:mb-5 sm:text-[16px]";

const footerLinkClass =
  "font-sans text-[14px] leading-snug text-white/75 transition-colors hover:text-white";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    window.location.href = `mailto:support@studiely.com?subject=Newsletter%20signup&body=${encodeURIComponent(email)}`;
  };

  return (
    <form onSubmit={onSubmit} className="flex items-stretch gap-2">
      <label className="sr-only" htmlFor="nyla-footer-email">
        Email address
      </label>
      <input
        id="nyla-footer-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email address"
        className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 font-sans text-[13px] text-white placeholder:text-white/40 outline-none transition-colors focus:border-white/30"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full px-5 py-2.5 font-heading text-[13px] font-bold text-[#1E1B4B] transition-opacity hover:opacity-90"
        style={{ backgroundColor: LIME }}
      >
        Go
      </button>
    </form>
  );
};

export const NylaFooter = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: BG }}>
      <div className="h-2 w-full" style={{ backgroundColor: LIME }} aria-hidden />

      <div className="wrap px-4 py-10 sm:px-6 sm:py-12 md:py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.75fr)_minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-8 xl:gap-12">
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

            <p className="mb-6 max-w-[320px] font-sans text-[14px] leading-[1.7] text-white/75 sm:mb-7 sm:text-[15px]">
              The next generation AI learning partner designed to adapt to your
              unique curriculum needs. Master any subject with speed and
              confidence.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Studiely website"
                className={socialButtonClass}
              >
                <Globe className="h-4 w-4" strokeWidth={2} />
              </a>
              <a
                href="https://x.com/studiely_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X"
                className={socialButtonClass}
              >
                <Share2 className="h-4 w-4" strokeWidth={2} />
              </a>
              <a
                href="mailto:support@studiely.com"
                aria-label="Email Studiely"
                className={socialButtonClass}
              >
                <Mail className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </div>

          <nav aria-label="Product">
            <h2 className={linkHeadingClass} style={{ color: LIME }}>
              Product
            </h2>
            <ul className="m-0 flex list-none flex-col gap-3 p-0 sm:gap-3.5">
              {PRODUCT_LINKS.map(({ label, href }) => (
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
            <ul className="m-0 flex list-none flex-col gap-3 p-0 sm:gap-3.5">
              {SUPPORT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className={footerLinkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={linkHeadingClass} style={{ color: LIME }}>
              Stay Updated
            </h2>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 sm:mt-12 sm:pt-7">
          <p className="m-0 text-left font-sans text-[11px] leading-relaxed text-white/40 sm:text-[12px]">
            © 2024 Studiely Kinetic. All rights reserved. Studiely is a
            registered educational platform.
          </p>
        </div>
      </div>
    </footer>
  );
};
