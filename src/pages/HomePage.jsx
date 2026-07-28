import React, { useEffect, useRef, useCallback } from 'react';
import TrustedLeaders from '../components/TrustedLeaders';
import ContentSystematized from '../components/ContentSystematized';
import HighLevelRepurposing from '../components/HighLevelRepurposing';
import ViralEdits from '../components/ViralEdits';
import LongFormStandard from '../components/LongFormStandard';
import SpotlightSection from '../components/SpotlightSection';
import WaysToWork from '../components/WaysToWork';
import ProblemsWeSolve from '../components/ProblemsWeSolve';
import TheGoal from '../components/TheGoal';
import ClientTestimonials from '../components/ClientTestimonials';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

/* ─── Floating Particle Config ─── */
const PARTICLES = [
  { size: 4, top: '18%', left: '12%', duration: '9s', delay: '0s', color: 'rgba(245,166,35,0.55)' },
  { size: 6, top: '65%', left: '8%', duration: '12s', delay: '1.5s', color: 'rgba(129,140,248,0.45)' },
  { size: 3, top: '40%', left: '88%', duration: '8s', delay: '0.8s', color: 'rgba(245,166,35,0.4)' },
  { size: 5, top: '75%', left: '82%', duration: '11s', delay: '2s', color: 'rgba(110,231,183,0.4)' },
  { size: 3, top: '25%', left: '72%', duration: '7s', delay: '3s', color: 'rgba(245,166,35,0.3)' },
  { size: 4, top: '55%', left: '50%', duration: '14s', delay: '0.3s', color: 'rgba(129,140,248,0.3)' },
  { size: 2, top: '85%', left: '35%', duration: '10s', delay: '1s', color: 'rgba(110,231,183,0.5)' },
  { size: 5, top: '10%', left: '55%', duration: '13s', delay: '2.5s', color: 'rgba(253,224,71,0.35)' },
];

