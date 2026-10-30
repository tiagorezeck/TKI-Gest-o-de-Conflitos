import React from 'react';

interface ProgressBarProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  answersMap: Record<number, 'A' | 'B'>;
  onJumpToQuestion: (index: number) => void;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentQuestionIndex,
  totalQuestions,
  answersMap,
  onJumpToQuestion,
}) => {
  const answeredCount = Object.keys(answersMap).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  return (
    <div className="w-full rounded-2xl glass-card p-4 sm:p-5 border border-slate-800 shadow-xl space-y-4">
      {/* Top status info */}
      <div className="flex items-center justify-between text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-200">
            Progresso da Avaliação:
          </span>
          <span className="font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
            {answeredCount} de {totalQuestions} respondidas ({progressPercent}%)
          </span>
        </div>
        <div className="text-slate-400 text-xs hidden sm:block">
          Questão ativa: <span className="text-white font-semibold">#{currentQuestionIndex + 1}</span>
        </div>
      </div>

      {/* Progress Track */}
      <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 shadow-sm shadow-indigo-500/50"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Mini Question Matrix (30 grid buttons) */}
      <div className="pt-1">
        <div className="grid grid-cols-10 sm:grid-cols-15 gap-1.5 sm:gap-2">
          {Array.from({ length: totalQuestions }).map((_, idx) => {
            const questionId = idx + 1;
            const isAnswered = !!answersMap[questionId];
            const isCurrent = idx === currentQuestionIndex;

            let btnClass = 'bg-slate-900/80 border-slate-800 text-slate-500 hover:border-slate-700';
            if (isAnswered) {
              btnClass = 'bg-indigo-600/20 border-indigo-500/50 text-indigo-300 font-semibold';
            }
            if (isCurrent) {
              btnClass = 'bg-indigo-600 border-indigo-400 text-white font-bold ring-2 ring-indigo-500/40 scale-105';
            }

            return (
              <button
                key={questionId}
                onClick={() => onJumpToQuestion(idx)}
                title={`Ir para Questão ${questionId} ${
                  isAnswered ? '(Respondida: ' + answersMap[questionId] + ')' : '(Pendente)'
                }`}
                className={`h-7 sm:h-8 rounded-lg border text-[11px] sm:text-xs flex items-center justify-center transition-all cursor-pointer ${btnClass}`}
              >
                {questionId}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
