"use client";

import { useMemo, useState } from "react";
import { ChevronRight, Search } from "lucide-react";
import { CUR_DATA } from "@/lib/data";

const BLUE = "#4F35F2";
const LIME = "#E8FF2F";
const CORAL = "#FF765E";
const PINK = "#FF36C6";

const CURRICULUM_DESCRIPTIONS: Record<string, string> = {
  "British Curriculum": "UK National Curriculum, Cambridge and Edexcel",
  "US Curriculum": "Common Core, NGSS and AP pathway",
  IB: "IB PYP, MYP and DP",
  "Australian Curriculum": "States, territories and senior certificates",
  "Canadian Curriculum": "Province and territory pathways",
};

const PATHWAY_DESCRIPTIONS: Record<string, string> = {
  "UK National Curriculum": "EYFS, KS1, KS2, KS3, GCSE, AS and A Level",
  "Cambridge International":
    "Cambridge Early Years, Primary, Lower Secondary, IGCSE and A Level",
  "Pearson Edexcel": "Edexcel GCSE, International GCSE, AS and A Level",
  "US Standards": "Kindergarten through Grade 12",
  "AP Pathway": "Advanced Placement preparation and subjects",
  PYP: "International Baccalaureate Primary Years",
  MYP: "International Baccalaureate Middle Years",
  DP: "International Baccalaureate Diploma Programme",
  "Any State": "Foundation through Year 10",
  "NSW → HSC": "New South Wales senior secondary pathway",
  "VIC → VCE": "Victoria senior secondary pathway",
  "Any Province": "Kindergarten through Grade 10",
  "Ontario → OSSD": "Ontario Secondary School Diploma",
  "BC → BC Grad": "British Columbia graduation pathway",
};

const SUBJECTS = [
  { title: "English Language", detail: "Open subject page" },
  { title: "First Language English (0500)", detail: "Open subject page" },
  { title: "English as a Second Language (0510)", detail: "Open subject page" },
  { title: "English Literature", detail: "Open subject page" },
  { title: "Mathematics (0580)", detail: "Open subject page" },
  { title: "Biology", detail: "Open subject page" },
  { title: "Chemistry", detail: "Open subject page" },
  { title: "Physics", detail: "Open subject page" },
] as const;

const DEFAULT_YEAR_GROUPS = [
  { title: "Nursery / Reception", detail: "Age 3 to 5, EYFS" },
  { title: "Year 1 to Year 6", detail: "Age 5 to 11, KS1 and KS2" },
  { title: "Year 7 to Year 9", detail: "Age 11 to 14, KS3" },
  { title: "GCSE / IGCSE", detail: "Age 14 to 16, KS4" },
  { title: "AS Level", detail: "Age 16 to 17, Grade 12" },
  { title: "A Level", detail: "Age 17 to 18, Grade 13" },
] as const;

const CardArrow = () => (
  <ChevronRight
    className="h-4 w-4 shrink-0 text-[#1E1B4B] transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:text-[#4F35F2]"
    strokeWidth={2.4}
    aria-hidden
  />
);

const cardClass = (selected: boolean) =>
  `group flex min-h-[72px] w-full items-center justify-between gap-3 rounded-[20px] bg-white px-4 py-3 text-left transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(79,53,242,0.16)] active:translate-y-0 active:scale-[0.985] ${
    selected
      ? "shadow-[0_10px_26px_rgba(79,53,242,0.18)] ring-2 ring-[#4F35F2]"
      : "shadow-[0_7px_20px_rgba(30,27,75,0.07)] ring-1 ring-transparent"
  }`;

type StepHeaderProps = {
  step: string;
  label: string;
  background: string;
  dark?: boolean;
};

const StepHeader = ({ step, label, background, dark = false }: StepHeaderProps) => (
  <div
    className={`rounded-[20px] px-4 py-3.5 shadow-[0_7px_18px_rgba(30,27,75,0.12)] ${
      dark ? "text-[#1E1B4B]" : "text-white"
    }`}
    style={{ backgroundColor: background }}
  >
    <p className="mb-0.5 font-jakarta text-[10px] font-extrabold uppercase tracking-[0.1em]">
      {step}
    </p>
    <p className="m-0 font-jakarta text-[13px] font-semibold">{label}</p>
  </div>
);

