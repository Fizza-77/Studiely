"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { STUDIELY_APP } from "@/lib/appUrls";

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
        <div className="wrap bg-bg-base/90 py-3 backdrop-blur-md md:py-4">
          <div className="flex h-[56px] items-center justify-between gap-3 rounded-[28px] bg-[#E8FF2F] px-3 sm:h-[62px] sm:px-5 md:rounded-[40px] md:px-6 lg:px-8">
            <Link
              href="/"
              className="flex shrink-0 items-center gap-1.5 transition-transform hover:scale-[1.03] sm:gap-2"
              aria-label="Studiely home"
            >
              <Image
                src="/studiely-logo.svg"
                alt=""
                width={28}
                height={38}
                priority
                className="h-8 w-auto shrink-0 sm:h-9"
                aria-hidden
              />
              <Image
                src="/logo vector.png"
                alt="Studiely"
                width={83}
                height={24}
                priority
                unoptimized
                className="relative top-[2px] h-[18px] w-auto shrink-0 object-contain sm:top-[3px] sm:h-[22px]"
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
                    className={`funky-link whitespace-nowrap px-2.5 py-1.5 text-[13px] font-medium text-[#4F35F2] transition-opacity hover:opacity-80 xl:px-3 xl:text-[14px] ${
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
                  className="funky-link text-[13px] font-semibold text-[#4F35F2] transition-opacity hover:opacity-80 xl:text-[14px]"
                >
                  Login
                </a>
                <a
                  href={STUDIELY_APP.signUp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="funky-button inline-flex items-center justify-center rounded-full bg-[#4F35F2] px-4 py-2 text-[13px] font-semibold text-white transition-opacity hover:opacity-90 xl:px-5 xl:text-[14px]"
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
        className="h-[calc(56px+1.5rem)] shrink-0 md:h-[calc(62px+2rem)]"
        aria-hidden
      />

      {open ? (
        <div
          className="nav-menu-enter fixed inset-x-0 top-[calc(56px+1.5rem)] z-[399] border-b border-border-default bg-white p-4 shadow-lg sm:top-[calc(62px+1.5rem)] sm:p-6 md:top-[calc(62px+2rem)] lg:hidden"
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
