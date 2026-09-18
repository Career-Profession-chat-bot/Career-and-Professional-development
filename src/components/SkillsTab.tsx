import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Layers, 
  Wrench, 
  BookOpen, 
  Sparkles, 
  Target, 
  ArrowRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { CareerUniverse, SkillItem } from '../types/careeros';

interface SkillsTabProps {
  universe: CareerUniverse;
  onOpenProjectsTab: () => void;
}

export const SkillsTab: React.FC<SkillsTabProps> = ({
  universe,
  onOpenProjectsTab
}) => {
  const { skills, defaultSkillGaps = [] } = universe;
  const [userSkillStates, setUserSkillStates] = useState<Record<string, 'none' | 'learning' | 'mastered'>>({});
  const [activeCategory, setActiveCategory] = useState<'technical' | 'soft' | 'tools' | 'gaps'>('technical');

  const toggleSkill = (id: string) => {
    setUserSkillStates((prev) => {
      const current = prev[id] || 'none';
      const next = current === 'none' ? 'learning' : current === 'learning' ? 'mastered' : 'none';
      return { ...prev, [id]: next };
    });
  };

  const masteredCount = Object.values(userSkillStates).filter((v) => v === 'mastered').length;
  const learningCount = Object.values(userSkillStates).filter((v) => v === 'learning').length;
  const totalSkills = (skills.technicalSkills?.length || 0) + (skills.softSkills?.length || 0) + (skills.tools?.length || 0);
  const readinessPercent = totalSkills > 0 ? Math.round(((masteredCount * 1 + learningCount * 0.5) / totalSkills) * 100) : 0;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header & Personal Skill Mastery Bar */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800/40">
                Chapter 9 & 10 • Skills & Gap Engine
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
              Skill Taxonomy & Proof of Skill
            </h1>
            <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Every skill must have verifiable evidence. Click on any skill card to mark your current mastery level and track your personal skill gap.
            </p>
          </div>

          {/* Interactive Readiness Metric Ring */}
          <div className="flex items-center gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800 shrink-0">
            <div className="text-center">
              <div className="font-mono text-2xl font-bold text-cyan-400">{readinessPercent}%</div>
              <div className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Skill Preparedness</div>
            </div>
            <div className="h-10 w-px bg-slate-800" />
            <div className="text-xs space-y-1">
              <div className="text-emerald-400 font-semibold">{masteredCount} Mastered</div>
              <div className="text-cyan-400">{learningCount} In Progress</div>
              <div className="text-slate-500">{totalSkills - masteredCount - learningCount} Remaining</div>
            </div>
          </div>
        </div>

        {/* Sub Navigation */}
        <div className="flex items-center gap-2 pt-6 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveCategory('technical')}
            className={`text-xs px-4 py-2 rounded-xl font-semibold transition-all cursor-pointer ${
              activeCategory === 'technical'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Technical Skills ({skills.technicalSkills?.length || 0})
          </button>
          <button
            onClick={() => setActiveCategory('soft')}
            className={`text-xs px-4 py-2 rounded-xl font-semibold transition-all cursor-pointer ${
              activeCategory === 'soft'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Soft Skills & Communication ({skills.softSkills?.length || 0})
          </button>
          <button
            onClick={() => setActiveCategory('tools')}
            className={`text-xs px-4 py-2 rounded-xl font-semibold transition-all cursor-pointer ${
              activeCategory === 'tools'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Tools & Platforms ({skills.tools?.length || 0})
          </button>
          <button
            onClick={() => setActiveCategory('gaps')}
            className={`text-xs px-4 py-2 rounded-xl font-semibold transition-all cursor-pointer ${
              activeCategory === 'gaps'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Top Industry Skill Gaps ({defaultSkillGaps.length})
          </button>
        </div>
      </section>

      {/* Category Content */}
      <section className="space-y-4">
        {activeCategory === 'technical' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.technicalSkills?.map((skill: SkillItem) => {
              const state = userSkillStates[skill.id] || 'none';
              return (
                <div
                  key={skill.id}
                  onClick={() => toggleSkill(skill.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer text-xs flex flex-col justify-between ${
                    state === 'mastered'
                      ? 'bg-emerald-950/20 border-emerald-500/60 shadow-sm'
                      : state === 'learning'
                      ? 'bg-cyan-950/20 border-cyan-500/50 shadow-sm'
                      : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-sm font-bold text-white tracking-wide">{skill.name}</h3>
                        <span className="inline-block mt-0.5 text-[10px] font-mono font-medium text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                          {skill.level}
                        </span>
                      </div>
                      <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                        state === 'mastered'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
                          : state === 'learning'
                          ? 'bg-cyan-950 text-cyan-400 border border-cyan-500/40'
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {state === 'mastered' ? 'Mastered' : state === 'learning' ? 'In Progress' : 'Click to Track'}
                      </span>
                    </div>
                    <p className="text-slate-300 leading-relaxed mt-2">{skill.description}</p>
                  </div>

                  {/* Proof of Skill Box */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 bg-slate-950/60 p-3 rounded-xl">
                    <div className="flex items-center gap-1.5 text-amber-400 font-bold text-[10px] uppercase tracking-wider mb-1">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      <span>Required Proof of Skill</span>
                    </div>
                    <p className="text-slate-300 text-[11px] leading-snug">
                      {skill.proofOfSkill}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeCategory === 'soft' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.softSkills?.map((skill: SkillItem) => {
              const state = userSkillStates[skill.id] || 'none';
              return (
                <div
                  key={skill.id}
                  onClick={() => toggleSkill(skill.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer text-xs flex flex-col justify-between ${
                    state === 'mastered'
                      ? 'bg-emerald-950/20 border-emerald-500/60'
                      : state === 'learning'
                      ? 'bg-cyan-950/20 border-cyan-500/50'
                      : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-sm font-bold text-white tracking-wide">{skill.name}</h3>
                        <span className="inline-block mt-0.5 text-[10px] font-mono font-medium text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/40">
                          {skill.level}
                        </span>
                      </div>
                      <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                        state === 'mastered'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
                          : state === 'learning'
                          ? 'bg-cyan-950 text-cyan-400 border border-cyan-500/40'
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {state === 'mastered' ? 'Mastered' : state === 'learning' ? 'In Progress' : 'Click to Track'}
                      </span>
                    </div>
                    <p className="text-slate-300 leading-relaxed mt-2">{skill.description}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 bg-slate-950/60 p-3 rounded-xl">
                    <div className="flex items-center gap-1.5 text-purple-400 font-bold text-[10px] uppercase tracking-wider mb-1">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      <span>Behavioral Proof of Skill</span>
                    </div>
                    <p className="text-slate-300 text-[11px] leading-snug">
                      {skill.proofOfSkill}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeCategory === 'tools' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.tools?.map((tool: SkillItem) => {
              const state = userSkillStates[tool.id] || 'none';
              return (
                <div
                  key={tool.id}
                  onClick={() => toggleSkill(tool.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer text-xs flex flex-col justify-between ${
                    state === 'mastered'
                      ? 'bg-emerald-950/20 border-emerald-500/60'
                      : state === 'learning'
                      ? 'bg-cyan-950/20 border-cyan-500/50'
                      : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-sm font-bold text-white tracking-wide">{tool.name}</h3>
                        <span className="inline-block mt-0.5 text-[10px] font-mono font-medium text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/40">
                          {tool.level}
                        </span>
                      </div>
                      <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                        state === 'mastered'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
                          : state === 'learning'
                          ? 'bg-cyan-950 text-cyan-400 border border-cyan-500/40'
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {state === 'mastered' ? 'Mastered' : state === 'learning' ? 'In Progress' : 'Click to Track'}
                      </span>
                    </div>
                    <p className="text-slate-300 leading-relaxed mt-2">{tool.description}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 bg-slate-950/60 p-3 rounded-xl">
                    <div className="flex items-center gap-1.5 text-blue-400 font-bold text-[10px] uppercase tracking-wider mb-1">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      <span>Artifact Proof</span>
                    </div>
                    <p className="text-slate-300 text-[11px] leading-snug">
                      {tool.proofOfSkill}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeCategory === 'gaps' && (
          <div className="space-y-4">
            {defaultSkillGaps.map((gap, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-xs space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-rose-400" />
                    <h3 className="text-base font-bold text-white tracking-wide">{gap.skill}</h3>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-rose-950 text-rose-300 border border-rose-800/40 px-2.5 py-0.5 rounded-full">
                    Critical Gap #{idx + 1}
                  </span>
                </div>

                <p className="text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-xs leading-relaxed">
                  <strong className="text-amber-400">Why It Matters:</strong> {gap.whyItMatters}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80">
                    <div className="text-rose-400 font-semibold text-[11px] uppercase tracking-wider mb-1">Current Novice Level</div>
                    <p className="text-slate-300">{gap.currentLikelyLevel}</p>
                  </div>
                  <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800/80">
                    <div className="text-emerald-400 font-semibold text-[11px] uppercase tracking-wider mb-1">Target Job-Ready Level</div>
                    <p className="text-slate-300">{gap.targetLevel}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80">
                    <div className="text-cyan-400 font-semibold text-[10px] uppercase tracking-wider mb-1">How To Learn</div>
                    <p className="text-slate-300 leading-snug">{gap.howToLearn}</p>
                  </div>
                  <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80">
                    <div className="text-indigo-400 font-semibold text-[10px] uppercase tracking-wider mb-1">Practice Method</div>
                    <p className="text-slate-300 leading-snug">{gap.practiceMethod}</p>
                  </div>
                  <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80">
                    <div className="text-purple-400 font-semibold text-[10px] uppercase tracking-wider mb-1">Project To Prove It</div>
                    <p className="text-slate-300 leading-snug font-medium">{gap.projectToDemonstrate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
};
