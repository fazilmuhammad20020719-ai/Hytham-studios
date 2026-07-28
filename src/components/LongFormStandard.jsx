import React, { useState } from 'react';

/* ─── Long Form Items Data ─── */
const LONGFORM_ITEMS = [
  {
    id: 1,
    title: 'Podcast Trailers & Docuseries',
    thumbnail: '/longform/longform1.png',
    overlayText: 'Good companies, great insight, but totally',
    bottomCaption: 'Good companies, great insight, but totally',
    category: 'Podcast Trailer',
  },
  {
    id: 2,
    title: 'Kinetic Motion Graphics & Fintech',
    thumbnail: '/longform/longform2.png',
    overlayText: 'TO UNDERSTAND HOW STABLE COINS ARE BEING USED',
    bottomCaption: 'stablecoins are being used in Latin',
    category: 'YouTube Edit',
  },
  {
    id: 3,
    title: 'B2B Brand & Product Showcase',
    thumbnail: '/longform/longform3.png',
    overlayText: 'FINANCIAL TRANSACTION 0,01 €',
    bottomCaption: 'all the financial transactions, which is',
    category: 'Brand Film',
  },
];

const LongFormStandard = () => {
  const [activeModalItem, setActiveModalItem] = useState(null);

  return (
    <section className="bg-[#05070b] relative z-10 py-24 sm:py-32 px-4 sm:px-6 border-t border-white/[0.06] w-full max-w-full overflow-hidden">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[300px] sm:w-[600px] h-[250px] sm:h-[400px] bg-indigo-600/5 blur-[100px] sm:blur-[160px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-12 left-1/4 w-[300px] sm:w-[500px] h-[250px] sm:h-[350px] bg-amber-500/5 blur-[100px] sm:blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Section Header ── */}
        <div className="text-left mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight inline-flex flex-wrap items-center gap-2 sm:gap-3 relative">
            <span>Long form that sets</span>
            <span className="text-[#f5a623] relative">
              the standard
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mt-4 font-sans">
            Podcast trailers. YouTube Edits. B2B videos. Brand Films.
          </p>
        </div>

        {/* ── 3 Horizontal 16:9 Video Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {LONGFORM_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="bg-[#0c1017] rounded-3xl overflow-hidden border border-white/[0.12] hover:border-amber-400/60 transition-all duration-500 shadow-xl group relative cursor-pointer aspect-video flex flex-col justify-between p-5"
            >
              {/* Thumbnail Image Background */}
              <img
                src={item.thumbnail}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-0"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/85 z-10 group-hover:from-black/30 group-hover:to-black/90 transition-colors duration-300" />

              {/* Top Tag */}
              <div className="relative z-20 flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-slate-300 border border-white/10">
                  {item.category}
                </span>
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-amber-400/90 text-black flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Bottom Subtitle Caption */}
              <div className="relative z-20 mt-auto text-center">
                <p className="text-white text-xs sm:text-sm font-medium tracking-tight bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10 inline-block max-w-full truncate">
                  "{item.bottomCaption}"
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ── Interactive Full-Screen Preview Modal ── */}
      {activeModalItem && (
        <div
          onClick={() => setActiveModalItem(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#0c1017] border border-white/20 rounded-3xl overflow-hidden max-w-3xl w-full aspect-video shadow-2xl flex flex-col justify-between p-6"
          >
            {/* Modal Image Background */}
            <img
              src={activeModalItem.thumbnail}
              alt={activeModalItem.title}
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/85 z-10" />

            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="relative z-20 self-end w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors"
            >
              ✕
            </button>

            {/* Modal Bottom Caption */}
            <div className="relative z-20 mt-auto">
              <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider block mb-2">
                {activeModalItem.category}
              </span>
              <p className="text-white text-base font-semibold bg-black/70 backdrop-blur-md p-3 rounded-xl border border-white/10">
                "{activeModalItem.bottomCaption}"
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default LongFormStandard;
