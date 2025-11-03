import React from 'react';
import LetterGlitch from './LetterGlitch';

export default function GamingButton({ 
  item, 
  index, 
  side = 'left', 
  color = 'cyan' 
}) {
  const colorClasses = {
    cyan: {
      border: 'border-cyan-400/40 hover:border-cyan-400',
      text: 'text-cyan-400',
      shadow: 'shadow-[0_0_20px_#00ffff]',
      gradient: 'from-cyan-400',
      bg: 'bg-cyan-400',
      glow: 'drop-shadow-[0_0_20px_rgba(0,255,255,0.9)] group-hover:drop-shadow-[0_0_35px_rgba(0,255,255,1)]',
      innerGlow: 'shadow-[inset_0_0_20px_rgba(0,255,255,0.3)]',
      pulse: 'shadow-[0_0_30px_rgba(0,255,255,0.6)]',
      hex: '#00ffff',
      glitchColors: ['#00ffff', '#0099cc', '#00cccc']
    },
    purple: {
      border: 'border-purple-500/40 hover:border-purple-500',
      text: 'text-purple-400',
      shadow: 'shadow-[0_0_20px_#a855f7]',
      gradient: 'from-purple-500',
      bg: 'bg-purple-500',
      glow: 'drop-shadow-[0_0_20px_rgba(168,85,247,0.9)] group-hover:drop-shadow-[0_0_35px_rgba(168,85,247,1)]',
      innerGlow: 'shadow-[inset_0_0_20px_rgba(168,85,247,0.3)]',
      pulse: 'shadow-[0_0_30px_rgba(168,85,247,0.6)]',
      hex: '#a855f7',
      glitchColors: ['#a855f7', '#9333ea', '#c084fc']
    },
    pink: {
      border: 'border-pink-500/40 hover:border-pink-500',
      text: 'text-pink-400',
      shadow: 'shadow-[0_0_20px_#ec4899]',
      gradient: 'from-pink-500',
      bg: 'bg-pink-500',
      glow: 'drop-shadow-[0_0_20px_rgba(236,72,153,0.9)] group-hover:drop-shadow-[0_0_35px_rgba(236,72,153,1)]',
      innerGlow: 'shadow-[inset_0_0_20px_rgba(236,72,153,0.3)]',
      pulse: 'shadow-[0_0_30px_rgba(236,72,153,0.6)]',
      hex: '#ec4899',
      glitchColors: ['#ec4899', '#f472b6', '#db2777']
    },
    orange: {
      border: 'border-orange-500/40 hover:border-orange-500',
      text: 'text-orange-400',
      shadow: 'shadow-[0_0_20px_#f97316]',
      gradient: 'from-orange-500',
      bg: 'bg-orange-500',
      glow: 'drop-shadow-[0_0_20px_rgba(249,115,22,0.9)] group-hover:drop-shadow-[0_0_35px_rgba(249,115,22,1)]',
      innerGlow: 'shadow-[inset_0_0_20px_rgba(249,115,22,0.3)]',
      pulse: 'shadow-[0_0_30px_rgba(249,115,22,0.6)]',
      hex: '#f97316',
      glitchColors: ['#f97316', '#fb923c', '#ea580c']
    }
  };

  const currentColor = colorClasses[color];
  const clipPath = side === 'left' 
    ? "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))"
    : "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)";

  return (
    <button
      className={`group relative w-44 h-20 bg-gradient-to-br from-black via-gray-900 to-black border-2 ${currentColor.border} ${currentColor.text} text-xs tracking-[4px] font-black overflow-hidden backdrop-blur-xl transition-all duration-500 flex items-center justify-center ${currentColor.innerGlow} animate-glitch-subtle`}
      style={{
        animationDelay: `${index * 0.2}s`,
        clipPath: clipPath,
        boxShadow: '0 8px 32px rgba(0,0,0,0.8)',
        transform: 'perspective(1000px) rotateX(0deg)'
      }}
    >
      {/* SVG Corner Borders */}
      {/* Top-left corner design */}
      <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity duration-500">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 64 64">
          <defs>
            <filter id={`glow-${index}`}>
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <linearGradient id={`cornerGrad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: currentColor.hex, stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: currentColor.hex, stopOpacity: 0.6}} />
            </linearGradient>
          </defs>
          
          <path d="M 0 0 L 60 0 L 50 8 L 45 8 L 42 10 L 12 10 L 10 12 L 8 12 L 0 20 Z" 
                fill={`url(#cornerGrad-${index})`} 
                filter={`url(#glow-${index})`} />
          
          <path d="M 2 2 L 58 2 L 48 9 L 44 9 L 42 11 L 14 11 L 12 13 L 9 13 L 2 19 Z" 
                fill="#1e293b" />
          
          <path d="M 4 4 L 56 4 L 46 10 L 43 10 L 41 12 L 15 12 L 13 14 L 10 14 L 4 18 Z" 
                fill="none" 
                stroke={currentColor.hex} 
                strokeWidth="0.5" 
                opacity="0.5" />
        </svg>
      </div>

      {/* Bottom-right corner design */}
      <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity duration-500">
        <svg className="absolute bottom-0 right-0 w-full h-full" viewBox="0 0 64 64">
          <defs>
            <filter id={`glow2-${index}`}>
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <linearGradient id={`cornerGrad2-${index}`} x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" style={{stopColor: currentColor.hex, stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: currentColor.hex, stopOpacity: 0.6}} />
            </linearGradient>
          </defs>
          
          <path d="M 64 64 L 4 64 L 14 56 L 19 56 L 22 54 L 52 54 L 54 52 L 56 52 L 64 44 Z" 
                fill={`url(#cornerGrad2-${index})`} 
                filter={`url(#glow2-${index})`} />
          
          <path d="M 62 62 L 6 62 L 16 55 L 20 55 L 22 53 L 50 53 L 52 51 L 55 51 L 62 45 Z" 
                fill="#1e293b" />
          
          <path d="M 60 60 L 8 60 L 18 54 L 21 54 L 23 52 L 49 52 L 51 50 L 54 50 L 60 46 Z" 
                fill="none" 
                stroke={currentColor.hex} 
                strokeWidth="0.5" 
                opacity="0.5" />
        </svg>
      </div>

      {/* LetterGlitch Background Effect */}
      <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500" style={{ clipPath }}>
        <LetterGlitch
          glitchColors={currentColor.glitchColors}
          glitchSpeed={100}
          smooth={true}
          outerVignette={false}
          centerVignette={false}
        />
      </div>

      {/* ...existing code... */}
      {/* Glitch clone layers */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 ${currentColor.text} animate-glitch-1 mix-blend-screen pointer-events-none`}
        style={{ clipPath: clipPath }}>
        <span className="absolute inset-0 flex items-center justify-center font-mono text-xs tracking-[4px] font-black">
          {item}
        </span>
      </div>
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 ${currentColor.text} animate-glitch-2 mix-blend-screen pointer-events-none`}
        style={{ clipPath: clipPath }}>
        <span className="absolute inset-0 flex items-center justify-center font-mono text-xs tracking-[4px] font-black">
          {item}
        </span>
      </div>

      {/* Hexagonal grid pattern background */}
      <div className="absolute inset-0 opacity-20 group-hover:opacity-60 transition-opacity duration-500 animate-grid-pulse"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 3px),
                           repeating-linear-gradient(90deg, transparent, transparent 2px, currentColor 2px, currentColor 3px)`,
          backgroundSize: '8px 8px'
        }}
      ></div>

      {/* Animated diagonal scanlines */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)',
          backgroundSize: '20px 20px',
          animation: 'scroll 20s linear infinite'
        }}
      ></div>

      {/* Main scanline effect - enhanced */}
      <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-transparent h-32 translate-y-[-150%] group-hover:translate-y-[250%] transition-transform duration-1200 ease-in-out ${currentColor.shadow}`}></div>

      {/* Double scanline for intensity */}
      <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent h-24 translate-y-[-120%] group-hover:translate-y-[220%] transition-transform duration-1000 ease-in-out`}></div>

      {/* Enhanced glitch bars with multiple layers */}
      <div className={`absolute ${side === 'left' ? 'left-0' : 'right-0'} top-1/4 w-full h-[3px] ${currentColor.bg}/0 group-hover:${currentColor.bg}/80 transition-all duration-100 ${currentColor.shadow}`}></div>
      <div className={`absolute ${side === 'left' ? 'left-0' : 'right-0'} top-1/3 w-3/4 h-[2px] ${currentColor.bg}/0 group-hover:${currentColor.bg}/60 transition-all duration-150`}
        style={{ animationDelay: "0.05s" }}
      ></div>
      <div className={`absolute ${side === 'left' ? 'left-0' : 'right-0'} top-2/3 w-full h-[3px] ${currentColor.bg}/0 group-hover:${currentColor.bg}/80 transition-all duration-100 ${currentColor.shadow}`}
        style={{ animationDelay: "0.08s" }}
      ></div>
      <div className={`absolute ${side === 'left' ? 'left-0' : 'right-0'} top-3/4 w-2/3 h-[2px] ${currentColor.bg}/0 group-hover:${currentColor.bg}/60 transition-all duration-150`}
        style={{ animationDelay: "0.1s" }}
      ></div>

      {/* Enhanced energy pulse on sides */}
      <div className={`absolute ${side === 'left' ? 'left-0' : 'right-0'} top-0 w-[3px] h-0 bg-gradient-to-b ${currentColor.gradient} via-white to-transparent group-hover:h-full transition-all duration-700 ${currentColor.shadow}`}></div>
      <div className={`absolute ${side === 'left' ? 'right-0' : 'left-0'} bottom-0 w-[3px] h-0 bg-gradient-to-t ${currentColor.gradient} via-white to-transparent group-hover:h-full transition-all duration-700 ${currentColor.shadow}`}></div>

      {/* Multiple pixel particles with staggered animation */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className={`absolute w-1 h-1 ${currentColor.bg} opacity-0 group-hover:opacity-100 group-hover:animate-ping rounded-full`}
          style={{
            [side === 'left' ? 'left' : 'right']: `${15 + i * 15}%`,
            [i % 2 === 0 ? 'top' : 'bottom']: `${10 + (i % 3) * 10}%`,
            animationDelay: `${i * 0.15}s`
          }}
        ></div>
      ))}

      {/* Enhanced holographic overlay with rainbow effect */}
      <div className={`absolute inset-0 bg-gradient-to-${side === 'left' ? 'r' : 'l'} from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
        style={{
          transform: side === 'left' ? 'translateX(-200%)' : 'translateX(200%)',
          transition: 'transform 0.7s ease-in-out, opacity 0.7s ease-in-out'
        }}
      ></div>

      {/* Data stream effect */}
      <div className={`absolute ${side === 'left' ? 'left-2' : 'right-2'} top-0 flex flex-col gap-1 opacity-0 group-hover:opacity-70 transition-all duration-500`}>
        {[...Array(5)].map((_, i) => (
          <div
            key={`stream-${i}`}
            className={`w-[2px] h-3 ${currentColor.bg} animate-pulse`}
            style={{ animationDelay: `${i * 0.2}s` }}
          ></div>
        ))}
      </div>

      {/* Main text with enhanced gaming font effect */}
      <span className={`relative z-10 ${currentColor.glow} group-hover:text-white transition-all duration-300 font-mono text-center group-hover:tracking-[5px] group-hover:scale-110`}>
        <span className="relative">
          {item}
          {/* Text shadow layers */}
          <span className={`absolute inset-0 ${currentColor.text} blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>{item}</span>
        </span>
      </span>

      {/* Enhanced level indicator dots */}
      <div className={`absolute ${side === 'left' ? '-right-2' : '-left-2'} top-1/2 -translate-y-1/2 flex flex-col gap-2`}>
        {[...Array(4)].map((_, i) => (
          <div
            key={`level-${i}`}
            className={`w-2 h-2 rounded-full border-2 ${currentColor.border.split(' ')[0]} ${currentColor.bg}/20 group-hover:${currentColor.bg} group-hover:scale-150 transition-all duration-300 ${currentColor.shadow}`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          ></div>
        ))}
      </div>

      {/* Enhanced bottom power bar with segments */}
      <div className={`absolute bottom-0 ${side === 'left' ? 'left-0' : 'right-0'} h-2 w-full flex gap-[2px] overflow-hidden`}>
        {[...Array(8)].map((_, i) => (
          <div
            key={`segment-${i}`}
            className={`flex-1 ${currentColor.bg}/30 group-hover:${currentColor.bg} transition-all duration-700 ${currentColor.shadow}`}
            style={{ transitionDelay: `${i * 0.08}s` }}
          ></div>
        ))}
      </div>

      {/* Outer glow effect */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${currentColor.shadow} blur-xl -z-10`}></div>

      {/* Chromatic aberration glow */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-300 blur-md -z-10`}
        style={{
          background: `radial-gradient(circle at 50% 50%, ${currentColor.hex}, transparent 70%)`
        }}
      ></div>

      <style jsx>{`
        @keyframes scroll {
          from { background-position: 0 0; }
          to { background-position: 20px 20px; }
        }

        @keyframes glitch-1 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-3px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(3px, 1px); }
          80% { transform: translate(2px, -1px); }
        }

        @keyframes glitch-2 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(3px, -2px); }
          40% { transform: translate(2px, 2px); }
          60% { transform: translate(-3px, -1px); }
          80% { transform: translate(-2px, 1px); }
        }

        @keyframes glitch-subtle {
          0%, 90%, 100% { transform: perspective(1000px) rotateX(0deg); }
          91% { transform: perspective(1000px) rotateX(0.5deg) translateX(-1px); }
          92% { transform: perspective(1000px) rotateX(-0.5deg) translateX(1px); }
          93% { transform: perspective(1000px) rotateX(0deg); }
        }

        @keyframes grid-pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }

        .animate-glitch-1 {
          animation: glitch-1 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        }

        .animate-glitch-2 {
          animation: glitch-2 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
          animation-delay: 0.15s;
        }

        .animate-glitch-subtle {
          animation: glitch-subtle 8s ease-in-out infinite;
        }

        .animate-grid-pulse {
          animation: grid-pulse 2s ease-in-out infinite;
        }
      `}</style>
    </button>
  );
}