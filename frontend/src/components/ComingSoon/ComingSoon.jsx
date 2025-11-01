import React, { useState, useEffect } from 'react';
import { Clock, Star, Sparkles, Zap, Rocket, Calendar } from 'lucide-react';

const ComingSoon = ({ 
  title = "Coming Soon", 
  subtitle = "Something amazing is on the way!",
  showCountdown = false,
  targetDate = null,
  variant = "default" // "default", "minimal", "futuristic"
}) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    if (!showCountdown || !targetDate) return;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(interval);
  }, [showCountdown, targetDate]);

  if (variant === "minimal") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] p-8">
        <div className="relative">
          <Clock className="w-16 h-16 text-cyan-400 animate-spin" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-0 w-16 h-16 border-2 border-cyan-400/30 rounded-full animate-ping"></div>
        </div>
        <h2 className="text-2xl font-bold text-white mt-6 mb-2">{title}</h2>
        <p className="text-gray-400 text-center max-w-md">{subtitle}</p>
      </div>
    );
  }

  if (variant === "futuristic") {
    return (
      <div className="relative flex flex-col items-center justify-center min-h-[400px] p-8 overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
              style={{
                left: `${i * 5}%`,
                animation: `slideDown ${2 + Math.random() * 3}s infinite linear`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center">
          <div className="relative mb-8">
            <Rocket className="w-20 h-20 text-cyan-400 mx-auto animate-bounce" />
            <div className="absolute -inset-4 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            {title}
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">{subtitle}</p>
          
          <div className="flex items-center justify-center gap-2 text-cyan-400">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></span>
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></span>
          </div>
        </div>

        <style jsx>{`
          @keyframes slideDown {
            0% { transform: translateY(-100vh); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
          }
        `}</style>
      </div>
    );
  }

  // Default variant
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[500px] p-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Icon with glow effect */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full opacity-75 blur-xl animate-pulse"></div>
          <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-full border-2 border-cyan-500/30">
            <Sparkles className="w-16 h-16 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent uppercase mb-6 animate-gradient">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          {subtitle}
        </p>

        {/* Countdown Timer */}
        {showCountdown && targetDate && (
          <div className="grid grid-cols-4 gap-4 mb-8 max-w-lg mx-auto">
            {Object.entries(countdown).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-2 border-cyan-500/30 rounded-2xl p-4 hover:border-cyan-500/60 transition-all duration-300">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400">{value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide mt-1">{unit}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Decorative elements */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Star className="w-6 h-6 text-cyan-400 animate-pulse" />
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          <Star className="w-6 h-6 text-pink-400 animate-pulse" />
        </div>

        {/* Loading animation */}
        <div className="flex items-center justify-center gap-2 text-cyan-400">
          <Zap className="w-5 h-5 animate-bounce" />
          <span className="text-lg font-semibold tracking-wide">Stay Tuned</span>
          <Zap className="w-5 h-5 animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>

        {/* Floating particles on hover */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
                animation: `particleFloat ${3 + Math.random() * 4}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        
        @keyframes particleFloat {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.9; }
          50% { transform: translateY(-40px) scale(1.5); opacity: 0.6; }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;