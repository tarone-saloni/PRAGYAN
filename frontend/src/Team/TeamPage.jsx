import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import BackgroundLayer from "../components/BackgroundLayer";

const committees = {
  web: {
    name: "Web Committee",
    members: [
      { name: "Luffy", role: "Founder" },
      { name: "Monkey D. Luffy", role: "Creative Director" },
      { name: "Luffy chan", role: "Lead Developer" },
      { name: "Lucy", role: "UX Designer" },
      { name: "Luffy kun", role: "Marketing Manager" },
      { name: "Monkey chan", role: "Product Manager" }
    ],
    images: [
      "https://ik.imagekit.io/gopichakradhar/luffy/o1.jpeg?updatedAt=1754289569411",
      "https://ik.imagekit.io/gopichakradhar/luffy/o2.jpeg?updatedAt=1754289569307",
      "https://ik.imagekit.io/gopichakradhar/luffy/o4.jpeg?updatedAt=1754289569398",
      "https://ik.imagekit.io/gopichakradhar/luffy/o3.jpeg?updatedAt=1754289569422",
      "https://ik.imagekit.io/gopichakradhar/luffy/o5.jpeg?updatedAt=1754289569406",
      "https://ik.imagekit.io/gopichakradhar/luffy/o6.jpeg?updatedAt=1754289569438"
    ]
  },
  content: {
    name: "Content Committee",
    members: [
      { name: "Writer 1", role: "Head Writer" },
      { name: "Writer 2", role: "Content Strategist" },
      { name: "Writer 3", role: "Editor" }
    ],
    images: [
      "https://ik.imagekit.io/gopichakradhar/luffy/o1.jpeg?updatedAt=1754289569411",
      "https://ik.imagekit.io/gopichakradhar/luffy/o2.jpeg?updatedAt=1754289569307",
      "https://ik.imagekit.io/gopichakradhar/luffy/o4.jpeg?updatedAt=1754289569398"
    ]
  },
  design: {
    name: "Design Committee",
    members: [
      { name: "Designer 1", role: "Lead Designer" },
      { name: "Designer 2", role: "UI/UX Designer" },
      { name: "Designer 3", role: "Graphic Designer" }
    ],
    images: [
      "https://ik.imagekit.io/gopichakradhar/luffy/o3.jpeg?updatedAt=1754289569422",
      "https://ik.imagekit.io/gopichakradhar/luffy/o5.jpeg?updatedAt=1754289569406",
      "https://ik.imagekit.io/gopichakradhar/luffy/o6.jpeg?updatedAt=1754289569438"
    ]
  },
  marketing: {
    name: "Marketing Committee",
    members: [
      { name: "Marketer 1", role: "Marketing Head" },
      { name: "Marketer 2", role: "Social Media Manager" },
      { name: "Marketer 3", role: "Brand Strategist" }
    ],
    images: [
      "https://ik.imagekit.io/gopichakradhar/luffy/o1.jpeg?updatedAt=1754289569411",
      "https://ik.imagekit.io/gopichakradhar/luffy/o4.jpeg?updatedAt=1754289569398",
      "https://ik.imagekit.io/gopichakradhar/luffy/o5.jpeg?updatedAt=1754289569406"
    ]
  },
  events: {
    name: "Events Committee",
    members: [
      { name: "Event Manager 1", role: "Events Head" },
      { name: "Event Manager 2", role: "Coordinator" },
      { name: "Event Manager 3", role: "Logistics Manager" }
    ],
    images: [
      "https://ik.imagekit.io/gopichakradhar/luffy/o2.jpeg?updatedAt=1754289569307",
      "https://ik.imagekit.io/gopichakradhar/luffy/o3.jpeg?updatedAt=1754289569422",
      "https://ik.imagekit.io/gopichakradhar/luffy/o6.jpeg?updatedAt=1754289569438"
    ]
  },
  technical: {
    name: "Technical Committee",
    members: [
      { name: "Tech Lead 1", role: "Technical Head" },
      { name: "Tech Lead 2", role: "Backend Developer" },
      { name: "Tech Lead 3", role: "DevOps Engineer" }
    ],
    images: [
      "https://ik.imagekit.io/gopichakradhar/luffy/o1.jpeg?updatedAt=1754289569411",
      "https://ik.imagekit.io/gopichakradhar/luffy/o5.jpeg?updatedAt=1754289569406",
      "https://ik.imagekit.io/gopichakradhar/luffy/o4.jpeg?updatedAt=1754289569398"
    ]
  }
};

