import React, { useState } from 'react';
import { 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  RefreshCw, 
  ShieldAlert, 
  Tag, 
  Wand2 
} from 'lucide-react';
import { CareerUniverse, LanguageOption } from '../types/careeros';
import { optimizeResumeBullet } from '../services/careerosApi';

interface ResumeTabProps {
  universe: CareerUniverse;
  language: LanguageOption;
}

export const ResumeTab: React.FC<ResumeTabProps> = ({ universe, language }) => {
  const { identity } = universe;
  const resumeAdvice = universe.resumeAdvice || {
    formula: universe.resumeIntelligence?.bulletPointFormula || 'Action Verb + Technical Context + Quantifiable Metric = Impact',
    atsKeywords: universe.resumeIntelligence?.professionSpecificKeywords || ['Architecture', 'Performance', 'Testing', 'Optimization', 'Security'],
    bulletPointExamples: (universe.resumeIntelligence?.bulletExamples || []).map(b => ({
      before: b.before,
      after: b.after,
      explanation: b.impactExplanation
    })),
    antiFabricationWarning: universe.resumeIntelligence?.antiFabricationNotice || 'Never invent credentials or inflate metrics.'
  };

  const [inputDraft, setInputDraft] = useState('Built a website using React and Node for managing tasks.');
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [enhancedResult, setEnhancedResult] = useState<any>(null);

  const handleEnhanceBullet = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputDraft.trim() || isEnhancing) return;

    setIsEnhancing(true);
    try {
      const result = await optimizeResumeBullet(inputDraft, identity.profession, language);
      setEnhancedResult(result);
    } catch (err) {
      console.error(err);
    } finally {
      setIsEnhancing(false);
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
                Chapter 14 • Resume Architecture & ATS Intelligence
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
              Resume Intelligence & ATS Optimization
            </h1>
            <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Every bullet point must prove competence with tools and metrics. Avoid generic responsibility statements.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs shrink-0 max-w-md">
            <div className="font-mono text-emerald-400 font-bold uppercase text-[10px] tracking-wider mb-1">
              CAREEROS Bullet Point Formula:
            </div>
            <div className="text-slate-200 font-medium">
              [Strong Action Verb] + [Specific Technical Tool/Framework] + [Context/Problem Solved] + [Quantifiable Metric/Outcome]
            </div>
          </div>
        </div>
      </section>

      {/* 1. Interactive AI Bullet Point Enhancer */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-sm text-xs space-y-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            <Wand2 className="h-4 w-4" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white tracking-tight">Interactive AI Resume Bullet Enhancer</h2>
            <p className="text-slate-400 text-xs">Test and rewrite weak resume draft bullets into ATS-verified achievements.</p>
          </div>
        </div>

        <form onSubmit={handleEnhanceBullet} className="space-y-3">
          <div className="relative">
            <textarea
              rows={3}
              value={inputDraft}
              onChange={(e) => setInputDraft(e.target.value)}
              placeholder="Paste any simple resume bullet (e.g. 'Responsible for building backend APIs in Python and fixing bugs')..."
              className="w-full bg-slate-950 border border-slate-700 hover:border-slate-600 focus:border-cyan-500 rounded-xl p-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 font-sans"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isEnhancing || !inputDraft.trim()}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md shadow-cyan-500/20 disabled:opacity-40 cursor-pointer"
            >
              {isEnhancing ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  <span>Optimizing Bullet...</span>
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  <span>Enhance with Metric Formula</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Enhanced Result Box */}
        {enhancedResult && (
          <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-cyan-500/40 space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/50">
                Optimized ATS Bullet (Click to copy)
              </span>
              <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3" /> Formula Verified
              </span>
            </div>

            <div 
              onClick={() => {
                navigator.clipboard.writeText(enhancedResult.optimizedBullet);
                alert('Copied bullet to clipboard!');
              }}
              className="p-3.5 rounded-lg bg-slate-900 border border-slate-700 text-sm font-mono text-emerald-300 font-medium cursor-pointer hover:border-emerald-400 transition-colors"
            >
              "{enhancedResult.optimizedBullet}"
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-300 pt-1">
              <div>
                <strong className="text-slate-400">Action Verb:</strong> {enhancedResult.actionVerbUsed}
              </div>
              <div>
                <strong className="text-slate-400">Tech Added:</strong> {enhancedResult.technicalContextAdded}
              </div>
              <div className="sm:col-span-2">
                <strong className="text-slate-400">Quantifiable Metric:</strong> {enhancedResult.metricFramework}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 2. ATS Keyword Cloud */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-xs space-y-4">
        <div className="flex items-center gap-2">
          <Tag className="h-4 w-4 text-cyan-400" />
          <h2 className="text-base font-bold text-white tracking-tight">Essential ATS Keywords for {identity.profession}</h2>
        </div>
        <p className="text-slate-400 text-xs">
          ATS parsers screen for these exact tokens. Naturally incorporate them across your experience and skills sections.
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {resumeAdvice.atsKeywords.map((kw: string, idx: number) => (
            <span
              key={idx}
              className="bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/50 px-3 py-1.5 rounded-lg font-mono text-xs transition-colors"
            >
              {kw}
            </span>
          ))}
        </div>
      </section>

      {/* 3. Real Before & After Transformations */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-xs space-y-4">
        <h2 className="text-base font-bold text-white tracking-tight">Before vs After Bullet Transformations</h2>
        <div className="space-y-3">
          {resumeAdvice.bulletPointExamples.map((ex: any, idx: number) => (
            <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-rose-400 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-800/40">
                  Weak (Task Description)
                </span>
                <p className="text-xs text-slate-400 line-through mt-1">
                  "{ex.before}"
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-800/80">
                <span className="text-[10px] font-mono uppercase font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  Transformed (Impact & Metrics)
                </span>
                <p className="text-xs font-mono text-slate-200 mt-1">
                  "{ex.after}"
                </p>
              </div>

              <div className="text-[11px] text-slate-400 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/60">
                <strong className="text-cyan-400">Improvement Breakdown:</strong> {ex.impact}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Anti-Fabrication Warning */}
      <div className="p-4 rounded-xl bg-amber-950/25 border border-amber-800/40 text-xs text-amber-200 flex items-start gap-3">
        <ShieldAlert className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <strong>CAREEROS Anti-Fabrication Rule:</strong> Never list a tool, library, or system on your resume that you have not personally run, configured, and debugged. Technical interviewers target the least confident line on your resume. If you list Docker or Kubernetes, be prepared to write a multi-stage Dockerfile or explain container networking on a whiteboard.
        </div>
      </div>

    </div>
  );
};