export const CurriculumPathwayBuilder = () => {
  const curriculumNames = Object.keys(CUR_DATA);
  const [curriculum, setCurriculum] = useState("British Curriculum");
  const [pathway, setPathway] = useState("UK National Curriculum");
  const [year, setYear] = useState("GCSE / IGCSE");
  const [subject, setSubject] = useState("");
  const [query, setQuery] = useState("");

  const pathways = Object.keys(CUR_DATA[curriculum]);
  const rawYears = CUR_DATA[curriculum][pathway];

  const years = useMemo(() => {
    if (
      curriculum === "British Curriculum" &&
      pathway === "UK National Curriculum"
    ) {
      return [...DEFAULT_YEAR_GROUPS];
    }

    return rawYears.map((item) => ({
      title: item,
      detail: item.includes("Grade")
        ? "Select this grade level"
        : "Select this academic level",
    }));
  }, [curriculum, pathway, rawYears]);

  const filteredSubjects = SUBJECTS.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()),
  );

  const selectCurriculum = (name: string) => {
    const nextPathway = Object.keys(CUR_DATA[name])[0];
    setCurriculum(name);
    setPathway(nextPathway);
    setYear("");
    setSubject("");
  };

  const selectPathway = (name: string) => {
    setPathway(name);
    setYear("");
    setSubject("");
  };

  return (
    <section
      id="pathway-builder"
      aria-label="Build your curriculum pathway"
      className="bg-bg-base pb-[clamp(0.5rem,1.5vw,0.85rem)] pt-0"
    >
      <div className="wrap">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          <div>
            <StepHeader
              step="Step 1"
              label="Choose Curriculum"
              background={LIME}
              dark
            />
            <div className="mt-3 space-y-3">
              {curriculumNames.map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => selectCurriculum(name)}
                  aria-pressed={curriculum === name}
                  className={cardClass(curriculum === name)}
                >
                  <span>
                    <span className="block font-jakarta text-[13px] font-extrabold leading-snug text-[#1E1B4B]">
                      {name}
                    </span>
                    <span className="mt-1 block font-jakarta text-[10px] leading-snug text-[#5B5A6A]">
                      {CURRICULUM_DESCRIPTIONS[name]}
                    </span>
                  </span>
                  <CardArrow />
                </button>
              ))}
            </div>
          </div>

          <div>
            <StepHeader
              step="Step 2"
              label="Choose Pathway"
              background={BLUE}
            />
            <div className="mt-3 space-y-3">
              {pathways.map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => selectPathway(name)}
                  aria-pressed={pathway === name}
                  className={cardClass(pathway === name)}
                >
                  <span>
                    <span className="block font-jakarta text-[13px] font-extrabold leading-snug text-[#1E1B4B]">
                      {name}
                    </span>
                    <span className="mt-1 block font-jakarta text-[10px] leading-snug text-[#5B5A6A]">
                      {PATHWAY_DESCRIPTIONS[name] ?? "Select this pathway"}
                    </span>
                  </span>
                  <CardArrow />
                </button>
              ))}
            </div>
          </div>

          <div>
            <StepHeader
              step="Step 3"
              label="Select Year / Grade"
              background={CORAL}
            />
            <div className="mt-3 space-y-3">
              {years.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => {
                    setYear(item.title);
                    setSubject("");
                  }}
                  aria-pressed={year === item.title}
                  className={cardClass(year === item.title)}
                >
                  <span>
                    <span className="block font-jakarta text-[13px] font-extrabold leading-snug text-[#1E1B4B]">
                      {item.title}
                    </span>
                    <span className="mt-1 block font-jakarta text-[10px] leading-snug text-[#5B5A6A]">
                      {item.detail}
                    </span>
                  </span>
                  <CardArrow />
                </button>
              ))}
            </div>
          </div>

          <div>
            <StepHeader
              step="Step 4"
              label="Select Subject"
              background={PINK}
            />
            <label className="relative mt-3 block">
              <span className="sr-only">Search subjects</span>
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2"
                style={{ color: BLUE }}
                strokeWidth={2.2}
                aria-hidden
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search subjects..."
                className="h-11 w-full rounded-full border border-[#1E1B4B]/55 bg-white pl-10 pr-4 font-jakarta text-[12px] text-[#1E1B4B] outline-none placeholder:text-[#8B8D9A] focus:border-[#4F35F2]"
              />
            </label>
            <div className="mt-3 space-y-3">
              {filteredSubjects.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setSubject(item.title)}
                  disabled={!year}
                  aria-pressed={subject === item.title}
                  className={`${cardClass(subject === item.title)} disabled:cursor-not-allowed disabled:opacity-55 disabled:hover:translate-y-0 disabled:hover:shadow-[0_7px_20px_rgba(30,27,75,0.07)]`}
                >
                  <span>
                    <span className="block font-jakarta text-[13px] font-extrabold leading-snug text-[#1E1B4B]">
                      {item.title}
                    </span>
                    <span className="mt-1 block font-jakarta text-[10px] leading-snug text-[#5B5A6A]">
                      {year ? item.detail : "Select a year or grade first"}
                    </span>
                  </span>
                  <CardArrow />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
