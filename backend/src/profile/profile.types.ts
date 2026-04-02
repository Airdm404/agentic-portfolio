export type SocialPlatform = 'github' | 'linkedin' | 'x' | 'email';

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

export type CapabilityGroup = {
  title: string;
  items: string[];
};

export type ProjectChatNotes = {
  problem?: string;
  solution?: string;
  architecture?: string[];
  tradeoffs?: string[];
  impact?: string[];
};

export type Project = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  repoUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  chatNotes?: ProjectChatNotes;
};

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type HiringProfile = {
  elevatorPitch: string;
  strengths: string[];
  idealRoles: string[];
};

export type PortfolioBasics = {
  name: string;
  title: string;
  summary: string;
  email: string;
  location?: string;
  availability?: string;
  resumeUrl?: string;
};

export type PortfolioProfile = {
  basics: PortfolioBasics;
  socials: SocialLink[];
  capabilities: CapabilityGroup[];
  projects: Project[];
  experience: ExperienceItem[];
  hiring: HiringProfile;
};
