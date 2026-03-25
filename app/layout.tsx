import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://studiely.app"),
  title: {
    default: "Studiely – AI-Powered Study Tool for Students",
    template: "%s | Studiely",
  },
  description:
    "Select your curriculum, pick your grade and topic — Studiely instantly generates notes, quizzes, flashcards, and exam questions aligned to your exact board.",
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
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
    <html lang="en" className={`${nunitoSans.variable} ${nunito.variable}`}>
      <body className="antialiased font-sans bg-bg-base text-body">
        {children}
      </body>
    </html>
  );
}
