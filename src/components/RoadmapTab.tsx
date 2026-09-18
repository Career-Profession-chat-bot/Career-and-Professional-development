import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  HelpCircle, 
  AlertTriangle, 
  ArrowRight, 
  Award, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  Bookmark
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CareerUniverse, LearningStage } from '../types/careeros';

interface RoadmapTabProps {
  universe: CareerUniverse;
  onOpenProjectsTab: () => void;
}

export const RoadmapTab: React.FC<RoadmapTabProps> = ({
  universe,
  onOpenProjectsTab
}) => {
  const { learningRoadmap = [] } = universe;
  const [completedStages, setCompletedStages] = useState<Record<number, boolean>>({});
  const [expandedStage, setExpandedStage] = useState<number | null>(0);

  const toggleStageComplete = (stageNumber: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCompletedStages((prev) => {
      const nextVal = !prev[stageNumber];
      if (nextVal) {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      }
      return { ...prev, [stageNumber]: nextVal };
    });
  };

  const completedCount = Object.values(completedStages).filter(Boolean).length;
  const progressPercent = learningRoadmap.length > 0 
    ? Math.round((completedCount / learningRoadmap.length) * 100) 
    : 0;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800/40">
                Chapter 11 • 8-Stage Learning Lifecycle
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
              The Step-by-Step Learning Engine
            </h1>
            <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              From absolute zero orientation to post-hiring seniority. Never move to the next stage until you satisfy the strict exit criteria.
            </p>
          </div>

          {/* Progress Tracker */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 shrink-0 w-full sm:w-64">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-1.5">
              <span>Roadmap Completion</span>
              <span className="font-mono text-cyan-400">{progressPercent}%</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-2">
              <div
                className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="text-[11px] text-slate-400">
              {completedCount} of {learningRoadmap.length} Stages Completed
            </div>
          </div>
        </div>
      </section>

      {/* Stage Cards Timeline */}
      <div className="space-y-4">
        {learningRoadmap.map((stage: LearningStage) => {
          const isExpanded = expandedStage === stage.stageNumber;
          const isDone = completedStages[stage.stageNumber];

          return (
            <div
              key={stage.stageNumber}
              className={`rounded-2xl border transition-all text-xs overflow-hidden ${
                isDone
                  ? 'bg-slate-900/90 border-emerald-500/50 shadow-sm'
                  : isExpanded
                  ? 'bg-slate-900 border-cyan-500/50 shadow-md shadow-cyan-500/5'
                  : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Stage Collapsed Bar */}
              <div
                onClick={() => setExpandedStage(isExpanded ? null : stage.stageNumber)}
                className="flex items-center justify-between p-5 cursor-pointer select-none"
              >
                <div className="flex items-center gap-3.5">
                  <button
                    onClick={(e) => toggleStageComplete(stage.stageNumber, e)}
                    className={`h-7 w-7 rounded-lg flex items-center justify-center transition-colors cursor-pointer border ${
                      isDone
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-bold'
                        : 'bg-slate-950 text-slate-500 border-slate-700 hover:border-cyan-400'
                    }`}
                    title="Mark stage complete"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                  </button>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] font-bold text-cyan-400">
                        STAGE {stage.stageNumber}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium bg-slate-800 px-2 py-0.5 rounded">
                        {stage.duration}
                      </span>
                      {isDone && (
                        <span className="text-[10px] font-bold text-emerald-400 uppercase bg-emerald-950 px-2 py-0.2 rounded border border-emerald-800/50">
                          Completed
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-bold text-white mt-0.5">{stage.title}</h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-slate-400 hidden sm:inline">
                    {isExpanded ? 'Collapse' : 'View Details'}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="h-4 w-4 text-slate-400" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-slate-400" />
                  )}
                </div>
              </div>

              {/* Stage Expanded Details */}
              {isExpanded && (
                <div className="px-5 pb-6 pt-2 border-t border-slate-800/80 space-y-4">
                  {/* Why to learn */}
                  <div className="bg-cyan-950/20 border border-cyan-900/30 p-3.5 rounded-xl text-cyan-200">
                    <strong>Why This Stage Matters:</strong> {stage.whyToLearn}
                  </div>

                  {/* What to learn */}
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Core Topics & Concepts
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {stage.whatToLearn.map((topic, i) => (
                        <div key={i} className="bg-slate-950/70 border border-slate-800 rounded-xl p-2.5 flex items-start gap-2">
                          <span className="text-cyan-400 font-bold">•</span>
                          <span className="text-slate-200">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Suggested practice & Expected outcome */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                      <div className="text-indigo-400 font-semibold text-[10px] uppercase tracking-wider mb-1">Suggested Practice</div>
                      <p className="text-slate-300 leading-relaxed">{stage.suggestedPractice}</p>
                    </div>
                    <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                      <div className="text-emerald-400 font-semibold text-[10px] uppercase tracking-wider mb-1">Expected Tangible Outcome</div>
                      <p className="text-slate-300 leading-relaxed font-medium">{stage.expectedOutcome}</p>
                    </div>
                  </div>

                  {/* Common Mistakes */}
                  {stage.commonMistakes && stage.commonMistakes.length > 0 && (
                    <div className="bg-slate-950/80 border border-amber-900/30 p-3.5 rounded-xl">
                      <div className="flex items-center gap-1.5 text-amber-400 font-bold text-[10px] uppercase tracking-wider mb-1.5">
                        <AlertTriangle className="h-3.5 w-3.5" />
                        <span>Common Stage Traps to Avoid</span>
                      </div>
                      <ul className="space-y-1 text-slate-300">
                        {stage.commonMistakes.map((m, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-amber-400">•</span>
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Exit Criteria / Ready Checklist */}
                  <div className="bg-emerald-950/20 border border-emerald-800/40 p-3.5 rounded-xl">
                    <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[10px] uppercase tracking-wider mb-1">
                      <Award className="h-3.5 w-3.5" />
                      <span>Stage Exit Verification Checklist</span>
                    </div>
                    <p className="text-slate-200 font-medium">
                      {stage.readyCriteria}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
