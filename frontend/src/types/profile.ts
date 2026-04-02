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

export type ProfileResponse = {
  basics: {
    name: string;
    title: string;
    summary: string;
    email: string;
    location?: string;
    availability?: string;
    resumeUrl?: string;
  };
  socials: SocialLink[];
  capabilities: CapabilityGroup[];
  projects: Project[];
  experience: ExperienceItem[];
  hiring: {
    elevatorPitch: string;
    strengths: string[];
    idealRoles: string[];
  };
};
