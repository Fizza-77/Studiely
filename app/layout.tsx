import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studiely.app"),
  title: {
    default: "Studiely – AI-Powered Study Tool for Students",
    template: "%s | Studiely",
  },
  description:
    "Select your curriculum, pick your grade and topic — Studiely instantly generates notes, quizzes, flashcards, and exam questions aligned to your exact board.",
  openGraph: {
    title: "Studiely – AI-Powered Study Tool for Students",
    description:
      "Curriculum-aligned AI notes, quizzes, flashcards and exam questions for school and exam prep.",
    url: "https://studiely.app",
    siteName: "Studiely",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studiely – AI-Powered Study Tool for Students",
    description:
      "Curriculum-aligned AI notes, quizzes, flashcards and exam questions for school and exam prep.",
  },
  alternates: {
    canonical: "https://studiely.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased font-sans bg-bg-base text-body">
        {children}
      </body>
    </html>
  );
}
