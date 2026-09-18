import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Layers, 
  BookOpen, 
  Hammer, 
  Award, 
  FileText, 
  MessageSquareCode, 
  Target, 
  Sparkles, 
  RefreshCw, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  Dna,
  ArrowRight
} from 'lucide-react';
import { CareerUniverse, LanguageOption, CareerDNA } from './types/careeros';
import { getCareerUniverse } from './services/careerosApi';
import { Navbar } from './components/Navbar';
import { ProfessionPickerModal } from './components/ProfessionPickerModal';
import { CareerDnaModal } from './components/CareerDnaModal';
import { CareerCoachDrawer } from './components/CareerCoachDrawer';
import { OverviewTab } from './components/OverviewTab';
import { SkillsTab } from './components/SkillsTab';
import { RoadmapTab } from './components/RoadmapTab';
import { ProjectsTab } from './components/ProjectsTab';
import { IdentityTab } from './components/IdentityTab';
import { ResumeTab } from './components/ResumeTab';
import { InterviewTab } from './components/InterviewTab';
import { MissionsTab } from './components/MissionsTab';

type TabKey = 'overview' | 'skills' | 'roadmap' | 'projects' | 'identity' | 'resume' | 'interview' | 'missions';

export default function App() {
  const [currentProfession, setCurrentProfession] = useState<string>('Software Developer');
  const [universe, setUniverse] = useState<CareerUniverse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [language, setLanguage] = useState<LanguageOption>('en');
  const [activeTab, setActiveTab] = useState<TabKey>('overview');
  
  // Modals & Drawers
  const [isProfessionPickerOpen, setIsProfessionPickerOpen] = useState<boolean>(false);
  const [isDnaModalOpen, setIsDnaModalOpen] = useState<boolean>(false);
  const [isCoachOpen, setIsCoachOpen] = useState<boolean>(false);
  const [userDna, setUserDna] = useState<CareerDNA | null>(null);

  // Load or fetch Career Universe
  useEffect(() => {
    let isMounted = true;
    async function loadUniverse() {
      setIsLoading(true);
      try {
        const data = await getCareerUniverse(currentProfession, language);
        if (isMounted) {
          setUniverse(data);
        }
      } catch (err) {
        console.error('Failed to load Career Universe:', err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadUniverse();

    return () => {
      isMounted = false;
    };
  }, [currentProfession, language]);

  const handleSelectProfession = (newProfession: string) => {
    setCurrentProfession(newProfession);
    setActiveTab('overview');
  };

  const handlePrint = () => {
    window.print();
  };

  const tabs: { key: TabKey; label: string; icon: React.ReactNode; badge?: string }[] = [
    { key: 'overview', label: '1. Overview & Reality', icon: <Compass className="h-4 w-4" /> },
    { key: 'skills', label: '2. Skills & Gaps', icon: <Layers className="h-4 w-4" /> },
    { key: 'roadmap', label: '3. 8-Stage Roadmap', icon: <BookOpen className="h-4 w-4" /> },
    { key: 'projects', label: '4. Proof of Work', icon: <Hammer className="h-4 w-4" />, badge: 'Flagship' },
    { key: 'identity', label: '5. Positioning & Pitch', icon: <Award className="h-4 w-4" /> },
    { key: 'resume', label: '6. Resume & ATS', icon: <FileText className="h-4 w-4" /> },
    { key: 'interview', label: '7. Mock Simulator', icon: <MessageSquareCode className="h-4 w-4" /> },
    { key: 'missions', label: '8. Action Playbooks', icon: <Target className="h-4 w-4" /> },
  ];

  // Lifecycle loop stages mapping to tabs
  const lifecycleSteps: { name: string; tab: TabKey }[] = [
    { name: 'ASSESS', tab: 'overview' },
    { name: 'PLAN', tab: 'roadmap' },
    { name: 'LEARN', tab: 'roadmap' },
    { name: 'PRACTICE', tab: 'skills' },
    { name: 'BUILD', tab: 'projects' },
    { name: 'SHOW', tab: 'identity' },
    { name: 'APPLY', tab: 'resume' },
    { name: 'INTERVIEW', tab: 'interview' },
    { name: 'WORK', tab: 'missions' },
    { name: 'ADVANCE', tab: 'missions' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Top Navbar */}
      <Navbar
        currentProfession={currentProfession}
        category={universe?.identity.domainCategory || 'Career'}
        onOpenProfessionPicker={() => setIsProfessionPickerOpen(true)}
        onOpenDnaModal={() => setIsDnaModalOpen(true)}
        onToggleCoach={() => setIsCoachOpen(!isCoachOpen)}
        isCoachOpen={isCoachOpen}
        language={language}
        onLanguageChange={setLanguage}
        onPrint={handlePrint}
        activeTab={activeTab}
      />

      {/* CareerOS Lifecycle Loop Ribbon */}
      <div className="border-b border-slate-800/80 bg-slate-900/40 py-2.5 px-4 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-400 uppercase tracking-wider shrink-0 font-bold">
            <Sparkles className="h-3 w-3 text-cyan-400" />
            <span>CAREEROS LOOP:</span>
          </div>

          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            {lifecycleSteps.map((step, idx) => {
              const isActive = activeTab === step.tab;
              return (
                <React.Fragment key={step.name}>
                  <button
                    onClick={() => setActiveTab(step.tab)}
                    className={`font-mono text-[10px] font-bold px-2.5 py-1 rounded-md transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-cyan-500 text-slate-950 font-extrabold shadow-sm'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                    }`}
                  >
                    {step.name}
                  </button>
                  {idx < lifecycleSteps.length - 1 && (
                    <span className="text-slate-600 text-[10px]">→</span>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2 text-[11px] text-slate-400 shrink-0">
            {userDna?.evaluatedScores ? (
              <span className="flex items-center gap-1 text-purple-400 font-semibold bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/40">
                <Dna className="h-3 w-3" /> DNA Fit: {userDna.evaluatedScores.overallFit}%
              </span>
            ) : (
              <button
                onClick={() => setIsDnaModalOpen(true)}
                className="text-purple-400 hover:text-purple-300 underline cursor-pointer"
              >
                + Run DNA Diagnostics
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Navigation Tabs Bar */}
        <div className="flex items-center gap-1.5 border-b border-slate-800/80 pb-3 overflow-x-auto no-scrollbar mb-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/15'
                    : 'bg-slate-900/80 hover:bg-slate-850 text-slate-400 hover:text-slate-200 border border-slate-800/80'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`text-[9px] font-mono uppercase px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-slate-950 text-amber-300' : 'bg-amber-950/80 text-amber-400 border border-amber-800/50'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="py-24 text-center space-y-4">
            <RefreshCw className="h-10 w-10 text-cyan-400 mx-auto animate-spin" />
            <h3 className="text-base font-bold text-white tracking-tight">
              Synthesizing CareerOS Universe for {currentProfession}...
            </h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Architecting 20 Chapters of domain intelligence, 8-stage learning paths, flagship project specifications, and adaptive interview banks.
            </p>
          </div>
        )}

        {/* Active Tab View Rendering */}
        {!isLoading && universe && (
          <div className="pb-16">
            {activeTab === 'overview' && (
              <OverviewTab
                universe={universe}
                onOpenDnaModal={() => setIsDnaModalOpen(true)}
                onOpenProjectsTab={() => setActiveTab('projects')}
              />
            )}

            {activeTab === 'skills' && (
              <SkillsTab
                universe={universe}
                onOpenProjectsTab={() => setActiveTab('projects')}
              />
            )}

            {activeTab === 'roadmap' && (
              <RoadmapTab
                universe={universe}
                onOpenProjectsTab={() => setActiveTab('projects')}
              />
            )}

            {activeTab === 'projects' && (
              <ProjectsTab
                universe={universe}
                onOpenInterviewTab={() => setActiveTab('interview')}
              />
            )}

            {activeTab === 'identity' && (
              <IdentityTab universe={universe} />
            )}

            {activeTab === 'resume' && (
              <ResumeTab
                universe={universe}
                language={language}
              />
            )}

            {activeTab === 'interview' && (
              <InterviewTab
                universe={universe}
                language={language}
              />
            )}

            {activeTab === 'missions' && (
              <MissionsTab universe={universe} />
            )}
          </div>
        )}
      </main>

      {/* Modals & Slide-out Drawers */}
      <ProfessionPickerModal
        isOpen={isProfessionPickerOpen}
        onClose={() => setIsProfessionPickerOpen(false)}
        onSelectProfession={handleSelectProfession}
        currentProfession={currentProfession}
      />

      <CareerDnaModal
        isOpen={isDnaModalOpen}
        onClose={() => setIsDnaModalOpen(false)}
        profession={currentProfession}
        language={language}
        onDnaEvaluated={(evaluated) => setUserDna(evaluated)}
      />

      <CareerCoachDrawer
        isOpen={isCoachOpen}
        onClose={() => setIsCoachOpen(false)}
        profession={currentProfession}
        language={language}
      />

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-slate-400">CAREEROS AI</span>
            <span>•</span>
            <span>Career Professional & Development Operating System</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>CONFUSION → CLARITY → DIRECTION → SKILLS → EXPERIENCE → JOB READINESS</span>
            <span>•</span>
            <span className="text-cyan-400 font-mono">v3.0 Production</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
