'use client';

import { QuizQuestion as QuizQuestionType } from '@/types';

interface QuizQuestionProps {
  question: QuizQuestionType;
  questionNumber: number;
  totalQuestions: number;
  selectedIndex: number | null;
  confirmed: boolean;
  onSelect: (index: number) => void;
  onConfirm: () => void;
  onNext: () => void;
  isLast: boolean;
}

export default function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  selectedIndex,
  confirmed,
  onSelect,
  onConfirm,
  onNext,
  isLast,
}: QuizQuestionProps) {
  const isCorrect = confirmed && selectedIndex === question.correctIndex;

  const getOptionStyle = (index: number) => {
    if (!confirmed) {
      if (selectedIndex === index) {
        return 'border-indigo-500 bg-indigo-500/15 text-white shadow-[0_0_24px_rgba(99,102,241,0.15)] scale-[1.01]';
      }
      return 'border-white/10 bg-white/4 text-white/70 hover:border-white/25 hover:bg-white/8 hover:text-white hover:translate-x-1 cursor-pointer';
    }
    if (index === question.correctIndex) {
      return 'border-teal-500 bg-teal-500/15 text-teal-300 answer-correct shadow-[0_0_28px_rgba(20,184,166,0.18)]';
    }
    if (index === selectedIndex && index !== question.correctIndex) {
      return 'border-rose-500 bg-rose-500/15 text-rose-300 answer-wrong';
    }
    return 'border-white/5 bg-white/2 text-white/25';
  };

  return (
    <div key={question.id} className="w-full max-w-2xl mx-auto question-in">
      {/* Question */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-0.5 rounded-md bg-indigo-500/12 border border-indigo-500/20 text-indigo-300 text-xs font-dm">
            {questionNumber} / {totalQuestions}
          </span>
          <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-white/35 text-xs font-dm">
            {question.topic}
          </span>
        </div>
        <h2 className="text-lg md:text-xl font-syne font-semibold text-white leading-snug">
          {question.question}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6 stagger">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !confirmed && onSelect(index)}
            disabled={confirmed}
            className={`w-full text-left px-5 py-4 rounded-xl border font-dm text-sm transition-all duration-200 ${getOptionStyle(index)}`}
          >
            <span className="inline-block w-5 h-5 rounded-full border border-current mr-3 text-xs text-center leading-[18px] font-bold">
              {String.fromCharCode(65 + index)}
            </span>
            {option}
            {confirmed && index === question.correctIndex && (
              <span className="ml-2 text-teal-400">✓</span>
            )}
            {confirmed && index === selectedIndex && index !== question.correctIndex && (
              <span className="ml-2 text-rose-400">✗</span>
            )}
          </button>
        ))}
      </div>

      {/* Explanation */}
      {confirmed && (
        <div className={`reveal-down rounded-xl p-4 mb-6 ${isCorrect ? 'bg-teal-500/10 border border-teal-500/25' : 'bg-rose-500/10 border border-rose-500/25'}`}>
          <p className={`text-xs uppercase tracking-widest font-dm font-semibold mb-2 ${isCorrect ? 'text-teal-400' : 'text-rose-400'}`}>
            {isCorrect ? '✓ Correct!' : '✗ Not quite'}
          </p>
          <p className="text-white/70 font-dm text-sm leading-relaxed">
            {question.explanation}
          </p>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex justify-end gap-3">
        {!confirmed && selectedIndex !== null && (
          <button
            onClick={onConfirm}
            className="shine relative px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white font-dm text-sm font-semibold rounded-xl transition-all duration-200 hover:shadow-[0_8px_28px_rgba(99,102,241,0.35)] hover:-translate-y-0.5 fade-up"
          >
            Confirm Answer
          </button>
        )}
        {confirmed && (
          <button
            onClick={onNext}
            className="shine relative px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/25 text-white font-dm text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 fade-up"
          >
            {isLast ? 'See Results →' : 'Next Question →'}
          </button>
        )}
      </div>
    </div>
  );
}
