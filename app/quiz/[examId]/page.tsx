import { notFound } from 'next/navigation';
import Link from 'next/link';
import { exams } from '@/data/quizzes';
import Footer from '@/components/Footer';
import QuizClient from './QuizClient';

interface Props {
  params: Promise<{ examId: string }>;
}

export default async function QuizExamPage({ params }: Props) {
  const { examId } = await params;
  const exam = exams.find((e) => e.id === examId);

  if (!exam) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/quiz" className="text-white/30 hover:text-white/60 text-sm font-dm transition-colors">
            ← Quizzes
          </Link>
          <div className="flex items-center gap-3 mt-5 mb-1">
            <h1 className="text-2xl font-bold font-syne text-white">{exam.title}</h1>
            {exam.isReal && (
              <span className="px-2 py-0.5 rounded-md bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-dm">
                Official
              </span>
            )}
          </div>
          <p className="text-white/40 font-dm text-sm">{exam.questions.length} questions</p>
        </div>

        <QuizClient exam={exam} />
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return exams.map((exam) => ({ examId: exam.id }));
}
