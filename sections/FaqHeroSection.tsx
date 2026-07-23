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

export const FaqHeroSection = () => {
  return (
    <section
      aria-labelledby="faq-hero-heading"
      className="bg-bg-base pb-0 pt-[clamp(0.75rem,2vw,1.25rem)]"
    >
      <div className="wrap">
        <div
          className="relative overflow-hidden rounded-[32px] px-4 py-8 text-center sm:rounded-[40px] sm:px-10 sm:py-10 md:py-12 lg:px-14"
          style={{
            background:
              "linear-gradient(135deg, #2A1F8F 0%, #4F35F2 48%, #8B3FE8 100%)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full bg-[#B8CC00]/55 blur-[56px] sm:h-52 sm:w-52"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-12 -right-8 h-48 w-48 rounded-full bg-[#D91A8F]/55 blur-[60px] sm:h-56 sm:w-56"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute bottom-8 left-8 sm:bottom-10 sm:left-10"
          >
            <HeartIcon />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute right-8 top-8 sm:right-10 sm:top-10"
          >
            <StarIcon />
          </div>

          <div className="relative z-[1] mx-auto max-w-[720px]">
            <span
              className="mb-3 inline-flex rounded-full px-4 py-1.5 font-jakarta text-[10px] font-bold uppercase tracking-[0.12em] text-[#1E1B4B] sm:mb-4 sm:text-[11px]"
              style={{ backgroundColor: LIME }}
            >
              Support &amp; Help
            </span>

            <h1
              id="faq-hero-heading"
              className="mb-3 break-words font-jakarta text-[clamp(1.35rem,4vw,2.75rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-white sm:mb-4"
            >
              Frequently Asked Questions (FAQ)
            </h1>

            <p className="m-0 mx-auto max-w-[560px] font-jakarta text-[14px] leading-[1.7] text-white/85 sm:text-[15px] md:text-[16px]">
              Everything you need to know about Studiely. Can&apos;t find the
              answer? Our team is always ready to help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
