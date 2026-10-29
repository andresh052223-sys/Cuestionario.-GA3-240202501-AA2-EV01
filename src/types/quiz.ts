export type QuestionCategory =
  | 'modal_verbs'
  | 'first_second_conditionals'
  | 'third_mixed_conditionals'
  | 'scrambled_sentences'
  | 'reading_comprehension'
  | 'mixed_grammar';

export interface AnswerOption {
  id: 'A' | 'B' | 'C' | 'D' | 'True' | 'False';
  text: string;
}

export interface Question {
  id: string;
  category: QuestionCategory;
  categoryLabel: string;
  difficulty: 'easy' | 'intermediate' | 'advanced';
  prompt: string;
  contextText?: string; // e.g. scrambled word bank "(an / I / be / now / artist / would)" or intro
  options: AnswerOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'True' | 'False';
  explanationEnglish: string;
  grammarStructure?: string;
  exampleSentences: string[];
  explanationSpanish: string;
  commonDistractorNote?: string;
  rememberTip?: string;
  readingPassageId?: string;
}

export interface ReadingPassage {
  id: string;
  title: string;
  authorOrSubject: string;
  wordCount: number;
  content: string[]; // paragraphs
  contentSpanish: string[]; // translated paragraphs in Spanish
  summarySpanish: string;
}

export type PracticeMode =
  | 'quick15' // 15-question Practice Test
  | 'complete60' // All 60 questions
  | 'category' // Specific grammar category
  | 'reading'; // Reading comprehension

export interface UserAnswerRecord {
  questionId: string;
  selectedAnswer: string | null;
  isCorrect: boolean;
  isSkipped: boolean;
  timeSpentSeconds?: number;
}

export interface PracticeSessionResult {
  id: string;
  mode: PracticeMode;
  category?: QuestionCategory;
  date: string;
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  incorrectCount: number;
  skippedCount: number;
  scorePercentage: number;
  records: UserAnswerRecord[];
}

export interface UserGlobalProgress {
  totalPracticesCompleted: number;
  totalQuestionsAnswered: number;
  totalCorrect: number;
  totalSkipped: number;
  categoryStats: Record<QuestionCategory, { attempted: number; correct: number }>;
  history: PracticeSessionResult[];
}
