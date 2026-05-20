"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  CurriculumNavIcon,
  NylaAvatar,
  PricingNavIcon,
  ReviewsNavIcon,
  RewardsNavIcon,
  SisterPlatformNavIcon,
} from "./Icons";
import { Button } from "./Button";
import Image from "next/image";
import { STUDIELY_APP } from "@/lib/appUrls";

export const NAV_PILLS = [
  { id: "curriculum", label: "Curriculum", Icon: ({ sz }: { sz: number }) => <CurriculumNavIcon size={sz} /> },
  { id: "nyla", label: "Nyla", Icon: ({ sz }: { sz: number }) => <NylaAvatar size={sz} /> },
  { id: "rewards", label: "Rewards & Progress", Icon: ({ sz }: { sz: number }) => <RewardsNavIcon size={sz} /> },
  { id: "reviews", label: "Reviews", Icon: ({ sz }: { sz: number }) => <ReviewsNavIcon size={sz} /> },
  { id: "pricing", label: "Pricing", Icon: ({ sz }: { sz: number }) => <PricingNavIcon size={sz} /> },
  { id: "sister", label: "Sister Platform", Icon: ({ sz }: { sz: number }) => <SisterPlatformNavIcon size={sz} /> },
];

interface NavbarProps {
  visibleSections?: string[];
}

export const Navbar = ({ visibleSections = [] }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const isLinkActive = (href: string) => {
    const path = href.startsWith("http") ? href : href.split("?")[0].split("#")[0];
    return pathname === path || activeLink === href;
  };

  const links = [
    ["Home", "/"],
    ["Pricing", STUDIELY_APP.pricing],
    ["FAQs", "/faqs"],
    ["Blogs", "/blog"],
    ["Nyla AI", "/nyla"],
    ["Contact Us", "/contact"],
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[400] transition-[background-color,box-shadow,border-color] duration-300 ${
          scrolled
            ? "bg-bg-base/96 md:backdrop-blur-[12px] border-b border-border-default shadow-[0_1px_18px_rgba(0,0,0,0.06)]"
            : "bg-bg-base border-b border-transparent shadow-none"
        }`}
      >
        <div className="wrap h-[66px] grid grid-cols-[auto_1fr_auto] items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
          <div className="flex items-center gap-2 md:gap-3 min-w-0">
            <Link href="/" className="flex items-center gap-2 md:gap-3 font-serif text-[21px] text-navy shrink-0">
              <Image src="/logo.jpeg" alt="Studiely logo" width={30} height={30} priority className="shrink-0 rounded-md" />
              Studiely
            </Link>

            <div className="hidden md:flex items-center gap-1 overflow-x-auto">
              {NAV_PILLS.map(({ id, label, Icon }) =>
                visibleSections.includes(id) ? (
                  <div
                    key={id}
                    className="nav-pill-enter flex items-center gap-[5px] p-[3px_8px_3px_3px] rounded-full bg-white border border-border-default shadow-[0_1px_6px_rgba(0,0,0,0.05)] shrink-0 whitespace-nowrap"
                  >
                    <Icon sz={20} />
                    <span className="text-[11px] font-medium text-muted tracking-[-0.01em]">{label}</span>
                  </div>
                ) : null
              )}
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 justify-center" aria-label="Main">
            {links.map(([l, h]) => (
              <Link
                key={l}
                href={h}
                aria-current={isLinkActive(h) ? "page" : undefined}
                onClick={() => setActiveLink(h)}
                className={`rounded-full px-3 py-1.5 text-[13.5px] text-black transition-colors duration-150 font-normal whitespace-nowrap hover:bg-white hover:text-navy hover:shadow-[0_1px_8px_rgba(0,0,0,0.08)] ${
                  isLinkActive(h) ? "bg-white text-navy shadow-[0_1px_8px_rgba(0,0,0,0.08)] ring-1 ring-border-default" : ""
                }`}
              >
                {l}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2 w-full">
            <div className="hidden md:flex gap-2">
              <Button href={STUDIELY_APP.login} variant="outline" className="py-2 px-4 text-[13px]">
                Login
              </Button>
              <Button href={STUDIELY_APP.home} variant="solid" className="py-2 px-4 text-[13px]">
                Get Started Free
              </Button>
            </div>

            <button
              className="flex md:hidden flex-col gap-[5px] bg-transparent border-none p-1"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label="Toggle menu"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block w-5 h-[1.5px] bg-navy transition-transform duration-250 ${
                    open && i === 0 ? "translate-y-[6.5px] rotate-45" : ""
                  } ${open && i === 2 ? "-translate-y-[6.5px] -rotate-45" : ""} ${
                    open && i === 1 ? "opacity-0" : "opacity-100"
                  }`}
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div
          className="nav-menu-enter fixed top-[66px] left-0 right-0 z-[399] bg-white border-b border-border-default p-4 sm:p-6 md:hidden shadow-lg"
          role="dialog"
          aria-label="Mobile navigation"
        >
          {links.map(([l, h]) => (
            <Link
              key={l}
              href={h}
              aria-current={isLinkActive(h) ? "page" : undefined}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-3 py-3 text-base text-black transition-colors duration-150 border-b border-border-lt last:border-b-0 ${
                isLinkActive(h) ? "bg-bg-base text-navy font-medium" : ""
              }`}
            >
              {l}
            </Link>
          ))}
          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <Button href={STUDIELY_APP.login} variant="outline" className="w-full flex-1">
              Login
            </Button>
            <Button href={STUDIELY_APP.home} variant="solid" className="w-full flex-1">
              Get Started Free
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
};
