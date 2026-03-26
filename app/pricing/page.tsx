import type { Metadata } from "next";
import { PricingSection } from "@/sections/PricingSection";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { PageHeader } from "@/components/PageHeader";
import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing — AI Study Plans (Free Tier & Premium)",
  description:
    "Start with 5 free generations, then unlock unlimited notes, quizzes, flashcards, exports, and Nyla priority. Compare Monthly, 3‑month, 6‑month, and Annual plans.",
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    title: "Studiely Pricing — Simple Plans for Curriculum-Aligned AI Study",
    description:
      "Free starter credits and Premium plans with unlimited tools, fair-usage policy, and optional Exam Practice add-on.",
    url: `${SITE_URL}/pricing`,
    siteName: "Studiely",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE_PATH, alt: "Studiely" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studiely Pricing",
    description:
      "Compare Free vs Premium and pick the plan that matches your revision load.",
    images: [DEFAULT_OG_IMAGE_PATH],
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
      {/*    <Reveal>
            <div className="max-w-[560px] mx-auto mb-8 px-5 py-2.5 bg-[#fff8f3] border border-[#f0d5bf] rounded-lg text-center text-[13px] text-amber">
              🎉 67% Launch Celebration Offer — Limited Time Only
            </div>
          </Reveal> */}
          <PricingSection compact />
        </div>
      </main>
      <Footer />
    </>
  );
}