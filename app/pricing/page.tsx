import type { Metadata } from "next";
import { PricingSection } from "@/sections/PricingSection";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Pricing – Plans for AI Study Tools",
  description:
    "Choose the right Studiely plan for AI-powered notes, quizzes, flashcards and exam-style practice tailored to your curriculum.",
  openGraph: {
    title: "Studiely Pricing – AI Study Plans",
    description:
      "Compare Studiely plans and pick the best AI-powered study toolkit for your curriculum and grade.",
    url: "https://studiely.app/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studiely Pricing – AI Study Plans",
    description:
      "Compare Studiely plans and pick the best AI-powered study toolkit for your curriculum and grade.",
  },
};
export default function PricingPage() {
  return (
    <>
      <PageHeader
        label="Plans & Pricing"
        title="Simple, Student-Friendly Pricing"
        sub="Start free with 5 generations, then upgrade for unlimited, curriculum-aligned AI notes, quizzes, flashcards, and exam questions."
    variant="compact"
    />
      <main className="bg-bg-base min-h-screen pt-[32px] pb-[40px]">
        <div className="wrap max-w-[1120px] mx-auto px-4">
          <Reveal>
            <div className="max-w-[560px] mx-auto mb-8 px-5 py-2.5 bg-[#fff8f3] border border-[#f0d5bf] rounded-lg text-center text-[13px] text-amber">
              🎉 67% Launch Celebration Offer — Limited Time Only
            </div>
          </Reveal>
          <PricingSection compact />
        </div>
      </main>
      <Footer />
    </>
  );
}