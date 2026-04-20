import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";

interface HowItWorksSectionProps {
  sectionRef?: any;
}

export const HowItWorksSection = ({ sectionRef }: HowItWorksSectionProps) => (
  <section
    id="how-it-works"
    ref={sectionRef}
    className="section-y border-t bg-[#f9f9fb]"
    style={{ borderColor: "#e2e2e8" }}
  >
    <div className="wrap">
      <SectionHeader
        label="How It Works"
        title="Up and Running in Three Steps"
        sub="No uploads. No setup. No textbook hunting. Just pick your curriculum, type your topic and generate."
      />
      <Reveal>
        <div className="responsive-card-grid max-w-[980px] [--card-min:250px] rounded-xl border border-border-default bg-border-default p-[1px] mx-auto">
          {[
            [
              "01",
              "Choose Your Curriculum",
              "Select your country, exam board and grade level. Studiely calibrates every tool to your exact specification before you type a single topic.",
              "border-l-teal text-teal hover:bg-bg-base",
            ],
            [
              "02",
              "Enter Your Topic",
              "Type the subject and topic you need to cover. No files, no uploads, no configuration.",
              "border-l-indigo text-indigo hover:bg-bg-base",
            ],
            [
              "03",
              "Generate and Study",
              "Choose a tool — notes, flashcards, quiz or exam practice — and your content is ready in seconds.",
              "border-l-amber text-amber hover:bg-bg-base",
            ],
          ].map(([n, t, d, styles]) => (
            <div
              key={n}
              className={`responsive-card h-full border-l-[3px] bg-white transition-colors duration-180 ${styles}`}
            >
              <span className="fluid-eyebrow mb-[clamp(0.75rem,1.2vw,1rem)] block italic leading-none">
                Step {n}
              </span>
              <h3 className="mb-[clamp(0.55rem,1vw,0.8rem)] text-[clamp(1.2rem,0.7vw+1rem,1.5rem)] font-normal text-navy">
                {t}
              </h3>
              <p className="text-[clamp(0.9rem,0.38vw+0.8rem,1rem)] font-light leading-[1.7] text-body">
                {d}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);
