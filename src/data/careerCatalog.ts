import { CareerUniverse } from '../types/careeros';
import { SOFTWARE_DEVELOPER_PRESET } from './careerPresets';

export interface CareerCatalogItem {
  id: string;
  name: string;
  category: 'Technology' | 'Engineering' | 'Healthcare' | 'Business & Finance' | 'Creative' | 'Education' | 'Law & Public Service' | 'Media & Communication' | 'Travel & Hospitality' | 'Other';
  shortDescription: string;
  presetAvailable: boolean;
  presetData?: CareerUniverse;
  trendingScore: number;
  averageStartingComp: string;
  difficultyRating: string;
}

export const CAREER_CATALOG: CareerCatalogItem[] = [
  // Technology
  {
    id: 'software-developer',
    name: 'Software Developer',
    category: 'Technology',
    shortDescription: 'Build, test, and scale web, mobile, and system applications that power modern industries.',
    presetAvailable: true,
    presetData: SOFTWARE_DEVELOPER_PRESET,
    trendingScore: 98,
    averageStartingComp: '$80,000 / 8-16 LPA',
    difficultyRating: 'Moderate - High'
  },
  {
    id: 'ai-engineer',
    name: 'AI Engineer',
    category: 'Technology',
    shortDescription: 'Architect, fine-tune, and deploy foundation models, RAG pipelines, and agentic systems.',
    presetAvailable: true,
    trendingScore: 100,
    averageStartingComp: '$95,000 / 12-22 LPA',
    difficultyRating: 'High - Very High'
  },
  {
    id: 'data-scientist',
    name: 'Data Scientist',
    category: 'Technology',
    shortDescription: 'Derive predictive signals, build statistical ML models, and guide executive strategy with data.',
    presetAvailable: true,
    trendingScore: 92,
    averageStartingComp: '$85,000 / 9-18 LPA',
    difficultyRating: 'High'
  },
  {
    id: 'data-analyst',
    name: 'Data Analyst',
    category: 'Technology',
    shortDescription: 'Transform messy operational data into high-leverage SQL dashboards and actionable business insights.',
    presetAvailable: true,
    trendingScore: 89,
    averageStartingComp: '$65,000 / 5-10 LPA',
    difficultyRating: 'Moderate'
  },
  {
    id: 'cloud-devops-engineer',
    name: 'Cloud / DevOps Engineer',
    category: 'Technology',
    shortDescription: 'Orchestrate resilient Kubernetes clusters, CI/CD pipelines, cloud security, and automated deployments.',
    presetAvailable: true,
    trendingScore: 94,
    averageStartingComp: '$88,000 / 8-18 LPA',
    difficultyRating: 'High'
  },
  {
    id: 'cybersecurity-analyst',
    name: 'Cybersecurity Analyst',
    category: 'Technology',
    shortDescription: 'Protect digital assets, audit vulnerabilities, conduct penetration testing, and counter cyber threats.',
    presetAvailable: true,
    trendingScore: 95,
    averageStartingComp: '$82,000 / 7-15 LPA',
    difficultyRating: 'High'
  },
  {
    id: 'product-manager',
    name: 'Product Manager',
    category: 'Technology',
    shortDescription: 'Discover customer problems, define product roadmap, and lead cross-functional delivery teams.',
    presetAvailable: true,
    trendingScore: 91,
    averageStartingComp: '$90,000 / 12-24 LPA',
    difficultyRating: 'High'
  },
  {
    id: 'ui-ux-designer',
    name: 'UI/UX Designer',
    category: 'Creative',
    shortDescription: 'Design intuitive, accessible digital interfaces, design systems, and delightful user journeys.',
    presetAvailable: true,
    trendingScore: 90,
    averageStartingComp: '$70,000 / 6-14 LPA',
    difficultyRating: 'Moderate'
  },

  // Engineering
  {
    id: 'civil-engineer',
    name: 'Civil Engineer',
    category: 'Engineering',
    shortDescription: 'Plan, design, and supervise infrastructure: bridges, roads, dams, skyscrapers, and clean water systems.',
    presetAvailable: true,
    trendingScore: 84,
    averageStartingComp: '$68,000 / 4-9 LPA',
    difficultyRating: 'High'
  },
  {
    id: 'mechanical-engineer',
    name: 'Mechanical Engineer',
    category: 'Engineering',
    shortDescription: 'Design, simulate, and manufacture thermal and mechanical devices from automotive engines to robotics.',
    presetAvailable: true,
    trendingScore: 82,
    averageStartingComp: '$72,000 / 4.5-10 LPA',
    difficultyRating: 'High'
  },
  {
    id: 'electrical-engineer',
    name: 'Electrical Engineer',
    category: 'Engineering',
    shortDescription: 'Design power grids, renewable energy systems, circuit boards, and high-voltage transmission networks.',
    presetAvailable: true,
    trendingScore: 86,
    averageStartingComp: '$75,000 / 5-11 LPA',
    difficultyRating: 'High'
  },
  {
    id: 'aerospace-engineer',
    name: 'Aerospace Engineer',
    category: 'Engineering',
    shortDescription: 'Design propulsion systems, satellite constellations, aerodynamics, and spacecraft avionics.',
    presetAvailable: true,
    trendingScore: 88,
    averageStartingComp: '$85,000 / 7-16 LPA',
    difficultyRating: 'Very High'
  },

  // Healthcare
  {
    id: 'doctor-physician',
    name: 'Doctor / Physician',
    category: 'Healthcare',
    shortDescription: 'Diagnose illnesses, manage patient health, prescribe treatments, and deliver clinical care.',
    presetAvailable: true,
    trendingScore: 96,
    averageStartingComp: '$180,000+ (Residency) / 8-18 LPA',
    difficultyRating: 'Extreme'
  },
  {
    id: 'nurse-practitioner',
    name: 'Nurse',
    category: 'Healthcare',
    shortDescription: 'Provide essential bedside patient care, monitor vitals, administer medications, and coordinate hospital teams.',
    presetAvailable: true,
    trendingScore: 93,
    averageStartingComp: '$75,000 / 3.5-7 LPA',
    difficultyRating: 'High'
  },
  {
    id: 'pharmacist',
    name: 'Pharmacist',
    category: 'Healthcare',
    shortDescription: 'Dispense medications, review biochemical interactions, and advise patients and doctors on pharmacotherapy.',
    presetAvailable: true,
    trendingScore: 80,
    averageStartingComp: '$110,000 / 4-8 LPA',
    difficultyRating: 'High'
  },
  {
    id: 'physiotherapist',
    name: 'Physiotherapist',
    category: 'Healthcare',
    shortDescription: 'Rehabilitate musculoskeletal injuries, improve biomechanical mobility, and manage chronic physical pain.',
    presetAvailable: true,
    trendingScore: 83,
    averageStartingComp: '$65,000 / 3.5-7 LPA',
    difficultyRating: 'Moderate - High'
  },

  // Business & Finance
  {
    id: 'chartered-accountant',
    name: 'Chartered Accountant (CA)',
    category: 'Business & Finance',
    shortDescription: 'Audit corporate finances, tax compliance, forensic accounting, and strategic financial governance.',
    presetAvailable: true,
    trendingScore: 94,
    averageStartingComp: '$75,000 / 8-16 LPA',
    difficultyRating: 'Extreme'
  },
  {
    id: 'financial-analyst',
    name: 'Financial Analyst',
    category: 'Business & Finance',
    shortDescription: 'Build DCF valuation models, forecast company earnings, evaluate mergers, and guide capital investment.',
    presetAvailable: true,
    trendingScore: 88,
    averageStartingComp: '$72,000 / 6-12 LPA',
    difficultyRating: 'High'
  },
  {
    id: 'investment-banker',
    name: 'Investment Banker',
    category: 'Business & Finance',
    shortDescription: 'Facilitate mega M&A transactions, IPOs, debt issuances, and corporate restructuring under high pressure.',
    presetAvailable: true,
    trendingScore: 90,
    averageStartingComp: '$120,000+ / 18-35 LPA',
    difficultyRating: 'Extreme'
  },
  {
    id: 'entrepreneur',
    name: 'Entrepreneur / Startup Founder',
    category: 'Business & Finance',
    shortDescription: 'Find product-market fit from zero, assemble teams, raise venture capital, and build enduring enterprises.',
    presetAvailable: true,
    trendingScore: 92,
    averageStartingComp: 'Variable (Equity-driven)',
    difficultyRating: 'Extreme'
  },
  {
    id: 'management-consultant',
    name: 'Management Consultant',
    category: 'Business & Finance',
    shortDescription: 'Diagnose strategic inefficiencies for Fortune 500 executives and orchestrate digital transformations.',
    presetAvailable: true,
    trendingScore: 89,
    averageStartingComp: '$90,000 / 12-22 LPA',
    difficultyRating: 'High'
  },

  // Creative
  {
    id: 'graphic-designer',
    name: 'Graphic Designer',
    category: 'Creative',
    shortDescription: 'Craft visual branding, typography hierarchies, advertising visuals, and packaging designs.',
    presetAvailable: true,
    trendingScore: 78,
    averageStartingComp: '$50,000 / 3.5-7 LPA',
    difficultyRating: 'Moderate'
  },
  {
    id: 'video-editor',
    name: 'Video Editor & Motion Designer',
    category: 'Creative',
    shortDescription: 'Cut narrative pacing, color grade footage, design motion graphics, and produce viral video content.',
    presetAvailable: true,
    trendingScore: 87,
    averageStartingComp: '$55,000 / 4-9 LPA',
    difficultyRating: 'Moderate'
  },
  {
    id: 'game-designer',
    name: 'Game Designer',
    category: 'Creative',
    shortDescription: 'Architect game mechanics, level balance, player economies, and interactive storytelling.',
    presetAvailable: true,
    trendingScore: 85,
    averageStartingComp: '$68,000 / 5-12 LPA',
    difficultyRating: 'High'
  },

  // Education
  {
    id: 'teacher-educator',
    name: 'Teacher / Educator',
    category: 'Education',
    shortDescription: 'Inspire and instruct students, design pedagogic curriculums, and foster lifelong learning habits.',
    presetAvailable: true,
    trendingScore: 81,
    averageStartingComp: '$48,000 / 3-6.5 LPA',
    difficultyRating: 'Moderate'
  },
  {
    id: 'professor',
    name: 'Professor / Academic Researcher',
    category: 'Education',
    shortDescription: 'Conduct cutting-edge peer-reviewed research, teach university courses, and mentor doctoral candidates.',
    presetAvailable: true,
    trendingScore: 82,
    averageStartingComp: '$75,000 / 8-18 LPA',
    difficultyRating: 'Very High'
  },

  // Law & Public Service
  {
    id: 'lawyer-advocate',
    name: 'Lawyer / Advocate',
    category: 'Law & Public Service',
    shortDescription: 'Litigate courtroom disputes, draft binding corporate contracts, and advocate for legal rights.',
    presetAvailable: true,
    trendingScore: 88,
    averageStartingComp: '$70,000 / 5-14 LPA',
    difficultyRating: 'Very High'
  },
  {
    id: 'civil-services-ias',
    name: 'Civil Services / Government Officer',
    category: 'Law & Public Service',
    shortDescription: 'Administer public policy, manage district governance, enforce laws, and drive public development.',
    presetAvailable: true,
    trendingScore: 97,
    averageStartingComp: 'Structured Public Scale + Benefits',
    difficultyRating: 'Extreme'
  },

  // Media & Communication
  {
    id: 'digital-marketer',
    name: 'Digital Marketer',
    category: 'Media & Communication',
    shortDescription: 'Scale customer acquisition through performance ads, SEO, conversion funnels, and retention marketing.',
    presetAvailable: true,
    trendingScore: 91,
    averageStartingComp: '$58,000 / 4.5-9 LPA',
    difficultyRating: 'Moderate'
  },
  {
    id: 'content-writer-copywriter',
    name: 'Copywriter & Content Strategist',
    category: 'Media & Communication',
    shortDescription: 'Write high-converting sales copy, persuasive essays, product narratives, and brand storytelling.',
    presetAvailable: true,
    trendingScore: 80,
    averageStartingComp: '$52,000 / 3.5-7 LPA',
    difficultyRating: 'Moderate'
  },

  // Travel & Hospitality
  {
    id: 'airline-pilot',
    name: 'Airline Pilot',
    category: 'Travel & Hospitality',
    shortDescription: 'Navigate commercial aircraft safely across global skies through strict meteorological and flight protocols.',
    presetAvailable: true,
    trendingScore: 89,
    averageStartingComp: '$90,000+ / 15-30 LPA',
    difficultyRating: 'Very High'
  },
  {
    id: 'hotel-manager',
    name: 'Hotel & Hospitality Manager',
    category: 'Travel & Hospitality',
    shortDescription: 'Oversee luxury guest operations, culinary standards, staff logistics, and revenue optimization.',
    presetAvailable: true,
    trendingScore: 79,
    averageStartingComp: '$55,000 / 4-9 LPA',
    difficultyRating: 'Moderate'
  }
];

export const CATEGORIES = [
  'All Categories',
  'Technology',
  'Engineering',
  'Healthcare',
  'Business & Finance',
  'Creative',
  'Education',
  'Law & Public Service',
  'Media & Communication',
  'Travel & Hospitality'
] as const;
