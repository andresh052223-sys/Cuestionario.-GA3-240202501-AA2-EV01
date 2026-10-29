import React, { useState } from 'react';
import {
  BarChart3,
  Trophy,
  CheckCircle2,
  RotateCcw,
  Trash2,
  ArrowRight,
  Home,
  Clock,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { UserGlobalProgress, QuestionCategory } from '../types/quiz';
import { CATEGORY_INFO } from '../data/questionsData';
import { resetUserProgress } from '../utils/storage';

interface ProgressScreenProps {
  progress: UserGlobalProgress;
  onRefreshProgress: (updated: UserGlobalProgress) => void;
  onStartPractice: () => void;
  onReturnHome: () => void;
}

export const ProgressScreen: React.FC<ProgressScreenProps> = ({
  progress,
  onRefreshProgress,
  onStartPractice,
  onReturnHome
}) => {
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  const overallAccuracy =
    progress.totalQuestionsAnswered > 0
      ? Math.round(
          (progress.totalCorrect / progress.totalQuestionsAnswered) * 100
        )
      : 0;

  const handleReset = () => {
    const fresh = resetUserProgress();
    onRefreshProgress(fresh);
    setShowConfirmReset(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-1">
              Apprentice Learning Record
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              My Practice Progress & Analytics
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Track your cumulative questions answered, category proficiencies, and recent practice attempts on this device.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onReturnHome}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 transition-colors cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>

            <button
              type="button"
              onClick={onStartPractice}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-teal-400 hover:bg-teal-300 text-slate-950 transition-colors cursor-pointer"
            >
              <span>Practice Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Global KPI Cards Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
              Sessions Completed
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums">
              {progress.totalPracticesCompleted}
            </div>
            <div className="text-[11px] text-slate-500 mt-1">Saved locally</div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
              Questions Answered
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums">
              {progress.totalQuestionsAnswered}
            </div>
            <div className="text-[11px] text-slate-500 mt-1">Cumulative count</div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
              Correct Answers
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 tabular-nums">
              {progress.totalCorrect}
            </div>
            <div className="text-[11px] text-slate-500 mt-1">Mastered items</div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-1">
              Overall Accuracy
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-teal-300 tabular-nums">
              {overallAccuracy}%
            </div>
            <div className="text-[11px] text-slate-500 mt-1">All sessions combined</div>
          </div>
        </div>

        {/* Category Accuracy Matrix */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-7 shadow-xl">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-2 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-teal-400" />
            <span>Category Proficiency Breakdown</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mb-6">
            Compare your strengths across each tested English competence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(Object.keys(CATEGORY_INFO) as QuestionCategory[]).map((catKey) => {
              const info = CATEGORY_INFO[catKey];
              const stat = progress.categoryStats[catKey] || { attempted: 0, correct: 0 };
              const acc =
                stat.attempted > 0 ? Math.round((stat.correct / stat.attempted) * 100) : 0;

              return (
                <div
                  key={catKey}
                  className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2.5"
                >
                  <div className="flex items-center justify-between text-sm font-semibold text-slate-200">
                    <span>{info.title}</span>
                    <span className="text-teal-400 font-bold tabular-nums">{acc}%</span>
                  </div>

                  <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        acc >= 80
                          ? 'bg-emerald-500'
                          : acc >= 50
                          ? 'bg-teal-400'
                          : 'bg-amber-500'
                      }`}
                      style={{ width: `${Math.max(4, acc)}%` }}
                    />
                  </div>

                  <div className="flex justify-between text-xs text-slate-400">
                    <span>
                      {stat.correct} of {stat.attempted} answered correctly
                    </span>
                    <span>{info.count} questions in bank</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Session History */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-7 shadow-xl">
          <div className="flex items-center justify-between gap-3 mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-indigo-400" />
              <span>Practice Sessions History</span>
            </h2>
            <div className="text-xs text-slate-400">
              {progress.history.length} logged attempts
            </div>
          </div>

          {progress.history.length === 0 ? (
            <div className="text-center py-10 text-slate-400 text-sm">
              No sessions completed yet on this device. Click &quot;Practice Now&quot; to begin your first test!
            </div>
          ) : (
            <div className="divide-y divide-slate-800/80">
              {progress.history.map((session, idx) => (
                <div
                  key={session.id || idx}
                  className="py-3.5 flex flex-wrap items-center justify-between gap-3 text-sm"
                >
                  <div>
                    <div className="font-semibold text-slate-200 capitalize">
                      {session.mode === 'quick15'
                        ? '15-Question Practice Test'
                        : session.mode === 'complete60'
                        ? 'Complete 60-Question Practice'
                        : session.mode === 'reading'
                        ? 'Reading Comprehension'
                        : `Category Practice (${session.category || ''})`}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {new Date(session.date).toLocaleDateString()} · {session.answeredCount} answered · {session.correctCount} correct
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`text-base font-extrabold tabular-nums px-3 py-1 rounded-lg border ${
                        session.scorePercentage >= 80
                          ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800/40'
                          : session.scorePercentage >= 60
                          ? 'bg-teal-950/40 text-teal-400 border-teal-800/40'
                          : 'bg-amber-950/40 text-amber-400 border-amber-800/40'
                      }`}
                    >
                      {session.scorePercentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Reset Progress Confirmation Area */}
        <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="font-bold text-sm text-slate-300">
              Reset Local Storage Progress
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              Permanently clear your local history and question counters on this browser.
            </div>
          </div>

          {!showConfirmReset ? (
            <button
              type="button"
              onClick={() => setShowConfirmReset(true)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-rose-300 hover:text-rose-200 bg-rose-950/30 hover:bg-rose-950/50 border border-rose-900/40 transition-colors cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Reset My Progress</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-xs text-rose-300 font-medium">Are you sure?</span>
              <button
                type="button"
                onClick={handleReset}
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white cursor-pointer"
              >
                Yes, Clear All
              </button>
              <button
                type="button"
                onClick={() => setShowConfirmReset(false)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
