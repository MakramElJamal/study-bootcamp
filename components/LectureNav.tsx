import Link from 'next/link';

interface LectureNavProps {
  track: 'business' | 'design';
  currentNumber: number;
  totalLectures: number;
}

export default function LectureNav({ track, currentNumber, totalLectures }: LectureNavProps) {
  const prevNum = currentNumber - 1;
  const nextNum = currentNumber + 1;

  return (
    <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/10">
      {prevNum >= 1 ? (
        <Link
          href={`/study/${track}/${prevNum}`}
          className="group flex items-center gap-2 px-5 py-3 rounded-xl font-dm text-sm font-medium glass-card text-white/80 hover:text-white"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
          Lecture {prevNum}
        </Link>
      ) : (
        <div />
      )}

      <Link
        href={`/study/${track}`}
        className="link-underline text-xs text-white/30 hover:text-white/60 font-dm transition-colors"
      >
        All {track === 'business' ? 'Business' : 'Design'} Lectures
      </Link>

      {nextNum <= totalLectures ? (
        <Link
          href={`/study/${track}/${nextNum}`}
          className="group flex items-center gap-2 px-5 py-3 rounded-xl font-dm text-sm font-medium glass-card text-white/80 hover:text-white"
        >
          Lecture {nextNum}
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
