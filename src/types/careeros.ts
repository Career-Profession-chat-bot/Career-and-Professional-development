export type LanguageMode = 'en' | 'te-en' | 'te';
export type LanguageOption = LanguageMode;

export type CareerStage = 'student' | 'fresher' | 'working_pro' | 'career_switcher' | 'experienced';

export interface ProjectSpec {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Flagship';
  problem: string;
  objective: string;
  skillsUsed: string[];
  tools: string[];
  difficulty: string;
  expectedTime: string;
  features: string[];
  deliverables: string[];
  portfolioPresentation: string;
  resumeBulletPossibilities: string[];
  interviewQuestionsExpected: string[];
}

export interface CareerDNA {
  primaryInterests?: string[];
  currentSkills?: string[];
  academicBackground?: string;
  workStylePreference?: string;
  timeAvailableWeeklyHours?: number;
  financialBudgetRange?: string;
  problemSolvingStyle?: string;
  riskTolerance?: string;
  longTermCareerAspiration?: string;
  evaluatedScores?: any;
  interests?: string;
  strengths?: string;
  weaknesses?: string;
  currentEducation?: string;
  experienceLevel?: string;
  learningStyle?: string;
  communicationLevel?: string;
  technicalLevel?: string;
  financialConstraints?: string;
  careerStage?: CareerStage;
  shortTermGoal?: string;
  longTermGoal?: string;
}

export interface UserCareerDNA extends CareerDNA {}

export interface CareerFitAnalysis {
  fitScores: {
    interest: number;
    skill: number;
    education: number;
    workStyle: number;
    learning: number;
    communication: number;
    problemSolving: number;
    lifestyle: number;
    growth: number;
  };
  overallFitPercent: number;
  strongAlignment: string[];
  potentialChallenges: string[];
  unknowns: string[];
  naturalStrengths: string[];
  developmentAreas: string[];
  existingAdvantages: string[];
  missingSkills: string[];
  workStyleCompatibility: string;
  learningCompatibility: string;
  careerMotivation: string;
  tryBeforeCommitExperiment: {
    title: string;
    duration: string;
    description: string;
    dayByDayTasks: Array<{ day: string; task: string }>;
    successIndicator: string;
  };
}

export interface SkillItem {
  id: string;
  name: string;
  level: 'Level 1 — Must Know' | 'Level 2 — Should Know' | 'Level 3 — Advanced' | 'Level 4 — Specialization';
  category: 'Technical' | 'Soft' | 'Tool' | 'Domain';
  description: string;
  proofOfSkill: string; // "How can you prove that you know this?"
  userStatus?: 'not_started' | 'learning' | 'proficient' | 'mastered';
}

export interface SkillGapItem {
  skill: string;
  whyItMatters: string;
  currentLikelyLevel: string;
  targetLevel: string;
  howToLearn: string;
  practiceMethod: string;
  projectToDemonstrate: string;
}

export interface LearningStage {
  stageNumber: number;
  code: string;
  title: string;
  duration: string;
  whatToLearn: string[];
  whyToLearn: string;
  suggestedPractice: string;
  expectedOutcome: string;
  commonMistakes: string[];
  readyCriteria: string;
  isCompleted?: boolean;
}

export interface InterviewQuestion {
  id: string;
  category: 'beginner' | 'technical' | 'behavioral' | 'situational' | 'hr' | 'expert';
  question: string;
  hint: string;
  keyAspectsExpected: string[];
  keyAspects?: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  whatInterviewerWants?: string;
  sampleGoodAnswer?: string;
}

export interface InterviewEvaluation {
  whatWasGood: string[];
  whatWasMissing: string[];
  betterStructure: string;
  suggestedImprovedAnswer: string;
  followUpQuestion: string;
  scoreOutOf10: number;
  coachTips: string;
}

export interface WeekMission {
  week: string;
  goal: string;
  tasks: string[];
  learning: string;
  practice: string;
  output: string;
  milestone: string;
  selfCheck: string;
  isDone?: boolean;
}

export interface CareerUniverse {
  profession: string;
  category: string;
  lastUpdated: string;
  
  // 01 & 02 Identity & Reality
  identity: {
    profession: string;
    category: string;
    domainCategory?: string;
    mainPurpose: string;
    problemSolved: string;
    whereTheyWork: string[];
    hiringIndustries: string[];
    titleVariations: string[];
  };

  reality: {
    whatProfessionalsActuallyDo: string[];
    typicalResponsibilities: string[];
    typicalWorkEnvironment: string;
    typicalWorkdayTimeline: Array<{ time: string; task: string; detail: string }>;
    commonTasks: string[];
    toolsUsed: string[];
    peopleTheyWorkWith: string[];
    beginnerMisunderstandings: string[];
    unromanticizedTruth: string;
  };

  // 03 Reality Check & Myths
  realityCheck: {
    whatLooksAttractive: string[];
    whatIsActuallyDifficult: string[];
    beginnerFrustrations: string[];
    competitionLevel: string;
    learningCurveAnalysis: string;
    workPressureReality: string;
    continuousLearningRequirements: string;
    commonMistakes: string[];
    socialMediaVsReality: string;
  };

  mythsVsReality: Array<{ myth: string; reality: string }>;

