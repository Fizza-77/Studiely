const LIME = "#E8FF2F";
const BLUE = "#4F35F2";

type LegalHeroSectionProps = {
  title: string;
  badge?: string;
  metaItems?: string[];
};

export const LegalHeroSection = ({
  title,
  badge = "Legal & Compliance",
  metaItems = [],
}: LegalHeroSectionProps) => {
  return (
    <section
      aria-labelledby="legal-hero-heading"
      className="bg-bg-base pb-[clamp(1.15rem,2.5vw,1.75rem)] pt-[clamp(0.75rem,2vw,1.25rem)]"
    >
      <div className="wrap">
        <div
          className="w-full rounded-[24px] px-4 py-6 text-center sm:rounded-[32px] sm:px-8 sm:py-8 md:rounded-[40px] md:px-10 md:py-10 lg:py-11"
          style={{ backgroundColor: BLUE }}
        >
          <span
            className="mb-3 inline-flex rounded-full px-4 py-1.5 font-jakarta text-[10px] font-bold uppercase tracking-[0.12em] text-[#1E1B4B] sm:mb-4 sm:text-[11px]"
            style={{ backgroundColor: LIME }}
          >
            {badge}
          </span>

          <h1
            id="legal-hero-heading"
            className="mb-3 break-words font-hanken text-[clamp(1.65rem,4.2vw,2.85rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white sm:mb-4"
          >
            {title}
          </h1>

          {metaItems.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {metaItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/10 px-3 py-1.5 font-jakarta text-[10px] font-semibold text-white/80 sm:text-[11px]"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
