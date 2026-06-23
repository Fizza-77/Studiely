import Image from "next/image";

const NYLA_AVATAR_SRC = "/nyla-avatar.png";

export const NylaAvatar = ({ size = 44 }: { size?: number; noBackground?: boolean }) => (
  <span
    className="inline-flex shrink-0 overflow-hidden rounded-full"
    style={{ width: size, height: size }}
  >
    <Image
      src={NYLA_AVATAR_SRC}
      alt="Nyla"
      width={size}
      height={size}
      className="h-full w-full object-cover"
    />
  </span>
);

export const StudyToolsNavIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Book cover */}
    <rect
      x="6"
      y="6"
      width="24"
      height="24"
      rx="2"
      ry="2"
      fill="#eceaff"
      stroke="#5448c8"
      strokeWidth="1.5"
    />
    {/* Book spine */}
    <rect
      x="12"
      y="6"
      width="4"
      height="24"
      fill="#5448c8"
      opacity="0.85"
    />
    {/* Book pages lines */}
    <line
      x1="18"
      y1="10"
      x2="26"
      y2="10"
      stroke="#5448c8"
      strokeWidth="1"
      opacity="0.5"
      strokeLinecap="round"
    />
    <line
      x1="18"
      y1="14"
      x2="26"
      y2="14"
      stroke="#5448c8"
      strokeWidth="1"
      opacity="0.5"
      strokeLinecap="round"
    />
    <line
      x1="18"
      y1="18"
      x2="26"
      y2="18"
      stroke="#5448c8"
      strokeWidth="1"
      opacity="0.5"
      strokeLinecap="round"
    />
    <line
      x1="18"
      y1="22"
      x2="26"
      y2="22"
      stroke="#5448c8"
      strokeWidth="1"
      opacity="0.5"
      strokeLinecap="round"
    />
  </svg>
);
export const WritingNavIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="17" fill="#fff1e4" stroke="#d97b2a" strokeWidth="1" />
    <circle cx="18" cy="18" r="11" fill="none" stroke="#d97b2a" strokeWidth="1.3" opacity=".5" />
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
      const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
      const r1 = i % 3 === 0 ? 8.5 : 9;
      return (
        <line
          key={i}
          x1={Number((18 + r1 * Math.cos(a)).toFixed(4))}
          y1={Number((18 + r1 * Math.sin(a)).toFixed(4))}
          x2={Number((18 + 11 * Math.cos(a)).toFixed(4))}
          y2={Number((18 + 11 * Math.sin(a)).toFixed(4))}
          stroke="#d97b2a"
          strokeWidth={i % 3 === 0 ? 1.4 : 0.8}
          opacity=".6"
        />
      );
    })}
    <line
      x1="18"
      y1="18"
      x2="18"
      y2="12"
      stroke="#d97b2a"
      strokeWidth="1.5"
      strokeLinecap="round"
      className="origin-[18px_18px] animate-hr-hand-spin"
    />
    <g className="origin-[18px_18px] animate-min-hand-spin">
      <line
        x1="18"
        y1="18"
        x2="24"
        y2="13"
        stroke="#d97b2a"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <polygon points="24,13 26,11 25.2,13.5" fill="#d97b2a" />
    </g>
    <circle cx="18" cy="18" r="1.5" fill="#d97b2a" />
  </svg>
);

export const CurriculumNavIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden>
    <rect x="5" y="7" width="26" height="22" rx="4" fill="#e6fffb" stroke="#00b09b" strokeWidth="1.4" />
    <path d="M11 13h14M11 17h9M11 21h11" stroke="#00b09b" strokeWidth="1.4" strokeLinecap="round" opacity=".75" />
    <circle cx="26" cy="24" r="5" fill="#00b09b" opacity=".18" />
    <path d="M26 22v4M24 24h4" stroke="#00b09b" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const RewardsNavIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden>
    <circle cx="18" cy="18" r="13" fill="#fff7ed" stroke="#d97b2a" strokeWidth="1.3" />
    <path d="M18 9l2.5 5.1 5.6.8-4.1 4 1 5.6L18 22l-5 2.5 1-5.6-4.1-4 5.6-.8L18 9z" fill="#d97b2a" opacity=".75" />
  </svg>
);

export const ReviewsNavIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden>
    <rect x="5" y="7" width="26" height="18" rx="5" fill="#fff" stroke="#2563eb" strokeWidth="1.3" />
    <path d="M13 25l-4 4v-4" stroke="#2563eb" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 13h14M11 17h10" stroke="#2563eb" strokeWidth="1.3" strokeLinecap="round" opacity=".75" />
    <circle cx="26" cy="17" r="3.2" fill="#2563eb" opacity=".2" />
  </svg>
);

