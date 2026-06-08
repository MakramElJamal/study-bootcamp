'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Exam } from '@/types';
import ScoreCard from '@/components/ScoreCard';

interface ResultsClientProps {
  exam: Exam;
}

export default function ResultsClient({ exam }: ResultsClientProps) {
  const searchParams = useSearchParams();

  const answers: number[] = exam.questions.map((_, i) => {
    const val = searchParams.get(`q${i}`);
    return val !== null ? parseInt(val, 10) : -1;
  });

  const score = answers.filter(
    (ans, i) => ans === exam.questions[i].correctIndex
  ).length;

  return (
    <div className="w-full">
      {/* Score */}
      <div className="glass-card p-8 mb-8 flex flex-col items-center">
        <ScoreCard score={score} total={exam.questions.length} />
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        <Link
          href={`/quiz/${exam.id}`}
          className="flex-1 text-center py-3 px-5 glass-card text-white/70 hover:text-white font-dm text-sm font-medium rounded-xl transition-all duration-200"
        >
          Try Again
        </Link>
        <Link
          href="/quiz"
          className="flex-1 text-center py-3 px-5 bg-indigo-500 hover:bg-indigo-400 text-white font-dm text-sm font-medium rounded-xl transition-all duration-200"
        >
          Back to Quizzes
        </Link>
      </div>

      {/* Question review */}
      <div>
        <h2 className="text-xl font-bold font-syne text-white mb-5">Full Review</h2>
        <div className="space-y-5">
          {exam.questions.map((question, index) => {
            const userAnswer = answers[index];
            const isCorrect = userAnswer === question.correctIndex;

            return (
              <div key={question.id} className="glass-card p-5">
                <div className="flex items-start gap-3 mb-4">
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${isCorrect ? 'bg-teal-500/20 text-teal-400' : 'bg-rose-500/20 text-rose-400'}`}>
                    {isCorrect ? '✓' : '✗'}
                  </span>
                  <p className="text-white/80 font-dm text-sm font-medium leading-snug">
                    {index + 1}. {question.question}
                  </p>
                </div>

                <div className="pl-9 space-y-2 mb-4">
                  {question.options.map((opt, optIdx) => {
                    const isUserChoice = optIdx === userAnswer;
                    const isCorrectChoice = optIdx === question.correctIndex;

                    let style = 'text-white/30 font-dm text-xs';
                    if (isCorrectChoice) style = 'text-teal-400 font-dm text-xs font-semibold';
                    else if (isUserChoice && !isCorrect) style = 'text-rose-400 font-dm text-xs line-through';

                    return (
                      <div key={optIdx} className={`flex items-center gap-2 ${style}`}>
                        <span>{String.fromCharCode(65 + optIdx)}.</span>
                        <span>{opt}</span>
                        {isCorrectChoice && <span className="text-teal-400">← correct</span>}
                        {isUserChoice && !isCorrect && <span className="text-rose-400">← your answer</span>}
                      </div>
                    );
                  })}
                </div>

                <div className={`rounded-lg p-3 ${isCorrect ? 'bg-teal-500/8 border border-teal-500/15' : 'bg-white/4 border border-white/8'}`}>
                  <p className="text-white/50 font-dm text-xs leading-relaxed">
                    {question.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
