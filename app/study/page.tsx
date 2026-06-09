import Link from 'next/link';
import Footer from '@/components/Footer';

export default function StudyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-12">
        {/* Header */}
        <div className="mb-12 fade-up">
          <Link href="/" className="inline-flex items-center gap-1.5 text-white/30 hover:text-white/60 text-sm font-dm transition-colors mb-8">
            ← Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black font-syne text-white mb-3">
            Study Mode
          </h1>
          <p className="text-white/40 font-dm">
            Pick a track. Work through the concepts. Use the exam tips.
          </p>
        </div>

        {/* Track cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 stagger">
          {/* Business Track */}
          <Link href="/study/business" className="group block">
            <div className="glass-card card-teal accent-top-teal shine p-8 h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="icon-wiggle w-14 h-14 rounded-2xl bg-teal-500/12 border border-teal-500/20 flex items-center justify-center text-3xl">
                  📊
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black font-syne text-white/10">9</div>
                  <div className="text-xs text-white/25 font-dm -mt-1">lectures</div>
                </div>
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-md bg-teal-500/12 border border-teal-500/20 text-teal-400 text-xs font-dm mb-3">
                Business Track
              </div>
              <h2 className="text-2xl font-bold font-syne text-white mb-3">Business Track</h2>
              <p className="text-white/40 font-dm text-sm leading-relaxed mb-6">
                Innovation · PEST/SWOT · Business Model Canvas · Market Sizing · Competitor Analysis · Pricing · 4Ps · Finance
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/6">
                <span className="text-white/30 font-dm text-xs">Based on Zaid Maaytah&apos;s lectures</span>
                <span className="text-teal-400 group-hover:translate-x-1 transition-transform duration-200 font-dm text-sm">→</span>
              </div>
            </div>
          </Link>

          {/* Design Track */}
          <Link href="/study/design" className="group block">
            <div className="glass-card card-rose accent-top-rose shine p-8 h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="icon-wiggle w-14 h-14 rounded-2xl bg-rose-500/12 border border-rose-500/20 flex items-center justify-center text-3xl">
                  🎨
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black font-syne text-white/10">7</div>
                  <div className="text-xs text-white/25 font-dm -mt-1">lectures</div>
                </div>
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-md bg-rose-500/12 border border-rose-500/20 text-rose-400 text-xs font-dm mb-3">
                Design Thinking
              </div>
              <h2 className="text-2xl font-bold font-syne text-white mb-3">Design Thinking</h2>
              <p className="text-white/40 font-dm text-sm leading-relaxed mb-6">
                Human-Centered Design · Research Methods · Personas · HMW · Prototyping · Validation · Feedback & Iteration
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/6">
                <span className="text-white/30 font-dm text-xs">Based on Fayzeh Abuhaltam&apos;s lectures</span>
                <span className="text-rose-400 group-hover:translate-x-1 transition-transform duration-200 font-dm text-sm">→</span>
              </div>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
