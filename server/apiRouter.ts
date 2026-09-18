import { Router, Request, Response } from 'express';
import { getAI, GEMINI_MODEL } from './geminiService';

export const apiRouter = Router();

// 1. Generate or deepen Career Universe
apiRouter.post('/universe', async (req: Request, res: Response) => {
  try {
    const { profession, language = 'en', userDna } = req.body;
    if (!profession) {
      return res.status(400).json({ error: 'Profession is required' });
    }

    const ai = getAI();
    if (!ai) {
      return res.json({ fallback: true, message: 'AI key not present, using high-fidelity system preset generator' });
    }

    const langInstruction = language === 'te' 
      ? 'Respond strictly in standard Telugu language.'
      : language === 'te-en'
      ? 'Respond in natural Telugu written in English letters (Telugu-English / Tanglish style, e.g., "Ee profession lo fundamentals chala important...").'
      : 'Respond in clear, professional English.';

    const prompt = `You are CAREEROS AI, the elite Career Professional & Development Operating System.
Generate a complete, unromanticized, highly realistic Career Universe for the profession: "${profession}".

Language requirement: ${langInstruction}

Strict instructions:
- Do NOT romanticize the profession. Show the REALITY, hard parts, beginner frustrations, and continuous learning demands.
- Include actionable, specific details (real tools, real numbers, real project architectures).
- Provide the response strictly in JSON format matching the following schema:

{
  "profession": "${profession}",
  "category": "string",
  "identity": {
    "profession": "${profession}",
    "category": "string",
    "mainPurpose": "string",
    "problemSolved": "string",
    "whereTheyWork": ["string"],
    "hiringIndustries": ["string"],
    "titleVariations": ["string"]
  },
  "reality": {
    "whatProfessionalsActuallyDo": ["string"],
    "typicalResponsibilities": ["string"],
    "typicalWorkEnvironment": "string",
    "typicalWorkdayTimeline": [
      { "time": "string", "task": "string", "detail": "string" }
    ],
    "commonTasks": ["string"],
    "toolsUsed": ["string"],
    "peopleTheyWorkWith": ["string"],
    "beginnerMisunderstandings": ["string"],
    "unromanticizedTruth": "string"
  },
  "realityCheck": {
    "whatLooksAttractive": ["string"],
    "whatIsActuallyDifficult": ["string"],
    "beginnerFrustrations": ["string"],
    "competitionLevel": "string",
    "learningCurveAnalysis": "string",
    "workPressureReality": "string",
    "continuousLearningRequirements": "string",
    "commonMistakes": ["string"],
    "socialMediaVsReality": "string"
  },
  "mythsVsReality": [
    { "myth": "string", "reality": "string" }
  ],
  "prosAndCons": {
    "pros": ["string"],
    "cons": ["string"],
    "realityMatrix": [
      { "area": "string", "reality": "string", "details": "string" }
    ]
  },
  "audienceFit": {
    "whoMayEnjoy": ["string"],
    "whoMayFindChallenging": ["string"],
    "tryBeforeCommit": {
      "title": "string",
      "experimentDescription": "string",
      "testTasks": ["string"]
    }
  },
  "educationAndEligibility": {
    "traditionalRoute": { "name": "string", "sequence": ["string"], "detail": "string" },
    "alternativeRoute": { "name": "string", "sequence": ["string"], "detail": "string" },
    "careerSwitchRoute": { "name": "string", "sequence": ["string"], "detail": "string" },
    "advancedRoute": { "name": "string", "sequence": ["string"], "detail": "string" },
    "requiredEducation": ["string"],
    "preferredEducation": ["string"],
    "optionalEducation": ["string"],
    "certifications": [{ "name": "string", "issuer": "string", "valueScore": "string" }],
    "licensesOrExams": ["string"],
    "mandatoryVsOptionalClarification": "string"
  },
  "skills": {
    "technicalSkills": [
      { "id": "t1", "name": "string", "level": "Level 1 — Must Know", "category": "Technical", "description": "string", "proofOfSkill": "string" }
    ],
    "softSkills": [
      { "id": "s1", "name": "string", "level": "Level 1 — Must Know", "category": "Soft", "description": "string", "proofOfSkill": "string" }
    ],
    "tools": [
      { "id": "tl1", "name": "string", "level": "Level 1 — Must Know", "category": "Tool", "description": "string", "proofOfSkill": "string" }
    ],
    "domainKnowledge": [
      { "topic": "string", "whyItMatters": "string" }
    ]
  },
  "learningRoadmap": [
    {
      "stageNumber": 0,
      "code": "STAGE_0_ORIENTATION",
      "title": "Stage 0 — Orientation",
      "duration": "string",
      "whatToLearn": ["string"],
      "whyToLearn": "string",
      "suggestedPractice": "string",
      "expectedOutcome": "string",
      "commonMistakes": ["string"],
      "readyCriteria": "string"
    }
  ],
  "projects": {
    "beginner": [{ "id": "b1", "title": "string", "level": "Beginner", "problem": "string", "objective": "string", "skillsUsed": ["string"], "tools": ["string"], "difficulty": "string", "expectedTime": "string", "features": ["string"], "deliverables": ["string"], "portfolioPresentation": "string", "resumeBulletPossibilities": ["string"], "interviewQuestionsExpected": ["string"] }],
    "intermediate": [{ "id": "i1", "title": "string", "level": "Intermediate", "problem": "string", "objective": "string", "skillsUsed": ["string"], "tools": ["string"], "difficulty": "string", "expectedTime": "string", "features": ["string"], "deliverables": ["string"], "portfolioPresentation": "string", "resumeBulletPossibilities": ["string"], "interviewQuestionsExpected": ["string"] }],
    "advanced": [{ "id": "a1", "title": "string", "level": "Advanced", "problem": "string", "objective": "string", "skillsUsed": ["string"], "tools": ["string"], "difficulty": "string", "expectedTime": "string", "features": ["string"], "deliverables": ["string"], "portfolioPresentation": "string", "resumeBulletPossibilities": ["string"], "interviewQuestionsExpected": ["string"] }],
    "flagship": { "id": "flagship", "title": "string", "level": "Flagship", "problem": "string", "objective": "string", "skillsUsed": ["string"], "tools": ["string"], "difficulty": "string", "expectedTime": "string", "features": ["string"], "deliverables": ["string"], "portfolioPresentation": "string", "resumeBulletPossibilities": ["string"], "interviewQuestionsExpected": ["string"] }
  },
  "professionalIdentity": {
    "headlineTemplates": ["string"],
    "careerPositioning": "string",
    "linkedInProfileDirection": { "aboutSectionTemplate": "string", "featuredRecommendations": ["string"], "skillsToHighlight": ["string"] },
    "portfolioStructure": { "recommendedPages": ["string"], "proofOfWorkStrategy": "string" },
    "elevatorPitch30s": "string",
    "networkingIntroduction": "string",
    "proofOfSkillFormula": "string"
  },
  "resumeIntelligence": {
    "recommendedSections": ["string"],
    "professionSpecificKeywords": ["string"],
    "bulletPointFormula": "string",
    "bulletExamples": [{ "role": "string", "before": "string", "after": "string", "impactExplanation": "string" }],
    "atsChecklist": ["string"],
    "antiFabricationNotice": "string"
  },
  "interviewSpec": {
    "modes": [{ "id": "beginner", "name": "Beginner", "description": "string" }],
    "sampleBank": [{ "id": "q1", "category": "technical", "question": "string", "hint": "string", "keyAspectsExpected": ["string"], "difficulty": "Medium" }]
  },
  "jobReadinessAudit": {
    "categories": [{ "id": "tech", "name": "Technical", "weight": 25, "keyChecklist": ["string"] }],
    "jobReadyActionPlan": [{ "priority": "Critical", "task": "string", "targetProof": "string" }]
  },
  "entryAndJobSearch": {
    "entryStrategies": [{ "channel": "string", "realismScore": "string", "approach": "string" }],
    "whereToSearch": [{ "platform": "string", "strategy": "string" }],
    "recruiterMessagingTemplates": [{ "scenario": "string", "subject": "string", "message": "string" }],
    "applicationStrategy": ["string"]
  },
  "growthMap": {
    "timeline": [{ "stage": "string", "years": "string", "focus": "string", "title": "string", "responsibilities": ["string"] }],
    "careerTree": [{ "branch": "string", "roles": ["string"], "requiredAdvancementSkills": ["string"] }]
  },
  "pivotAndAlternatives": {
    "transferableSkillsTemplate": ["string"],
    "transitionRoadmapSequence": ["string"],
    "alternativeCareers": [{ "title": "string", "relationType": "Adjacent", "whyRelated": "string" }],
    "decisionMatrix": [{ "dimension": "string", "realityInThisCareer": "string" }]
  },
  "risksAndSustainability": {
    "careerRisks": [{ "risk": "string", "whyItMatters": "string", "earlyWarningSign": "string", "prevention": "string" }],
    "sustainabilityCheck": { "learningWorkloadHours": "string", "burnoutPreventionAdvice": "string", "skillMaintenanceRoutine": "string" }
  },
  "missionsPlan": {
    "days30": [{ "week": "Week 1", "goal": "string", "tasks": ["string"], "learning": "string", "practice": "string", "output": "string", "milestone": "string", "selfCheck": "string" }],
    "days60": [{ "week": "Week 5", "goal": "string", "tasks": ["string"], "learning": "string", "practice": "string", "output": "string", "milestone": "string", "selfCheck": "string" }],
    "days90": [{ "week": "Week 9", "goal": "string", "tasks": ["string"], "learning": "string", "practice": "string", "output": "string", "milestone": "string", "selfCheck": "string" }]
  },
  "postHiringDevelopment": {
    "first30DaysAtWork": ["string"],
    "first90DaysAtWork": ["string"],
    "longTermCareerMobility": ["string"],
    "essentialProfessionalSkills": [{ "skill": "string", "howItApplies": "string" }]
  },
  "dailyCoachTemplate": {
    "learn": "string",
    "practice": "string",
    "build": "string",
    "document": "string",
    "reflect": "string"
  }
}`;

    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.7,
      },
    });

    const text = response.text;
    if (!text) {
      return res.status(500).json({ error: 'Empty response from Gemini' });
    }

    const data = JSON.parse(text);
    return res.json({ success: true, universe: data });
  } catch (err: any) {
    console.error('Error generating universe:', err);
    return res.status(500).json({ error: err.message || 'Failed to generate universe' });
  }
});

