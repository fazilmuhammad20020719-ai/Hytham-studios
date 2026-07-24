import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-hy-gray-dark/30 via-hy-black to-hy-black z-0 pointer-events-none"></div>
      
      {/* Main Content */}
      <div className="z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold mb-6 tracking-tighter text-glow opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          Hytham
          <span className="block text-hy-gray-light text-3xl md:text-5xl lg:text-7xl mt-2">Studios</span>
        </h1>
        
        <p className="text-hy-gray-light max-w-2xl mx-auto text-lg md:text-xl mb-12 opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]">
          Crafting cinematic digital experiences and premium visual identities.
        </p>
        
        <div className="opacity-0 animate-[fadeInUp_1s_ease-out_0.8s_forwards]">
          <button className="px-8 py-4 bg-hy-pure-white text-hy-black font-medium tracking-wide uppercase text-sm md:text-base rounded-full hover:bg-hy-gray-light transition-colors duration-300 hover-glow">
            Explore Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
