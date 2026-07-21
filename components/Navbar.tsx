"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { STUDIELY_APP } from "@/lib/appUrls";
import { HOME_SHELL } from "@/lib/homeShell";

interface NavbarProps {
  visibleSections?: string[];
}

export const Navbar = ({ visibleSections: _visibleSections = [] }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const scrollIdleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setNavbarVisible(false);

      if (scrollIdleTimerRef.current) {
        clearTimeout(scrollIdleTimerRef.current);
      }

      scrollIdleTimerRef.current = setTimeout(() => {
        setNavbarVisible(true);
      }, 180);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollIdleTimerRef.current) {
        clearTimeout(scrollIdleTimerRef.current);
      }
    };
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
    if (href.includes("#")) {
      return activeLink === href || (pathname === "/" && href === "/#curriculum" && false);
    }
    return pathname === path || activeLink === href;
  };

  const links = [
    ["Home", "/"],
    ["Curriculum", "/curriculum"],
    ["Pricing", STUDIELY_APP.pricing],
    ["FAQs", "/faqs"],
    ["Blogs", "/blog"],
    ["Nyla AI", "/nyla"],
    ["Contact Us", "/contact"],
  ] as const;

  const showNavbar = navbarVisible || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[400] transition-transform duration-300 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className={`${HOME_SHELL} bg-bg-base/90 pb-0 pt-1 backdrop-blur-md md:pt-1.5`}>
          <div className="flex h-[46px] items-center justify-between gap-3 rounded-[24px] bg-[#E8FF2F] px-3 sm:h-[50px] sm:px-4 md:rounded-[32px] md:px-5 lg:px-6">
            <Link
              href="/"
              className="flex shrink-0 items-center gap-1.5 transition-opacity hover:opacity-80"
              aria-label="Studiely home"
            >
              <Image
                src="/studiely-logo.svg"
                alt=""
                width={28}
                height={38}
                priority
                className="h-7 w-auto shrink-0 sm:h-8"
                aria-hidden
              />
              <Image
                src="/logo vector.png"
                alt="Studiely"
                width={83}
                height={24}
                priority
                unoptimized
                className="relative top-[1px] h-[15px] w-auto shrink-0 object-contain sm:top-[2px] sm:h-[18px]"
              />
            </Link>

            <nav
              className="hidden items-center gap-1 lg:flex xl:gap-2"
              aria-label="Main"
            >
              {links.map(([label, href]) => {
                const active =
                  label === "Home"
                    ? pathname === "/" && !activeLink
                    : label === "Nyla AI"
                      ? pathname === "/nyla"
                      : isLinkActive(href);
                return (
                  <Link
                    key={label}
                    href={href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setActiveLink(href)}
                    className={`funky-link whitespace-nowrap px-2 py-1 text-[12px] font-medium text-[#4F35F2] transition-opacity hover:opacity-80 xl:px-2.5 xl:text-[13px] ${
                      active ? "funky-link-active font-semibold" : ""
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden items-center gap-3 md:flex">
                <a
                  href={STUDIELY_APP.login}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="funky-link text-[12px] font-semibold text-[#4F35F2] transition-opacity hover:opacity-80 xl:text-[13px]"
                >
                  Login
                </a>
                <a
                  href={STUDIELY_APP.signUp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="funky-button inline-flex items-center justify-center rounded-full bg-[#4F35F2] px-3.5 py-1.5 text-[12px] font-semibold text-white transition-opacity hover:opacity-90 xl:px-4 xl:text-[13px]"
                >
                  Start Free
                </a>
              </div>

              <button
                className="flex flex-col gap-[5px] border-none bg-transparent p-1 lg:hidden"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-label="Toggle menu"
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={`block h-[2px] w-5 bg-[#4F35F2] transition-transform duration-250 ${
                      open && i === 0 ? "translate-y-[7px] rotate-45" : ""
                    } ${open && i === 2 ? "-translate-y-[7px] -rotate-45" : ""} ${
                      open && i === 1 ? "opacity-0" : "opacity-100"
                    }`}
                  />
                ))}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className="h-[calc(46px+0.25rem)] shrink-0 sm:h-[calc(50px+0.25rem)] md:h-[calc(50px+0.375rem)]"
        aria-hidden
      />

      {open ? (
        <div
          className="nav-menu-enter fixed inset-x-0 top-[calc(46px+0.25rem)] z-[399] border-b border-border-default bg-white p-4 shadow-lg sm:top-[calc(50px+0.25rem)] sm:p-6 md:top-[calc(50px+0.375rem)] lg:hidden"
          role="dialog"
          aria-label="Mobile navigation"
        >
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className={`block border-b border-border-lt px-3 py-3 text-base text-[#4F35F2] transition-colors last:border-b-0 ${
                (label === "Home"
                  ? pathname === "/"
                  : label === "Nyla AI"
                    ? pathname === "/nyla"
                    : isLinkActive(href))
                  ? "bg-[#f4ffe6] font-semibold"
                  : ""
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <a
              href={STUDIELY_APP.login}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-full border border-[#4F35F2] px-4 py-3 text-sm font-semibold text-[#4F35F2] funky-button"
            >
              Login
            </a>
            <a
              href={STUDIELY_APP.signUp}
              target="_blank"
              rel="noopener noreferrer"
              className="funky-button inline-flex flex-1 items-center justify-center rounded-full bg-[#4F35F2] px-4 py-3 text-sm font-semibold text-white"
            >
              Start Free
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
};
