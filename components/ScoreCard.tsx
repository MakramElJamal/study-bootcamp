interface ScoreCardProps {
  score: number;
  total: number;
}

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

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Ring */}
      <div className="relative w-40 h-40">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
          <circle
            cx="60" cy="60" r="54" fill="none"
            className={`${getRingColor()} transition-all duration-1000`}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-3xl font-bold font-syne ${getScoreColor()}`}>{score}</span>
          <span className="text-white/30 text-sm font-dm">/ {total}</span>
        </div>
      </div>

      {/* Emoji + Message */}
      <div className="text-center">
        <div className="text-5xl mb-3">{emoji}</div>
        <p className={`text-xl font-syne font-bold ${getScoreColor()}`}>{message}</p>
        <p className="text-white/40 font-dm text-sm mt-1">{pct}% correct</p>
      </div>
    </div>
  );
}
