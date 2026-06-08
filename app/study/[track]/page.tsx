import Link from 'next/link';
import { notFound } from 'next/navigation';
import { businessLectures } from '@/data/business';
import { designLectures } from '@/data/design';
import Footer from '@/components/Footer';
import { Lecture } from '@/types';

interface Props {
  params: Promise<{ track: string }>;
}

export default async function TrackPage({ params }: Props) {
  const { track } = await params;

  if (track !== 'business' && track !== 'design') {
    notFound();
  }

  const lectures: Lecture[] = track === 'business' ? businessLectures : designLectures;
  const isBusinessTrack = track === 'business';

  const accent = isBusinessTrack ? 'teal' : 'rose';
  const accentTag = isBusinessTrack
    ? 'bg-teal-500/10 border-teal-500/25 text-teal-400'
    : 'bg-rose-500/10 border-rose-500/25 text-rose-400';
  const accentHover = isBusinessTrack
    ? 'group-hover:border-teal-500/40'
    : 'group-hover:border-rose-500/40';
  const accentText = isBusinessTrack ? 'text-teal-400' : 'text-rose-400';

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-12">
        {/* Header */}
        <div className="mb-10">
          <Link href="/study" className="text-white/30 hover:text-white/60 text-sm font-dm transition-colors">
            ← Study Mode
          </Link>
          <div className="flex items-center gap-3 mt-6 mb-3">
            <span className="text-4xl">{isBusinessTrack ? '📊' : '🎨'}</span>
            <div>
              <div className={`inline-block px-3 py-1 rounded-full border text-xs font-dm mb-1 ${accentTag}`}>
                {isBusinessTrack ? 'Business Track' : 'Design Thinking Track'}
              </div>
              <h1 className="text-3xl md:text-4xl font-black font-syne text-white">
                {isBusinessTrack ? 'Business Track' : 'Design Thinking'}
              </h1>
            </div>
          </div>
          <p className="text-white/40 font-dm text-sm">
            {isBusinessTrack
              ? 'Prof. Zaid Maaytah · 9 Lectures'
              : 'Prof. Fayzeh Abuhaltam · 7 Lectures'}
          </p>
        </div>

        {/* Lecture grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {lectures.map((lecture) => (
            <Link key={lecture.id} href={`/study/${track}/${lecture.number}`} className="group block">
              <div className={`glass-card p-6 h-full transition-all duration-300 ${accentHover}`}>
                <div className={`text-xs font-dm font-semibold mb-3 ${accentText}`}>
                  Lecture {lecture.number}
                </div>
                <h3 className="font-syne font-bold text-white text-base mb-3 leading-snug">
                  {lecture.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {lecture.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-white/6 border border-white/8 text-white/40 text-xs font-dm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={`mt-4 text-xs font-dm ${accentText} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  {lecture.concepts.length} concepts →
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

export async function generateStaticParams() {
  return [{ track: 'business' }, { track: 'design' }];
}
