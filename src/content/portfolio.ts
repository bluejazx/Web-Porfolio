// ============================================================================
// portfolio.ts — Single source of truth for Joshua Young's portfolio site.
// ============================================================================
// Provenance & labeling (per Joshua's convention — Verified / Measured /
// Assumption / Modeled / Experimental):
//   - Experience timeline (roles, orgs, dates): Verified against the LinkedIn
//     timeline confirmed in conversation 1785548152030 (2026-08-01) and the
//     final resume build (build_resume.py, v7).
//   - IBM bullet copy: de-jargoned for a NON-IBM reader. Token-optimization
//     savings are stated QUALITATIVELY — NO percentage is fabricated. The
//     ~90% pricing-automation figure is stakeholder-reported (Verified,
//     stakeholder-attributed) and labeled as such.
//   - 68/68 tests: Measured (clean package extract test suite).
//   - Skills / Education / Honors: from the resume + LinkedIn timeline.
// Do NOT invent metrics. Any number added later must carry a label.
// ============================================================================

// ---------------------------------------------------------------------------
// Image assets
// ---------------------------------------------------------------------------
// Imported as URLs by Vite. Source uploads:
//   incoming/paste-1785408269-01.jpg -> headshot.jpg    (headshot — Assumption: 01 is the headshot; verify visually)
//   incoming/paste-1785408269-02.jpg -> internship-01.jpg (gallery)
//   incoming/paste-1785408269-03.jpg -> internship-02.jpg (gallery)
//   incoming/paste-1785408269-04.jpg -> internship-03.jpg (gallery)
import headshotImg from "@/assets/photos/headshot.jpg";
import internship01 from "@/assets/photos/internship-01.jpg";
import internship02 from "@/assets/photos/internship-02.jpg";
import internship03 from "@/assets/photos/internship-03.jpg";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export interface ContactLink {
  label: string;
  href: string;
  /** lucide-react icon name */
  icon: string;
  /** true when this is a placeholder the owner must fill in */
  placeholder?: boolean;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Person {
  name: string;
  /** short role/positioning line under the hero name */
  headline: string;
  /** 1–2 sentence positioning summary */
  summary: string;
  location: string;
  headshot: GalleryImage;
  contact: ContactLink[];
}

export interface Experience {
  id: string;
  role: string;
  org: string;
  location: string;
  /** display date range, e.g. "May 2026 — Present" */
  period: string;
  startISO: string; // YYYY-MM for sorting
  endISO: string | null; // null === current
  current: boolean;
  /** lucide-react icon name */
  icon: string;
  /** one-line summary for cards */
  short: string;
  /** paragraph(s) for the expanded section */
  long: string;
  /** bulleted accomplishments (XYZ-style, factually labeled where numeric) */
  highlights: string[];
  tags: string[];
}

export interface EducationEntry {
  id: string;
  credential: string;
  institution: string;
  period: string;
  icon: string;
  details: string[];
}

export interface SkillGroup {
  label: string;
  icon: string;
  items: string[];
}

export interface SiteMeta {
  /** Version badge — bump in lockstep with manifest/package.json/docs/zip. */
  version: string;
  repo: string;
  title: string;
  description: string;
}

export interface Portfolio {
  meta: SiteMeta;
  person: Person;
  experiences: Experience[];
  education: EducationEntry[];
  skills: SkillGroup[];
  honors: string[];
  gallery: GalleryImage[];
}

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

export const meta: SiteMeta = {
  version: "0.1.0",
  repo: "github.com/bluejazx/Web-Porfolio",
  title: "Joshua Young — Data Science & AI Engineering",
  description:
    "Portfolio of Joshua Young: Data Science student and IBM SAP AI Enablement Consultant intern building AI agent systems and cost-optimization tooling.",
};

export const person: Person = {
  name: "Joshua Young",
  headline: "Data Scientist · AI Agent Engineer · Cost-Optimization Builder",
  summary:
    "Data Science student and IBM SAP AI Enablement Consultant intern specializing in AI agent orchestration and the cost optimization of large language models — shipping production-grade AI agents and dashboards that cut model spend while preserving output quality.",
  location: "Finksburg, MD",
  headshot: {
    src: headshotImg,
    alt: "Joshua Young",
  },
  contact: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/joshua-young-4a0608413",
      icon: "Linkedin",
    },
    {
      // Placeholder — swap in the real address before publishing.
      label: "Email",
      href: "mailto:your-email@example.com",
      icon: "Mail",
      placeholder: true,
    },
    {
      // Placeholder — swap in the personal-site domain before publishing.
      label: "Website",
      href: "https://your-personal-site.com",
      icon: "Globe",
      placeholder: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/bluejazx",
      icon: "Github",
    },
  ],
};

