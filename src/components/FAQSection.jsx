import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Who is this for?',
      answer:
        'Our services are designed for funded startups, venture-backed founders, tech companies, and media businesses looking to build a high-performance content engine and scale their online presence without managing an in-house team.',
    },
    {
      question: "What's the minimum commitment? Can I start with a trial?",
      answer:
        'Every engagement starts with a 3-month commitment. This gives us enough time to build your custom workflows, establish brand guidelines, test multiple content angles, and drive measurable performance results.',
    },
    {
      question: 'Is there any guarantee?',
      answer:
        'We guarantee dedicated turnarounds, high-quality production, and proactive strategy iteration. While organic growth depends on platform algorithms, our systematic approach has generated over 1 Billion+ total views across our client portfolio.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-[#05070b] relative z-10 py-24 sm:py-32 px-4 sm:px-6 border-t border-white/[0.06] overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-indigo-600/5 blur-[160px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* ── LEFT COLUMN: Headline ── */}
        <div className="lg:col-span-5 text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-white tracking-tight">
            FAQs
          </h2>
        </div>

        {/* ── RIGHT COLUMN: Accordion Items ── */}
        <div className="lg:col-span-7 w-full space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-[#090d14] rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-white/30 bg-[#0c111c] shadow-2xl' : 'border-white/[0.09] hover:border-white/20'
                }`}
              >
                {/* Accordion Question Header Button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none select-none"
                >
                  <span className="text-sm sm:text-base md:text-[1.05rem] font-semibold text-white font-display tracking-tight">
                    {faq.question}
                  </span>
                  
                  {/* Plus / Minus Animated Icon */}
                  <div
                    className={`w-7 h-7 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-45 bg-amber-500/20 text-amber-400 border-amber-500/30' : ''
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </div>
                </button>

                {/* Accordion Answer Content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 pb-6 px-5 sm:px-6' : 'max-h-0 opacity-0 pb-0 px-5 sm:px-6 pointer-events-none'
                  }`}
                >
                  <p className="text-slate-300 text-xs sm:text-sm md:text-[0.93rem] leading-relaxed font-sans pt-2 border-t border-white/[0.06]">
                    {faq.answer}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};

export default FAQSection;
