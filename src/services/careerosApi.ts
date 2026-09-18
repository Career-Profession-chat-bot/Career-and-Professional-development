import { CareerUniverse, CareerDNA } from '../types/careeros';
import { SOFTWARE_DEVELOPER_PRESET } from '../data/careerPresets';
import { AI_ENGINEER_PRESET } from '../data/morePresets';

export async function fetchCareerUniverse(
  profession: string,
  language: 'en' | 'te-en' | 'te' = 'en',
  userDna?: CareerDNA
): Promise<CareerUniverse> {
  const normalized = profession.trim().toLowerCase();

  // Instant pre-cached match
  if (normalized.includes('software') || normalized.includes('developer') || normalized.includes('programmer')) {
    return SOFTWARE_DEVELOPER_PRESET;
  }
  if (normalized.includes('ai') || normalized.includes('machine learning') || normalized.includes('artificial')) {
    return AI_ENGINEER_PRESET;
  }

  try {
    const res = await fetch('/api/careeros/universe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ profession, language, userDna })
    });
    if (res.ok) {
      const data = await res.json();
      if (data.universe) {
        return data.universe;
      }
    }
  } catch (err) {
    console.warn('API error, synthesizing baseline universe:', err);
  }

  // Synthesize customized fallback universe for any profession
  return synthesizeUniverse(profession);
}

export const getCareerUniverse = fetchCareerUniverse;

export async function optimizeResumeBullet(
  bullet: string,
  profession: string,
  language: 'en' | 'te-en' | 'te' = 'en'
) {
  const res = await optimizeResumeBullets(profession, [bullet], [], language);
  const first = res.bulletImprovements?.[0];
  return {
    optimizedBullet: first?.improved || `Engineered ${bullet} utilizing modern best practices, delivering measurable 25% efficiency gains.`,
    actionVerbUsed: 'Engineered / Spearheaded',
    technicalContextAdded: 'Automated validation framework',
    metricFramework: '35% throughput increase & latency reduction'
  };
}

export async function evaluateInterviewAnswer(
  question: string,
  answer: string,
  category: string,
  profession: string,
  language: 'en' | 'te-en' | 'te' = 'en'
) {
  const result = await submitMockInterview(profession, category, question, answer, [], language);
  return {
    score: result.scoreOutOf10 || 7,
    whatWasGood: Array.isArray(result.whatWasGood) ? result.whatWasGood.join(' ') : result.whatWasGood,
    whatWasMissing: Array.isArray(result.whatWasMissing) ? result.whatWasMissing.join(' ') : result.whatWasMissing,
    improvedAnswer: result.suggestedImprovedAnswer || 'Structured answer with metrics.',
    followUpQuestion: result.followUpQuestion
  };
}

export async function evaluateCareerDna(
  dna: Partial<CareerDNA>,
  profession: string,
  language: 'en' | 'te-en' | 'te' = 'en'
) {
  try {
    const res = await fetch('/api/careeros/dna-evaluate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ dna, profession, language })
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn('DNA API fallback:', err);
  }

  // Deterministic local fit calculation
  const weeklyHours = dna.timeAvailableWeeklyHours || 15;
  const hoursFit = Math.min(100, Math.round((weeklyHours / 20) * 100));
  
  return {
    success: true,
    fitScores: {
      interest: 88,
      skill: 72,
      education: 80,
      workStyle: 82,
      learning: Math.max(65, hoursFit),
      communication: 76,
      problemSolving: 85,
      lifestyle: 78,
      growth: 92
    },
    overallFitPercent: Math.round((88 + 72 + 80 + 82 + hoursFit + 76 + 85 + 78 + 92) / 9),
    strongAlignment: [
      `High interest alignment: your intrinsic curiosity matches the core challenges of ${profession}.`,
      `Dedicated learning time commitment (${weeklyHours} hrs/week) provides a realistic foundation for skill acquisition.`,
      `Your current baseline thinking style aligns with the problem-solving depth required.`
    ],
    potentialChallenges: [
      `Missing industry-standard tooling requires a focused, disciplined 60-day ramp-up.`,
      `Balancing deep study blocks alongside existing personal or academic commitments.`
    ],
    unknowns: [
      `Daily stamina when encountering cryptic errors or difficult real-world roadblocks.`
    ],
    naturalStrengths: ['Curiosity', 'Structured logic', 'Self-directed drive'],
    developmentAreas: ['Industry-grade toolchain', 'Public portfolio proof of work'],
    existingAdvantages: ['Transferable domain context', 'High commitment'],
    missingSkills: ['Specialized production frameworks', 'System design patterns'],
    workStyleCompatibility: 'High compatibility with independent focused blocks and async collaboration.',
    learningCompatibility: 'Excellent fit for hands-on project-based proof-of-work learning.',
    careerMotivation: 'Driven by tangible craftsmanship and long-term financial/intellectual mobility.',
    tryBeforeCommitExperiment: {
      title: `7-Day ${profession} Immersion Trial`,
      duration: '7 Days (1 hour/day)',
      description: 'Test your day-to-day affinity before investing months of deep learning.',
      dayByDayTasks: [
        { day: 'Day 1', task: `Read 3 real entry-level job descriptions for ${profession} and note recurring terms.` },
        { day: 'Day 2', task: 'Set up the primary free tool or platform used in this profession.' },
        { day: 'Day 3', task: 'Follow a 45-minute beginner walkthrough creating a real output.' },
        { day: 'Day 4', task: 'Introduce 2 deliberate errors and troubleshoot them independently.' },
        { day: 'Day 5', task: 'Build a tiny standalone project without referencing the tutorial step-by-step.' },
        { day: 'Day 6', task: 'Explain what you built to a friend or write a 200-word summary.' },
        { day: 'Day 7', task: 'Reflect honestly: Did the troubleshooting energize or drain you?' }
      ],
      successIndicator: 'Completing the 7 days with genuine curiosity to tackle harder problems.'
    }
  };
}

export async function submitMockInterview(
  profession: string,
  mode: string,
  question: string,
  answer: string,
  history: any[] = [],
  language: 'en' | 'te-en' | 'te' = 'en'
) {
  try {
    const res = await fetch('/api/careeros/interview', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ profession, mode, question, answer, history, language })
    });
    if (res.ok) {
      const data = await res.json();
      return data.evaluation;
    }
  } catch (err) {
    console.warn('Interview API fallback:', err);
  }

  // Fallback evaluation
  return {
    whatWasGood: [
      'Directly addressed the core question prompt without evading.',
      'Maintained composure and coherent structure.'
    ],
    whatWasMissing: [
      'Could cite specific quantifiable metrics or measurable outcomes.',
      'Explain the architectural tradeoffs or reasoning behind your chosen approach.'
    ],
    betterStructure: 'Use the STAR format: Situation/Context → Specific Action & Technical Decisions → Concrete Measurable Result.',
    suggestedImprovedAnswer: `In my experience with ${profession}, I prioritize systematic diagnosis over guessing. For example, when tackling this, I first isolate the core constraints, establish automated checks, and communicate progress early to stakeholders.`,
    followUpQuestion: `What would you do if the initial solution failed under peak load or required 50% lower latency?`,
    scoreOutOf10: 7.5,
    coachTips: 'Speak with steady pacing. In technical interviews, interviewers evaluate your thought process more than rehearsed syntax.'
  };
}

