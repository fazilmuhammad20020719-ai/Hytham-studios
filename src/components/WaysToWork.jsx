import React from 'react';

const WaysToWork = () => {
  const tiers = [
    {
      badge: 'MMH CORE',
      badgeBg: 'bg-[#bbf7d0]',
      badgeRotate: '-rotate-2',
      checkColor: 'text-[#6ee7b7]',
      title: 'You create. We produce.',
      description:
        'You already have the footage. We turn it into polished, platform-ready content your brand can publish with confidence.',
      features: [
        'Starting at 20 short-form videos per month',
        '5 carousels per month',
        'Custom editing style for your brand',
        'Thumbnails, captions, and design assets',
        'Platform-native formatting',
        'Dedicated team: editors, creatives, project manager, designer',
        'Bi-weekly check-ins',
        'Monthly performance report',
      ],
      buttonText: 'Apply',
    },
    {
      badge: 'MMH OS',
      badgeBg: 'bg-[#fef08a]',
      badgeRotate: 'rotate-1',
      checkColor: 'text-[#fde047]',
      title: 'Your entire content operation. Run by us.',
      description:
        'You show up. We handle everything else: Strategy, scripting, creative direction, editing, and distribution. A full content department embedded in your workflow.',
      features: [
        'Everything in Core',
        'Repeatable pre-production system',
        'Content strategy',
        'Creative direction',
        'Scripting',
        'Shoot direction',
        'Multi-platform distribution',
      ],
      buttonText: 'Apply',
    },
    {
      badge: 'MMH STUDIO',
      badgeBg: 'bg-[#c4b5fd]',
      badgeRotate: '-rotate-1',
      checkColor: 'text-[#a7f3d0]',
      title: 'Full-scale production for brands operating at volume.',
      description:
        'Your scope. Our infrastructure. For brands that need scale without sacrificing quality. We build a dedicated production system around your requirements.',
      features: [
        'Everything in OS',
        'Upwards of 100 curated videos a month',
        'Dedicated clipping team',
        'Best for enterprise projects',
      ],
      buttonText: "Let's Talk",
    },
  ];

  return (
    <section id="process" className="bg-gradient-to-b from-[#070b14] via-[#0b101d] to-[#070b14] relative z-10 py-24 sm:py-32 px-4 sm:px-6 border-t border-b border-white/[0.08] w-full max-w-full overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[900px] h-[320px] sm:h-[550px] bg-amber-500/8 blur-[120px] sm:blur-[180px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/3 left-1/4 w-[300px] sm:w-[600px] h-[250px] sm:h-[400px] bg-indigo-600/8 blur-[100px] sm:blur-[160px] rounded-full pointer-events-none z-0" />

      {/* Dot Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25 z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── HEADER ── */}
        <div className="text-left mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-tight">
            Three ways to <span className="text-[#f5a623]">work with us</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl font-sans leading-relaxed">
            Every engagement starts with a 3-month commitment. We take on 2-3 new clients per quarter.
          </p>
        </div>

        {/* ── CARDS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className="bg-[#0a0f1b]/95 backdrop-blur-xl rounded-3xl border border-white/[0.12] p-7 sm:p-8 flex flex-col justify-between hover:border-amber-400/40 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 shadow-2xl group relative overflow-hidden"
            >
              
              {/* Subtle top glow bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f5a623]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Tape Tag Badge */}
                <div className="inline-block mb-6">
                  <span
                    className={`${tier.badgeBg} ${tier.badgeRotate} text-neutral-950 font-mono font-bold text-xs sm:text-sm tracking-wider px-4 py-1.5 rounded-md shadow-md inline-block uppercase transform transition-transform group-hover:rotate-0 duration-300`}
                  >
                    {tier.badge}
                  </span>
                </div>

                {/* Card Title & Subtitle */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 font-display leading-snug">
                  {tier.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-8 font-sans">
                  {tier.description}
                </p>

                {/* Feature Bullet Points */}
                <ul className="space-y-3.5 mb-8">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 font-sans">
                      <div className={`mt-0.5 shrink-0 ${tier.checkColor}`}>
                        <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="9" className="opacity-25" fill="currentColor" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                        </svg>
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action CTA Button */}
              <div className="pt-4 border-t border-white/[0.06]">
                <button className="w-full py-3.5 px-6 rounded-xl bg-[#f5a623] hover:bg-[#ffb838] text-black font-semibold text-sm tracking-wide transition-all duration-300 shadow-lg hover:shadow-amber-500/20 active:scale-[0.98]">
                  {tier.buttonText}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default WaysToWork;
