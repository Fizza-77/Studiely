"use client";

import Image from "next/image";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { REVIEWS_1, REVIEWS_2 } from "@/lib/data";

const BLUE = "#4F35F2";
const PINK = "#FF36C6";
const LIME = "#E8FF2F";

const CARD_WIDTH = 340;
const CARD_GAP = 28;
const STEP = CARD_WIDTH + CARD_GAP;
/** Pixels per second — continuous left → right drift */
const SPEED = 52;

type ReviewCard = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  blue: boolean;
  avatarBg: string;
  avatarColor: string;
};

const AVATAR_PALETTE = [
  { bg: "#E8E4FF", color: BLUE },
  { bg: LIME, color: "#1E1B4B" },
  { bg: "#FFE4F0", color: "#D4537E" },
  { bg: "#E3F5EE", color: "#0F6E56" },
  { bg: "#FEF3DC", color: "#854F0B" },
];

const REVIEWS: ReviewCard[] = [...REVIEWS_1, ...REVIEWS_2].map((review, index) => {
  const palette = AVATAR_PALETTE[index % AVATAR_PALETTE.length];
  return {
    quote: review.quote,
    name: review.name,
    role: review.role,
    initials: review.initials,
    blue: index % 2 === 1,
    avatarBg: palette.bg,
    avatarColor: palette.color,
  };
});

const LOOP = STEP * REVIEWS.length;

const PinkStars = ({ light }: { light?: boolean }) => (
  <div className="mb-4 flex gap-0.5" aria-hidden>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        viewBox="0 0 16 16"
        className="h-4 w-4"
        fill={light ? "#FFB4E0" : PINK}
      >
        <path d="M8 1.5 9.8 5.8l4.6.4-3.5 3 1 4.5L8 11.8 3.1 13.7l1-4.5-3.5-3 4.6-.4L8 1.5z" />
      </svg>
    ))}
  </div>
);

const QuoteMark = ({ light }: { light?: boolean }) => (
  <span
    className={`mr-1 font-serif text-[2rem] leading-none ${
      light ? "text-white/35" : "text-[#F5B8D9]"
    }`}
    aria-hidden
  >
    &ldquo;
  </span>
);

function wrapAroundCenter(value: number, loop: number) {
  let wrapped = ((value % loop) + loop) % loop;
  if (wrapped > loop / 2) wrapped -= loop;
  return wrapped;
}

function smoothstep(t: number) {
  const x = Math.min(1, Math.max(0, t));
  return x * x * (3 - 2 * x);
}