export const PricingNavIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden>
    <rect x="6" y="6" width="24" height="24" rx="6" fill="#eef2ff" stroke="#4338ca" strokeWidth="1.3" />
    <path d="M15 12h8M15 18h8M15 24h8" stroke="#4338ca" strokeWidth="1.4" strokeLinecap="round" opacity=".75" />
    <circle cx="12" cy="12" r="1.5" fill="#4338ca" />
    <circle cx="12" cy="18" r="1.5" fill="#4338ca" />
    <circle cx="12" cy="24" r="1.5" fill="#4338ca" />
  </svg>
);

export const SisterPlatformNavIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden>
    <rect x="5" y="9" width="10" height="18" rx="2" fill="#e6fffb" stroke="#00b09b" strokeWidth="1.3" />
    <rect x="14" y="6" width="10" height="21" rx="2" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.3" />
    <rect x="23" y="11" width="8" height="16" rx="2" fill="#fff7ed" stroke="#d97b2a" strokeWidth="1.3" />
    <path d="M9 14h2M18 12h2M26 15h2" stroke="#0f172a" strokeWidth="1" strokeLinecap="round" opacity=".45" />
  </svg>
);

/** Matches `public/studiely_homepage_cards (1).html` — App tab card icons (16×16). */
export const NotesCardIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="block h-full w-full" aria-hidden>
    <rect x="2" y="2" width="12" height="1.8" rx="0.9" fill="#1D9E75" />
    <rect x="2" y="5.6" width="8.5" height="1.8" rx="0.9" fill="#1D9E75" opacity="0.7" />
    <rect x="2" y="9.2" width="10" height="1.8" rx="0.9" fill="#1D9E75" opacity="0.5" />
    <rect x="2" y="12.8" width="6" height="1.8" rx="0.9" fill="#1D9E75" opacity="0.3" />
  </svg>
);

export const QuizCardIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="block h-full w-full" aria-hidden>
    <circle cx="8" cy="8" r="6" stroke="#C07D1A" strokeWidth="1.4" />
    <circle cx="5.5" cy="7" r="0.9" fill="#C07D1A" />
    <circle cx="8" cy="7" r="0.9" fill="#C07D1A" opacity="0.5" />
    <circle cx="10.5" cy="7" r="0.9" fill="#C07D1A" opacity="0.25" />
    <path d="M5.5 10.5h5" stroke="#C07D1A" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

export const FlashcardsCardIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="block h-full w-full" aria-hidden>
    <rect x="1.5" y="1.5" width="6" height="8" rx="1.5" fill="#534AB7" />
    <rect x="8.5" y="6.5" width="6" height="8" rx="1.5" fill="#534AB7" opacity="0.55" />
  </svg>
);

/** Exam focus (coral star) — HTML app mock. */
export const CommonMistakesCardIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="block h-full w-full" aria-hidden>
    <path
      d="M8 1.5L9.8 7H15.5L10.8 10.2L12.5 16L8 13L3.5 16L5.2 10.2L.5 7H6.2Z"
      fill="#D85A30"
    />
    <path d="M8 5.5v3" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
    <circle cx="8" cy="10.5" r="0.7" fill="white" />
  </svg>
);

export const StreakRewardIcon = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden>
    <circle cx="20" cy="20" r="18" fill="#dff6f2" stroke="#00b09b" strokeWidth="1.3" />
    <path
      d="M20 8c-2 4-6 6.5-6 11a6 6 0 1012 0c0-4.5-4-7-6-11z"
      fill="#00b09b"
      opacity=".25"
    />
    <path d="M20 14v10M20 24l-3-3M20 24l3-3" stroke="#00b09b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CertificateRewardIcon = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden>
    <rect x="8" y="6" width="24" height="20" rx="2" fill="#eef2ff" stroke="#4338ca" strokeWidth="1.3" />
    <path d="M14 12h12M14 16h10M14 20h8" stroke="#4338ca" strokeWidth="1.2" strokeLinecap="round" opacity=".5" />
    <path d="M14 28l6 4 6-4v-4H14v4z" fill="#c7d2fe" stroke="#4338ca" strokeWidth="1.2" />
  </svg>
);

export const ReferRewardIcon = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden>
    <circle cx="14" cy="16" r="6" fill="#fff7ed" stroke="#d97b2a" strokeWidth="1.3" />
    <circle cx="26" cy="16" r="6" fill="#fff7ed" stroke="#d97b2a" strokeWidth="1.3" />
    <path d="M10 30c0-4 3.5-7 10-7s10 3 10 7" stroke="#d97b2a" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    <path d="M22 26l4 4 6-6" stroke="#d97b2a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ExamCardIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="block h-full w-full" aria-hidden>
    <rect x="1.5" y="3" width="13" height="10" rx="2" stroke="#D4537E" strokeWidth="1.4" />
    <path d="M4.5 7h7M4.5 10h5" stroke="#D4537E" strokeWidth="1.3" strokeLinecap="round" />
    <rect x="10" y="1.5" width="4" height="5" rx="1" fill="#D4537E" />
  </svg>
);
