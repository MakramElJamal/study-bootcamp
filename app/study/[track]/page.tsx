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

  const accentTag = isBusinessTrack
    ? 'bg-teal-500/10 border-teal-500/20 text-teal-400'
    : 'bg-rose-500/10 border-rose-500/20 text-rose-400';
  const accentHover = isBusinessTrack ? 'card-teal' : 'card-rose';
  const accentText = isBusinessTrack ? 'text-teal-400' : 'text-rose-400';
  const accentDot = isBusinessTrack ? 'bg-teal-400' : 'bg-rose-400';
  const topAccent = isBusinessTrack ? 'accent-top-teal' : 'accent-top-rose';

  const totalConcepts = lectures.reduce((sum, l) => sum + l.concepts.length, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 md:px-8 py-12">
        {/* Header */}
        <div className="mb-10 fade-up">
          <Link href="/study" className="inline-flex items-center gap-1.5 text-white/30 hover:text-white/60 text-sm font-dm transition-colors mb-8">
            ← Study Mode
          </Link>

          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className={`inline-block px-3 py-1 rounded-full border text-xs font-dm mb-3 ${accentTag}`}>
                {isBusinessTrack ? 'Business Track' : 'Design Thinking Track'}
              </div>
              <h1 className="text-3xl md:text-4xl font-black font-syne text-white mb-2">
                {isBusinessTrack ? 'Business Track' : 'Design Thinking'}
              </h1>
              <p className="text-white/30 font-dm text-sm">
                Based on {isBusinessTrack ? "Zaid Maaytah’s" : "Fayzeh Abuhaltam’s"} lectures
              </p>
            </div>

            <div className="flex gap-5">
              <div className="text-center">
                <div className="text-2xl font-black font-syne text-white">{lectures.length}</div>
                <div className="text-xs text-white/30 font-dm">Lectures</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black font-syne text-white">{totalConcepts}</div>
                <div className="text-xs text-white/30 font-dm">Concepts</div>
              </div>
            </div>
          </div>
        </div>

        {/* Lecture grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger">
          {lectures.map((lecture) => (
            <Link key={lecture.id} href={`/study/${track}/${lecture.number}`} className="group block">
              <div className={`glass-card ${accentHover} halo ${isBusinessTrack ? 'halo-teal' : 'halo-rose'} p-6 h-full relative overflow-hidden`}>
                {/* Big background number */}
                <div className={`absolute -top-2 -right-1 text-7xl font-black font-syne pointer-events-none select-none leading-none ${isBusinessTrack ? 'text-teal-500/6' : 'text-rose-500/6'}`}>
                  {String(lecture.number).padStart(2, '0')}
                </div>

                <div className="relative">
                  <div className={`text-xs font-dm font-semibold mb-2.5 ${accentText}`}>
                    Lecture {lecture.number}
                  </div>
                  <h3 className="font-syne font-bold text-white text-lg mb-3 leading-snug pr-6">
                    {lecture.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {lecture.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-white/35 text-xs font-dm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/6">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${accentDot}`} />
                      <span className="text-white/30 text-xs font-dm">{lecture.concepts.length} concepts</span>
                    </div>
                    <span className={`text-xs font-dm ${accentText} opacity-0 group-hover:opacity-100 transition-opacity`}>
                      Open →
                    </span>
                  </div>
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
