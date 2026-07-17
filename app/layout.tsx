import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Inter, Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { CookieConsentBannerClient } from "@/components/CookieConsentBannerClient";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Navbar } from "@/components/Navbar";
import { SiteInteractions } from "@/components/SiteInteractions";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFBEF",
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
    icon: [{ url: "/studiely-logo.svg", type: "image/svg+xml" }],
    shortcut: "/studiely-logo.svg",
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
      className={`${inter.variable} ${montserrat.variable} ${hankenGrotesk.variable} ${plusJakartaSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta
          name="facebook-domain-verification"
          content="ixoxjly0raima1favd2auxjangpbg5"
        />
      </head>
      <body className="site-funky antialiased font-sans bg-bg-base text-body">
        <GoogleAnalytics />
        <SiteInteractions />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Navbar />
        <div>{children}</div>
        <CookieConsentBannerClient />
      </body>
    </html>
  );
}
