import React, { useState, useEffect } from 'react';
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import BackgroundLayer from "../components/BackgroundLayer";

const teamMembers = [
  { name: "Luffy", role: "Founder" },
  { name: "Monkey D. Luffy", role: "Creative Director" },
  { name: "Luffy chan", role: "Lead Developer" },
  { name: "Lucy", role: "UX Designer" },
  { name: "Luffy kun", role: "Marketing Manager" },
  { name: "Monkey chan", role: "Product Manager" }
];

const images = [
  "https://ik.imagekit.io/gopichakradhar/luffy/o1.jpeg?updatedAt=1754289569411",
  "https://ik.imagekit.io/gopichakradhar/luffy/o2.jpeg?updatedAt=1754289569307",
  "https://ik.imagekit.io/gopichakradhar/luffy/o4.jpeg?updatedAt=1754289569398",
  "https://ik.imagekit.io/gopichakradhar/luffy/o3.jpeg?updatedAt=1754289569422",
  "https://ik.imagekit.io/gopichakradhar/luffy/o5.jpeg?updatedAt=1754289569406",
  "https://ik.imagekit.io/gopichakradhar/luffy/o6.jpeg?updatedAt=1754289569438"
];

export default function TeamCarousel() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [nameOpacity, setNameOpacity] = useState(1);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const normalizedIndex = (newIndex + teamMembers.length) % teamMembers.length;
    
    setNameOpacity(0);
    
    setTimeout(() => {
      setCurrentIndex(normalizedIndex);
      setNameOpacity(1);
    }, 300);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  const getCardPosition = (index) => {
    const offset = (index - currentIndex + teamMembers.length) % teamMembers.length;
    
    if (offset === 0) return 'center';
    if (offset === 1) return 'down-1';
    if (offset === 2) return 'down-2';
    if (offset === teamMembers.length - 1) return 'up-1';
    if (offset === teamMembers.length - 2) return 'up-2';
    return 'hidden';
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') {
        updateCarousel(currentIndex - 1);
      } else if (e.key === 'ArrowDown') {
        updateCarousel(currentIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isAnimating]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollIndicator(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col relative">
      {/* Background Layer */}
      <BackgroundLayer />

      {/* Main Content */}
      <main className="flex-grow relative overflow-hidden z-10">
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={() => navigate(-1)}
            className="group relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl border-2 border-cyan-500/30 rounded-2xl hover:border-cyan-500/60 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            <ArrowLeft className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 group-hover:-translate-x-1" />
            <span className="text-cyan-400 group-hover:text-cyan-300 font-semibold text-sm tracking-wide transition-colors duration-300">
              Back
            </span>
          </button>
        </div>

        {/* Team Carousel Content */}
        <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden py-5 md:py-20 pt-24">
          <div className="flex flex-col md:flex-row w-full max-w-7xl h-auto md:h-[80vh] gap-5 md:gap-16 items-center justify-center px-4">
            {/* Carousel Section */}
            <div className="flex-1 flex justify-center items-center w-full">
              <div className="w-full max-w-md md:max-w-lg h-[60vh] md:h-[70vh] relative flex flex-col items-center" style={{ perspective: '1000px' }}>
                {/* Up Arrow - Mobile */}
                <button
                  onClick={() => updateCarousel(currentIndex - 1)}
                  className="md:hidden absolute top-5 left-1/2 -translate-x-1/2 z-20 w-16 h-16 flex items-center justify-center bg-transparent border-none hover:scale-110 transition-transform"
                >
                  <img 
                    src="https://ik.imagekit.io/gopichakradhar/icons/top.png?updatedAt=1754290522765" 
                    alt="Up" 
                    className="w-12 h-12 -rotate-90"
                  />
                </button>

                {/* Carousel Track */}
                <div className="w-full h-full flex flex-col justify-center items-center relative transition-transform duration-700 ease-out" style={{ transformStyle: 'preserve-3d' }}>
                  {images.map((img, index) => {
                    const position = getCardPosition(index);
                    let transformClass = '';
                    let opacityClass = '';
                    let zIndexClass = '';
                    let filterClass = '';

                    switch (position) {
                      case 'center':
                        transformClass = 'scale-110';
                        opacityClass = 'opacity-100';
                        zIndexClass = 'z-10';
                        filterClass = '';
                        break;
                      case 'up-1':
                        transformClass = '-translate-y-20 md:-translate-y-36 scale-90';
                        opacityClass = 'opacity-90';
                        zIndexClass = 'z-[5]';
                        filterClass = 'grayscale';
                        break;
                      case 'up-2':
                        transformClass = '-translate-y-40 md:-translate-y-72 scale-80';
                        opacityClass = 'opacity-70';
                        zIndexClass = 'z-[1]';
                        filterClass = 'grayscale';
                        break;
                      case 'down-1':
                        transformClass = 'translate-y-20 md:translate-y-36 scale-90';
                        opacityClass = 'opacity-90';
                        zIndexClass = 'z-[5]';
                        filterClass = 'grayscale';
                        break;
                      case 'down-2':
                        transformClass = 'translate-y-40 md:translate-y-72 scale-80';
                        opacityClass = 'opacity-70';
                        zIndexClass = 'z-[1]';
                        filterClass = 'grayscale';
                        break;
                      case 'hidden':
                        transformClass = '';
                        opacityClass = 'opacity-0';
                        zIndexClass = '';
                        filterClass = '';
                        break;
                    }

                    return (
                      <div
                        key={index}
                        onClick={() => updateCarousel(index)}
                        className={`absolute w-80 h-44 md:w-96 md:h-56 bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ease-out cursor-pointer ${transformClass} ${opacityClass} ${zIndexClass} ${position === 'hidden' ? 'pointer-events-none' : ''}`}
                      >
                        <img 
                          src={img} 
                          alt={`Team Member ${index + 1}`}
                          className={`w-full h-full object-cover transition-all duration-700 ${filterClass}`}
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Down Arrow - Mobile */}
                <button
                  onClick={() => updateCarousel(currentIndex + 1)}
                  className="md:hidden absolute bottom-5 left-1/2 -translate-x-1/2 z-20 w-16 h-16 flex items-center justify-center bg-transparent border-none hover:scale-110 transition-transform"
                >
                  <img 
                    src="https://ik.imagekit.io/gopichakradhar/icons/down.png?updatedAt=1754290523249" 
                    alt="Down" 
                    className="w-12 h-12 rotate-90"
                  />
                </button>
              </div>
            </div>

            {/* Controls Section */}
            <div className="flex-1 flex flex-col justify-center items-center gap-10 md:gap-10 md:pl-10 w-full">
              {/* Navigation Arrows - Desktop */}
              <div className="hidden md:flex flex-row gap-8 items-center justify-center">
                <button
                  onClick={() => updateCarousel(currentIndex - 1)}
                  className="relative bg-transparent w-20 h-20 rounded-full flex items-center justify-center cursor-pointer z-20 transition-all hover:scale-110 border-none"
                >
                  <img 
                    src="https://ik.imagekit.io/gopichakradhar/icons/top.png?updatedAt=1754290522765" 
                    alt="Up" 
                    className="w-14 h-14 object-contain transition-all hover:scale-110"
                  />
                </button>
                <button
                  onClick={() => updateCarousel(currentIndex + 1)}
                  className="relative bg-transparent w-20 h-20 rounded-full flex items-center justify-center cursor-pointer z-20 transition-all hover:scale-110 border-none"
                >
                  <img 
                    src="https://ik.imagekit.io/gopichakradhar/icons/down.png?updatedAt=1754290523249" 
                    alt="Down" 
                    className="w-14 h-14 object-contain transition-all hover:scale-110"
                  />
                </button>
              </div>

              {/* Member Info */}
              <div className="text-center transition-all duration-500">
                <h2 
                  className="text-cyan-400 text-3xl md:text-4xl font-bold mb-2 relative inline-block transition-opacity duration-300"
                  style={{ opacity: nameOpacity }}
                >
                  <span className="absolute top-full left-0 w-10 md:w-20 h-0.5 bg-cyan-400 -translate-x-full -translate-y-2 md:-translate-x-24"></span>
                  {teamMembers[currentIndex].name}
                  <span className="absolute top-full right-0 w-10 md:w-20 h-0.5 bg-cyan-400 translate-x-full -translate-y-2 md:translate-x-24"></span>
                </h2>
                <p 
                  className="text-gray-300 text-base md:text-xl font-medium opacity-80 uppercase tracking-widest py-1 -mt-2 transition-opacity duration-300"
                  style={{ opacity: nameOpacity }}
                >
                  {teamMembers[currentIndex].role}
                </p>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2.5 mt-8">
                {teamMembers.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => updateCarousel(index)}
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                      index === currentIndex 
                        ? 'bg-cyan-400 scale-110' 
                        : 'bg-cyan-400/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          {showScrollIndicator && (
            <div className="fixed bottom-8 right-8 bg-cyan-500/80 text-white px-4 py-2 rounded-3xl text-xs text-center z-[1000] backdrop-blur-md border border-white/20 font-medium animate-pulse">
              scroll
              <span className="text-xs opacity-90 block mt-0.5">↕</span>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}