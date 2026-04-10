"use client";

import { Reveal } from "@/components/Reveal";
import {
  StreakRewardIcon,
  CertificateRewardIcon,
  ReferRewardIcon,
} from "@/components/Icons";

const REWARDS = [
  {
    heading: "Daily Study Streaks",
    Icon: StreakRewardIcon,
    body:
      "Build a study habit by returning every day. Streak medals unlock at 15, 30, 60 and 90 days - with bonus credits at the 60 and 90-day milestones.",
  },
  {
    heading: "Subject Mastery Certificates",
    Icon: CertificateRewardIcon,
    body:
      "Track your progress across every subject through 7 milestones, from Beginner through to Mastery Award. Downloadable and shareable.",
  },
  {
    heading: "Refer and Earn",
    Icon: ReferRewardIcon,
    body: "Every five referrals earns you one free month of Studiely Premium.",
  },
];

interface RewardsProgressSectionProps {
  sectionRef?: React.Ref<HTMLElement>;
}

export const RewardsProgressSection = ({ sectionRef }: RewardsProgressSectionProps) => {
  return (
    <section ref={sectionRef} className="py-10 sm:py-12 md:py-14 bg-white border-t border-border-default">
      <div className="wrap">
        <Reveal>
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-[11px] uppercase tracking-[1.4px] font-semibold text-teal mb-1.5">
              Rewards & Progress
            </p>
            <h2 className="font-serif text-[clamp(26px,3.2vw,36px)] text-navy mb-3">
              Study Daily. Earn Rewards. Track Your Progress.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {REWARDS.map((item) => {
              const { Icon } = item;
              return (
                <div
                  key={item.heading}
                  className="rounded-xl border border-border-default bg-[#fafaf8] px-5 py-5 sm:py-6 flex flex-col items-center text-center"
                >
                  <div className="mb-3 flex justify-center">
                    <Icon />
                  </div>
                  <h3 className="text-[20px] text-navy mb-2.5">{item.heading}</h3>
                  <p className="text-[13px] text-muted leading-[1.7]">{item.body}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
