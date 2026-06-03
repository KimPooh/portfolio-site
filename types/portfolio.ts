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
  title: string;
  year: string;
  description: string;
  outcome: string;
  tags: string[];
  href?: string;
};

export type LabIdea = {
  title: string;
  status: "Exploring" | "Prototype" | "Backlog";
  description: string;
  stack: string[];
};
