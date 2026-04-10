import type { FaqSection } from "./types";

export const sectionG: FaqSection = {
  id: "faq-rewards",
  title: "G. Rewards, Achievements & Referrals",
  intro: "Achievements, streaks, mastery, rewards, and Refer & Earn.",
  items: [
    {
      question: "What is the Achievements system?",
      schemaText:
        "Studiely's Achievements system recognises and rewards consistent, structured revision habits. Achievements are tracked through Study Streaks (consecutive days using the platform, with milestones unlocking badges, frames, bonus credits, and discount coupons) and Subject Mastery (progress as you generate and work through content, with milestones unlocking certificates and additional rewards). All achievements are visible on your Dashboard under My Achievements and in Profile → Achievements.",
      answer: (
        <>
          <p>
            Studiely&apos;s Achievements system recognises and rewards consistent, structured revision habits. It is
            built around a simple truth that the research consistently supports: sustained effort over time produces
            better academic outcomes than last-minute cramming.
          </p>
          <p>Achievements are tracked in two ways</p>
          <p>
            <strong className="text-navy font-semibold">Study Streaks</strong>
            <br />
            Studiely tracks how many consecutive days you use the platform. Reaching streak milestones unlocks
            tangible rewards — profile badges, exclusive frames, bonus credits, and discount coupons.
          </p>
          <p>
            <strong className="text-navy font-semibold">Subject Mastery</strong>
            <br />
            As you generate and work through content for a subject, Studiely tracks your mastery progress. Reaching
            milestones (such as 70% or 90% mastery) unlocks certificates and additional rewards.
          </p>
          <p>
            All achievements, medals, and certificates are visible on your Dashboard under &quot;My
            Achievements&quot; and in Profile → Achievements.
          </p>
        </>
      ),
    },
    {
      question: "What rewards can I earn?",
      schemaText:
        "Study Streak rewards: 15-day streak: Profile badge; 30-day streak: Exclusive profile frame; 60-day streak: +5 Writing Practice credits; 90-day streak: +10 Writing Practice credits, a 20% discount coupon, and a Platinum badge. Subject Mastery rewards: 70% mastery: Topic Pro certificate and +1 Writing Practice credit; 90% mastery: Mastery Award certificate with a celebration screen and shareable achievement prompt. The Refer & Earn programme adds further opportunities to earn free Premium time.",
      answer: (
        <>
          <p>
            Studiely&apos;s reward system creates a positive feedback loop for consistent study — recognising the
            effort that actually produces results.
          </p>
          <p>
            <strong className="text-navy font-semibold">Study Streak rewards</strong>
          </p>
          <ul>
            <li>15-day streak: Profile badge</li>
            <li>30-day streak: Exclusive profile frame</li>
            <li>60-day streak: +5 Writing Practice credits</li>
            <li>
              90-day streak: +10 Writing Practice credits, a 20% discount coupon, and a Platinum badge
            </li>
          </ul>
          <p>
            <strong className="text-navy font-semibold">Subject Mastery rewards</strong>
          </p>
          <ul>
            <li>70% mastery: &quot;Topic Pro&quot; certificate and +1 Writing Practice credit</li>
            <li>
              90% mastery: &quot;Mastery Award&quot; certificate with a celebration screen and shareable achievement
              prompt
            </li>
          </ul>
          <p>
            The Refer &amp; Earn programme adds further opportunities to earn free Premium time by inviting classmates
            and study partners.
          </p>
        </>
      ),
    },
    {
      question: "How does the Refer & Earn programme work?",
      schemaText:
        "Studiely's Refer & Earn programme lets you earn free Premium time by inviting friends to join the platform. Go to Profile → Refer & Earn. The app shows your current target — for example, Invite 2 more friends to earn 1 FREE month — and provides your unique referral link. When the required number of friends join using your referral link, you will receive a confirmation notification and the reward will be activated in your account.",
      answer: (
        <>
          <p>
            Studiely&apos;s Refer &amp; Earn programme lets you earn free Premium time by inviting friends to join the
            platform.
          </p>
          <p>
            To access it, go to Profile → Refer &amp; Earn. The app shows your current target — for example,
            &quot;Invite 2 more friends to earn 1 FREE month&quot; — and provides your unique referral link to share
            with classmates, study partners, or friends.
          </p>
          <p>
            When the required number of friends join using your referral link, you will receive a confirmation
            notification and the reward will be activated in your account, with the end date shown.
          </p>
          <p>
            This is one of the ways Studiely keeps Premium access affordable — students who share the platform with
            their study community can earn meaningful subscription time at no additional cost.
          </p>
        </>
      ),
    },
  ],
};
