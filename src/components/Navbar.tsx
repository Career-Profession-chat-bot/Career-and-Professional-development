import React from 'react';
import { 
  Compass, 
  Languages, 
  Dna, 
  MessageSquareCode, 
  Printer, 
  Search,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { LanguageOption } from '../types/careeros';

interface NavbarProps {
  currentProfession: string;
  category?: string;
  onOpenProfessionPicker: () => void;
  onOpenDnaModal: () => void;
  onToggleCoach: () => void;
  isCoachOpen: boolean;
  language: LanguageOption;
  onLanguageChange: (lang: LanguageOption) => void;
  onPrint: () => void;
  activeTab: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentProfession,
  category = 'Technology',
  onOpenProfessionPicker,
  onOpenDnaModal,
  onToggleCoach,
  isCoachOpen,
  language,
  onLanguageChange,
  onPrint
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      {/* Top Banner / System Bar */}
      <div className="flex items-center justify-between border-b border-slate-800/60 px-4 py-1.5 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[11px] font-semibold tracking-wider text-emerald-400 uppercase">CAREEROS CORE ACTIVE</span>
          <span className="text-slate-600">|</span>
          <span className="hidden sm:inline text-slate-400">CONFUSION → CLARITY → DIRECTION → SKILLS → EXPERIENCE → IDENTITY → JOB READINESS</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Languages className="h-3.5 w-3.5 text-slate-400" />
            <select
              value={language}
              onChange={(e) => onLanguageChange(e.target.value as LanguageOption)}
              className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded px-2 py-0.5 focus:outline-none focus:border-cyan-500 cursor-pointer"
              title="Select Language"
            >
              <option value="en">English</option>
              <option value="te-en">Telugu (English Script)</option>
              <option value="te">తెలుగు (Telugu)</option>
            </select>
          </div>
          <button
            onClick={onPrint}
            className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer px-1.5 py-0.5 rounded hover:bg-slate-800"
            title="Export Career Dossier"
          >
            <Printer className="h-3.5 w-3.5" />
            <span className="hidden md:inline text-[11px]">Dossier</span>
          </button>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo & Platform Name */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20">
              <Compass className="h-5 w-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold tracking-tight text-white font-mono">CAREEROS</span>
                <span className="rounded bg-cyan-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-cyan-400 border border-cyan-500/30">AI</span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">Career Professional & Development Operating System</p>
            </div>
          </div>

          {/* Active Profession Display & Switcher */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenProfessionPicker}
              className="flex items-center gap-2.5 bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500/50 rounded-xl px-3.5 py-2 transition-all cursor-pointer group shadow-sm text-left"
              title="Click to change profession or search"
            >
              <Search className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold text-white tracking-wide">{currentProfession}</span>
                  <span className="text-[10px] font-medium text-slate-400 bg-slate-800 px-1.5 py-0.2 rounded border border-slate-700/50">
                    {category}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 group-hover:text-cyan-400 transition-colors flex items-center gap-0.5">
                  Change Profession <ChevronRight className="h-3 w-3 inline" />
                </span>
              </div>
            </button>
          </div>

          {/* Core Action Tools */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenDnaModal}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-950/60 to-indigo-950/60 hover:from-purple-900/60 hover:to-indigo-900/60 border border-purple-500/30 hover:border-purple-400 text-purple-200 text-xs font-medium px-3.5 py-2 rounded-xl transition-all cursor-pointer shadow-sm"
              title="Assess your Career DNA & 9-Dimension Fit"
            >
              <Dna className="h-4 w-4 text-purple-400" />
              <span className="hidden sm:inline">Career DNA</span>
            </button>

            <button
              onClick={onToggleCoach}
              className={`flex items-center gap-2 text-xs font-medium px-3.5 py-2 rounded-xl transition-all cursor-pointer border ${
                isCoachOpen 
                  ? 'bg-cyan-500 text-slate-950 font-semibold border-cyan-400 shadow-md shadow-cyan-500/25' 
                  : 'bg-slate-900 hover:bg-slate-800 text-cyan-400 border-cyan-500/30 hover:border-cyan-400'
              }`}
              title="Open AI Career Coach Drawer"
            >
              <MessageSquareCode className="h-4 w-4" />
              <span className="hidden sm:inline">AI Coach</span>
              <Sparkles className="h-3 w-3 text-amber-300" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
