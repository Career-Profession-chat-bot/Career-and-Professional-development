import React, { useState } from 'react';
import { X, Dna, CheckCircle2, AlertTriangle, HelpCircle, ArrowRight, RefreshCw, Sparkles, Clock, Target, ShieldAlert } from 'lucide-react';
import { CareerDNA, LanguageOption } from '../types/careeros';
import { evaluateCareerDna } from '../services/careerosApi';

interface CareerDnaModalProps {
  isOpen: boolean;
  onClose: () => void;
  profession: string;
  language: LanguageOption;
  onDnaEvaluated?: (dna: CareerDNA) => void;
}

export const CareerDnaModal: React.FC<CareerDnaModalProps> = ({
  isOpen,
  onClose,
  profession,
  language,
  onDnaEvaluated
}) => {
  const [step, setStep] = useState<'form' | 'loading' | 'result'>('form');
  const [dna, setDna] = useState<CareerDNA>({
    primaryInterests: ['Building software', 'Solving logic puzzles'],
    currentSkills: ['Basic JavaScript', 'HTML/CSS'],
    academicBackground: 'Undergraduate / College Degree',
    workStylePreference: 'Independent focused blocks with async team reviews',
    timeAvailableWeeklyHours: 15,
    financialBudgetRange: '$0 - Free Self-Taught',
    problemSolvingStyle: 'Love untangling puzzles and debugging root causes',
    riskTolerance: '6 to 12 months deliberate transition',
    longTermCareerAspiration: 'High compensation and remote autonomy',
    evaluatedScores: undefined
  });

  const [evaluation, setEvaluation] = useState<any>(null);

  if (!isOpen) return null;

  const handleRunAssessment = async () => {
    setStep('loading');
    try {
      const result = await evaluateCareerDna(dna, profession, language);
      setEvaluation(result);
      if (onDnaEvaluated) {
        onDnaEvaluated({
          ...dna,
          evaluatedScores: {
            overallFit: result.overallFitPercent,
            dimensionScores: result.fitScores,
            strengths: result.naturalStrengths,
            challenges: result.potentialChallenges,
            experiment: result.tryBeforeCommitExperiment
          }
        });
      }
      setStep('result');
    } catch (err) {
      console.error(err);
      setStep('form');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/30">
              <Dna className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">Career DNA Diagnostic & 9-Dimension Fit</h2>
              <p className="text-xs text-slate-400">
                Evaluating personal compatibility for <span className="text-purple-400 font-semibold">{profession}</span>.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {step === 'loading' && (
            <div className="py-20 text-center space-y-4">
              <RefreshCw className="h-10 w-10 text-purple-400 mx-auto animate-spin" />
              <h3 className="text-base font-semibold text-white">Analyzing 9-Dimension Compatibility Matrix...</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Comparing your work style, time budget, and cognitive preferences against real industry benchmarks for {profession}.
              </p>
            </div>
          )}

          {step === 'form' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/40 text-xs text-purple-200 leading-relaxed">
                <strong>CAREEROS Assessment Principle:</strong> We do not make absolute psychological judgments ("You should become this"). We objectively calculate your alignment, highlight friction points, and give you a 7-day reality test before you invest months of effort.
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
                
                {/* 1. Academic & Background */}
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-200">1. Current Education / Background</label>
                  <select
                    value={dna.academicBackground}
                    onChange={(e) => setDna({ ...dna, academicBackground: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-200 focus:outline-none focus:border-purple-500"
                  >
                    <option value="High School Graduate / Student">High School Graduate / Student</option>
                    <option value="Undergraduate (STEM / CS / Engineering)">Undergraduate (STEM / CS / Engineering)</option>
                    <option value="Undergraduate (Commerce / Business / Arts)">Undergraduate (Commerce / Business / Arts)</option>
                    <option value="Postgraduate / Master's">Postgraduate / Master's</option>
                    <option value="Non-Tech Working Professional Switching Careers">Non-Tech Working Professional Switching Careers</option>
                    <option value="Self-Taught Builder">Self-Taught Builder</option>
                  </select>
                </div>

                {/* 2. Weekly Time Available */}
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-200">
                    2. Weekly Learning Commitment: <span className="text-purple-400">{dna.timeAvailableWeeklyHours} Hours / Week</span>
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="45"
                    step="5"
                    value={dna.timeAvailableWeeklyHours}
                    onChange={(e) => setDna({ ...dna, timeAvailableWeeklyHours: Number(e.target.value) })}
                    className="w-full accent-purple-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>5 hrs (Casual)</span>
                    <span>15-20 hrs (Recommended)</span>
                    <span>40+ hrs (Full Immersion)</span>
                  </div>
                </div>

                {/* 3. Work Style Preference */}
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-200">3. Preferred Daily Work Style</label>
                  <select
                    value={dna.workStylePreference}
                    onChange={(e) => setDna({ ...dna, workStylePreference: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-200 focus:outline-none focus:border-purple-500"
                  >
                    <option value="Independent focused blocks with async team reviews">Independent focused blocks with async team reviews (Deep Work)</option>
                    <option value="High-tempo collaboration, meetings, and team alignment">High-tempo collaboration, meetings, and team alignment</option>
                    <option value="Structured, predictable routine with clear checklists">Structured, predictable routine with clear checklists</option>
                    <option value="Fast-paced emergency problem-solving and rapid delivery">Fast-paced emergency problem-solving and rapid delivery</option>
                  </select>
                </div>

                {/* 4. Problem Solving Style */}
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-200">4. Reaction to Cryptic Errors / Obstacles</label>
                  <select
                    value={dna.problemSolvingStyle}
                    onChange={(e) => setDna({ ...dna, problemSolvingStyle: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-200 focus:outline-none focus:border-purple-500"
                  >
                    <option value="Love untangling puzzles and debugging root causes">I get curious, isolate variables, and enjoy finding the hidden bug</option>
                    <option value="Tolerant of errors if there is clear documentation or mentor guidance">I tolerate errors if there is good documentation or a mentor</option>
                    <option value="Anxious when things break without straightforward answers">I feel intense anxiety when software breaks without obvious reasons</option>
                  </select>
                </div>

                {/* 5. Financial Runway / Budget */}
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-200">5. Budget & Resources Runway</label>
                  <select
                    value={dna.financialBudgetRange}
                    onChange={(e) => setDna({ ...dna, financialBudgetRange: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-200 focus:outline-none focus:border-purple-500"
                  >
                    <option value="$0 - Free Self-Taught">$0 — 100% Free Self-Taught (Open Source, Docs, YouTube)</option>
                    <option value="Low ($100 - $500 for books/tools/cloud)">Low ($100 - $500 for tools, cloud accounts, domains)</option>
                    <option value="Moderate ($1,000 - $3,000 for guided mentorship)">Moderate ($1,000 - $3,000 for structured certs/mentorship)</option>
                  </select>
                </div>

                {/* 6. Risk Tolerance & Horizon */}
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-200">6. Target Timeline to Job-Readiness</label>
                  <select
                    value={dna.riskTolerance}
                    onChange={(e) => setDna({ ...dna, riskTolerance: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-200 focus:outline-none focus:border-purple-500"
                  >
                    <option value="3 Months Urgent (High Risk)">3 Months Urgent (Requires 30+ hrs/week)</option>
                    <option value="6 to 12 months deliberate transition">6 to 12 months deliberate transition (Recommended)</option>
                    <option value="1 to 2 years structured university / long-term mastery">1 to 2 years structured university / long-term mastery</option>
                  </select>
                </div>

                {/* 7. Long-Term Aspiration */}
                <div className="space-y-1.5 md:col-span-2">
                  <label className="font-semibold text-slate-200">7. Primary Long-Term Career Drive</label>
                  <select
                    value={dna.longTermCareerAspiration}
                    onChange={(e) => setDna({ ...dna, longTermCareerAspiration: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-200 focus:outline-none focus:border-purple-500"
                  >
                    <option value="High compensation ceiling and merit-based advancement">Maximizing compensation and merit-based promotion</option>
                    <option value="High autonomy, remote work flexibility, and global mobility">High autonomy, location freedom, and remote flexibility</option>
                    <option value="Pure technical craftsmanship and building elegant complex systems">Deep technical craftsmanship and solving hard intellectual problems</option>
                    <option value="Entrepreneurship, product leadership, and founding companies">Building leverage to launch my own product or venture</option>
                  </select>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-4 flex justify-end">
                <button
                  onClick={handleRunAssessment}
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs px-6 py-3 rounded-xl transition-all shadow-md shadow-purple-500/25 cursor-pointer"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Run 9-Dimension Fit Analysis</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {step === 'result' && evaluation && (
            <div className="space-y-6">
              {/* Overall Score Header */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-purple-950/60 to-indigo-950/60 border border-purple-500/30">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center justify-center h-16 w-16 rounded-2xl bg-purple-500/20 border border-purple-500/40 text-purple-300 font-mono font-bold text-2xl shadow-inner">
                    {evaluation.overallFitPercent}%
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-white">Overall Compatibility Score</h3>
                      <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                        {evaluation.overallFitPercent >= 80 ? 'High Alignment' : evaluation.overallFitPercent >= 65 ? 'Moderate Alignment' : 'Challenging Fit'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">
                      Based on your input, you show strong baseline readiness for <strong className="text-white">{profession}</strong>, provided you address the highlighted missing skills.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setStep('form')}
                  className="text-xs text-purple-300 hover:text-white bg-purple-900/40 hover:bg-purple-800/50 px-3 py-1.5 rounded-lg border border-purple-700/50 transition-colors cursor-pointer shrink-0"
                >
                  Re-test Parameters
                </button>
              </div>

              {/* 9-Dimension Grid */}
              <div>
                <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">9-Dimension Fit Breakdown</h4>
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-9 gap-2">
                  {Object.entries(evaluation.fitScores || {}).map(([dim, score]: [string, any]) => (
                    <div key={dim} className="bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-center">
                      <div className="text-[10px] uppercase font-semibold text-slate-400 truncate mb-1">
                        {dim}
                      </div>
                      <div className={`font-mono text-sm font-bold ${
                        Number(score) >= 80 ? 'text-emerald-400' : Number(score) >= 65 ? 'text-cyan-400' : 'text-amber-400'
                      }`}>
                        {score}%
                      </div>
                      <div className="w-full bg-slate-800 h-1 rounded-full mt-1.5 overflow-hidden">
                        <div 
                          className={`h-full ${
                            Number(score) >= 80 ? 'bg-emerald-400' : Number(score) >= 65 ? 'bg-cyan-400' : 'bg-amber-400'
                          }`}
                          style={{ width: `${score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strong Alignment vs Challenges */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-950/60 border border-emerald-900/40 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs mb-2.5">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Verified Strengths & Alignment</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {evaluation.strongAlignment?.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-950/60 border border-amber-900/40 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs mb-2.5">
                    <AlertTriangle className="h-4 w-4" />
                    <span>Real-World Friction Points to Manage</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {evaluation.potentialChallenges?.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Try Before Commit: 7-Day Reality Experiment */}
              {evaluation.tryBeforeCommitExperiment && (
                <div className="bg-purple-950/20 border border-purple-800/40 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-purple-400" />
                      <h4 className="text-sm font-bold text-white">{evaluation.tryBeforeCommitExperiment.title}</h4>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] text-purple-300 bg-purple-900/40 px-2 py-0.5 rounded-full border border-purple-700/50">
                      <Clock className="h-3 w-3" />
                      {evaluation.tryBeforeCommitExperiment.duration || '7 Days (1 hr/day)'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                    {evaluation.tryBeforeCommitExperiment.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {evaluation.tryBeforeCommitExperiment.dayByDayTasks?.map((t: any, i: number) => (
                      <div key={i} className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-2.5 flex items-start gap-2.5">
                        <span className="font-mono text-[10px] font-bold text-purple-400 bg-purple-950/80 px-1.5 py-0.5 rounded border border-purple-800/50 shrink-0">
                          {t.day || `Day ${i + 1}`}
                        </span>
                        <span className="text-slate-300 leading-snug">{t.task}</span>
                      </div>
                    ))}
                  </div>

                  {evaluation.tryBeforeCommitExperiment.successIndicator && (
                    <div className="mt-3.5 pt-3 border-t border-purple-900/30 text-xs text-purple-300 flex items-center gap-2">
                      <Sparkles className="h-3.5 w-3.5 text-amber-300 shrink-0" />
                      <span><strong>Success Indicator:</strong> {evaluation.tryBeforeCommitExperiment.successIndicator}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between text-xs">
          <span className="text-slate-400">CareerOS DNA Engine v3.0 • Objective Compatibility</span>
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-4 py-2 rounded-xl transition-colors cursor-pointer"
          >
            Close Assessment
          </button>
        </div>
      </div>
    </div>
  );
};
