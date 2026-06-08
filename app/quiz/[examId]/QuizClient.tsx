'use client';

import { useState } from 'react';
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

  const handleConfirm = () => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = selectedIndex;
    setAnswers(newAnswers);
    setConfirmed(true);
  };

  const handleNext = () => {
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
  };

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
    </div>
  );
}
