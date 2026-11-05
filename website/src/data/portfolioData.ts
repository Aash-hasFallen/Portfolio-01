export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  badge: string;
  shortDescription: string;
  detailedDescription: string;
  tags: string[];
  link?: string;
  repoUrl?: string;
}

export interface SkillItem {
  name: string;
  tag: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  number: string;
  codeName: string;
  categoryTag: string;
  title: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  period: string;
  status: string;
  description: string;
  highlight?: boolean;
}

export interface ExperimentItem {
  id: string;
  code: string;
  type: string;
  title: string;
  description: string;
  stack: string;
  badge: string;
}

export interface ExploreItem {
  number: string;
  title: string;
  subtitle: string;
  href: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Aashray Biswal',
    displayFirst: 'AASHRAY',
    displayLast: 'BISWAL',
    discipline: 'COMPUTER SCIENCE // AI & DATA SCIENCE',
    focusBadge: 'Computer Science // AI & Data Science',
    quote: 'Building at the intersection of code, data and intelligence.',
    summary:
      'Computer Science undergraduate exploring artificial intelligence, data science and creative software engineering. Interested in turning ideas into practical, meaningful projects.',
    aboutQuote:
      "I'm Aashray, a Computer Science undergraduate specialising in AI and Data Science. I enjoy exploring ideas, experimenting with technology and building practical things that combine engineering and creativity.",
    institution: 'Parul University',
    institutionFull: 'Parul University, Vadodara, Gujarat, India',
    degree: 'B.Tech in Computer Science and Engineering',
    degreeSpecialization: 'Artificial Intelligence & Data Science',
    timeline: '2025 — 2029',
    location: 'Gujarat, India',
    status: 'ONLINE',
    edition: 'EDITION 2025',
    aboutDiscipline: {
      number: '01 / DISCIPLINE',
      title: 'AI & Data Engineering',
      desc: 'Focusing on applied LLM reasoning, computer vision systems, and practical machine learning applications.',
    },
    aboutApproach: {
      number: '02 / APPROACH',
      title: 'Pragmatic Building',
      desc: 'Translating conceptual ideas into clean, functional code with careful attention to real utility and usability.',
    },
    closingNote:
      'Curious about complex systems and always open to collaborating on thoughtful software, data, or AI tools.',
  },

  contact: {
    email: 'biswalaashray@gmail.com',
    mailto: 'mailto:biswalaashray@gmail.com',
    notice: 'Alternate inbox — used to divert traffic from primary email.',
    socials: [
      {
        name: 'GITHUB',
        label: '[Repositories] →',
        url: 'https://github.com/Aash-hasFallen',
      },
      {
        name: 'LINKEDIN',
        label: '[Network] →',
        url: 'https://www.linkedin.com/in/aashray-biswal/',
      },
      {
        name: 'KAGGLE',
        label: '[Notebooks] →',
        url: 'https://www.kaggle.com/aashraybiswal',
      },
    ],
  },

  exploreItems: [
    {
      number: '01',
      title: 'ABOUT',
      subtitle: 'Background, interests & academic focus',
      href: '#about',
    },
    {
      number: '02',
      title: 'EXPERIENCE',
      subtitle: 'Education & academic timeline',
      href: '#experience',
    },
    {
      number: '03',
      title: 'SELECTED PROJECTS',
      subtitle: 'AI agent, CV interaction & data dashboard',
      href: '#projects',
    },
    {
      number: '04',
      title: 'TECHNICAL SKILLS',
      subtitle: 'Languages, tools & data frameworks',
      href: '#skills',
    },
    {
      number: '05',
      title: 'EXPERIMENTS',
      subtitle: 'Prototypes, sandboxes & creative coding',
      href: '#experiments',
    },
    {
      number: '06',
      title: 'CONTACT',
      subtitle: 'Direct inquiries & social profiles',
      href: '#contact',
    },
  ] as ExploreItem[],

  experiences: [
    {
      id: 'parul-university',
      tag: 'EDUCATION // UNDERGRADUATE',
      title: 'PARUL UNIVERSITY',
      subtitle:
        'B.Tech in Computer Science and Engineering (Artificial Intelligence & Data Science)',
      period: '2025 — 2029',
      status: 'In Progress',
      description:
        'Pursuing a foundation in computer science with specialised coursework in machine learning, statistical modeling, data structures, algorithms, and software design principles. Active participation in self-directed engineering projects and technical exploration.',
      highlight: true,
    },
    {
      id: 'hackathons',
      tag: 'INDEPENDENT // COMPETITIVE',
      title: 'HACKATHONS & COMPETITIONS',
      subtitle: 'Rapid prototyping sprints, algorithmic problem solving & team challenges',
      period: 'ONGOING',
      status: 'Ongoing',
      description:
        'Participating in university-level and external development challenges to test ideas under constraints, build quick-turnaround software prototypes, and collaborate with peers across varied stacks.',
      highlight: false,
    },
    {
      id: 'research-oss',
      tag: 'R&D // COLLABORATION',
      title: 'RESEARCH & OPEN SOURCE CONTRIBUTIONS',
      subtitle: 'Reproducing models, experimenting with datasets & code repositories',
      period: 'ONGOING',
      status: 'Ongoing',
      description:
        'Exploring open datasets, testing and reproducing recent machine learning papers, and developing modular open-source helper libraries for data manipulation and real-time computer vision workflows.',
      highlight: false,
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: 'ai-merchant-growth-agent',
      number: '01',
      title: 'AI MERCHANT GROWTH AGENT',
      category: 'AI AGENT',
      badge: 'FEATURED PROJECT',
      shortDescription:
        'An agentic commerce project exploring AI-driven merchant growth through LLM reasoning and deterministic business policies.',
      detailedDescription:
        'An agentic commerce project exploring AI-driven merchant growth through LLM reasoning and deterministic business policies. Combines prompt chaining with rule-based verification to give small and medium online merchants clear, actionable recommendations regarding inventory adjustments, pricing adjustments, and marketing opportunities.',
      tags: ['Python', 'FastAPI', 'LLM Integration', 'Prompt Engineering', 'API Development'],
      repoUrl: 'https://github.com/Aash-hasFallen',
    },
    {
      id: 'gestureflow',
      number: '02',
      title: 'GESTUREFLOW',
      category: 'COMPUTER VISION',
      badge: 'INTERACTIVE SYSTEM',
      shortDescription:
        'A real-time hand-gesture-based desktop interaction and virtual drawing system.',
      detailedDescription:
        'A real-time hand-gesture-based desktop interaction and virtual drawing system developed in Python. Leverages MediaPipe for landmark extraction across hand joints and translates kinematic postures into intuitive cursor movements, drawing canvas strokes, and multimedia shortcut triggers.',
      tags: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'PyAutoGUI'],
      repoUrl: 'https://github.com/Aash-hasFallen',
    },
    {
      id: 'spotify-artist-analytics',
      number: '03',
      title: 'SPOTIFY ARTIST ANALYTICS',
      category: 'DATA ANALYTICS',
      badge: 'DATA VISUALISATION',
      shortDescription:
        'An interactive music analytics dashboard built using R and data visualisation tools.',
      detailedDescription:
        'An interactive music analytics dashboard built using R and modern data visualisation tools. Examines audio features including valence, danceability, and acousticness across track catalogues, giving artists and listeners clear, interactive comparative charts using R Shiny and Plotly.',
      tags: ['R', 'R Shiny', 'ggplot2', 'dplyr', 'Plotly'],
      repoUrl: 'https://github.com/Aash-hasFallen',
    },
  ] as Project[],

  skillCategories: [
    {
      id: 'programming',
      number: '01',
      codeName: 'CODE',
      categoryTag: 'LANGUAGES',
      title: 'PROGRAMMING',
      skills: [
        { name: 'Python', tag: 'PRIMARY', highlight: true },
        { name: 'Java', tag: 'OOP' },
        { name: 'C++', tag: 'ALGORITHMS' },
        { name: 'R', tag: 'STATISTICS' },
        { name: 'Rust', tag: 'SYSTEMS' },
      ],
    },
    {
      id: 'web-backend',
      number: '02',
      codeName: 'WEB',
      categoryTag: 'SERVERS',
      title: 'WEB & BACKEND',
      skills: [
        { name: 'FastAPI', tag: 'ASYNC', highlight: true },
        { name: 'REST APIs', tag: 'SERVICES' },
        { name: 'TypeScript', tag: 'TYPING' },
        { name: 'JavaScript', tag: 'CLIENT' },
        { name: 'HTML5 & CSS3', tag: 'UI' },
      ],
    },
    {
      id: 'ai-data',
      number: '03',
      codeName: 'AI',
      categoryTag: 'MODELS',
      title: 'AI & DATA',
      skills: [
        { name: 'Artificial Intelligence', tag: 'CORE', highlight: true },
        { name: 'Machine Learning', tag: 'MODELS' },
        { name: 'Data Science', tag: 'EDA' },
        { name: 'Data Analytics', tag: 'INSIGHTS' },
        { name: 'SQL', tag: 'QUERIES' },
      ],
    },
    {
      id: 'systems-tools',
      number: '04',
      codeName: 'OPS',
      categoryTag: 'ENVIRONMENT',
      title: 'SYSTEMS & TOOLS',
      skills: [
        { name: 'Linux', tag: 'OS', highlight: true },
        { name: 'Git & GitHub', tag: 'VCS' },
        { name: 'MySQL', tag: 'RDBMS' },
        { name: 'MongoDB', tag: 'NOSQL' },
        { name: 'Bash / Shell', tag: 'CLI' },
      ],
    },
    {
      id: 'cloud-infra',
      number: '05',
      codeName: 'CLOUD',
      categoryTag: '2 PLATFORMS',
      title: 'CLOUD & INFRASTRUCTURE',
      skills: [
        { name: 'Amazon Web Services (AWS)', tag: 'INFRA', highlight: true },
        { name: 'Google Cloud Platform (GCP)', tag: 'GCP' },
        { name: 'Google Cloud Console', tag: 'CONSOLE' },
      ],
    },
  ] as SkillCategory[],

  experiments: [
    {
      id: 'exp-01',
      code: 'EXP_01',
      type: 'SANDBOX',
      title: 'Latent Vector Morphing',
      description:
        'Interactive multidimensional embedding space exploration. Visualising continuous interpolations between high-dimensional vector representations in real time.',
      stack: 'WEBGL / NUMPY',
      badge: 'PROTOTYPE',
    },
    {
      id: 'exp-02',
      code: 'EXP_02',
      type: 'PROTOTYPE',
      title: 'Gesture Synthesis Engine',
      description:
        'Real-time computer-vision coordinate mapping for expressive audio modulation. Translating finger distances into frequency modulation oscillators.',
      stack: 'MEDIAPIPE / AUDIO BUS',
      badge: 'PROTOTYPE',
    },
    {
      id: 'exp-03',
      code: 'EXP_03',
      type: 'RESEARCH',
      title: 'Rule-Engine Prompt Topology',
      description:
        'Visual graph inspector testing how deterministic policy rules prune and guide LLM token evaluations before client responses are synthesised.',
      stack: 'GRAPH VIS / LLM',
      badge: 'RESEARCH',
    },
  ] as ExperimentItem[],
};