  // 04 Pros & Cons
  prosAndCons: {
    pros: string[];
    cons: string[];
    realityMatrix: Array<{ area: string; reality: string; details: string }>;
  };

  // 05 Who Should / Should Not Consider
  audienceFit: {
    whoMayEnjoy: string[];
    whoMayFindChallenging: string[];
    tryBeforeCommit: {
      title: string;
      experimentDescription: string;
      testTasks: string[];
    };
  };

  // 06 Education & Eligibility Routes
  educationAndEligibility: {
    traditionalRoute: { name: string; sequence: string[]; detail: string };
    alternativeRoute: { name: string; sequence: string[]; detail: string };
    careerSwitchRoute: { name: string; sequence: string[]; detail: string };
    advancedRoute: { name: string; sequence: string[]; detail: string };
    requiredEducation: string[];
    preferredEducation: string[];
    optionalEducation: string[];
    certifications: Array<{ name: string; issuer: string; valueScore: string }>;
    licensesOrExams: string[];
    mandatoryVsOptionalClarification: string;
  };

  // 07 & 08 Skills & Gaps
  skills: {
    technicalSkills: SkillItem[];
    softSkills: SkillItem[];
    tools: SkillItem[];
    domainKnowledge: Array<{ topic: string; whyItMatters: string }>;
  };

  defaultSkillGaps: SkillGapItem[];

  // 09 Learning Path (Stages 0 to 8)
  learningRoadmap: LearningStage[];

  // 10 Project to Portfolio
  projects: {
    beginner: ProjectSpec[];
    intermediate: ProjectSpec[];
    advanced: ProjectSpec[];
    flagship: ProjectSpec;
  };

  // 11 Professional Identity
  professionalIdentity: {
    headlineTemplates: string[];
    careerPositioning: string;
    linkedInProfileDirection: {
      aboutSectionTemplate: string;
      featuredRecommendations: string[];
      skillsToHighlight: string[];
    };
    portfolioStructure: {
      recommendedPages: string[];
      proofOfWorkStrategy: string;
    };
    elevatorPitch30s: string;
    networkingIntroduction: string;
    proofOfSkillFormula: string;
  };

  // 12 Resume Intelligence
  resumeIntelligence: {
    recommendedSections: string[];
    professionSpecificKeywords: string[];
    bulletPointFormula: string;
    bulletExamples: Array<{ role: string; before: string; after: string; impactExplanation: string }>;
    atsChecklist: string[];
    antiFabricationNotice: string;
  };

  // 13 Interview Simulator
  interviewSpec: {
    modes: Array<{ id: string; name: string; description: string }>;
    sampleBank: InterviewQuestion[];
  };

  // 14 Job Readiness
  jobReadinessAudit: {
    categories: Array<{ id: string; name: string; weight: number; keyChecklist: string[] }>;
    jobReadyActionPlan: Array<{ priority: 'Critical' | 'High' | 'Medium'; task: string; targetProof: string }>;
  };

  // 15 Career Entry & Job Search
  entryAndJobSearch: {
    entryStrategies: Array<{ channel: string; realismScore: string; approach: string }>;
    whereToSearch: Array<{ platform: string; strategy: string }>;
    recruiterMessagingTemplates: Array<{ scenario: string; subject: string; message: string }>;
    applicationStrategy: string[];
  };

  // 16 Growth Tree & Timeline
  growthMap: {
    timeline: Array<{ stage: string; years: string; focus: string; title: string; responsibilities: string[] }>;
    careerTree: Array<{ branch: string; roles: string[]; requiredAdvancementSkills: string[] }>;
  };

  // 17 Pivot & Alternatives
  pivotAndAlternatives: {
    transferableSkillsTemplate: string[];
    transitionRoadmapSequence: string[];
    alternativeCareers: Array<{
      title: string;
      relationType: 'Similar' | 'Adjacent' | 'Less Technical' | 'More Technical' | 'Higher Responsibility' | 'Creative' | 'Freelance';
      whyRelated: string;
    }>;
    decisionMatrix: Array<{ dimension: string; realityInThisCareer: string }>;
  };

  // 18 Risk & Sustainability
  risksAndSustainability: {
    careerRisks: Array<{ risk: string; whyItMatters: string; earlyWarningSign: string; prevention: string }>;
    sustainabilityCheck: {
      learningWorkloadHours: string;
      burnoutPreventionAdvice: string;
      skillMaintenanceRoutine: string;
    };
  };

  // 19 30 / 60 / 90 Day Missions
  missionsPlan: {
    days30: WeekMission[];
    days60: WeekMission[];
    days90: WeekMission[];
  };

  // 20 Post-Hire Growth & Daily Coach
  postHiringDevelopment: {
    first30DaysAtWork: string[];
    first90DaysAtWork: string[];
    longTermCareerMobility: string[];
    essentialProfessionalSkills: Array<{ skill: string; howItApplies: string }>;
  };

  dailyCoachTemplate: {
    learn: string;
    practice: string;
    build: string;
    document: string;
    reflect: string;
  };

  // Optional convenience aliases
  resumeAdvice?: any;
  interviewBank?: any;
  actionPlans?: any;
  dailyRoutine?: any;
  first30DaysOnJob?: any;
  longTermGrowth?: any;
}
