'use client';

interface ProgressBarProps {
  current: number;
  total: number;
  color?: 'indigo' | 'teal' | 'rose' | 'amber';
}

export default function ProgressBar({ current, total, color = 'indigo' }: ProgressBarProps) {
  const pct = Math.round((current / total) * 100);

  const colorMap = {
    indigo: 'bg-indigo-500',
    teal: 'bg-teal-500',
    rose: 'bg-rose-500',
    amber: 'bg-amber-500',
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs text-white/50 font-dm">{current} / {total}</span>
        <span className="text-xs text-white/50 font-dm">{pct}%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${colorMap[color]}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
