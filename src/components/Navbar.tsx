import React from 'react';
import { BookOpen, BarChart3, GraduationCap, Home, Award } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: 'home' | 'grammar' | 'progress' | 'practice-15' | 'practice-reading') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 text-left text-slate-100 hover:text-teal-400 transition-colors whitespace-nowrap shrink-0 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-teal-500/10">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-teal-400 transition-colors">
              SENA English Practice
            </div>
            <div className="text-[11px] text-slate-400 hidden sm:block">
              GA3-240202501-AA2-EV01
            </div>
          </div>
        </button>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={() => onNavigate('home')}
            className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 py-1 ${
              currentView === 'home'
                ? 'text-teal-400 font-semibold border-b-2 border-teal-400'
                : 'hover:text-white'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </button>

          <button
            onClick={() => onNavigate('practice-15')}
            className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 py-1 ${
              currentView === 'practice-15'
                ? 'text-teal-400 font-semibold border-b-2 border-teal-400'
                : 'hover:text-white'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Quick Test (15)</span>
          </button>

          <button
            onClick={() => onNavigate('practice-reading')}
            className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 py-1 ${
              currentView === 'practice-reading'
                ? 'text-teal-400 font-semibold border-b-2 border-teal-400'
                : 'hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Reading Comprehension</span>
          </button>

          <button
            onClick={() => onNavigate('grammar')}
            className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 py-1 ${
              currentView === 'grammar'
                ? 'text-teal-400 font-semibold border-b-2 border-teal-400'
                : 'hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Review Grammar</span>
          </button>

          <button
            onClick={() => onNavigate('progress')}
            className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 py-1 ${
              currentView === 'progress'
                ? 'text-teal-400 font-semibold border-b-2 border-teal-400'
                : 'hover:text-white'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>My Progress</span>
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('practice-15')}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm shadow-teal-400/20 active:scale-95 cursor-pointer"
          >
            Start Practice
          </button>
        </div>
      </div>
    </header>
  );
};
