import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/8 blur-[120px] float-animation" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-violet-500/8 blur-[100px] float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-teal-500/5 blur-[80px] float-animation" style={{ animationDelay: '1s' }} />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 relative z-10">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-500/25 text-indigo-300 text-xs font-dm tracking-widest uppercase mb-6">
            Al-Hussein Technical University · Spring 2026
          </div>

          <h1 className="text-6xl md:text-8xl font-black font-syne text-white mb-4 leading-none tracking-tight">
            Bootcamp<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              Brain
            </span>
            <span className="ml-3">🧠</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/50 font-dm font-light mt-6 mb-3">
            Study smarter. Think like a founder.
          </p>
          <p className="text-sm text-white/30 font-dm">
            Entrepreneurship Bootcamp · Business Track + Design Thinking Track
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-2xl mb-8">
          <Link href="/study" className="group block">
            <div className="glass-card p-7 h-full transition-all duration-300 group-hover:border-indigo-500/30">
              <div className="text-4xl mb-4">📖</div>
              <h2 className="text-2xl font-bold font-syne text-white mb-2">Study Mode</h2>
              <p className="text-white/50 font-dm text-sm leading-relaxed mb-4">
                Concept cards for all lectures. Business Track (9 lectures) and Design Thinking Track (7 lectures).
              </p>
              <div className="flex items-center gap-2 text-indigo-400 text-sm font-dm font-medium">
                <span>Start studying</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>

          <Link href="/quiz" className="group block">
            <div className="glass-card p-7 h-full transition-all duration-300 group-hover:border-amber-500/30">
              <div className="text-4xl mb-4">⚡</div>
              <h2 className="text-2xl font-bold font-syne text-white mb-2">Quiz Mode</h2>
              <p className="text-white/50 font-dm text-sm leading-relaxed mb-4">
                5 exams including the real mock exam. Self-grading with explanations for every question.
              </p>
              <div className="flex items-center gap-2 text-amber-400 text-sm font-dm font-medium">
                <span>Take a quiz</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Track badges */}
        <div className="flex flex-wrap gap-3 justify-center">
          <div className="px-4 py-2 rounded-full glass-card text-xs font-dm text-teal-400 flex items-center gap-2">
            <span>📊</span> Business Track · Prof. Zaid Maaytah
          </div>
          <div className="px-4 py-2 rounded-full glass-card text-xs font-dm text-rose-400 flex items-center gap-2">
            <span>🎨</span> Design Thinking · Prof. Fayzeh Abuhaltam
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
