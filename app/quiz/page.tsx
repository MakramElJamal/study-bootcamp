import Link from 'next/link';
import { exams } from '@/data/quizzes';
import Footer from '@/components/Footer';

export default function QuizPage() {
  const difficultyLabels = ['Real Mock', 'Business', 'Design', 'Mixed', 'Hard'];
  const difficultyColors = [
    'bg-amber-500/10 border-amber-500/25 text-amber-400',
    'bg-teal-500/10 border-teal-500/25 text-teal-400',
    'bg-rose-500/10 border-rose-500/25 text-rose-400',
    'bg-indigo-500/10 border-indigo-500/25 text-indigo-400',
    'bg-red-500/10 border-red-500/25 text-red-400',
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-12">
        {/* Header */}
        <div className="mb-10">
          <Link href="/" className="text-white/30 hover:text-white/60 text-sm font-dm transition-colors">
            ← Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black font-syne text-white mt-6 mb-3">
            Quiz Mode
          </h1>
          <p className="text-white/50 font-dm">
            Test yourself with 5 exams. The first one is the real mock from your course.
          </p>
        </div>

        {/* Exam cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {exams.map((exam, i) => (
            <Link key={exam.id} href={`/quiz/${exam.id}`} className="group block">
              <div className="glass-card p-6 h-full transition-all duration-300 group-hover:border-indigo-500/30">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl font-black font-syne text-white/15">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {exam.isReal && (
                    <span className="px-2 py-0.5 rounded-md bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-dm">
                      Official
                    </span>
                  )}
                </div>

                <h3 className="font-syne font-bold text-white text-lg mb-2 leading-snug">
                  {exam.title}
                </h3>
                <p className="text-white/40 font-dm text-sm mb-4 leading-relaxed line-clamp-2">
                  {exam.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-white/30 font-dm text-xs">{exam.questions.length} questions</span>
                    <span className="text-white/15">·</span>
                    <span className="text-white/30 font-dm text-xs">~{Math.round(exam.questions.length * 1.5)} min</span>
                  </div>
                </div>

                <div className={`inline-block px-2.5 py-0.5 rounded-md border text-xs font-dm mt-3 ${difficultyColors[i]}`}>
                  {difficultyLabels[i]}
                </div>

                <div className="mt-4 text-xs font-dm text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Start exam →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
