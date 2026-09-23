export type Bilingual = {
  kr: string;
  en: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type NavigationLink = {
  label: string;
  href: string;
};

export type HeroContent = {
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
};

export type SectionContent = {
  eyebrow: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  email: string;
  tagline: string;
  summary: string;
  availability: string;
  highlights: string[];
  socials: SocialLink[];
};

export type SiteContent = {
  navigation: NavigationLink[];
  hero: HeroContent;
  about: SectionContent;
  skills: SectionContent;
  projects: SectionContent;
  labs: SectionContent;
  contact: SectionContent;
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export type Project = {
  slug: string;
  title: Bilingual;
  year: string;
  category: string;
  description: Bilingual;
  outcome: Bilingual;
  tags: string[];
  detailHref?: string;
  featured?: boolean;
  summaryCards?: ProjectSummaryCard[];
  detail?: ProjectDetail;
};

export type ProjectSummaryCard = {
  title: string;
  items: Bilingual[];
};

export type ProjectTimelineItem = {
  title: Bilingual;
  description: Bilingual;
};

export type ProjectPerformanceCard = {
  title: string;
  description: Bilingual;
};

export type ProjectDetail = {
  oneLine: Bilingual;
  nature: Bilingual[];
  award: Bilingual;
  problem: Bilingual;
  dataUnderstanding: Bilingual;
  preprocessing: Bilingual;
  featureEngineering: Bilingual;
  modelingStrategy: Bilingual;
  validation: Bilingual;
  lessons: Bilingual[];
  disclosure: Bilingual;
  leakageNote: Bilingual;
  considerations: Bilingual[];
  techStack: string[];
  modelingFlow: Bilingual[];
  timeline: ProjectTimelineItem[];
  performanceCards: ProjectPerformanceCard[];
  results: Bilingual[];
};

export type LabIdea = {
  title: string;
  status: "Exploring" | "Prototype" | "Backlog";
  description: string;
  stack: string[];
};

export type LearningNote = {
  title: Bilingual;
  source: Bilingual;
  summary: Bilingual;
  portfolioValue: Bilingual;
  tags: string[];
};

export type LearningLogLink = {
  day: string;
  topic: Bilingual;
  href: string;
  category?: string;
  summary?: Bilingual;
  result?: Bilingual;
  details?: Bilingual[];
  tags?: string[];
  hideDay?: boolean;
  // originalDay: 이전 전체 순번(선택적). 카테고리별 재번호매김 시 보존용
  originalDay?: string;
};

export type LearningCategory = {
  course?: string;
  courseLabel?: Bilingual;
  courseDescription?: Bilingual;
  courseSubjects?: Bilingual[];
  category: Bilingual;
  description?: Bilingual;
  links: LearningLogLink[];
};
