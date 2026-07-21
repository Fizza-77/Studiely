"use client";

import Image from "next/image";

const BLUE = "#4F35F2";
const PINK = "#FF36C6";

const REWARDS = [
  {
    title: "Daily Study Streaks",
    body: "Stay motivated and earn exclusive digital badges for consistent daily learning.",
    bg: BLUE,
    icon: "/streak.png",
    featured: false,
  },
  {
    title: "Subject Mastery Certificates",
    body: "Download and share recognized certificates once you complete a module.",
    bg: PINK,
    icon: "/cup.png",
    featured: true,
  },
  {
    title: "Refer and Earn",
    body: "Invite friends and unlock premium features together for a whole month.",
    bg: BLUE,
    icon: "/refer.png",
    featured: false,
  },
] as const;

interface RewardsProgressSectionProps {
  sectionRef?: React.Ref<HTMLElement>;
}

export const RewardsProgressSection = ({
  sectionRef,
}: RewardsProgressSectionProps) => {
  return (
    <section
      ref={sectionRef}
      aria-labelledby="rewards-progress-heading"
      className="pb-[clamp(1.25rem,3vw,2rem)] pt-[clamp(1rem,2.5vw,1.75rem)]"
    >
      <div className="wrap">
        <div className="mb-[clamp(1.75rem,3.5vw,2.75rem)] overflow-x-clip px-2 text-center sm:px-4">
          <h2
            id="rewards-progress-heading"
            className="mx-auto font-heading text-[clamp(1.15rem,5vw,2.65rem)] font-semibold leading-[1.18] tracking-[-0.02em]"
          >
            <span className="block whitespace-nowrap" style={{ color: PINK }}>
              Study Daily. Earn Rewards.
            </span>
            <span className="mt-1 block whitespace-nowrap text-[#1E1B4B]">
              Track Your Progress.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-3 md:gap-5">
          {REWARDS.map(({ title, body, bg, icon }) => (
            <div
              key={title}
              role="article"
              className="group relative flex flex-col items-center overflow-visible rounded-[32px] px-5 py-7 text-center shadow-[0_14px_32px_rgba(30,27,75,0.14)] transition-[translate,scale,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[translate,scale] hover:z-10 hover:-translate-y-3 hover:scale-[1.04] hover:shadow-[0_22px_48px_rgba(30,27,75,0.2)] motion-reduce:transition-none motion-reduce:hover:translate-none motion-reduce:hover:scale-100 sm:px-6 sm:py-8"
              style={{ backgroundColor: bg }}
            >
              <Image
                src="/reward-flower.png"
                alt=""
                width={220}
                height={220}
                unoptimized
                aria-hidden
                className="pointer-events-none absolute right-0 top-0 z-[2] h-auto w-[clamp(5.5rem,12vw,8rem)] max-w-none translate-x-[42%] -translate-y-[48%] scale-90 select-none opacity-0 transition-[opacity,transform] duration-500 ease-out group-hover:translate-x-[42%] group-hover:-translate-y-[48%] group-hover:scale-100 group-hover:opacity-100 motion-reduce:transition-none sm:w-[clamp(6rem,13vw,8.5rem)]"
                draggable={false}
              />

              <span className="relative z-[1] mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
                <Image
                  src={icon}
                  alt=""
                  width={22}
                  height={22}
                  unoptimized
                  className="h-[22px] w-[22px] object-contain brightness-0 invert"
                  aria-hidden
                />
              </span>

              <h3 className="relative z-[1] mb-2.5 max-w-[16ch] font-jakarta text-[clamp(1.05rem,1.6vw,1.25rem)] font-extrabold leading-tight text-white">
                {title}
              </h3>
              <p className="relative z-[1] m-0 max-w-[30ch] font-sans text-[13px] leading-relaxed text-white sm:text-[14px]">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
