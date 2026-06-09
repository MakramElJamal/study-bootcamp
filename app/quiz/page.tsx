import Link from 'next/link';
import { exams } from '@/data/quizzes';
import Footer from '@/components/Footer';

const examAccents = [
  { border: 'accent-top-amber', hover: 'card-amber halo halo-amber', badge: 'bg-amber-500/12 border-amber-500/20 text-amber-400', dot: 'bg-amber-400', label: 'Official Mock' },
  { border: 'accent-top-teal',  hover: 'card-teal halo halo-teal',  badge: 'bg-teal-500/12  border-teal-500/20  text-teal-400',  dot: 'bg-teal-400',  label: 'Business Focus' },
  { border: 'accent-top-rose',  hover: 'card-rose halo halo-rose',  badge: 'bg-rose-500/12  border-rose-500/20  text-rose-400',  dot: 'bg-rose-400',  label: 'Design Focus' },
  { border: 'accent-top-indigo',hover: 'card-indigo halo halo-indigo',badge: 'bg-indigo-500/12 border-indigo-500/20 text-indigo-400',dot: 'bg-indigo-400',label: 'Mixed' },
  { border: 'accent-top-indigo',hover: 'card-indigo halo halo-indigo',badge: 'bg-red-500/12    border-red-500/20    text-red-400',   dot: 'bg-red-400',   label: 'Hardest' },
];

export default function QuizPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-12">
        {/* Header */}
        <div className="mb-4 fade-up">
          <Link href="/" className="inline-flex items-center gap-1.5 text-white/30 hover:text-white/60 text-sm font-dm transition-colors mb-8">
            ← Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black font-syne text-white mb-3">
            Quiz Mode
          </h1>
          <p className="text-white/45 font-dm">
            5 exams to sharpen your understanding.
          </p>
        </div>

        {/* Disclaimer banner */}
        <div className="mb-10 p-4 rounded-xl bg-white/3 border border-white/8 flex items-start gap-3">
          <span className="text-lg mt-0.5 flex-shrink-0">💡</span>
          <div>
            <p className="text-white/60 font-dm text-sm leading-relaxed">
              <span className="text-white/80 font-semibold">Heads up:</span> These aren&apos;t structured like your actual exam — no case studies or calculation prompts. They&apos;re here to test your grasp of the concepts so you can spot gaps before exam day.
            </p>
          </div>
        </div>

        {/* Exam cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger">
          {exams.map((exam, i) => {
            const accent = examAccents[i];
            return (
              <Link key={exam.id} href={`/quiz/${exam.id}`} className="group block">
                <div className={`glass-card ${accent.border} ${accent.hover} shine p-6 h-full relative overflow-hidden`}>
                  {/* Big background number */}
                  <div className="absolute -bottom-3 -right-2 text-8xl font-black font-syne text-white/4 pointer-events-none select-none leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-dm ${accent.badge}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
                        {accent.label}
                      </div>
                      {exam.isReal && (
                        <span className="text-xs text-white/25 font-dm">Official</span>
                      )}
                    </div>

                    <h3 className="font-syne font-bold text-white text-lg mb-2 leading-snug">
                      {exam.title}
                    </h3>
                    <p className="text-white/35 font-dm text-sm leading-relaxed mb-5 line-clamp-2">
                      {exam.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/6">
                      <div className="flex items-center gap-3">
                        <span className="text-white/30 font-dm text-xs">{exam.questions.length} questions</span>
                        <span className="text-white/15">·</span>
                        <span className="text-white/30 font-dm text-xs">~{Math.round(exam.questions.length * 1.5)} min</span>
                      </div>
                      <span className="text-white/30 group-hover:text-white/60 font-dm text-xs transition-colors">
                        Start →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
