import React from "react";

function ComingSoon() {

  return (
    <section className="flex flex-col items-center justify-center px-4 py-16 relative z-10 overflow-hidden ">
      <div className="max-w-4xl mx-auto text-center space-y-8 relative">
        {/* Enhanced Animated Loader with orbit effect */}
        <div className="flex items-center justify-center gap-3 relative h-20">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Orbiting dots */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                style={{
                  animation: `orbit 3s linear infinite`,
                  animationDelay: `${i * 0.5}s`,
                  opacity: 0.6,
                }}
              />
            ))}
          </div>

          {/* Bouncing dots */}
          <div
            className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-lg shadow-cyan-500/50"
            style={{
              animation: "bounce 1s infinite",
              animationDelay: "0ms",
            }}
          ></div>
          <div
            className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg shadow-blue-500/50"
            style={{
              animation: "bounce 1s infinite",
              animationDelay: "150ms",
            }}
          ></div>
          <div
            className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg shadow-purple-500/50"
            style={{
              animation: "bounce 1s infinite",
              animationDelay: "300ms",
            }}
          ></div>
        </div>

        <div className="relative">
          <h2 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent uppercase">
            Coming Soon
          </h2>
        </div>

        {/* Animated progress bar */}
        <div className="w-full max-w-md mx-auto h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full"
            style={{ animation: "progress 2s ease-in-out infinite" }}
          />
        </div>

        {/* Description with fade animation */}
        <p
          className="text-gray-400 text-lg tracking-wide relative"
          style={{ animation: "fadeInOut 3s ease-in-out infinite" }}
        >
          Something epic is in the works...
          <span
            className="inline-block ml-1"
            style={{ animation: "blink 1s step-end infinite" }}
          >
            ▊
          </span>
        </p>

        <style jsx>{`
          @keyframes orbit {
            0% {
              transform: rotate(0deg) translateX(40px) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translateX(40px) rotate(-360deg);
            }
          }

          @keyframes progress {
            0% {
              transform: translateX(-100%);
            }
            50% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          @keyframes fadeInOut {
            0%,
            100% {
              opacity: 0.6;
            }
            50% {
              opacity: 1;
            }
          }

          @keyframes blink {
            0%,
            50% {
              opacity: 1;
            }
            51%,
            100% {
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

export default ComingSoon;