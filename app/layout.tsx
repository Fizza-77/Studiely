import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import Script from "next/script";
import { CookieConsentBannerClient } from "@/components/CookieConsentBannerClient";
import { Navbar } from "@/components/Navbar";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f8f6",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Studiely — AI Study App for GCSE, IB, SAT & All Curricula",
    template: "%s | Studiely",
  },
  description:
    "Generate summary notes, flashcards, quizzes and exam practice " +
    "aligned to your exact curriculum and exam board. " +
    "GCSE, IB, A-Level, SAT, HSC and more. Free to start.",
  keywords: [
    "AI study app",
    "summary notes",
    "flashcards",
    "exam practice",
    "GCSE revision",
    "IB study",
    "A-Level",
    "SAT prep",
    "HSC",
    "Common Core",
    "IGCSE",
    "AI tutor",
    "spaced repetition",
    "quiz generator",
  ],
  authors: [{ name: "Studiely", url: SITE_URL }],
  creator: "Studiely",
  publisher: "Studiely",
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  openGraph: {
    type: "website",
    siteName: "Studiely",
    title: "Studiely — AI Study App for GCSE, IB, SAT & All Curricula",
    description:
      "Generate summary notes, flashcards, quizzes and exam practice " +
      "aligned to your exact curriculum and exam board. Free to start.",
    url: SITE_URL,
    images: [
      {
        url: DEFAULT_OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: "Studiely — AI Study App for GCSE, IB, SAT and all curricula",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studiely — AI Study App for GCSE, IB, SAT & All Curricula",
    description:
      "Summary notes, flashcards, quizzes and exam practice " +
      "for every curriculum. Free to start.",
    images: [DEFAULT_OG_IMAGE_PATH],
  },
  /** Per-route canonical is set in each page’s metadata to avoid duplicate signals. */
  alternates: {
    languages: {
      "en-GB": SITE_URL,
      "en-US": SITE_URL,
      "en-AU": SITE_URL,
      "en-CA": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Studiely",
  url: SITE_URL,
  logo: `${SITE_URL}${DEFAULT_OG_IMAGE_PATH}`,
  description:
    "AI-powered study platform for international curricula: notes, quizzes, flashcards, and exam-style practice aligned to your board and grade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerifDisplay.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta
          name="facebook-domain-verification"
          content="ixoxjly0raima1favd2auxjangpbg5"
        />
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-NXQX4TMW7X"
        />
        <Script id="google-analytics-init" strategy="lazyOnload" src="/gtag-init.js" />
      </head>
      <body className="antialiased font-sans bg-bg-base text-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Navbar />
        <div className="pt-[66px]">{children}</div>
        <CookieConsentBannerClient />
      </body>
    </html>
  );
}
