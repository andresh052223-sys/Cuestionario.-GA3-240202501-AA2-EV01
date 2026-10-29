import React from 'react';
import {
  GraduationCap,
  Play,
  BookOpen,
  BarChart3,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Layers,
  Award,
  Zap,
  Globe2,
  FileText
} from 'lucide-react';
import { PracticeMode, QuestionCategory, UserGlobalProgress } from '../types/quiz';
import { CATEGORY_INFO } from '../data/questionsData';

interface HomeScreenProps {
  progress: UserGlobalProgress;
  onStartMode: (mode: PracticeMode, category?: QuestionCategory) => void;
  onNavigate: (view: 'home' | 'grammar' | 'progress') => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  progress,
  onStartMode,
  onNavigate
}) => {
  const overallAccuracy =
    progress.totalQuestionsAnswered > 0
      ? Math.round(
          (progress.totalCorrect / progress.totalQuestionsAnswered) * 100
        )
      : 0;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-16">
      {/* Hero Welcome Section */}
      <section className="relative overflow-hidden pt-10 pb-14 sm:pt-16 sm:pb-20 px-4 sm:px-6 border-b border-slate-850">
        {/* Subtle Ambient Radial Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-gradient-to-b from-teal-500/10 via-indigo-600/10 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Official SENA Accreditation Header */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-teal-500/30 text-teal-300 text-xs font-semibold shadow-sm">
            <GraduationCap className="w-4 h-4 text-teal-400" />
            <span>SENA Apprentice Official English Preparation</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-300">Guía de Aprendizaje 3</span>
          </div>

          {/* EXACT Evidence Title Prominently Displayed (36-44px desktop) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Evidencia GA3-240202501-AA2-EV01. Cuestionario
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-indigo-200 to-teal-100">
            Practice English Grammar and Reading Comprehension
          </h2>

          {/* Short Description */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Practice at your own pace, master English modal verbs and conditional structures, analyze reading texts, and learn immediately from every mistake before taking the official SENA evaluation.
          </p>

          {/* Guarantee Badges: NO TIME LIMIT + IMMEDIATE FEEDBACK */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-300 pt-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-teal-300">
              <Clock className="w-4 h-4 text-teal-400" />
              <span className="font-semibold">No time limit or countdown</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-indigo-300">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="font-semibold">Immediate explanations & Spanish support</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-emerald-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="font-semibold">60 Original practice questions</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => onStartMode('quick15')}
              className="flex items-center gap-2.5 px-8 py-4 rounded-xl font-extrabold text-base sm:text-lg bg-teal-400 hover:bg-teal-300 text-slate-950 transition-all duration-200 shadow-xl shadow-teal-400/25 active:scale-95 cursor-pointer"
            >
              <Play className="w-5 h-5 fill-slate-950" />
              <span>START PRACTICE (15 Questions)</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('grammar')}
              className="flex items-center gap-2 px-6 py-4 rounded-xl font-bold text-sm sm:text-base bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700 hover:border-slate-600 transition-colors cursor-pointer"
            >
              <BookOpen className="w-5 h-5 text-teal-400" />
              <span>REVIEW GRAMMAR</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('progress')}
              className="flex items-center gap-2 px-6 py-4 rounded-xl font-bold text-sm sm:text-base bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700 hover:border-slate-600 transition-colors cursor-pointer"
            >
              <BarChart3 className="w-5 h-5 text-indigo-400" />
              <span>VIEW MY PROGRESS</span>
            </button>
          </div>

          {/* Apprentice Visual Progress Strip if they have practiced */}
          {progress.totalQuestionsAnswered > 0 && (
            <div className="max-w-xl mx-auto mt-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs sm:text-sm">
              <div className="text-left">
                <span className="text-slate-400 block text-xs">Your Progress on This Device</span>
                <span className="font-bold text-white">
                  {progress.totalQuestionsAnswered} answered · {progress.totalCorrect} correct
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-400 font-extrabold text-lg tabular-nums">
                  {overallAccuracy}%
                </span>
                <span className="text-slate-500">accuracy</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Choose Practice Mode Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-8">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-1">
            Flexible Learning Tracks
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Choose Your Practice Session
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Take the standardized 15-question quiz, try all 60 questions, or target specific grammar categories.
          </p>
        </div>

        {/* 4 Practice Mode Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Mode 1: 15-Question Practice Test (Standard format) */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950/30 border border-teal-500/40 shadow-xl flex flex-col justify-between hover:border-teal-400 transition-all group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-teal-400 tracking-wider uppercase flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>Standard Test Simulator</span>
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-teal-400/20 text-teal-300">
                  15 Questions
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                15-Question Practice Test
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Directly mirrors the length and distribution of the official SENA evaluation. Questions are selected across modal verbs, conditionals, scrambled sentences, and reading comprehension.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onStartMode('quick15')}
              className="mt-6 flex items-center justify-between w-full py-3 px-4 rounded-xl font-bold text-sm bg-teal-400 hover:bg-teal-300 text-slate-950 transition-colors cursor-pointer"
            >
              <span>Start 15-Question Test</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mode 2: Complete 60-Question Practice */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col justify-between hover:border-indigo-500/50 transition-all group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase flex items-center gap-1.5">
                  <Layers className="w-4 h-4" />
                  <span>Full Bank Mastery</span>
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                  60 Questions
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                Complete Question Bank Practice
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Practice the entire curriculum of 60 original questions covering all six categories in depth. Perfect for comprehensive preparation and zero surprises.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onStartMode('complete60')}
              className="mt-6 flex items-center justify-between w-full py-3 px-4 rounded-xl font-bold text-sm bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer border border-slate-700"
            >
              <span>Start Complete 60 Questions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mode 3: Reading Comprehension Practice (Daniel Goleman) */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col justify-between hover:border-emerald-500/50 transition-all group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase flex items-center gap-1.5">
                  <FileText className="w-4 h-4" />
                  <span>Reading Comprehension</span>
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                  10 Questions
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                Daniel Goleman & Emotional Intelligence
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Analyze the 228-word biographical passage about Daniel Goleman and solve 10 fact-checking True/False questions with detailed evidence citations from the text.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onStartMode('reading')}
              className="mt-6 flex items-center justify-between w-full py-3 px-4 rounded-xl font-bold text-sm bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer border border-slate-700"
            >
              <span>Practice Reading Comprehension</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mode 4: Review Grammar Hub */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col justify-between hover:border-violet-500/50 transition-all group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-violet-400 tracking-wider uppercase flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  <span>Rule Reference</span>
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-violet-500/20 text-violet-300">
                  7 Guides
                </span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                Grammar Reference Cards
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Review definitions, grammatical formulas, when to use each structure, common errors to avoid, and Spanish explanations before answering questions.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('grammar')}
              className="mt-6 flex items-center justify-between w-full py-3 px-4 rounded-xl font-bold text-sm bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer border border-slate-700"
            >
              <span>Open Grammar Guides</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Practice Quick Launcher */}
        <div className="pt-8 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Practice by Grammar Category (10 Questions Each)
            </h3>
            <span className="text-xs text-slate-400">Targeted drilling</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(Object.keys(CATEGORY_INFO) as QuestionCategory[]).map((catKey) => {
              const info = CATEGORY_INFO[catKey];
              const stat = progress.categoryStats[catKey];
              const accuracy =
                stat && stat.attempted > 0
                  ? Math.round((stat.correct / stat.attempted) * 100)
                  : null;

              return (
                <div
                  key={catKey}
                  className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-teal-400">
                        {info.count} Questions
                      </span>
                      {accuracy !== null && (
                        <span className="text-xs font-bold text-slate-300 tabular-nums">
                          {accuracy}% accuracy
                        </span>
                      )}
                    </div>

                    <h4 className="font-bold text-white text-sm sm:text-base">
                      {info.title}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {info.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onStartMode('category', catKey)}
                    className="mt-4 flex items-center justify-between w-full py-2 px-3 rounded-lg text-xs font-bold text-teal-300 hover:text-white bg-slate-800 hover:bg-teal-500/20 border border-slate-700/80 transition-colors cursor-pointer"
                  >
                    <span>Practice Category</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
