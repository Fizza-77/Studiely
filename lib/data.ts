export const CUR_DATA: Record<string, Record<string, string[]>> = {
  "British Curriculum": {
    "UK National Curriculum": [
      "Nursery (Pre-K)",
      "Reception (KG)",
      "Year 1 (KS1)",
      "Year 2 (KS1)",
      "Year 3 (KS2)",
      "Year 4 (KS2)",
      "Year 5 (KS2)",
      "Year 6 (KS2)",
      "Year 7 (KS3)",
      "Year 8 (KS3)",
      "Year 9 (KS3)",
      "GCSE (KS4)",
      "AS Level (KS5)",
      "A Level (KS5)",
    ],
    "Cambridge International": [
      "Nursery",
      "Reception",
      "Year 1",
      "Year 2",
      "Year 3",
      "Year 4",
      "Year 5",
      "Year 6 (Primary)",
      "Primary Checkpoint",
      "Year 7",
      "Year 8",
      "Year 9 (Lower Secondary)",
      "Lower Secondary Checkpoint",
      "IGCSE",
      "AS Level",
      "A Level",
    ],
    "Pearson Edexcel": [
      "Nursery (EYFS)",
      "Reception (EYFS)",
      "Year 1",
      "Year 2",
      "Year 3",
      "Year 4",
      "Year 5",
      "Year 6",
      "Year 7",
      "Year 8",
      "Year 9",
      "GCSE",
      "AS Level",
      "A Level",
    ],
  },
  "US Curriculum": {
    "US Standards": [
      "Kindergarten",
      "Grade 1",
      "Grade 2",
      "Grade 3",
      "Grade 4",
      "Grade 5",
      "Grade 6",
      "Grade 7",
      "Grade 8",
      "Grade 9",
      "Grade 10",
      "Grade 11",
      "Grade 12",
    ],
    "AP Pathway": [
      "Grade 9 (AP Eligible)",
      "Grade 10 (AP Eligible)",
      "Grade 11 — AP",
      "Grade 12 — AP",
    ],
  },
  "IB": {
    PYP: ["Grade 1 (PYP)", "Grade 2 (PYP)", "Grade 3 (PYP)", "Grade 4 (PYP)", "Grade 5 (PYP)"],
    MYP: ["Grade 6 (MYP)", "Grade 7 (MYP)", "Grade 8 (MYP)", "Grade 9 (MYP)", "Grade 10 (MYP)"],
    DP: ["Grade 11 — DP1", "Grade 12 — DP2"],
  },
  "Australian Curriculum": {
    "Any State": [
      "Foundation",
      "Year 1",
      "Year 2",
      "Year 3",
      "Year 4",
      "Year 5",
      "Year 6",
      "Year 7",
      "Year 8",
      "Year 9",
      "Year 10",
    ],
    "NSW → HSC": ["Year 11 (HSC)", "Year 12 (HSC)"],
    "VIC → VCE": ["Year 11 (VCE)", "Year 12 (VCE)"],
  },
  "Canadian Curriculum": {
    "Any Province": [
      "Kindergarten",
      "Grade 1",
      "Grade 2",
      "Grade 3",
      "Grade 4",
      "Grade 5",
      "Grade 6",
      "Grade 7",
      "Grade 8",
      "Grade 9",
      "Grade 10",
    ],
    "Ontario → OSSD": ["Grade 11 (OSSD)", "Grade 12 (OSSD)"],
    "BC → BC Grad": ["Grade 11 (BC)", "Grade 12 (BC)"],
  },
};

export const REVIEWS_1 = [
  {
    quote:
      "I was sceptical at first but I set it to Cambridge IGCSE Bio and typed photosynthesis, the notes matched what we did in class way more than random YouTube summaries. I still tweak a line here and there but it’s cut my revision time in half.",
    name: "Aisha K.",
    role: "IGCSE Student",
    initials: "AK",
    col: "var(--color-teal)",
  },
  {
    quote:
      "Mocks were two weeks away and I was behind on organic chem. The quiz pulled questions that felt like past-paper style, not generic trivia. Didn’t magically fix everything but I walked in way less panicked.",
    name: "James T.",
    role: "A-Level Student",
    initials: "JT",
    col: "var(--color-indigo)",
  },
  {
    quote:
      "I use flashcards for HL Bio before unit tests. Sometimes a card is wordy so I delete it, but 90% of the deck is usable. Way better than writing them out by hand at midnight.",
    name: "Maha S.",
    role: "IB Diploma Student",
    initials: "MS",
    col: "var(--color-amber)",
  },
  {
    quote:
      "Nyla’s actually useful when I’m stuck on something from the notes. I don’t have to wait for my tutor to reply. Not always perfect answers but good enough to unblock me before a test.",
    name: "Omar F.",
    role: "GCSE Student",
    initials: "OF",
    col: "var(--color-teal)",
  },
  {
    quote:
      "APUSH essays used to take me forever. I like that I can practise with a timer and get feedback that mentions structure, not just spelling. My teacher asked what I changed — honestly it was mostly practising here.",
    name: "Sophie L.",
    role: "AP Student",
    initials: "SL",
    col: "var(--color-indigo)",
  },
  {
    quote:
      "We had a topic test on WW2 causes. I generated a quiz and went through it on the bus. My mates asked for the link; half the class is on it now which is slightly annoying but fair enough.",
    name: "Yusuf A.",
    role: "Year 9 Student",
    initials: "YA",
    col: "var(--color-amber)",
  },
];

