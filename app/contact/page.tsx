import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { ContactHeroSection } from "@/sections/ContactHeroSection";
import { ContactSupportCardsSection } from "@/sections/ContactSupportCardsSection";
import { ContactAboutSection } from "@/sections/ContactAboutSection";
import { ContactHelpTopicsSection } from "@/sections/ContactHelpTopicsSection";
import { DEFAULT_OG_IMAGE_PATH, SITE_URL } from "@/lib/site";
import { buildBreadcrumbSchema } from "@/lib/seo";

const contactTitle = "Contact Studiely — Support, Feedback & Help";
const contactDescription =
  "Get in touch with the Studiely team for support, feedback, billing questions, or partnerships. We typically respond within 24 hours.";

export const metadata: Metadata = {
  title: contactTitle,
  description: contactDescription,
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: contactTitle,
    description: contactDescription,
    url: `${SITE_URL}/contact`,
    type: "website",
    siteName: "Studiely",
    images: [{ url: DEFAULT_OG_IMAGE_PATH, alt: "Contact Studiely" }],
  },
  twitter: {
    card: "summary_large_image",
    title: contactTitle,
    description: contactDescription,
    images: [DEFAULT_OG_IMAGE_PATH],
  },
};

const breadcrumbSchema = buildBreadcrumbSchema("Contact Us", "/contact");

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <main className="min-h-screen bg-bg-base font-jakarta">
        <ContactHeroSection />
        <ContactSupportCardsSection />
        <ContactAboutSection />
        <ContactHelpTopicsSection />
      </main>
      <Footer />
    </>
  );
}
