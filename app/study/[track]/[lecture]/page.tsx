import { notFound } from 'next/navigation';
import Link from 'next/link';
import { businessLectures } from '@/data/business';
import { designLectures } from '@/data/design';
import ConceptCard from '@/components/ConceptCard';
import LectureNav from '@/components/LectureNav';
import StudyProgress from '@/components/StudyProgress';
import Footer from '@/components/Footer';

interface Props {
  params: Promise<{ track: string; lecture: string }>;
}

export default async function LecturePage({ params }: Props) {
  const { track, lecture } = await params;

  if (track !== 'business' && track !== 'design') {
    notFound();
  }

  const lectures = track === 'business' ? businessLectures : designLectures;
  const lectureNum = parseInt(lecture, 10);
  const currentLecture = lectures.find((l) => l.number === lectureNum);

  if (!currentLecture) {
    notFound();
  }

  const isBusinessTrack = track === 'business';
  const accentTag = isBusinessTrack
    ? 'bg-teal-500/10 border-teal-500/25 text-teal-400'
    : 'bg-rose-500/10 border-rose-500/25 text-rose-400';

  return (
    <div className="min-h-screen flex flex-col">
      <StudyProgress
        track={track as 'business' | 'design'}
        totalConcepts={currentLecture.concepts.length}
      />
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 md:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-white/30 text-sm font-dm mb-8">
          <Link href="/study" className="hover:text-white/60 transition-colors">Study</Link>
          <span>/</span>
          <Link href={`/study/${track}`} className="hover:text-white/60 transition-colors capitalize">{track}</Link>
          <span>/</span>
          <span className="text-white/50">Lecture {lectureNum}</span>
        </div>

        {/* Lecture header */}
        <div className="mb-10 blur-in">
          <div className={`inline-block px-3 py-1 rounded-full border text-xs font-dm mb-4 ${accentTag}`}>
            {isBusinessTrack ? 'Business Track' : 'Design Thinking'} · Lecture {currentLecture.number}
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-syne text-white mb-4 leading-tight">
            {currentLecture.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {currentLecture.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-lg bg-white/6 border border-white/8 text-white/40 text-xs font-dm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Concept cards */}
        <div className="space-y-6 stagger">
          {currentLecture.concepts.map((concept, index) => (
            <ConceptCard
              key={concept.id}
              concept={concept}
              index={index}
              track={currentLecture.track}
            />
          ))}
        </div>

        {/* Navigation */}
        <LectureNav
          track={track as 'business' | 'design'}
          currentNumber={lectureNum}
          totalLectures={lectures.length}
        />
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const paths = [];
  for (let i = 1; i <= 9; i++) {
    paths.push({ track: 'business', lecture: String(i) });
  }
  for (let i = 1; i <= 7; i++) {
    paths.push({ track: 'design', lecture: String(i) });
  }
  return paths;
}
