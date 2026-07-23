import Link from "next/link";
import { Headphones, HelpCircle, Mail } from "lucide-react";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";
const EMAIL = "support@studiely.com";

const CARDS = [
  {
    title: "Email Support",
    text: "Drop us an email anytime.",
    action: EMAIL,
    href: `mailto:${EMAIL}`,
    external: false,
    bg: BLUE,
    iconWrap: "bg-white/15",
    Icon: Mail,
  },
  {
    title: "Help Centre & FAQs",
    text: "Find answers to common questions.",
    action: "Visit Help Centre",
    href: "/faqs",
    external: false,
    bg: PINK,
    iconWrap: "bg-white/18",
    Icon: HelpCircle,
  },
  {
    title: "Talk to Our Team",
    text: "We're here Monday to Friday.",
    action: "9:00 AM – 6:00 PM (GMT+3)",
    href: null,
    external: false,
    bg: BLUE,
    iconWrap: "bg-white/15",
    Icon: Headphones,
  },
] as const;

export const ContactSupportCardsSection = () => {
  return (
    <section
      aria-label="Other ways to reach Studiely"
      className="bg-bg-base pb-[clamp(1.25rem,3vw,2rem)] pt-[clamp(1rem,2.5vw,1.75rem)]"
    >
      <div className="wrap">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {CARDS.map(({ title, text, action, href, bg, iconWrap, Icon }) => (
            <article
              key={title}
              className="funky-card rounded-[28px] px-6 py-7 sm:rounded-[32px] sm:px-7 sm:py-8"
              style={{ backgroundColor: bg }}
            >
              <span
                className={`funky-icon mb-5 inline-flex h-11 w-11 items-center justify-center rounded-[14px] ${iconWrap}`}
              >
                <Icon className="h-5 w-5 text-white" strokeWidth={2.2} aria-hidden />
              </span>

              <h2 className="mb-2 font-hanken text-[clamp(1.15rem,2vw,1.35rem)] font-extrabold leading-tight text-white">
                {title}
              </h2>
              <p className="mb-4 font-jakarta text-[13px] leading-relaxed text-white/85 sm:mb-5 sm:text-[14px]">
                {text}
              </p>

              {href ? (
                href.startsWith("mailto:") ? (
                  <a
                    href={href}
                    className="funky-link inline-flex items-center gap-1 font-jakarta text-[13px] font-bold sm:text-[14px]"
                    style={{ color: LIME }}
                  >
                    {action}
                    <span aria-hidden>↗</span>
                  </a>
                ) : (
                  <Link
                    href={href}
                    className="funky-link inline-flex items-center gap-1 font-jakarta text-[13px] font-bold sm:text-[14px]"
                    style={{ color: LIME }}
                  >
                    {action}
                    <span aria-hidden>↗</span>
                  </Link>
                )
              ) : (
                <p
                  className="m-0 font-jakarta text-[13px] font-bold sm:text-[14px]"
                  style={{ color: LIME }}
                >
                  {action}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
