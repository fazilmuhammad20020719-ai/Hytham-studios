import React from 'react';

/* ─── Marquee Brand Data ─── */
const BRANDS = [
  {
    name: 'SEDONA',
    render: () => <span className="font-serif tracking-[0.22em] font-bold text-lg sm:text-xl text-slate-200">SEDONA</span>
  },
  {
    name: 'KRAVEBEAUTY',
    render: () => <span className="font-sans tracking-widest font-black text-sm sm:text-base text-slate-200 uppercase">KRAVEBEAUTY</span>
  },
  {
    name: 'STUDY FETCH',
    render: () => (
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-slate-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="8" width="18" height="12" rx="3" />
          <circle cx="9" cy="13" r="1.5" fill="currentColor" />
          <circle cx="15" cy="13" r="1.5" fill="currentColor" />
          <path d="M12 2v6" strokeWidth="2" strokeLinecap="round" />
          <path d="M9 17h6" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="font-sans font-extrabold text-xs sm:text-sm tracking-wider text-slate-200 uppercase">STUDY FETCH</span>
      </div>
    )
  },
  {
    name: 'Maple',
    render: () => (
      <div className="flex items-center gap-1.5">
        <svg className="w-5 h-5 text-slate-200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L14.2 8.4L21 9.3L16 13.9L17.5 20.6L12 17.2L6.5 20.6L8 13.9L3 9.3L9.8 8.4L12 2Z" />
        </svg>
        <span className="font-sans font-bold text-lg sm:text-xl tracking-tight text-slate-200">Maple</span>
      </div>
    )
  },
  {
    name: 'Stabledash',
    render: () => (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-slate-200 flex items-center justify-center font-black text-slate-900 text-xs">S</div>
        <span className="font-sans font-bold text-lg tracking-tight text-slate-200">Stabledash</span>
      </div>
    )
  },
  {
    name: 'm',
    render: () => (
      <div className="w-7 h-7 rounded-full border-2 border-slate-200 flex items-center justify-center font-bold text-slate-200 text-xs">
        m
      </div>
    )
  },
  {
    name: 'BAREBONE',
    render: () => (
      <div className="flex flex-col items-center leading-tight">
        <div className="flex items-center gap-1 font-black tracking-wider text-xs text-slate-200">
          <span className="text-amber-400 text-[10px]">▲</span> BAREBONE
        </div>
        <span className="text-[7px] sm:text-[8px] tracking-tight text-slate-400 font-semibold">YOUR PERSONAL TEAM OF AI WALL STREET ANALYSTS</span>
      </div>
    )
  },
  {
    name: 'Emirates',
    render: () => (
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 text-slate-200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 4h16v16H4zM7 7v10h10V7H7z"/>
        </svg>
        <span className="font-serif tracking-widest font-bold text-xs sm:text-sm text-slate-200 uppercase">Emirates</span>
      </div>
    )
  }
];