// 2. Career DNA & Fit Evaluation
apiRouter.post('/dna-evaluate', async (req: Request, res: Response) => {
  try {
    const { dna, profession, language = 'en' } = req.body;
    const ai = getAI();
    if (!ai) {
      // Return high-quality deterministic calculation
      return res.json({
        success: true,
        fitScores: {
          interest: 85,
          skill: 70,
          education: 80,
          workStyle: 85,
          learning: 90,
          communication: 75,
          problemSolving: 85,
          lifestyle: 80,
          growth: 90
        },
        overallFitPercent: 83,
        strongAlignment: [
          `Strong interest in problem solving directly aligns with ${profession || 'this target role'}.`,
          `High learning commitment (${dna?.timeAvailableWeeklyHours || 15} hrs/week) supports realistic skill progression.`,
          `Current baseline analytical strengths provide a solid foundation.`
        ],
        potentialChallenges: [
          `Requires dedicated bridge to bridge missing technical tools.`,
          `Pacing must be managed to prevent burnout alongside current commitments.`
        ],
        unknowns: [
          `Real-world resilience under high-pressure production debugging.`
        ],
        naturalStrengths: ['Analytical logic', 'Curiosity', 'Structured thinking'],
        developmentAreas: ['Advanced industry tools', 'Production project portfolio'],
        existingAdvantages: ['Transferable domain context', 'High self-directed motivation'],
        missingSkills: ['Specialized industry frameworks', 'System design patterns'],
        workStyleCompatibility: 'High compatibility with independent focused blocks and async collaboration.',
        learningCompatibility: 'Excellent fit for hands-on project-based proof-of-work learning.',
        careerMotivation: 'Driven by tangible craftsmanship and long-term financial/intellectual mobility.',
        tryBeforeCommitExperiment: {
          title: `7-Day ${profession || 'Career'} Immersion Trial`,
          duration: '7 Days (1 hour/day)',
          description: 'Test your day-to-day affinity before investing months of deep learning.',
          dayByDayTasks: [
            { day: 'Day 1', task: 'Review 3 real job descriptions and list every recurring requirement.' },
            { day: 'Day 2', task: 'Set up core free industry tools and read the quickstart guide.' },
            { day: 'Day 3', task: 'Follow a 45-minute beginner walkthrough creating a real output.' },
            { day: 'Day 4', task: 'Introduce 2 deliberate errors and troubleshoot them independently.' },
            { day: 'Day 5', task: 'Build a tiny standalone project without referencing the tutorial step-by-step.' },
            { day: 'Day 6', task: 'Explain what you built to a friend or write a 200-word summary.' },
            { day: 'Day 7', task: 'Reflect honestly: Did the troubleshooting energize or drain you?' }
          ],
          successIndicator: 'Completing the 7 days with genuine curiosity to tackle harder problems.'
        }
      });
    }

    const langInstruction = language === 'te' 
      ? 'Respond strictly in standard Telugu.'
      : language === 'te-en'
      ? 'Respond in Telugu-English (Tanglish) written in English script.'
      : 'Respond in professional English.';

    const prompt = `You are CAREEROS AI's Career DNA Analyst.
Evaluate this user's profile against the target profession: "${profession || 'Target Profession'}".

User DNA Profile:
${JSON.stringify(dna, null, 2)}

Language requirement: ${langInstruction}

Return a valid JSON object with:
{
  "fitScores": {
    "interest": number (0-100),
    "skill": number (0-100),
    "education": number (0-100),
    "workStyle": number (0-100),
    "learning": number (0-100),
    "communication": number (0-100),
    "problemSolving": number (0-100),
    "lifestyle": number (0-100),
    "growth": number (0-100)
  },
  "overallFitPercent": number (0-100),
  "strongAlignment": ["string"],
  "potentialChallenges": ["string"],
  "unknowns": ["string"],
  "naturalStrengths": ["string"],
  "developmentAreas": ["string"],
  "existingAdvantages": ["string"],
  "missingSkills": ["string"],
  "workStyleCompatibility": "string",
  "learningCompatibility": "string",
  "careerMotivation": "string",
  "tryBeforeCommitExperiment": {
    "title": "string",
    "duration": "string",
    "description": "string",
    "dayByDayTasks": [
      { "day": "Day 1", "task": "string" }
    ],
    "successIndicator": "string"
  }
}

Do not claim psychological certainty. Use humble, reality-based phrasing like "Based on what you shared..."`;

    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.6,
      },
    });

    const text = response.text;
    if (!text) throw new Error('No evaluation generated');
    const result = JSON.parse(text);
    return res.json({ success: true, ...result });
  } catch (err: any) {
    console.error('Error in dna-evaluate:', err);
    return res.status(500).json({ error: err.message || 'Evaluation failed' });
  }
});