function ReviewSlide({
  review,
  index,
  offset,
}: {
  review: ReviewCard;
  index: number;
  offset: MotionValue<number>;
}) {
  const x = useTransform(offset, (o) =>
    wrapAroundCenter(index * STEP + o, LOOP)
  );

  const scale = useTransform(x, (v) => {
    const closeness = smoothstep(1 - Math.abs(v) / (STEP * 0.95));
    return 0.9 + 0.12 * closeness;
  });

  const y = useTransform(x, (v) => {
    const closeness = smoothstep(1 - Math.abs(v) / (STEP * 0.95));
    return -10 * closeness;
  });

  const opacity = useTransform(x, (v) => {
    const dist = Math.abs(v);
    if (dist > STEP * 2.15) return 0;
    const closeness = smoothstep(1 - dist / (STEP * 1.15));
    return 0.42 + 0.58 * closeness;
  });

  const zIndex = useTransform(x, (v) =>
    Math.round(20 - Math.min(Math.abs(v) / STEP, 3) * 5)
  );

  const shadow = useTransform(x, (v) => {
    const closeness = smoothstep(1 - Math.abs(v) / (STEP * 0.85));
    if (review.blue) {
      return `0 ${14 + 16 * closeness}px ${32 + 24 * closeness}px rgba(79,53,242,${0.12 + 0.22 * closeness})`;
    }
    return `0 ${14 + 16 * closeness}px ${32 + 24 * closeness}px rgba(30,27,75,${0.1 + 0.12 * closeness})`;
  });

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 w-[min(86vw,340px)] will-change-transform"
      style={{
        x,
        y,
        scale,
        opacity,
        zIndex,
        marginLeft: -CARD_WIDTH / 2,
        marginTop: -180,
      }}
    >
      <motion.div
        className={`relative flex min-h-[320px] flex-col rounded-[28px] border-b-[5px] px-6 py-7 sm:px-7 sm:py-8 ${
          review.blue ? "" : "bg-white"
        }`}
        style={{
          backgroundColor: review.blue ? BLUE : undefined,
          borderColor: review.blue ? "#3A28D4" : "#D4D4DC",
          boxShadow: shadow,
        }}
      >
        <PinkStars light={review.blue} />

        <blockquote
          className={`m-0 mb-6 flex-1 font-sans text-[14px] leading-relaxed sm:text-[15px] ${
            review.blue ? "text-white/95" : "text-[#2A2B36]"
          }`}
        >
          <QuoteMark light={review.blue} />
          {review.quote}
        </blockquote>

        <div
          className={`border-t pt-5 ${
            review.blue ? "border-white/20" : "border-[#E8E8EE]"
          }`}
        >
          <div className="flex items-center gap-3">
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-heading text-[13px] font-bold"
              style={{
                backgroundColor: review.avatarBg,
                color: review.avatarColor,
              }}
            >
              {review.initials}
            </span>
            <div>
              <p
                className={`m-0 font-heading text-[15px] font-bold leading-tight ${
                  review.blue ? "text-white" : "text-[#1E1B4B]"
                }`}
              >
                {review.name}
              </p>
              <p
                className={`m-0 mt-0.5 font-sans text-[13px] ${
                  review.blue ? "text-white/75" : "text-[#5B5A6A]"
                }`}
              >
                {review.role}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface ReviewsSectionProps {
  sectionRef?: React.Ref<HTMLElement>;
}

export const ReviewsSection = ({ sectionRef }: ReviewsSectionProps) => {
  const reduceMotion = useReducedMotion();
  const offset = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    if (reduceMotion) return;
    const next = offset.get() + (SPEED * delta) / 1000;
    offset.set(next >= LOOP ? next - LOOP : next);
  });

  return (
    <section
      ref={sectionRef}
      aria-labelledby="reviews-heading"
      className="relative overflow-x-clip pb-[clamp(0.5rem,1.5vw,1rem)] pt-[clamp(1rem,2.5vw,1.75rem)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[42%] z-0 h-40 w-72 -translate-x-1/2 rounded-full bg-[#E8FF2F]/40 blur-[72px] sm:h-48 sm:w-96"
      />

      <div className="wrap relative z-[1]">
        <div className="mb-[clamp(1rem,2vw,1.5rem)] text-center">
          <p
            className="mb-2 font-heading text-[11px] font-bold uppercase tracking-[0.14em] sm:text-[12px]"
            style={{ color: BLUE }}
          >
            Student Reviews
          </p>
          <h2
            id="reviews-heading"
            className="relative mx-auto mb-3 inline-block font-heading text-[clamp(1.75rem,3.4vw,2.65rem)] font-extrabold leading-[1.12] tracking-[-0.02em]"
            style={{ color: BLUE }}
          >
            <Image
              src="/review-star.png"
              alt=""
              width={200}
              height={200}
              unoptimized
              aria-hidden
              className="pointer-events-none absolute left-0 top-1/2 z-[1] h-auto w-[clamp(4.5rem,10vw,7.5rem)] max-w-none -translate-x-[72%] -translate-y-[62%] select-none mix-blend-screen"
              draggable={false}
            />
            <span className="relative z-[2]">What Students Say</span>
          </h2>
          <p className="mx-auto max-w-[640px] font-sans text-[clamp(0.9rem,1vw,1.05rem)] leading-relaxed text-[#5B5A6A]">
            Real feedback from students studying across the world.
          </p>
        </div>
      </div>

      <div className="relative mt-2 w-full">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-10 bg-gradient-to-r from-bg-base to-transparent sm:w-16 md:w-24"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-10 bg-gradient-to-l from-bg-base to-transparent sm:w-16 md:w-24"
          aria-hidden
        />

        <div className="relative mx-auto flex h-[380px] items-center justify-center sm:h-[400px]">
          {REVIEWS.map((review, index) => (
            <ReviewSlide
              key={review.name}
              review={review}
              index={index}
              offset={offset}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