export const experiences: Experience[] = [
  {
    id: "ibm",
    role: "SAP AI Enablement Consultant Intern",
    org: "IBM Consulting",
    location: "Dallas, TX / Remote",
    period: "May 2026 — Present",
    startISO: "2026-05",
    endISO: null,
    current: true,
    icon: "BrainCircuit",
    short:
      "Building sophisticated AI agents and a real-time cost dashboard that route work to the most cost-effective capable model while preserving quality.",
    long:
      "On the SAP AI enablement team, I build sophisticated AI agents that automate the work of a consulting-delivery organization — and I make that automation affordable to run at scale. The core problem: advanced AI agent workflows are expensive because they tend to default to a single premium model for every step, even simple ones. My work attacks that head-on.\n\nI engineered an automated routing system that inspects each task inside an agent workflow and routes it to the most cost-effective capable AI model — reserving premium models for the genuinely hard steps and sending routine steps to cheaper, capable ones. Cost is measured, never a factor that's allowed to degrade quality: a separate quality-review pass guards the output, so the system saves money without cutting corners.\n\nTo make the savings visible and trustworthy, I shipped a real-time cost dashboard that prices every AI call against a premium-model baseline and shows, live, what each workflow costs and saves. It's validated by a passing test suite (68/68 tests green from a clean build). The result is measurable, metered savings versus a premium-model baseline — reported qualitatively here rather than as a single headline percentage, because the honest figure depends on the workflow mix.\n\nAlongside the optimization work, I built internal automation tools that turned multi-hour manual document and pricing tasks into self-service workflows, freeing consultants for higher-value client work.",
    highlights: [
      "Engineered an automated routing system that sends each task in an AI agent workflow to the most cost-effective capable model instead of defaulting to a single premium model — cutting per-task AI spend versus a premium-model baseline while preserving output quality. (Savings: Measured, metered vs baseline — stated qualitatively; no fixed percentage.)",
      "Shipped a real-time cost dashboard that prices every AI call against the baseline and shows live what each workflow costs and saves — validated by 68/68 passing tests. (Test count: Measured.)",
      "Enforced quality-first behavior: cost is metered for visibility only and never allowed to trade down output quality, guarded by an independent review pass. (Verified — design.)",
      "Built internal automation tools that converted multi-hour manual document and pricing tasks into self-service workflows — one pricing process cut by roughly 90%. (~90%: Verified, stakeholder-reported.)",
    ],
    tags: [
      "AI Agents",
      "LLM Cost Optimization",
      "Model Routing",
      "Dashboards",
      "Automation",
      "Python",
    ],
  },
  {
    id: "catt-lab",
    role: "Data Engineer",
    org: "CATT Lab (Center for Advanced Transportation Technology)",
    location: "College Park, MD",
    period: "Jun 2025 — Aug 2025",
    startISO: "2025-06",
    endISO: "2025-08",
    current: false,
    icon: "Database",
    short:
      "Turned real-time traffic feeds into research-ready datasets and built visualization logic to surface high-priority incidents for human-factors research.",
    long:
      "As a data engineer on the NSSSIP program (human-factors focus), I supported research on emergency traffic-map interfaces. I extracted and transformed real-time RITIS traffic feeds with Python and Pandas, turning messy live data into clean, research-ready datasets the research team could actually use.\n\nBecause the research was about how operators cope under pressure, I prototyped data-filtering mechanisms that cut on-screen density down to the incidents that mattered most, and engineered dynamic visualization logic that ranks and surfaces high-priority traffic incidents by severity and proximity in real time — improving how quickly an operator could triage what was happening.",
    highlights: [
      "Powered human-factors research on emergency traffic-map interfaces by extracting and transforming real-time RITIS traffic feeds with Python and Pandas into clean, research-ready datasets.",
      "Prototyped data-filtering mechanisms that cut on-screen density to the most critical incidents, enhancing operator focus in high-pressure scenarios.",
      "Engineered dynamic visualization logic that ranks and surfaces high-priority incidents by severity and proximity in real time, improving incident triage.",
    ],
    tags: ["Python", "Pandas", "Data Engineering", "Real-Time Data", "Visualization"],
  },
  {
    id: "umd-math-coach",
    role: "Math Coach & Math Coach Leader",
    org: "University of Maryland — Math Success Program",
    location: "College Park, MD",
    period: "Jan 2025 — Jul 2026",
    startISO: "2025-01",
    endISO: "2026-07",
    current: false,
    icon: "GraduationCap",
    short:
      "Mentored students across 100–300 level math/stat courses and stepped up to a coach-leader role, authoring reusable materials adopted across sections.",
    long:
      "I coach students across 100–300 level MATH/STAT courses — Calculus III, Differential Equations, and Statistics 400 — leading group-tutoring sessions and building personalized study plans from diagnostic assessments. My focus is turning hard topics into confidence: I break complex proofs and methods into step-by-step walkthroughs tailored to each student's specific gaps.\n\nI grew into a Math Coach Leader role, and along the way authored reusable practice materials and worked examples that were adopted across multiple course sections and semesters.",
    highlights: [
      "Mentored students across 100–300 level MATH/STAT courses (Calculus III, Differential Equations, Statistics 400), improving outcomes via group tutoring and personalized study plans built from diagnostics.",
      "Cultivated student confidence and retention on high-difficulty topics by breaking complex proofs and methods into step-by-step walkthroughs tailored to each student's gaps.",
      "Authored reusable practice materials and worked examples adopted across multiple course sections and semesters.",
      "Advanced to a Math Coach Leader role.",
    ],
    tags: ["Teaching", "Mentorship", "Mathematics", "Statistics", "Leadership"],
  },
  {
    id: "abc-care",
    role: "School-Age Teacher",
    org: "ABC Care Inc.",
    location: "MD",
    period: "Jul 2023 — May 2026",
    startISO: "2023-07",
    endISO: "2026-05",
    current: false,
    icon: "Users",
    short:
      "Ran daily operations for an after-school program serving 20–90 children, leading staff, managing budgets and enrollment, and delivering weekly lesson plans.",
    long:
      "For an after-school non-profit, I ran daily operations across a program serving between 20 and 90 children (seasonal). I led a 2–3 person staff, managed budgets and enrollment, and delivered weekly lesson plans — balancing logistics and safety with keeping the program engaging for a wide age range.",
    highlights: [
      "Ran daily operations for an after-school non-profit serving 20–90 children by leading a 2–3 person staff, managing budgets and enrollment, and delivering weekly lesson plans.",
    ],
    tags: ["Operations", "Leadership", "Education", "Budget Management"],
  },
  {
    id: "nasa-coop",
    role: "Co-op Apprenticeship",
    org: "NASA",
    location: "MD",
    period: "Jan 2024 — May 2024",
    startISO: "2024-01",
    endISO: "2024-05",
    current: false,
    icon: "Rocket",
    short:
      "Completed a NASA co-op apprenticeship.",
    long:
      "Completed a co-op apprenticeship with NASA (Jan–May 2024). (Detail: scope not documented in the source material this session — to be expanded with specifics before publishing.)",
    highlights: [
      "Selected for and completed a NASA co-op apprenticeship (Jan–May 2024).",
    ],
    tags: ["Apprenticeship", "STEM", "NASA"],
  },
  {
    id: "howard-ta",
    role: "Teaching Assistant",
    org: "Howard Community College",
    location: "Columbia, MD",
    period: "Jan 2024 — May 2024",
    startISO: "2024-01",
    endISO: "2024-05",
    current: false,
    icon: "Presentation",
    short:
      "TA for Honors Calculus and Calculus-based Mechanics — simplified theorems, redesigned discovery labs, and analyzed performance data to improve the course.",
    long:
      "As a teaching assistant for Honors Calculus and calculus-based Mechanics, I raised student comprehension by simplifying complex theorems and redesigning discovery-lab experiments for student-driven demonstrations. I also analyzed student performance and survey data to iterate on and improve the course.",
    highlights: [
      "Raised student comprehension by simplifying complex theorems, redesigning discovery-lab experiments for student-driven demonstrations, and analyzing performance and survey data to improve the course.",
    ],
    tags: ["Teaching", "Mathematics", "Physics", "Data Analysis"],
  },
];

