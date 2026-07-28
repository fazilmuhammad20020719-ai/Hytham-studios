import React, { useState } from 'react';

/* ─── Viral Reel Items Data ─── */
const VIRAL_REELS = [
  {
    id: 1,
    title: 'Podcast Interview Standard',
    thumbnail: '/reels/viral1.png',
    overlayText: 'it had wifi',
    bottomCaption: 'had wifi.',
    category: 'Podcast Edit',
  },
  {
    id: 2,
    title: 'High-Impact Keynote Quote',
    thumbnail: '/reels/viral2.png',
    overlayText: 'Buy experiences',
    bottomCaption: 'Buy experiences with people you love.',
    category: 'Show Edit',
  },
  {
    id: 3,
    title: 'Creative 3D Visual Tutorial',
    thumbnail: '/reels/viral3.png',
    overlayText: 'add 3D objects',
    bottomCaption: 'do floating objects using 3D assets.',
    category: 'Visual Effects',
  },
  {
    id: 4,
    title: 'Cinematic Storytelling Reel',
    thumbnail: '/reels/viral4.png',
    overlayText: 'with the spider.',
    bottomCaption: 'They do the same with a',
    category: 'Long Form Clip',
  },
];

const ViralEdits = () => {
  const [activeModalReel, setActiveModalReel] = useState(null);

  return (
    <section id="work" className="bg-[#05070b] relative z-10 py-24 sm:py-32 px-4 sm:px-6 border-t border-white/[0.06] overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-amber-500/5 blur-[160px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-[550px] h-[380px] bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Section Header ── */}
        <div className="text-left mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-[1.15]">
            <span>Your footage into world class</span>
            <br />
            <span className="text-[#f5a623] relative inline-block mt-1">
              edits that go viral
              {/* Hand-drawn Green Doodle Lines */}
              <svg className="absolute -top-4 -right-8 sm:-right-10 w-8 h-8 sm:w-9 sm:h-9 text-[#6ee7b7] pointer-events-none" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M 8 26 C 14 18 18 12 24 6" />
                <path d="M 16 28 C 22 22 26 16 32 10" />
                <path d="M 4 16 C 10 14 18 12 26 10" />
              </svg>
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mt-4 font-sans">
            The unparalleled production standard behind the biggest names in media. Podcasts. Shows. Long form. We got it all.
          </p>
        </div>

        {/* ── 4 Vertical 9:16 Video Cards Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {VIRAL_REELS.map((reel) => (
            <div
              key={reel.id}
              onClick={() => setActiveModalReel(reel)}
              className="bg-[#0c1017] rounded-3xl overflow-hidden border border-white/[0.12] hover:border-amber-400/60 transition-all duration-500 shadow-xl group relative cursor-pointer aspect-[9/16] flex flex-col justify-between p-5"
            >
              {/* Thumbnail Image Background */}
              <img
                src={reel.thumbnail}
                alt={reel.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-0"
              />

              {/* Gradient Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10 group-hover:from-black/40 group-hover:to-black/90 transition-colors duration-300" />

              {/* Top Tag */}
              <div className="relative z-20 flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-slate-300 border border-white/10">
                  {reel.category}
                </span>
              </div>

              {/* Center Interactive Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="w-13 h-13 rounded-full bg-amber-400/90 text-black flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Bottom Captions & Text Overlay */}
              <div className="relative z-20 mt-auto">
                <p className="text-white text-xs sm:text-sm font-medium tracking-tight bg-black/50 backdrop-blur-sm p-2.5 rounded-xl border border-white/10 line-clamp-2">
                  "{reel.bottomCaption}"
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ── Interactive Full-Screen Preview Modal ── */}
      {activeModalReel && (
        <div
          onClick={() => setActiveModalReel(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#0c1017] border border-white/20 rounded-3xl overflow-hidden max-w-sm w-full aspect-[9/16] shadow-2xl flex flex-col justify-between p-6"
          >
            {/* Modal Image Background */}
            <img
              src={activeModalReel.thumbnail}
              alt={activeModalReel.title}
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />

            {/* Close Button */}
            <button
              onClick={() => setActiveModalReel(null)}
              className="relative z-20 self-end w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors"
            >
              ✕
            </button>

            {/* Modal Bottom Caption */}
            <div className="relative z-20 mt-auto">
              <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider block mb-2">
                {activeModalReel.category}
              </span>
              <p className="text-white text-base font-semibold bg-black/70 backdrop-blur-md p-3 rounded-xl border border-white/10">
                "{activeModalReel.bottomCaption}"
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default ViralEdits;
