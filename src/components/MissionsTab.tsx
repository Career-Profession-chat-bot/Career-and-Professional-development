import React, { useState, useEffect } from 'react';
import { 
  Target, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Play, 
  Pause, 
  RotateCcw,
  BookOpen,
  Code,
  Hammer,
  FileEdit,
  BrainCircuit,
  TrendingUp
} from 'lucide-react';
import { CareerUniverse } from '../types/careeros';

interface MissionsTabProps {
  universe: CareerUniverse;
}

export const MissionsTab: React.FC<MissionsTabProps> = ({ universe }) => {
  const { identity } = universe;

  const actionPlans = universe.actionPlans || {
    plan30Days: {
      title: '30-Day Foundation & Ramp-Up Mission',
      focus: 'Foundational syntax, environment setup, and first beginner deliverable.',
      weeks: (universe.missionsPlan?.days30 || []).map((w, idx) => ({
        weekNumber: idx + 1,
        title: w.goal,
        goals: w.tasks && w.tasks.length > 0 ? w.tasks : [w.learning, w.practice],
        deliverable: w.output
      }))
    },
    plan60Days: {
      title: '60-Day Deep Practice & System Architecture',
      focus: 'Edge-case handling, system design, and shipping intermediate project.',
      phases: (universe.missionsPlan?.days60 || []).map((w, idx) => ({
        phase: `Phase ${idx + 1}: ${w.goal}`,
        goals: w.tasks && w.tasks.length > 0 ? w.tasks : [w.learning, w.practice],
        deliverable: w.output
      }))
    },
    plan90Days: {
      title: '90-Day Flagship Delivery & Market Entry',
      focus: 'Flagship project completion, ATS resume tailoring, and direct outreach.',
      months: [
        {
          monthNumber: 1,
          title: 'Foundation & Tool Mastery',
          focusItems: ['Core methodology', 'Tool chain fluency', 'First case report'],
          deliverable: 'Beginner Capstone Audit'
        },
        {
          monthNumber: 2,
          title: 'Architecture & Frameworks',
          focusItems: ['Complex data handling', 'Automated testing', 'Intermediate project'],
          deliverable: 'Intermediate Optimization Platform'
        },
        {
          monthNumber: 3,
          title: 'Flagship Platform & Job Search',
          focusItems: ['OmniCore Flagship deliverable', 'ATS resume metrics', 'Targeted outreach'],
          deliverable: 'Production Portfolio + 20 Applications'
        }
      ]
    }
  };

  const dailyRoutine = universe.dailyRoutine || {
    timeCommitment: '2 Hours / Day Focus Block',
    activities: [
      { category: 'Learn (30 min)', detail: universe.dailyCoachTemplate?.learn || 'Read 1 authoritative article on best practices.' },
      { category: 'Practice (30 min)', detail: universe.dailyCoachTemplate?.practice || 'Execute 1 practical domain exercise focusing on accuracy.' },
      { category: 'Build (45 min)', detail: universe.dailyCoachTemplate?.build || 'Spend uninterrupted time on your active project deliverable.' },
      { category: 'Document (15 min)', detail: universe.dailyCoachTemplate?.document || 'Write a summary of what you accomplished and what needs refining.' }
    ]
  };

  const first30DaysOnJob = universe.first30DaysOnJob || {
    week1: { title: 'Listen & Map the System', actions: ['Clarify expectations with lead', 'Set up developer environment', 'Read existing documentation'] },
    week2: { title: 'First Small Delivery', actions: ['Pick up small scoped task', 'Submit first review with complete tests', 'Ask clarifying questions early'] },
    week3: { title: 'Autonomous Execution', actions: ['Handle medium complexity task', 'Verify edge-case handling independently', 'Sync with cross-functional peers'] },
    week4: { title: 'Retrospective & Review', actions: ['Review 30-day milestones with manager', 'Incorporate direct feedback', 'Set goals for month 2'] },
    probationRedFlags: [
      'Staying silent when stuck for more than 4 hours without asking for unblocking guidance.',
      'Merging untested code or bypassing quality standards to hit artificial deadlines.',
      'Dismissing team conventions or arguing over stylistic preferences.'
    ],
    bestPractices: [
      'Take structured notes in every meeting and maintain an internal personal glossary.',
      'Before asking for help, formulate 2 potential solutions and explain what you already tried.',
      'Proactively provide a concise 3-bullet update at the end of each week.'
    ]
  };

  const longTermGrowth = universe.longTermGrowth || {
    seniorityProgression: universe.growthMap?.timeline?.map((t: any) => `${t.stage} (${t.title})`).join(' → ') || 'Junior Associate → Specialist → Senior Lead → Principal Director',
    burnoutPrevention: universe.risksAndSustainability?.sustainabilityCheck?.burnoutPreventionAdvice || 'Establish strict recovery periods, maintain regular physical exercise, and decouple self-worth from sprint velocity.',
    aiImpactAndFutureProofing: universe.risksAndSustainability?.careerRisks?.[0]?.whyItMatters || 'Master architectural thinking, domain problem breakdown, and rigorous quality auditing. Professionals who orchestrate AI tools to build complete verified solutions outpace passive executors.'
  };

  const [activePlan, setActivePlan] = useState<'30' | '60' | '90' | 'daily' | 'first30'>('30');
  
  // Daily Timer state
  const [timerSeconds, setTimerSeconds] = useState(25 * 60);
  const [timerRunning, setTimerRunning] = useState(false);
  const [activeTimerStep, setActiveTimerStep] = useState<number>(0);

  const timerSteps = [
    { title: '1. Learn Concept', durationMinutes: 30, desc: 'Read official docs or watch a focused technical walkthrough' },
    { title: '2. Practice Code', durationMinutes: 30, desc: 'Write isolated exercises, test edge cases, break and fix' },
    { title: '3. Build Feature', durationMinutes: 60, desc: 'Add tangible functionality into your Flagship Project' },
    { title: '4. Document & Commit', durationMinutes: 10, desc: 'Commit with clean git message and update README/notes' },
    { title: '5. Reflect & Synthesize', durationMinutes: 10, desc: 'Write down 3 things learned and 1 question for tomorrow' }
  ];

  useEffect(() => {
    let interval: any = null;
    if (timerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timerSeconds]);

  const setTimerForStep = (stepIdx: number) => {
    setActiveTimerStep(stepIdx);
    setTimerSeconds(timerSteps[stepIdx].durationMinutes * 60);
    setTimerRunning(false);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainderSecs = secs % 60;
    return `${String(mins).padStart(2, '0')}:${String(remainderSecs).padStart(2, '0')}`;
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800/40">
                Chapter 16, 17 & 18 • Action Plans & Execution Engine
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
              30 / 60 / 90 Day Action Playbook
            </h1>
            <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Execution is the only cure for career anxiety. Choose your active mission horizon and run the daily 5-step growth loop.
            </p>
          </div>

          {/* Sub Navigation */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActivePlan('30')}
              className={`text-xs px-3.5 py-2 rounded-xl font-semibold transition-all cursor-pointer ${
                activePlan === '30'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              30-Day Sprint
            </button>
            <button
              onClick={() => setActivePlan('60')}
              className={`text-xs px-3.5 py-2 rounded-xl font-semibold transition-all cursor-pointer ${
                activePlan === '60'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              60-Day Build
            </button>
            <button
              onClick={() => setActivePlan('90')}
              className={`text-xs px-3.5 py-2 rounded-xl font-semibold transition-all cursor-pointer ${
                activePlan === '90'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              90-Day Entry
            </button>
            <button
              onClick={() => setActivePlan('daily')}
              className={`text-xs px-3.5 py-2 rounded-xl font-semibold transition-all cursor-pointer ${
                activePlan === 'daily'
                  ? 'bg-purple-600 text-white font-bold shadow-sm'
                  : 'bg-slate-950 text-purple-400 hover:text-white border border-slate-800'
              }`}
            >
              Daily 5-Step Timer
            </button>
            <button
              onClick={() => setActivePlan('first30')}
              className={`text-xs px-3.5 py-2 rounded-xl font-semibold transition-all cursor-pointer ${
                activePlan === 'first30'
                  ? 'bg-emerald-600 text-white font-bold shadow-sm'
                  : 'bg-slate-950 text-emerald-400 hover:text-white border border-slate-800'
              }`}
            >
              First 30 Days on Job
            </button>
          </div>
        </div>
      </section>

      {/* 1. Daily 5-Step Execution Loop & Focus Timer */}
      {activePlan === 'daily' && (
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <BrainCircuit className="h-5 w-5 text-purple-400" />
                <h2 className="text-xl font-bold text-white tracking-tight">The Daily 5-Step CareerOS Routine</h2>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                2 hours and 20 minutes of structured, non-negotiable daily progress.
              </p>
            </div>

            {/* Timer Counter */}
            <div className="flex items-center gap-4 bg-slate-950 px-5 py-3 rounded-2xl border border-purple-500/40">
              <div className="font-mono text-3xl font-extrabold text-purple-400">
                {formatTime(timerSeconds)}
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setTimerRunning(!timerRunning)}
                  className={`p-2 rounded-xl font-bold text-xs cursor-pointer ${
                    timerRunning ? 'bg-amber-500 text-slate-950' : 'bg-purple-600 text-white'
                  }`}
                >
                  {timerRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => setTimerSeconds(timerSteps[activeTimerStep].durationMinutes * 60)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
                  title="Reset timer"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Routine Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
            {timerSteps.map((step, idx) => {
              const isCurrent = activeTimerStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setTimerForStep(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-purple-950/30 border-purple-500 shadow-md shadow-purple-500/10'
                      : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-purple-400 font-bold mb-1">
                      <span>{step.durationMinutes} MIN</span>
                      {isCurrent && <span className="text-[10px] uppercase text-emerald-400">Selected</span>}
                    </div>
                    <div className="font-bold text-white text-xs">{step.title}</div>
                    <p className="text-slate-400 text-[11px] mt-2 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 2. 30-Day Sprint Plan */}
      {activePlan === '30' && (
        <section className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white tracking-tight mb-1">{actionPlans.plan30Days.title}</h2>
            <p className="text-xs text-slate-400 mb-5">{actionPlans.plan30Days.focus}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {actionPlans.plan30Days.weeks.map((week: any) => (
                <div key={week.weekNumber} className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-cyan-400 uppercase text-[10px] bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/40">
                      Week {week.weekNumber}
                    </span>
                    <span className="text-slate-400 text-[11px] font-semibold">{week.title}</span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-[10px] font-bold text-slate-500 uppercase">Weekly Goals:</div>
                    {week.goals.map((g: string, i: number) => (
                      <div key={i} className="flex items-start gap-1.5 text-slate-300">
                        <span className="text-cyan-400">•</span>
                        <span>{g}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 text-[11px]">
                    <span className="text-emerald-400 font-bold uppercase text-[10px]">Deliverable: </span>
                    <span className="text-slate-300">{week.deliverable}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. 60-Day Build Plan */}
      {activePlan === '60' && (
        <section className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white tracking-tight mb-1">{actionPlans.plan60Days.title}</h2>
            <p className="text-xs text-slate-400 mb-5">{actionPlans.plan60Days.focus}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {actionPlans.plan60Days.phases.map((phase: any, idx: number) => (
                <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-cyan-400 uppercase text-[10px] bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/40">
                      {phase.phase}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-[10px] font-bold text-slate-500 uppercase">Milestones:</div>
                    {phase.goals.map((g: string, i: number) => (
                      <div key={i} className="flex items-start gap-1.5 text-slate-300">
                        <span className="text-cyan-400">•</span>
                        <span>{g}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 text-[11px]">
                    <span className="text-emerald-400 font-bold uppercase text-[10px]">Deliverable: </span>
                    <span className="text-slate-300">{phase.deliverable}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. 90-Day Entry Plan */}
      {activePlan === '90' && (
        <section className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white tracking-tight mb-1">{actionPlans.plan90Days.title}</h2>
            <p className="text-xs text-slate-400 mb-5">{actionPlans.plan90Days.focus}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              {actionPlans.plan90Days.months.map((m: any) => (
                <div key={m.monthNumber} className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-cyan-400 uppercase text-[10px] bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/40">
                      Month {m.monthNumber}
                    </span>
                    <span className="text-slate-400 text-[11px] font-semibold">{m.title}</span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-[10px] font-bold text-slate-500 uppercase">Focus Items:</div>
                    {m.focusItems.map((item: string, i: number) => (
                      <div key={i} className="flex items-start gap-1.5 text-slate-300">
                        <span className="text-cyan-400">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 text-[11px]">
                    <span className="text-emerald-400 font-bold uppercase text-[10px]">Deliverable: </span>
                    <span className="text-slate-300">{m.deliverable}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. First 30 Days on the Job Survival Playbook */}
      {activePlan === 'first30' && (
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 text-xs">
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
              <h2 className="text-xl font-bold text-white tracking-tight">The First 30 Days on the Job Playbook</h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              How to establish credibility, navigate codebases without fear, and avoid early probation traps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
              <div className="font-mono text-[10px] font-bold text-cyan-400 uppercase">Week 1: Setup & Listen</div>
              <h3 className="font-bold text-white text-xs">{first30DaysOnJob.week1.title}</h3>
              <ul className="space-y-1 text-slate-300">
                {first30DaysOnJob.week1.actions.map((act: string, i: number) => (
                  <li key={i} className="flex items-start gap-1">
                    <span className="text-cyan-400">•</span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
              <div className="font-mono text-[10px] font-bold text-cyan-400 uppercase">Week 2: Small Win</div>
              <h3 className="font-bold text-white text-xs">{first30DaysOnJob.week2.title}</h3>
              <ul className="space-y-1 text-slate-300">
                {first30DaysOnJob.week2.actions.map((act: string, i: number) => (
                  <li key={i} className="flex items-start gap-1">
                    <span className="text-cyan-400">•</span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
              <div className="font-mono text-[10px] font-bold text-cyan-400 uppercase">Week 3: Ownership</div>
              <h3 className="font-bold text-white text-xs">{first30DaysOnJob.week3.title}</h3>
              <ul className="space-y-1 text-slate-300">
                {first30DaysOnJob.week3.actions.map((act: string, i: number) => (
                  <li key={i} className="flex items-start gap-1">
                    <span className="text-cyan-400">•</span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
              <div className="font-mono text-[10px] font-bold text-cyan-400 uppercase">Week 4: Review</div>
              <h3 className="font-bold text-white text-xs">{first30DaysOnJob.week4.title}</h3>
              <ul className="space-y-1 text-slate-300">
                {first30DaysOnJob.week4.actions.map((act: string, i: number) => (
                  <li key={i} className="flex items-start gap-1">
                    <span className="text-cyan-400">•</span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Red Flags & Best Practices */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-950/80 p-4 rounded-xl border border-rose-900/30">
              <div className="text-rose-400 font-bold uppercase text-[10px] tracking-wider mb-2">
                Probation Red Flags to Avoid
              </div>
              <ul className="space-y-1.5 text-slate-300">
                {first30DaysOnJob.probationRedFlags.map((flag: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>{flag}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950/80 p-4 rounded-xl border border-emerald-900/30">
              <div className="text-emerald-400 font-bold uppercase text-[10px] tracking-wider mb-2">
                Proven Onboarding Habits
              </div>
              <ul className="space-y-1.5 text-slate-300">
                {first30DaysOnJob.bestPractices.map((prac: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{prac}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Long-Term Career Navigation & AI Resilience */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-xs space-y-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-cyan-400" />
          <h2 className="text-base font-bold text-white tracking-tight">Long-Term Career Navigation & AI Future-Proofing</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <div className="text-cyan-400 font-bold uppercase text-[10px]">Seniority Progression Path:</div>
            <p className="text-slate-300 leading-relaxed font-mono text-[11px] bg-slate-900/80 p-2.5 rounded border border-slate-800">
              {longTermGrowth.seniorityProgression}
            </p>
            <div className="text-slate-400 text-[11px] pt-1">
              <strong>Burnout Prevention:</strong> {longTermGrowth.burnoutPrevention}
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-cyan-800/40 space-y-2">
            <div className="text-amber-400 font-bold uppercase text-[10px]">AI Resilience & Automation Hedge:</div>
            <p className="text-slate-200 leading-relaxed">
              {longTermGrowth.aiImpactAndFutureProofing}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
