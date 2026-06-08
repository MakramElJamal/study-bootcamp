import Link from 'next/link';
import Footer from '@/components/Footer';

export default function StudyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-12">
        {/* Header */}
        <div className="mb-10">
          <Link href="/" className="text-white/30 hover:text-white/60 text-sm font-dm transition-colors">
            ← Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black font-syne text-white mt-6 mb-3">
            Study Mode
          </h1>
          <p className="text-white/50 font-dm">
            Choose your track to start reviewing concept cards.
          </p>
        </div>

        {/* Track cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Business Track */}
          <Link href="/study/business" className="group block">
            <div className="glass-card p-8 h-full transition-all duration-300 group-hover:border-teal-500/40">
              <div className="text-5xl mb-5">📊</div>
              <div className="inline-block px-3 py-1 rounded-full bg-teal-500/15 border border-teal-500/25 text-teal-400 text-xs font-dm mb-4">
                Business Track
              </div>
              <h2 className="text-2xl font-bold font-syne text-white mb-2">Business Track</h2>
              <p className="text-white/40 font-dm text-sm mb-1">Prof. Zaid Maaytah</p>
              <p className="text-white/50 font-dm text-sm mb-5">
                Innovation, PEST/SWOT, BMC, Market Sizing, Pricing, 4Ps, Finance
              </p>
              <div className="flex items-center gap-2 text-teal-400 text-sm font-dm font-medium">
                <span>9 Lectures</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>

          {/* Design Track */}
          <Link href="/study/design" className="group block">
            <div className="glass-card p-8 h-full transition-all duration-300 group-hover:border-rose-500/40">
              <div className="text-5xl mb-5">🎨</div>
              <div className="inline-block px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/25 text-rose-400 text-xs font-dm mb-4">
                Design Thinking
              </div>
              <h2 className="text-2xl font-bold font-syne text-white mb-2">Design Thinking</h2>
              <p className="text-white/40 font-dm text-sm mb-1">Prof. Fayzeh Abuhaltam</p>
              <p className="text-white/50 font-dm text-sm mb-5">
                HCD, Research, Personas, HMW, Prototyping, Validation, Feedback
              </p>
              <div className="flex items-center gap-2 text-rose-400 text-sm font-dm font-medium">
                <span>7 Lectures</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
