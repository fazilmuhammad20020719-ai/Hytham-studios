import React from 'react';

const TheGoal = () => {
  return (
    <section className="bg-[#05070b] relative z-10 py-24 sm:py-32 px-4 sm:px-6 border-t border-white/[0.06] w-full max-w-full overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[250px] sm:h-[400px] bg-amber-500/5 blur-[100px] sm:blur-[160px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-[300px] sm:w-[500px] h-[250px] sm:h-[350px] bg-indigo-600/5 blur-[100px] sm:blur-[160px] rounded-full pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* ── LEFT COLUMN: Headline & Subtitle ── */}
        <div className="lg:col-span-5 text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-white tracking-tight inline-flex items-center gap-3 relative">
            <span>The</span>
            <span className="text-[#f5a623] relative">
              Goal
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-sans mt-4 font-medium tracking-wide">
            We become your in-house production team.
          </p>
        </div>

        {/* ── RIGHT COLUMN: Content Paragraphs ── */}
        <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8 font-sans">
          
          {/* Paragraph 1 */}
          <p className="text-slate-200 text-base sm:text-lg md:text-[1.15rem] leading-relaxed font-normal">
            Portfolio of <span className="text-white font-semibold">20+ parallel projects</span> with industry leaders. Completely custom workflows for each.
          </p>

          {/* Paragraph 2 */}
          <p className="text-slate-300 text-base sm:text-lg md:text-[1.15rem] leading-relaxed font-normal">
            We integrate fully into your existing system. Producing anywhere from <span className="text-white font-semibold">10 to 100+ videos</span> a month per project per month.
          </p>

          {/* Paragraph 3 */}
          <p className="text-slate-300 text-base sm:text-lg md:text-[1.15rem] leading-relaxed font-normal">
            Taking on a select few projects every quarter.
          </p>

        </div>

      </div>

    </section>
  );
};

export default TheGoal;