const HomePage = () => {
  const orbRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!orbRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const dx = (clientX / innerWidth - 0.5) * 40;
    const dy = (clientY / innerHeight - 0.5) * 30;
    orbRef.current.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="bg-[#05070b] min-h-screen selection:bg-hy-orange selection:text-black w-full max-w-full overflow-x-hidden relative">

      {/* ── HERO SECTION WITH GRID BACKGROUND ── */}
      <section className="hero-grid-bg min-h-screen flex flex-col justify-between relative overflow-hidden">

        {/* ── Floating Particles ── */}
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="hero-particle"
            style={{
              width: p.size,
              height: p.size,
              top: p.top,
              left: p.left,
              animationDuration: p.duration,
              animationDelay: p.delay,
              backgroundColor: p.color,
            }}
          />
        ))}

        {/* ── Dynamic Glow Orbs ── */}
        <div
          ref={orbRef}
          className="parallax-orb w-[320px] sm:w-[700px] h-[320px] sm:h-[420px] bg-amber-500/10 blur-[100px] sm:blur-[140px]"
          style={{ top: '30%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[340px] sm:w-[900px] h-[340px] sm:h-[450px] bg-indigo-600/5 blur-[120px] sm:blur-[160px] rounded-full pointer-events-none z-0 animate-[pulseGlow_8s_ease-in-out_infinite]" />

        {/* ── MOBILE TOPBAR (xs to lg) ── */}
        <header className="fixed top-0 left-0 right-0 z-50 lg:hidden pointer-events-auto">
          <div className="flex items-center justify-between px-4 py-3 bg-[#070a0f]/90 backdrop-blur-xl border-b border-white/[0.07] shadow-lg">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <img src="/Logo.png" alt="Hytham Studios Logo" className="h-7 w-auto" />
              <span className="text-white font-semibold text-sm tracking-tight font-display">Hytham Studios</span>
            </a>
            {/* Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-xl bg-white/[0.07] border border-white/10 flex items-center justify-center text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Slide-down Menu — no scroll inside, just links */}
          {mobileMenuOpen && (
            <div className="bg-[#070a0f]/98 backdrop-blur-2xl border-b border-white/[0.07] px-4 py-4 space-y-1 shadow-2xl">
              {[
                { href: '#process', label: 'Process' },
                { href: '#solutions', label: 'Solutions' },
                { href: '#work', label: 'Work' },
                { href: '#testimonials', label: 'Testimonials' },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center text-slate-200 font-medium text-sm py-2.5 px-3 rounded-xl hover:bg-white/[0.06] hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
              <div className="pt-2 mt-1 border-t border-white/[0.08]">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center btn-primary-orange py-3 text-sm font-semibold rounded-xl"
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </header>

        {/* ── DESKTOP PILL NAVBAR (lg+) ── */}
        <header className="fixed top-0 left-0 right-0 z-50 hidden lg:block pt-4 px-6 pointer-events-none">
          <nav className="glass-nav max-w-5xl mx-auto rounded-full px-6 py-3 flex items-center justify-between opacity-0 animate-[fadeInDown_0.8s_ease-out_forwards] pointer-events-auto shadow-2xl">
            <a href="#" className="flex items-center gap-3 group shrink-0">
              <img src="/Logo.png" alt="Hytham Studios Logo" className="h-8 w-auto transition-transform duration-300 group-hover:scale-105" />
              <span className="text-white font-semibold text-base xl:text-lg tracking-tight font-display whitespace-nowrap">Hytham Studios</span>
            </a>
            <div className="flex items-center gap-7 xl:gap-9">
              <a href="#process" className="nav-link">Process</a>
              <a href="#solutions" className="nav-link">Solutions</a>
              <a href="#work" className="nav-link">Work</a>
              <a href="#testimonials" className="nav-link">Testimonials</a>
            </div>
            <a href="#contact" className="btn-primary-orange px-5 py-2 text-sm whitespace-nowrap">Contact</a>
          </nav>
        </header>

        {/* Hero Content */}
        <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-20 sm:pt-36 pb-16 my-auto">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-amber-400/90 mb-8 backdrop-blur-md opacity-0"
            style={{ animation: 'badgePop 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.1s forwards' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Content &amp; Distribution Engine
          </div>

          {/* Headline */}
          <h1
            className="text-2xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold text-white w-full max-w-4xl tracking-tight mb-8 leading-[1.2] sm:leading-[1.18] opacity-0"
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              animation: 'blurReveal 1s cubic-bezier(0.16,1,0.3,1) 0.25s both',
            }}
          >
            The content and distribution system

            for the leaders in{' '}
            <span className="relative inline-block text-shimmer">
              tech and media
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-base sm:text-lg text-slate-400 max-w-2xl mb-11 leading-relaxed font-sans opacity-0"
            style={{ animation: 'blurReveal 1s cubic-bezier(0.16,1,0.3,1) 0.55s both' }}
          >
            Content infrastructure for the companies that define their space. We build
            and run the machine that earns attention, from production to distribution,
            across every platform you need to win.
          </p>

          {/* CTA Button */}
          <div
            className="opacity-0"
            style={{ animation: 'fadeInUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.85s forwards' }}
          >
            <a href="#contact" className="btn-primary-orange px-8 py-4 text-sm sm:text-base tracking-wide font-semibold shadow-xl inline-block">
              Apply to Work With Us
            </a>
          </div>
        </main>

        {/* Stats Bar */}
        <footer className="relative z-10 max-w-5xl mx-auto w-full px-4 sm:px-6 pb-10 sm:pb-12 pt-4">
          <div
            className="flex flex-row justify-around md:grid md:grid-cols-3 gap-4 sm:gap-8 opacity-0"
            style={{ animation: 'fadeInUp 1s ease-out 1.15s forwards' }}
          >

            {/* Stat 1 */}
            <div className="stat-card flex flex-col items-center text-center">
              <div className="stat-icon green">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <span className="text-lg sm:text-2xl font-bold text-white tracking-tight font-display">1B+</span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">views generated</span>
            </div>

            {/* Stat 2 */}
            <div className="stat-card flex flex-col items-center text-center">
              <div className="stat-icon blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L8.5 8.5H2l5.25 4.75L5 20l7-4.5L19 20l-2.25-6.75L22 8.5h-6.5L12 2z" />
                </svg>
              </div>
              <span className="text-lg sm:text-2xl font-bold text-white tracking-tight font-display">4 Years</span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">of brand building</span>
            </div>

            {/* Stat 3 */}
            <div className="stat-card flex flex-col items-center text-center">
              <div className="stat-icon yellow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 6h20M2 6l3-3h14l3 3M2 6v14a2 2 0 002 2h16a2 2 0 002-2V6" />
                  <line x1="12" y1="6" x2="12" y2="3" />
                  <polyline points="10 12 12 14 14 12" />
                </svg>
              </div>
              <span className="text-lg sm:text-2xl font-bold text-white tracking-tight font-display">8,000+</span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">videos created</span>
            </div>

          </div>
        </footer>
      </section>

      {/* ── TRUSTED LEADERS SECTION ── */}
      <ScrollReveal duration={0.9} distance="30px">
        <TrustedLeaders />
      </ScrollReveal>

      {/* ── CONTENT PRODUCTION, SYSTEMATIZED SECTION ── */}
      <ScrollReveal duration={0.9} distance="35px">
        <ContentSystematized />
      </ScrollReveal>

      {/* ── HIGH LEVEL REPURPOSING SECTION ── */}
      <ScrollReveal duration={0.9} distance="35px">
        <HighLevelRepurposing />
      </ScrollReveal>

      {/* ── VIRAL EDITS SECTION ── */}
      <ScrollReveal duration={0.9} distance="35px">
        <ViralEdits />
      </ScrollReveal>

      {/* ── LONG FORM STANDARD SECTION ── */}
      <ScrollReveal duration={0.9} distance="35px">
        <LongFormStandard />
      </ScrollReveal>

      {/* ── MMH SPOTLIGHT SECTION ── */}
      <ScrollReveal duration={0.9} distance="35px">
        <SpotlightSection />
      </ScrollReveal>

      {/* ── THREE WAYS TO WORK WITH US SECTION ── */}
      <ScrollReveal duration={0.9} distance="35px">
        <WaysToWork />
      </ScrollReveal>

      {/* ── PROBLEMS WE SOLVE SECTION ── */}
      <ScrollReveal duration={0.9} distance="35px">
        <ProblemsWeSolve />
      </ScrollReveal>

      {/* ── THE GOAL SECTION ── */}
      <ScrollReveal duration={0.9} distance="35px">
        <TheGoal />
      </ScrollReveal>

      {/* ── CLIENT TESTIMONIALS SECTION ── */}
      <ScrollReveal duration={0.9} distance="35px">
        <ClientTestimonials />
      </ScrollReveal>

      {/* ── FAQS SECTION ── */}
      <ScrollReveal duration={0.9} distance="35px">
        <FAQSection />
      </ScrollReveal>

      {/* ── FOOTER ── */}
      <Footer />

    </div>
  );
};

export default HomePage;
