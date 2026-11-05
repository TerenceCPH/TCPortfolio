/**
 * Centralized profile content.
 * Edit this single file to update Education, Experience, Certifications,
 * skills, and social links across the entire site.
 */

import type {
  TimelineEntry,
} from "../components/Timeline.astro";
import type { Qualification } from "../components/Qualifications.astro";

// ─── Skill category type ─────────────────────────────────────────────
export interface SkillCategory {
  label: string;
  color: "blue" | "purple" | "emerald" | "pink" | "amber";
  items: string[];
}

// ─── Social / Contact ────────────────────────────────────────────────
/** Leave a field unset to hide that link. Add email, GitHub, or LinkedIn here when ready. */
export const social: {
  email?: string;
  github?: string;
  linkedin?: string;
} = {
  linkedin: "https://www.linkedin.com/in/terence-c-912410179/",
};

// ─── Education ───────────────────────────────────────────────────────
export const education: TimelineEntry[] = [
  {
    date: "Sep 2026 — Jun 2028",
    title: "Master in Computer Science",
    organization: "The University of Hong Kong · Pok Fu Lam",
    description: "Expected Jun 2028. General stream with a strong focus on data engineering and cybersecurity, and their applications to FinTech.",
    details: [
      "Currently developing an AI agent that integrates asynchronous ETL pipelines and a FastAPI persistence layer to ingest market data from YFinance through natural language processing.",
    ],
    tags: ["Data Engineering", "Cybersecurity", "FinTech"],
  },
  {
    date: "Sep 2018 — Jun 2022",
    title: "BEng (Hons), Electronic Engineering",
    organization: "Hong Kong University of Science and Technology · Clear Water Bay",
    details: [
      "Studied German I during the spring 2018 semester.",
      "Developed a Python-based data filtering pipeline to process and analyze ultrasound image datasets.",
    ],
    tags: ["Electronic Engineering", "Python"],
  },
];

// ─── Experience ──────────────────────────────────────────────────────
export const experience: TimelineEntry[] = [
  {
    date: "Apr 2026 — Present",
    title: "Software Engineer",
    organization: "Shui On Building Contractors Limited · Tai Kok Tsui",
    details: [
      "Architected a Python-based automation pipeline integrating SOAP APIs which significantly reduced configuration time of PLC controllers from 2 weeks to 2 minutes.",
      "Developed automated cybersecurity audit and patch management across centralized and distributed Windows and Linux environments to programmatically manage the user access matrix and ensure due care and due diligence in critical infrastructure.",
      "Directed the architecture of a scalable system-imaging framework for physical-to-virtual and virtual-to-physical migrations to streamline end-to-end modernization of secure access management systems.",
      "Collaborated with the test and commissioning team to standardize technical documentation with a Docusaurus pipeline secured by Cloudflare Zero Trust and managed via GitHub version control to ensure industry compliance and alignment with real-time code deployments.",
    ],
    tags: ["Python", "SOAP", "Cybersecurity", "Virtualization"],
  },
  {
    date: "Mar 2025 — Mar 2026",
    title: "Assistant Data Engineer",
    organization: "Key Direction Limited · Tai Wo Hau",
    details: [
      "Developed a Python pipeline that parsed DOORS Next XML into schema-driven Excel workbooks with openpyxl through an internal API, collected and exported the source files with Playwright and pywin32, and assembled the submission PDF with PyMuPDF.",
      "Turned hand-built compliance reports into a repeatable, traceable deliverable for compliance audit.",
      "Optimized complex SQL queries to aggregate and validate large-scale, multi-source datasets for automated reporting.",
      "Supported RAMS (Reliability, Availability, Maintainability, Safety) and system assurance work so traceability stayed aligned with safety-critical regulatory frameworks.",
    ],
    tags: ["Python", "SQL", "Compliance", "RAMS"],
  },
  {
    date: "May 2024 — Mar 2025",
    title: "Consultant",
    organization: "Tai Wo Tong Chinese Medical Clinic · Tiu King Leng",
    details: [
      "Evaluated and enhanced website design and functionality with HTML, CSS, and JavaScript to improve user engagement metrics.",
      "Developed custom functionality to manage the web infrastructure and optimized PHP performance.",
      "Executed SEO work to raise organic traffic and search rankings.",
      "Provided technical support and training so clinic staff could manage the site and update content.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "PHP", "SEO"],
  },
];

// ─── Certifications ──────────────────────────────────────────────────
export const certifications: Qualification[] = [
  {
    title: "Project Management Professional (PMP)",
    year: "Until Feb 2032",
  },
  {
    title: "Japanese Language Proficiency Test N2",
    institution: "JLPT",
    year: "N2",
    description: "Certified N5 through N2, CEFR Level B2.",
  },
  {
    title: "IELTS",
    institution: "IELTS",
    year: "2018 & 2022",
    description: "Overall Band 7.5 / 9.0 (June 2018 and July 2022).",
  },
  {
    title: "Data Engineer",
    institution: "DataCamp",
    year: "Until Nov 2028",
  },
  {
    title: "CISSP",
    institution: "In progress",
    year: "In progress",
  },
];

// ─── Skills ──────────────────────────────────────────────────────────
export const skills: SkillCategory[] = [
  {
    label: "Programming",
    color: "blue",
    items: ["Python", "SQL", "Bash", "TypeScript"],
  },
  {
    label: "Database",
    color: "purple",
    items: ["PostgreSQL", "DuckDB", "Microsoft SQL Server"],
  },
  {
    label: "Visualization",
    color: "emerald",
    items: ["Power BI"],
  },
  {
    label: "Infrastructure",
    color: "pink",
    items: ["Git", "Linux"],
  },
  {
    label: "Cloud",
    color: "amber",
    items: ["Docker"],
  },
];