export const education: EducationEntry[] = [
  {
    id: "umd",
    credential: "B.S. Data Science — Business Innovation Technology Minor",
    institution: "University of Maryland, College Park",
    period: "Aug 2024 — May 2027 (Expected)",
    icon: "GraduationCap",
    details: [
      "Selected Coursework: Data Science Pathway — interdisciplinary applications for creating data-centric products and programs addressing scientific, socio-political, and business problems.",
      "Minor: Business Innovation Technology.",
    ],
  },
  {
    id: "howard",
    credential: "A.A. General Studies",
    institution: "Howard Community College",
    period: "Aug 2023 — May 2024",
    icon: "School",
    details: [
      "Alpha Phi Omega (service fraternity).",
      "Math Honors.",
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    label: "Languages & Frameworks",
    icon: "Code2",
    items: [
      "Python",
      "Java",
      "JavaScript",
      "C / C++",
      "SQL",
      "HTML / CSS",
      "React",
      "Pandas",
      "NumPy",
    ],
  },
  {
    label: "AI / LLM",
    icon: "BrainCircuit",
    items: [
      "LLM orchestration",
      "Prompt engineering",
      "Agent / plugin development",
      "Token-cost optimization",
      "Model routing",
    ],
  },
  {
    label: "Tools",
    icon: "Wrench",
    items: [
      "Git / GitHub",
      "VS Code",
      "Unreal Engine",
      "Unity",
      "Photoshop",
    ],
  },
];

export const honors: string[] = [
  "Phi Theta Kappa",
  "Math & Science Honors",
  "University Honors",
  "MD AP Honors Award (AP Computer Science)",
];

export const gallery: GalleryImage[] = [
  {
    src: internship01,
    alt: "Joshua Young — internship photo",
    caption: "IBM Consulting internship",
  },
  {
    src: internship02,
    alt: "Joshua Young — internship photo",
    caption: "IBM Consulting internship",
  },
  {
    src: internship03,
    alt: "Joshua Young — internship photo",
    caption: "IBM Consulting internship",
  },
];

// ---------------------------------------------------------------------------
// Aggregate export
// ---------------------------------------------------------------------------
export const portfolio: Portfolio = {
  meta,
  person,
  experiences,
  education,
  skills,
  honors,
  gallery,
};

export default portfolio;
