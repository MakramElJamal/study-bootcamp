import { ConceptCard as ConceptCardType } from '@/types';

interface ConceptCardProps {
  concept: ConceptCardType;
  index: number;
  track: 'business' | 'design';
}

export default function ConceptCard({ concept, index, track }: ConceptCardProps) {
  const accentColor = track === 'business' ? 'teal' : 'rose';

  const accentBg = track === 'business'
    ? 'bg-teal-500/10 border-teal-500/30 text-teal-400'
    : 'bg-rose-500/10 border-rose-500/30 text-rose-400';

  const accentBorder = track === 'business'
    ? 'border-l-teal-500'
    : 'border-l-rose-500';

  return (
    <div className="glass-card p-6 md:p-8 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start gap-4 mb-5">
        <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold font-syne ${accentBg}`}>
          {index + 1}
        </div>
        <h3 className="text-xl md:text-2xl font-bold font-syne text-white leading-tight">
          {concept.title}
        </h3>
      </div>

      {/* Explanation */}
      <p className="text-white/70 font-dm leading-relaxed mb-5">
        {concept.explanation}
      </p>

      {/* Key Points */}
      {concept.keyPoints && concept.keyPoints.length > 0 && (
        <div className="mb-5">
          <h4 className="text-xs uppercase tracking-widest text-white/40 font-dm mb-3">Key Points</h4>
          <ul className="space-y-2">
            {concept.keyPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-2.5 text-white/65 font-dm text-sm">
                <span className={`mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full ${track === 'business' ? 'bg-teal-500' : 'bg-rose-500'}`} />
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Example */}
      {concept.example && (
        <div className={`border-l-4 ${accentBorder} pl-4 mb-5`}>
          <p className="text-xs uppercase tracking-widest text-amber-500/70 font-dm mb-1.5">Example</p>
          <p className="text-white/60 font-dm text-sm italic leading-relaxed">
            {concept.example}
          </p>
        </div>
      )}

      {/* Exam Tip */}
      {concept.examTip && (
        <div className="bg-amber-500/10 border border-amber-500/25 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-amber-400 text-base">⚡</span>
            <p className="text-xs uppercase tracking-widest text-amber-400/80 font-dm font-semibold">Remember This</p>
          </div>
          <p className="text-amber-200/80 font-dm text-sm leading-relaxed">
            {concept.examTip}
          </p>
        </div>
      )}
    </div>
  );
}
