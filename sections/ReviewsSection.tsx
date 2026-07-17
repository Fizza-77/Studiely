"use client";

const BLUE = "#4F35F2";
const PINK = "#FF36C6";
const LIME = "#E8FF2F";

const REVIEWS = [
  {
    quote:
      "Nyla's actually useful when I'm stuck on something from the notes. I don't have to wait for my tutor to reply. Not always perfect answers but good enough to unblock me before a test.",
    name: "Daniel O.",
    role: "University Prep",
    initials: "DO",
    variant: "light" as const,
    avatarBg: "#E8E4FF",
    avatarColor: BLUE,
    tilt: "md:-rotate-[2.5deg]",
    edgeColor: "#D4D4DC",
  },
  {
    quote:
      "APUSH essays used to take me forever. I like that I can practise with a timer and get feedback that mentions structure, not just spelling. My teacher asked what I changed honestly it was mostly Studiely.",
    name: "Fatima R.",
    role: "IGCSE Student",
    initials: "FR",
    variant: "featured" as const,
    avatarBg: LIME,
    avatarColor: "#1E1B4B",
    tilt: "md:rotate-0",
    edgeColor: "#3A28D4",
  },
  {
    quote:
      "I like that Nyla seems to know I'm not doing A-Levels yet. Answers are shorter and on-topic instead of dumping uni-level stuff on me.",
    name: "Liam B.",
    role: "IB MYP Student",
    initials: "LB",
    variant: "light" as const,
    avatarBg: "#FFE4F0",
    avatarColor: "#D4537E",
    tilt: "md:rotate-[2.5deg]",
    edgeColor: "#D4D4DC",
  },
];

const PinkStars = () => (
  <div className="mb-4 flex gap-0.5" aria-hidden>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} viewBox="0 0 16 16" className="h-4 w-4" fill={PINK}>
        <path d="M8 1.5 9.8 5.8l4.6.4-3.5 3 1 4.5L8 11.8 3.1 13.7l1-4.5-3.5-3 4.6-.4L8 1.5z" />
      </svg>
    ))}
  </div>
);

const QuoteMark = ({ light }: { light?: boolean }) => (
  <span
    className={`mr-1 font-serif text-[2rem] leading-none ${light ? "text-white/35" : "text-[#F5B8D9]"}`}
    aria-hidden
  >
    &ldquo;
  </span>
);

const LightningBadge = () => (
  <span
    aria-hidden
    className="pointer-events-none absolute -right-3 -top-3 flex h-11 w-11 items-center justify-center rounded-full shadow-[0_6px_16px_rgba(232,255,47,0.45)]"
    style={{ backgroundColor: LIME }}
  >
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M13 2 5 14h6l-1 8 8-12h-6l1-8z"
        fill={BLUE}
        stroke={BLUE}
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

interface ReviewsSectionProps {
  sectionRef?: React.Ref<HTMLElement>;
}

export const ReviewsSection = ({ sectionRef }: ReviewsSectionProps) => {
  return (
    <section
      ref={sectionRef}
      aria-labelledby="reviews-heading"
      className="relative overflow-hidden bg-bg-base pb-[clamp(2.75rem,6vw,5rem)] pt-[clamp(1rem,2.5vw,1.75rem)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[18%] z-0 h-40 w-72 -translate-x-1/2 rounded-full bg-[#E8FF2F]/40 blur-[72px] sm:h-48 sm:w-96"
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
            className="mx-auto mb-3 font-heading text-[clamp(1.75rem,3.4vw,2.65rem)] font-extrabold leading-[1.12] tracking-[-0.02em]"
            style={{ color: BLUE }}
          >
            What Students Say
          </h2>
          <p className="mx-auto max-w-[640px] font-sans text-[clamp(0.9rem,1vw,1.05rem)] leading-relaxed text-[#5B5A6A]">
            Real feedback from students studying across the world.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5 md:px-2">
          {REVIEWS.map((review) => {
            const featured = review.variant === "featured";

            return (
              <div
                key={review.name}
                className={`h-full origin-center ${review.tilt}`}
              >
                <article
                  className={`relative flex h-full flex-col rounded-[28px] border-b-[5px] px-6 py-7 shadow-[0_14px_32px_rgba(30,27,75,0.1)] sm:px-7 sm:py-8 ${
                    featured ? "" : "bg-white"
                  }`}
                  style={{
                    backgroundColor: featured ? BLUE : undefined,
                    borderColor: review.edgeColor,
                  }}
                >
                  {featured && <LightningBadge />}

                  <PinkStars />

                  <blockquote
                    className={`m-0 mb-6 flex-1 font-sans text-[14px] leading-relaxed sm:text-[15px] ${
                      featured ? "text-white/95" : "text-[#2A2B36]"
                    }`}
                  >
                    <QuoteMark light={featured} />
                    {review.quote}
                  </blockquote>

                  <div
                    className={`border-t pt-5 ${
                      featured ? "border-white/20" : "border-[#E8E8EE]"
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
                            featured ? "text-white" : "text-[#1E1B4B]"
                          }`}
                        >
                          {review.name}
                        </p>
                        <p
                          className={`m-0 mt-0.5 font-sans text-[13px] ${
                            featured ? "text-white/75" : "text-[#5B5A6A]"
                          }`}
                        >
                          {review.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
