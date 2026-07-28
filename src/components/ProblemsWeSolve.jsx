import React, { useState, useEffect } from 'react';

const ProblemsWeSolve = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [autoIndex, setAutoIndex] = useState(0);

  const roles = [
    // Left side roles
    {
      id: 'creatives',
      title: 'Lead Creatives',
      tag: 'Strategy & Hooks',
      side: 'left',
      tilt: 'md:rotate-6',
      floatDelay: '0s',
      accentColor: 'from-amber-400 to-amber-600',
      glowColor: 'rgba(245,166,35,0.35)',
      badgeBg: 'bg-amber-400/10 text-amber-300 border-amber-400/30',
      solution: 'Eliminates weak hook angles, stale concepts, and uninspired content strategy.',
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 13l1 1 2-2" strokeWidth="2" className="text-amber-400" />
        </svg>
      ),
    },
    {
      id: 'writers',
      title: 'Content Writers',
      tag: 'Viral Storytelling',
      side: 'left',
      tilt: 'rotate-0',
      floatDelay: '0.8s',
      accentColor: 'from-emerald-400 to-teal-600',
      glowColor: 'rgba(16,185,129,0.35)',
      badgeBg: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/30',
      solution: 'Eliminates boring scripts, off-brand messaging, and flat viewer engagement.',
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l5 5v11a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 4v5h5M7 13h10M7 17h7" />
        </svg>
      ),
    },
    {
      id: 'designers',
      title: 'Designers',
      tag: 'High CTR Visuals',
      side: 'left',
      tilt: 'md:-rotate-6',
      floatDelay: '1.6s',
      accentColor: 'from-pink-400 to-rose-600',
      glowColor: 'rgba(236,72,153,0.35)',
      badgeBg: 'bg-pink-400/10 text-pink-300 border-pink-400/30',
      solution: 'Eliminates low CTR thumbnails, sloppy assets, and inconsistent brand identity.',
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },

    // Right side roles
    {
      id: 'editors',
      title: 'World-class Editors',
      tag: 'Retention & Pacing',
      side: 'right',
      tilt: 'md:-rotate-6',
      floatDelay: '0.4s',
      accentColor: 'from-cyan-400 to-blue-600',
      glowColor: 'rgba(6,182,212,0.35)',
      badgeBg: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/30',
      solution: 'Eliminates slow turnaround times, amateur cuts, and viewer drop-off.',
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z" />
        </svg>
      ),
    },
    {
      id: 'managers',
      title: 'Project Managers',
      tag: 'QA & Operations',
      side: 'right',
      tilt: 'rotate-0',
      floatDelay: '1.2s',
      accentColor: 'from-violet-400 to-indigo-600',
      glowColor: 'rgba(139,92,246,0.35)',
      badgeBg: 'bg-violet-400/10 text-violet-300 border-violet-400/30',
      solution: 'Eliminates freelancer management chaos, miscommunication, and missed deadlines.',
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      id: 'assistants',
      title: 'Virtual Assistants',
      tag: 'Multi-Platform Distribution',
      side: 'right',
      tilt: 'md:rotate-6',
      floatDelay: '2.0s',
      accentColor: 'from-indigo-400 to-purple-600',
      glowColor: 'rgba(99,102,241,0.35)',
      badgeBg: 'bg-indigo-400/10 text-indigo-300 border-indigo-400/30',
      solution: 'Eliminates manual video uploads, tagging friction, and administrative overhead.',
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      ),
    },
  ];

  // Auto-cycle through roles when user is not hovering
  useEffect(() => {
    if (hoveredId !== null) return;
    const interval = setInterval(() => {
      setAutoIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [hoveredId, roles.length]);

  const activeId = hoveredId !== null ? hoveredId : roles[autoIndex]?.id;
  const leftRoles = roles.filter((r) => r.side === 'left');
  const rightRoles = roles.filter((r) => r.side === 'right');
  const activeRoleObj = roles.find((r) => r.id === activeId);

  return (
    <section id="solutions" className="bg-[#05070b] relative z-10 py-24 sm:py-36 px-4 sm:px-6 border-t border-white/[0.06] overflow-hidden">
      
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-amber-500/5 blur-[180px] rounded-full pointer-events-none z-0 animate-[pulseGlow_8s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-indigo-600/5 blur-[160px] rounded-full pointer-events-none z-0" />

      {/* Grid Canvas Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── TOP BADGE ── */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono font-medium text-amber-400 backdrop-blur-md shadow-lg animate-[fadeInDown_0.6s_ease-out]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Embedded Team Ecosystem
          </div>
        </div>

        <div className="min-h-[500px] sm:min-h-[600px] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative">

          {/* SVG Animated Connector Beams (Desktop view background) */}
          <div className="absolute inset-0 pointer-events-none hidden md:block z-0">
            <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none">
              {/* Connector lines to left side cards */}
              <line x1="220" y1="120" x2="500" y2="300" stroke={activeId === 'creatives' ? '#f5a623' : 'rgba(255,255,255,0.08)'} strokeWidth={activeId === 'creatives' ? '2.5' : '1'} strokeDasharray="6 6" className="transition-all duration-500" />
              <line x1="220" y1="300" x2="500" y2="300" stroke={activeId === 'writers' ? '#10b981' : 'rgba(255,255,255,0.08)'} strokeWidth={activeId === 'writers' ? '2.5' : '1'} strokeDasharray="6 6" className="transition-all duration-500" />
              <line x1="220" y1="480" x2="500" y2="300" stroke={activeId === 'designers' ? '#ec4899' : 'rgba(255,255,255,0.08)'} strokeWidth={activeId === 'designers' ? '2.5' : '1'} strokeDasharray="6 6" className="transition-all duration-500" />

              {/* Connector lines to right side cards */}
              <line x1="780" y1="120" x2="500" y2="300" stroke={activeId === 'editors' ? '#06b6d4' : 'rgba(255,255,255,0.08)'} strokeWidth={activeId === 'editors' ? '2.5' : '1'} strokeDasharray="6 6" className="transition-all duration-500" />
              <line x1="780" y1="300" x2="500" y2="300" stroke={activeId === 'managers' ? '#8b5cf6' : 'rgba(255,255,255,0.08)'} strokeWidth={activeId === 'managers' ? '2.5' : '1'} strokeDasharray="6 6" className="transition-all duration-500" />
              <line x1="780" y1="480" x2="500" y2="300" stroke={activeId === 'assistants' ? '#6366f1' : 'rgba(255,255,255,0.08)'} strokeWidth={activeId === 'assistants' ? '2.5' : '1'} strokeDasharray="6 6" className="transition-all duration-500" />
            </svg>
          </div>

          {/* ── LEFT COLUMN CARDS ── */}
          <div className="flex flex-row md:flex-col flex-wrap justify-center gap-3 sm:gap-6 sm:gap-7 w-full md:w-60 items-center md:items-start z-10">
            {leftRoles.map((role) => {
              const isActive = activeId === role.id;
              return (
                <div
                  key={role.id}
                  onMouseEnter={() => setHoveredId(role.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setHoveredId(hoveredId === role.id ? null : role.id)}
                  style={{
                    boxShadow: isActive ? `0 12px 35px -5px ${role.glowColor}` : '0 10px 25px -5px rgba(0,0,0,0.5)',
                    animation: `floatY 5s ease-in-out infinite`,
                    animationDelay: role.floatDelay,
                  }}
                  className={`w-full max-w-[240px] sm:w-56 md:w-60 bg-[#080d16]/90 backdrop-blur-xl border ${
                    isActive ? 'border-white/50 scale-108 rotate-0 z-30' : 'border-white/[0.1] hover:border-white/30'
                  } rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-between text-center transition-all duration-500 ${role.tilt} cursor-pointer group select-none relative overflow-hidden`}
                >
                  {/* Subtle top color border glow line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${role.accentColor} opacity-70 group-hover:opacity-100 transition-opacity`} />

                  {/* Capability Badge */}
                  <span className={`text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${role.badgeBg} mb-3`}>
                    {role.tag}
                  </span>

                  {/* Icon */}
                  <div className={`mb-2 transition-all duration-300 ${isActive ? 'scale-125 text-amber-400' : 'text-slate-300 group-hover:text-white group-hover:scale-110'}`}>
                    {role.icon}
                  </div>

                  {/* Role Title */}
                  <span className="text-white text-sm sm:text-base font-semibold tracking-tight font-display">
                    {role.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* ── CENTER INTERACTIVE HUB ── */}
          <div className="text-center relative z-20 my-4 md:my-0 px-4 max-w-[90vw] sm:max-w-md w-full bg-[#0a0f1a]/85 backdrop-blur-2xl border border-white/[0.14] rounded-3xl p-6 sm:p-10 shadow-2xl transition-all duration-500">
            
            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-tight">
              Problems <span className="text-[#f5a623] inline-block animate-[pulseGlow_4s_ease-in-out_infinite]">we solve</span>
            </h2>

            {/* Dynamic Interactive Insight Panel */}
            <div className="mt-6 min-h-[85px] flex items-center justify-center">
              {activeRoleObj ? (
                <div key={activeRoleObj.id} className="animate-[blurReveal_0.4s_cubic-bezier(0.16,1,0.3,1)_both] bg-white/[0.04] p-4 rounded-2xl border border-white/[0.12] shadow-xl w-full">
                  <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider block mb-1 font-mono">
                    ✦ {activeRoleObj.title} Impact
                  </span>
                  <p className="text-slate-100 text-xs sm:text-sm font-sans font-medium leading-relaxed">
                    {activeRoleObj.solution}
                  </p>
                </div>
              ) : (
                <div className="w-full">
                  <p className="text-slate-300 text-xs sm:text-sm font-sans font-medium leading-relaxed">
                    We become your in house team, that you don't have to manage.
                  </p>
                  <span className="inline-block text-[11px] text-amber-400/80 mt-2 font-mono">
                    ✦ Auto-exploring embedded team roles
                  </span>
                </div>
              )}
            </div>

          </div>

          {/* ── RIGHT COLUMN CARDS ── */}
          <div className="flex flex-row md:flex-col flex-wrap justify-center gap-3 sm:gap-6 sm:gap-7 w-full md:w-60 items-center md:items-end z-10">
            {rightRoles.map((role) => {
              const isActive = activeId === role.id;
              return (
                <div
                  key={role.id}
                  onMouseEnter={() => setHoveredId(role.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setHoveredId(hoveredId === role.id ? null : role.id)}
                  style={{
                    boxShadow: isActive ? `0 12px 35px -5px ${role.glowColor}` : '0 10px 25px -5px rgba(0,0,0,0.5)',
                    animation: `floatY 5s ease-in-out infinite`,
                    animationDelay: role.floatDelay,
                  }}
                  className={`w-full max-w-[240px] sm:w-56 md:w-60 bg-[#080d16]/90 backdrop-blur-xl border ${
                    isActive ? 'border-white/50 scale-108 rotate-0 z-30' : 'border-white/[0.1] hover:border-white/30'
                  } rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-between text-center transition-all duration-500 ${role.tilt} cursor-pointer group select-none relative overflow-hidden`}
                >
                  {/* Subtle top color border glow line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${role.accentColor} opacity-70 group-hover:opacity-100 transition-opacity`} />

                  {/* Capability Badge */}
                  <span className={`text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${role.badgeBg} mb-3`}>
                    {role.tag}
                  </span>

                  {/* Icon */}
                  <div className={`mb-2 transition-all duration-300 ${isActive ? 'scale-125 text-amber-400' : 'text-slate-300 group-hover:text-white group-hover:scale-110'}`}>
                    {role.icon}
                  </div>

                  {/* Role Title */}
                  <span className="text-white text-sm sm:text-base font-semibold tracking-tight font-display">
                    {role.title}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
};

export default ProblemsWeSolve;
