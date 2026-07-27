import React from 'react';

const HomePage = () => {
  return (
    <div className="hero-grid-bg min-h-screen flex flex-col justify-between relative selection:bg-hy-orange selection:text-black">
      {/* Ambient background glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none z-0 animate-[pulseGlow_6s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* ──── Floating Glass Navbar ──── */}
      <header className="relative z-50 pt-4 px-4 sm:px-6">
        <nav className="glass-nav max-w-5xl mx-auto rounded-full px-6 py-3.5 flex items-center justify-between opacity-0 animate-[fadeInDown_0.8s_ease-out_forwards]">
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/Logo.png"
              alt="Hytham Studios Logo"
              className="h-7 sm:h-9 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-white font-semibold text-base sm:text-lg tracking-tight font-display">
              Hytham Studios
            </span>
          </a>

          <div className="flex items-center gap-6 sm:gap-8">
            <div className="hidden md:flex items-center gap-8">
              <a href="#process" className="nav-link">Process</a>
              <a href="#solutions" className="nav-link">Solutions</a>
              <a href="#work" className="nav-link">Work</a>
              <a href="#testimonials" className="nav-link">Testimonials</a>
            </div>

            <button className="btn-primary-orange px-5 py-2 text-xs sm:text-sm">
              Contact
            </button>
          </div>
        </nav>
      </header>

      {/* ──── Hero Content ──── */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-12 sm:pt-20 pb-16 my-auto">

        {/* Subtle Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-amber-400/90 mb-8 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards] backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          Content & Distribution Engine
        </div>

        {/* Main Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold text-white max-w-4xl tracking-tight mb-8 opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards] leading-[1.15]"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          The content and distribution system
          for the leaders in {' '}
          <span className="relative inline-block text-hy-orange text-glow">
            tech and media
            {/* Curved accent mark matching reference */}
            <svg
              className="absolute -top-2 -right-6 sm:-right-7 w-6 h-6 sm:w-7 sm:h-7 text-indigo-300/80 hidden sm:block animate-[scaleIn_0.6s_ease-out_0.8s_forwards] pointer-events-none"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M4 16C7 10 12 6 18 4" />
              <path d="M12 20C16 17 19 13 21 8" />
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mb-11 leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards] font-sans">
          Content infrastructure for the companies that define their space. We build
          and run the machine that earns attention, from production to distribution,
          across every platform you need to win.
        </p>

        {/* Primary CTA */}
        <div className="opacity-0 animate-[fadeInUp_1s_ease-out_0.9s_forwards]">
          <button className="btn-primary-orange px-8 py-4 text-sm sm:text-base tracking-wide font-semibold shadow-xl">
            Apply to Work With Us
          </button>
        </div>
      </main>

      {/* ──── Stats Bar ──── */}
      <footer className="relative z-10 max-w-5xl mx-auto w-full px-6 pb-12 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 opacity-0 animate-[fadeInUp_1s_ease-out_1.1s_forwards]">

          {/* Stat 1 */}
          <div className="stat-card flex flex-col items-center text-center">
            <div className="stat-icon green">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M16.36 16.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M16.36 7.64l1.42-1.42" />
              </svg>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display">1B+</span>
            <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">views generated</span>
          </div>

          {/* Stat 2 */}
          <div className="stat-card flex flex-col items-center text-center">
            <div className="stat-icon blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display">4 Years</span>
            <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">of brand building</span>
          </div>

          {/* Stat 3 */}
          <div className="stat-card flex flex-col items-center text-center">
            <div className="stat-icon yellow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="6" width="14" height="12" rx="3" />
                <path d="M16 10l5-3.5v11L16 14" />
              </svg>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display">8,000+</span>
            <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">videos created</span>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default HomePage;
