import React, { useEffect } from 'react';
import { TKIQuestionItem } from '../types/tki';
import { ArrowLeft, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface TKIQuestionCardProps {
  question: TKIQuestionItem;
  questionIndex: number;
  totalQuestions: number;
  selectedOption?: 'A' | 'B';
  onSelectOption: (questionId: number, option: 'A' | 'B') => void;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  canSubmit: boolean;
}

export const TKIQuestionCard: React.FC<TKIQuestionCardProps> = ({
  question,
  questionIndex,
  totalQuestions,
  selectedOption,
  onSelectOption,
  onPrevious,
  onNext,
  onSubmit,
  canSubmit,
}) => {
  // Keyboard navigation: 'A' or '1' selects A, 'B' or '2' selects B, ArrowLeft previous, ArrowRight next
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;
      if (e.key === 'a' || e.key === 'A' || e.key === '1') {
        onSelectOption(question.id, 'A');
      } else if (e.key === 'b' || e.key === 'B' || e.key === '2') {
        onSelectOption(question.id, 'B');
      } else if (e.key === 'ArrowLeft') {
        onPrevious();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [question.id, onSelectOption, onPrevious, onNext]);

  return (
    <div className="w-full rounded-2xl glass-card-glow p-5 sm:p-8 border border-indigo-500/20 shadow-2xl space-y-6 animate-fadeIn">
      {/* Question Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
            QUESTÃO {questionIndex + 1} DE {totalQuestions}
          </span>
          <span className="text-xs text-slate-400">Escolha Forçada (A ou B)</span>
        </div>
        <div className="text-xs text-slate-400 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Atalhos: Teclas [A]/[B] ou [1]/[2]</span>
        </div>
      </div>

      {/* Prompt Instruction */}
      <div>
        <h3 className="text-sm sm:text-base font-semibold text-slate-200 leading-relaxed">
          Diante de uma discordância ou conflito de interesses no ambiente profissional, qual destas afirmações melhor expressa a sua reação habitual?
        </h3>
      </div>

      {/* Two Choice Cards (A & B) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {/* Option A */}
        <div
          onClick={() => onSelectOption(question.id, 'A')}
          className={`p-5 sm:p-6 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex flex-col justify-between relative group select-none ${
            selectedOption === 'A'
              ? 'bg-indigo-950/40 border-indigo-500 shadow-lg shadow-indigo-500/20 scale-[1.01]'
              : 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900/90'
          }`}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors ${
                  selectedOption === 'A'
                    ? 'bg-indigo-500 text-white'
                    : 'bg-slate-800 text-slate-300 group-hover:bg-indigo-950 group-hover:text-indigo-300'
                }`}
              >
                Opção A
              </span>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">
                Atalho: [A] ou [1]
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
              {question.options.A.text}
            </p>
          </div>

          <div className="pt-4 flex items-center justify-end">
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                selectedOption === 'A'
                  ? 'border-indigo-500 bg-indigo-500 text-white'
                  : 'border-slate-700 bg-slate-950 text-transparent group-hover:border-indigo-400'
              }`}
            >
              {selectedOption === 'A' && <span className="text-xs font-bold">✓</span>}
            </div>
          </div>
        </div>

        {/* Option B */}
        <div
          onClick={() => onSelectOption(question.id, 'B')}
          className={`p-5 sm:p-6 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex flex-col justify-between relative group select-none ${
            selectedOption === 'B'
              ? 'bg-indigo-950/40 border-indigo-500 shadow-lg shadow-indigo-500/20 scale-[1.01]'
              : 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900/90'
          }`}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors ${
                  selectedOption === 'B'
                    ? 'bg-indigo-500 text-white'
                    : 'bg-slate-800 text-slate-300 group-hover:bg-indigo-950 group-hover:text-indigo-300'
                }`}
              >
                Opção B
              </span>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">
                Atalho: [B] ou [2]
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
              {question.options.B.text}
            </p>
          </div>

          <div className="pt-4 flex items-center justify-end">
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                selectedOption === 'B'
                  ? 'border-indigo-500 bg-indigo-500 text-white'
                  : 'border-slate-700 bg-slate-950 text-transparent group-hover:border-indigo-400'
              }`}
            >
              {selectedOption === 'B' && <span className="text-xs font-bold">✓</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/80">
        <button
          onClick={onPrevious}
          disabled={questionIndex === 0}
          className="px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Anterior</span>
        </button>

        <div className="flex items-center gap-2">
          {questionIndex < totalQuestions - 1 ? (
            <button
              onClick={onNext}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Próxima Questão</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onSubmit}
              disabled={!canSubmit}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 via-indigo-600 to-purple-600 hover:from-emerald-500 hover:via-indigo-500 hover:to-purple-500 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Concluir e Ver Relatório</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
