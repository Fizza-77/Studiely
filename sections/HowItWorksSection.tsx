import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";

interface HowItWorksSectionProps {
  sectionRef?: any;
}

export const HowItWorksSection = ({ sectionRef }: HowItWorksSectionProps) => (
  <section
    id="how-it-works"
    ref={sectionRef}
    className="py-14 sm:py-16 md:py-20 bg-[#f9f9fb] border-t "
    style={{ borderColor: "#e2e2e8" }}
  >
    <div className="wrap">
      <SectionHeader
        label="How It Works"
        title="Ready in 3 Simple Steps"
        sub="No uploads. No setup. Just pick your curriculum, enter your topic, and generate."
      />
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-border-default border border-border-default rounded-xl overflow-hidden max-w-[900px] mx-auto">
          {[
            [
              "01",
              "Select Your Curriculum",
              "Choose from British (UK National, Cambridge, Edexcel), US (Standards, AP), IB (PYP, MYP, DP), Australian, Canadian, and more.",
              "border-l-teal text-teal hover:bg-bg-base",
            ],
            [
              "02",
              "Choose Grade & Topic",
              "Pick your year group or grade level. Then type your subject and the specific topic you want to study.",
              "border-l-indigo text-indigo hover:bg-bg-base",
            ],
            [
              "03",
              "Generate & Study",
              "Select a tool — Notes, Quiz, Flashcards, or Exam Questions — and your content is ready in seconds.",
              "border-l-amber text-amber hover:bg-bg-base",
            ],
          ].map(([n, t, d, styles]) => (
            <div
              key={n}
              className={`bg-white px-5 sm:px-6 lg:px-8 py-8 sm:py-9 lg:py-10 transition-colors duration-180 border-l-[3px] h-full ${styles}`}
            >
              <span className="font-serif text-[11px] italic mb-4 block leading-none">
                Step {n}
              </span>
              <h4 className="font-serif text-[20px] font-normal text-navy mb-2.5">
                {t}
              </h4>
              <p className="text-[13.5px] text-muted leading-[1.72] font-light">
                {d}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);
