import React, { useState } from 'react';

const REELS = [
  {
    id: 1,
    title: 'The Backlash Was',
    caption: 'Helmuts can bleed in the water',
    image: '/reels/reel1.png',
    tag: 'Editing Trend',
  },
  {
    id: 2,
    title: 'Post-Production System',
    caption: 'and post-production process is designed to',
    image: '/reels/reel2.png',
    tag: 'Workflow',
  },
  {
    id: 3,
    title: 'Retro Gaming Overlay',
    caption: 'Which means someone is calling me something',
    image: '/reels/reel3.png',
    tag: 'Creative Hook',
  },
  {
    id: 4,
    title: 'Minimal Aesthetic',
    caption: 'So, I asked for scripts,',
    image: '/reels/reel4.png',
    tag: 'Brand Voice',
    hasControls: true,
  },
];

const ContentSystematized = () => {
  const [activeReel, setActiveReel] = useState(null);

  return (
    <section id="work" className="hero-grid-bg relative z-10 py-20 sm:py-28 px-4 sm:px-6 border-t border-white/[0.06] w-full max-w-full overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[300px] sm:w-[500px] h-[250px] sm:h-[300px] bg-amber-500/5 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] sm:w-[500px] h-[250px] sm:h-[300px] bg-indigo-500/5 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Section Title & Subtitle ── */}
        <div className="mb-12 sm:mb-16 relative">
          
          {/* Hand-drawn Green Sparkle / Burst Doodle above title */}
          <div className="absolute -top-8 left-64 sm:left-80 pointer-events-none hidden sm:block">
            <svg className="w-8 h-8 text-[#6ee7b7] opacity-90" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M 8 26 C 14 18 18 12 24 6" />
              <path d="M 16 28 C 22 22 26 16 32 10" />
              <path d="M 4 16 C 10 14 18 12 26 10" />
            </svg>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-[1.15]">
            Content Production,<br />
            <span className="text-[#f5a623]">Systematized</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mt-4 font-sans">
            We build the production system that lets you publish consistently at the quality level your brand demands. We own editing trends in the industry.
          </p>
        </div>

        {/* ── 4 Vertical Reel Cards Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {REELS.map((reel) => (
            <div
              key={reel.id}
              onClick={() => setActiveReel(reel)}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-[#0c1017] border border-white/[0.12] group cursor-pointer shadow-2xl hover:border-amber-500/50 hover:shadow-amber-500/10 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Background Thumbnail Image */}
              <img
                src={reel.image}
                alt={reel.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />

              {/* Play Button Hover Glow */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-amber-500/90 text-black flex items-center justify-center pl-0.5 shadow-xl shadow-amber-500/40 transform group-hover:scale-110 transition-transform duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>

              {/* Top Tag Badge */}
              <div className="relative z-10 p-3.5 flex justify-between items-start">
                <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-slate-200 border border-white/10 tracking-wide">
                  {reel.tag}
                </span>
              </div>

              {/* Bottom Caption Bar or Video Player Controls */}
              <div className="relative z-10 p-3.5 pt-0">
                {reel.hasControls ? (
                  /* Video Player Controls (Card 4) */
                  <div className="bg-black/75 backdrop-blur-md rounded-xl p-2.5 border border-white/10 space-y-2">
                    {/* Subtitle text */}
                    <p className="text-[10px] sm:text-xs text-white font-medium text-center line-clamp-1 bg-black/50 px-2 py-0.5 rounded">
                      {reel.caption}
                    </p>
                    {/* Control Bar */}
                    <div className="flex items-center gap-2 text-slate-300">
                      {/* Play/Pause */}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                      {/* Progress Bar */}
                      <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                        <div className="w-1/3 h-full bg-amber-400 rounded-full" />
                      </div>
                      {/* Audio Icon */}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                      </svg>
                      {/* Fullscreen Icon */}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  /* Standard Caption Bar (Cards 1, 2, 3) */
                  <div className="bg-black/75 backdrop-blur-md rounded-xl p-2.5 border border-white/10">
                    <p className="text-[11px] sm:text-xs text-slate-200 font-medium line-clamp-2 leading-snug">
                      {reel.caption}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── Optional Modal Preview on Click ── */}
      {activeReel && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setActiveReel(null)}
        >
          <div
            className="relative max-w-sm w-full aspect-[9/16] rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={activeReel.image} alt={activeReel.title} className="w-full h-full object-cover" />
            <button
              onClick={() => setActiveReel(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center font-bold text-lg hover:bg-amber-500 hover:text-black transition-colors"
            >
              ✕
            </button>
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white">
              <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">{activeReel.tag}</span>
              <h3 className="text-base font-bold mt-1">{activeReel.title}</h3>
              <p className="text-xs text-slate-300 mt-1">{activeReel.caption}</p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default ContentSystematized;
