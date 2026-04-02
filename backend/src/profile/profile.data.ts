import type { PortfolioProfile } from './profile.types';

export const profileData: PortfolioProfile = {
  basics: {
    name: 'Edem Ahorlu',
    title: 'Full-Stack AI Engineer',
    summary:
      'I build full-stack products and AI-powered workflows that help teams move faster from idea to deployed software. My focus is practical agentic systems, context-aware chat experiences, and startup-ready MVPs.',
    email: 'edem.ahorluk@gmail.com',
    location: 'Add your location',
    availability: 'Add your availability',
    resumeUrl: '/resume.pdf',
  },

  socials: [
    {
      platform: 'github',
      label: 'GitHub',
      href: 'https://github.com/airdm404',
    },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/edem-ahorlu',
    },
    {
      platform: 'x',
      label: 'X',
      href: 'https://x.com/ed3mah',
    },
    {
      platform: 'email',
      label: 'Email',
      href: 'mailto:edem.ahorluk@gmail.com',
    },
  ],

  capabilities: [
    {
      title: 'Languages',
      items: ['Python', 'TypeScript', 'Go', 'Rust'],
    },
    {
      title: 'AI & Data',
      items: ['PyTorch', 'LangChain', 'Vector DBs', 'OpenAI API'],
    },
    {
      title: 'Infra',
      items: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    },
  ],

  projects: [
    {
      id: 'agentic-portfolio',
      slug: 'agentic-portfolio',
      name: 'Agentic Portfolio',
      tagline: 'AI-powered portfolio with recruiter-facing chat',
      description:
        'A portfolio site that combines a modern frontend with a NestJS backend and an AI chat flow for answering questions about work, projects, skills, and fit.',
      stack: ['React', 'TypeScript', 'Vite', 'NestJS', 'OpenAI API', 'AI SDK'],
      highlights: [
        'Streams AI responses in a portfolio chat interface',
        'Classifies user intent before generating answers',
        'Uses a shared portfolio data model for both UI and chat context',
      ],
      repoUrl: 'Add your repo URL',
      demoUrl: 'Add your live URL',
      featured: true,
      chatNotes: {
        problem:
          'Traditional portfolio sites are static and make it harder for recruiters to ask follow-up questions quickly.',
        solution:
          'This project adds a guided AI layer on top of portfolio content so visitors can ask natural questions and get contextual answers.',
        architecture: [
          'React frontend for rendering portfolio sections and chat UI',
          'NestJS backend for validation, classification, and streaming model responses',
          'Intent routing to keep responses aligned with project, experience, hiring, or contact questions',
        ],
        tradeoffs: [
          'Keeping portfolio facts in prompts is fast at first but becomes hard to maintain',
          'A single canonical profile data source is easier to update and reuse',
        ],
        impact: [
          'Makes the portfolio more interactive',
          'Creates a more recruiter-friendly experience',
        ],
      },
    },
    {
      id: 'project-2',
      slug: 'project-2',
      name: 'Add your project name',
      tagline: 'One-line value proposition',
      description: 'Describe the product, system, or workflow clearly.',
      stack: ['Add', 'Your', 'Stack'],
      highlights: [
        'Add a measurable or concrete accomplishment',
        'Add a second strong implementation detail',
      ],
      repoUrl: 'Add repo URL',
      demoUrl: 'Add demo URL',
      featured: true,
      chatNotes: {
        problem: 'What problem did this solve?',
        solution: 'What did you build?',
        architecture: ['Main service', 'Key components', 'Important flow'],
        tradeoffs: ['Tradeoff 1', 'Tradeoff 2'],
        impact: ['Impact 1', 'Impact 2'],
      },
    },
  ],

  experience: [
    {
      id: 'exp-1',
      company: 'Add company name',
      role: 'Add role title',
      start: '2024-01',
      end: 'present',
      location: 'Add location',
      summary:
        'Summarize the role in one or two sentences with scope and ownership.',
      highlights: [
        'Built or led something meaningful',
        'Improved a workflow, system, or metric',
      ],
      stack: ['TypeScript', 'Python', 'OpenAI API'],
    },
    {
      id: 'exp-2',
      company: 'Add previous company',
      role: 'Add previous role',
      start: '2022-01',
      end: '2023-12',
      summary: 'Short role summary.',
      highlights: ['Highlight 1', 'Highlight 2'],
      stack: ['Add', 'Relevant', 'Tech'],
    },
  ],

  hiring: {
    elevatorPitch:
      'I am a full-stack AI engineer who builds practical agentic systems, chat experiences, and MVPs that are useful in real product environments.',
    strengths: [
      'Can work across frontend, backend, and AI layers',
      'Strong at turning vague ideas into working software',
      'Good fit for startup-style speed and iteration',
    ],
    idealRoles: [
      'Full-Stack AI Engineer',
      'Applied AI Engineer',
      'Product Engineer working on AI features',
    ],
  },
};
