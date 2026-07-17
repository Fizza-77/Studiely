import Image from "next/image";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";

export const CurriculumHeroSection = () => {
  return (
    <section
      aria-labelledby="curriculum-page-heading"
      className="bg-bg-base pb-[clamp(2rem,4vw,3rem)] pt-[clamp(0.75rem,2vw,1.25rem)]"
    >
      <div className="wrap">
        <div
          className="relative overflow-hidden rounded-[32px] px-6 py-9 sm:rounded-[40px] sm:px-10 sm:py-11 md:px-12 md:py-12 lg:px-14"
          style={{ backgroundColor: BLUE }}
        >
          <div className="relative z-[1] max-w-[760px]">
            <span
              className="mb-5 inline-flex rounded-full px-4 py-1.5 font-jakarta text-[10px] font-extrabold uppercase tracking-[0.12em] text-white sm:mb-6 sm:text-[11px]"
              style={{ backgroundColor: PINK }}
            >
              Pathway Builder
            </span>

            <h1
              id="curriculum-page-heading"
              className="mb-4 font-hanken text-[clamp(2.15rem,5.2vw,3.75rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-[#171725] sm:mb-5"
            >
              Find your{" "}
              <span className="whitespace-nowrap" style={{ color: LIME }}>
                study path
              </span>
            </h1>

            <p className="m-0 max-w-[600px] font-jakarta text-[14px] leading-[1.75] text-white/90 sm:text-[15px] md:text-[16px]">
              Customize your academic journey with our intelligent curriculum
              selector. Choose your foundation and let&apos;s build your success
              together.
            </p>
          </div>

          <Image
            src="/rocket-currciulum.png"
            alt=""
            width={128}
            height={128}
            unoptimized
            aria-hidden
            className="pointer-events-none absolute bottom-7 right-7 h-20 w-20 object-contain opacity-60 sm:bottom-8 sm:right-9 sm:h-24 sm:w-24 md:bottom-9 md:right-11 md:h-28 md:w-28"
          />
        </div>
      </div>
    </section>
  );
};
