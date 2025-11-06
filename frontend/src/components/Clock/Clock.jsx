import React from "react";
import Countdown from "react-countdown";

function Clock() {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-widest bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
          EVENT STARTED!
        </span>
      );
    } else {
      return (
        <div className="flex items-center justify-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
          {/* Days */}
          <div className="flex flex-col items-center">
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-md xs:rounded-lg sm:rounded-xl p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-4 shadow-2xl">
              <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white tabular-nums drop-shadow-lg">
                {String(days).padStart(2, "0")}
              </span>
            </div>
            <span className="text-[8px] xs:text-[9px] sm:text-xs md:text-sm mt-0.5 xs:mt-1 sm:mt-1.5 text-gray-400 tracking-wider font-medium">
              DAYS
            </span>
          </div>

          <span className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-cyan-400 font-light animate-pulse">
            :
          </span>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-md xs:rounded-lg sm:rounded-xl p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-4 shadow-2xl">
              <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white tabular-nums drop-shadow-lg">
                {String(hours).padStart(2, "0")}
              </span>
            </div>
            <span className="text-[8px] xs:text-[9px] sm:text-xs md:text-sm mt-0.5 xs:mt-1 sm:mt-1.5 text-gray-400 tracking-wider font-medium">
              HOURS
            </span>
          </div>

          <span className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-cyan-400 font-light animate-pulse">
            :
          </span>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-md xs:rounded-lg sm:rounded-xl p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-4 shadow-2xl">
              <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white tabular-nums drop-shadow-lg">
                {String(minutes).padStart(2, "0")}
              </span>
            </div>
            <span className="text-[8px] xs:text-[9px] sm:text-xs md:text-sm mt-0.5 xs:mt-1 sm:mt-1.5 text-gray-400 tracking-wider font-medium">
              MIN
            </span>
          </div>

          <span className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-cyan-400 font-light animate-pulse">
            :
          </span>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-md xs:rounded-lg sm:rounded-xl p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-4 shadow-2xl">
              <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white tabular-nums drop-shadow-lg">
                {String(seconds).padStart(2, "0")}
              </span>
            </div>
            <span className="text-[8px] xs:text-[9px] sm:text-xs md:text-sm mt-0.5 xs:mt-1 sm:mt-1.5 text-gray-400 tracking-wider font-medium">
              SEC
            </span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex justify-center items-center py-2 xs:py-3 sm:py-4 md:py-6 px-1 xs:px-2 sm:px-4">
      <div className="relative w-full">
        <div className="relative bg-gradient-to-br rounded-lg xs:rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10">
          <div className="flex justify-center mb-2 xs:mb-3 sm:mb-4 md:mb-6">
            <Countdown date={new Date("2026-02-22T00:00:00")} renderer={renderer} />
          </div>

          <div className="text-center mt-2 xs:mt-3 sm:mt-4 md:mt-6 pt-2 xs:pt-3 sm:pt-4 md:pt-6 border-t border-white/10">
            <div className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-0.5 xs:mb-1 sm:mb-1.5">
              21<sup className="text-[8px] xs:text-[9px] sm:text-xs md:text-sm">ST</sup> - 22<sup className="text-[8px] xs:text-[9px] sm:text-xs md:text-sm">ND</sup> - 23<sup className="text-[8px] xs:text-[9px] sm:text-xs md:text-sm">RD</sup>
            </div>
            <div className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-300 tracking-wider sm:tracking-widest">
              FEBRUARY <span className="text-cyan-400 font-semibold">2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clock;