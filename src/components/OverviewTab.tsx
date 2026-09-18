import React, { useState } from 'react';
import { 
  Building2, 
  Briefcase, 
  Clock, 
  AlertCircle, 
  HelpCircle, 
  ThumbsUp, 
  ThumbsDown, 
  GraduationCap, 
  CheckCircle, 
  Award, 
  Sparkles, 
  Compass, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp,
  Layers,
  Calendar,
  Users
} from 'lucide-react';
import { CareerUniverse } from '../types/careeros';

interface OverviewTabProps {
  universe: CareerUniverse;
  onOpenDnaModal: () => void;
  onOpenProjectsTab: () => void;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({
  universe,
  onOpenDnaModal,
  onOpenProjectsTab
}) => {
  const [activeEducationTab, setActiveEducationTab] = useState<'traditional' | 'alternative' | 'switch' | 'advanced'>('traditional');
  const [expandedMyth, setExpandedMyth] = useState<number | null>(null);

  const {
    identity,
    reality,
    realityCheck,
    mythsVsReality = [],
    prosAndCons,
    audienceFit,
    educationAndEligibility
  } = universe;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* 1. Identity & Purpose Header Card */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800/40">
                Chapter 1 & 2 • Identity & Purpose
              </span>
              <span className="text-xs text-slate-500 font-mono">| Last Audited {universe.lastUpdated || '2026'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
              {identity.profession}
            </h1>
            <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
              {identity.mainPurpose}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenDnaModal}
              className="bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md shadow-purple-600/20 cursor-pointer"
            >
              Take DNA Reality Test
            </button>
            <button
              onClick={onOpenProjectsTab}
              className="bg-slate-800 hover:bg-slate-700 text-cyan-400 hover:text-cyan-300 font-semibold text-xs px-4 py-2.5 rounded-xl border border-slate-700 transition-all cursor-pointer"
            >
              View Flagship Project
            </button>
          </div>
        </div>

        {/* Identity Quick Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-xs">
          <div>
            <div className="text-slate-400 font-semibold uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
              <Briefcase className="h-3.5 w-3.5 text-cyan-400" />
              Core Problem Solved
            </div>
            <p className="text-slate-200 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
              {identity.problemSolved}
            </p>
          </div>

          <div>
            <div className="text-slate-400 font-semibold uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
              <Building2 className="h-3.5 w-3.5 text-blue-400" />
              Where They Work
            </div>
            <div className="flex flex-wrap gap-1.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
              {identity.whereTheyWork.map((place, idx) => (
                <span key={idx} className="bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded text-[11px]">
                  {place}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="text-slate-400 font-semibold uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5 text-emerald-400" />
              Common Title Variations
            </div>
            <div className="flex flex-wrap gap-1.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
              {identity.titleVariations.map((title, idx) => (
                <span key={idx} className="bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded text-[11px]">
                  {title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Unromanticized Truth & Reality Check */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded-md border border-amber-800/40">
            Chapter 3 & 4 • Unromanticized Reality
          </span>
        </div>
        <h2 className="text-xl font-bold text-white tracking-tight">The Reality Check: What Nobody Tells You</h2>
        
        {/* Highlight Quote */}
        <div className="mt-4 p-4 rounded-xl bg-amber-950/30 border border-amber-800/40 text-xs sm:text-sm text-amber-200 leading-relaxed font-medium">
          "{reality.unromanticizedTruth}"
        </div>

        {/* What looks attractive vs What is actually difficult */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider mb-3">
              <ThumbsUp className="h-4 w-4" />
              <span>What Looks Attractive (Social Media Version)</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {realityCheck.whatLooksAttractive.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5">
            <div className="flex items-center gap-2 text-rose-400 font-semibold text-xs uppercase tracking-wider mb-3">
              <ThumbsDown className="h-4 w-4" />
              <span>What Is Actually Difficult (The Everyday Strain)</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {realityCheck.whatIsActuallyDifficult.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Workday Timeline */}
        {reality.typicalWorkdayTimeline && reality.typicalWorkdayTimeline.length > 0 && (
          <div className="mt-6 pt-6 border-t border-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="h-4 w-4 text-cyan-400" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                A Realistic Day in the Life (Timeline)
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {reality.typicalWorkdayTimeline.map((slot, idx) => (
                <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs">
                  <div className="flex items-center justify-between font-mono text-[11px] text-cyan-400 mb-1">
                    <span>{slot.time}</span>
                    <span className="text-slate-500 font-sans text-[10px]">Slot {idx + 1}</span>
                  </div>
                  <div className="font-semibold text-white">{slot.task}</div>
                  <div className="text-slate-400 mt-1 leading-snug">{slot.detail}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Beginner Misunderstandings */}
        <div className="mt-6 pt-6 border-t border-slate-800">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="h-4 w-4 text-amber-400" />
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Top Beginner Misunderstandings
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {reality.beginnerMisunderstandings.map((mis, idx) => (
              <div key={idx} className="bg-slate-950/80 border border-slate-800 rounded-xl p-3.5 text-xs text-slate-300 leading-relaxed">
                <span className="font-bold text-amber-400 block mb-1">Myth #{idx + 1}</span>
                {mis}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Myths vs Reality Interactive Cards */}
      {mythsVsReality.length > 0 && (
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-400 bg-purple-950/60 px-2.5 py-1 rounded-md border border-purple-800/40">
              Chapter 5 • Myths vs Reality
            </span>
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight">Popular Myths Debunked with Ground Truth</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            {mythsVsReality.map((item, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                    Common Myth:
                  </div>
                  <p className="text-xs font-semibold text-slate-200 mb-3">
                    "{item.myth}"
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800/80">
                  <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Ground Reality:
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.reality}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. Reality Matrix: Compensation, Stress, Competition & Growth */}
      {prosAndCons.realityMatrix && (
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800/40">
              Chapter 6 • Reality Matrix
            </span>
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight">The 10-Point Career Reality Matrix</h2>
          <p className="text-xs text-slate-400 mt-1">
            An objective rating of demands, earning capability, and working conditions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-5">
            {prosAndCons.realityMatrix.map((item, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs">
                <div className="text-slate-400 font-medium text-[11px] uppercase tracking-wider">{item.area}</div>
                <div className="font-bold text-white text-sm mt-0.5 text-cyan-400">{item.reality}</div>
                <p className="text-slate-400 text-[11px] mt-2 leading-relaxed border-t border-slate-800/60 pt-2">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. Audience Fit & The 7-Day Try-Before-Commit Test */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/40">
            Chapter 7 • Audience Fit & Mini-Experiment
          </span>
        </div>
        <h2 className="text-xl font-bold text-white tracking-tight">Who May Enjoy vs Who May Struggle</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <div className="bg-slate-950/80 border border-emerald-900/30 rounded-xl p-5">
            <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">
              Likely to Enjoy This Profession
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {audienceFit.whoMayEnjoy.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-950/80 border border-rose-900/30 rounded-xl p-5">
            <h3 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-3">
              Likely to Find This Painful or Exhausting
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {audienceFit.whoMayFindChallenging.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <AlertCircle className="h-3.5 w-3.5 text-rose-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 7-Day Experiment Box */}
        {audienceFit.tryBeforeCommit && (
          <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 to-purple-950/40 border border-indigo-700/40">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-purple-400 tracking-wider">
                  Mandatory Reality Verification
                </span>
                <h3 className="text-base font-bold text-white mt-0.5">
                  {audienceFit.tryBeforeCommit.title}
                </h3>
              </div>
              <span className="text-xs font-medium text-purple-300 bg-purple-900/50 px-3 py-1 rounded-full border border-purple-700/40 self-start">
                7 Days • 1 Hour/Day
              </span>
            </div>
            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              {audienceFit.tryBeforeCommit.experimentDescription}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {audienceFit.tryBeforeCommit.testTasks.map((task, idx) => (
                <div key={idx} className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3 flex items-start gap-2.5">
                  <span className="font-mono text-[10px] font-bold text-indigo-400 bg-indigo-950/80 px-1.5 py-0.5 rounded border border-indigo-800/60 shrink-0">
                    Day {idx + 1}
                  </span>
                  <span className="text-slate-300 leading-snug">{task}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 6. Education, Routes & Eligibility */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded-md border border-blue-800/40">
            Chapter 8 • Routes & Eligibility
          </span>
        </div>
        <h2 className="text-xl font-bold text-white tracking-tight">4 Pathways to Entry: Which One Fits You?</h2>
        
        {/* Route Selector Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-800 mt-4 pb-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveEducationTab('traditional')}
            className={`text-xs px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
              activeEducationTab === 'traditional'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            1. Traditional Degree
          </button>
          <button
            onClick={() => setActiveEducationTab('alternative')}
            className={`text-xs px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
              activeEducationTab === 'alternative'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            2. Self-Taught & Bootcamps
          </button>
          <button
            onClick={() => setActiveEducationTab('switch')}
            className={`text-xs px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
              activeEducationTab === 'switch'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            3. Career Switcher Pivot
          </button>
          <button
            onClick={() => setActiveEducationTab('advanced')}
            className={`text-xs px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
              activeEducationTab === 'advanced'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            4. Advanced & Specialization
          </button>
        </div>

        {/* Active Route Content */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mt-4 text-xs">
          {activeEducationTab === 'traditional' && educationAndEligibility.traditionalRoute && (
            <div>
              <h3 className="text-sm font-bold text-white mb-1">{educationAndEligibility.traditionalRoute.name}</h3>
              <p className="text-slate-300 mb-4">{educationAndEligibility.traditionalRoute.detail}</p>
              <div className="space-y-2">
                <div className="font-semibold text-slate-400 uppercase text-[10px] tracking-wider">Step-by-Step Sequence:</div>
                {educationAndEligibility.traditionalRoute.sequence.map((step, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-200">
                    <span className="font-mono text-cyan-400 font-bold">{i + 1}.</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeEducationTab === 'alternative' && educationAndEligibility.alternativeRoute && (
            <div>
              <h3 className="text-sm font-bold text-white mb-1">{educationAndEligibility.alternativeRoute.name}</h3>
              <p className="text-slate-300 mb-4">{educationAndEligibility.alternativeRoute.detail}</p>
              <div className="space-y-2">
                <div className="font-semibold text-slate-400 uppercase text-[10px] tracking-wider">Step-by-Step Sequence:</div>
                {educationAndEligibility.alternativeRoute.sequence.map((step, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-200">
                    <span className="font-mono text-cyan-400 font-bold">{i + 1}.</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeEducationTab === 'switch' && educationAndEligibility.careerSwitchRoute && (
            <div>
              <h3 className="text-sm font-bold text-white mb-1">{educationAndEligibility.careerSwitchRoute.name}</h3>
              <p className="text-slate-300 mb-4">{educationAndEligibility.careerSwitchRoute.detail}</p>
              <div className="space-y-2">
                <div className="font-semibold text-slate-400 uppercase text-[10px] tracking-wider">Step-by-Step Sequence:</div>
                {educationAndEligibility.careerSwitchRoute.sequence.map((step, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-200">
                    <span className="font-mono text-cyan-400 font-bold">{i + 1}.</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeEducationTab === 'advanced' && educationAndEligibility.advancedRoute && (
            <div>
              <h3 className="text-sm font-bold text-white mb-1">{educationAndEligibility.advancedRoute.name}</h3>
              <p className="text-slate-300 mb-4">{educationAndEligibility.advancedRoute.detail}</p>
              <div className="space-y-2">
                <div className="font-semibold text-slate-400 uppercase text-[10px] tracking-wider">Step-by-Step Sequence:</div>
                {educationAndEligibility.advancedRoute.sequence.map((step, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-200">
                    <span className="font-mono text-cyan-400 font-bold">{i + 1}.</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Mandatory vs Optional Clarification */}
        <div className="mt-4 p-4 rounded-xl bg-blue-950/30 border border-blue-800/40 text-xs text-blue-200">
          <strong>Mandatory vs Optional Clarification:</strong> {educationAndEligibility.mandatoryVsOptionalClarification}
        </div>
      </section>

    </div>
  );
};