const TrustedLeaders = () => {
  return (
    <section id="testimonials" className="bg-[#05070b] relative z-10 pt-20 pb-36 px-4 sm:px-6 border-t border-white/[0.06]">

      {/* Subtle solid dark ambient highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* ── Section Title: Trusted by Industry Leaders ── */}
      <div className="text-center mb-14 sm:mb-20 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white tracking-tight inline-flex items-center gap-2 relative">
          <span>Trusted by</span>
          <span className="text-[#f5a623] relative">
            Industry Leaders
            {/* Hand-drawn Green Sparkle Doodle */}
            <svg className="absolute -top-3 -right-7 sm:-right-8 w-7 h-7 sm:w-8 sm:h-8 text-[#6ee7b7] pointer-events-none" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M 8 26 C 14 18 18 12 24 6" />
              <path d="M 16 28 C 22 22 26 16 32 10" />
              <path d="M 4 16 C 10 14 18 12 26 10" />
            </svg>
          </span>
        </h2>
      </div>

      {/* ── Logo Marquee Ticker ── */}
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden mb-28 py-4">
        {/* Solid gradient overlay fades matching bg-[#05070b] */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-[#05070b] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-[#05070b] to-transparent z-20" />

        {/* Marquee Content */}
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 opacity-75 hover:opacity-100 transition-opacity duration-300">
          {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, idx) => (
            <div key={idx} className="flex items-center justify-center shrink-0 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105">
              {brand.render()}
            </div>
          ))}
        </div>
      </div>

      {/* ── Tilted Glassmorphic Testimonial Cards (3X Vertical Length) ── */}
      <div className="max-w-6xl mx-auto relative z-10 pt-8">

        {/* Top Left Hand-drawn Green Doodle */}
        <div className="absolute -top-14 left-4 sm:left-12 pointer-events-none z-20 hidden md:block">
          <svg className="w-16 h-16 text-[#6ee7b7] opacity-80" viewBox="0 0 70 70" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M 15 55 C 20 20, 55 10, 48 32 C 42 50, 20 40, 35 18 C 45 8, 60 22, 55 45" />
          </svg>
        </div>

        {/* Top Right Hand-drawn Green Doodle */}
        <div className="absolute -top-14 right-4 sm:right-12 pointer-events-none z-20 hidden md:block">
          <svg className="w-16 h-16 text-[#6ee7b7] opacity-80" viewBox="0 0 70 70" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M 55 55 C 50 20, 15 10, 22 32 C 28 50, 50 40, 35 18 C 25 8, 10 22, 15 45" />
          </svg>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">

          {/* CARD 1 (Left - Tilted Left) */}
          <div className="relative group transform transition-all duration-500 ease-out md:-rotate-6 hover:rotate-0 hover:scale-[1.03] hover:z-30">
            
            {/* Purple Clapping Hands Badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 sm:left-10 sm:translate-x-0 z-20">
              <div className="w-12 h-12 rounded-2xl bg-[#1e1b4b] border border-indigo-400/40 flex items-center justify-center text-xl shadow-xl shadow-indigo-950/80 group-hover:scale-110 transition-transform duration-300">
                👏
              </div>
            </div>

            {/* Card Container — 3X Length Vertical Height */}
            <div className="min-h-[300px] sm:min-h-[580px] bg-[#0c1017] border border-white/[0.12] rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-2xl shadow-black/90 hover:border-amber-500/40 transition-colors duration-300">
              
              {/* Content */}
              <div className="pt-4">
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans tracking-wide mb-6">
                  Very receptive to feedback, quick to adapt, and genuinely collaborative.
                </p>
                <p className="text-base sm:text-lg text-[#f5a623] font-semibold leading-relaxed font-sans text-glow">
                  Their editing always captures the tone and story we're trying to tell, and they deliver with care and attention to detail.
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-white/[0.08] pt-6 mt-12">
                <h4 className="text-white font-bold text-base sm:text-lg tracking-tight">Liah Yoo</h4>
                <p className="text-slate-400 text-xs sm:text-sm font-medium mt-0.5">Founder, Krave Beauty</p>
              </div>
            </div>
          </div>

          {/* CARD 2 (Middle - Straight / Elevator Offset) */}
          <div className="relative group transform transition-all duration-500 ease-out md:translate-y-6 hover:translate-y-2 hover:scale-[1.03] hover:z-30">
            
            {/* Card Container — 3X Length Vertical Height */}
            <div className="min-h-[300px] sm:min-h-[580px] bg-[#0c1017] border border-white/[0.12] rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-2xl shadow-black/90 hover:border-indigo-500/40 transition-colors duration-300">
              
              {/* Content */}
              <div className="pt-4">
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans tracking-wide mb-6">
                  They've completely transformed our social media performance. Since partnering with them,
                </p>
                <p className="text-base sm:text-lg text-[#818cf8] font-semibold leading-relaxed font-sans mb-6">
                  we've seen our CPAs drop by 33%.
                </p>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans tracking-wide">
                  Their creative work has been outperforming what we were running before, and they've become an essential part of our growth stack.
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-white/[0.08] pt-6 mt-12">
                <h4 className="text-white font-bold text-base sm:text-lg tracking-tight">Aryan Arora</h4>
                <p className="text-slate-400 text-xs sm:text-sm font-medium mt-0.5">Head of Growth &amp; Advertising, Maple Inc</p>
              </div>
            </div>
          </div>

          {/* CARD 3 (Right - Tilted Right) */}
          <div className="relative group transform transition-all duration-500 ease-out md:rotate-6 hover:rotate-0 hover:scale-[1.03] hover:z-30">
            
            {/* Green Smiley Badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 sm:right-10 sm:left-auto sm:translate-x-0 z-20">
              <div className="w-12 h-12 rounded-2xl bg-[#064e3b] border border-emerald-400/40 flex items-center justify-center text-xl shadow-xl shadow-emerald-950/80 group-hover:scale-110 transition-transform duration-300">
                🙂
              </div>
            </div>

            {/* Card Container — 3X Length Vertical Height */}
            <div className="min-h-[300px] sm:min-h-[580px] bg-[#0c1017] border border-white/[0.12] rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-2xl shadow-black/90 hover:border-emerald-500/40 transition-colors duration-300">
              
              {/* Content */}
              <div className="pt-4">
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans tracking-wide mb-6">
                  Working with Hytham Studios has been fantastic. The edits are genuinely great -
                </p>
                <p className="text-base sm:text-lg text-[#6ee7b7] font-semibold leading-relaxed font-sans mb-6">
                  they deeply understand pacing, hooks and storytelling
                </p>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans tracking-wide">
                  - and they are always willing to agonise over the tiny details that makes a clip actually land.
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-white/[0.08] pt-6 mt-12">
                <h4 className="text-white font-bold text-base sm:text-lg tracking-tight">Zara Jarvis</h4>
                <p className="text-slate-400 text-xs sm:text-sm font-medium mt-0.5">Content Manager, Steven Bartlett</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default TrustedLeaders;
