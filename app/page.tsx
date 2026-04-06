import type { Metadata } from "next";
import { HomePageContent } from "@/components/HomePageContent";

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Studiely",
  url: "https://www.studiely.com",
  applicationCategory: "EducationApplication",
  operatingSystem: "iOS, Android, Web",
  description:
    "AI study app generating curriculum-aligned revision notes, flashcards, " +
    "quizzes and exam practice for GCSE, IB, A-Level, SAT, HSC and more.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description:
      "Free plan with 5 one-time credits. Premium subscriptions available " +
      "monthly, quarterly and annually.",
  },
  featureList: [
    "AI revision notes",
    "Spaced-repetition flashcards",
    "Quiz generator",
    "Exam practice with AI feedback",
    "AI tutor Nyla",
    "Mnemonics generator",
    "Exam writing mode",
    "Study streaks and rewards",
  ],
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
  },
  provider: {
    "@type": "Organization",
    name: "Studiely",
    url: "https://www.studiely.com",
  },
};

export const metadata: Metadata = {
  title: "Studiely — AI Study App for GCSE, IB, SAT & All Curricula",
  description:
    "Generate revision notes, flashcards, quizzes and exam practice aligned to US, Australia, Canada, UK curriculas.",
  alternates: {
    canonical: "https://www.studiely.com",
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
