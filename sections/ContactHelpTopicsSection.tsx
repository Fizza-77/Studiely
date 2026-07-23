import {
  BookOpen,
  CreditCard,
  Handshake,
  Settings,
  UserRound,
} from "lucide-react";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const PINK = "#FF36C6";

const TOPICS = [
  {
    title: "Account Help",
    text: "Login, profile & access",
    Icon: UserRound,
    color: BLUE,
  },
  {
    title: "Billing",
    text: "Payments, plans & invoices",
    Icon: CreditCard,
    color: PINK,
  },
  {
    title: "Curriculum Questions",
    text: "Subjects & content help",
    Icon: BookOpen,
    color: BLUE,
  },
  {
    title: "Partnerships",
    text: "Schools & collaborations",
    Icon: Handshake,
    color: PINK,
  },
  {
    title: "Technical Support",
    text: "Issues & troubleshooting",
    Icon: Settings,
    color: BLUE,
  },
] as const;

export const ContactHelpTopicsSection = () => {
  return (
    <section
      aria-labelledby="contact-help-topics-heading"
      className="bg-bg-base pb-[clamp(1.5rem,3.5vw,2.25rem)]"
    >
      <div className="wrap">
        <header className="mb-[clamp(1.25rem,2.5vw,1.75rem)] text-center">
          <h2
            id="contact-help-topics-heading"
            className="font-hanken text-[clamp(1.75rem,3.5vw,2.35rem)] font-extrabold leading-tight tracking-[-0.02em] text-[#1E1B4B]"
          >
            What can we help with?
          </h2>
          <span
            aria-hidden
            className="mx-auto mt-3 block h-1 w-12 rounded-full"
            style={{ backgroundColor: LIME }}
          />
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {TOPICS.map(({ title, text, Icon, color }) => (
            <article
              key={title}
              className="flex min-h-[194px] flex-col items-center justify-center rounded-[24px] border border-[#ECEEF6] bg-white px-4 py-7 text-center shadow-[0_8px_24px_rgba(30,27,75,0.04)] sm:min-h-[210px] sm:rounded-[28px]"
            >
              <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFFBEF]">
                <Icon
                  className="h-6 w-6"
                  style={{ color }}
                  strokeWidth={2.2}
                  aria-hidden
                />
              </span>
              <h3 className="mb-1.5 max-w-[150px] font-jakarta text-[14px] font-extrabold leading-[1.35] text-[#1E1B4B] sm:text-[15px]">
                {title}
              </h3>
              <p className="m-0 max-w-[150px] font-jakarta text-[11px] leading-[1.5] text-[#5B5A6A] sm:text-[12px]">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
