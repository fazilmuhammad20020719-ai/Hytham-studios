import React from 'react';

const ClientTestimonials = () => {
  return (
    <section id="testimonials" className="bg-[#05070b] relative z-10 py-24 sm:py-32 px-4 sm:px-6 border-t border-white/[0.06] w-full max-w-full overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[750px] h-[300px] sm:h-[450px] bg-amber-500/5 blur-[120px] sm:blur-[170px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-[300px] sm:w-[500px] h-[250px] sm:h-[350px] bg-indigo-600/5 blur-[100px] sm:blur-[160px] rounded-full pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── HEADER ── */}
        <div className="text-left mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight inline-flex items-center gap-2.5 relative">
            <span>Client</span>
            <span className="text-[#f5a623] relative">
              Testimonials
              {/* Hand-drawn Green Sparkle Doodle */}
              <svg 
                className="absolute -top-3.5 -right-7 sm:-right-8 w-7 h-7 sm:w-8 sm:h-8 text-[#6ee7b7] pointer-events-none" 
                viewBox="0 0 36 36" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round"
              >
                <path d="M 8 26 C 14 18 18 12 24 6" />
                <path d="M 16 28 C 22 22 26 16 32 10" />
                <path d="M 4 16 C 10 14 18 12 26 10" />
              </svg>
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3.5 font-sans">
            Hear from their experience
          </p>
        </div>

        {/* ── MASONRY TESTIMONIAL CARDS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

          {/* ── COLUMN 1 ── */}
          <div className="space-y-6">
            
            {/* Card 1.1 */}
            <div className="bg-[#090d14] border border-white/[0.09] rounded-2xl p-6 sm:p-7 shadow-xl hover:border-white/20 transition-all duration-300 hover:scale-[1.02] group">
              <p className="text-slate-300 text-sm sm:text-[0.93rem] leading-relaxed font-sans">
                Metro Media House helped me rapidly build my personal brand online. Saksham is more than a supplier —{' '}
                <span className="text-[#fef08a] font-medium">he's a true partner with vision, strategy, and 24/7 support</span>
              </p>
              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <h4 className="font-bold text-white text-sm sm:text-base font-display">
                  Christian Schutz
                </h4>
                <p className="text-xs text-slate-400 font-sans mt-0.5 leading-snug">
                  8 fig serial entrepreneur and investor. Built ticketing software for F1
                </p>
              </div>
            </div>

            {/* Card 1.2 */}
            <div className="bg-[#090d14] border border-white/[0.09] rounded-2xl p-6 sm:p-7 shadow-xl hover:border-white/20 transition-all duration-300 hover:scale-[1.02] group">
              <p className="text-slate-300 text-sm sm:text-[0.93rem] leading-relaxed font-sans">
                Working with MMH has been an absolute pleasure. They produced several videos for Fluid Focus, and we were genuinely impressed by the creativity they brought to each concept.{' '}
                <span className="text-[#6ee7b7] font-medium">Their modern editing style gave our content a fresh, engaging feel that really captured our brand. Professional, imaginative, and easy to collaborate with</span> - we couldn't be happier with the results.
              </p>
              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <h4 className="font-bold text-white text-sm sm:text-base font-display">
                  Fluid Focus
                </h4>
              </div>
            </div>

            {/* Card 1.3 */}
            <div className="bg-[#090d14] border border-white/[0.09] rounded-2xl p-6 sm:p-7 shadow-xl hover:border-white/20 transition-all duration-300 hover:scale-[1.02] group">
              <p className="text-slate-300 text-sm sm:text-[0.93rem] leading-relaxed font-sans">
                Holy f*cking shit. Excuse my language but I{' '}
                <span className="text-[#fef08a] font-medium">took a sneak peek at the edits and they are unreal.</span> So stoked about this.
              </p>
              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <h4 className="font-bold text-white text-sm sm:text-base font-display">
                  George Munguia
                </h4>
                <p className="text-xs text-slate-400 font-sans mt-0.5">
                  Founder, Tryharmony.ai
                </p>
              </div>
            </div>

          </div>

          {/* ── COLUMN 2 ── */}
          <div className="space-y-6">

            {/* Card 2.1 */}
            <div className="bg-[#090d14] border border-white/[0.09] rounded-2xl p-6 sm:p-7 shadow-xl hover:border-white/20 transition-all duration-300 hover:scale-[1.02] group">
              <p className="text-slate-300 text-sm sm:text-[0.93rem] leading-relaxed font-sans">
                <span className="text-[#c4b5fd] font-medium">By far the best video editing team we have ever worked with</span> - quick, communicative, and diligent with the highest quality videos. Will be using again and have recommended to many friends!
              </p>
              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <h4 className="font-bold text-white text-sm sm:text-base font-display">
                  Tristan Barrett
                </h4>
                <p className="text-xs text-slate-400 font-sans mt-0.5">
                  Creative Director @ SpaceGod Studios
                </p>
              </div>
            </div>

            {/* Card 2.2 */}
            <div className="bg-[#090d14] border border-white/[0.09] rounded-2xl p-6 sm:p-7 shadow-xl hover:border-white/20 transition-all duration-300 hover:scale-[1.02] group">
              <p className="text-slate-300 text-sm sm:text-[0.93rem] leading-relaxed font-sans">
                Working with Metro Media House was a seamless experience.{' '}
                <span className="text-[#6ee7b7] font-medium">Their video quality is top-tier, and the content they produced consistently met our performance benchmarks.</span> On the creative side, the team was always receptive to our feedback and willing to iterate to get the visual style just right. Their ability to take our vision and turn it into polished, high-caliber content was a big plus for our brand. I'd recommend them to anyone looking for a team that wants to make high quality videos.
              </p>
              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <h4 className="font-bold text-white text-sm sm:text-base font-display">
                  Brian Tam
                </h4>
                <p className="text-xs text-slate-400 font-sans mt-0.5">
                  Barebone AI
                </p>
              </div>
            </div>

          </div>

          {/* ── COLUMN 3 ── */}
          <div className="space-y-6">

            {/* Card 3.1 */}
            <div className="bg-[#090d14] border border-white/[0.09] rounded-2xl p-6 sm:p-7 shadow-xl hover:border-white/20 transition-all duration-300 hover:scale-[1.02] group">
              <p className="text-slate-300 text-sm sm:text-[0.93rem] leading-relaxed font-sans">
                Metro Media House helped me grow to{' '}
                <span className="text-[#fef08a] font-medium">50K in just 2 months</span> with constant support, strategy, and dedication. Their consistency made all the difference
              </p>
              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <h4 className="font-bold text-white text-sm sm:text-base font-display">
                  Yael Mehta Jain
                </h4>
                <p className="text-xs text-slate-400 font-sans mt-0.5">
                  AI Entrepreneur
                </p>
              </div>
            </div>

            {/* Card 3.2 */}
            <div className="bg-[#090d14] border border-white/[0.09] rounded-2xl p-6 sm:p-7 shadow-xl hover:border-white/20 transition-all duration-300 hover:scale-[1.02] group">
              <p className="text-slate-300 text-sm sm:text-[0.93rem] leading-relaxed font-sans">
                We've had very good results. The team is very fast at feedback and their editing skills are top notch too. We have{' '}
                <span className="text-[#818cf8] font-medium">multiple millions of views through Saksham's team</span> on the b-roll side of things which help with the strategy and the content that we already put out.
              </p>
              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <h4 className="font-bold text-white text-sm sm:text-base font-display">
                  Lavy
                </h4>
                <p className="text-xs text-slate-400 font-sans mt-0.5">
                  Creative &amp; Marketing, Arthur Brooks
                </p>
              </div>
            </div>

            {/* Card 3.3 */}
            <div className="bg-[#090d14] border border-white/[0.09] rounded-2xl p-6 sm:p-7 shadow-xl hover:border-white/20 transition-all duration-300 hover:scale-[1.02] group">
              <p className="text-slate-300 text-sm sm:text-[0.93rem] leading-relaxed font-sans">
                Love the vibe and overall execution.{' '}
                <span className="text-[#38bdf8] font-medium">Edits are crisp, song choice &amp; energy is a vibe, b-roll is on point, fonts are awesome.</span> Great work!
              </p>
              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <h4 className="font-bold text-white text-sm sm:text-base font-display">
                  Drew Rogers
                </h4>
                <p className="text-xs text-slate-400 font-sans mt-0.5">
                  Founder, Stabledash Studios
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* ── BOTTOM CTA BUTTON ── */}
        <div className="mt-16 sm:mt-20 flex justify-center">
          <a href="#contact" className="btn-primary-orange px-9 py-4 text-sm sm:text-base tracking-wide font-semibold shadow-xl hover:scale-105 transition-transform duration-300 inline-block">
            Book a Discovery Call
          </a>
        </div>

      </div>

    </section>
  );
};

export default ClientTestimonials;
