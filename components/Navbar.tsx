"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        className={`fixed top-0 left-0 right-0 z-[400] transition-all duration-300 ${
          scrolled
            ? "bg-bg-base/96 md:backdrop-blur-[12px] border-b border-border-default shadow-[0_1px_18px_rgba(0,0,0,0.06)]"
            : "bg-bg-base border-b border-transparent shadow-none"
        }`}
      >
<div className="wrap h-[66px] w-full grid grid-cols-[auto_1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center gap-6 px-4 md:px-0">          {/* Logo + Pills */}
  <div className="flex items-center gap-2 md:gap-3 min-w-0">
            <Link href="/" className="flex items-center gap-2 md:gap-3 font-serif text-[21px] text-navy shrink-0">
              <Image src="/logo.jpeg" alt="Studiely logo" width={30} height={30} priority className="shrink-0 rounded-md" />
              Studiely
            </Link>

            {/* Pills for larger screens */}
            <div className="hidden md:flex items-center gap-1 overflow-x-auto">
              {NAV_PILLS.map(({ id, label, Icon }) => (
                <AnimatePresence key={id}>
                  {visibleSections.includes(id) && (
                    <motion.div
                      initial={{ opacity: 0, x: -16, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -10, scale: 0.85 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-center gap-[5px] p-[3px_8px_3px_3px] rounded-full bg-white border border-border-default shadow-[0_1px_6px_rgba(0,0,0,0.05)] shrink-0 whitespace-nowrap"
                    >
                      <Icon sz={20} />
                      <span className="text-[11px] font-medium text-muted tracking-[-0.01em]">{label}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}
            </div>
          </div>

          {/* Desktop nav links */}
  <nav className="hidden md:flex items-center gap-7 justify-center" aria-label="Main">
            {links.map(([l, h]) => (
              <Link
                key={l}
                href={h}
                className="text-[13.5px] text-muted transition-colors duration-150 font-normal whitespace-nowrap hover:text-navy"
              >
                {l}
              </Link>
            ))}
          </nav>

<div className="flex items-center justify-end gap-2 w-full">
  {/* Desktop CTAs: visible only on md+ */}
  <div className="hidden md:flex gap-2">
    <Button href={STUDIELY_APP.login} variant="outline" className="py-2 px-4 text-[13px]">
      Login
    </Button>
    <Button href={STUDIELY_APP.home} variant="solid" className="py-2 px-4 text-[13px]">
      Get Started Free
    </Button>
  </div>

  {/* Hamburger: visible only below md */}
  <button
className="flex md:hidden flex-col gap-[5px] bg-transparent border-none p-1"
    onClick={() => setOpen((o) => !o)}
    aria-label="Toggle menu"
  >
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className={`block w-5 h-[1.5px] bg-navy transition-all duration-250 ${
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

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[66px] left-0 right-0 z-[399] bg-white border-b border-border-default p-4 sm:p-6 md:hidden shadow-lg"
          >
            {links.map(([l, h]) => (
              <Link
                key={l}
                href={h}
                onClick={() => setOpen(false)}
                className="block text-base text-body py-3 border-b border-border-lt last:border-b-0"
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};