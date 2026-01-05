import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();
  const [glitchActive, setGlitchActive] = useState(false);

  // Periodic glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 4000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden flex items-center justify-center p-4">
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 87, 87, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 87, 87, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>

      {/* Main content container */}
      <div className="relative z-10 text-center max-w-2xl w-full">
        {/* Sad Face Emoji with glow */}
        <div className="mb-6 md:mb-8">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-red-500/30 rounded-full blur-3xl animate-pulse" />
            <div 
              className={`relative text-7xl sm:text-8xl md:text-9xl transition-transform duration-200 ${
                glitchActive ? 'scale-110' : 'scale-100'
              }`}
            >
              😢
            </div>
          </div>
        </div>

        {/* 404 Text with glitch */}
        <div className="mb-4 md:mb-6">
          <h1 
            className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-wider bg-gradient-to-b from-red-400 via-red-500 to-red-700 bg-clip-text text-transparent relative ${
              glitchActive ? 'animate-glitch' : ''
            }`}
          >
            404
            {glitchActive && (
              <>
                <span className="absolute inset-0 text-red-500/50 blur-sm" style={{ transform: 'translate(-2px, 2px)' }}>
                  404
                </span>
                <span className="absolute inset-0 text-cyan-500/50 blur-sm" style={{ transform: 'translate(2px, -2px)' }}>
                  404
                </span>
              </>
            )}
          </h1>
        </div>

        {/* Error message */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 uppercase tracking-wider">
          <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Page Not Found
          </span>
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-6 md:mb-8 max-w-md mx-auto leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <button
            onClick={() => navigate('/')}
            className="group flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-red-500/50 w-full sm:w-auto max-w-xs"
          >
            <Home className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-semibold text-sm sm:text-base uppercase tracking-wider">Go Home</span>
          </button>

          <button
            onClick={() => navigate(-1)}
            className="group flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gray-800/80 hover:bg-gray-700/80 border-2 border-red-500/40 hover:border-red-500/70 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg w-full sm:w-auto max-w-xs"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-semibold text-sm sm:text-base uppercase tracking-wider">Go Back</span>
          </button>
        </div>

        {/* Decorative dots */}
        <div className="mt-8 md:mt-10 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-red-500/70 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px);
            opacity: 0.6;
          }
        }

        @keyframes glitch {
          0%, 100% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(2px, -2px);
          }
          60% {
            transform: translate(-2px, -2px);
          }
          80% {
            transform: translate(2px, 2px);
          }
        }

        .animate-glitch {
          animation: glitch 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