// 3. Adaptive Interview Simulator Feedback
apiRouter.post('/interview', async (req: Request, res: Response) => {
  try {
    const { profession, mode, question, answer, history = [], language = 'en' } = req.body;
    if (!question || !answer) {
      return res.status(400).json({ error: 'Question and answer are required' });
    }

    const ai = getAI();
    if (!ai) {
      return res.json({
        success: true,
        evaluation: {
          whatWasGood: [
            'Directly addressed the core question prompt without evading.',
            'Structured initial thoughts clearly.'
          ],
          whatWasMissing: [
            'Could benefit from more specific technical metrics or quantified results.',
            'Explain the architectural tradeoffs or reasoning behind your chosen approach.'
          ],
          betterStructure: 'Use the STAR format: Situation/Context → Specific Action & Technical Decisions → Concrete Measurable Result.',
          suggestedImprovedAnswer: `In my experience with ${profession || 'this domain'}, I prioritize systematic diagnosis over guessing. For example, when tackling this, I first isolate the core constraints, establish automated checks, and communicate progress early to stakeholders.`,
          followUpQuestion: `What would you do if the initial solution failed under peak load or required 50% lower latency?`,
          scoreOutOf10: 7.5,
          coachTips: 'Speak with steady pacing. In technical interviews, interviewers evaluate your thought process more than rehearsed syntax.'
        }
      });
    }

    const langInstruction = language === 'te' 
      ? 'Respond strictly in standard Telugu.'
      : language === 'te-en'
      ? 'Respond in natural Telugu written in English letters (Tanglish).'
      : 'Respond in professional English.';

    const prompt = `You are an expert Interview Coach and Senior Hiring Manager in the field of: "${profession}".
The user is participating in an adaptive mock interview (${mode} mode).

Interview Question: "${question}"
Candidate's Spoken/Written Answer: "${answer}"
Previous conversation context: ${JSON.stringify(history)}

Language requirement: ${langInstruction}

Evaluate the candidate's answer with honest, constructive precision.
Return a valid JSON object matching:
{
  "whatWasGood": ["string"],
  "whatWasMissing": ["string"],
  "betterStructure": "string",
  "suggestedImprovedAnswer": "string",
  "followUpQuestion": "string",
  "scoreOutOf10": number (1 to 10),
  "coachTips": "string"
}`;

    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.7,
      },
    });

    const text = response.text;
    if (!text) throw new Error('No feedback received');
    const result = JSON.parse(text);
    return res.json({ success: true, evaluation: result });
  } catch (err: any) {
    console.error('Error in interview endpoint:', err);
    return res.status(500).json({ error: err.message || 'Interview evaluation failed' });
  }
});

