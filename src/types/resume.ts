/** Month precision date in `YYYY-MM` format. */
export type YearMonth = `${number}-${number}`;

export interface Experience {
  id: string;
  company: string;
  role: string;
  location?: string;
  industry?: string;
  /** `break` renders a career break (e.g. a gap year) with a lighter card. */
  kind?: "job" | "break";
  start: YearMonth;
  /** `null` means the role is ongoing. */
  end: YearMonth | null;
  /** Path to a logo in `public/`, e.g. `/logos/acme.svg`. Falls back to initials. */
  logo?: string;
  /** 3–5 short, one-line bullet points. */
  highlights: string[];
  tags: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution?: string;
  start?: YearMonth;
  end?: YearMonth | null;
  description?: string;
  /** Link to a copy of the diploma. */
  url?: string;
}

export interface Certification {
  name: string;
  detail?: string;
  url?: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface ResumeData {
  name: string;
  title: string;
  intro: string;
  resumeUrl?: string;
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  skills: SkillGroup[];
  /** Tools grouped by proficiency, e.g. `{ title: "Excellent", skills: [...] }`. */
  tools: SkillGroup[];
  languages: Language[];
}