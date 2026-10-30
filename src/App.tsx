import React, { useState, useEffect } from 'react';
import { QUESTIONS_30 } from './data/questions30';
import {
  UserProfile,
  TKIAssessmentResult,
  UserAuth,
} from './types/tki';
import { calculateTKIAssessment } from './engine/tkiScoringEngine';
import { exportReportToPDF } from './utils/pdfExport';
import { submitTKIAssessmentData } from './utils/webhook';
import { getStoredAuth, saveStoredAuth } from './utils/auth';

import { Header } from './components/Header';
import { ProgressBar } from './components/ProgressBar';
import { TKIQuestionCard } from './components/TKIQuestionCard';
import { TKIReport } from './components/TKIReport';
import { OnboardingModal } from './components/OnboardingModal';
import { AuthGateModal } from './components/AuthGateModal';
import { ResearchPage } from './components/ResearchPage';
import { RoadmapPage } from './components/RoadmapPage';
import { PDFExportView } from './components/PDFExportView';

import { BookOpen, Lightbulb } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  const [currentView, setCurrentView] = useState<'survey' | 'research' | 'roadmap'>('survey');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answersMap, setAnswersMap] = useState<Record<number, 'A' | 'B'>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [result, setResult] = useState<TKIAssessmentResult | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState<boolean>(false);
  const [isAuthGateOpen, setIsAuthGateOpen] = useState<boolean>(false);
  const [isExportingPDF, setIsExportingPDF] = useState<boolean>(false);
  const [webhookStatus, setWebhookStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Load state from localStorage on init
  useEffect(() => {
    try {
      const savedAnswers = localStorage.getItem('tki_answers_map_br');
      if (savedAnswers) {
        setAnswersMap(JSON.parse(savedAnswers));
      }

      const savedResult = localStorage.getItem('tki_last_result_br');
      if (savedResult) {
        const parsed = JSON.parse(savedResult);
        setResult(parsed);
        setIsCompleted(true);
      }

      const savedProfile = localStorage.getItem('tki_user_profile_br');
      if (savedProfile) {
        setUserProfile(JSON.parse(savedProfile));
      } else {
        const auth = getStoredAuth();
        if (auth) {
          const prof: UserProfile = {
            fullName: auth.full_name,
            email: auth.email,
            organizationOrRole: auth.organization || auth.role || '',
            mode: 'local_anonymous',
          };
          setUserProfile(prof);
        } else {
          // Open onboarding if brand new user
          setIsOnboardingOpen(true);
        }
      }
    } catch (e) {
      console.warn('Erro ao restaurar dados do localStorage:', e);
    }
  }, []);

  const handleStartOnboarding = (profile: UserProfile) => {
    setUserProfile(profile);
    setIsOnboardingOpen(false);
    try {
      localStorage.setItem('tki_user_profile_br', JSON.stringify(profile));
    } catch (e) {
      console.warn(e);
    }
  };

  const handleAuthVerified = (auth: UserAuth) => {
    const prof: UserProfile = {
      fullName: auth.full_name,
      email: auth.email,
      organizationOrRole: auth.organization || '',
      mode: 'cloud_sync',
    };
    setUserProfile(prof);
    setIsAuthGateOpen(false);
    try {
      localStorage.setItem('tki_user_profile_br', JSON.stringify(prof));
    } catch (e) {
      console.warn(e);
    }

    if (result) {
      const updated = { ...result, userProfile: prof };
      setResult(updated);
      try {
        localStorage.setItem('tki_last_result_br', JSON.stringify(updated));
      } catch (e) {
        console.warn(e);
      }
      submitTKIAssessmentData(updated);
    }
  };

  const handleSelectOption = (questionId: number, option: 'A' | 'B') => {
    const nextAnswers = {
      ...answersMap,
      [questionId]: option,
    };
    setAnswersMap(nextAnswers);

    try {
      localStorage.setItem('tki_answers_map_br', JSON.stringify(nextAnswers));
    } catch (e) {
      console.warn(e);
    }

    // Auto advance smoothly after 250ms if not at end
    if (currentQuestionIndex < QUESTIONS_30.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex((prev) => Math.min(prev + 1, QUESTIONS_30.length - 1));
      }, 250);
    }
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => Math.min(prev + 1, QUESTIONS_30.length - 1));
  };

  const handleJumpToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const handleSubmit = async () => {
    const profile: UserProfile = userProfile || {
      fullName: 'Participante',
      email: '',
      organizationOrRole: '',
      mode: 'local_anonymous',
    };

    const calculated = calculateTKIAssessment(answersMap, profile);
    setResult(calculated);
    setIsCompleted(true);

    try {
      localStorage.setItem('tki_last_result_br', JSON.stringify(calculated));
    } catch (e) {
      console.warn(e);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (err) {
      // Ignore if confetti not supported
    }

    if (profile.mode === 'cloud_sync') {
      setWebhookStatus('loading');
      const ok = await submitTKIAssessmentData(calculated);
      setWebhookStatus(ok ? 'success' : 'error');
    } else {
      setWebhookStatus('idle');
    }
  };

  const handleSyncCloud = async (name: string, email: string, org: string) => {
    if (!result) return;
    const updatedProfile: UserProfile = {
      fullName: name || 'Participante',
      email: email,
      organizationOrRole: org,
      mode: 'cloud_sync',
    };

    setUserProfile(updatedProfile);
    saveStoredAuth({
      full_name: updatedProfile.fullName,
      email: updatedProfile.email,
      organization: updatedProfile.organizationOrRole,
      status: 'verified',
    });

    try {
      localStorage.setItem('tki_user_profile_br', JSON.stringify(updatedProfile));
    } catch (e) {
      console.warn(e);
    }

    const updatedResult: TKIAssessmentResult = {
      ...result,
      userProfile: updatedProfile,
    };
    setResult(updatedResult);

    try {
      localStorage.setItem('tki_last_result_br', JSON.stringify(updatedResult));
    } catch (e) {
      console.warn(e);
    }

    setWebhookStatus('loading');
    const ok = await submitTKIAssessmentData(updatedResult);
    setWebhookStatus(ok ? 'success' : 'error');
  };

  const handleReset = () => {
    if (window.confirm('Tem certeza de que deseja reiniciar o questionário TKI do início? Suas respostas atuais serão redefinidas.')) {
      setAnswersMap({});
      setResult(null);
      setIsCompleted(false);
      setCurrentQuestionIndex(0);
      try {
        localStorage.removeItem('tki_answers_map_br');
        localStorage.removeItem('tki_last_result_br');
      } catch (e) {
        console.warn(e);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleExportPDF = async () => {
    if (!result) return;
    setIsExportingPDF(true);
    try {
      const cleanName = (result.userProfile.fullName || 'Participante').replace(/\s+/g, '_');
      const filename = `Relatorio_Conflitos_TKI_${cleanName}.pdf`;
      await exportReportToPDF('pdf-export-container', filename);
    } catch (err) {
      console.error('Erro ao exportar PDF:', err);
      alert('Não foi possível gerar o PDF no momento. Por favor, tente novamente.');
    } finally {
      setIsExportingPDF(false);
    }
  };

  const totalAnswered = Object.keys(answersMap).length;
  const canSubmit = totalAnswered === QUESTIONS_30.length;
  const currentQuestion = QUESTIONS_30[currentQuestionIndex];
  const currentMode = userProfile?.mode || 'local_anonymous';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Header */}
      <Header
        currentStep={totalAnswered}
        totalSteps={QUESTIONS_30.length}
        isCompleted={isCompleted}
        onReset={handleReset}
        userName={userProfile?.fullName}
        mode={currentMode}
        currentView={currentView}
        onNavigateView={(v) => setCurrentView(v)}
        onOpenAuth={() => setIsAuthGateOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 w-full">
        {currentView === 'research' ? (
          <ResearchPage onBackToSurvey={() => setCurrentView('survey')} />
        ) : currentView === 'roadmap' ? (
          <RoadmapPage
            onBackToSurvey={() => setCurrentView('survey')}
            onNavigateToResearch={() => setCurrentView('research')}
          />
        ) : (
          <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10">
            {!isCompleted ? (
              <div className="space-y-8 animate-fadeIn max-w-3xl mx-auto">
                <ProgressBar
                  currentQuestionIndex={currentQuestionIndex}
                  totalQuestions={QUESTIONS_30.length}
                  answersMap={answersMap}
                  onJumpToQuestion={handleJumpToQuestion}
                />

                <TKIQuestionCard
                  question={currentQuestion}
                  questionIndex={currentQuestionIndex}
                  totalQuestions={QUESTIONS_30.length}
                  selectedOption={answersMap[currentQuestion.id]}
                  onSelectOption={handleSelectOption}
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                  onSubmit={handleSubmit}
                  canSubmit={canSubmit}
                />

                {/* Helpful Hint */}
                <div className="text-center text-xs text-slate-400 space-y-2 pt-2">
                  <p>
                    💡 Dica: Confie no seu reflexo intuitivo imediato para que a medição reflita com fidelidade seus hábitos cotidianos.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => setCurrentView('research')}
                      className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 underline underline-offset-4 text-xs font-medium cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Metodologia & Modelo TKI 1974 ➔</span>
                    </button>
                    <span>•</span>
                    <button
                      onClick={() => setCurrentView('roadmap')}
                      className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 underline underline-offset-4 text-xs font-medium cursor-pointer"
                    >
                      <Lightbulb className="w-3.5 h-3.5" />
                      <span>Aplicações Corporativas ➔</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              result && (
                <TKIReport
                  result={result}
                  onReset={handleReset}
                  onExportPDF={handleExportPDF}
                  isExporting={isExportingPDF}
                  webhookStatus={webhookStatus}
                  onSyncCloud={handleSyncCloud}
                />
              )
            )}
          </div>
        )}
      </main>

      {/* Hidden Printable PDF Canvas Element */}
      <div
        className="fixed left-[-9999px] top-[-9999px] overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {result && <PDFExportView result={result} />}
      </div>

      {/* Onboarding Modal */}
      <OnboardingModal
        isOpen={isOnboardingOpen}
        onStart={handleStartOnboarding}
      />

      {/* Auth / Profile Modal */}
      <AuthGateModal
        isOpen={isAuthGateOpen}
        onVerified={handleAuthVerified}
        onClose={() => setIsAuthGateOpen(false)}
      />

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-500 space-y-2">
        <p>
          Instrumento de Avaliação de Modos de Conflito Thomas-Kilmann (TKI 1974) • Integrado a Inteligência Emocional (IE) & Comunicação Não-Violenta (CNV)
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-slate-400">
          <button
            onClick={() => setCurrentView('survey')}
            className="hover:text-indigo-400 transition-colors cursor-pointer"
          >
            📝 Responder Questionário
          </button>
          <span>•</span>
          <button
            onClick={() => setCurrentView('research')}
            className="hover:text-indigo-400 transition-colors font-medium text-indigo-400 cursor-pointer"
          >
            🔬 Fundamentação Teórica
          </button>
          <span>•</span>
          <button
            onClick={() => setCurrentView('roadmap')}
            className="hover:text-amber-400 transition-colors font-medium text-amber-400 cursor-pointer"
          >
            💡 Roteiro de Aplicação
          </button>
        </div>
      </footer>
    </div>
  );
}
