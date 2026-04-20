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
    <section ref={sectionRef} className="section-y border-t border-border-default bg-white">
      <div className="wrap">
        <Reveal>
          <div className="mb-[clamp(1.6rem,2.9vw,2.5rem)] text-center">
            <p className="fluid-eyebrow mb-1.5 font-semibold uppercase text-teal">
              Rewards & Progress
            </p>
            <h2 className="fluid-h2 mb-[clamp(0.6rem,1.15vw,0.95rem)] font-serif text-navy">
              Study Daily. Earn Rewards. Track Your Progress.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="responsive-card-grid [--card-min:240px]">
            {REWARDS.map((item) => {
              const { Icon } = item;
              return (
                <div
                  key={item.heading}
                  className="responsive-card flex flex-col items-center border border-border-default bg-[#fafaf8] text-center"
                >
                  <div className="mb-[clamp(0.65rem,1.1vw,0.95rem)] flex justify-center">
                    <Icon />
                  </div>
                  <h3 className="mb-[clamp(0.55rem,1vw,0.8rem)] text-[clamp(1.18rem,0.68vw+1rem,1.45rem)] text-navy">{item.heading}</h3>
                  <p className="text-[clamp(0.86rem,0.3vw+0.77rem,0.98rem)] leading-[1.7] text-body">{item.body}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
