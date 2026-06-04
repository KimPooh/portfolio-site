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
  title: string;
  year: string;
  category: string;
  description: string;
  outcome: string;
  tags: string[];
  detailHref?: string;
  featured?: boolean;
  summaryCards?: ProjectSummaryCard[];
  detail?: ProjectDetail;
};

export type ProjectSummaryCard = {
  title: string;
  items: string[];
};

export type ProjectDetail = {
  oneLine: string;
  nature: string[];
  award: string;
  problem: string;
  considerations: string[];
  techStack: string[];
  modelingFlow: string[];
  results: string[];
};

export type LabIdea = {
  title: string;
  status: "Exploring" | "Prototype" | "Backlog";
  description: string;
  stack: string[];
};
