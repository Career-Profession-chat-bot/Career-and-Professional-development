import React, { useState } from 'react';
import { X, Search, Sparkles, TrendingUp, DollarSign, Award, ArrowRight } from 'lucide-react';
import { CAREER_CATALOG, CATEGORIES, CareerCatalogItem } from '../data/careerCatalog';

interface ProfessionPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProfession: (professionName: string) => void;
  currentProfession: string;
}

export const ProfessionPickerModal: React.FC<ProfessionPickerModalProps> = ({
  isOpen,
  onClose,
  onSelectProfession,
  currentProfession
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');

  if (!isOpen) return null;

  const filteredItems = CAREER_CATALOG.filter((item) => {
    const matchesCategory = selectedCategory === 'All Categories' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSelectProfession(searchQuery.trim());
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-slate-900/80">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <Sparkles className="h-4 w-4" />
              </span>
              <h2 className="text-xl font-bold tracking-tight text-white">Select Any Profession</h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Choose from the curated CareerOS database or type <span className="text-cyan-400 font-medium">any custom profession</span> to generate its complete Career Universe.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search & Custom Input Bar */}
        <div className="p-6 pb-3 border-b border-slate-800 bg-slate-950/40">
          <form onSubmit={handleCustomSubmit} className="relative flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search or type ANY profession (e.g. AI Engineer, Doctor, Chartered Accountant, Pilot, Marine Biologist)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 hover:border-slate-600 focus:border-cyan-500 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all"
                autoFocus
              />
            </div>
            {searchQuery.trim() && (
              <button
                type="submit"
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-xs px-4 py-3 rounded-xl transition-all shadow-md shadow-cyan-500/20 cursor-pointer shrink-0"
              >
                <span>Build CareerOS</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </form>

          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-3 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3 py-1 rounded-lg whitespace-nowrap transition-all cursor-pointer font-medium ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                    : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-700/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Catalog Grid */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {filteredItems.map((item: CareerCatalogItem) => {
                const isSelected = item.name.toLowerCase() === currentProfession.toLowerCase();
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSelectProfession(item.name);
                      onClose();
                    }}
                    className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between group ${
                      isSelected
                        ? 'bg-cyan-950/40 border-cyan-500 shadow-md shadow-cyan-500/10'
                        : 'bg-slate-950/50 hover:bg-slate-850/80 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {item.name}
                          </h3>
                          <span className="inline-block mt-0.5 text-[10px] font-medium text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                            {item.category}
                          </span>
                        </div>
                        {item.presetAvailable && (
                          <span className="text-[10px] font-mono font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full shrink-0">
                            Instant OS
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                        {item.shortDescription}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-2 mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                      <div className="flex items-center gap-1 text-slate-300">
                        <DollarSign className="h-3 w-3 text-emerald-400" />
                        <span>{item.averageStartingComp}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="h-3 w-3 text-amber-400" />
                        <span>{item.difficultyRating}</span>
                      </div>
                      <div className="flex items-center gap-1 font-mono text-cyan-400">
                        <TrendingUp className="h-3 w-3" />
                        <span>{item.trendingScore}%</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 px-4">
              <Sparkles className="h-10 w-10 text-cyan-400 mx-auto mb-3 opacity-60" />
              <h4 className="text-base font-semibold text-white">No preset matched "{searchQuery}"</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
                CAREEROS AI can build an operating system for <span className="text-cyan-400 font-medium font-semibold">{searchQuery}</span> using deep domain synthesis.
              </p>
              <button
                onClick={() => {
                  onSelectProfession(searchQuery);
                  onClose();
                }}
                className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
              >
                <span>Generate Universe for "{searchQuery}"</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between text-xs text-slate-400">
          <span>CAREEROS AI Core • 20 Chapters • 49 Pillars of Mastery</span>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
