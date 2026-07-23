import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { STUDIELY_APP } from "@/lib/appUrls";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";

const linkClass = "font-medium hover:opacity-80";

export const NylaWhySection = () => {
  return (
    <section
      aria-labelledby="nyla-why-heading"
      className="bg-bg-base pb-[clamp(1.5rem,4vw,2.5rem)]"
    >
      <div className="wrap">
        <Reveal y={28}>
        <article
          className="relative overflow-visible rounded-[24px] border-b-[4px] bg-white px-5 py-5 shadow-[0_14px_40px_rgba(30,27,75,0.08)] sm:rounded-[40px] sm:px-10 sm:py-7 md:px-12 md:py-8 lg:px-14 lg:py-9"
          style={{ borderColor: LIME }}
        >
          <Image
            src="/learn-star.png"
            alt=""
            width={220}
            height={220}
            unoptimized
            aria-hidden
            className="pointer-events-none absolute -left-2 -top-5 z-[2] h-auto w-[clamp(6rem,14vw,9.5rem)] max-w-none select-none drop-shadow-[0_6px_18px_rgba(255,54,198,0.25)] sm:left-0 sm:-top-6 sm:w-[clamp(7rem,15vw,11rem)]"
            draggable={false}
          />
          <Image
            src="/learn-flower.png"
            alt=""
            width={320}
            height={320}
            unoptimized
            aria-hidden
            className="pointer-events-none absolute -right-2 -top-6 z-[2] h-auto w-[clamp(5.5rem,12vw,9rem)] max-w-none select-none sm:right-0 sm:-top-7 sm:w-[clamp(6.5rem,13vw,10rem)]"
            draggable={false}
          />

          <h2
            id="nyla-why-heading"
            className="relative z-[1] mb-5 break-words text-center font-heading text-[clamp(1.55rem,7vw,2.75rem)] font-extrabold leading-[1.12] tracking-[-0.02em] text-[#1E1B4B] sm:mb-6"
          >
            <span className="sm:whitespace-nowrap">Why students use Nyla for</span>
            <br />
            <span
              className="box-decoration-clone px-1 py-0.5"
              style={{ backgroundColor: LIME }}
            >
              learning &amp; revision
            </span>
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
            <div className="space-y-5 font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
              <p className="m-0">
                Most generic chat tools are not built for school: they guess your
                level, ignore mark schemes, and drift off-topic. Nyla is different
                she is Studiely&apos;s built-in AI study assistant that uses your
                selected curriculum, exam board, and grade so explanations stay
                within syllabus expectations.
              </p>
              <p className="m-0">
                Whether you are revising for{" "}
                <Link href="/#curriculum" className={linkClass} style={{ color: BLUE }}>
                  IGCSE, IB, GCSE
                </Link>
                , or other international programs, you get answers you can trust
                as a starting point, then turn into flashcards, quizzes, or
                structured exam practice inside the same app.
              </p>
            </div>

            <div className="font-sans text-[14px] leading-[1.75] text-[#5B5A6A] sm:text-[15px]">
              <p className="m-0">
                Parents and students often ask how this relates to a human tutor.
                Nyla does not replace your teacher or parents but she is there at
                midnight when a question blocks you, and she connects cleanly to
                the rest of Studiely&apos;s student tools so revision stays
                organised. Explore{" "}
                <Link href="/#hero" className={linkClass} style={{ color: BLUE }}>
                  all features
                </Link>
                , read the{" "}
                <Link href="/faqs" className={linkClass} style={{ color: BLUE }}>
                  FAQ
                </Link>
                , compare plans on{" "}
                <a
                  href={STUDIELY_APP.pricing}
                  className={linkClass}
                  style={{ color: BLUE }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  pricing
                </a>
                , or browse study tips on the{" "}
                <Link href="/blog" className={linkClass} style={{ color: BLUE }}>
                  blog
                </Link>
                . You can always return to the{" "}
                <Link href="/" className={linkClass} style={{ color: BLUE }}>
                  Studiely homepage
                </Link>{" "}
                for the full product story.
              </p>
            </div>
          </div>
        </article>
        </Reveal>
      </div>
    </section>
  );
};
