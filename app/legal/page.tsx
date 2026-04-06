import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Legal | Studiely" },
  description:
    "Studiely legal documents: Privacy Policy, Terms of Service, account deletion, and platform policies.",
  alternates: { canonical: `${SITE_URL}/legal` },
  robots: { index: true, follow: true },
};

const links = [
  { href: "/legal/privacy-policy", label: "Privacy Policy (Google Play)" },
  { href: "/legal/terms-of-service", label: "Terms of Service" },
  { href: "/legal/delete-account-and-data", label: "Delete account & data" },
  { href: "/legal/privacy-policy-apple", label: "Privacy Policy (Apple App Store)" },
  { href: "/legal/web/privacy-policy", label: "Privacy Policy (web)" },
  { href: "/legal/web/refund-policy", label: "Refund & payments policy (web)" },
] as const;

export default function LegalIndexPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12 text-navy">
      <h1 className="mb-2 text-2xl font-semibold text-navy">Legal</h1>
      <p className="mb-8 text-muted">
        Official policies and legal documents for Studiely.
      </p>
      <ul className="list-inside list-disc space-y-2 text-teal">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className="hover:text-teal-dk underline-offset-2 hover:underline">
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-10">
        <Link href="/" className="text-muted text-sm hover:text-navy">
          ← Back to Studiely
        </Link>
      </p>
    </div>
  );
}
