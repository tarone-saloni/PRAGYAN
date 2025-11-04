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
    <main className="relative z-5 flex-1 flex flex-col px-4 sm:px-8 md:px-12 py-8 sm:py-12 md:py-20 text-center min-h-[calc(100vh-80px)]">
      
      {/* Mobile layout */}
      <div className="sm:hidden flex flex-col h-full px-0">
        {/* Top section for mobile - PRAGYAA title - moved higher */}
        <div className="pt-4 pb-2">
          {/* Top tagline */}
          <div className={`text-xs tracking-[2px] text-red-400 mb-2 uppercase font-medium animate-pulse transition-all duration-500 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}>
            THE QUANTUM NEXUS
          </div>

          {/* Main title - increased size for mobile */}
          <h1 className={`text-5xl xs:text-6xl sm:text-7xl font-black tracking-[8px] xs:tracking-[10px] my-3 bg-gradient-to-b from-white via-red-200 to-gray-600 bg-clip-text text-transparent uppercase animate-glitch drop-shadow-2xl transition-all duration-700 ease-out delay-100 ${
            isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`}>
            PRAGYAA
          </h1>

          {/* Subtitle */}
          <p className={`text-xs xs:text-sm tracking-[1px] xs:tracking-[2px] my-2 uppercase text-gray-300 font-light leading-relaxed transition-all duration-600 ease-out delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            "BRIGHTER THAN EVER BEFORE"
          </p>
        </div>

        {/* Center section for mobile - Clock - improved centering */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className={`w-full max-w-sm mx-auto flex justify-center items-center transition-all duration-600 ease-out delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'
          }`}>
            <Clock />
          </div>
        </div>

        {/* Decorative elements for mobile */}
        <div className={`absolute top-1/4 left-4 w-1 h-16 bg-gradient-to-b from-red-400 to-transparent opacity-30 transition-all duration-500 ease-out delay-500 ${
          isLoaded ? 'opacity-30 scale-y-100' : 'opacity-0 scale-y-0'
        }`}></div>
        <div className={`absolute top-1/4 right-4 w-1 h-16 bg-gradient-to-b from-red-400 to-transparent opacity-30 transition-all duration-500 ease-out delay-550 ${
          isLoaded ? 'opacity-30 scale-y-100' : 'opacity-0 scale-y-0'
        }`}></div>
        
        {/* Mobile glow effect */}
        <div className={`absolute inset-0 bg-gradient-radial from-red-500/5 via-transparent to-transparent pointer-events-none transition-opacity duration-800 ease-out delay-150 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </div>

      {/* Desktop layout - original centered layout */}
      <div className="hidden sm:flex flex-col justify-center items-center h-full">
        {/* Top tagline */}
        <div className={`text-sm tracking-[3px] text-red-400 mb-3 uppercase font-medium animate-pulse transition-all duration-500 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}>
          THE QUANTUM NEXUS
        </div>

        {/* Main title */}
        <h1 className={`text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-[12px] md:tracking-[15px] my-4 md:my-5 bg-gradient-to-b from-white via-red-200 to-gray-600 bg-clip-text text-transparent uppercase animate-glitch drop-shadow-2xl transition-all duration-700 ease-out delay-100 ${
          isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
        }`}>
          PRAGYAA
        </h1>

        {/* Subtitle */}
        <p className={`text-lg md:text-xl lg:text-2xl tracking-[2px] sm:tracking-[3px] my-4 md:my-5 uppercase text-gray-300 font-light max-w-4xl leading-relaxed transition-all duration-600 ease-out delay-200 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          "BRIGHTER THAN EVER BEFORE"
        </p>

        {/* Clock component */}
        <div className={`mt-6 md:mt-8 w-full max-w-xl md:max-w-2xl transition-all duration-600 ease-out delay-400 ${
          isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'
        }`}>
          <Clock />
        </div>
      </div>
    </main>
  );
}