import React, { useState, useEffect, useRef } from 'react';

/* ─── 3D Wireframe Globe Component ─── */
const WireframeGlobe = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const width = 460;
    const height = 460;
    canvas.width = width * 2; // high DPI scaling
    canvas.height = height * 2;
    ctx.scale(2, 2);

    let angleY = 0;
    const angleX = 0.35;

    const latCount = 20;
    const lonCount = 32;
    const radius = 160;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      angleY += 0.004; // Smooth continuous 3D rotation

      const cx = width / 2;
      const cy = height / 2;
      const fov = 380;

      const grid = [];

      for (let i = 0; i <= latCount; i++) {
        const lat = (Math.PI * i) / latCount - Math.PI / 2;
        const rLat = radius * Math.cos(lat);
        const y0 = radius * Math.sin(lat);

        const row = [];
        for (let j = 0; j <= lonCount; j++) {
          const lon = (2 * Math.PI * j) / lonCount;
          const x0 = rLat * Math.cos(lon);
          const z0 = rLat * Math.sin(lon);

          // X-axis tilt rotation
          const y1 = y0 * Math.cos(angleX) - z0 * Math.sin(angleX);
          const z1 = y0 * Math.sin(angleX) + z0 * Math.cos(angleX);

          // Y-axis continuous rotation
          const x2 = x0 * Math.cos(angleY) + z1 * Math.sin(angleY);
          const z2 = -x0 * Math.sin(angleY) + z1 * Math.cos(angleY);

          // Perspective calculation
          const distance = 420;
          const scale = fov / (distance + z2);
          const px = cx + x2 * scale;
          const py = cy + y1 * scale;
          const alpha = Math.max(0.12, (z2 + radius) / (2 * radius));

          row.push({ x: px, y: py, z: z2, alpha });
        }
        grid.push(row);
      }

      // 1. Draw Latitude lines
      for (let i = 0; i <= latCount; i++) {
        ctx.beginPath();
        for (let j = 0; j <= lonCount; j++) {
          const pt = grid[i][j];
          if (j === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.strokeStyle = `rgba(165, 180, 252, ${grid[i][0].alpha * 0.4})`;
        ctx.lineWidth = 0.9;
        ctx.stroke();
      }

      // 2. Draw Longitude lines
      for (let j = 0; j <= lonCount; j++) {
        ctx.beginPath();
        for (let i = 0; i <= latCount; i++) {
          const pt = grid[i][j];
          if (i === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.strokeStyle = `rgba(245, 166, 35, ${grid[0][j].alpha * 0.35})`;
        ctx.lineWidth = 0.9;
        ctx.stroke();
      }

      // 3. Draw Vertex dots
      for (let i = 0; i <= latCount; i++) {
        for (let j = 0; j <= lonCount; j++) {
          const pt = grid[i][j];
          if (pt.z > -30) {
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 1.6, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(110, 231, 183, ${pt.alpha * 0.85})`;
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] pointer-events-none drop-shadow-[0_0_25px_rgba(129,140,248,0.25)]"
    />
  );
};

/* ─── Platform Node Configuration ─── */
const PLATFORMS = [
  {
    id: 'linkedin-posts',
    name: 'LinkedIn Posts',
    position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-6',
    iconBg: 'bg-[#0077b5]',
    icon: (
      <span className="font-bold text-white text-[11px] font-sans">in</span>
    ),
  },
  {
    id: 'youtube-shorts',
    name: 'Youtube Shorts',
    position: 'top-1/3 -right-4 sm:-right-20 -translate-y-1/2',
    iconBg: 'bg-[#ff0000]',
    icon: (
      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    id: 'instagram-carousels',
    name: 'Instagram Carousels',
    position: 'bottom-8 -right-2 sm:-right-16',
    iconBg: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]',
    icon: (
      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    id: 'tiktok-videos',
    name: 'TikTok Videos',
    position: 'bottom-8 -left-2 sm:-left-16',
    iconBg: 'bg-[#000000] border border-white/20',
    icon: (
      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .56.04.82.12V9.4a6.27 6.27 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.47V13a8.28 8.28 0 0 0 5.73 2.25V11.8a4.84 4.84 0 0 1-3.43-1.47 4.84 4.84 0 0 1-1.44-3.44V6.69z"/>
      </svg>
    ),
  },
  {
    id: 'linkedin-carousels',
    name: 'LinkedIn Carousels',
    position: 'top-1/3 -left-4 sm:-left-20 -translate-y-1/2',
    iconBg: 'bg-[#0077b5]',
    icon: (
      <span className="font-bold text-white text-[11px] font-sans">in</span>
    ),
  },
];

const HighLevelRepurposing = () => {
  const [hoveredNode, setHoveredNode] = useState(null);

  return (
    <section className="bg-[#05070b] relative z-10 py-24 sm:py-32 px-4 sm:px-6 border-t border-white/[0.06] overflow-hidden">
      
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/5 blur-[160px] rounded-full pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">

        {/* ── Section Header ── */}
        <div className="text-left w-full mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight inline-flex items-center gap-2 relative">
            <span>High Level</span>
            <span className="text-[#f5a623] relative">
              Repurposing
              {/* Hand-drawn Green Sparkle Doodle */}
              <svg className="absolute -top-3 -right-7 sm:-right-8 w-7 h-7 sm:w-8 sm:h-8 text-[#6ee7b7] pointer-events-none" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M 8 26 C 14 18 18 12 24 6" />
                <path d="M 16 28 C 22 22 26 16 32 10" />
                <path d="M 4 16 C 10 14 18 12 26 10" />
              </svg>
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mt-4 font-sans">
            We build bulletproof content flywheels for personal brands to grow on multiple platforms with high volume of content.
          </p>
        </div>

        {/* ── 3D WIREFRAME GLOBE SPHERE CONTAINER ── */}
        <div className="relative my-12 sm:my-16 w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] flex items-center justify-center">

          {/* 3D Wireframe Globe Mesh Canvas */}
          <div className="absolute inset-0 flex items-center justify-center">
            <WireframeGlobe />
          </div>

          {/* Central Core Glass Badge */}
          <div className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#05070b]/90 border border-white/20 backdrop-blur-xl flex flex-col items-center justify-center text-center shadow-2xl shadow-black group hover:border-amber-400/40 transition-colors duration-300">
            <span className="text-slate-300 font-medium text-xs sm:text-sm tracking-wide">
              Content
            </span>
            <span className="text-white font-bold font-display text-lg sm:text-xl tracking-tight mt-0.5">
              Flywheel
            </span>
          </div>

          {/* ── 5 Orbiting Platform Badges ── */}
          {PLATFORMS.map((platform) => (
            <div
              key={platform.id}
              onMouseEnter={() => setHoveredNode(platform.id)}
              onMouseLeave={() => setHoveredNode(null)}
              className={`absolute ${platform.position} z-20 transition-transform duration-300 ${
                hoveredNode === platform.id ? 'scale-110' : ''
              }`}
            >
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0c1017]/95 border border-white/[0.14] shadow-2xl shadow-black backdrop-blur-md hover:border-amber-400/50 transition-colors duration-300 cursor-pointer">
                {/* Platform Icon */}
                <div className={`w-5 h-5 rounded-md ${platform.iconBg} flex items-center justify-center shrink-0 shadow-sm`}>
                  {platform.icon}
                </div>
                {/* Platform Name */}
                <span className="text-white font-semibold text-xs sm:text-sm tracking-tight whitespace-nowrap">
                  {platform.name}
                </span>
              </div>
            </div>
          ))}

        </div>

        {/* ── CTA Button at Bottom ── */}
        <div className="mt-16 sm:mt-24 text-center">
          <button className="btn-primary-orange px-8 py-3.5 text-sm sm:text-base tracking-wide font-semibold shadow-xl">
            Book a Discovery Call
          </button>
        </div>

      </div>

    </section>
  );
};

export default HighLevelRepurposing;
