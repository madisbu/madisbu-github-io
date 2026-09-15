export type ProjectDiscipline = "ux-ui" | "web-design" | "product-development";

export interface CaseStudyMedia {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  /**
   * Set when the image already has a transparent background (e.g. an
   * exported PNG) so the section shouldn't paint a light card background
   * behind it.
   */
  transparentBackground?: boolean;
  /**
   * Optional percentage of the available section width used to render the
   * image. This can normalize visual scale across source files with different
   * canvas widths while preserving their native aspect ratios.
   */
  displayWidthPercent?: number;
  /**
   * Alternate image shown in the click-to-zoom lightbox. Use this when
   * `src` is a transparent-background asset that would be hard to see
   * against the lightbox's dark backdrop (e.g. supply a white-background
   * version here instead).
   */
  zoomSrc?: string;
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

export interface CaseStudyJourneyBubble {
  label: string;
  text: string;
}

export interface CaseStudyJourneyNode {
  kind?: "step" | "start" | "finish";
  title: string;
  description: string;
  painPoint?: CaseStudyJourneyBubble;
  solution?: CaseStudyJourneyBubble;
  sketch?: CaseStudyMedia;
  final?: CaseStudyMedia;
  branch?: string;
  /**
   * Label shown in the card's index badge (e.g. "Step 2"). Multiple
   * consecutive nodes can share the same label to group them under one
   * higher-level step. Falls back to a sequential "01", "02", ... index
   * when omitted.
   */
  stepLabel?: string;
}

export interface CaseStudyJourney {
  startLabel?: string;
  finishLabel?: string;
  nodes: CaseStudyJourneyNode[];
}

export interface CaseStudyCallout {
  label?: string;
  text: string;
}

export interface CaseStudyLink {
  label: string;
  href: string;
}

export interface CaseStudyEmbed {
  src: string;
  title: string;
  width: number;
  height: number;
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
  journey?: CaseStudyJourney;
  scenarios?: CaseStudyScenario[];
  callout?: CaseStudyCallout;
  media?: CaseStudyMedia;
  mediaGallery?: CaseStudyMedia[];
  embed?: CaseStudyEmbed;
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