export default function TeamCarousel() {
  const navigate = useNavigate();
  const [selectedCommittee, setSelectedCommittee] = useState('web');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [nameOpacity, setNameOpacity] = useState(1);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const sidebarRef = useRef(null);
  const touchStartX = useRef(0);
  const touchCurrentX = useRef(0);
  const isDragging = useRef(false);

  const currentCommittee = committees[selectedCommittee];
  const teamMembers = currentCommittee.members;
  const images = currentCommittee.images;

  // Touch handlers for swipeable sidebar
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    touchCurrentX.current = e.touches[0].clientX;
    const diff = touchCurrentX.current - touchStartX.current;
    
    if (sidebarRef.current) {
      if (isSidebarOpen && diff < 0) {
        // Closing sidebar
        const translateX = Math.max(diff, -256);
        sidebarRef.current.style.transform = `translateX(${translateX}px)`;
      } else if (!isSidebarOpen && diff > 0) {
        // Opening sidebar
        const translateX = Math.min(diff - 256, 0);
        sidebarRef.current.style.transform = `translateX(${translateX}px)`;
      }
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    
    const diff = touchCurrentX.current - touchStartX.current;
    
    if (Math.abs(diff) > 100) {
      if (diff < 0 && isSidebarOpen) {
        setIsSidebarOpen(false);
      } else if (diff > 0 && !isSidebarOpen) {
        setIsSidebarOpen(true);
      }
    }
    
    if (sidebarRef.current) {
      sidebarRef.current.style.transform = '';
    }
  };

  // Edge swipe detection
  useEffect(() => {
    const handleEdgeSwipe = (e) => {
      if (e.touches[0].clientX < 20 && !isSidebarOpen) {
        touchStartX.current = e.touches[0].clientX;
        isDragging.current = true;
      }
    };

    window.addEventListener('touchstart', handleEdgeSwipe);
    return () => window.removeEventListener('touchstart', handleEdgeSwipe);
  }, [isSidebarOpen]);

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

  const handleCommitteeChange = (committeeKey) => {
    setSelectedCommittee(committeeKey);
    setCurrentIndex(0);
    setNameOpacity(0);
    setTimeout(() => setNameOpacity(1), 300);
    setIsSidebarOpen(false); // Close sidebar on mobile after selection
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
    <div className="min-h-screen bg-gray-950 flex flex-col relative overflow-x-hidden">
      {/* Background Layer */}
      <BackgroundLayer />

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-[60] p-3 bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-2 border-cyan-500/30 rounded-xl hover:border-cyan-500/60 transition-all duration-300"
      >
        {isSidebarOpen ? (
          <X className="w-6 h-6 text-cyan-400" />
        ) : (
          <Menu className="w-6 h-6 text-cyan-400" />
        )}
      </button>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[35] transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Left Sidebar - Committee Selection */}
      <div
        ref={sidebarRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-r-2 border-cyan-500/20 flex flex-col transition-transform duration-300 ease-out z-[40] overflow-hidden
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Back Button */}
        <div className="flex-shrink-0 p-4 lg:p-6 border-b border-cyan-500/20">
          <button
            onClick={() => navigate(-1)}
            className="group relative flex items-center gap-2 lg:gap-3 px-4 lg:px-6 py-2.5 lg:py-3 bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl border-2 border-cyan-500/30 rounded-2xl hover:border-cyan-500/60 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 w-full"
          >
            <ArrowLeft className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 group-hover:-translate-x-1" />
            <span className="text-cyan-400 group-hover:text-cyan-300 font-semibold text-xs lg:text-sm tracking-wide transition-colors duration-300">
              Back
            </span>
          </button>
        </div>

        {/* Committee Title */}
        <div className="flex-shrink-0 p-4 lg:p-6 border-b border-cyan-500/20">
          <h3 className="text-lg lg:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-wide">
            Committees
          </h3>
        </div>

        {/* Committee List - Scrollable */}
        <div className="flex-1 overflow-y-auto py-3 lg:py-4 px-2 lg:px-3 space-y-2 scrollbar-thin scrollbar-thumb-cyan-500/30 scrollbar-track-transparent">
          {Object.entries(committees).map(([key, committee]) => (
            <button
              key={key}
              onClick={() => handleCommitteeChange(key)}
              className={`w-full text-left px-3 lg:px-4 py-2.5 lg:py-3 rounded-xl transition-all duration-300 ${
                selectedCommittee === key
                  ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-2 border-cyan-500/50 text-cyan-300 shadow-lg shadow-cyan-500/20'
                  : 'bg-gray-800/50 border-2 border-transparent text-gray-400 hover:bg-gray-800/80 hover:text-cyan-400 hover:border-cyan-500/30'
              }`}
            >
              <span className="font-semibold text-xs lg:text-sm tracking-wide block">
                {committee.name}
              </span>
              <span className="text-[10px] lg:text-xs opacity-70 mt-1 block">
                {committee.members.length} members
              </span>
            </button>
          ))}
        </div>

        {/* Footer Info */}
        <div className="flex-shrink-0 p-3 lg:p-4 border-t border-cyan-500/20">
          <p className="text-[10px] lg:text-xs text-gray-500 text-center">
            Select a committee to view members
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow relative overflow-hidden z-10 lg:ml-64">
        {/* Team Carousel Content */}
        <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden py-5 md:py-20 pt-20 lg:pt-24 pb-24 lg:pb-32">
          <div className="flex flex-col md:flex-row w-full max-w-7xl h-auto md:h-[80vh] gap-5 md:gap-16 items-center justify-center px-4">
            {/* Carousel Section */}
            <div className="flex-1 flex justify-center items-center w-full">
              <div className="w-full max-w-md md:max-w-lg h-[60vh] md:h-[70vh] relative flex flex-col items-center" style={{ perspective: '1000px' }}>
                {/* Up Arrow - Mobile */}
                <button
                  onClick={() => updateCarousel(currentIndex - 1)}
                  className="md:hidden absolute top-5 left-1/2 -translate-x-1/2 z-20 w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center bg-transparent border-none hover:scale-110 transition-transform"
                >
                  <img 
                    src="https://ik.imagekit.io/gopichakradhar/icons/top.png?updatedAt=1754290522765" 
                    alt="Up" 
                    className="w-10 h-10 lg:w-12 lg:h-12 -rotate-90"
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
                        transformClass = 'scale-100 md:scale-110';
                        opacityClass = 'opacity-100';
                        zIndexClass = 'z-10';
                        filterClass = '';
                        break;
                      case 'up-1':
                        transformClass = '-translate-y-20 md:-translate-y-36 scale-85 md:scale-90';
                        opacityClass = 'opacity-90';
                        zIndexClass = 'z-[5]';
                        filterClass = 'grayscale';
                        break;
                      case 'up-2':
                        transformClass = '-translate-y-40 md:-translate-y-72 scale-75 md:scale-80';
                        opacityClass = 'opacity-70';
                        zIndexClass = 'z-[1]';
                        filterClass = 'grayscale';
                        break;
                      case 'down-1':
                        transformClass = 'translate-y-20 md:translate-y-36 scale-85 md:scale-90';
                        opacityClass = 'opacity-90';
                        zIndexClass = 'z-[5]';
                        filterClass = 'grayscale';
                        break;
                      case 'down-2':
                        transformClass = 'translate-y-40 md:translate-y-72 scale-75 md:scale-80';
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
                        className={`absolute w-72 h-40 md:w-80 md:h-44 lg:w-96 lg:h-56 bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ease-out cursor-pointer ${transformClass} ${opacityClass} ${zIndexClass} ${position === 'hidden' ? 'pointer-events-none' : ''}`}
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
                  className="md:hidden absolute bottom-5 left-1/2 -translate-x-1/2 z-20 w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center bg-transparent border-none hover:scale-110 transition-transform"
                >
                  <img 
                    src="https://ik.imagekit.io/gopichakradhar/icons/down.png?updatedAt=1754290523249" 
                    alt="Down" 
                    className="w-10 h-10 lg:w-12 lg:h-12 rotate-90"
                  />
                </button>
              </div>
            </div>

            {/* Controls Section */}
            <div className="flex-1 flex flex-col justify-center items-center gap-6 md:gap-10 md:pl-10 w-full">
              <div className="mb-4 md:mb-8 lg:mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 tracking-wider text-center px-4">
                  {currentCommittee.name}
                </h2>
              </div>
              
              {/* Navigation Arrows - Desktop */}
              <div className="hidden md:flex flex-row gap-6 lg:gap-8 items-center justify-center">
                <button
                  onClick={() => updateCarousel(currentIndex - 1)}
                  className="relative bg-transparent w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center cursor-pointer z-20 transition-all hover:scale-110 border-none"
                >
                  <img 
                    src="https://ik.imagekit.io/gopichakradhar/icons/top.png?updatedAt=1754290522765" 
                    alt="Up" 
                    className="w-12 h-12 lg:w-14 lg:h-14 object-contain transition-all hover:scale-110"
                  />
                </button>
                <button
                  onClick={() => updateCarousel(currentIndex + 1)}
                  className="relative bg-transparent w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center cursor-pointer z-20 transition-all hover:scale-110 border-none"
                >
                  <img 
                    src="https://ik.imagekit.io/gopichakradhar/icons/down.png?updatedAt=1754290523249" 
                    alt="Down" 
                    className="w-12 h-12 lg:w-14 lg:h-14 object-contain transition-all hover:scale-110"
                  />
                </button>
              </div>

              {/* Member Info */}
              <div className="text-center transition-all duration-500 px-4">
                <h2 
                  className="text-cyan-400 text-2xl md:text-3xl lg:text-4xl font-bold mb-2 relative inline-block transition-opacity duration-300"
                  style={{ opacity: nameOpacity }}
                >
                  <span className="absolute top-full left-0 w-8 md:w-10 lg:w-20 h-0.5 bg-cyan-400 -translate-x-full -translate-y-2 md:-translate-x-12 lg:-translate-x-24"></span>
                  {teamMembers[currentIndex].name}
                  <span className="absolute top-full right-0 w-8 md:w-10 lg:w-20 h-0.5 bg-cyan-400 translate-x-full -translate-y-2 md:translate-x-12 lg:translate-x-24"></span>
                </h2>
                <p 
                  className="text-gray-300 text-sm md:text-base lg:text-xl font-medium opacity-80 uppercase tracking-widest py-1 -mt-2 transition-opacity duration-300"
                  style={{ opacity: nameOpacity }}
                >
                  {teamMembers[currentIndex].role}
                </p>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 lg:gap-2.5 mt-4 lg:mt-8">
                {teamMembers.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => updateCarousel(index)}
                    className={`w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full cursor-pointer transition-all ${
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
            <div className="fixed bottom-8 right-4 lg:right-8 bg-cyan-500/80 text-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-3xl text-[10px] lg:text-xs text-center z-[1000] backdrop-blur-md border border-white/20 font-medium animate-pulse">
              scroll
              <span className="text-[10px] lg:text-xs opacity-90 block mt-0.5">↕</span>
            </div>
          )}
        </div>
      </main>

      {/* Footer - Higher z-index than sidebar, spans full width on desktop */}
      <div className="relative z-[70] w-full lg:ml-64">
        <Footer />
      </div>
    </div>
  );
}