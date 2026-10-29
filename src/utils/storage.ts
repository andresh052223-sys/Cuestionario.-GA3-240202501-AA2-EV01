import { PracticeSessionResult, QuestionCategory, UserGlobalProgress } from '../types/quiz';

const STORAGE_KEY = 'sena_english_practice_progress_v1';

export const INITIAL_PROGRESS: UserGlobalProgress = {
  totalPracticesCompleted: 0,
  totalQuestionsAnswered: 0,
  totalCorrect: 0,
  totalSkipped: 0,
  categoryStats: {
    modal_verbs: { attempted: 0, correct: 0 },
    first_second_conditionals: { attempted: 0, correct: 0 },
    third_mixed_conditionals: { attempted: 0, correct: 0 },
    scrambled_sentences: { attempted: 0, correct: 0 },
    reading_comprehension: { attempted: 0, correct: 0 },
    mixed_grammar: { attempted: 0, correct: 0 }
  },
  history: []
};

export function loadUserProgress(): UserGlobalProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_PROGRESS;
    const parsed = JSON.parse(raw);
    return {
      ...INITIAL_PROGRESS,
      ...parsed,
      categoryStats: {
        ...INITIAL_PROGRESS.categoryStats,
        ...(parsed.categoryStats || {})
      }
    };
  } catch (err) {
    console.error('Failed to load user progress from localStorage', err);
    return INITIAL_PROGRESS;
  }
}

export function savePracticeSession(
  result: PracticeSessionResult,
  questionCategoryMap: Record<string, QuestionCategory>
): UserGlobalProgress {
  const current = loadUserProgress();

  const updatedStats = { ...current.categoryStats };

  result.records.forEach((record) => {
    if (!record.isSkipped && record.selectedAnswer !== null) {
      const category = questionCategoryMap[record.questionId];
      if (category && updatedStats[category]) {
        updatedStats[category].attempted += 1;
        if (record.isCorrect) {
          updatedStats[category].correct += 1;
        }
      }
    }
  });

  const updatedProgress: UserGlobalProgress = {
    totalPracticesCompleted: current.totalPracticesCompleted + 1,
    totalQuestionsAnswered: current.totalQuestionsAnswered + result.answeredCount,
    totalCorrect: current.totalCorrect + result.correctCount,
    totalSkipped: current.totalSkipped + result.skippedCount,
    categoryStats: updatedStats,
    history: [result, ...current.history].slice(0, 30) // keep last 30 sessions
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProgress));
  } catch (err) {
    console.error('Failed to save user progress', err);
  }

  return updatedProgress;
}

export function resetUserProgress(): UserGlobalProgress {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Failed to clear user progress', err);
  }
  return INITIAL_PROGRESS;
}
