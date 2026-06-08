import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-[-8%] w-[700px] h-[700px] rounded-full bg-indigo-500/10 blur-[140px] float-animation" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-violet-600/8 blur-[120px] float-animation" style={{ animationDelay: '2.5s' }} />
        <div className="absolute top-[50%] left-[35%] w-[350px] h-[350px] rounded-full bg-teal-500/6 blur-[90px] float-animation" style={{ animationDelay: '1.2s' }} />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 relative z-10">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-14 fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-dm tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Al-Hussein Technical University
          </div>

          <h1 className="text-6xl md:text-8xl font-black font-syne text-white leading-none tracking-tight mb-2">
            Bootcamp
          </h1>
          <h1 className="text-6xl md:text-8xl font-black font-syne leading-none tracking-tight mb-6 shimmer-text">
            Brain 🧠
          </h1>

          <p className="text-lg md:text-xl text-white/45 font-dm font-light mb-10">
            Study smarter. Think like a founder.
          </p>

          {/* Stats row */}
          <div className="flex items-center justify-center gap-6 md:gap-10 mb-10">
            {[
              { value: '16', label: 'Lectures' },
              { value: '120+', label: 'Concepts' },
              { value: '5', label: 'Practice Exams' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl md:text-3xl font-black font-syne text-white">{value}</div>
                <div className="text-xs text-white/30 font-dm mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl mb-10 stagger">
          <Link href="/study" className="group block">
            <div className="glass-card card-indigo accent-top-indigo p-7 h-full">
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-2xl">
                  📖
                </div>
                <span className="text-white/15 text-xs font-dm font-medium uppercase tracking-widest">Mode 01</span>
              </div>
              <h2 className="text-2xl font-bold font-syne text-white mb-2">Study Mode</h2>
              <p className="text-white/45 font-dm text-sm leading-relaxed mb-5">
                Flip through concept cards for all 16 lectures — key points, examples, and exam tips built in.
              </p>
              <div className="flex items-center gap-2 text-indigo-400 text-sm font-dm font-semibold">
                <span>Start studying</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
              </div>
            </div>
          </Link>

          <Link href="/quiz" className="group block">
            <div className="glass-card card-amber accent-top-amber p-7 h-full">
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/25 flex items-center justify-center text-2xl">
                  ⚡
                </div>
                <span className="text-white/15 text-xs font-dm font-medium uppercase tracking-widest">Mode 02</span>
              </div>
              <h2 className="text-2xl font-bold font-syne text-white mb-2">Quiz Mode</h2>
              <p className="text-white/45 font-dm text-sm leading-relaxed mb-5">
                5 practice exams to test your understanding — includes the real mock exam from the course.
              </p>
              <div className="flex items-center gap-2 text-amber-400 text-sm font-dm font-semibold">
                <span>Test yourself</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Track attribution */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass-card text-xs font-dm">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span className="text-white/50">Business Track based on</span>
            <span className="text-teal-400 font-medium">Zaid Maaytah&apos;s lectures</span>
          </div>
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass-card text-xs font-dm">
            <span className="w-2 h-2 rounded-full bg-rose-400" />
            <span className="text-white/50">Design Thinking based on</span>
            <span className="text-rose-400 font-medium">Fayzeh Abuhaltam&apos;s lectures</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
