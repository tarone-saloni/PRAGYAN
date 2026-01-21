import React from "react";
import LetterGlitch from "./LetterGlitch";

export default function GamingButton({
  item,
  index,
  side = "left",
  color = "cyan",
  size = "medium", // small, medium, large
}) {
  const colorClasses = {
    cyan: {
      border: "border-cyan-400/40 hover:border-cyan-400",
      text: "text-cyan-400",
      shadow: "shadow-[0_0_20px_#00ffff]",
      gradient: "from-cyan-400",
      bg: "bg-cyan-400",
      glow: "drop-shadow-[0_0_20px_rgba(0,255,255,0.9)] group-hover:drop-shadow-[0_0_35px_rgba(0,255,255,1)]",
      innerGlow: "shadow-[inset_0_0_20px_rgba(0,255,255,0.3)]",
      hex: "#00ffff",
      glitchColors: ["#00ffff", "#0099cc", "#00cccc"],
    },
    red: {
      border: "border-[#ff5757]/40 hover:border-[#ff5757]",
      text: "text-[#ff5757]",
      shadow: "shadow-[0_0_20px_#ff5757]",
      gradient: "from-[#ff5757]",
      bg: "bg-[#ff5757]",
      glow: "drop-shadow-[0_0_20px_rgba(255,87,87,0.9)] group-hover:drop-shadow-[0_0_35px_rgba(255,87,87,1)]",
      innerGlow: "shadow-[inset_0_0_20px_rgba(255,87,87,0.3)]",
      hex: "#ff5757",
      glitchColors: ["#ff5757", "#ff3333", "#ff7777"],
    },
    yellow: {
      border: "border-yellow-400/40 hover:border-yellow-400",
      text: "text-yellow-400",
      shadow: "shadow-[0_0_20px_#fbbf24]",
      gradient: "from-yellow-400",
      bg: "bg-yellow-400",
      glow: "drop-shadow-[0_0_20px_rgba(251,191,36,0.9)] group-hover:drop-shadow-[0_0_35px_rgba(251,191,36,1)]",
      innerGlow: "shadow-[inset_0_0_20px_rgba(251,191,36,0.3)]",
      hex: "#fbbf24",
      glitchColors: ["#fbbf24", "#f59e0b", "#eab308"],
    },
    purple: {
      border: "border-purple-500/40 hover:border-purple-500",
      text: "text-purple-400",
      shadow: "shadow-[0_0_20px_#a855f7]",
      gradient: "from-purple-500",
      bg: "bg-purple-500",
      glow: "drop-shadow-[0_0_20px_rgba(168,85,247,0.9)] group-hover:drop-shadow-[0_0_35px_rgba(168,85,247,1)]",
      innerGlow: "shadow-[inset_0_0_20px_rgba(168,85,247,0.3)]",
      hex: "#a855f7",
      glitchColors: ["#a855f7", "#9333ea", "#c084fc"],
    },
    pink: {
      border: "border-pink-500/40 hover:border-pink-500",
      text: "text-pink-400",
      shadow: "shadow-[0_0_20px_#ec4899]",
      gradient: "from-pink-500",
      bg: "bg-pink-500",
      glow: "drop-shadow-[0_0_20px_rgba(236,72,153,0.9)] group-hover:drop-shadow-[0_0_35px_rgba(236,72,153,1)]",
      innerGlow: "shadow-[inset_0_0_20px_rgba(236,72,153,0.3)]",
      hex: "#ec4899",
      glitchColors: ["#ec4899", "#f472b6", "#db2777"],
    },
  };

  const sizeClasses = {
    small: {
      width: "w-24 sm:w-28 md:w-32 lg:w-32 xl:w-36",
      height: "h-12 sm:h-13 md:h-14 lg:h-14 xl:h-16",
      text: "text-[9px] sm:text-[9.5px] md:text-[10px] lg:text-[10px] xl:text-[11px]",
      tracking:
        "tracking-[1.5px] sm:tracking-[1.75px] md:tracking-[2px] lg:tracking-[2px] xl:tracking-[2.5px]",
    },
    medium: {
      width: "w-28 sm:w-32 md:w-36 lg:w-36 xl:w-40",
      height: "h-13 sm:h-14 md:h-16 lg:h-16 xl:h-18",
      text: "text-[10px] sm:text-[10.5px] md:text-[11px] lg:text-[11px] xl:text-xs",
      tracking:
        "tracking-[2px] sm:tracking-[2.5px] md:tracking-[3px] lg:tracking-[3px] xl:tracking-[3.5px]",
    },
    large: {
      width: "w-32 sm:w-36 md:w-40 lg:w-40 xl:w-44",
      height: "h-16 sm:h-18 md:h-20 lg:h-20 xl:h-22",
      text: "text-[11px] sm:text-[11.5px] md:text-xs lg:text-xs xl:text-sm",
      tracking:
        "tracking-[3px] sm:tracking-[3.5px] md:tracking-[4px] lg:tracking-[4px] xl:tracking-[4.5px]",
    },
  };

  const currentColor = colorClasses[color];
  const currentSize = sizeClasses[size];

  // Create unique gradient IDs for each button instance
  const gradientId = `yellowGrad-${index}-${side}`;
  const glowFilterId = `glow-${index}-${side}`;

  return (
    <button
      className={`group relative ${currentSize.width} ${currentSize.height} bg-gradient-to-br from-black via-gray-900 to-black border-2 ${currentColor.border} ${currentColor.text} ${currentSize.text} ${currentSize.tracking} font-black overflow-hidden backdrop-blur-xl transition-all duration-500 flex items-center justify-center ${currentColor.innerGlow} animate-subtle-pulse`}
      style={{
        animationDelay: `${index * 0.2}s`,
        boxShadow: "0 8px 32px rgba(0,0,0,0.8)",
        clipPath:
          "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
      }}
    >
      {/* Top-left corner design - Adapted from HomePage */}
      <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity duration-500">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 80 80"
        >
          <defs>
            <filter id={glowFilterId}>
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: currentColor.hex, stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: currentColor.hex, stopOpacity: 0.6 }}
              />
            </linearGradient>
          </defs>

          {/* Main corner shape */}
          <path
            d="M 0 0 L 60 0 L 50 8 L 45 8 L 42 12 L 15 12 L 12 15 L 8 15 L 0 25 Z"
            fill={`url(#${gradientId})`}
            filter={`url(#${glowFilterId})`}
          />

          {/* Inner dark layer */}
          <path
            d="M 3 3 L 57 3 L 48 9 L 44 9 L 42 13 L 17 13 L 15 17 L 9 17 L 3 23 Z"
            fill="#1e293b"
          />

          {/* Inner accent line */}
          <path
            d="M 6 6 L 54 6 L 46 11 L 43 11 L 41 14 L 19 14 L 17 19 L 11 19 L 6 21 Z"
            fill="none"
            stroke={currentColor.hex}
            strokeWidth="0.8"
            opacity="0.6"
          />

          {/* Decorative elements */}
          <g opacity="0.8" filter={`url(#${glowFilterId})`}>
            <rect
              x="30"
              y="3"
              width="8"
              height="2"
              fill={currentColor.hex}
              transform="skewX(-45)"
            />
            <rect
              x="40"
              y="3"
              width="8"
              height="2"
              fill={currentColor.hex}
              transform="skewX(-45)"
            />
            <rect
              x="50"
              y="3"
              width="6"
              height="2"
              fill={currentColor.hex}
              transform="skewX(-45)"
            />
          </g>

          <g opacity="0.8" filter={`url(#${glowFilterId})`}>
            <rect
              x="3"
              y="30"
              width="2"
              height="8"
              fill={currentColor.hex}
              transform="skewY(-45)"
            />
            <rect
              x="3"
              y="40"
              width="2"
              height="8"
              fill={currentColor.hex}
              transform="skewY(-45)"
            />
            <rect
              x="3"
              y="50"
              width="2"
              height="6"
              fill={currentColor.hex}
              transform="skewY(-45)"
            />
          </g>

          {/* Corner accent box */}
          <path
            d="M 20 8 L 35 8 L 35 18 L 20 18 Z"
            fill="none"
            stroke={currentColor.hex}
            strokeWidth="1"
            opacity="0.6"
          />
          <circle
            cx="27.5"
            cy="13"
            r="2"
            fill={currentColor.hex}
            opacity="0.8"
          />

          {/* Accent lines */}
          <line
            x1="40"
            y1="10"
            x2="55"
            y2="10"
            stroke={currentColor.hex}
            strokeWidth="0.8"
            opacity="0.5"
          />
          <line
            x1="40"
            y1="13"
            x2="50"
            y2="13"
            stroke={currentColor.hex}
            strokeWidth="0.8"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Bottom-right corner design - Mirrored from HomePage */}
      <div className="absolute bottom-0 right-0 w-20 h-20 overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity duration-500">
        <svg
          className="absolute bottom-0 right-0 w-full h-full"
          viewBox="0 0 80 80"
        >
          <defs>
            <filter id={`${glowFilterId}-br`}>
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient
              id={`${gradientId}-br`}
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop
                offset="0%"
                style={{ stopColor: currentColor.hex, stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: currentColor.hex, stopOpacity: 0.6 }}
              />
            </linearGradient>
          </defs>

          {/* Main corner shape */}
          <path
            d="M 80 80 L 20 80 L 30 72 L 35 72 L 38 68 L 65 68 L 68 65 L 72 65 L 80 55 Z"
            fill={`url(#${gradientId}-br)`}
            filter={`url(#${glowFilterId}-br)`}
          />

          {/* Inner dark layer */}
          <path
            d="M 77 77 L 23 77 L 32 71 L 36 71 L 38 67 L 63 67 L 65 63 L 71 63 L 77 57 Z"
            fill="#1e293b"
          />

          {/* Inner accent line */}
          <path
            d="M 74 74 L 26 74 L 34 69 L 37 69 L 39 66 L 61 66 L 63 61 L 69 61 L 74 59 Z"
            fill="none"
            stroke={currentColor.hex}
            strokeWidth="0.8"
            opacity="0.6"
          />

          {/* Decorative elements */}
          <g opacity="0.8" filter={`url(#${glowFilterId}-br)`}>
            <rect
              x="42"
              y="75"
              width="8"
              height="2"
              fill={currentColor.hex}
              transform="skewX(45)"
            />
            <rect
              x="32"
              y="75"
              width="8"
              height="2"
              fill={currentColor.hex}
              transform="skewX(45)"
            />
            <rect
              x="24"
              y="75"
              width="6"
              height="2"
              fill={currentColor.hex}
              transform="skewX(45)"
            />
          </g>

          <g opacity="0.8" filter={`url(#${glowFilterId}-br)`}>
            <rect
              x="75"
              y="42"
              width="2"
              height="8"
              fill={currentColor.hex}
              transform="skewY(45)"
            />
            <rect
              x="75"
              y="32"
              width="2"
              height="8"
              fill={currentColor.hex}
              transform="skewY(45)"
            />
            <rect
              x="75"
              y="24"
              width="2"
              height="6"
              fill={currentColor.hex}
              transform="skewY(45)"
            />
          </g>

          {/* Corner accent box */}
          <path
            d="M 60 72 L 45 72 L 45 62 L 60 62 Z"
            fill="none"
            stroke={currentColor.hex}
            strokeWidth="1"
            opacity="0.6"
          />
          <circle
            cx="52.5"
            cy="67"
            r="2"
            fill={currentColor.hex}
            opacity="0.8"
          />

          {/* Accent lines */}
          <line
            x1="40"
            y1="70"
            x2="25"
            y2="70"
            stroke={currentColor.hex}
            strokeWidth="0.8"
            opacity="0.5"
          />
          <line
            x1="40"
            y1="67"
            x2="30"
            y2="67"
            stroke={currentColor.hex}
            strokeWidth="0.8"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* LetterGlitch Background Effect */}
      <div className="absolute inset-0 opacity-15 group-hover:opacity-30 transition-opacity duration-500">
        <LetterGlitch
          glitchColors={currentColor.glitchColors}
          glitchSpeed={120}
          smooth={true}
          outerVignette={false}
          centerVignette={false}
        />
      </div>

      {/* Digital grid overlay */}
      <div
        className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, ${currentColor.hex}20 3px, ${currentColor.hex}20 4px),
                           repeating-linear-gradient(90deg, transparent, transparent 3px, ${currentColor.hex}20 3px, ${currentColor.hex}20 4px)`,
          backgroundSize: "12px 12px",
        }}
      ></div>

      {/* Scanline effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent h-32 translate-y-[-150%] group-hover:translate-y-[250%] transition-transform duration-1000 ease-in-out ${currentColor.shadow}`}
      ></div>

      {/* Energy pulse borders */}
      <div
        className={`absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-${color}-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${currentColor.shadow}`}
      ></div>
      <div
        className={`absolute bottom-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-${color}-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${currentColor.shadow}`}
      ></div>
      <div
        className={`absolute left-0 top-12 bottom-12 w-[2px] bg-gradient-to-b from-transparent via-${color}-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${currentColor.shadow}`}
      ></div>
      <div
        className={`absolute right-0 top-12 bottom-12 w-[2px] bg-gradient-to-b from-transparent via-${color}-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${currentColor.shadow}`}
      ></div>

      {/* Corner accent lights */}
      <div
        className={`absolute top-3 left-3 w-2 h-2 ${currentColor.bg} rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300 ${currentColor.shadow}`}
      ></div>
      <div
        className={`absolute bottom-3 right-3 w-2 h-2 ${currentColor.bg} rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300 ${currentColor.shadow}`}
      ></div>

      {/* Main text with enhanced effects */}
      <span
        className={`relative z-10 ${currentColor.glow} group-hover:text-white transition-all duration-300 font-mono text-center group-hover:${currentSize.tracking.replace("tracking-[", "tracking-[").replace("px]", "px]")} group-hover:scale-105`}
      >
        <span className="relative">
          {item}
          {/* Text glow effect */}
          <span
            className={`absolute inset-0 ${currentColor.text} blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          >
            {item}
          </span>
        </span>
      </span>

      {/* Status indicators */}
      <div className="absolute top-2 right-2 flex gap-1">
        {[...Array(3)].map((_, i) => (
          <div
            key={`status-${i}`}
            className={`w-1 h-1 rounded-full ${currentColor.bg}/40 group-hover:${currentColor.bg} transition-all duration-300 ${currentColor.shadow}`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          ></div>
        ))}
      </div>

      {/* Power level indicator */}
      <div className="absolute bottom-1 left-3 right-3 h-1 bg-black/50 rounded-full overflow-hidden">
        <div
          className={`h-full w-0 ${currentColor.bg} group-hover:w-full transition-all duration-1000 ease-out ${currentColor.shadow}`}
        ></div>
      </div>

      {/* Outer glow */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10`}
        style={{
          background: `radial-gradient(circle at 50% 50%, ${currentColor.hex}40, transparent 70%)`,
        }}
      ></div>

      <style jsx>{`
        @keyframes subtle-pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        .animate-subtle-pulse {
          animation: subtle-pulse 4s ease-in-out infinite;
        }
      `}</style>
    </button>
  );
}
