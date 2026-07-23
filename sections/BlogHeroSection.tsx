const LIME = "#E8FF2F";
const PINK = "#FF36C6";

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8" fill={PINK} aria-hidden>
    <path d="M12 20.5s-6.2-4.1-8.4-7.4C1.8 10.3 2.6 6.8 5.4 5.4c2-.9 4.3-.2 5.6 1.5 1.3-1.7 3.6-2.4 5.6-1.5 2.8 1.4 3.6 4.9 1.8 7.7C18.2 16.4 12 20.5 12 20.5Z" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8" fill={LIME} aria-hidden>
    <path d="M12 3.2l2.45 5.52 5.98.52-4.52 3.92 1.36 5.84L12 16.9l-5.27 2.1 1.36-5.84-4.52-3.92 5.98-.52L12 3.2Z" />
  </svg>
);

type BlogHeroSectionProps = {
  headline: string;
  subheadline: string;
};

export const BlogHeroSection = ({ headline, subheadline }: BlogHeroSectionProps) => {
  return (
    <section
      aria-labelledby="blog-hero-heading"
      className="bg-bg-base pb-[clamp(1.15rem,2.5vw,1.75rem)] pt-[clamp(0.75rem,2vw,1.25rem)]"
    >
      <div className="wrap">
        <div
          className="relative w-full overflow-hidden rounded-[24px] px-4 py-7 text-center sm:rounded-[32px] sm:px-8 sm:py-9 md:rounded-[40px] md:px-10 md:py-11 lg:px-14 lg:py-12"
          style={{ backgroundColor: "#4F35F2" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-4 left-4 opacity-55 sm:bottom-10 sm:left-10 sm:opacity-100"
          >
            <HeartIcon />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute right-4 top-4 opacity-55 sm:right-10 sm:top-10 sm:opacity-100"
          >
            <StarIcon />
          </div>

          <div className="relative z-[1] mx-auto max-w-[720px]">
            <span
              className="mb-3 inline-flex rounded-full px-4 py-1.5 font-jakarta text-[10px] font-bold uppercase tracking-[0.12em] text-[#1E1B4B] sm:mb-4 sm:text-[11px]"
              style={{ backgroundColor: LIME }}
            >
              Resources &amp; Insights
            </span>

            <h1
              id="blog-hero-heading"
              className="mb-3 break-words font-hanken text-[clamp(1.65rem,4.2vw,2.85rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white sm:mb-4"
            >
              {headline}
            </h1>

            <p className="m-0 mx-auto max-w-[560px] font-jakarta text-[14px] leading-[1.7] text-white/85 sm:text-[15px] md:text-[16px]">
              {subheadline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
