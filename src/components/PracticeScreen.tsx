import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  Volume2,
  SkipForward,
  RotateCcw,
  Sparkles,
  HelpCircle,
  Eye,
  EyeOff,
  ChevronLeft
} from 'lucide-react';
import { Question, UserAnswerRecord } from '../types/quiz';
import { FeedbackPanel } from './FeedbackPanel';
import { ReadingPassageViewer } from './ReadingPassageViewer';
import { speakSentence } from '../utils/speech';

interface PracticeScreenProps {
  questions: Question[];
  title: string;
  onFinish: (records: UserAnswerRecord[]) => void;
  onExit: () => void;
}

export const PracticeScreen: React.FC<PracticeScreenProps> = ({
  questions,
  title,
  onFinish,
  onExit
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [records, setRecords] = useState<UserAnswerRecord[]>([]);
  const [showReadingPassage, setShowReadingPassage] = useState(true);
  const [showQuestionSpanishHint, setShowQuestionSpanishHint] = useState(false);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const isLastQuestion = currentIndex === totalQuestions - 1;

  // Reset selected answer and submission when moving to next question
  useEffect(() => {
    setSelectedAnswer(null);
    setIsSubmitted(false);
    setShowQuestionSpanishHint(false);
  }, [currentIndex]);

  // Keyboard shortcut listener for A, B, C, D and Enter
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (!isSubmitted) {
        if (currentQuestion.options.length === 2) {
          // True/False
          if (e.key === 't' || e.key === 'T' || e.key === '1') {
            setSelectedAnswer('True');
          } else if (e.key === 'f' || e.key === 'F' || e.key === '2') {
            setSelectedAnswer('False');
          }
        } else {
          // A, B, C, D or 1, 2, 3, 4
          const keyUpper = e.key.toUpperCase();
          if (['A', 'B', 'C', 'D'].includes(keyUpper)) {
            setSelectedAnswer(keyUpper);
          } else if (e.key === '1') setSelectedAnswer('A');
          else if (e.key === '2') setSelectedAnswer('B');
          else if (e.key === '3') setSelectedAnswer('C');
          else if (e.key === '4') setSelectedAnswer('D');
        }

        if (e.key === 'Enter' && selectedAnswer) {
          handleCheckAnswer();
        }
      } else {
        if (e.key === 'Enter' || e.key === ' ') {
          handleNextQuestion();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSubmitted, selectedAnswer, currentQuestion]);

  const handleSelectOption = (optionId: string) => {
    if (isSubmitted) return;
    setSelectedAnswer(optionId);
  };

  const handleCheckAnswer = () => {
    if (!selectedAnswer || isSubmitted) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    setIsSubmitted(true);

    const newRecord: UserAnswerRecord = {
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect,
      isSkipped: false
    };

    setRecords((prev) => [...prev, newRecord]);
  };

  const handleSkipQuestion = () => {
    if (isSubmitted) return;

    const skipRecord: UserAnswerRecord = {
      questionId: currentQuestion.id,
      selectedAnswer: null,
      isCorrect: false,
      isSkipped: true
    };

    const nextRecords = [...records, skipRecord];
    setRecords(nextRecords);

    if (isLastQuestion) {
      onFinish(nextRecords);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      onFinish(records);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Live statistics calculation
  const answeredRecords = records.filter((r) => !r.isSkipped);
  const correctCount = records.filter((r) => r.isCorrect).length;
  const incorrectCount = records.filter((r) => !r.isCorrect && !r.isSkipped).length;
  const skippedCount = records.filter((r) => r.isSkipped).length;
  const accuracyPercentage =
    answeredRecords.length > 0
      ? Math.round((correctCount / answeredRecords.length) * 100)
      : 0;

  const progressPercentage = Math.round(((currentIndex + (isSubmitted ? 1 : 0)) / totalQuestions) * 100);

  const isReadingCategory = currentQuestion.category === 'reading_comprehension';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-6 sm:py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Top Navigation & Live Dashboard */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-4 sm:p-5 shadow-lg mb-6">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onExit}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Exit Practice</span>
              </button>
              <div>
                <h2 className="text-sm sm:text-base font-bold text-slate-100 truncate max-w-[200px] sm:max-w-xs">
                  {title}
                </h2>
                <div className="text-xs text-teal-400 font-medium">
                  No time limit · Practice at your own pace
                </div>
              </div>
            </div>

            {/* Live Metrics Counter */}
            <div className="flex items-center gap-3 text-xs sm:text-sm font-medium tabular-nums">
              <div className="flex items-center gap-1 text-slate-300">
                <span className="text-slate-400">Answered:</span>
                <span className="font-bold text-white">{answeredRecords.length}</span>
              </div>
              <span className="text-slate-600">|</span>
              <div className="flex items-center gap-1 text-emerald-400">
                <span className="text-slate-400">Correct:</span>
                <span className="font-bold">{correctCount}</span>
              </div>
              <span className="text-slate-600">|</span>
              <div className="flex items-center gap-1 text-teal-300">
                <span className="text-slate-400">Score:</span>
                <span className="font-bold">{accuracyPercentage}%</span>
              </div>
              {skippedCount > 0 && (
                <>
                  <span className="text-slate-600">|</span>
                  <div className="flex items-center gap-1 text-amber-400">
                    <span className="text-slate-400">Skipped:</span>
                    <span className="font-bold">{skippedCount}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs text-slate-400 font-medium">
              <span>
                Question {currentIndex + 1} of {totalQuestions}
              </span>
              <span>{progressPercentage}% Completed</span>
            </div>
            <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-teal-500 via-indigo-500 to-teal-400 transition-all duration-300 rounded-full"
                style={{ width: `${Math.max(4, progressPercentage)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Reading passage component if this question belongs to reading comprehension */}
        {isReadingCategory && (
          <ReadingPassageViewer isCollapsible={true} defaultExpanded={true} />
        )}

        {/* Main Question Card */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl relative">
          {/* Question Metadata Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-800 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span className="font-bold text-teal-400 tracking-wider uppercase">
                {currentQuestion.categoryLabel}
              </span>
              <span aria-hidden="true">·</span>
              <span className="capitalize">{currentQuestion.difficulty} Level</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => speakSentence(currentQuestion.prompt + ' ' + (currentQuestion.contextText || ''))}
                title="Listen to question pronunciation in English"
                className="flex items-center gap-1 px-2.5 py-1 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5 text-teal-400" />
                <span>Listen Question</span>
              </button>

              <button
                type="button"
                onClick={() => setShowQuestionSpanishHint(!showQuestionSpanishHint)}
                title="Toggle Spanish support hint"
                className="flex items-center gap-1 px-2.5 py-1 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors cursor-pointer"
              >
                {showQuestionSpanishHint ? (
                  <>
                    <EyeOff className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Hide Spanish</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Ver en Español</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Question Context if scrambled or reading prompt */}
          {currentQuestion.contextText && (
            <div className="mb-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800/90">
              <div className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-1">
                Context / Word Bank:
              </div>
              <div className="text-lg sm:text-xl font-medium text-teal-200 font-mono tracking-wide">
                {currentQuestion.contextText}
              </div>
            </div>
          )}

          {/* Question Prompt Text (Large, 26-32px desktop) */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-100 leading-snug tracking-tight mb-4">
            {currentQuestion.prompt}
          </h3>

          {/* Spanish translation hint if toggled */}
          {showQuestionSpanishHint && (
            <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-800/40 text-indigo-200 text-xs sm:text-sm leading-relaxed mb-6">
              <span className="font-semibold block text-indigo-300 mb-0.5">
                Ayuda en Español:
              </span>
              {currentQuestion.explanationSpanish}
            </div>
          )}

          {/* Answer Options Grid */}
          <div className="space-y-3.5 my-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Select the correct option (or press A, B, C, D on your keyboard):
            </div>

            {currentQuestion.options.map((opt) => {
              const isSelected = selectedAnswer === opt.id;
              const isCorrectOption = opt.id === currentQuestion.correctAnswer;

              let optionStyle =
                'bg-slate-950/70 border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-slate-800/60';

              if (isSelected && !isSubmitted) {
                optionStyle =
                  'bg-teal-950/40 border-teal-400 text-teal-200 ring-2 ring-teal-400/40 shadow-lg shadow-teal-950/30';
              } else if (isSubmitted) {
                if (isCorrectOption) {
                  optionStyle =
                    'bg-emerald-950/50 border-emerald-400 text-emerald-200 ring-2 ring-emerald-400/40 shadow-lg shadow-emerald-950/30';
                } else if (isSelected && !isCorrectOption) {
                  optionStyle =
                    'bg-rose-950/50 border-rose-500 text-rose-200 ring-2 ring-rose-500/30';
                } else {
                  optionStyle = 'opacity-40 border-slate-800 bg-slate-950/40 text-slate-400';
                }
              }

              return (
                <div
                  key={opt.id}
                  role="button"
                  tabIndex={isSubmitted ? -1 : 0}
                  aria-pressed={isSelected}
                  aria-disabled={isSubmitted}
                  onClick={() => handleSelectOption(opt.id)}
                  onKeyDown={(e) => {
                    if (isSubmitted) return;
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelectOption(opt.id);
                    }
                  }}
                  className={`w-full p-4 sm:p-5 rounded-xl border text-left transition-all duration-200 flex items-center justify-between gap-4 select-none ${
                    isSubmitted ? 'cursor-default' : 'cursor-pointer'
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 ${optionStyle}`}
                >
                  <div className="flex items-center gap-3.5 flex-1">
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 border ${
                        isSelected && !isSubmitted
                          ? 'bg-teal-400 text-slate-950 border-teal-300 font-extrabold'
                          : isSubmitted && isCorrectOption
                          ? 'bg-emerald-400 text-slate-950 border-emerald-300 font-extrabold'
                          : isSubmitted && isSelected
                          ? 'bg-rose-500 text-white border-rose-400'
                          : 'bg-slate-800 text-slate-300 border-slate-700'
                      }`}
                    >
                      {opt.id}
                    </span>

                    <span className="text-lg sm:text-xl font-medium leading-relaxed">
                      {opt.text}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        speakSentence(opt.text);
                      }}
                      title="Listen to option"
                      className="p-2 text-slate-400 hover:text-teal-300 transition-colors rounded-lg hover:bg-slate-800 cursor-pointer"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>

                    {isSubmitted && isCorrectOption && (
                      <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Footer (Check Answer / Skip) */}
          {!isSubmitted && (
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800 mt-6">
              <button
                type="button"
                onClick={handleSkipQuestion}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-colors text-sm font-semibold cursor-pointer"
              >
                <SkipForward className="w-4 h-4" />
                <span>Skip Question (No penalty)</span>
              </button>

              <button
                type="button"
                disabled={!selectedAnswer}
                onClick={handleCheckAnswer}
                className={`flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base sm:text-lg transition-all duration-200 shadow-xl ${
                  selectedAnswer
                    ? 'bg-teal-400 hover:bg-teal-300 text-slate-950 shadow-teal-400/25 active:scale-95 cursor-pointer'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                }`}
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>Check Answer</span>
              </button>
            </div>
          )}

          {/* Immediate Feedback Panel after checking */}
          {isSubmitted && (
            <FeedbackPanel
              question={currentQuestion}
              selectedAnswer={selectedAnswer}
              isCorrect={selectedAnswer === currentQuestion.correctAnswer}
              onNext={handleNextQuestion}
              isLastQuestion={isLastQuestion}
            />
          )}
        </div>
      </div>
    </div>
  );
};
