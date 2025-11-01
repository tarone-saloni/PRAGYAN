import React, { useState, useEffect } from 'react';
import Clock from './Clock/Clock';

export default function MainContent() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts - reduced from 100ms to 50ms
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative z-5 flex-1 flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 py-8 sm:py-12 md:py-20 text-center min-h-[calc(100vh-80px)]">
      {/* Top tagline - faster animation */}
      <div className={`text-xs sm:text-sm tracking-[2px] sm:tracking-[3px] text-cyan-400 mb-2 sm:mb-3 uppercase font-medium animate-pulse transition-all duration-500 ease-out ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
      }`}>
        THE QUANTUM NEXUS
      </div>

      {/* Main title - faster animation with reduced delay */}
      <h1 className={`text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-[8px] xs:tracking-[10px] sm:tracking-[12px] md:tracking-[15px] my-3 sm:my-4 md:my-5 bg-gradient-to-b from-white via-cyan-200 to-gray-600 bg-clip-text text-transparent uppercase animate-glitch drop-shadow-2xl transition-all duration-700 ease-out delay-100 ${
        isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
      }`}>
        PRAGYAA
      </h1>

      {/* Subtitle - faster animation with reduced delay */}
      <p className={`text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl tracking-[1px] xs:tracking-[2px] sm:tracking-[3px] my-3 sm:my-4 md:my-5 uppercase text-gray-300 font-light max-w-4xl leading-relaxed transition-all duration-600 ease-out delay-200 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        "BRIGHTER THAN EVER BEFORE"
      </p>

      {/* Clock component - faster animation with reduced delay */}
      <div className={`mt-4 sm:mt-6 md:mt-8 w-full max-w-lg sm:max-w-xl md:max-w-2xl transition-all duration-600 ease-out delay-400 ${
        isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'
      }`}>
        <Clock />
      </div>

      {/* Additional decorative elements for mobile - faster animations */}
      <div className={`absolute top-1/4 left-4 w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent opacity-30 sm:hidden transition-all duration-500 ease-out delay-500 ${
        isLoaded ? 'opacity-30 scale-y-100' : 'opacity-0 scale-y-0'
      }`}></div>
      <div className={`absolute top-1/4 right-4 w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent opacity-30 sm:hidden transition-all duration-500 ease-out delay-550 ${
        isLoaded ? 'opacity-30 scale-y-100' : 'opacity-0 scale-y-0'
      }`}></div>
      
      {/* Mobile-specific glow effects - faster animation */}
      <div className={`absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent pointer-events-none sm:hidden transition-opacity duration-800 ease-out delay-150 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </main>
  );
}