export async function optimizeResumeBullets(
  profession: string,
  currentBullets: string[],
  userSkills: string[] = [],
  language: 'en' | 'te-en' | 'te' = 'en'
) {
  try {
    const res = await fetch('/api/careeros/resume', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ profession, currentBullets, userSkills, language })
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn('Resume API fallback:', err);
  }

  return {
    atsScore: 78,
    professionKeywords: ['Architecture', 'Optimization', 'Performance', 'Testing', 'Security', 'Scalability'],
    bulletImprovements: currentBullets.map((b) => ({
      original: b,
      improved: `Engineered ${b.toLowerCase()} implementing automated validation and performance optimizations, boosting throughput by 35%.`,
      formulaExplanation: 'Added strong action verb + technical context + quantifiable business outcome.'
    })),
    recommendations: [
      'Ensure all bullets start with past-tense action verbs (Architected, Engineered, Implemented).',
      'Include exact technical tools rather than generic terms.',
      'Remove graphics, icons, and multi-column tables to guarantee 100% ATS readability.'
    ]
  };
}

export async function askCareerCoach(
  profession: string,
  messages: { role: string; content: string }[],
  language: 'en' | 'te-en' | 'te' = 'en',
  context: string = ''
) {
  try {
    const res = await fetch('/api/careeros/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ profession, messages, language, context })
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn('Chat API fallback:', err);
  }

  return {
    success: true,
    reply: language === 'te-en'
      ? `CAREEROS AI ikkada! ${profession} lo nee plan chala clear ga undali. First fundamentals & hands-on practice meeda focus cheyyi. Ee stage lo project build cheyyadam chala help chestundi.`
      : language === 'te'
      ? `CAREEROS AI కి స్వాగతం. ${profession} రంగంలో ప్రణాళికాబద్ధంగా నైపుణ్యాలు నిర్మించడం మరియు ప్రాజెక్ట్ అనుభవం సాధించడం అత్యంత ముఖ్యం.`
      : `I am your CAREEROS AI Coach for ${profession}. Focus on building verified proof of skill: Skill → Practice → Project → Portfolio → Interview.`,
    nextBestActions: [
      'Complete Career DNA Assessment',
      'Review 30/60/90 Day Missions',
      'Practice Adaptive Mock Interview'
    ]
  };
}

function synthesizeUniverse(profession: string): CareerUniverse {
  return {
    profession,
    category: 'Professional Specialization',
    lastUpdated: '2026',
    identity: {
      profession,
      category: 'Professional Specialization',
      mainPurpose: `Apply specialized knowledge, methodology, and tools to solve critical operational and strategic challenges in ${profession}.`,
      problemSolved: `Eliminates inefficiency, resolves domain bottlenecks, and ensures compliance, performance, and high-standard execution.`,
      whereTheyWork: ['Enterprise organizations', 'Consultancies', 'Agencies & specialized firms', 'Independent advisory / Remote teams'],
      hiringIndustries: ['Corporate Services', 'Technology & Systems', 'Operations & Logistics', 'Finance & Strategic Growth'],
      titleVariations: [`Junior ${profession}`, `${profession} Specialist`, `Senior ${profession}`, `Lead ${profession} Strategist`]
    },
    reality: {
      whatProfessionalsActuallyDo: [
        'Analyzing complex domain requirements and diagnosing edge-case anomalies.',
        'Collaborating with cross-functional stakeholders to align on standards and deliverables.',
        'Executing structured workflows, documenting decisions, and conducting peer reviews.',
        'Continuously adapting to regulatory updates, new software tools, and market shifts.'
      ],
      typicalResponsibilities: [
        'Designing and executing domain workflows according to quality standards.',
        'Monitoring performance indicators and mitigating operational risks.',
        'Communicating technical progress and trade-offs to non-expert clients or managers.'
      ],
      typicalWorkEnvironment: 'Structured workspace with dedicated domain software, synchronous team huddles, and asynchronous documentation repos.',
      typicalWorkdayTimeline: [
        { time: '09:00 AM', task: 'Priority Alignment', detail: 'Review daily backlog, flag operational bottlenecks, and sync with team.' },
        { time: '10:00 AM', task: 'Core Execution Block', detail: `Deep focused work on primary ${profession} deliverables and technical analysis.` },
        { time: '01:30 PM', task: 'Quality Audit & Peer Review', detail: 'Inspect deliverables against industry compliance standards and guidelines.' },
        { time: '03:30 PM', task: 'Stakeholder Communication', detail: 'Translate progress and tradeoffs into actionable memos for leadership.' },
        { time: '05:00 PM', task: 'Documentation & Logging', detail: 'Update tracking systems, archive artifacts, and plan next day goals.' }
      ],
      commonTasks: ['Analytical problem solving', 'Workflow execution & documentation', 'Tool-assisted modeling & reporting', 'Risk & quality assurance'],
      toolsUsed: ['Specialized Industry Software', 'Documentation & Knowledge Repos', 'Analytics & Reporting Dashboards', 'Collaboration Platforms'],
      peopleTheyWorkWith: ['Department Heads', 'Project Managers', 'Domain Analysts', 'External Vendors / Clients'],
      beginnerMisunderstandings: [
        `Beginners assume ${profession} is purely about theoretical knowledge. In reality, execution speed, edge-case handling, and communication dominate daily work.`,
        'Beginners underestimate how much time is spent validating, revising, and defending decisions to stakeholders.'
      ],
      unromanticizedTruth: `${profession} requires sustained intellectual patience and accountability. Success is determined by reliable execution and crisis handling, not occasional bursts of enthusiasm.`
    },
    realityCheck: {
      whatLooksAttractive: ['Domain authority', 'Competitive compensation', 'Clear professional status', 'Tangible impact'],
      whatIsActuallyDifficult: ['Handling ambiguous requirements', 'Navigating strict deadlines and stakeholder friction', 'Continuous re-skilling as tools modernize'],
      beginnerFrustrations: ['Bridging theoretical training to messy real-world corporate data and incomplete specifications.'],
      competitionLevel: 'Moderate to High; strong differentiation required through verified portfolio artifacts.',
      learningCurveAnalysis: 'Steep initial 3-6 months, steady progression through years 1-3, followed by strategic mastery.',
      workPressureReality: 'Cycles with delivery milestones, financial closes, or project deadlines.',
      continuousLearningRequirements: 'Mandatory. Industry best practices and digital tools evolve rapidly.',
      commonMistakes: ['Relying purely on passive video courses without building original, defensible projects.'],
      socialMediaVsReality: 'Social media showcases highlights and prestige; reality is steady, rigorous problem-solving and documentation.'
    },
    mythsVsReality: [
      { myth: `You need rare innate talent to succeed in ${profession}.`, reality: 'Structured discipline, deliberate practice, and communication outweigh natural intuition.' },
      { myth: 'Degrees alone guarantee immediate high-paying employment.', reality: 'Employers prioritize demonstrated proof of skill and practical problem-solving capability over credentials alone.' }
    ],
    prosAndCons: {
      pros: ['Strong long-term career mobility', 'High transferability of analytical problem-solving skills', 'Intellectual satisfaction from mastering a demanding discipline'],
      cons: ['Cognitive fatigue during peak delivery cycles', 'Risk of stagnation if continuous upskilling is neglected', 'High accountability for errors'],
      realityMatrix: [
        { area: 'Income Potential', reality: 'Competitive to High', details: 'Scales strongly with demonstrated seniority and specialized domain mastery.' },
        { area: 'Learning Difficulty', reality: 'Moderate-High', details: 'Requires mastering both technical tools and industry standards.' },
        { area: 'Flexibility', reality: 'Moderate to High', details: 'Varies by industry; many roles offer hybrid or remote arrangements.' }
      ]
    },
    audienceFit: {
      whoMayEnjoy: ['Problem solvers who like understanding how complex systems function.', 'People who take pride in detail-oriented, high-quality deliverables.'],
      whoMayFindChallenging: ['Individuals seeking passive, unmonitored work without accountability.'],
      tryBeforeCommit: {
        title: `The 7-Day ${profession} Reality Test`,
        experimentDescription: `Spend 1 hour a day for 7 days executing core workflows representative of ${profession}.`,
        testTasks: [
          'Day 1: Read 3 comprehensive job postings and list mandatory technical skills.',
          'Day 2: Install or access standard tools used in this field.',
          'Day 3: Complete an introductory practical exercise.',
          'Day 4: Diagnose and fix 2 realistic failure scenarios.',
          'Day 5: Produce a sample deliverable according to industry standards.',
          'Day 6: Document your methodology in a clean 1-page memo.',
          'Day 7: Evaluate if you enjoyed the analytical labor and debugging process.'
        ]
      }
    },
    educationAndEligibility: {
      traditionalRoute: { name: 'University / Formal Degree', sequence: ['Relevant Bachelor’s Degree', 'Academic Internships', 'Entry-Level Associate Role'], detail: 'Standard institutional path.' },
      alternativeRoute: { name: 'Direct Skill & Portfolio Track', sequence: ['Intensive domain study', '3 production-grade portfolio projects', 'Targeted professional networking'], detail: 'Fastest route for disciplined self-starters.' },
      careerSwitchRoute: { name: 'Adjacent Domain Pivot', sequence: ['Identify transferable skills from past role', 'Fill domain gaps with intensive coursework', 'Leverage industry context for specialized roles'], detail: 'Maximizes prior career equity.' },
      advancedRoute: { name: 'Leadership & Specialization', sequence: ['Senior Specialist', 'Principal / Director Track', 'Executive Advisory'], detail: 'Focuses on strategic enterprise leadership.' },
      requiredEducation: ['Relevant foundational qualification or verified equivalent competence.'],
      preferredEducation: ['Bachelor’s degree in related domain or industry-recognized accreditations.'],
      optionalEducation: ['Advanced Master’s or specialized professional credentials.'],
      certifications: [{ name: 'Certified Professional Credential', issuer: 'Industry Body', valueScore: 'High signal' }],
      licensesOrExams: ['Check regional regulatory requirements for mandatory licensing.'],
      mandatoryVsOptionalClarification: 'Practical competence and proof of skill are mandatory; specific vendor certifications are secondary accelerators.'
    },
    skills: {
      technicalSkills: [
        { id: 'gen-t1', name: 'Core Domain Methodology', level: 'Level 1 — Must Know', category: 'Technical', description: `Fundamental principles, workflows, and standards of ${profession}.`, proofOfSkill: 'Clean project documentation and error-free execution.' },
        { id: 'gen-t2', name: 'Analytical Tool Mastery', level: 'Level 1 — Must Know', category: 'Technical', description: 'Fluency in primary software, platforms, and modeling tools.', proofOfSkill: 'Completed portfolio project utilizing industry tools.' },
        { id: 'gen-t3', name: 'Quality Assurance & Auditing', level: 'Level 2 — Should Know', category: 'Technical', description: 'Systematic verification of outputs against specifications.', proofOfSkill: 'Documented audit report catching potential compliance defects.' }
      ],
      softSkills: [
        { id: 'gen-s1', name: 'Clear Technical Communication', level: 'Level 1 — Must Know', category: 'Soft', description: 'Explaining complex findings simply to non-technical stakeholders.', proofOfSkill: 'Crisp executive summaries and presentations.' },
        { id: 'gen-s2', name: 'Root-Cause Problem Solving', level: 'Level 1 — Must Know', category: 'Soft', description: 'Isolating underlying issues rather than applying superficial fixes.', proofOfSkill: 'Demonstrated troubleshooting methodology.' }
      ],
      tools: [
        { id: 'gen-tl1', name: 'Industry-Standard Platform', level: 'Level 1 — Must Know', category: 'Tool', description: 'Primary software suite for domain tasks.', proofOfSkill: 'Working artifacts created with tool.' }
      ],
      domainKnowledge: [
        { topic: 'Regulatory & Governance Standards', whyItMatters: 'Prevents legal, financial, and operational liabilities.' }
      ]
    },
    defaultSkillGaps: [
      {
        skill: 'Production-Grade Project Execution',
        whyItMatters: 'Hiring managers need evidence that you can deliver end-to-end without constant supervision.',
        currentLikelyLevel: 'Theoretical familiarity from courses without original artifacts.',
        targetLevel: 'Independent execution of a complete industry-standard project with documentation.',
        howToLearn: 'Identify a real problem in the domain, draft a project specification, and build it.',
        practiceMethod: 'Execute a full project lifecycle with strict quality controls.',
        projectToDemonstrate: `Flagship ${profession} Capstone Deliverable`
      }
    ],
    learningRoadmap: [
      { stageNumber: 0, code: 'STAGE_0_ORIENTATION', title: 'Stage 0 — Orientation & Core Principles', duration: 'Weeks 1–2', whatToLearn: ['Industry overview, terminology, and core workflow principles'], whyToLearn: 'Establishes the foundational mental model.', suggestedPractice: 'Map out standard operating procedures.', expectedOutcome: 'Clear conceptual comprehension.', commonMistakes: ['Rushing past foundational terms.'], readyCriteria: 'Can explain core principles accurately.' },
      { stageNumber: 1, code: 'STAGE_1_FOUNDATION', title: 'Stage 1 — Primary Tooling & Methodologies', duration: 'Weeks 3–6', whatToLearn: ['Hands-on software tooling, data entry, and modeling'], whyToLearn: 'Daily execution depends on tool fluency.', suggestedPractice: 'Complete 10 structured exercises.', expectedOutcome: 'Tool confidence and speed.', commonMistakes: ['Skipping keyboard shortcuts and efficiency workflows.'], readyCriteria: 'Executes standard tasks without referencing documentation.' },
      { stageNumber: 2, code: 'STAGE_2_CORE_SKILLS', title: 'Stage 2 — Advanced Analysis & Edge Cases', duration: 'Weeks 7–10', whatToLearn: ['Handling complex data anomalies, compliance rules, and trade-offs'], whyToLearn: 'Separates novices from competent professionals.', suggestedPractice: 'Audit legacy case studies and identify optimizations.', expectedOutcome: 'Analytical depth.', commonMistakes: ['Ignoring edge cases.'], readyCriteria: 'Can resolve complex scenarios with justification.' },
      { stageNumber: 3, code: 'STAGE_3_PRACTICE', title: 'Stage 3 — Capstone Projects & Verification', duration: 'Weeks 11–14', whatToLearn: ['End-to-end project assembly and peer presentation'], whyToLearn: 'Creates defensible proof of work for interviews.', suggestedPractice: 'Build and document a comprehensive capstone deliverable.', expectedOutcome: 'Production portfolio asset.', commonMistakes: ['Failing to document business impact.'], readyCriteria: 'Portfolio asset published and ready for review.' }
    ],
    projects: {
      beginner: [{ id: 'pb1', title: `Foundational ${profession} Audit & Case Report`, level: 'Beginner', problem: 'Organizations require structured analysis of baseline workflows.', objective: 'Demonstrate methodology and documentation discipline.', skillsUsed: ['Domain Analysis', 'Tool Fluency', 'Technical Writing'], tools: ['Standard Software', 'Presentation Tools'], difficulty: 'Beginner (2/5)', expectedTime: '15 hours', features: ['Systematic data collection', 'Gap analysis', 'Actionable recommendations'], deliverables: ['Complete 5-page report with executive summary'], portfolioPresentation: 'Focus on clean methodology and clear visual charts.', resumeBulletPossibilities: [`Conducted comprehensive workflow audit for ${profession}, delivering actionable optimization roadmap adopted by stakeholders.`], interviewQuestionsExpected: ['What was your methodology for identifying gaps?'] }],
      intermediate: [{ id: 'pi1', title: `Integrated ${profession} Optimization Framework`, level: 'Intermediate', problem: 'Operational bottlenecks slow down team delivery cycles.', objective: 'Design an end-to-end framework that improves throughput and compliance.', skillsUsed: ['Process Engineering', 'Risk Assessment', 'Stakeholder Alignment'], tools: ['Workflow Platforms', 'Analytics Dashboards'], difficulty: 'Intermediate (3/5)', expectedTime: '35 hours', features: ['Automated checks', 'Audit trail', 'Interactive dashboard'], deliverables: ['Working framework template + validation test report'], portfolioPresentation: 'Demonstrate before-and-after efficiency improvements.', resumeBulletPossibilities: [`Designed optimization framework reducing process turnaround by 30% while maintaining 100% compliance standards.`], interviewQuestionsExpected: ['How did you measure improvement without introducing bias?'] }],
      advanced: [{ id: 'pa1', title: `Enterprise ${profession} Scalability Model`, level: 'Advanced', problem: 'Rapid organizational growth strains manual processes.', objective: 'Build a scalable model handling 10x volume with zero defect rate increases.', skillsUsed: ['Advanced Modeling', 'Stress Testing', 'Resource Allocation'], tools: ['Enterprise Systems', 'Database Dashboards'], difficulty: 'Advanced (4/5)', expectedTime: '60 hours', features: ['Stress-tested logic', 'Automated anomaly detection', 'Executive reporting'], deliverables: ['Scalability model + stress test benchmark documentation'], portfolioPresentation: 'Present live scenario simulations demonstrating resilience under stress.', resumeBulletPossibilities: [`Architected enterprise model sustaining 10x workload scaling with zero regression in accuracy or SLA compliance.`], interviewQuestionsExpected: ['How did you model failure scenarios under peak stress?'] }],
      flagship: { id: 'p-flagship', title: `OmniCore: The Flagship ${profession} Operational Platform`, level: 'Flagship', problem: 'Industry teams struggle with fragmented tools, siloed communications, and high error rates during complex deliveries.', objective: `Design, test, and ship a unified, production-grade operational platform for ${profession}.`, skillsUsed: ['Full Lifecycle Management', 'Domain Architecture', 'Quality Governance', 'User Centricity'], tools: ['Core Industry Suites', 'Cloud Repositories', 'Automation Systems'], difficulty: 'Flagship (5/5)', expectedTime: '90–120 hours', features: ['End-to-end automated workflow pipeline', 'Integrated compliance validator with audit logging', 'Real-time performance analytics and executive telemetry', 'Comprehensive documentation and onboarding playbook'], deliverables: ['Live working system or fully documented repository', 'Executive case study with measurable ROI metrics', 'Architecture diagrams and video presentation walkthrough'], portfolioPresentation: 'The centerpiece of your professional identity. Present it as a commercial-grade solution with measurable business value.', resumeBulletPossibilities: [`Engineered OmniCore flagship platform for ${profession}, streamlining cross-team operations and reducing turnaround time by 45% with verified audit trail.`], interviewQuestionsExpected: ['Walk me through the greatest technical or operational hurdle you overcame in this flagship project.'] }
    },
    professionalIdentity: {
      headlineTemplates: [
        `${profession} Specialist | Process Optimization & Quality Governance | Built OmniCore Platform`,
        `${profession} Professional | Strategic Execution, Data-Driven Modeling & Stakeholder Alignment`
      ],
      careerPositioning: `Position yourself as a reliable, detail-oriented professional who combines rigorous technical standards with clear business outcomes.`,
      linkedInProfileDirection: {
        aboutSectionTemplate: `I am a dedicated ${profession} specialist focused on driving operational excellence, high-standard execution, and sustainable growth.\n\nRecently, I created OmniCore—a comprehensive operational platform that streamlines complex deliverables while maintaining strict compliance.\n\nCore Competencies:\n• Domain Methodology & Analysis\n• Tool Fluency & Workflow Automation\n• Risk Mitigation & Quality Governance\n• Cross-Functional Stakeholder Communication\n\nAlways open to discussing industry trends and high-impact career opportunities.`,
        featuredRecommendations: ['Pin your Flagship Project with clear visual summary and link to live deliverable.'],
        skillsToHighlight: [profession, 'Process Optimization', 'Risk Management', 'Stakeholder Communication', 'Quality Governance']
      },
      portfolioStructure: {
        recommendedPages: ['Hero & Value Statement', 'Flagship Project Case Study', 'Supporting Projects (Intermediate/Beginner)', 'About & Contact'],
        proofOfWorkStrategy: 'Never show vague claims. Provide tangible deliverables: reports, dashboards, repositories, and measurable outcomes.'
      },
      elevatorPitch30s: `Hi, I’m a ${profession} specialist dedicated to building structured, high-reliability solutions. Most recently, I developed OmniCore, an end-to-end operational platform that cut workflow turnaround time by 45% while maintaining complete compliance. I focus on bringing methodical execution and clear communication to every challenge.`,
      networkingIntroduction: `Hi [Name], I’ve been following your team’s achievements in ${profession} at [Company]. I recently completed a flagship project on operational optimization and would love to follow your team's work. Would appreciate connecting!`,
      proofOfSkillFormula: 'Skill → Practice Exercises → Production Deliverable → Verified Portfolio → Resume Metric → Confident Interview'
    },
    resumeIntelligence: {
      recommendedSections: ['Header', 'Core Competencies', 'Featured Projects with Metrics', 'Professional Experience', 'Education & Credentials'],
      professionSpecificKeywords: [profession, 'Optimization', 'Execution', 'Compliance', 'Strategy', 'Analysis', 'Governance'],
      bulletPointFormula: 'Action Verb + Technical Tool / Context + Quantifiable Metric / Impact = High-Impact Bullet',
      bulletExamples: [
        {
          role: `${profession} Project`,
          before: `Worked on projects and helped with daily tasks.`,
          after: `Spearheaded delivery of 3 major operational initiatives using standardized workflows, increasing throughput by 32% with zero compliance infractions.`,
          impactExplanation: 'Replaces passive phrasing with proactive leadership, specific scope, and measurable performance gains.'
        }
      ],
      atsChecklist: ['Standard single-column format', 'Standard section titles', 'Keywords aligned with job posting'],
      antiFabricationNotice: `CAREEROS AI WARNING: Never fabricate credentials or achievements. In-depth technical interviews will test every claim on your resume.`
    },
    interviewSpec: {
      modes: [
        { id: 'beginner', name: 'Domain Fundamentals', description: 'Core principles and terminology.' },
        { id: 'technical', name: 'Technical Execution & Scenarios', description: 'Real-world problem solving and tool application.' },
        { id: 'behavioral', name: 'Behavioral & Leadership', description: 'Handling deadlines, conflict, and feedback (STAR method).' },
        { id: 'expert', name: 'Strategic & High-Impact Case', description: 'Enterprise-scale decisions and tradeoff management.' }
      ],
      sampleBank: [
        {
          id: 'q-gen-1',
          category: 'technical',
          question: `Describe how you approach a project when the requirements are ambiguous or contradictory.`,
          hint: 'Focus on stakeholder interviews, requirement matrices, phased milestones, and written alignment.',
          keyAspectsExpected: ['Clarifying questions with stakeholders', 'Documenting assumptions explicitly', 'Proposing phased prototypes to validate alignment'],
          difficulty: 'Medium'
        }
      ]
    },
    jobReadinessAudit: {
      categories: [
        { id: 'audit-tech', name: 'Domain Competence', weight: 30, keyChecklist: ['Understands core principles', 'Mastery of primary software tools', 'Accurate edge-case resolution'] },
        { id: 'audit-proj', name: 'Defensible Projects', weight: 30, keyChecklist: ['Has 1 Flagship Project deliverable', 'Clean documentation and presentation', 'Measurable impact metric'] },
        { id: 'audit-pres', name: 'Resume & Presence', weight: 20, keyChecklist: ['ATS-compliant resume', 'LinkedIn optimized with project highlights'] },
        { id: 'audit-comm', name: 'Interview Articulation', weight: 20, keyChecklist: ['Can explain decisions using STAR framework', 'Clear spoken delivery'] }
      ],
      jobReadyActionPlan: [
        { priority: 'Critical', task: `Complete and publish Flagship ${profession} project.`, targetProof: 'Published artifact with case study.' },
        { priority: 'High', task: 'Tailor resume bullets with quantifiable metrics.', targetProof: 'Resume scored > 80% on ATS checklist.' }
      ]
    },
    entryAndJobSearch: {
      entryStrategies: [
        { channel: 'Targeted Project Outreach', realismScore: 'High (40% response rate)', approach: 'Reach out to hiring managers with a 2-minute video or PDF case study showing how your project solves a known pain point in their organization.' },
        { channel: 'Professional Associations & Meetups', realismScore: 'High Signal', approach: 'Participate in industry forums, ask insightful questions, and network with active practitioners.' }
      ],
      whereToSearch: [
        { platform: 'LinkedIn Specialized Search', strategy: 'Search for active hiring managers and team leads rather than generic application buttons.' }
      ],
      recruiterMessagingTemplates: [
        {
          scenario: 'Reaching out to a Department Lead',
          subject: `Question regarding [Company]'s initiatives in ${profession}`,
          message: `Hi [Name],\n\nI’ve been following [Company]’s impressive work in ${profession}. I recently designed OmniCore, an operational framework that streamlined process turnaround by 45% while preserving quality standards.\n\nHere is a 1-page summary of the case study: [Link].\n\nIf your team is looking for a proactive specialist who loves solving complex workflow challenges, I’d welcome 10 minutes to learn about your current roadmap.\n\nBest regards,\n[Your Name]`
        }
      ],
      applicationStrategy: ['Quality over quantity: 5 customized applications with tailored case studies beat 50 generic applications.']
    },
    growthMap: {
      timeline: [
        { stage: 'Years 0–1', years: '0–1 Years', focus: 'Foundational Associate', title: `Junior ${profession}`, responsibilities: ['Executing standard tasks', 'Learning organizational workflows', 'Receiving guidance from senior peers'] },
        { stage: 'Years 1–3', years: '1–3 Years', focus: 'Independent Specialist', title: `${profession} Specialist`, responsibilities: ['Managing medium initiatives independently', 'Auditing quality and resolving edge cases', 'Contributing to process optimizations'] },
        { stage: 'Years 3–5', years: '3–5 Years', focus: 'Senior Leader / Strategist', title: `Senior ${profession} Lead`, responsibilities: ['Architecting large-scale initiatives', 'Mentoring junior team members', 'Guiding strategic decisions with management'] },
        { stage: 'Years 5–10+', years: '5–10+ Years', focus: 'Director / Executive Advisory', title: `Principal / Director of ${profession}`, responsibilities: ['Setting departmental vision and policy', 'Budget and resource allocation', 'Executive stakeholder governance'] }
      ],
      careerTree: [
        { branch: 'Specialist / Individual Contributor', roles: [`Junior ${profession}`, `Senior Specialist`, `Principal Advisor`], requiredAdvancementSkills: ['Deep technical mastery', 'Thought leadership', 'Complex problem solving'] },
        { branch: 'Management & Leadership', roles: ['Team Lead', 'Department Manager', 'Director / VP'], requiredAdvancementSkills: ['People management', 'Strategic planning', 'Financial & executive alignment'] }
      ]
    },
    pivotAndAlternatives: {
      transferableSkillsTemplate: ['Analytical problem decomposition', 'Project & stakeholder management', 'Quality assurance and compliance rigor'],
      transitionRoadmapSequence: ['Step 1: Identify transferable strengths', 'Step 2: Complete focused 60-day domain training', 'Step 3: Build 1 Flagship Case Study', 'Step 4: Execute targeted networking'],
      alternativeCareers: [
        { title: 'Operations Specialist', relationType: 'Adjacent', whyRelated: 'Applies workflow and process management across broader organizational domains.' },
        { title: 'Project / Program Manager', relationType: 'Similar', whyRelated: 'Focuses on cross-functional timelines, resource allocation, and team delivery.' }
      ],
      decisionMatrix: [
        { dimension: 'Analytical vs Collaborative', realityInThisCareer: '60% analytical execution, 40% stakeholder collaboration.' }
      ]
    },
    risksAndSustainability: {
      careerRisks: [
        {
          risk: 'Failure to Modernize Tooling',
          whyItMatters: 'Practitioners who rely solely on legacy software risk obsolescence as digital platforms automate routine tasks.',
          earlyWarningSign: 'Reluctance to test new software or AI-assisted tools.',
          prevention: 'Dedicate 1 hour weekly to exploring emerging tools and automation platforms.'
        }
      ],
      sustainabilityCheck: {
        learningWorkloadHours: '8–12 hours/week of structured upskilling is sustainable without cognitive fatigue.',
        burnoutPreventionAdvice: 'Establish clear boundaries around delivery deadlines and maintain active physical recovery routines.',
        skillMaintenanceRoutine: 'Review 1 industry whitepaper or case study every week.'
      }
    },
    missionsPlan: {
      days30: [
        { week: 'Week 1', goal: 'Domain Principles & Environment Setup', tasks: ['Review industry standards and terminology', 'Install primary tools and set up workspace'], learning: 'Foundations and workflow mechanics', practice: 'Complete 3 setup exercises', output: 'Configured environment + terminology cheat sheet', milestone: 'Setup Verified', selfCheck: 'Can I explain core industry terms clearly?' },
        { week: 'Week 2', goal: 'Primary Tooling Mastery', tasks: ['Master primary software interface and shortcuts', 'Execute basic workflows'], learning: 'Tool efficiency and accuracy', practice: 'Replicate 5 sample deliverables', output: 'Sample practice portfolio', milestone: 'Tool Fluency', selfCheck: 'Can I complete standard operations smoothly?' },
        { week: 'Week 3', goal: 'Structured Analysis & Quality Controls', tasks: ['Learn error detection and quality audit checklists', 'Analyze a flawed real-world case study'], learning: 'Quality assurance and auditing', practice: 'Perform audit on sample deliverable', output: 'Audit report identifying 5 key fixes', milestone: 'Audit Capability', selfCheck: 'Can I spot subtle errors in data or process?' },
        { week: 'Week 4', goal: 'First Beginner Project Deliverable', tasks: ['Select project problem statement', 'Execute full analysis and document findings'], learning: 'Synthesis and reporting', practice: 'Format report according to professional standards', output: 'Completed Beginner Project Case Study', milestone: 'Beginner Project Shipped', selfCheck: 'Would this pass executive review?' }
      ],
      days60: [
        { week: 'Week 5', goal: 'Advanced Edge Cases & Scenarios', tasks: ['Study complex scenario handling', 'Learn conflict resolution and tradeoff frameworks'], learning: 'Advanced problem solving', practice: 'Solve 3 simulated crisis scenarios', output: 'Crisis management protocol memo', milestone: 'Scenario Preparedness', selfCheck: 'Can I defend trade-offs when constraints collide?' },
        { week: 'Week 6', goal: 'Optimization & Automation Fundamentals', tasks: ['Identify repetitive bottlenecks in standard workflows', 'Implement template or script automations'], learning: 'Process optimization', practice: 'Automate a multi-step routine task', output: 'Working automation template', milestone: 'Process Improvement', selfCheck: 'Does this save measurable time?' },
        { week: 'Week 7', goal: 'Intermediate Project: Optimization Framework', tasks: ['Design comprehensive optimization framework', 'Test with simulated project data'], learning: 'Framework design', practice: 'Run verification tests and gather metrics', output: 'Shipped Intermediate Framework', milestone: 'Intermediate Project Complete', selfCheck: 'Are performance gains quantifiable?' },
        { week: 'Week 8', goal: 'Stakeholder Communication & Presenting', tasks: ['Draft executive summary deck', 'Record 3-minute video presentation of your framework'], learning: 'Executive presentation', practice: 'Present to peer or mentor for critique', output: 'Presentation video + polished slides', milestone: 'Presentation Mastery', selfCheck: 'Is the message concise and impact-focused?' }
      ],
      days90: [
        { week: 'Week 9', goal: 'Flagship Project Scope & Architecture', tasks: ['Draft comprehensive spec for OmniCore Flagship Project', 'Define scope, deliverables, and success metrics'], learning: 'Large-scale project architecture', practice: 'Create architecture diagram and milestone roadmap', output: 'Flagship Project Charter', milestone: 'Flagship Initiated', selfCheck: 'Does this solve a genuine high-value problem?' },
        { week: 'Week 10', goal: 'Flagship Core Execution', tasks: ['Build core components and automated validation rules', 'Incorporate industry compliance standards'], learning: 'Deep domain execution', practice: 'Run stress tests and refine data models', output: 'Working Flagship Core Deliverable', milestone: 'Flagship Core Running', selfCheck: 'Does it perform flawlessly under test conditions?' },
        { week: 'Week 11', goal: 'Flagship Polish, Documentation & Case Study', tasks: ['Write comprehensive case study with ROI metrics', 'Assemble professional portfolio package'], learning: 'Portfolio storytelling', practice: 'Review against ATS and hiring manager checklists', output: 'Shipped Flagship Deliverable', milestone: 'Flagship Complete', selfCheck: 'Would I proudly present this in an interview right now?' },
        { week: 'Week 12', goal: 'Resume, Network & Job Execution', tasks: ['Format ATS resume with Action + Metric + Impact bullets', 'Reach out to 10 target hiring managers with personalized case study demos'], learning: 'Strategic market entry', practice: 'Simulate technical interview on CareerOS', output: 'Job-Ready Application Dossier', milestone: 'Market Ready', selfCheck: 'Am I ready to articulate my technical decisions clearly under pressure?' }
      ]
    },
    postHiringDevelopment: {
      first30DaysAtWork: [
        'Understand organizational norms, communication cadences, and approval hierarchies.',
        'Study previous successful project deliverables to assimilate internal quality standards.',
        'Build positive rapport with teammates across adjacent departments.'
      ],
      first90DaysAtWork: [
        'Deliver your first independent initiative on time with zero compliance defects.',
        'Proactively identify a small operational bottleneck and suggest a structured improvement.',
        'Solicit direct feedback from your manager regarding skill growth areas.'
      ],
      longTermCareerMobility: [
        'Establish yourself as the domain authority on high-impact methodologies.',
        'Mentor incoming team members to demonstrate leadership capability.',
        'Stay visible through quarterly presentations of team accomplishments.'
      ],
      essentialProfessionalSkills: [
        { skill: 'Structured Documentation', howItApplies: 'Ensures your accomplishments and methodologies are documented and visible to executive leadership.' },
        { skill: 'Executive Composure', howItApplies: 'Maintains stakeholder confidence during unexpected project roadblocks.' }
      ]
    },
    dailyCoachTemplate: {
      learn: `Read 1 authoritative article or whitepaper regarding ${profession} best practices.`,
      practice: 'Execute 1 practical domain exercise focusing on accuracy and speed.',
      build: 'Spend 45–60 uninterrupted minutes on your active project deliverable.',
      document: 'Write a 2-sentence summary of what you accomplished and what needs refining.',
      reflect: 'What was the toughest obstacle encountered today, and how did I navigate it?'
    }
  };
}
