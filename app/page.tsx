import type { Metadata } from "next";
import { HomePageContent } from "@/components/HomePageContent";
import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Studiely",
  url: SITE_URL,
  applicationCategory: "EducationApplication",
  operatingSystem: "iOS, Android, Web",
  description:
    "AI study assistant and student tools: curriculum-aligned summary notes, flashcards, " +
    "AI learning, quizzes and exam practice for IGCSE, GCSE, IB, A-Level, SAT, HSC and more.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description:
      "Free plan with 5 one-time credits. Premium subscriptions available " +
      "monthly, quarterly and annually.",
  },
  featureList: [
    "AI summary notes",
    "Spaced-repetition flashcards",
    "Quiz generator",
    "Exam practice with AI feedback",
    "AI tutor Nyla",
    "Mnemonics generator",
    "Exam practice mode",
    "Study streaks and rewards",
  ],
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
  },
  provider: {
    "@type": "Organization",
    name: "Studiely",
    url: SITE_URL,
  },
};

const homeTitle = "Studiely — AI Study Assistant, IGCSE Tutor & Exam Practice";
const homeDescription =
  "Studiely is your AI study assistant for real exams: AI learning, flashcards, quizzes, and exam practice " +
  "for IGCSE, IB, GCSE, A-Level, SAT & more. Student tools aligned to your board — start free.";

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: SITE_URL,
    type: "website",
    siteName: "Studiely",
    images: [{ url: DEFAULT_OG_IMAGE_PATH, alt: "Studiely" }],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [DEFAULT_OG_IMAGE_PATH],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webAppSchema),
        }}
      />
      <HomePageContent />
    </>
  );
}
