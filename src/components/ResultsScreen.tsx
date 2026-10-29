import React, { useState } from 'react';
import {
  Trophy,
  CheckCircle2,
  XCircle,
  SkipForward,
  RotateCcw,
  Home,
  AlertCircle,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Volume2,
  Sparkles
} from 'lucide-react';
import { Question, UserAnswerRecord } from '../types/quiz';
import { CATEGORY_INFO } from '../data/questionsData';
import { speakSentence } from '../utils/speech';

interface ResultsScreenProps {
  records: UserAnswerRecord[];
  allQuestions: Question[];
  onPracticeAgain: () => void;
  onReturnHome: () => void;
  onReviewGrammar: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({
  records,
  allQuestions,
  onPracticeAgain,
  onReturnHome,
  onReviewGrammar
}) => {
  const [showOnlyIncorrect, setShowOnlyIncorrect] = useState(false);
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);

  const questionMap = new Map<string, Question>();
  allQuestions.forEach((q) => questionMap.set(q.id, q));

  const totalQuestions = records.length;
  const answeredRecords = records.filter((r) => !r.isSkipped);
  const answeredCount = answeredRecords.length;
  const correctCount = records.filter((r) => r.isCorrect).length;
  const incorrectCount = records.filter((r) => !r.isCorrect && !r.isSkipped).length;
  const skippedCount = records.filter((r) => r.isSkipped).length;

  const scorePercentage =
    answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  // Category breakdown
  const categoryStats: Record<
    string,
    { attempted: number; correct: number; label: string }
  > = {};

  records.forEach((record) => {
    const q = questionMap.get(record.questionId);
    if (!q) return;

    if (!categoryStats[q.category]) {
      categoryStats[q.category] = {
        attempted: 0,
        correct: 0,
        label: q.categoryLabel
      };
    }

    if (!record.isSkipped) {
      categoryStats[q.category].attempted += 1;
      if (record.isCorrect) {
        categoryStats[q.category].correct += 1;
      }
    }
  });

  // Topics needing improvement (accuracy < 70%)
  const weakTopics = Object.entries(categoryStats).filter(
    ([_, stat]) => stat.attempted > 0 && stat.correct / stat.attempted < 0.7
  );

  // Encouraging feedback calculation
  let gradeBadge = {
    title: 'Outstanding Performance!',
    message:
      'You demonstrated exceptional mastery of English grammar and reading comprehension. You are in prime shape for the official SENA evaluation!',
    color: 'text-emerald-400',
    bg: 'bg-emerald-950/40 border-emerald-500/30'
  };

  if (scorePercentage < 60) {
    gradeBadge = {
      title: 'Good Effort! Keep Building Your Skills',
      message:
        'Learning a language takes practice and repetition. Review the grammar rules and explanations below, and try another session to strengthen your confidence.',
      color: 'text-amber-400',
      bg: 'bg-amber-950/40 border-amber-500/30'
    };
  } else if (scorePercentage < 80) {
    gradeBadge = {
      title: 'Solid Progress! Almost Mastered',
      message:
        'You have a strong understanding of core concepts. Pay close attention to subtle conditional structures and modal distinctions to reach top proficiency.',
      color: 'text-teal-400',
      bg: 'bg-teal-950/40 border-teal-500/30'
    };
  }

  const incorrectRecords = records.filter((r) => !r.isCorrect && !r.isSkipped);
  const displayRecords = showOnlyIncorrect ? incorrectRecords : records;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Results Banner Header */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl text-center relative overflow-hidden">
          <div className="inline-flex p-3 rounded-2xl bg-teal-500/10 text-teal-400 mb-3 shadow-inner">
            <Trophy className="w-10 h-10" />
          </div>

          <div className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-1">
            Practice Session Completed
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Evidencia GA3-240202501-AA2-EV01
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Review your overall score, category breakdown, and individual explanations below.
          </p>

          {/* Big Score Card */}
          <div className="my-6 p-6 rounded-2xl bg-slate-950/80 border border-slate-800 max-w-md mx-auto shadow-inner">
            <div className="text-xs uppercase font-semibold text-slate-400 mb-1">
              Final Accuracy Score
            </div>
            <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-300 to-teal-200 tabular-nums">
              {scorePercentage}%
            </div>
            <div className="text-xs text-slate-400 mt-2">
              Formula: ({correctCount} correct / {answeredCount} answered) × 100
            </div>
          </div>

