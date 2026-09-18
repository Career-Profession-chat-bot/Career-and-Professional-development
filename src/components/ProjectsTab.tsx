import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  ExternalLink, 
  Github, 
  Code, 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  HelpCircle, 
  FileText, 
  ArrowUpRight,
  Flame,
  Award
} from 'lucide-react';
import { CareerUniverse, ProjectSpec } from '../types/careeros';

interface ProjectsTabProps {
  universe: CareerUniverse;
  onOpenInterviewTab: () => void;
}

export const ProjectsTab: React.FC<ProjectsTabProps> = ({
  universe,
  onOpenInterviewTab
}) => {
  const { projects } = universe;
  const [activeTier, setActiveTier] = useState<'all' | 'flagship' | 'advanced' | 'intermediate' | 'beginner'>('all');
  const [projectStatus, setProjectStatus] = useState<Record<string, 'planned' | 'in-progress' | 'shipped'>>({
    [projects.flagship.id]: 'in-progress'
  });

  const updateStatus = (id: string, status: 'planned' | 'in-progress' | 'shipped') => {
    setProjectStatus((prev) => ({ ...prev, [id]: status }));
  };

  const renderProjectCard = (proj: ProjectSpec, isFlagship = false) => {
    const status = projectStatus[proj.id] || 'planned';

    return (
      <div
        key={proj.id}
        className={`rounded-2xl border transition-all p-6 text-xs space-y-5 ${
          isFlagship
            ? 'bg-gradient-to-b from-slate-900 to-cyan-950/30 border-cyan-500/60 shadow-lg shadow-cyan-500/10'
            : 'bg-slate-900 border-slate-800 hover:border-slate-700'
        }`}
      >
        {/* Card Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              {isFlagship ? (
                <span className="flex items-center gap-1 font-mono text-[10px] font-bold uppercase bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 px-2.5 py-0.5 rounded-full shadow-sm">
                  <Flame className="h-3 w-3" /> Flagship Capstone
                </span>
              ) : (
                <span className="font-mono text-[10px] font-bold uppercase bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                  {proj.level} Tier
                </span>
              )}
              <span className="flex items-center gap-1 text-[11px] text-slate-400">
                <Clock className="h-3 w-3" /> {proj.expectedTime}
              </span>
              <span className="text-[11px] text-slate-400">
                • {proj.difficulty}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mt-1.5">
              {proj.title}
            </h3>
          </div>

          {/* Status Selector */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 self-start">
            <button
              onClick={() => updateStatus(proj.id, 'planned')}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase transition-all cursor-pointer ${
                status === 'planned' ? 'bg-slate-800 text-white' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              Planned
            </button>
            <button
              onClick={() => updateStatus(proj.id, 'in-progress')}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase transition-all cursor-pointer ${
                status === 'in-progress' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              In Progress
            </button>
            <button
              onClick={() => updateStatus(proj.id, 'shipped')}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase transition-all cursor-pointer ${
                status === 'shipped' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              Shipped
            </button>
          </div>
        </div>

        {/* Problem Statement & Objective */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800">
            <div className="text-rose-400 font-bold text-[10px] uppercase tracking-wider mb-1">
              Real-World Problem Statement
            </div>
            <p className="text-slate-300 leading-relaxed">{proj.problem}</p>
          </div>
          <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800">
            <div className="text-cyan-400 font-bold text-[10px] uppercase tracking-wider mb-1">
              Technical / Operational Objective
            </div>
            <p className="text-slate-300 leading-relaxed">{proj.objective}</p>
          </div>
        </div>

        {/* Tech Stack & Features */}
        <div className="space-y-2">
          <div className="flex flex-wrap gap-1.5 items-center">
            <span className="text-slate-500 font-semibold text-[10px] uppercase mr-1">Skills & Tools:</span>
            {proj.skillsUsed.concat(proj.tools || []).map((t, idx) => (
              <span key={idx} className="bg-slate-800 text-slate-200 px-2 py-0.5 rounded font-mono text-[11px] border border-slate-700/60">
                {t}
              </span>
            ))}
          </div>

          <div className="bg-slate-950/50 p-3.5 rounded-xl border border-slate-800">
            <div className="text-slate-400 font-bold text-[10px] uppercase tracking-wider mb-1.5">
              Core Technical Features to Implement
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {proj.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-1.5 text-slate-300">
                  <CheckCircle className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio & Resume Leverage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
            <div className="text-purple-400 font-bold text-[10px] uppercase tracking-wider mb-1 flex items-center gap-1">
              <Award className="h-3 w-3" />
              <span>Portfolio Presentation Strategy</span>
            </div>
            <p className="text-slate-300 leading-relaxed">{proj.portfolioPresentation}</p>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
            <div className="text-emerald-400 font-bold text-[10px] uppercase tracking-wider mb-1 flex items-center gap-1">
              <FileText className="h-3 w-3" />
              <span>Resume Bullet Formula</span>
            </div>
            <p className="text-slate-200 font-medium leading-relaxed font-mono text-[11px]">
              "{proj.resumeBulletPossibilities[0]}"
            </p>
          </div>
        </div>

        {/* Interview Questions Expected */}
        {proj.interviewQuestionsExpected && proj.interviewQuestionsExpected.length > 0 && (
          <div className="bg-amber-950/20 border border-amber-800/30 p-3.5 rounded-xl">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold text-[10px] uppercase tracking-wider">
                <HelpCircle className="h-3.5 w-3.5" />
                <span>Interviewers Will Ask You About This Project</span>
              </div>
              <button
                onClick={onOpenInterviewTab}
                className="text-[10px] text-amber-300 hover:text-amber-200 underline cursor-pointer"
              >
                Practice in Mock Simulator →
              </button>
            </div>
            <div className="space-y-1">
              {proj.interviewQuestionsExpected.map((q, idx) => (
                <div key={idx} className="text-slate-300 font-medium">
                  • "{q}"
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800/40">
                Chapter 12 • Proof-of-Work Project Engine
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
              Production Projects: Proof Over Paper
            </h1>
            <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Recruiters and hiring managers ignore tutorial clones. Build verified, production-grade applications that solve real-world problems.
            </p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTier('all')}
              className={`text-xs px-3.5 py-2 rounded-xl font-semibold transition-all cursor-pointer ${
                activeTier === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveTier('flagship')}
              className={`text-xs px-3.5 py-2 rounded-xl font-semibold transition-all cursor-pointer ${
                activeTier === 'flagship'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-950 text-amber-400 hover:text-white border border-slate-800'
              }`}
            >
              Flagship Only
            </button>
            <button
              onClick={() => setActiveTier('intermediate')}
              className={`text-xs px-3.5 py-2 rounded-xl font-semibold transition-all cursor-pointer ${
                activeTier === 'intermediate'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Intermediate
            </button>
            <button
              onClick={() => setActiveTier('beginner')}
              className={`text-xs px-3.5 py-2 rounded-xl font-semibold transition-all cursor-pointer ${
                activeTier === 'beginner'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Beginner
            </button>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <div className="space-y-6">
        {(activeTier === 'all' || activeTier === 'flagship') && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                The Centerpiece Portfolio Asset
              </span>
            </div>
            {renderProjectCard(projects.flagship, true)}
          </div>
        )}

        {(activeTier === 'all' || activeTier === 'advanced') && projects.advanced && projects.advanced.length > 0 && (
          <div className="space-y-4">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              Advanced Production Projects
            </div>
            {projects.advanced.map((p) => renderProjectCard(p, false))}
          </div>
        )}

        {(activeTier === 'all' || activeTier === 'intermediate') && projects.intermediate && projects.intermediate.length > 0 && (
          <div className="space-y-4">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              Intermediate Full-Stack Projects
            </div>
            {projects.intermediate.map((p) => renderProjectCard(p, false))}
          </div>
        )}

        {(activeTier === 'all' || activeTier === 'beginner') && projects.beginner && projects.beginner.length > 0 && (
          <div className="space-y-4">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              Foundational Beginner Projects
            </div>
            {projects.beginner.map((p) => renderProjectCard(p, false))}
          </div>
        )}
      </div>

    </div>
  );
};
