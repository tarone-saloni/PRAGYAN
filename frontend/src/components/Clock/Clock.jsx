import React from "react";
import Countdown from "react-countdown";

function Clock() {
  // Custom renderer for countdown
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
          EVENT STARTED!
        </span>
      );
    } else {
      return (
        <div className="flex items-center justify-center gap-1 xs:gap-2 sm:gap-3 md:gap-4">
          <div className="flex flex-col items-center">
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-2xl">
              <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tabular-nums drop-shadow-lg">
                {String(days).padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs sm:text-sm mt-1 sm:mt-2 text-gray-400 tracking-wider font-medium">
              DAYS
            </span>
          </div>

          <span className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cyan-400 font-light animate-pulse">
            :
          </span>

          <div className="flex flex-col items-center">
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-2xl">
              <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tabular-nums drop-shadow-lg">
                {String(hours).padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs sm:text-sm mt-1 sm:mt-2 text-gray-400 tracking-wider font-medium">
              HOURS
            </span>
          </div>

          <span className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cyan-400 font-light animate-pulse">
            :
          </span>

          <div className="flex flex-col items-center">
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-2xl">
              <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tabular-nums drop-shadow-lg">
                {String(minutes).padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs sm:text-sm mt-1 sm:mt-2 text-gray-400 tracking-wider font-medium">
              MINUTES
            </span>
          </div>

          <span className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cyan-400 font-light animate-pulse">
            :
          </span>

          <div className="flex flex-col items-center">
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-2xl">
              <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tabular-nums drop-shadow-lg">
                {String(seconds).padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs sm:text-sm mt-1 sm:mt-2 text-gray-400 tracking-wider font-medium">
              SECONDS
            </span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex justify-center items-center py-4 sm:py-6 md:py-8 px-2 sm:px-4">
      {/* Countdown Box with enhanced styling */}
      <div className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl">
        {/* Main countdown container */}
        <div className="relative bg-gradient-to-br rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12">
          {/* Countdown Timer */}
          <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
            <Countdown
              date={new Date("2026-02-22T00:00:00")}
              renderer={renderer}
            />
          </div>

          {/* Event Dates */}
          <div className="text-center mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 md:pt-8 border-t border-white/10">
            <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
              21<sup className="text-xs sm:text-sm md:text-base">ST</sup> - 22
              <sup className="text-xs sm:text-sm md:text-base">ND</sup> - 23
              <sup className="text-xs sm:text-sm md:text-base">RD</sup>
            </div>
            <div className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 tracking-wider sm:tracking-widest">
              FEBRUARY{" "}
              <span className="text-cyan-400 font-semibold">2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clock;