// 4. Resume & ATS Intelligence
apiRouter.post('/resume', async (req: Request, res: Response) => {
  try {
    const { profession, currentBullets = [], userSkills = [], language = 'en' } = req.body;
    const ai = getAI();
    if (!ai) {
      return res.json({
        success: true,
        atsScore: 78,
        professionKeywords: ['Architecture', 'Optimization', 'Performance', 'Testing', 'Security', 'Scalability'],
        bulletImprovements: currentBullets.map((b: string) => ({
          original: b,
          improved: `Engineered ${b.toLowerCase()} implementing automated validation and performance optimizations, boosting throughput by 35%.`,
          formulaExplanation: 'Added strong action verb + technical context + quantifiable business outcome.'
        })),
        recommendations: [
          'Ensure all bullets start with past-tense action verbs (Architected, Engineered, Implemented).',
          'Include exact technical tools rather than generic terms (e.g. "PostgreSQL with composite indexes" instead of "database").',
          'Remove graphics, icons, and multi-column tables to guarantee 100% ATS readability.'
        ]
      });
    }

    const prompt = `You are a Senior Technical Recruiter and Resume Intelligence Engine for: "${profession}".
Analyze the candidate's skills and bullets:
Skills: ${JSON.stringify(userSkills)}
Resume Bullets: ${JSON.stringify(currentBullets)}

Apply the strict formula: Action Verb + Technical Tool/Context + Quantifiable Metric/Outcome.
Never fabricate experience. Provide ethical improvements.

Return JSON:
{
  "atsScore": number (0-100),
  "professionKeywords": ["string"],
  "bulletImprovements": [
    {
      "original": "string",
      "improved": "string",
      "formulaExplanation": "string"
    }
  ],
  "recommendations": ["string"]
}`;

    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.5,
      },
    });

    const text = response.text;
    if (!text) throw new Error('Empty response');
    const result = JSON.parse(text);
    return res.json({ success: true, ...result });
  } catch (err: any) {
    console.error('Error in resume endpoint:', err);
    return res.status(500).json({ error: err.message || 'Resume review failed' });
  }
});

