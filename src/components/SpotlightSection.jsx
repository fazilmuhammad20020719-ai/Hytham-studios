import React, { useState } from 'react';

const SpotlightSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="bg-[#05070b] relative z-10 py-20 sm:py-28 px-4 sm:px-6 border-t border-white/[0.06] overflow-hidden">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-indigo-600/5 blur-[160px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* ── TOP CONTAINER: Text & Video Player ── */}
      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* ── LEFT COLUMN: Text & CTA ── */}
        <div className="lg:col-span-5 text-left">
          
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight inline-flex items-center gap-2.5 relative">
            <span>MMH</span>
            <span className="text-[#f5a623] relative">
              Spotlight
              {/* Hand-drawn Green Sparkle Doodle */}
              <svg className="absolute -top-3.5 -right-7 sm:-right-8 w-7 h-7 sm:w-8 sm:h-8 text-[#6ee7b7] pointer-events-none" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M 8 26 C 14 18 18 12 24 6" />
                <path d="M 16 28 C 22 22 26 16 32 10" />
                <path d="M 4 16 C 10 14 18 12 26 10" />
              </svg>
            </span>
          </h2>

          {/* Description Paragraphs */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-6 mb-3 font-sans">
            We produce high grade launch videos for funded startups and media businesses.
          </p>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 font-sans">
            More proof of work in stealth. Reach out for info.
          </p>

          {/* CTA Button */}
          <a href="#contact" className="btn-primary-orange px-8 py-3.5 text-sm sm:text-base tracking-wide font-semibold shadow-xl hover:scale-105 transition-transform duration-300 inline-block">
            Book a Discovery Call
          </a>

        </div>

        {/* ── RIGHT COLUMN: Interactive Video Player Card ── */}
        <div className="lg:col-span-7 w-full">
          <div className="bg-[#0c1017] rounded-3xl overflow-hidden border border-white/[0.14] shadow-2xl relative aspect-video group flex flex-col justify-between p-4 sm:p-5 select-none">
            
            {/* Background Thumbnail Image */}
            <img
              src="/spotlight.png"
              alt="MMH Spotlight Video"
              className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-102 transition-transform duration-700"
            />

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/85 z-10" />

            {/* ── TOP BAR: Enable Sound Pill ── */}
            <div className="relative z-20 flex items-center justify-between">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="px-3.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/15 flex items-center gap-2 hover:bg-white/20 transition-colors shadow-lg"
              >
                <span>{isMuted ? '🔇 Enable sound' : '🔊 Sound enabled'}</span>
              </button>
            </div>

            {/* Subtitles Simulation Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none w-full px-4">
              <span className="text-white text-lg sm:text-xl font-semibold tracking-wide drop-shadow-lg">
                With the average
              </span>
              <div className="mt-8 text-white/90 text-xs sm:text-sm font-medium drop-shadow bg-black/40 px-3 py-1 rounded-md inline-block max-w-md mx-auto">
                With the average professional now switching
              </div>
            </div>

            {/* ── BOTTOM BAR: Video Controller & Scrub Bar ── */}
            <div className="relative z-20 mt-auto pt-3">
              
              {/* Scrub Bar Line */}
              <div className="w-full h-1 bg-white/20 rounded-full mb-3 overflow-hidden cursor-pointer">
                <div className="h-full bg-indigo-500 rounded-full w-[28%] transition-all duration-300" />
              </div>

              {/* Control Buttons & Readout */}
              <div className="flex items-center justify-between text-white/80 text-xs font-mono">
                
                {/* Left Controls */}
                <div className="flex items-center gap-3">
                  {/* Rewind 10s */}
                  <button className="hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.334 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                    </svg>
                  </button>

                  {/* Play/Pause */}
                  <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-white transition-colors">
                    {isPlaying ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>

                  {/* Forward 10s */}
                  <button className="hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.934 12.8a1 1 0 000-1.6l-5.334-4A1 1 0 005 8v8a1 1 0 001.6.8l5.334-4zM19.934 12.8a1 1 0 000-1.6l-5.334-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.334-4z" />
                    </svg>
                  </button>

                  {/* Volume Icon */}
                  <button onClick={() => setIsMuted(!isMuted)} className="hover:text-white transition-colors ml-1">
                    {isMuted ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15zM17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                    )}
                  </button>

                  {/* Time Readout */}
                  <span className="text-[11px] font-sans text-slate-300 ml-1">0:13 / 2:01</span>
                </div>

                {/* Right Controls */}
                <div className="flex items-center gap-3">
                  {/* Airplay */}
                  <button className="hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1m-7 4l-5-5h10l-5 5z" />
                    </svg>
                  </button>

                  {/* PIP */}
                  <button className="hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </button>

                  {/* Settings */}
                  <button className="hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>

                  {/* Fullscreen */}
                  <button className="hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ── BOTTOM CONTAINER: Sticky Notes & Testimonials Grid Canvas ── */}
      <div className="mt-24 sm:mt-32 max-w-6xl mx-auto relative">
        
        {/* Dark Grid Background Canvas */}
        <div className="relative min-h-[320px] sm:min-h-[540px] w-full rounded-3xl bg-[#04060a] border border-white/[0.08] p-5 sm:p-12 overflow-hidden flex flex-col justify-center items-center shadow-2xl">
          
          {/* Subtle Grid Lines Background Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />

          {/* Hand-drawn Top Left Green Swirl / Squiggle Vector */}
          <div className="absolute top-6 left-6 sm:top-10 sm:left-12 z-10 pointer-events-none opacity-80 hidden sm:block">
            <svg className="w-16 h-16 sm:w-20 sm:h-20 text-[#86efac]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M 20 70 C 15 35 45 15 75 35 C 95 50 70 80 40 65 C 20 50 35 25 60 30" />
            </svg>
          </div>

          {/* Top Left Floating Badge: Purple Scalloped Flower with Clapping Hands */}
          <div className="hidden sm:block absolute top-14 left-14 sm:top-24 sm:left-28 z-20 transform -rotate-12 transition-transform duration-300 hover:scale-110 cursor-pointer">
            <div className="w-11 h-11 sm:w-16 sm:h-16 bg-[#b4b0ed] text-[#241354] rounded-2xl flex items-center justify-center shadow-xl border border-purple-300/30 relative">
              {/* Clapping Icon */}
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.5 2a2 2 0 0 0-2 2v6.2l-1.4-1.4a2 2 0 0 0-2.8 0 2 2 0 0 0 0 2.8l4.4 4.4a5.5 5.5 0 0 0 7.8 0l3-3a2 2 0 0 0 0-2.8 2 2 0 0 0-2.8 0L17 11.9V4a2 2 0 0 0-2-2h-2.5zM7.5 13.5l-2.8 2.8a3 3 0 0 0 0 4.2 3 3 0 0 0 4.2 0l2.8-2.8-4.2-4.2z" />
              </svg>
            </div>
          </div>

          {/* Hand-drawn Top Right Green Swirl / Squiggle Vector */}
          <div className="absolute top-6 right-6 sm:top-10 sm:right-12 z-10 pointer-events-none opacity-80 hidden sm:block">
            <svg className="w-16 h-16 sm:w-20 sm:h-20 text-[#86efac]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M 25 30 C 55 20 80 40 65 70 C 50 90 25 70 40 45 C 55 25 80 50 70 75" />
            </svg>
          </div>

          {/* Top Right Floating Badge: Mint Green Circle with Smile Icon */}
          <div className="hidden sm:block absolute top-14 right-14 sm:top-24 sm:right-28 z-20 transform rotate-12 transition-transform duration-300 hover:scale-110 cursor-pointer">
            <div className="w-11 h-11 sm:w-16 sm:h-16 bg-[#bbf7d0] text-[#064e3b] rounded-full flex items-center justify-center shadow-xl border border-green-300/30">
              <svg className="w-8 h-8 sm:w-9 sm:h-9" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" strokeLinecap="round" />
                <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* ── STICKY NOTES GRID ── */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 lg:gap-10 w-full max-w-5xl items-center pt-10 sm:pt-14 pb-4">

            {/* STICKY NOTE 1: Yellow (Andrew Ross Sorkin) */}
            <div className="transform md:-rotate-6 hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300 bg-[#fef08a] text-neutral-900 p-4 sm:p-7 rounded-2xl shadow-2xl flex flex-col justify-between min-h-[150px] sm:min-h-[250px] border border-yellow-300/50 cursor-pointer">
              <p className="text-xs sm:text-[0.95rem] font-semibold leading-relaxed font-sans text-neutral-900">
                The videos are fantastic. Very happy with what's happening.
              </p>
              <div className="mt-4 sm:mt-8 pt-3 sm:pt-4">
                <h4 className="font-bold text-xs sm:text-base text-neutral-900 leading-tight">
                  Andrew Ross Sorkin
                </h4>
                <p className="text-[10px] sm:text-xs text-neutral-700 font-medium mt-0.5">
                  American Journalist and Author
                </p>
              </div>
            </div>

            {/* STICKY NOTE 2: Lavender / Purple (Rohit Sirosh) */}
            <div className="transform md:-translate-y-4 md:rotate-1 hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300 bg-[#c4b5fd] text-neutral-900 p-4 sm:p-7 rounded-2xl shadow-2xl flex flex-col justify-between min-h-[150px] sm:min-h-[250px] border border-purple-300/50 cursor-pointer">
              <p className="text-xs sm:text-[0.95rem] font-semibold leading-relaxed font-sans text-neutral-900">
                During our YC period, the launch video drove a lot of hype and customers inbound. Super responsive and proactive team.
              </p>
              <div className="mt-4 sm:mt-8 pt-3 sm:pt-4">
                <h4 className="font-bold text-xs sm:text-base text-neutral-900 leading-tight">
                  Rohit Sirosh
                </h4>
                <p className="text-[10px] sm:text-xs text-neutral-700 font-medium mt-0.5">
                  Founder, Mimos AI
                </p>
              </div>
            </div>

            {/* STICKY NOTE 3: Mint Green (Daniel Del carmen) */}
            <div className="transform md:rotate-6 hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300 bg-[#bbf7d0] text-neutral-900 p-4 sm:p-7 rounded-2xl shadow-2xl flex flex-col justify-between min-h-[150px] sm:min-h-[250px] border border-green-300/50 cursor-pointer">
              <p className="text-xs sm:text-[0.95rem] font-semibold leading-relaxed font-sans text-neutral-900">
                The edits have been amazing, the team does a great job operationally too!
              </p>
              <div className="mt-4 sm:mt-8 pt-3 sm:pt-4">
                <h4 className="font-bold text-xs sm:text-base text-neutral-900 leading-tight">
                  Daniel Del carmen
                </h4>
                <p className="text-[10px] sm:text-xs text-neutral-700 font-medium mt-0.5">
                  Creative Director, Mike Posner
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default SpotlightSection;