          {/* Feedback Evaluation Badge */}
          <div className={`p-4 rounded-xl border max-w-xl mx-auto text-left ${gradeBadge.bg}`}>
            <h3 className={`font-bold text-base mb-1 ${gradeBadge.color}`}>
              {gradeBadge.title}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {gradeBadge.message}
            </p>
          </div>

          {/* Metrics Summary Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="text-xs text-slate-400 mb-1">Questions</div>
              <div className="text-2xl font-bold text-white tabular-nums">
                {totalQuestions}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="text-xs text-emerald-400 mb-1 flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Correct</span>
              </div>
              <div className="text-2xl font-bold text-emerald-400 tabular-nums">
                {correctCount}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="text-xs text-rose-400 mb-1 flex items-center justify-center gap-1">
                <XCircle className="w-3.5 h-3.5" />
                <span>Incorrect</span>
              </div>
              <div className="text-2xl font-bold text-rose-400 tabular-nums">
                {incorrectCount}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="text-xs text-amber-400 mb-1 flex items-center justify-center gap-1">
                <SkipForward className="w-3.5 h-3.5" />
                <span>Skipped</span>
              </div>
              <div className="text-2xl font-bold text-amber-400 tabular-nums">
                {skippedCount}
              </div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8 pt-6 border-t border-slate-800">
            <button
              type="button"
              onClick={onPracticeAgain}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm sm:text-base bg-teal-400 hover:bg-teal-300 text-slate-950 transition-all shadow-lg shadow-teal-400/25 active:scale-95 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Practice Again</span>
            </button>

            {incorrectCount > 0 && (
              <button
                type="button"
                onClick={() => {
                  setShowOnlyIncorrect(true);
                  const el = document.getElementById('review-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm sm:text-base bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 transition-colors cursor-pointer"
              >
                <XCircle className="w-4 h-4 text-rose-400" />
                <span>Review Incorrect Answers ({incorrectCount})</span>
              </button>
            )}

            <button
              type="button"
              onClick={onReturnHome}
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm sm:text-base bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </button>
          </div>
        </div>

        {/* Category-by-Category Performance */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-7 shadow-xl">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-teal-400" />
            <span>Category Performance Breakdown</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(categoryStats).map(([catKey, stat]) => {
              const catAccuracy =
                stat.attempted > 0
                  ? Math.round((stat.correct / stat.attempted) * 100)
                  : 0;

              return (
                <div
                  key={catKey}
                  className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2"
                >
                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-200">
                    <span className="truncate pr-2">{stat.label}</span>
                    <span className="text-teal-400 tabular-nums font-bold">
                      {catAccuracy}%
                    </span>
                  </div>

                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        catAccuracy >= 80
                          ? 'bg-emerald-500'
                          : catAccuracy >= 60
                          ? 'bg-teal-400'
                          : 'bg-amber-500'
                      }`}
                      style={{ width: `${Math.max(5, catAccuracy)}%` }}
                    />
                  </div>

                  <div className="text-[11px] text-slate-400 flex justify-between">
                    <span>
                      {stat.correct} of {stat.attempted} correct
                    </span>
                    <span>
                      {stat.attempted === 0 ? 'No attempts' : stat.correct === stat.attempted ? 'Perfect' : ''}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Grammar Topics Needing Improvement */}
          {weakTopics.length > 0 && (
            <div className="mt-6 p-4 rounded-xl bg-amber-950/30 border border-amber-800/40">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Recommended Topics to Review:</span>
              </div>
              <ul className="text-xs sm:text-sm text-amber-200/90 space-y-1 mb-3 list-disc pl-5">
                {weakTopics.map(([_, stat], idx) => (
                  <li key={idx}>
                    <span className="font-semibold">{stat.label}</span> ({Math.round((stat.correct / stat.attempted) * 100)}% accuracy)
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={onReviewGrammar}
                className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
              >
                Open Grammar Reference Guide
              </button>
            </div>
          )}
        </div>

        {/* Detailed Question Review Section */}
        <div id="review-section" className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-7 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                Detailed Question Review
              </h2>
              <p className="text-xs text-slate-400">
                Inspect every question, your selected option, and full grammatical explanations.
              </p>
            </div>

            {/* Filter Toggle */}
            <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-lg border border-slate-800 text-xs font-medium">
              <button
                type="button"
                onClick={() => setShowOnlyIncorrect(false)}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                  !showOnlyIncorrect
                    ? 'bg-slate-800 text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All ({records.length})
              </button>
              <button
                type="button"
                onClick={() => setShowOnlyIncorrect(true)}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                  showOnlyIncorrect
                    ? 'bg-rose-500/20 text-rose-300 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Incorrect Only ({incorrectCount})
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {displayRecords.map((record, index) => {
              const q = questionMap.get(record.questionId);
              if (!q) return null;

              const isExpanded = expandedQuestionId === q.id;
              const correctOpt = q.options.find((opt) => opt.id === q.correctAnswer);
              const userOpt = q.options.find((opt) => opt.id === record.selectedAnswer);

              return (
                <div
                  key={q.id}
                  className={`rounded-xl border transition-all ${
                    record.isCorrect
                      ? 'bg-slate-950/60 border-slate-800'
                      : record.isSkipped
                      ? 'bg-amber-950/20 border-amber-800/30'
                      : 'bg-rose-950/20 border-rose-900/40'
                  }`}
                >
                  {/* Collapsible Question Row Header */}
                  <div
                    onClick={() =>
                      setExpandedQuestionId(isExpanded ? null : q.id)
                    }
                    className="p-4 sm:p-5 flex items-start justify-between gap-3 cursor-pointer hover:bg-slate-800/40 rounded-xl"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0">
                        {record.isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        ) : record.isSkipped ? (
                          <SkipForward className="w-5 h-5 text-amber-400" />
                        ) : (
                          <XCircle className="w-5 h-5 text-rose-400" />
                        )}
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                          <span className="font-semibold text-slate-300">
                            #{index + 1}
                          </span>
                          <span>·</span>
                          <span className="text-teal-400">{q.categoryLabel}</span>
                          {record.isSkipped && (
                            <>
                              <span>·</span>
                              <span className="text-amber-400 font-semibold">Skipped</span>
                            </>
                          )}
                        </div>

                        <h4 className="text-sm sm:text-base font-semibold text-slate-100">
                          {q.prompt}
                        </h4>
                        {q.contextText && (
                          <div className="text-xs font-mono text-teal-300 mt-1">
                            {q.contextText}
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      type="button"
                      className="p-1 text-slate-400 hover:text-white shrink-0"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  {/* Expanded Explanation Box */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-2 border-t border-slate-800/80 space-y-3.5 text-xs sm:text-sm">
                      {/* User vs Correct */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                          <span className="text-slate-400 block text-[11px] uppercase font-bold mb-1">
                            Correct Answer:
                          </span>
                          <span className="font-semibold text-emerald-400">
                            [{q.correctAnswer}] {correctOpt?.text || q.correctAnswer}
                          </span>
                        </div>

                        {!record.isSkipped && (
                          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                            <span className="text-slate-400 block text-[11px] uppercase font-bold mb-1">
                              Your Selection:
                            </span>
                            <span
                              className={`font-semibold ${
                                record.isCorrect ? 'text-emerald-400' : 'text-rose-400'
                              }`}
                            >
                              [{record.selectedAnswer}] {userOpt?.text || record.selectedAnswer}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Explanation */}
                      <div className="text-slate-200 leading-relaxed">
                        <span className="font-bold text-slate-300 block mb-1">
                          Rule Explanation:
                        </span>
                        {q.explanationEnglish}
                      </div>

                      {q.grammarStructure && (
                        <div className="p-2.5 rounded bg-slate-900 font-mono text-teal-300 text-xs">
                          {q.grammarStructure}
                        </div>
                      )}

                      {/* Spanish */}
                      <div className="p-3 rounded-lg bg-indigo-950/30 border border-indigo-800/30 text-indigo-200">
                        {q.explanationSpanish}
                      </div>

                      {/* Audio listen */}
                      <button
                        type="button"
                        onClick={() => speakSentence(q.prompt + '. ' + (correctOpt?.text || ''))}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-md cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5 text-teal-400" />
                        <span>Listen Correct Sentence</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