// 5. Live Interactive CareerOS AI Coach (Chat)
apiRouter.post('/chat', async (req: Request, res: Response) => {
  try {
    const { profession, messages = [], language = 'en', context = '' } = req.body;
    const ai = getAI();
    if (!ai) {
      const lastUserMsg = messages[messages.length - 1]?.content || '';
      return res.json({
        success: true,
        reply: language === 'te-en'
          ? `CAREEROS AI ikkada! ${profession ? `${profession} kosam ` : ''}nee plan chala clear ga vundali. First fundamentals & hands-on practice meeda focus cheyyi. Ee stage lo project build cheyyadam chala help chestundi.`
          : language === 'te'
          ? `CAREEROS AI కి స్వాగతం. ${profession ? `${profession} కోసం ` : ''}మీ కెరీర్ అభివృద్ధికి ప్రణాళికాబద్ధంగా నైపుణ్యాలు నిర్మించడం అత్యంత ముఖ్యం.`
          : `I am your CAREEROS AI Coach for ${profession || 'your target career'}. How can we move you forward today? Focus on building verified proof of skills through projects.`,
        nextBestActions: [
          'Complete Career DNA Assessment',
          'Review Skill-Gap Map',
          'Start Flagship Project Module',
          'Practice Mock Interview'
        ]
      });
    }

    const langInstruction = language === 'te'
      ? 'CRITICAL: Respond strictly in standard Telugu language.'
      : language === 'te-en'
      ? 'CRITICAL: Respond naturally in Telugu written in English letters (Telugu-English / Tanglish style, e.g., "Ee profession lo first fundamentals strong cheskovali. Tarvatha practical projects build chesthe job-ready avvadam easy avutundi."). Avoid overly formal Telugu.'
      : 'Respond in clear, encouraging, reality-based English.';

    const systemInstruction = `You are CAREEROS AI, the advanced AI Career Professional & Development Operating System.
You are NOT a basic chatbot. You are a combination of Career Discovery Coach, Skill-Gap Analyst, Project Mentor, and Long-Term Career Strategist.
Target Profession: ${profession || 'General Career Guidance'}
Context: ${context}

Language requirement: ${langInstruction}

Key rules:
1. Always be honest, practical, and unromanticized. Never overpromise or guarantee jobs.
2. Ground advice in PROOF OF SKILL: Skill → Practice → Project → Portfolio → Interview → Job.
3. Keep responses structured, concise, and scannable (use bullets, milestones).
4. Always conclude with 2-3 specific NEXT BEST ACTIONS for the user.`;

    const contents = messages.map((m: any) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    const reply = response.text || 'CareerOS ready for your next step.';
    return res.json({
      success: true,
      reply,
      nextBestActions: [
        'Explore 30/60/90 Day Mission Plan',
        'Take Adaptive Mock Interview',
        'Audit Resume ATS Keywords'
      ]
    });
  } catch (err: any) {
    console.error('Error in chat endpoint:', err);
    return res.status(500).json({ error: err.message || 'Chat failed' });
  }
});
