import React, { useState } from 'react';
import { 
  MessageSquareCode, 
  HelpCircle, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  RefreshCw, 
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Award,
  Eye,
  EyeOff
} from 'lucide-react';
import { CareerUniverse, InterviewQuestion, LanguageOption } from '../types/careeros';
import { evaluateInterviewAnswer } from '../services/careerosApi';

interface InterviewTabProps {
  universe: CareerUniverse;
  language: LanguageOption;
}

export const InterviewTab: React.FC<InterviewTabProps> = ({ universe, language }) => {
  const { identity } = universe;
  const sampleBank = universe.interviewSpec?.sampleBank || [];
  const interviewBank: Record<string, InterviewQuestion[]> = universe.interviewBank || {
    beginner: sampleBank.filter(q => q.category === 'beginner'),
    technical: sampleBank.filter(q => q.category === 'technical' || q.category === 'expert'),
    behavioral: sampleBank.filter(q => q.category === 'behavioral'),
    situational: sampleBank.filter(q => q.category === 'situational'),
    hr: sampleBank.filter(q => q.category === 'hr'),
  };

  // If technical is empty, fallback to sampleBank or default
  if (!interviewBank.technical || interviewBank.technical.length === 0) {
    interviewBank.technical = sampleBank.length > 0 ? sampleBank : [
      {
        id: 'tech-1',
        category: 'technical',
        question: `How do you troubleshoot a critical failure or bug under deadline pressure in ${identity.profession}?`,
        hint: 'Walk through isolation, reproduction, root-cause analysis, and regression prevention.',
        keyAspectsExpected: ['Systematic isolation', 'Logging / metrics', 'Rollback strategy', 'Post-mortem prevention'],
        difficulty: 'Medium'
      }
    ];
  }

  const [activeCategory, setActiveCategory] = useState<'beginner' | 'technical' | 'behavioral' | 'situational' | 'hr'>('technical');
  const [selectedQuestion, setSelectedQuestion] = useState<InterviewQuestion | null>(
    interviewBank.technical?.[0] || interviewBank.beginner?.[0] || null
  );
  const [userAnswer, setUserAnswer] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluation, setEvaluation] = useState<any>(null);
  const [revealedHints, setRevealedHints] = useState<Record<string, boolean>>({});

  const currentQuestions: InterviewQuestion[] = (interviewBank as any)[activeCategory] || [];

  const handleSelectQuestion = (q: InterviewQuestion) => {
    setSelectedQuestion(q);
    setUserAnswer('');
    setEvaluation(null);
  };

  const toggleHint = (id: string) => {
    setRevealedHints((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleEvaluate = async () => {
    if (!selectedQuestion || !userAnswer.trim() || isEvaluating) return;

    setIsEvaluating(true);
    try {
      const result = await evaluateInterviewAnswer(
        selectedQuestion.question,
        userAnswer,
        selectedQuestion.category,
        identity.profession,
        language
      );
      setEvaluation(result);
    } catch (err) {
      console.error(err);
    } finally {
      setIsEvaluating(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800/40">
                Chapter 15 • Adaptive Interview Simulator
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
              Interview Coach & Real-Time Evaluator
            </h1>
            <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Practice real interview questions. Submit your answer to receive immediate analysis on clarity, technical precision, and missing signals.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {(['technical', 'behavioral', 'situational', 'beginner', 'hr'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  const firstQ = (interviewBank as any)[cat]?.[0];
                  if (firstQ) handleSelectQuestion(firstQ);
                }}
                className={`text-xs px-3 py-1.5 rounded-lg font-semibold uppercase transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Questions List (4 cols) */}
        <div className="lg:col-span-4 space-y-2.5">
          <div className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider px-1">
            {activeCategory} Question Bank ({currentQuestions.length})
          </div>

          <div className="space-y-2">
            {currentQuestions.map((q) => {
              const isSelected = selectedQuestion?.id === q.id;
              return (
                <div
                  key={q.id}
                  onClick={() => handleSelectQuestion(q)}
                  className={`p-3.5 rounded-xl border text-xs cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-cyan-950/40 border-cyan-500 shadow-md shadow-cyan-500/10'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                    <span className="uppercase">{q.category}</span>
                    <span className="text-cyan-400">{q.difficulty}</span>
                  </div>
                  <div className="font-semibold text-slate-200 line-clamp-2">
                    {q.question}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Question & Interactive Evaluation (8 cols) */}
        <div className="lg:col-span-8 space-y-5">
          {selectedQuestion ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-xs space-y-5">
              
              {/* Question Banner */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase bg-cyan-950 text-cyan-400 px-2 py-0.5 rounded border border-cyan-800/40">
                    Difficulty: {selectedQuestion.difficulty}
                  </span>
                  <button
                    onClick={() => toggleHint(selectedQuestion.id)}
                    className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-cyan-400 cursor-pointer"
                  >
                    {revealedHints[selectedQuestion.id] ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                    <span>{revealedHints[selectedQuestion.id] ? 'Hide Hint' : 'What Interviewer Tests'}</span>
                  </button>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  "{selectedQuestion.question}"
                </h3>
              </div>

              {/* Revealed Hint */}
              {revealedHints[selectedQuestion.id] && (
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5 animate-in fade-in duration-200">
                  <div className="font-semibold text-amber-400 text-[11px]">
                    What the Interviewer Is Really Looking For:
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedQuestion.whatInterviewerWants || selectedQuestion.hint}
                  </p>
                  <div className="pt-2 border-t border-slate-800/80">
                    <span className="text-[10px] uppercase font-bold text-slate-500">Key Aspects:</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {(selectedQuestion.keyAspects || selectedQuestion.keyAspectsExpected || []).map((k: string, i: number) => (
                        <span key={i} className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-[10px]">
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* User Answer Input Area */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="font-semibold text-slate-200 text-xs">
                    Your Response:
                  </label>
                  <span className="text-[11px] text-slate-500">
                    {userAnswer.split(/\s+/).filter(Boolean).length} words
                  </span>
                </div>
                <textarea
                  rows={5}
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Type your structured answer here. For behavioral questions, follow the STAR format (Situation, Task, Action, Result)..."
                  className="w-full bg-slate-950 border border-slate-700 hover:border-slate-600 focus:border-cyan-500 rounded-xl p-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 font-sans leading-relaxed"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-1">
                <button
                  type="button"
                  onClick={() => setUserAnswer(selectedQuestion.sampleGoodAnswer || `When addressing this in ${identity.profession}, I first diagnose the root constraints, implement standardized checks with quantifiable benchmarks, and align with stakeholders throughout execution.`)}
                  className="text-[11px] text-slate-400 hover:text-cyan-400 underline cursor-pointer"
                >
                  Load Model Answer
                </button>

                <button
                  onClick={handleEvaluate}
                  disabled={isEvaluating || !userAnswer.trim()}
                  className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md shadow-cyan-500/20 disabled:opacity-40 cursor-pointer"
                >
                  {isEvaluating ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      <span>Evaluating Response...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      <span>Evaluate My Answer</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Real-Time Evaluation Result */}
              {evaluation && (
                <div className="mt-5 p-5 rounded-xl bg-slate-950 border border-cyan-500/50 space-y-4 animate-in fade-in duration-200">
                  {/* Score Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <div className="h-10 w-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-base flex items-center justify-center">
                        {evaluation.score}/10
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">
                          Evaluation Score: {evaluation.score >= 8 ? 'Interview Ready' : evaluation.score >= 6 ? 'Solid Foundation' : 'Needs Technical Rigor'}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          Assessed by CAREEROS Adaptive Evaluator
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* What was good vs missing */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-900/80 p-3 rounded-xl border border-emerald-900/40">
                      <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[10px] uppercase mb-1">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>What You Did Well</span>
                      </div>
                      <p className="text-slate-300 leading-snug">{evaluation.whatWasGood}</p>
                    </div>

                    <div className="bg-slate-900/80 p-3 rounded-xl border border-amber-900/40">
                      <div className="flex items-center gap-1.5 text-amber-400 font-bold text-[10px] uppercase mb-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>What Was Missing</span>
                      </div>
                      <p className="text-slate-300 leading-snug">{evaluation.whatWasMissing}</p>
                    </div>
                  </div>

                  {/* Better Structure & Improved Version */}
                  <div className="space-y-2">
                    <div className="text-[10px] uppercase font-bold text-slate-400">
                      Recommended Restructured Answer:
                    </div>
                    <pre className="text-xs text-slate-200 font-sans whitespace-pre-wrap leading-relaxed bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                      {evaluation.improvedAnswer}
                    </pre>
                  </div>

                  {/* Follow-up question */}
                  {evaluation.followUpQuestion && (
                    <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-800/40 text-xs text-purple-200">
                      <strong>Expected Follow-Up Question:</strong> "{evaluation.followUpQuestion}"
                    </div>
                  )}
                </div>
              )}

            </div>
          ) : (
            <div className="text-center py-16 bg-slate-900 border border-slate-800 rounded-2xl text-slate-400 text-xs">
              Select any question from the left bank to begin practice.
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
