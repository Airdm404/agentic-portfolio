import type { PortfolioProfile } from './profile.types';

export const profileData: PortfolioProfile = {
  basics: {
    name: 'Edem Ahorlu',
    title: 'Applied AI Product Engineer',
    summary:
      'I build full-stack products and AI-powered workflows with a focus on practical user impact. My experience spans end-to-end product development across backend services, APIs, frontend systems, and AI-powered applications, with recent work on music discovery at YouTube Music.',
    email: 'edem.ahorluk@gmail.com',
    location: 'New York, NY',
    availability: 'Open to relocation',
    resumeUrl: '/resume.pdf',
  },

  socials: [
    {
      platform: 'github',
      label: 'GitHub',
      href: 'https://github.com/Airdm404',
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
      items: [
        'Python',
        'TypeScript',
        'JavaScript',
        'Go',
        'Java',
        'C++',
        'SQL',
        'Bash',
      ],
    },
    {
      title: 'AI & ML',
      items: [
        'PyTorch',
        'TensorFlow',
        'Keras',
        'LangChain',
        'Hugging Face',
        'Scikit-learn',
        'Vertex AI',
        'NLP',
      ],
    },
    {
      title: 'Full Stack & Cloud',
      items: [
        'React',
        'Next.js',
        'Express',
        'Django',
        'Flask',
        'PostgreSQL',
        'MongoDB',
        'Docker',
        'Kubernetes',
        'GCP',
        'AWS',
      ],
    },
  ],

  projects: [
    {
      id: 'agentic-portfolio',
      slug: 'agentic-portfolio',
      name: 'Agentic Portfolio',
      tagline: 'AI-powered portfolio with recruiter-facing chat',
      description:
        'A portfolio site that combines a modern frontend with a backend AI chat flow for answering questions about experience, projects, skills, and hiring fit.',
      stack: ['React', 'TypeScript', 'Vite', 'NestJS', 'OpenAI API', 'AI SDK'],
      highlights: [
        'Streams AI responses in an interactive portfolio chat interface',
        'Routes user questions by intent before generating responses',
        'Uses structured portfolio data as reusable context across the UI and chat layers',
      ],
      repoUrl: 'https://github.com/Airdm404',
      demoUrl: 'https://edemahorlu.com',
      featured: true,
      chatNotes: {
        problem:
          'Traditional portfolios are static and make it harder for recruiters or hiring managers to ask targeted follow-up questions.',
        solution:
          'This project adds a conversational AI layer on top of portfolio content so visitors can explore work history, projects, and fit through natural language.',
        architecture: [
          'React frontend for portfolio rendering and chat UI',
          'Backend service for validation, intent classification, and model response generation',
          'Shared profile data model to keep content consistent across the site and AI experience',
        ],
        tradeoffs: [
          'Prompt-only portfolio context is fast to start with but harder to maintain over time',
          'A structured canonical data source is easier to update and reuse across features',
        ],
        impact: [
          'Makes the portfolio more interactive and easier to explore',
          'Creates a more recruiter-friendly experience with faster access to relevant information',
        ],
      },
    },
    {
      id: 'research-query',
      slug: 'research-query',
      name: 'Research Query',
      tagline: 'Real-time RAG chatbot for research paper retrieval',
      description:
        'A retrieval-augmented chatbot that delivers context-aware insights from research papers by automating document ingestion, embedding, and semantic search.',
      stack: ['GPT-4o', 'RAG', 'LangChain', 'Pinecone', 'Puppeteer', 'AWS EC2'],
      highlights: [
        'Built a real-time RAG chatbot for context-aware research paper question answering',
        'Automated scraping, embedding, and querying of large document datasets',
        'Used Pinecone to support scalable semantic vector search',
      ],
      repoUrl: 'https://github.com/Airdm404',
      demoUrl: 'https://edemahorlu.com',
      featured: true,
      chatNotes: {
        problem:
          'Research papers are difficult to search quickly with standard keyword-based approaches when users need specific contextual answers.',
        solution:
          'Built a RAG pipeline that ingests papers, embeds their contents, and answers questions using semantically retrieved context.',
        architecture: [
          'Document scraping and ingestion pipeline',
          'Embedding and vector indexing with Pinecone',
          'LLM-based answer generation grounded in retrieved research context',
        ],
        tradeoffs: [
          'Higher retrieval quality improves answers but adds ingestion and infra complexity',
          'Real-time relevance depends on chunking quality and embedding strategy',
        ],
        impact: [
          'Improved information retrieval from large research corpora',
          'Made paper exploration faster and more conversational',
        ],
      },
    },
    {
      id: 'moodmix',
      slug: 'moodmix',
      name: 'MoodMix',
      tagline: 'AI-generated music playlists based on user mood',
      description:
        'A web app that uses image capture and sentiment analysis to generate music playlists aligned with a user’s mood.',
      stack: [
        'OpenAI GPT-4',
        'Next.js',
        'Node.js',
        'Firebase',
        'Vercel',
        'react-camera-pro',
        'Material UI',
      ],
      highlights: [
        'Integrated GPT-4 for AI-driven sentiment analysis',
        'Generated playlists tailored to users’ moods from captured images',
        'Deployed a real-time web app using Firebase and Vercel',
      ],
      repoUrl: 'https://github.com/Airdm404',
      demoUrl: 'https://edemahorlu.com',
      featured: false,
      chatNotes: {
        problem:
          'Playlist selection is often manual and does not adapt well to a user’s current emotional state.',
        solution:
          'Built an app that analyzes mood signals from image input and uses AI to generate matching playlists.',
        architecture: [
          'Frontend for image capture and user interaction',
          'Backend logic for sentiment analysis and playlist generation',
          'Cloud deployment and real-time app services through Firebase and Vercel',
        ],
        tradeoffs: [
          'Mood inference from images is useful but imperfect',
          'A lightweight user experience must be balanced against richer personalization',
        ],
        impact: [
          'Created a more dynamic and personalized music discovery flow',
          'Showcased applied AI in a consumer-facing product experience',
        ],
      },
    },
  ],

  experience: [
    {
      id: 'google-youtube-music',
      company: 'Google - YouTube Music',
      role: 'Software Engineer',
      start: '2025',
      end: 'present',
      location: 'New York, NY',
      summary:
        'Worked on music discovery experiences for YouTube Music, building and evaluating product changes across recommendation services, backend APIs, frontend systems, and mobile clients.',
      highlights: [
        'Led an experiment expanding Samples music discovery across artist, album, playlist, and mix detail pages using impression-aware promotional banners',
        'Designed and tested a new Samples entry point in the Music Videos For You shelf to trigger playback directly from Home',
        'Implemented the feature end-to-end across recommendation services, backend APIs, frontend services, and mobile clients',
        'Modernized architecture by replacing legacy page reference entity logic with a unified page action model',
        'Resolved European Accessibility Act compliance bugs to improve assistive-technology usability',
      ],
      stack: [
        'C++',
        'gRPC',
        'Protocol Buffers',
        'Multi-arm Experiments',
        'Distributed Systems',
      ],
    },
    {
      id: 'issakaai',
      company: 'IssakaAI Technologies',
      role: 'Full Stack Software Engineer',
      start: '2023',
      end: '2025',
      location: 'Madison, WI',
      summary:
        'Built and shipped full-stack product features for an AI-powered community platform, with ownership across platform development, analytics, testing, and deployment workflows.',
      highlights: [
        'Led development of an AI-powered community-building platform that increased user retention by 10%',
        'Managed a cross-functional team to implement test automation and CI/CD pipelines, reducing deployment times by 12%',
        'Built a data-driven dashboard and integrated video calling features to improve user experience',
      ],
      stack: [
        'JavaScript',
        'TypeScript',
        'React Native',
        'GitHub Actions',
        'Firebase',
        'Jira',
      ],
    },
    {
      id: 'duke-university',
      company: 'Duke University',
      role: 'B.S. in Computer Science',
      start: '2019',
      end: '2023',
      location: 'Durham, NC',
      summary:
        'Completed a Bachelor of Science in Computer Science, building a strong foundation in software engineering, systems, algorithms, and applied technical problem-solving.',
      highlights: [
        'Earned a B.S. in Computer Science from Duke University',
        'Built core foundations in data structures, algorithms, software design, and systems',
      ],
      stack: [
        'Data Structures',
        'Algorithms',
        'Software Engineering',
        'Networking',
        'Systems',
        'Computer Science',
      ],
    },
  ],

  hiring: {
    elevatorPitch:
      'I’m a product-minded full-stack engineer with experience building end-to-end user-facing systems across backend services, APIs, frontend applications, and AI-powered workflows. I’m especially interested in roles where I can ship quickly, work across the stack, and build practical AI features that create clear product value.',
    strengths: [
      'Owns features end-to-end across frontend, backend, and product surfaces',
      'Comfortable building AI-powered applications and workflows',
      'Strong fit for startup environments that value speed, iteration, and breadth',
    ],
    idealRoles: [
      'Full-Stack Engineer',
      'Product Engineer',
      'Applied AI Engineer',
      'Full-Stack AI Engineer',
    ],
  },
};
