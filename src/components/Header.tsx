import React from 'react';
import { Compass, RotateCcw, Sparkles, BookOpen, Lightbulb, User, ShieldCheck } from 'lucide-react';
import { AssessmentMode } from '../types/tki';

interface HeaderProps {
  currentStep: number;
  totalSteps: number;
  isCompleted: boolean;
  onReset: () => void;
  userName?: string;
  mode?: AssessmentMode;
  currentView: 'survey' | 'research' | 'roadmap';
  onNavigateView: (view: 'survey' | 'research' | 'roadmap') => void;
  onOpenAuth?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentStep,
  totalSteps,
  isCompleted,
  onReset,
  userName,
  mode,
  currentView,
  onNavigateView,
  onOpenAuth,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo & Title */}
        <div
          onClick={() => onNavigateView('survey')}
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group select-none shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300 shrink-0">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Compass className="w-5 h-5 text-indigo-400 group-hover:rotate-45 transition-transform duration-500" />
            </div>
          </div>
          <div className="shrink-0">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm sm:text-base tracking-wider bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent whitespace-nowrap">
                TKI BRASIL
              </span>
              <span className="hidden xl:inline-flex px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 whitespace-nowrap">
                Thomas-Kilmann • IE & CNV
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block whitespace-nowrap">
              Instrumento de Gestão de Conflitos
            </p>
          </div>
        </div>

        {/* View Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => onNavigateView('survey')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
              currentView === 'survey'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Questionário ({currentStep}/{totalSteps})</span>
          </button>
          <button
            onClick={() => onNavigateView('research')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
              currentView === 'research'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Fundamentação Científica</span>
          </button>
          <button
            onClick={() => onNavigateView('roadmap')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
              currentView === 'roadmap'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Aplicações Práticas</span>
          </button>
        </nav>

        {/* User Info & Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {(!userName || userName === 'Participante Anônimo' || userName === 'Participante') && onOpenAuth && (
            <button
              onClick={onOpenAuth}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer"
              title="Identificar participante"
            >
              <User className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden sm:inline">Identificar</span>
            </button>
          )}

          {userName && userName !== 'Participante Anônimo' && (
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs shrink-0 max-w-[150px] sm:max-w-[200px]">
              <User className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span className="font-medium text-slate-200 truncate">
                {userName}
              </span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded font-medium shrink-0 hidden sm:inline ${
                  mode === 'cloud_sync'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                {mode === 'cloud_sync' ? 'Sincronizado' : 'Local'}
              </span>
            </div>
          )}

          {/* Reset Button */}
          <button
            onClick={onReset}
            title="Reiniciar avaliação do zero"
            className="p-2 rounded-lg bg-slate-900/80 hover:bg-red-950/40 border border-slate-800 hover:border-red-500/40 text-slate-400 hover:text-red-400 transition-all flex items-center gap-1 text-xs cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Reiniciar</span>
          </button>
        </div>
      </div>

      {/* Mobile Sub-Navigation Tabs */}
      <div className="flex md:hidden border-t border-slate-800/60 px-4 py-2 bg-slate-950/90 gap-1 overflow-x-auto">
        <button
          onClick={() => onNavigateView('survey')}
          className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap ${
            currentView === 'survey'
              ? 'bg-indigo-600 text-white'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          📝 Questionário ({currentStep}/{totalSteps})
        </button>
        <button
          onClick={() => onNavigateView('research')}
          className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap ${
            currentView === 'research'
              ? 'bg-indigo-600 text-white'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          🔬 Ciência TKI
        </button>
        <button
          onClick={() => onNavigateView('roadmap')}
          className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap ${
            currentView === 'roadmap'
              ? 'bg-amber-600 text-white'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          💡 Casos Práticos
        </button>
      </div>
    </header>
  );
};
