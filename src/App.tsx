import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HomeScreen } from './components/HomeScreen';
import { PracticeScreen } from './components/PracticeScreen';
import { ResultsScreen } from './components/ResultsScreen';
import { GrammarReviewScreen } from './components/GrammarReviewScreen';
import { ProgressScreen } from './components/ProgressScreen';
import { questionsData, CATEGORY_INFO } from './data/questionsData';
import {
  PracticeMode,
  Question,
  QuestionCategory,
  PracticeSessionResult,
  UserAnswerRecord,
  UserGlobalProgress
} from './types/quiz';
import {
  loadUserProgress,
  savePracticeSession,
  INITIAL_PROGRESS
} from './utils/storage';

type AppView = 'home' | 'practice' | 'results' | 'grammar' | 'progress';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [practiceMode, setPracticeMode] = useState<PracticeMode>('quick15');
  const [activeCategory, setActiveCategory] = useState<QuestionCategory | undefined>(undefined);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [sessionTitle, setSessionTitle] = useState<string>('15-Question Practice Test');
  const [lastRecords, setLastRecords] = useState<UserAnswerRecord[]>([]);
  const [userProgress, setUserProgress] = useState<UserGlobalProgress>(INITIAL_PROGRESS);

  // Load progress from localStorage on mount
  useEffect(() => {
    const loaded = loadUserProgress();
    setUserProgress(loaded);
  }, []);

  // Map questionId -> QuestionCategory for quick category lookup
  const questionCategoryMap = useMemo(() => {
    const map: Record<string, QuestionCategory> = {};
    questionsData.forEach((q) => {
      map[q.id] = q.category;
    });
    return map;
  }, []);

  // Select questions for practice session
  const prepareQuestions = (mode: PracticeMode, category?: QuestionCategory): { questions: Question[]; title: string } => {
    if (mode === 'complete60') {
      return {
        questions: [...questionsData],
        title: 'Complete 60-Question Practice'
      };
    }

    if (mode === 'reading') {
      const readingQs = questionsData.filter((q) => q.category === 'reading_comprehension');
      return {
        questions: readingQs,
        title: 'Reading Comprehension: Daniel Goleman'
      };
    }

    if (mode === 'category' && category) {
      const catQs = questionsData.filter((q) => q.category === category);
      const catInfo = CATEGORY_INFO[category];
      return {
        questions: catQs,
        title: catInfo ? catInfo.title : 'Category Practice'
      };
    }

    // Default: quick15 (15 questions sampled across all 6 categories)
    const shuffle = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

    const modQ = shuffle(questionsData.filter((q) => q.category === 'modal_verbs')).slice(0, 3);
    const cond12Q = shuffle(questionsData.filter((q) => q.category === 'first_second_conditionals')).slice(0, 3);
    const cond3mQ = shuffle(questionsData.filter((q) => q.category === 'third_mixed_conditionals')).slice(0, 3);
    const scramQ = shuffle(questionsData.filter((q) => q.category === 'scrambled_sentences')).slice(0, 2);
    const readQ = shuffle(questionsData.filter((q) => q.category === 'reading_comprehension')).slice(0, 2);
    const mixQ = shuffle(questionsData.filter((q) => q.category === 'mixed_grammar')).slice(0, 2);

    const combined = [...modQ, ...cond12Q, ...cond3mQ, ...scramQ, ...readQ, ...mixQ];
    return {
      questions: combined,
      title: '15-Question Practice Test'
    };
  };

  const handleStartMode = (mode: PracticeMode, category?: QuestionCategory) => {
    setPracticeMode(mode);
    setActiveCategory(category);
    const { questions, title } = prepareQuestions(mode, category);
    setActiveQuestions(questions);
    setSessionTitle(title);
    setCurrentView('practice');
  };

  const handleFinishPractice = (records: UserAnswerRecord[]) => {
    setLastRecords(records);

    // Calculate score
    const answered = records.filter((r) => !r.isSkipped);
    const correct = records.filter((r) => r.isCorrect).length;
    const scorePct = answered.length > 0 ? Math.round((correct / answered.length) * 100) : 0;

    const sessionResult: PracticeSessionResult = {
      id: `session-${Date.now()}`,
      mode: practiceMode,
      category: activeCategory,
      date: new Date().toISOString(),
      totalQuestions: records.length,
      answeredCount: answered.length,
      correctCount: correct,
      incorrectCount: records.filter((r) => !r.isCorrect && !r.isSkipped).length,
      skippedCount: records.filter((r) => r.isSkipped).length,
      scorePercentage: scorePct,
      records
    };

    const updated = savePracticeSession(sessionResult, questionCategoryMap);
    setUserProgress(updated);
    setCurrentView('results');
  };

  const handlePracticeAgain = () => {
    handleStartMode(practiceMode, activeCategory);
  };

  const handleTopNav = (view: 'home' | 'grammar' | 'progress' | 'practice-15' | 'practice-reading') => {
    if (view === 'practice-15') {
      handleStartMode('quick15');
    } else if (view === 'practice-reading') {
      handleStartMode('reading');
    } else {
      setCurrentView(view);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans selection:bg-teal-500 selection:text-slate-950">
      <Navbar currentView={currentView} onNavigate={handleTopNav} />

      <main className="flex-1">
        {currentView === 'home' && (
          <HomeScreen
            progress={userProgress}
            onStartMode={handleStartMode}
            onNavigate={(v) => setCurrentView(v)}
          />
        )}

        {currentView === 'practice' && (
          <PracticeScreen
            questions={activeQuestions}
            title={sessionTitle}
            onFinish={handleFinishPractice}
            onExit={() => setCurrentView('home')}
          />
        )}

        {currentView === 'results' && (
          <ResultsScreen
            records={lastRecords}
            allQuestions={questionsData}
            onPracticeAgain={handlePracticeAgain}
            onReturnHome={() => setCurrentView('home')}
            onReviewGrammar={() => setCurrentView('grammar')}
          />
        )}

        {currentView === 'grammar' && (
          <GrammarReviewScreen
            onStartCategoryPractice={(cat) => handleStartMode('category', cat)}
            onReturnHome={() => setCurrentView('home')}
          />
        )}

        {currentView === 'progress' && (
          <ProgressScreen
            progress={userProgress}
            onRefreshProgress={(updated) => setUserProgress(updated)}
            onStartPractice={() => handleStartMode('quick15')}
            onReturnHome={() => setCurrentView('home')}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="font-semibold text-slate-400">
              Evidencia GA3-240202501-AA2-EV01. Cuestionario
            </span>
            <span className="mx-2">·</span>
            <span>English Grammar & Reading Comprehension Practice</span>
          </div>
          <div>
            Designed for SENA apprentices · Practice at your own pace
          </div>
        </div>
      </footer>
    </div>
  );
}
