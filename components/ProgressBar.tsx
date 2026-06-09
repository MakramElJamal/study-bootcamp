'use client';

interface ProgressBarProps {
  current: number;
  total: number;
  color?: 'indigo' | 'teal' | 'rose' | 'amber';
}

export default function ProgressBar({ current, total, color = 'indigo' }: ProgressBarProps) {
  const pct = Math.round((current / total) * 100);

  const colorMap = {
    indigo: 'from-indigo-600 via-indigo-400 to-violet-400',
    teal: 'from-teal-600 via-teal-400 to-emerald-400',
    rose: 'from-rose-600 via-rose-400 to-pink-400',
    amber: 'from-amber-600 via-amber-400 to-yellow-400',
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs text-white/50 font-dm">{current} / {total}</span>
        <span className="text-xs text-white/50 font-dm tabular-nums">{pct}%</span>
      </div>
      <div className="w-full bg-white/8 rounded-full h-2 overflow-hidden">
        <div
          className={`bar-shimmer relative h-full rounded-full transition-all duration-700 ease-out bg-gradient-to-r ${colorMap[color]}`}
          style={{ width: `${Math.max(pct, 2)}%` }}
        />
      </div>
    </div>
  );
}
