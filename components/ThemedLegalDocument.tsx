import Link from "next/link";
import { Footer } from "@/components/Footer";
import { extractLegalDocumentParts } from "@/lib/legal/extractLegalDocumentParts";
import { LegalHeroSection } from "@/sections/LegalHeroSection";
import "@/app/legal/legal-content.module.css";

const LIME = "#E8FF2F";

type ThemedLegalDocumentProps = {
  html: string;
  badge?: string;
  backHref?: string;
  backLabel?: string;
};

export const ThemedLegalDocument = ({
  html,
  badge,
  backHref = "/",
  backLabel = "← Back to Studiely",
}: ThemedLegalDocumentProps) => {
  const { title, metaItems, bodyHtml } = extractLegalDocumentParts(html);

  return (
    <div className="font-jakarta">
      <LegalHeroSection title={title} badge={badge} metaItems={metaItems} />
      <main className="min-h-screen overflow-x-clip bg-bg-base pb-[clamp(1.5rem,3.5vw,2.5rem)]">
        <div className="wrap">
          <article className="legal-document mx-auto w-full max-w-[1280px] overflow-hidden rounded-[24px] bg-white px-4 py-6 shadow-[0_14px_40px_rgba(30,27,75,0.08)] sm:rounded-[28px] sm:px-7 sm:py-8 md:rounded-[32px] md:px-10 md:py-10 lg:px-12">
            <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />

            <div className="mt-10 border-t border-[#ECEEF6] pt-8">
              <Link
                href={backHref}
                className="funky-button inline-flex items-center justify-center rounded-full px-5 py-3 text-[13px] font-bold text-[#1E1B4B] sm:text-[14px]"
                style={{ backgroundColor: LIME }}
              >
                {backLabel}
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};
