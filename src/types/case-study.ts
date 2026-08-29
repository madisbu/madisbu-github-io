export type ProjectDiscipline = "ux-ui" | "web-design" | "product-development";

export interface CaseStudyMedia {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface CaseStudyMetaItem {
  label: string;
  value: string;
}

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudyFinding {
  prefix?: string;
  value: string;
  text: string;
}

export interface CaseStudyFindingGroup {
  eyebrow?: string;
  title: string;
  items: [CaseStudyFinding, CaseStudyFinding];
}

export type CaseStudyRating = 0 | 1 | 2 | 3 | 4 | 5;

export interface CaseStudyReview {
  company: string;
  logo: CaseStudyMedia;
  logoDisplayWidth: number;
  quote: string;
  rating: CaseStudyRating;
  accent?: string;
}

export interface CaseStudyFeedback {
  lead: string;
  leadEmphasis?: string[];
  reviews: CaseStudyReview[];
}

export interface CaseStudyQuote {
  attribution: string;
  text: string;
}

export interface CaseStudyStep {
  title: string;
  description: string;
  feature?: {
    paragraphs: string[];
    paragraphEmphasis?: string[];
    media: CaseStudyMedia;
    mediaLayout?: "portrait" | "wide";
    link: CaseStudyLink;
  };
  quotes?: CaseStudyQuote[];
}

export interface CaseStudyScenario {
  label: string;
  title: string;
  steps: CaseStudyStep[];
}

export interface CaseStudyCallout {
  label?: string;
  text: string;
}

export interface CaseStudyLink {
  label: string;
  href: string;
}

export interface CaseStudySection {
  id: string;
  title: string;
  eyebrow?: string;
  summary?: string;
  paragraphs?: string[];
  paragraphEmphasis?: string[];
  bullets?: string[];
  metrics?: CaseStudyMetric[];
  findings?: CaseStudyFindingGroup;
  feedback?: CaseStudyFeedback;
  steps?: CaseStudyStep[];
  scenarios?: CaseStudyScenario[];
  callout?: CaseStudyCallout;
  media?: CaseStudyMedia;
  links?: CaseStudyLink[];
}

export interface ProjectCaseStudy {
  title: string;
  description: string;
  discipline: ProjectDiscipline;
  previousProject: CaseStudyLink;
  nextProject: CaseStudyLink;
  cover: CaseStudyMedia;
  metadata: CaseStudyMetaItem[];
  sections: CaseStudySection[];
}
