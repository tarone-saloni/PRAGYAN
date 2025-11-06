import React, { useState, useEffect } from 'react';
import Clock from './Clock/Clock';

export default function MainContent() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative z-5 flex flex-col items-center justify-center min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[85vh] text-center px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">
      
      {/* Top tagline - Responsive sizing */}
      <div className={`text-[8px] xs:text-[9px] sm:text-xs md:text-sm tracking-[1.5px] xs:tracking-[2px] sm:tracking-[2.5px] md:tracking-[3px] text-red-400 mb-1 xs:mb-1.5 sm:mb-2 md:mb-3 uppercase font-medium animate-pulse transition-all duration-500 ease-out ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
      }`}>
        THE QUANTUM NEXUS
      </div>

      {/* Main title - Fully responsive */}
      <h1 className={`text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-[4px] xs:tracking-[6px] sm:tracking-[8px] md:tracking-[10px] lg:tracking-[12px] xl:tracking-[15px] my-2 xs:my-2.5 sm:my-3 md:my-4 lg:my-5 bg-gradient-to-b from-white via-red-200 to-gray-600 bg-clip-text text-transparent uppercase animate-glitch drop-shadow-2xl transition-all duration-700 ease-out delay-100 leading-tight ${
        isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
      }`}>
        PRAGYAA
      </h1>

      {/* Subtitle - Responsive sizing */}
      <p className={`text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-[1px] xs:tracking-[1.5px] sm:tracking-[2px] md:tracking-[2.5px] lg:tracking-[3px] my-2 xs:my-2.5 sm:my-3 md:my-4 lg:my-5 uppercase text-gray-300 font-light max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl leading-relaxed transition-all duration-600 ease-out delay-200 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        "BRIGHTER THAN EVER BEFORE"
      </p>

      {/* Clock component - Responsive container */}
      <div className={`mt-3 xs:mt-4 sm:mt-5 md:mt-6 lg:mt-8 w-full max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl transition-all duration-600 ease-out delay-400 ${
        isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'
      }`}>
        <Clock />
      </div>

      {/* Decorative elements - Responsive */}
      <div className={`absolute top-1/4 left-2 xs:left-3 sm:left-4 md:left-6 w-0.5 sm:w-1 h-8 xs:h-12 sm:h-16 bg-gradient-to-b from-red-400 to-transparent opacity-30 transition-all duration-500 ease-out delay-500 ${
        isLoaded ? 'opacity-30 scale-y-100' : 'opacity-0 scale-y-0'
      }`}></div>
      <div className={`absolute top-1/4 right-2 xs:right-3 sm:right-4 md:right-6 w-0.5 sm:w-1 h-8 xs:h-12 sm:h-16 bg-gradient-to-b from-red-400 to-transparent opacity-30 transition-all duration-500 ease-out delay-550 ${
        isLoaded ? 'opacity-30 scale-y-100' : 'opacity-0 scale-y-0'
      }`}></div>
      
      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-radial from-red-500/5 via-transparent to-transparent pointer-events-none transition-opacity duration-800 ease-out delay-150 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </main>
  );
}