'use client';

interface ScoreCardProps {
  score: number;
  total: number;
}

const confettiColors = ['#6366f1', '#f59e0b', '#14b8a6', '#f43f5e', '#c084fc', '#fbbf24'];

export default function ScoreCard({ score, total }: ScoreCardProps) {
  const pct = Math.round((score / total) * 100);

  const getFeedback = () => {
    if (pct >= 90) return { emoji: '🏆', message: "You're a founder already." };
    if (pct >= 70) return { emoji: '🔥', message: 'Solid. A few gaps to close.' };
    if (pct >= 50) return { emoji: '📚', message: "Keep grinding. You're getting there." };
    return { emoji: '💀', message: 'Back to the study cards, legend.' };
  };

  const { emoji, message } = getFeedback();

  const getScoreColor = () => {
    if (pct >= 90) return 'text-amber-400';
    if (pct >= 70) return 'text-teal-400';
    if (pct >= 50) return 'text-indigo-400';
    return 'text-rose-400';
  };

  const getRingColor = () => {
    if (pct >= 90) return 'stroke-amber-400';
    if (pct >= 70) return 'stroke-teal-400';
    if (pct >= 50) return 'stroke-indigo-400';
    return 'stroke-rose-400';
  };

  const circumference = 2 * Math.PI * 54;
  const dashOffset = circumference - (pct / 100) * circumference;
  const showConfetti = pct >= 70;

  return (
    <div className="relative flex flex-col items-center gap-4">
      {/* Confetti burst for good scores */}
      {showConfetti && (
        <div className="absolute inset-x-0 -top-4 h-0 flex justify-center" aria-hidden>
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              className="confetti"
              style={{
                left: `${8 + i * 6.5}%`,
                background: confettiColors[i % confettiColors.length],
                animationDelay: `${0.9 + (i % 5) * 0.15}s`,
                width: i % 3 === 0 ? '6px' : '8px',
                height: i % 2 === 0 ? '10px' : '14px',
              }}
            />
          ))}
        </div>
      )}

      {/* Ring */}
      <div className="relative w-44 h-44">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
          <circle
            cx="60" cy="60" r="54" fill="none"
            className={`${getRingColor()} ring-animate`}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            style={{
              '--ring-circumference': circumference,
              '--ring-target': dashOffset,
              strokeDashoffset: dashOffset,
            } as React.CSSProperties}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center score-pop">
          <span className={`text-4xl font-bold font-syne ${getScoreColor()}`}>{score}</span>
          <span className="text-white/30 text-sm font-dm">/ {total}</span>
        </div>
      </div>

      {/* Emoji + Message */}
      <div className="text-center">
        <div className="text-5xl mb-3 emoji-drop">{emoji}</div>
        <p className={`text-xl font-syne font-bold ${getScoreColor()} fade-up`} style={{ animationDelay: '1.1s' }}>
          {message}
        </p>
        <p className="text-white/40 font-dm text-sm mt-1 fade-up" style={{ animationDelay: '1.25s' }}>
          {pct}% correct
        </p>
      </div>
    </div>
  );
}
