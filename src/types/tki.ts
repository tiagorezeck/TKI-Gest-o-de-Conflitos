export type TKIMode = 'competing' | 'collaborating' | 'compromising' | 'avoiding' | 'accommodating';

export type TKICode = 'CP' | 'CL' | 'CO' | 'AV' | 'AC';

export type PercentileLevel = 'low' | 'medium' | 'high';

export type AssessmentMode = 'local_anonymous' | 'cloud_sync';

export interface TKIQuestionOption {
  label: 'A' | 'B';
  text: string;
  mode: TKIMode;
  code: TKICode;
}

export interface TKIQuestionItem {
  id: number;
  options: {
    A: TKIQuestionOption;
    B: TKIQuestionOption;
  };
}

export interface UserProfile {
  fullName: string;
  email: string;
  organizationOrRole: string;
  mode: AssessmentMode;
}

export interface ModeScore {
  mode: TKIMode;
  code: TKICode;
  rawScore: number; // 0 - 12
  maxScore: number; // 12
  percentage: number; // rawScore / 30 * 100
  percentileLevel: PercentileLevel;
  percentileLabel: string; // Baixo (0-25%), Médio (25-75%), Alto (75-100%)
  normDescription: string;
}

export interface ModeLevelDetail {
  levelTitle: string;
  meaning: string;
  behaviorSigns: string[];
  calibrationTip: string;
}

export interface ModeProfile {
  id: TKIMode;
  code: TKICode;
  portugueseName: string;
  englishName: string;
  tagline: string;
  icon: string;
  color: {
    bg: string;
    border: string;
    text: string;
    accent: string;
    glow: string;
  };
  dimensions: {
    assertiveness: 'Alta' | 'Média' | 'Baixa';
    cooperativeness: 'Alta' | 'Média' | 'Baixa';
    winLoseRatio: string;
  };
  overview: string;
  whenToUse: string[];
  strengths: string[];
  overuseRisks: string[]; // Riscos de superutilização (>75%)
  underuseRisks: string[]; // Riscos de subutilização (<25%)
  levelInterpretations: Record<PercentileLevel, ModeLevelDetail>;
  eiReflectionQuestions: string[]; // Autorreflexão com Inteligência Emocional
  nvcActionSteps: string[]; // 4 passos de Comunicação Não-Violenta (CNV)
  communicationTips: string[];
  collaborationTips: {
    targetMode: TKIMode;
    advice: string;
  }[];
}

export interface UserAnswerRecord {
  questionId: number;
  selectedOption: 'A' | 'B';
  selectedText: string;
  mode: TKIMode;
  code: TKICode;
}

export interface TKIAssessmentResult {
  dominantMode: TKIMode;
  secondaryMode: TKIMode;
  scores: Record<TKIMode, ModeScore>;
  totalScore: number;
  userProfile: UserProfile;
  answers: Record<number, 'A' | 'B'>;
  answerRecords: UserAnswerRecord[];
  completedAt: string;
  overusedModes: TKIMode[];
  underusedModes: TKIMode[];
  matrixCoords: {
    assertiveness: number; // 0 - 100
    cooperativeness: number; // 0 - 100
  };
}

export interface UserAuth {
  lead_id?: string;
  full_name: string;
  phone?: string;
  email: string;
  organization?: string;
  role?: string;
  status: 'verified' | 'anonymous';
  verified_at?: string;
  expires_at?: string;
}
