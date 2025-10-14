import React from 'react';
import GamingButton from './GamingButton';

export default function LeftSidebar() {
  const menuItems = ["TOURNAMENTS", "GALLERY", "HACKATHON", "WORKSHOPS", "SPONSORS"];

  return (
    <div className="hidden lg:flex fixed left-5 top-1/2 -translate-y-1/2 z-10 flex-col gap-6">
      {menuItems.map((item, index) => (
        <div key={item} className="relative flex items-center group">
          <GamingButton 
            item={item} 
            index={index} 
            side="left" 
            color="cyan" 
          />

          {/* Left side gaming border decoration */}
          <div className="absolute -left-12 top-0 bottom-0 w-10 flex flex-col justify-center">
            {/* Outer frame line with animated segments */}
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/40 via-cyan-400/60 to-cyan-500/40 shadow-[0_0_8px_rgba(0,255,255,0.4)]"></div>
            
            {/* Corner accent pieces */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/70 group-hover:border-cyan-300 transition-all duration-300"
              style={{ 
                clipPath: "polygon(0 0, 100% 0, 100% 20%, 80% 40%, 60% 40%, 40% 60%, 20% 60%, 20% 100%, 0 100%)",
                boxShadow: "0 0 15px rgba(0,255,255,0.3)"
              }}
            ></div>
            
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400/70 group-hover:border-cyan-300 transition-all duration-300"
              style={{ 
                clipPath: "polygon(0 0, 20% 0, 20% 40%, 40% 40%, 60% 60%, 80% 60%, 100% 80%, 100% 100%, 0 100%)",
                boxShadow: "0 0 15px rgba(0,255,255,0.3)"
              }}
            ></div>

            {/* Animated energy nodes */}
            <div className="absolute top-[20%] left-1 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_12px_rgba(0,255,255,0.9)]"></div>
            <div className="absolute top-[40%] left-0.5 w-2 h-2 border-2 border-cyan-400 rounded-full bg-transparent group-hover:bg-cyan-400/50 transition-all duration-300"></div>
            <div className="absolute top-[60%] left-1 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_12px_rgba(0,255,255,0.9)]" style={{ animationDelay: "0.3s" }}></div>
            <div className="absolute bottom-[20%] left-0.5 w-2 h-2 border-2 border-cyan-400 rounded-full bg-transparent group-hover:bg-cyan-400/50 transition-all duration-300"></div>

            {/* Tech lines extending from left */}
            <div className="absolute top-[30%] left-4 w-4 h-px bg-gradient-to-r from-cyan-400 to-transparent group-hover:w-6 transition-all duration-500 shadow-[0_0_5px_rgba(0,255,255,0.6)]"></div>
            <div className="absolute top-[50%] left-3 w-5 h-px bg-gradient-to-r from-cyan-400/70 to-transparent animate-pulse"></div>
            <div className="absolute top-[70%] left-4 w-4 h-px bg-gradient-to-r from-cyan-400 to-transparent group-hover:w-6 transition-all duration-500 shadow-[0_0_5px_rgba(0,255,255,0.6)]" style={{ transitionDelay: "0.1s" }}></div>
          </div>

          {/* Enhanced gaming border decoration on right side */}
          <div className="absolute -right-12 top-0 bottom-0 w-10 flex flex-col justify-center">
            {/* Main vertical line with glow - enhanced */}
            <div className="absolute right-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/40 via-cyan-400/60 to-cyan-500/40 shadow-[0_0_8px_rgba(0,255,255,0.4)]"></div>
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent shadow-[0_0_10px_rgba(0,255,255,0.5)] group-hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] transition-all duration-500"></div>

            {/* Top corner bracket - enhanced with sci-fi style */}
            <div className="absolute top-0 right-0 w-full h-8">
              <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-cyan-400/70 group-hover:border-cyan-400 transition-colors duration-300 shadow-[0_0_8px_rgba(0,255,255,0.4)]"
                style={{
                  clipPath: "polygon(15% 0, 100% 0, 100% 100%, 85% 100%, 75% 70%, 85% 40%, 100% 40%, 100% 60%, 25% 60%, 15% 100%, 0 100%, 0 60%)",
                }}
              ></div>
              {/* Corner glow dots - multiple layers */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(0,255,255,0.8)]"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border border-cyan-400/60 rounded-full animate-ping"></div>
              <div className="absolute top-2 right-1 w-1 h-1 bg-cyan-300 rounded-full opacity-70"></div>
            </div>

            {/* Middle tech details - enhanced */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex flex-col gap-2">
              {/* Horizontal tech bars */}
              <div className="relative w-4 h-1 bg-gradient-to-r from-cyan-400/80 to-transparent animate-pulse shadow-[0_0_5px_rgba(0,255,255,0.6)]"></div>
              <div className="relative w-5 h-0.5 bg-gradient-to-r from-cyan-400/60 to-transparent group-hover:w-6 transition-all duration-500"></div>
              <div className="relative w-3 h-1 bg-gradient-to-r from-cyan-400/80 to-transparent animate-pulse shadow-[0_0_5px_rgba(0,255,255,0.6)]"
                style={{ animationDelay: "0.3s" }}
              ></div>
              
              {/* Mini circuit node */}
              <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 border-2 border-cyan-400 rounded-full bg-black group-hover:bg-cyan-400 transition-colors duration-300 shadow-[0_0_8px_rgba(0,255,255,0.6)]"></div>
            </div>

            {/* Bottom corner bracket - enhanced with sci-fi style */}
            <div className="absolute bottom-0 right-0 w-full h-8">
              <div className="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 border-cyan-400/70 group-hover:border-cyan-400 transition-colors duration-300 shadow-[0_0_8px_rgba(0,255,255,0.4)]"
                style={{
                  clipPath: "polygon(0 40%, 25% 40%, 15% 0, 0 0, 0 40%, 100% 40%, 100% 60%, 85% 60%, 75% 30%, 85% 0, 100% 0, 100% 100%, 15% 100%)",
                }}
              ></div>
              {/* Corner glow dots - multiple layers */}
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(0,255,255,0.8)]" style={{ animationDelay: "0.2s" }}></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border border-cyan-400/60 rounded-full animate-ping" style={{ animationDelay: "0.2s" }}></div>
              <div className="absolute bottom-2 right-1 w-1 h-1 bg-cyan-300 rounded-full opacity-70"></div>
            </div>

            {/* Animated circuit nodes with trails */}
            <div className="absolute top-1/4 right-0 w-2 h-2 bg-cyan-400 rounded-full animate-ping shadow-[0_0_15px_rgba(0,255,255,0.8)]"></div>
            <div className="absolute top-1/4 right-0 w-1 h-1 bg-cyan-300 rounded-full"></div>
            
            <div className="absolute bottom-1/4 right-0 w-2 h-2 bg-cyan-400 rounded-full animate-ping shadow-[0_0_15px_rgba(0,255,255,0.8)]"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="absolute bottom-1/4 right-0 w-1 h-1 bg-cyan-300 rounded-full"></div>

            {/* Additional decorative elements */}
            <div className="absolute top-[35%] left-1 w-1.5 h-1.5 border border-cyan-400/60 rotate-45 group-hover:rotate-[225deg] transition-transform duration-700"></div>
            <div className="absolute bottom-[35%] left-1 w-1.5 h-1.5 border border-cyan-400/60 rotate-45 group-hover:rotate-[225deg] transition-transform duration-700"
              style={{ transitionDelay: "0.1s" }}
            ></div>

            {/* Data flow indicators */}
            <div className="absolute top-[15%] right-2 flex flex-col gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-1 h-0.5 bg-cyan-400 animate-pulse"></div>
              <div className="w-0.5 h-0.5 bg-cyan-400 animate-pulse" style={{ animationDelay: "0.1s" }}></div>
            </div>
            <div className="absolute bottom-[15%] right-2 flex flex-col gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-1 h-0.5 bg-cyan-400 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-0.5 h-0.5 bg-cyan-400 animate-pulse" style={{ animationDelay: "0.3s" }}></div>
            </div>
          </div>

          {/* Connecting line between buttons (except last one) */}
          {index < menuItems.length - 1 && (
            <div className="absolute -bottom-6 -right-6 w-1 h-6 flex flex-col justify-center">
              <div className="w-0.5 h-full bg-gradient-to-b from-cyan-400/60 via-cyan-400/30 to-transparent group-hover:from-cyan-400 transition-colors duration-500"></div>
              {/* Connection nodes */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 border border-cyan-400/60 rounded-full animate-pulse"></div>
            </div>
          )}
        </div>
      ))}

      {/* Top terminal bracket */}
      <div className="absolute -top-8 left-0 w-full h-6 border-t-2 border-l-2 border-cyan-400/50 shadow-[0_0_10px_rgba(0,255,255,0.3)]"
        style={{
          clipPath: "polygon(0 100%, 0 0, 30% 0, 35% 50%, 30% 100%)",
        }}
      >
        <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(0,255,255,0.8)]"></div>
      </div>

      {/* Bottom terminal bracket */}
      <div className="absolute -bottom-8 left-0 w-full h-6 border-b-2 border-l-2 border-cyan-400/50 shadow-[0_0_10px_rgba(0,255,255,0.3)]"
        style={{
          clipPath: "polygon(0 0, 0 100%, 30% 100%, 35% 50%, 30% 0)",
        }}
      >
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(0,255,255,0.8)]"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>

      {/* Side panel indicator */}
      <div className="absolute -left-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-70">
        {[...Array(5)].map((_, i) => (
          <div
            key={`indicator-${i}`}
            className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
}