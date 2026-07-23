import Image from "next/image";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";

export const CurriculumHeroSection = () => {
  return (
    <section
      aria-labelledby="curriculum-page-heading"
      className="bg-bg-base pb-[clamp(0.5rem,1.5vw,0.85rem)] pt-[clamp(0.5rem,1.5vw,1rem)]"
    >
      <div className="wrap">
        <div
          className="relative overflow-hidden rounded-[28px] sm:rounded-[32px]"
          style={{ backgroundColor: BLUE }}
        >
          <div className="grid items-stretch gap-3 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-4">
            <div className="relative z-[1] flex max-w-[700px] flex-col justify-center px-5 py-4 sm:px-8 sm:py-5 md:px-10 md:py-5 lg:px-12 lg:py-5">
              <span
                className="mb-2.5 inline-flex w-fit rounded-full px-3.5 py-1 font-jakarta text-[10px] font-extrabold uppercase tracking-[0.12em] text-white sm:mb-3 sm:text-[11px]"
                style={{ backgroundColor: PINK }}
              >
                Pathway Builder
              </span>

              <h1
                id="curriculum-page-heading"
                className="mb-2 font-heading text-[clamp(1.85rem,4.2vw,3rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-white sm:mb-2.5"
              >
                Find your{" "}
                <span className="whitespace-nowrap" style={{ color: LIME }}>
                  study path
                </span>
              </h1>

              <p className="m-0 max-w-[560px] font-jakarta text-[13px] leading-[1.7] text-white/90 sm:text-[14px] md:text-[15px]">
                Customize your academic journey with our intelligent curriculum
                selector. Choose your foundation and let&apos;s build your success
                together.
              </p>
            </div>

            <div className="relative flex h-full items-center justify-center self-stretch px-4 py-3 sm:px-6 sm:py-4 lg:justify-end lg:px-8 lg:py-4">
              <Image
                src="/curricula-hero.png"
                alt=""
                width={720}
                height={720}
                unoptimized
                priority
                aria-hidden
                className="h-auto w-full max-w-[min(100%,170px)] select-none object-contain lg:max-w-[min(100%,210px)]"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
