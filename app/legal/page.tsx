import type { Metadata } from "next";
import Link from "next/link";
import { ContactFooter } from "@/components/ContactFooter";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Legal | Studiely" },
  description:
    "Studiely legal documents: Privacy Policy, Terms of Service, account deletion, and platform policies.",
  alternates: { canonical: `${SITE_URL}/legal` },
  robots: { index: true, follow: true },
};

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";

const links = [
  { href: "/privacy-policy", label: "Privacy Policy", tone: "#4F35F2" },
  { href: "/terms-of-service", label: "Terms of Service", tone: "#FF36C6" },
  { href: "/cookie-policy", label: "Cookie Policy", tone: "#FF765E" },
  { href: "/disclaimer", label: "Disclaimer", tone: "#42D6E8" },
  { href: "/acceptable-use", label: "Acceptable Use Policy", tone: "#2CC59D" },
  { href: "/legal/privacy-policy", label: "Privacy Policy (Google Play)", tone: "#4F35F2" },
  { href: "/legal/terms-of-service", label: "Terms of Service (App)", tone: "#FF36C6" },
  { href: "/legal/delete-account-and-data", label: "Delete Account & Data", tone: "#FFC94A" },
  { href: "/legal/privacy-policy-apple", label: "Privacy Policy (Apple)", tone: "#8B5CF6" },
  { href: "/legal/web/privacy-policy", label: "Privacy Policy (Web)", tone: "#4F35F2" },
  { href: "/legal/web/refund-policy", label: "Refund & Payments Policy", tone: "#FF765E" },
] as const;

export default function LegalIndexPage() {
  return (
    <div className="font-jakarta">
      <section className="bg-bg-base pb-[clamp(1.75rem,3.5vw,2.5rem)] pt-[clamp(0.75rem,2vw,1.25rem)]">
        <div className="wrap">
          <div
            className="rounded-[32px] px-6 py-10 text-center sm:rounded-[40px] sm:px-10 sm:py-12"
            style={{ backgroundColor: BLUE }}
          >
            <span
              className="mb-5 inline-flex rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1E1B4B] sm:text-[11px]"
              style={{ backgroundColor: LIME }}
            >
              Legal Hub
            </span>
            <h1 className="mb-4 font-hanken text-[clamp(2rem,4.5vw,3rem)] font-extrabold text-white">
              Legal & Compliance
            </h1>
            <p className="m-0 mx-auto max-w-[560px] text-[14px] leading-[1.7] text-white/85 sm:text-[15px]">
              Official policies and legal documents for Studiely.
            </p>
          </div>
        </div>
      </section>

      <main className="bg-bg-base pb-[clamp(2.5rem,5vw,4rem)]">
        <div className="wrap">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {links.map(({ href, label, tone }) => (
              <Link
                key={href}
                href={href}
                className="funky-card rounded-[24px] bg-white px-5 py-5 shadow-[0_10px_28px_rgba(30,27,75,0.08)] sm:px-6 sm:py-6"
              >
                <span
                  className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-bold text-white"
                  style={{ backgroundColor: tone }}
                  aria-hidden
                >
                  •
                </span>
                <h2 className="m-0 font-hanken text-[16px] font-extrabold text-[#1E1B4B]">{label}</h2>
                <p className="mb-0 mt-2 font-jakarta text-[13px] font-bold text-[#4F35F2]">Open document →</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <ContactFooter />
    </div>
  );
}
