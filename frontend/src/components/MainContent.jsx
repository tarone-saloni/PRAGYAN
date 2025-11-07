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
    <main className="relative z-5 flex flex-col items-center justify-center min-h-[75vh] sm:min-h-[78vh] md:min-h-[80vh] lg:min-h-[82vh] xl:min-h-[85vh] text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      
      {/* Top tagline - Responsive sizing */}
      <div className={`text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base tracking-[2px] sm:tracking-[2.5px] md:tracking-[3px] lg:tracking-[3.5px] xl:tracking-[4px] text-red-400 mb-2 sm:mb-2.5 md:mb-3 lg:mb-3.5 xl:mb-4 uppercase font-medium animate-pulse transition-all duration-500 ease-out ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
      }`}>
        THE QUANTUM NEXUS
      </div>

      {/* Main title - Fully responsive */}
      <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-black tracking-[6px] sm:tracking-[8px] md:tracking-[10px] lg:tracking-[12px] xl:tracking-[15px] 2xl:tracking-[18px] my-3 sm:my-3.5 md:my-4 lg:my-5 xl:my-6 bg-gradient-to-b from-white via-red-200 to-gray-600 bg-clip-text text-transparent uppercase animate-glitch drop-shadow-2xl transition-all duration-700 ease-out delay-100 leading-tight ${
        isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
      }`}>
        PRAGYAA
      </h1>

      {/* Subtitle - Responsive sizing */}
      <p className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl tracking-[1.5px] sm:tracking-[2px] md:tracking-[2.5px] lg:tracking-[3px] xl:tracking-[3.5px] 2xl:tracking-[4px] my-3 sm:my-3.5 md:my-4 lg:my-5 xl:my-6 uppercase text-gray-300 font-light max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-5xl leading-relaxed transition-all duration-600 ease-out delay-200 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        "BRIGHTER THAN EVER BEFORE"
      </p>

      {/* Clock component - Responsive container */}
      <div className={`mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl transition-all duration-600 ease-out delay-400 ${
        isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'
      }`}>
        <Clock />
      </div>

      {/* Decorative elements - Responsive */}
      <div className={`absolute top-1/4 left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 w-0.5 sm:w-1 h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24 bg-gradient-to-b from-red-400 to-transparent opacity-30 transition-all duration-500 ease-out delay-500 ${
        isLoaded ? 'opacity-30 scale-y-100' : 'opacity-0 scale-y-0'
      }`}></div>
      <div className={`absolute top-1/4 right-4 sm:right-6 md:right-8 lg:right-12 xl:right-16 w-0.5 sm:w-1 h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24 bg-gradient-to-b from-red-400 to-transparent opacity-30 transition-all duration-500 ease-out delay-550 ${
        isLoaded ? 'opacity-30 scale-y-100' : 'opacity-0 scale-y-0'
      }`}></div>
      
      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-radial from-red-500/5 via-transparent to-transparent pointer-events-none transition-opacity duration-800 ease-out delay-150 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </main>
  );
}