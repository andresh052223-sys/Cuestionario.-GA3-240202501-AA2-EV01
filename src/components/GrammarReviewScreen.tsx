import React, { useState } from 'react';
import {
  BookOpen,
  ArrowRight,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Volume2,
  ChevronRight,
  Home
} from 'lucide-react';
import { grammarTopics, GrammarTopic } from '../data/grammarReferenceData';
import { QuestionCategory } from '../types/quiz';
import { speakSentence } from '../utils/speech';

interface GrammarReviewScreenProps {
  onStartCategoryPractice: (category: QuestionCategory) => void;
  onReturnHome: () => void;
}

export const GrammarReviewScreen: React.FC<GrammarReviewScreenProps> = ({
  onStartCategoryPractice,
  onReturnHome
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(grammarTopics[0].id);

  const selectedTopic =
    grammarTopics.find((t) => t.id === selectedTopicId) || grammarTopics[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-400 mb-1">
              <span>Evidencia GA3-240202501-AA2-EV01</span>
              <span>·</span>
              <span>Study Module</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Review English Grammar & Strategies
            </h1>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">
              Master the core grammatical structures, formulas, common pitfalls, and reading strategies tested in the SENA assessment.
            </p>
          </div>

          <button
            type="button"
            onClick={onReturnHome}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </button>
        </div>

        {/* 2-Zone Layout: Left Topics Navigator / Right Deep Dive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Topic Selector List (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-1 mb-2">
              Grammar Topics ({grammarTopics.length})
            </div>

            {grammarTopics.map((topic, index) => {
              const isSelected = topic.id === selectedTopic.id;

              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => setSelectedTopicId(topic.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-slate-900 border-teal-400/80 shadow-md text-white'
                      : 'bg-slate-950/60 border-slate-800/80 text-slate-300 hover:bg-slate-900/60 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold ${
                        isSelected
                          ? 'bg-teal-400 text-slate-950'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {index + 1}
                    </span>
                    <div>
                      <div className="font-bold text-sm leading-tight">
                        {topic.title}
                      </div>
                      <div className="text-[11px] text-slate-400 truncate max-w-[200px]">
                        {topic.subtitle}
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-teal-400 translate-x-1' : 'text-slate-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Topic Comprehensive Card (8 cols) */}
          <div className="lg:col-span-8 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6">
            {/* Topic Header & Direct Practice CTA */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400 block mb-1">
                  Grammar Reference Guide
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedTopic.title}
                </h2>
                <div className="text-sm text-slate-400 mt-1">
                  {selectedTopic.subtitle}
                </div>
              </div>

              <button
                type="button"
                onClick={() => onStartCategoryPractice(selectedTopic.categoryKey)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-teal-400 hover:bg-teal-300 text-slate-950 transition-all shadow-md shadow-teal-400/20 active:scale-95 cursor-pointer"
              >
                <span>Practice This Topic</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Simple Definition */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Simple Definition
              </h3>
              <p className="text-slate-200 text-base leading-relaxed">
                {selectedTopic.definition}
              </p>
            </div>

            {/* Grammatical Structure Formula */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-1.5">
                Grammatical Structure Formula
              </div>
              <code className="text-sm sm:text-base text-teal-200 font-mono block font-semibold">
                {selectedTopic.structure}
              </code>
            </div>

            {/* When to use it */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                When to Use It
              </h3>
              <ul className="space-y-2">
                {selectedTopic.whenToUse.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <span className="text-teal-400 font-bold">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Positive Examples */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Positive Examples</span>
              </h3>
              <div className="space-y-2">
                {selectedTopic.positiveExamples.map((ex, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center justify-between gap-3 text-sm text-slate-200"
                  >
                    <span>{ex}</span>
                    <button
                      type="button"
                      onClick={() => speakSentence(ex)}
                      title="Listen"
                      className="p-1 text-slate-500 hover:text-teal-400 transition-colors cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Negative Examples */}
            {selectedTopic.negativeExamples.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  <span>Negative Examples</span>
                </h3>
                <div className="space-y-2">
                  {selectedTopic.negativeExamples.map((ex, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center justify-between gap-3 text-sm text-slate-200"
                    >
                      <span>{ex}</span>
                      <button
                        type="button"
                        onClick={() => speakSentence(ex)}
                        title="Listen"
                        className="p-1 text-slate-500 hover:text-indigo-400 transition-colors cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Common Mistakes */}
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40">
              <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span>Common Mistakes to Avoid in the Quiz</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-rose-200/90 leading-relaxed">
                {selectedTopic.commonMistakes.map((mistake, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold shrink-0 mt-0.5">·</span>
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Spanish Explanation */}
            <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/30">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-1.5">
                Explicación en Español para Aprendices:
              </div>
              <p className="text-xs sm:text-sm text-indigo-200 leading-relaxed">
                {selectedTopic.spanishExplanation}
              </p>
            </div>

            {/* Bottom Action */}
            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                type="button"
                onClick={() => onStartCategoryPractice(selectedTopic.categoryKey)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-teal-400 hover:bg-teal-300 text-slate-950 transition-all shadow-lg shadow-teal-400/20 active:scale-95 cursor-pointer"
              >
                <span>Start Practice on {selectedTopic.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
