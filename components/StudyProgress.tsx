'use client';

import { useEffect, useState } from 'react';

interface StudyProgressProps {
  track: 'business' | 'design';
  totalConcepts: number;
}

export default function StudyProgress({ track, totalConcepts }: StudyProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const pct = progress * 100;
  const conceptsDone = Math.round(progress * totalConcepts);
  const isDone = progress > 0.98;

  const gradient = track === 'business'
    ? 'linear-gradient(90deg, #0d9488, #2dd4bf, #34d399)'
    : 'linear-gradient(90deg, #e11d48, #fb7185, #f472b6)';
  const glow = track === 'business'
    ? '0 0 12px rgba(45,212,191,0.6)'
    : '0 0 12px rgba(251,113,133,0.6)';

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Track */}
      <div className="h-[5px] bg-white/5">
        <div
          className="h-full transition-[width] duration-150 ease-out"
          style={{ width: `${pct}%`, background: gradient, boxShadow: glow }}
        />
      </div>

      {/* Rider — brain walks across, party when done */}
      <div
        className="absolute -top-0.5 transition-[left] duration-150 ease-out select-none pointer-events-none"
        style={{ left: `calc(${pct}% - 14px)` }}
      >
        <span className={`block text-lg ${isDone ? '' : 'bob'}`} style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.6))' }}>
          {isDone ? '🎉' : '🧠'}
        </span>
      </div>

      {/* Concept counter pill — appears once you start scrolling */}
      <div
        className={`absolute top-3 right-4 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-xs font-dm transition-all duration-300 ${
          progress > 0.02 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        }`}
      >
        <span className={track === 'business' ? 'text-teal-400' : 'text-rose-400'}>
          {isDone ? 'Lecture complete! 🎓' : `~${conceptsDone} / ${totalConcepts} concepts`}
        </span>
      </div>
    </div>
  );
}
