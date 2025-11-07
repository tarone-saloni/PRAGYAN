import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft,
  Clock,
  Sparkles,
  Gamepad2,
  Zap,
  Trophy
} from 'lucide-react';


function ComingSoon() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Loading content */}
        <div className="text-center z-10">
          <Gamepad2 className="w-24 h-24 text-cyan-400 mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl font-bold text-white mb-6 animate-pulse">Loading Game</h2>
          
          {/* Progress bar */}
          <div className="w-80 h-4 bg-slate-800 rounded-full overflow-hidden border-2 border-cyan-500 shadow-lg shadow-cyan-500/50">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
            </div>
          </div>
          
          <p className="text-cyan-400 text-xl font-bold mt-4">{progress}%</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated gaming background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Glowing grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Glowing gaming icons */}
          <div className="flex justify-center gap-8 mb-8 animate-bounce">
            <div className="relative">
              <Gamepad2 className="text-cyan-400 drop-shadow-[0_0_25px_rgba(6,182,212,0.8)]" size={80} />
              <div className="absolute inset-0 blur-2xl bg-cyan-400 opacity-50 animate-pulse"></div>
            </div>
            <div className="relative">
              <Trophy className="text-yellow-400 drop-shadow-[0_0_25px_rgba(250,204,21,0.8)]" size={80} />
              <div className="absolute inset-0 blur-2xl bg-yellow-400 opacity-50 animate-pulse"></div>
            </div>
            <div className="relative">
              <Zap className="text-pink-500 drop-shadow-[0_0_25px_rgba(236,72,153,0.8)]" size={80} />
              <div className="absolute inset-0 blur-2xl bg-pink-500 opacity-50 animate-pulse"></div>
            </div>
          </div>
          
          {/* Glitchy title effect */}
          <div className="relative mb-6">
            <h1 className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-4 animate-pulse drop-shadow-[0_0_30px_rgba(6,182,212,0.6)]">
              LEVEL LOCKED
            </h1>
            <div className="absolute inset-0 text-7xl md:text-8xl font-black text-cyan-400 opacity-20 blur-sm animate-pulse">
              LEVEL LOCKED
            </div>
          </div>
          
          {/* Gaming-style message */}
          <div className="bg-slate-800/50 backdrop-blur-sm border-2 border-cyan-500 rounded-lg p-6 mb-8 shadow-lg shadow-cyan-500/50 animate-pulse">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock size={32} className="text-cyan-400 animate-spin" />
              <p className="text-2xl font-bold text-white uppercase tracking-wider">New Quest Loading...</p>
            </div>
            
            <p className="text-cyan-300 text-lg font-semibold">
              Epic features are being crafted by our dev wizards! 🎮
            </p>
          </div>
          
          {/* XP-style progress indicator */}
          <div className="flex justify-center gap-3 mb-8">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-12 bg-gradient-to-t from-cyan-500 to-purple-500 rounded animate-pulse shadow-lg shadow-cyan-500/50"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '1s'
                }}
              />
            ))}
          </div>
          
          {/* Power-up badges */}
          <div className="flex justify-center gap-4">
            {['LEGENDARY', 'COMING', 'SOON'].map((text, i) => (
              <div
                key={i}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black text-sm rounded-full border-2 border-white/30 shadow-lg shadow-purple-500/50 animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;