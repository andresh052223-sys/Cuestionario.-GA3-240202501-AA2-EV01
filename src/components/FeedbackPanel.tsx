import React from 'react';
import { CheckCircle2, XCircle, ArrowRight, Lightbulb, Volume2, BookCheck, AlertTriangle } from 'lucide-react';
import { Question } from '../types/quiz';
import { speakSentence } from '../utils/speech';

interface FeedbackPanelProps {
  question: Question;
  selectedAnswer: string | null;
  isCorrect: boolean;
  onNext: () => void;
  isLastQuestion: boolean;
}

export const FeedbackPanel: React.FC<FeedbackPanelProps> = ({
  question,
  selectedAnswer,
  isCorrect,
  onNext,
  isLastQuestion
}) => {
  const correctOption = question.options.find((opt) => opt.id === question.correctAnswer);
  const userOption = question.options.find((opt) => opt.id === selectedAnswer);

  return (
    <div
      className={`rounded-2xl border p-6 sm:p-7 shadow-2xl transition-all duration-300 mt-6 ${
        isCorrect
          ? 'bg-slate-900/95 border-emerald-500/40 shadow-emerald-950/20'
          : 'bg-slate-900/95 border-rose-500/40 shadow-rose-950/20'
      }`}
    >
      {/* Header Status */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          {isCorrect ? (
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
              <XCircle className="w-6 h-6" />
            </div>
          )}
          <div>
            <h3
              className={`text-xl sm:text-2xl font-bold tracking-tight ${
                isCorrect ? 'text-emerald-400' : 'text-rose-400'
              }`}
            >
              {isCorrect ? 'Correct answer!' : "Not quite! Let's learn from this."}
            </h3>
            <div className="text-xs sm:text-sm text-slate-400">
              {isCorrect
                ? 'Excellent work! You mastered this grammatical structure.'
                : 'Every mistake is an opportunity to strengthen your English mastery.'}
            </div>
          </div>
        </div>

        {/* Primary Next Action */}
        <button
          type="button"
          onClick={onNext}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-base bg-teal-400 hover:bg-teal-300 text-slate-950 transition-all shadow-lg shadow-teal-400/25 active:scale-95 cursor-pointer ml-auto"
        >
          <span>{isLastQuestion ? 'View Results' : 'Next Question'}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Answer recap box */}
      <div className="mt-5 p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
          Correct Answer:
        </div>
        <div className="text-base sm:text-lg font-semibold text-emerald-300 flex items-center gap-2.5">
          <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
            {question.correctAnswer}
          </span>
          <span>{correctOption?.text || question.correctAnswer}</span>
          <button
            type="button"
            onClick={() => speakSentence(correctOption?.text || '')}
            title="Listen to pronunciation"
            className="p-1 text-slate-400 hover:text-teal-300 transition-colors ml-1 cursor-pointer"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>

        {!isCorrect && userOption && (
          <div className="mt-3 pt-3 border-t border-slate-800 text-xs sm:text-sm text-rose-300/90 flex items-center gap-2">
            <span className="text-slate-400">Your choice:</span>
            <span className="w-5 h-5 rounded-md bg-rose-500/20 text-rose-400 flex items-center justify-center text-xs font-bold">
              {selectedAnswer}
            </span>
            <span>{userOption.text}</span>
          </div>
        )}
      </div>

      {/* Explanations Section */}
      <div className="mt-5 space-y-4">
        {/* Core English Explanation */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-2">
            <BookCheck className="w-4 h-4 text-teal-400" />
            <span>Grammar & Context Explanation</span>
          </h4>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
            {question.explanationEnglish}
          </p>
        </div>

        {/* Distractor note when incorrect */}
        {!isCorrect && question.commonDistractorNote && (
          <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-800/30 text-rose-200 text-sm sm:text-base leading-relaxed">
            <span className="font-semibold block text-rose-300 mb-1">
              Why the other options don't fit:
            </span>
            {question.commonDistractorNote}
          </div>
        )}

        {/* Grammatical Formula / Structure */}
        {question.grammarStructure && (
          <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 block mb-1">
              Grammatical Structure:
            </span>
            <code className="text-sm sm:text-base text-teal-200 font-mono">
              {question.grammarStructure}
            </code>
          </div>
        )}

        {/* Additional Example Sentences */}
        {question.exampleSentences && question.exampleSentences.length > 0 && (
          <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Additional Examples:
            </h5>
            <ul className="space-y-2">
              {question.exampleSentences.map((example, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-slate-200 text-sm sm:text-base">
                  <span className="text-teal-400 font-bold">·</span>
                  <span className="flex-1">{example}</span>
                  <button
                    type="button"
                    onClick={() => speakSentence(example)}
                    title="Listen"
                    className="p-1 text-slate-500 hover:text-teal-300 transition-colors cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Remember Tip */}
        {question.rememberTip && (
          <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-800/40 text-amber-200 text-sm sm:text-base flex items-start gap-2.5">
            <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-amber-300 text-xs uppercase tracking-wider mb-0.5">
                Remember!
              </span>
              <span>{question.rememberTip}</span>
            </div>
          </div>
        )}

        {/* Spanish Explanation */}
        <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/30 text-indigo-200 text-sm sm:text-base leading-relaxed">
          <span className="font-bold text-indigo-300 text-xs uppercase tracking-wider block mb-1">
            Explicación en Español para Aprendices SENA:
          </span>
          <p>{question.explanationSpanish}</p>
        </div>
      </div>

      {/* Bottom duplicate Next Button for long explanations */}
      <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
        <button
          type="button"
          onClick={onNext}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-base bg-teal-400 hover:bg-teal-300 text-slate-950 transition-all shadow-lg shadow-teal-400/25 active:scale-95 cursor-pointer"
        >
          <span>{isLastQuestion ? 'View Results' : 'Next Question'}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
