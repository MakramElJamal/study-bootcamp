'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Exam } from '@/types';
import QuizQuestion from '@/components/QuizQuestion';
import ProgressBar from '@/components/ProgressBar';

interface QuizClientProps {
  exam: Exam;
}

export default function QuizClient({ exam }: QuizClientProps) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(exam.questions.length).fill(null)
  );

  const currentQuestion = exam.questions[currentIndex];
  const isLast = currentIndex === exam.questions.length - 1;

  const handleSelect = (index: number) => {
    if (!confirmed) setSelectedIndex(index);
  };

  const handleConfirm = useCallback(() => {
    if (selectedIndex === null || confirmed) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = selectedIndex;
      return next;
    });
    setConfirmed(true);
  }, [selectedIndex, confirmed, currentIndex]);

  const handleNext = useCallback(() => {
    if (!confirmed) return;
    if (isLast) {
      const params = new URLSearchParams();
      answers.forEach((ans, i) => {
        params.set(`q${i}`, ans !== null ? String(ans) : '-1');
      });
      router.push(`/quiz/${exam.id}/results?${params.toString()}`);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedIndex(null);
      setConfirmed(false);
    }
  }, [confirmed, isLast, answers, router, exam.id]);

  // Keyboard controls: A–D / 1–4 select, Enter confirms then advances
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (!confirmed && selectedIndex !== null) handleConfirm();
        else if (confirmed) handleNext();
        return;
      }
      if (confirmed) return;
      const letter = e.key.toUpperCase();
      if (letter >= 'A' && letter <= 'D') {
        setSelectedIndex(letter.charCodeAt(0) - 65);
      } else if (e.key >= '1' && e.key <= '4') {
        setSelectedIndex(parseInt(e.key, 10) - 1);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [confirmed, selectedIndex, handleConfirm, handleNext]);

  return (
    <div className="w-full">
      <div className="mb-8">
        <ProgressBar
          current={currentIndex + (confirmed ? 1 : 0)}
          total={exam.questions.length}
          color="indigo"
        />
      </div>

      <QuizQuestion
        question={currentQuestion}
        questionNumber={currentIndex + 1}
        totalQuestions={exam.questions.length}
        selectedIndex={selectedIndex}
        confirmed={confirmed}
        onSelect={handleSelect}
        onConfirm={handleConfirm}
        onNext={handleNext}
        isLast={isLast}
      />

      {/* Keyboard hint */}
      <p className="hidden md:block text-center text-white/20 font-dm text-xs mt-10">
        Keyboard: <span className="text-white/35">A–D</span> or <span className="text-white/35">1–4</span> to select · <span className="text-white/35">Enter</span> to confirm &amp; continue
      </p>
    </div>
  );
}
