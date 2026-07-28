import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#040609] relative z-10 pt-20 pb-12 px-4 sm:px-6 border-t border-white/[0.08] w-full max-w-full overflow-hidden">
      
      {/* Subtle Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] sm:w-[800px] h-[250px] sm:h-[300px] bg-amber-500/5 blur-[100px] sm:blur-[160px] rounded-full pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/[0.06] items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-6 text-left">
            <a href="#" className="inline-flex items-center gap-3 group mb-4">
              <img
                src="/Logo.png"
                alt="Hytham Studios Logo"
                className="h-8 sm:h-9 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-white font-bold text-lg sm:text-xl tracking-tight font-display">
                Hytham Studios
              </span>
            </a>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed font-sans mt-2">
              The content infrastructure for the companies that define their space. From production to multi-platform distribution.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase font-mono mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-sans">
              <li><a href="#process" className="text-slate-400 hover:text-white transition-colors">Process</a></li>
              <li><a href="#solutions" className="text-slate-400 hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#work" className="text-slate-400 hover:text-white transition-colors">Work</a></li>
              <li><a href="#testimonials" className="text-slate-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#faqs" className="text-slate-400 hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact / CTA */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase font-mono mb-4">
              Get In Touch
            </h4>
            <p className="text-slate-400 text-sm font-sans mb-5">
              Ready to scale your content engine?
            </p>
            <button className="btn-primary-orange px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide shadow-lg">
              Book a Call
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-sans">
          <p>© {new Date().getFullYear()} Hytham Studios. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
