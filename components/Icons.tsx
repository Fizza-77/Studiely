export const NylaAvatar = ({ size = 44, noBackground = false }: { size?: number; noBackground?: boolean }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" className="shrink-0 block">
    {!noBackground && <circle cx="40" cy="40" r="40" fill="#5448c8" />}
    <rect x="21" y="19" width="38" height="31" rx="11" fill="white" fillOpacity=".96" />
    <circle cx="31.5" cy="32" r="5" fill="#5448c8" />
    <circle cx="33" cy="30.5" r="1.8" fill="white" />
    <circle cx="31.5" cy="32" r="1.5" fill="#3a2ab0" />
    <circle cx="48.5" cy="32" r="5" fill="#5448c8" />
    <circle cx="50" cy="30.5" r="1.8" fill="white" />
    <circle cx="48.5" cy="32" r="1.5" fill="#3a2ab0" />
    <path
      d="M33 41 Q40 48 47 41"
      stroke="#5448c8"
      strokeWidth="2.2"
      strokeLinecap="round"
      fill="none"
    />
    <ellipse cx="26" cy="38" rx="4" ry="2.5" fill="#d97b2a" fillOpacity=".32" />
    <ellipse cx="54" cy="38" rx="4" ry="2.5" fill="#d97b2a" fillOpacity=".32" />
    <line x1="40" y1="19" x2="40" y2="11" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="40" cy="9" r="3.5" fill="#00b09b" />
    <circle cx="40" cy="9" r="1.5" fill="white" />
    <rect x="12" y="26" width="9" height="14" rx="4.5" fill="#d97b2a" />
    <rect x="12" y="29" width="5" height="8" rx="2.5" fill="#ffb07a" />
    <rect x="59" y="26" width="9" height="14" rx="4.5" fill="#d97b2a" />
    <rect x="64" y="29" width="5" height="8" rx="2.5" fill="#ffb07a" />
    <rect x="27" y="51" width="26" height="16" rx="7" fill="white" fillOpacity=".18" />
    <circle cx="36" cy="59" r="2.5" fill="#00b09b" />
    <circle cx="44" cy="59" r="2.5" fill="#d97b2a" />
  </svg>
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

export const NotesCardIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <rect x="4" y="3" width="30" height="36" rx="5" fill="#dff6f2" stroke="#00b09b" strokeWidth="1.5" />
    <rect x="2" y="9" width="5" height="7" rx="2" fill="#00b09b" opacity=".65" />
    <rect x="2" y="20" width="5" height="7" rx="2" fill="#00b09b" opacity=".65" />
    <line x1="11" y1="13" x2="30" y2="13" stroke="#00b09b" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="11" y1="19" x2="30" y2="19" stroke="#00b09b" strokeWidth="1.5" strokeLinecap="round" opacity=".6" />
    <line x1="11" y1="25" x2="25" y2="25" stroke="#00b09b" strokeWidth="1.5" strokeLinecap="round" opacity=".4" />
    <line x1="11" y1="31" x2="20" y2="31" stroke="#00b09b" strokeWidth="1.5" strokeLinecap="round" opacity=".25" />
    <circle cx="36" cy="36" r="8" fill="#00b09b" />
    <line x1="36" y1="32.5" x2="36" y2="39.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="32.5" y1="36" x2="39.5" y2="36" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const QuizCardIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <path d="M22 4C15.9 4 11 8.9 11 15c0 4 2 7.5 5 9.5V27a1 1 0 001 1h10a1 1 0 001-1v-2.5c3-2 5-5.5 5-9.5 0-6.1-4.9-11-11-11z" fill="#fff1e4" stroke="#d97b2a" strokeWidth="1.5" />
    <rect x="15" y="28" width="14" height="3" rx="1.5" fill="#d97b2a" opacity=".2" stroke="#d97b2a" strokeWidth="1.2" />
    <rect x="16" y="32" width="12" height="3" rx="1.5" fill="#d97b2a" opacity=".15" stroke="#d97b2a" strokeWidth="1.2" />
    <path d="M18 20c0-2.5 1.8-4.5 4-4.5s4 2 4 4.5" stroke="#d97b2a" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity=".5" />
    <line x1="22" y1="1" x2="22" y2="3.2" stroke="#d97b2a" strokeWidth="1.5" strokeLinecap="round" opacity=".5" />
    <line x1="29.5" y1="3.2" x2="28.2" y2="4.8" stroke="#d97b2a" strokeWidth="1.5" strokeLinecap="round" opacity=".4" />
    <line x1="14.5" y1="3.2" x2="15.8" y2="4.8" stroke="#d97b2a" strokeWidth="1.5" strokeLinecap="round" opacity=".4" />
    <line x1="33" y1="10" x2="31" y2="11" stroke="#d97b2a" strokeWidth="1.5" strokeLinecap="round" opacity=".3" />
    <line x1="11" y1="10" x2="13" y2="11" stroke="#d97b2a" strokeWidth="1.5" strokeLinecap="round" opacity=".3" />
    <circle cx="36" cy="36" r="8" fill="#d97b2a" />
    <path d="M33 36l2 2 4.5-4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const FlashcardsCardIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <rect x="5" y="10" width="30" height="20" rx="3.5" fill="#bfdbfe" stroke="#2563eb" strokeWidth="1.3" opacity=".5" transform="rotate(-6 5 10)" />
    <rect x="5" y="9" width="30" height="20" rx="3.5" fill="#93c5fd" stroke="#2563eb" strokeWidth="1.3" opacity=".75" transform="rotate(-2.5 5 9)" />
    <rect x="5" y="10" width="32" height="21" rx="3.5" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.6" />
    <line x1="5" y1="17.5" x2="37" y2="17.5" stroke="#2563eb" strokeWidth="1" opacity=".3" />
    <rect x="8" y="12.5" width="14" height="3.5" rx="1.5" fill="#2563eb" opacity=".18" />
    <line x1="9.5" y1="14.2" x2="20" y2="14.2" stroke="#2563eb" strokeWidth="1.1" strokeLinecap="round" opacity=".55" />
    <line x1="9" y1="21" x2="33" y2="21" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" opacity=".55" />
    <line x1="9" y1="24.5" x2="29" y2="24.5" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" opacity=".38" />
    <line x1="9" y1="28" x2="22" y2="28" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round" opacity=".22" />
    <circle cx="36" cy="36" r="8" fill="#2563eb" />
    <path d="M33 36l2 2 4.5-4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

/** Card-style icon: document with caution marks — pairs with other study-tool card icons. */
export const CommonMistakesCardIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <rect x="6" y="4" width="28" height="34" rx="4" fill="#f3e8ff" stroke="#7c3aed" strokeWidth="1.5" />
    <path d="M14 12h12M14 17h18M14 22h14" stroke="#7c3aed" strokeWidth="1.3" strokeLinecap="round" opacity=".45" />
    <circle cx="16" cy="29" r="5" fill="#fef3c7" stroke="#d97706" strokeWidth="1.2" />
    <path d="M16 27v2.2M16 31.2v.35" stroke="#b45309" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="28" cy="29" r="5" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.2" />
    <path d="M26.2 26.8l3.6 3.6M29.8 26.8l-3.6 3.6" stroke="#b91c1c" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="36" cy="36" r="8" fill="#7c3aed" />
    <path d="M33 36l2 2 4.5-4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
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
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <rect x="6" y="5" width="28" height="32" rx="4" fill="#ffedf3" stroke="#c94a72" strokeWidth="1.5" />
    <rect x="15" y="2" width="12" height="7" rx="3.5" fill="#c94a72" opacity=".8" />
    <rect x="16" y="3.2" width="10" height="4" rx="2" fill="white" opacity=".7" />
    <path d="M12 16l1.5 1.5 2.5-2.5" stroke="#c94a72" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <line x1="18" y1="15.5" x2="30" y2="15.5" stroke="#c94a72" strokeWidth="1.3" strokeLinecap="round" opacity=".35" />
    <path d="M12 22l1.5 1.5 2.5-2.5" stroke="#c94a72" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <line x1="18" y1="21.5" x2="30" y2="21.5" stroke="#c94a72" strokeWidth="1.3" strokeLinecap="round" opacity=".35" />
    <path d="M12 28l1.5 1.5 2.5-2.5" stroke="#c94a72" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity=".5" />
    <line x1="18" y1="27.5" x2="24" y2="27.5" stroke="#c94a72" strokeWidth="1.3" strokeLinecap="round" opacity=".25" />
    <circle cx="36" cy="36" r="8" fill="#c94a72" />
    <path d="M33 36l2 2 4.5-4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);
