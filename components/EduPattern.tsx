"use client";

const DEFAULT_PATTERN_ID = "edu-pattern";

export const EduPattern = ({ opacity = 0.045, stroke = "#00b09b", id = DEFAULT_PATTERN_ID }) => {

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      <defs>
        <pattern id={id} x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <path
            d="M12 18L12 56Q12 59 15 59L37 59Q40 59 40 56L40 18Q40 15 37 15L15 15Q12 15 12 18ZM12 37L40 37"
            fill="none"
            stroke={stroke}
            strokeWidth="1.2"
            opacity={opacity * 10}
          />
          <path
            d="M64 14L74 24L62 46L52 46ZM52 46L54 50L58 48Z"
            fill="none"
            stroke={stroke}
            strokeWidth="1.2"
            opacity={opacity * 10}
          />
          <path
            d="M22 74L39 66L56 74L39 82ZM39 82L39 91M32 79L32 88Q32 94 39 96Q46 94 46 88L46 79"
            fill="none"
            stroke={stroke}
            strokeWidth="1.2"
            opacity={opacity * 10}
          />
          <circle cx="84" cy="80" r="4" fill="none" stroke={stroke} strokeWidth="1.2" opacity={opacity * 10} />
          <ellipse cx="84" cy="80" rx="14" ry="6" fill="none" stroke={stroke} strokeWidth="1.2" opacity={opacity * 10} />
          <ellipse
            cx="84"
            cy="80"
            rx="14"
            ry="6"
            fill="none"
            stroke={stroke}
            strokeWidth="1.2"
            opacity={opacity * 10}
            transform="rotate(60 84 80)"
          />
          <ellipse
            cx="84"
            cy="80"
            rx="14"
            ry="6"
            fill="none"
            stroke={stroke}
            strokeWidth="1.2"
            opacity={opacity * 10}
            transform="rotate(120 84 80)"
          />
          <path
            d="M80 18Q80 11 85 11Q90 11 90 18Q90 23 86 26L84 26Q80 23 80 18ZM83 26L83 30M87 26L87 30M82 30L88 30"
            fill="none"
            stroke={stroke}
            strokeWidth="1.2"
            opacity={opacity * 10}
          />
          <path
            d="M18 93L20 87L16 83L22 83L18 77L24 83L30 83L26 87L28 93Z"
            fill="none"
            stroke={stroke}
            strokeWidth="1"
            opacity={opacity * 10}
          />
          <path d="M55 20L55 31M50 25.5L60 25.5" stroke={stroke} strokeWidth="1.5" opacity={opacity * 10} />
          <path d="M52 52L63 52M52 57L63 57" stroke={stroke} strokeWidth="1.5" opacity={opacity * 10} />
          <rect
            x="95"
            y="32"
            width="6"
            height="30"
            rx="1.5"
            fill="none"
            stroke={stroke}
            strokeWidth="1.2"
            opacity={opacity * 10}
          />
          <path
            d="M96.5 37L101 37M96.5 42L102 42M96.5 47L101 47M96.5 52L102 52M96.5 57L101 57"
            stroke={stroke}
            strokeWidth="1"
            opacity={opacity * 10}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
};
