import React, { useState, useEffect, useRef, useCallback } from 'react';

/* ─── Platform Data with 3D Orbit & Feature Metadata ─── */
const PLATFORMS_DATA = [
  {
    id: 'linkedin-posts',
    name: 'LinkedIn Posts',
    initialAngle: 0,
    y: -110,
    iconBg: 'bg-[#0077b5]',
    color: '#0077b5',
    format: 'Text & Visual Thought Leadership',
    stat: '4.2x Reach Boost',
    description: 'Transform key podcast quotes & insights into high-authority text posts.',
    icon: <span className="font-bold text-white text-[11px] font-sans">in</span>,
  },
  {
    id: 'youtube-shorts',
    name: 'Youtube Shorts',
    initialAngle: (2 * Math.PI * 1) / 5,
    y: -35,
    iconBg: 'bg-[#ff0000]',
    color: '#ff0000',
    format: '9:16 Vertical Video Reels',
    stat: '100K+ Viral Views',
    description: 'Fast-paced, hook-driven clips with animated captions designed for maximum retention.',
    icon: (
      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    id: 'instagram-carousels',
    name: 'Instagram Carousels',
    initialAngle: (2 * Math.PI * 2) / 5,
    y: 50,
    iconBg: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]',
    color: '#dc2743',
    format: 'Multi-Slide Visual Decks',
    stat: '3.8x Save Rate',
    description: 'Beautifully designed carousel decks that break complex ideas into swipeable slides.',
    icon: (
      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    id: 'tiktok-videos',
    name: 'TikTok Videos',
    initialAngle: (2 * Math.PI * 3) / 5,
    y: 95,
    iconBg: 'bg-[#000000] border border-white/20',
    color: '#00f2fe',
    format: 'Trend-Driven Shorts',
    stat: 'High Algorithm Push',
    description: 'Native editing with sound design, sound hooks, and energetic pacing.',
    icon: (
      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .56.04.82.12V9.4a6.27 6.27 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.47V13a8.28 8.28 0 0 0 5.73 2.25V11.8a4.84 4.84 0 0 1-3.43-1.47 4.84 4.84 0 0 1-1.44-3.44V6.69z" />
      </svg>
    ),
  },
  {
    id: 'linkedin-carousels',
    name: 'LinkedIn Carousels',
    initialAngle: (2 * Math.PI * 4) / 5,
    y: -25,
    iconBg: 'bg-[#0077b5]',
    color: '#0a66c2',
    format: 'Document PDF Carousels',
    stat: '5x Click-Through Rate',
    description: 'High-converting PDF documents formatted specifically for LinkedIn feed algorithms.',
    icon: <span className="font-bold text-white text-[11px] font-sans">in</span>,
  },
];

/* ─── Main Section Component with Interactive 3D Globe & Dynamic Platform Card ─── */
const HighLevelRepurposing = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const [hoveredNode, setHoveredNode] = useState(null);
  const [activePlatformId, setActivePlatformId] = useState('youtube-shorts');
  const [badgePositions, setBadgePositions] = useState([]);

  // Mouse Parallax tilt state
  const mousePos = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    mousePos.current = { x: nx * 0.25, y: ny * 0.25 };
  }, []);

  // Hover state ref for smooth animation loop deceleration
  const hoveredNodeRef = useRef(hoveredNode);
  useEffect(() => {
    hoveredNodeRef.current = hoveredNode;
  }, [hoveredNode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const width = 480;
    const height = 480;
    canvas.width = width * 2; // High DPI
    canvas.height = height * 2;
    ctx.scale(2, 2);

    let angleY = 0;
    let currentSpeed = 0.005;
    let targetAngleX = 0;
    let currentAngleX = 0;

    const latCount = 22;
    const lonCount = 34;
    const radius = 165;
    const orbitRadius = 220;

    // Energy pulse particles on laser lines
    let pulseProgress = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse tilt damping
      targetAngleX = mousePos.current.y;
      currentAngleX += (targetAngleX - currentAngleX) * 0.08;

      // Smooth speed slowdown on badge hover, speedup on mouse exit
      const normalSpeed = 0.005;
      const slowSpeed = 0.0008;
      const targetSpeed = hoveredNodeRef.current ? slowSpeed : normalSpeed;
      currentSpeed += (targetSpeed - currentSpeed) * 0.06;

      angleY += currentSpeed; // 3D Y-axis continuous rotation with dynamic speed
      pulseProgress = (pulseProgress + 0.015) % 1;

      const cx = width / 2;
      const cy = height / 2;
      const fov = 400;
      const distance = 440;

      // ── 1. Calculate and Draw 3D Globe Mesh Grid ──
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

          // X-axis interactive tilt
          const y1 = y0 * Math.cos(currentAngleX) - z0 * Math.sin(currentAngleX);
          const z1 = y0 * Math.sin(currentAngleX) + z0 * Math.cos(currentAngleX);

          // Y-axis continuous rotation
          const x2 = x0 * Math.cos(angleY) + z1 * Math.sin(angleY);
          const z2 = -x0 * Math.sin(angleY) + z1 * Math.cos(angleY);

          const scale = (distance + z2) / distance;
          const px = cx + x2 * scale;
          const py = cy + y1 * scale;
          const alpha = Math.max(0.12, (z2 + radius) / (2 * radius));

          row.push({ x: px, y: py, z: z2, alpha });
        }
        grid.push(row);
      }

      // Draw Latitude lines (Horizontal)
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

      // Draw Longitude lines (Vertical)
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

      // 3. Draw Equatorial Glowing Energy Ring
      ctx.beginPath();
      const eqI = Math.floor(latCount / 2);
      for (let j = 0; j <= lonCount; j++) {
        const pt = grid[eqI][j];
        if (j === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      }
      ctx.strokeStyle = `rgba(245, 166, 35, 0.65)`;
      ctx.lineWidth = 1.8;
      ctx.stroke();

      // 4. Draw BIGGER Vertex dots on globe surface with dual-layer glow
      for (let i = 0; i <= latCount; i++) {
        for (let j = 0; j <= lonCount; j++) {
          const pt = grid[i][j];
          if (pt.z > -45) {
            // Depth-scaled dot radius: 2.4px to 4.2px
            const dotRadius = Math.max(2.4, 3.4 * (pt.alpha));

            // Outer glowing aura halo
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, dotRadius * 1.85, 0, Math.PI * 2);
            ctx.fillStyle = (i + j) % 2 === 0
              ? `rgba(110, 231, 183, ${pt.alpha * 0.28})`
              : `rgba(245, 166, 35, ${pt.alpha * 0.28})`;
            ctx.fill();

            // Core vertex dot
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, dotRadius, 0, Math.PI * 2);
            ctx.fillStyle = (i + j) % 2 === 0
              ? `rgba(110, 231, 183, ${pt.alpha * 0.95})`
              : `rgba(253, 224, 71, ${pt.alpha * 0.95})`;
            ctx.fill();

            // Inner crisp white center highlight
            if (pt.z > 20) {
              ctx.beginPath();
              ctx.arc(pt.x, pt.y, dotRadius * 0.45, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, 255, 255, ${pt.alpha})`;
              ctx.fill();
            }
          }
        }
      }

      // ── 2. Calculate 3D Orbiting Social Media Badge Positions & Laser Beams ──
      const updatedPositions = [];

      PLATFORMS_DATA.forEach((plat) => {
        const currentAngle = plat.initialAngle + angleY;
        const x0 = orbitRadius * Math.cos(currentAngle);
        const z0 = orbitRadius * Math.sin(currentAngle);
        const y0 = plat.y;

        // X-axis tilt for orbit
        const y1 = y0 * Math.cos(currentAngleX) - z0 * Math.sin(currentAngleX);
        const z1 = y0 * Math.sin(currentAngleX) + z0 * Math.cos(currentAngleX);

        // Globe surface contact point
        const gx0 = radius * Math.cos(currentAngle);
        const gz0 = radius * Math.sin(currentAngle);
        const gy0 = plat.y * (radius / orbitRadius);

        const gy1 = gy0 * Math.cos(currentAngleX) - gz0 * Math.sin(currentAngleX);
        const gz1 = gy0 * Math.sin(currentAngleX) + gz0 * Math.cos(currentAngleX);

        // Correct Perspective Projections: (distance + z) / distance
        const scaleB = (distance + z1) / distance;
        const bx = cx + x0 * scaleB;
        const by = cy + y1 * scaleB;

        const scaleG = (distance + gz1) / distance;
        const gpx = cx + gx0 * scaleG;
        const gpy = cy + gy1 * scaleG;

        const isFront = z1 > 0;
        // Inverted/Corrected Alpha: When icon is big (z1 > 0), opacity reaches 1.0 (100%). When icon is small (z1 < 0), opacity reduces to 0.1.
        const alpha = Math.max(0.1, Math.min(1.0, (z1 + orbitRadius) / (2 * orbitRadius)));
        const zIndex = Math.round(z1 + 500);

        const isHovered = hoveredNode === plat.id;

        // Draw 3D Laser Beam Connection
        ctx.beginPath();
        ctx.moveTo(bx, by);
        ctx.lineTo(gpx, gpy);
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = isHovered
          ? plat.color
          : isFront
            ? `rgba(129, 140, 248, ${alpha * 0.75})`
            : `rgba(129, 140, 248, ${alpha * 0.25})`;
        ctx.lineWidth = isHovered ? 2.5 : isFront ? 1.2 : 0.8;
        ctx.stroke();
        ctx.setLineDash([]);

        // Animated Energy Pulse Dot traveling along laser line
        if (isFront) {
          const pulseX = bx + (gpx - bx) * pulseProgress;
          const pulseY = by + (gpy - by) * pulseProgress;
          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = isHovered ? '#ffffff' : '#6ee7b7';
          ctx.fill();

          // Globe surface contact glowing circle
          ctx.beginPath();
          ctx.arc(gpx, gpy, isHovered ? 4.5 : 3, 0, Math.PI * 2);
          ctx.fillStyle = isHovered ? plat.color : '#6ee7b7';
          ctx.fill();
        }

        updatedPositions.push({
          id: plat.id,
          x: bx,
          y: by,
          scale: scaleB,
          alpha,
          zIndex,
          isFront,
        });
      });

      setBadgePositions(updatedPositions);
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [hoveredNode]);

  // Find active platform data for feature highlight card
  const activePlatform =
    PLATFORMS_DATA.find((p) => p.id === (hoveredNode || activePlatformId)) || PLATFORMS_DATA[0];

  return (
    <section className="bg-[#05070b] relative z-10 py-24 sm:py-32 px-4 sm:px-6 border-t border-white/[0.06] overflow-hidden">

      {/* Dynamic Ambient Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-indigo-600/10 blur-[170px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[350px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">

        {/* ── Section Header ── */}
        <div className="text-left w-full mb-12 sm:mb-16">

          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Omnichannel Content Flywheel
          </div>

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

          {/* 3 Metric Pills */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <span className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300 backdrop-blur-md">
              ⚡ 1 Master Content → 5 Platforms
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300 backdrop-blur-md">
              🚀 10x Content Distribution
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-slate-300 backdrop-blur-md">
              🎯 100% Brand Voice Consistency
            </span>
          </div>
        </div>

        {/* ── 3D GLOBE SPHERE & FEATURE HIGHLIGHT GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full my-6">

          {/* LEFT/CENTER: Interactive 3D Orbiting Globe */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="lg:col-span-7 relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] mx-auto flex items-center justify-center cursor-grab active:cursor-grabbing"
          >
            {/* 3D Wireframe Globe & Laser Lines Canvas */}
            <canvas
              ref={canvasRef}
              className="w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] pointer-events-none drop-shadow-[0_0_30px_rgba(129,140,248,0.28)]"
            />

            {/* 5 Real-time 3D Orbiting Badges */}
            {PLATFORMS_DATA.map((platform) => {
              const pos = badgePositions.find((p) => p.id === platform.id);
              if (!pos) return null;
              const isActive = (hoveredNode || activePlatformId) === platform.id;

              return (
                <div
                  key={platform.id}
                  onMouseEnter={() => {
                    setHoveredNode(platform.id);
                    setActivePlatformId(platform.id);
                  }}
                  onMouseLeave={() => setHoveredNode(null)}
                  className="absolute pointer-events-auto transition-transform duration-75"
                  style={{
                    left: `${pos.x}px`,
                    top: `${pos.y}px`,
                    transform: `translate(-50%, -50%) scale(${pos.scale * (isActive ? 1.18 : 1)})`,
                    opacity: pos.alpha,
                    zIndex: pos.zIndex,
                  }}
                >
                  <div
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#0c1017]/95 border shadow-2xl backdrop-blur-md transition-all duration-300 cursor-pointer ${isActive
                      ? 'border-amber-400/80 shadow-amber-500/20 text-white scale-105'
                      : 'border-white/[0.16] shadow-black hover:border-white/40'
                      }`}
                  >
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
              );
            })}
          </div>

          {/* RIGHT: Dynamic Glassmorphic Platform Focus Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#0c1017]/90 backdrop-blur-2xl border border-white/[0.14] rounded-3xl p-7 sm:p-8 shadow-2xl relative overflow-hidden transition-all duration-500 hover:border-amber-500/40 group">

              {/* Top Accent Gradient Pill */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl ${activePlatform.iconBg} flex items-center justify-center shadow-lg text-lg`}>
                    {activePlatform.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg font-display tracking-tight">
                      {activePlatform.name}
                    </h3>
                    <span className="text-slate-400 text-xs font-medium">
                      {activePlatform.format}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  {activePlatform.stat}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                {activePlatform.description}
              </p>

              {/* Interactive Platform Selector Buttons */}
              <div className="border-t border-white/[0.08] pt-5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-3 block">
                  Select Platform to Explore:
                </span>
                <div className="flex flex-wrap gap-2">
                  {PLATFORMS_DATA.map((plat) => (
                    <button
                      key={plat.id}
                      onClick={() => setActivePlatformId(plat.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${activePlatform.id === plat.id
                        ? 'bg-amber-400 text-black shadow-md shadow-amber-400/20'
                        : 'bg-white/[0.05] text-slate-300 hover:bg-white/10 hover:text-white'
                        }`}
                    >
                      {plat.name}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ── CTA Button at Bottom ── */}
        <div className="mt-16 sm:mt-20 text-center">
          <button className="btn-primary-orange px-9 py-4 text-sm sm:text-base tracking-wide font-semibold shadow-2xl hover:scale-105 transition-transform duration-300">
            Book a Discovery Call
          </button>
        </div>

      </div>

    </section>
  );
};

export default HighLevelRepurposing;
