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
  const isWrong = confirmed && selectedIndex !== null && selectedIndex !== question.correctIndex;

  const getOptionStyle = (index: number) => {
    if (!confirmed) {
      if (selectedIndex === index) {
        return 'border-indigo-500 bg-indigo-500/15 text-white';
      }
      return 'border-white/10 bg-white/4 text-white/70 hover:border-white/25 hover:bg-white/8 hover:text-white cursor-pointer';
    }
    if (index === question.correctIndex) {
      return 'border-teal-500 bg-teal-500/15 text-teal-300';
    }
    if (index === selectedIndex && index !== question.correctIndex) {
      return 'border-rose-500 bg-rose-500/15 text-rose-300';
    }
    return 'border-white/5 bg-white/2 text-white/30';
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Question */}
      <div className="mb-6">
        <p className="text-xs text-white/40 font-dm mb-3">
          Question {questionNumber} of {totalQuestions} · {question.topic}
        </p>
        <h2 className="text-lg md:text-xl font-syne font-semibold text-white leading-snug">
          {question.question}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
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
        <div className={`rounded-xl p-4 mb-6 ${isCorrect ? 'bg-teal-500/10 border border-teal-500/25' : 'bg-rose-500/10 border border-rose-500/25'}`}>
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
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white font-dm text-sm font-semibold rounded-xl transition-all duration-200"
          >
            Confirm Answer
          </button>
        )}
        {confirmed && (
          <button
            onClick={onNext}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-dm text-sm font-semibold rounded-xl transition-all duration-200"
          >
            {isLast ? 'See Results →' : 'Next Question →'}
          </button>
        )}
      </div>
    </div>
  );
}
