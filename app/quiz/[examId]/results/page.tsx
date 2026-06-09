import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { exams } from '@/data/quizzes';
import Footer from '@/components/Footer';
import ResultsClient from './ResultsClient';

interface Props {
  params: Promise<{ examId: string }>;
}

export default async function ResultsPage({ params }: Props) {
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
          <h1 className="text-2xl font-bold font-syne text-white mt-5 mb-1">
            Results · {exam.title}
          </h1>
        </div>

        <Suspense fallback={<div className="text-white/40 font-dm">Loading results...</div>}>
          <ResultsClient exam={exam} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return exams.map((exam) => ({ examId: exam.id }));
}
