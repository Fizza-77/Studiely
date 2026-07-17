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
      className="bg-bg-base pb-[clamp(1.25rem,3vw,2rem)] pt-[clamp(2.75rem,6vw,5rem)]"
    >
      <div className="wrap">
        <div className="mb-[clamp(1.75rem,3.5vw,2.75rem)] text-center">
          <p
            className="mb-1 font-heading text-[clamp(1.75rem,3.4vw,2.65rem)] font-semibold leading-[1.12] tracking-[-0.02em]"
            style={{ color: PINK }}
          >
            Study Daily. Earn Rewards.
          </p>
          <h2
            id="rewards-progress-heading"
            className="font-heading text-[clamp(1.75rem,3.4vw,2.65rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-[#1E1B4B]"
          >
            Track Your Progress.
          </h2>
        </div>

        <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-3 md:gap-5">
          {REWARDS.map(({ title, body, bg, icon, featured }) => (
            <article
              key={title}
              className={`flex flex-col rounded-[28px] px-6 py-7 shadow-[0_14px_32px_rgba(30,27,75,0.18)] sm:px-7 sm:py-8 ${
                featured
                  ? "min-h-[250px] md:min-h-[280px] md:scale-[1.06] md:px-8 md:py-9"
                  : "min-h-[220px] sm:min-h-[240px]"
              }`}
              style={{ backgroundColor: bg }}
            >
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
                <Image
                  src={icon}
                  alt=""
                  width={22}
                  height={22}
                  className="h-[22px] w-[22px] object-contain mix-blend-screen"
                  aria-hidden
                />
              </span>
              <h3 className="mb-3 font-jakarta text-[1.2rem] font-extrabold leading-tight text-white sm:text-[1.3rem]">
                {title}
              </h3>
              <p className="m-0 font-sans text-[14px] leading-relaxed text-white/90 sm:text-[15px]">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
