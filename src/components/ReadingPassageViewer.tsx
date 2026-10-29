import React, { useState } from 'react';
import {
  BookOpen,
  Volume2,
  Globe2,
  ChevronDown,
  ChevronUp,
  Languages,
  RotateCcw
} from 'lucide-react';
import { danielGolemanPassage } from '../data/readingData';
import { speakSentence } from '../utils/speech';

interface ReadingPassageViewerProps {
  isCollapsible?: boolean;
  defaultExpanded?: boolean;
}

export const ReadingPassageViewer: React.FC<ReadingPassageViewerProps> = ({
  isCollapsible = false,
  defaultExpanded = true
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [showSpanishSummary, setShowSpanishSummary] = useState(false);
  // Track translated state per paragraph index (0, 1, 2, 3...)
  const [translatedParagraphs, setTranslatedParagraphs] = useState<Record<number, boolean>>({});

  const fullEnglishText = danielGolemanPassage.content.join(' ');

  const toggleParagraphTranslation = (index: number) => {
    setTranslatedParagraphs((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleTranslateAll = () => {
    const allTranslated: Record<number, boolean> = {};
    danielGolemanPassage.content.forEach((_, idx) => {
      allTranslated[idx] = true;
    });
    setTranslatedParagraphs(allTranslated);
  };

  const handleResetToEnglishAll = () => {
    setTranslatedParagraphs({});
  };

  const translatedCount = Object.values(translatedParagraphs).filter(Boolean).length;
  const isAnyTranslated = translatedCount > 0;

  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 sm:p-6 shadow-xl mb-6">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-slate-100 text-base sm:text-lg">
              {danielGolemanPassage.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span>Reading Passage</span>
              <span aria-hidden="true">·</span>
              <span>{danielGolemanPassage.wordCount} words</span>
              <span aria-hidden="true">·</span>
              <span>4 Paragraphs</span>
              <span aria-hidden="true">·</span>
              <span className="text-teal-400 font-medium">Bilingual Interactive Reader</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Global Actions */}
          {isAnyTranslated ? (
            <button
              type="button"
              onClick={handleResetToEnglishAll}
              title="Reset all paragraphs to English"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer border border-slate-700"
            >
              <RotateCcw className="w-3.5 h-3.5 text-teal-400" />
              <span>Ver todo en Inglés</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleTranslateAll}
              title="Translate all paragraphs to Spanish"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-indigo-300 hover:text-white bg-slate-800 hover:bg-indigo-950/60 rounded-lg transition-colors cursor-pointer border border-slate-700"
            >
              <Languages className="w-3.5 h-3.5 text-indigo-400" />
              <span>Traducir todos</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => speakSentence(fullEnglishText)}
            title="Listen to full passage in English"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer border border-slate-700"
          >
            <Volume2 className="w-3.5 h-3.5 text-teal-400" />
            <span className="hidden sm:inline">Listen All</span>
          </button>

          <button
            type="button"
            onClick={() => setShowSpanishSummary(!showSpanishSummary)}
            title="Toggle Spanish Summary Box"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer border border-slate-700"
          >
            <Globe2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>{showSpanishSummary ? 'Ocultar Resumen' : 'Resumen'}</span>
          </button>

          {isCollapsible && (
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-lg cursor-pointer border border-slate-700"
              aria-label={isExpanded ? 'Collapse passage' : 'Expand passage'}
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="mt-4 space-y-4">
          {showSpanishSummary && (
            <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-800/50 text-indigo-200 text-xs sm:text-sm leading-relaxed mb-3">
              <span className="font-bold text-indigo-300 block mb-1">
                Resumen General en Español:
              </span>
              {danielGolemanPassage.summarySpanish}
            </div>
          )}

          {/* Interactive Paragraphs with Individual Translation Buttons */}
          <div className="space-y-3.5">
            {danielGolemanPassage.content.map((englishParagraph, idx) => {
              const isTranslated = !!translatedParagraphs[idx];
              const spanishParagraph =
                danielGolemanPassage.contentSpanish?.[idx] || englishParagraph;
              const displayText = isTranslated ? spanishParagraph : englishParagraph;

              return (
                <div
                  key={idx}
                  className={`rounded-xl border p-4 sm:p-5 transition-all duration-200 ${
                    isTranslated
                      ? 'bg-indigo-950/25 border-indigo-500/40 shadow-md shadow-indigo-950/20'
                      : 'bg-slate-950/50 border-slate-800/80 hover:border-slate-700/80'
                  }`}
                >
                  {/* Paragraph Control Header Strip */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-slate-800/70">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-400 tracking-wide">
                        {isTranslated ? `Párrafo ${idx + 1}` : `Paragraph ${idx + 1}`}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase ${
                          isTranslated
                            ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                            : 'bg-teal-500/10 text-teal-300 border border-teal-500/20'
                        }`}
                      >
                        {isTranslated ? 'Español' : 'English'}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Audio Listen for English version */}
                      <button
                        type="button"
                        onClick={() => speakSentence(englishParagraph)}
                        title="Listen to this paragraph in English"
                        className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-teal-300 bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5 text-teal-400" />
                        <span className="hidden sm:inline">Listen Paragraph</span>
                      </button>

                      {/* Requested Individual Toggle Button */}
                      <button
                        type="button"
                        onClick={() => toggleParagraphTranslation(idx)}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                          isTranslated
                            ? 'bg-indigo-600 hover:bg-indigo-500 text-white border-indigo-400 shadow-sm active:scale-95'
                            : 'bg-slate-800 hover:bg-indigo-950/60 text-indigo-300 hover:text-white border-indigo-500/30 active:scale-95'
                        }`}
                      >
                        <Languages className="w-3.5 h-3.5" />
                        <span>{isTranslated ? 'Ver en Inglés' : 'Traducir al Español'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Paragraph Text Display */}
                  <p
                    className={`text-sm sm:text-base leading-relaxed transition-colors ${
                      isTranslated
                        ? 'text-indigo-100 font-normal leading-relaxed'
                        : 'text-slate-300 leading-relaxed'
                    }`}
                  >
                    {displayText}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