export const REVIEWS_2 = [
  {
    quote:
      "The layout of the notes is clearer than my own messy Google Docs. I use them as a backbone and add examples from my textbook. Feels less overwhelming than starting from a blank page.",
    name: "Mei C.",
    role: "A-Level Student",
    initials: "MC",
    col: "var(--color-indigo)",
  },
  {
    quote:
      "I’m applying for a maths-heavy course so I wanted extra exam-style questions beyond what school gives. The generator’s not a substitute for past papers but it’s a solid extra set to drill on.",
    name: "Daniel O.",
    role: "University Prep",
    initials: "DO",
    col: "var(--color-teal)",
  },
  {
    quote:
      "Chemistry was my worst subject. I made flashcards on bonding and actually remembered the definitions for once. Small win but I’ll take it.",
    name: "Fatima R.",
    role: "IGCSE Student",
    initials: "FR",
    col: "var(--color-amber)",
  },
  {
    quote:
      "I like that Nyla seems to know I’m not doing A-Levels yet. Answers are shorter and on-topic instead of dumping uni-level stuff on me.",
    name: "Liam B.",
    role: "IB MYP Student",
    initials: "LB",
    col: "var(--color-teal)",
  },
  {
    quote:
      "I don’t study three hours anymore on a school night, more like 45 minutes of quiz + notes review. I’m not saying I’m top of the class but I’m not drowning either.",
    name: "Zara H.",
    role: "Grade 10 Student",
    initials: "ZH",
    col: "var(--color-indigo)",
  },
  {
    quote:
      "The writing feedback tied to how marks work for our board is what sold me. I still read the mark scheme myself but it points out what I’d miss.",
    name: "Arjun P.",
    role: "AS Level Student",
    initials: "AP",
    col: "var(--color-amber)",
  },
];

export type PricingPlan = {
  name: string;
  price: string;
  cad: string;
  feats: string[];
  miss: string[];
  cta: string;
  fine: string;
  sub?: string;
  badge?: string;
  featured?: boolean;
  orig?: string;
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    cad: "Forever free",
    feats: [
      "5 total generations",
      "Notes (5 only)",
      "Flashcards (5 only)",
      "Quizzes (5 only)",
      "Exam Qs (5 only)",
    ],
    miss: ["Export PDF / Word", "Offline Access", "Nyla Priority", "Analytics", "Study Streaks"],
    cta: "Get Started",
    fine: "After 5 gens, upgrade.",
  },
  {
    name: "Monthly",
    price: "$26.99",
    sub: "/mo",
    cad: "Billed monthly",
    feats: [
      "Unlimited all tools",
      "Export PDF & Word",
      "Offline Access",
      "Nyla Priority",
      "Learning Analytics",
      "Study Streaks",
    ],
    miss: [],
    cta: "Choose Monthly",
    fine: "Cancel anytime.",
  },
  {
    name: "3 Months",
    price: "$76.99",
    cad: "$25.66/mo · 3 months",
    feats: [
      "Everything in Monthly",
      "Unlimited all tools",
      "Export PDF & Word",
      "Offline Access",
      "Nyla Priority",
      "Analytics",
    ],
    miss: [],
    cta: "Choose 3 Months",
    fine: "Cancel anytime.",
  },
  {
    name: "6 Months",
    price: "$149.99",
    cad: "$24.99/mo · 6 months",
    feats: [
      "Everything in Monthly",
      "Unlimited all tools",
      "Export PDF & Word",
      "Offline Access",
      "Nyla Priority",
      "Analytics",
    ],
    miss: [],
    cta: "Choose 6 Months",
    fine: "Cancel anytime.",
  },
  {
    name: "Annual",
    price: "$269.99",
    sub: "/yr",
    cad: "Only $22.49/mo",
    badge: "🔥 Best Value",
    feats: [
      "Everything in Monthly",
      "Unlimited all tools",
      "Export PDF & Word",
      "Offline Access",
      "Nyla Priority",
      "Learning Analytics",
      "Study Streaks",
    ],
    miss: [],
    cta: "Choose Annual",
    fine: "Cancel anytime.",
    featured: true,
  },
];
