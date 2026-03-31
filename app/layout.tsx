import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import Script from "next/script";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
 title: {
  default: "Studiely | AI Study Tools for IGCSE, GCSE & IB",
  template: "%s | Studiely",
},
  description:
    "Pick your board, grade, and topic — get notes, quizzes, flashcards, and exam-style questions tuned to British, IB, US, and other international curricula. Start free.",
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  openGraph: {
    title:
      "Studiely — Curriculum-Aligned AI Study Tools for International Students",
    description:
      "Notes, quizzes, flashcards, and exam questions matched to your syllabus — not generic AI summaries.",
    url: SITE_URL,
    siteName: "Studiely",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: DEFAULT_OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: "Studiely — AI study tools for your curriculum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Studiely — Curriculum-Aligned AI Notes, Quizzes & Flashcards",
    description:
      "Study tools built for IGCSE, GCSE, IB, A-Level, and more — aligned to what you actually learn in class.",
    images: [DEFAULT_OG_IMAGE_PATH],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
      className={`${nunitoSans.variable} ${nunito.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-NXQX4TMW7X"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NXQX4TMW7X');
            `,
          }}
        />
      </head>
      <body className="antialiased font-sans bg-bg-base text-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
