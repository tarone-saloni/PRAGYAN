import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import BackgroundLayer from "../components/BackgroundLayer";
import teamData from "./teamData.json";

export default function TeamCarousel() {
  const navigate = useNavigate();
  const [committees] = useState(teamData);
  const [selectedCommittee, setSelectedCommittee] = useState("web");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [nameOpacity, setNameOpacity] = useState(1);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentCommittee = committees[selectedCommittee] || {
    members: [],
    images: [],
    name: "",
  };
  const teamMembers = currentCommittee.members;
  const images = currentCommittee.images;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const normalizedIndex =
      (newIndex + teamMembers.length) % teamMembers.length;

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
  };

  const getCardPosition = (index) => {
    const offset =
      (index - currentIndex + teamMembers.length) % teamMembers.length;

    if (offset === 0) return "center";
    if (offset === 1) return "down-1";
    if (offset === 2) return "down-2";
    if (offset === teamMembers.length - 1) return "up-1";
    if (offset === teamMembers.length - 2) return "up-2";
    return "hidden";
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowUp") {
        updateCarousel(currentIndex - 1);
      } else if (e.key === "ArrowDown") {
        updateCarousel(currentIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isAnimating]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollIndicator(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused && teamMembers.length > 0) {
      const autoSlideTimer = setInterval(() => {
        updateCarousel(currentIndex + 1);
      }, 2000); // 2 seconds

      return () => clearInterval(autoSlideTimer);
    }
  }, [currentIndex, isPaused, teamMembers.length]);

  if (!teamMembers.length || !teamMembers[currentIndex]) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-red-500 text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-x-hidden">
      {/* Background Layer */}
      <BackgroundLayer />

      {/* Back Button - Top Left */}
      <div className="fixed top-4 sm:top-6 left-4 sm:left-6 z-50">
        <button
          onClick={() => navigate(-1)}
          className="group relative flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-gray-950 to-gray-900 backdrop-blur-xl border-2 border-red-500/40 rounded-xl sm:rounded-2xl hover:border-red-500/80 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 group-hover:text-red-400 transition-colors duration-300 group-hover:-translate-x-1" />
          <span className="text-red-500 group-hover:text-red-400 font-semibold text-xs sm:text-sm tracking-wide transition-colors duration-300">
            Back
          </span>
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-grow relative overflow-hidden z-10">
        {/* Header Section */}
        <section className="pt-16 sm:pt-20 md:pt-24 pb-3 sm:pb-4 md:pb-6 px-4 relative z-10 text-center">
          <div className="max-w-7xl mx-auto">
            {/* Main title */}
            <h1
              className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-[4px] xs:tracking-[6px] sm:tracking-[8px] md:tracking-[10px] lg:tracking-[12px] my-2 sm:my-3 bg-gradient-to-b from-white via-red-200 to-gray-600 bg-clip-text text-transparent uppercase transition-all duration-600 ease-out delay-100 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              PRAGYAA
            </h1>

            {/* Subtitle */}
            <p
              className={`text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg tracking-[1px] xs:tracking-[1.5px] sm:tracking-[2px] md:tracking-[3px] uppercase text-gray-300 font-light transition-all duration-600 ease-out delay-150 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              "BRIGHTER THAN EVER BEFORE"
            </p>
          </div>
        </section>

        {/* Team Title Section */}
        <section className="py-3 sm:py-4 md:py-6 px-4 relative z-10 flex flex-col justify-center items-center text-center">
          {/* Team subtitle */}
          <h2
            className={`text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wider bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent uppercase mb-3 sm:mb-4 md:mb-6 animate-gradient transition-all duration-600 ease-out delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Our Team
          </h2>

          {/* Description */}
          <p
            className={`text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-[1px] xs:tracking-[1.5px] sm:tracking-[2px] md:tracking-[3px] my-1.5 sm:my-2 md:my-3 lg:my-4 uppercase text-gray-300 font-light max-w-4xl leading-relaxed transition-all duration-600 ease-out delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            "MEET THE MINDS BEHIND THE MAGIC"
          </p>

          {/* Decorative line */}
          <div
            className={`w-20 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 mx-auto rounded-full animate-pulse transition-all duration-600 ease-out delay-400 ${
              isLoaded ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
        </section>

        {/* Committee Filter Section */}
        <section className="py-3 sm:py-4 md:py-6 lg:py-8 px-3 sm:px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
              {Object.entries(committees).map(([key, committee]) => (
                <button
                  key={key}
                  onClick={() => handleCommitteeChange(key)}
                  className={`px-2.5 xs:px-3 sm:px-4 md:px-6 py-1.5 xs:py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-semibold text-[10px] xs:text-xs sm:text-sm md:text-base transition-all duration-300 whitespace-nowrap ${
                    selectedCommittee === key
                      ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/50 scale-105"
                      : "bg-gray-900/50 text-gray-400 hover:text-red-400 border border-gray-800 hover:border-red-500/50"
                  }`}
                >
                  {committee.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Team Carousel Content */}
        <div className="flex flex-col items-center justify-center overflow-hidden py-2 sm:py-4 md:py-6 lg:py-8 px-3 sm:px-4">
          <div 
            className="flex flex-col lg:flex-row w-full max-w-7xl h-auto lg:h-[55vh] xl:h-[60vh] gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center justify-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Carousel Section */}
            <div className="flex-1 flex justify-center items-center w-full">
              <div
                className="w-full max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-[40vh] xs:h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] relative flex flex-col items-center"
                style={{ perspective: "1000px" }}
              >
                {/* Up Arrow - Mobile/Tablet */}
                <button
                  onClick={() => updateCarousel(currentIndex - 1)}
                  className="lg:hidden absolute top-1 xs:top-2 sm:top-3 left-1/2 -translate-x-1/2 z-20 w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-transparent border-none hover:scale-110 active:scale-95 transition-transform"
                >
                  <img
                    src="https://ik.imagekit.io/gopichakradhar/icons/top.png?updatedAt=1754290522765"
                    alt="Up"
                    className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 -rotate-90 drop-shadow-lg brightness-[0.8] sepia saturate-[300%] hue-rotate-[-10deg]"
                  />
                </button>

                {/* Carousel Track */}
                <div
                  className="w-full h-full flex flex-col justify-center items-center relative transition-transform duration-700 ease-out"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {images.map((img, index) => {
                    const position = getCardPosition(index);
                    let transformClass = "";
                    let opacityClass = "";
                    let zIndexClass = "";
                    let filterClass = "";
                    let borderClass = "";

                    switch (position) {
                      case "center":
                        transformClass = "scale-100 lg:scale-105";
                        opacityClass = "opacity-100";
                        zIndexClass = "z-10";
                        filterClass = "";
                        borderClass =
                          "border-2 border-red-500/50 shadow-2xl shadow-red-500/30";
                        break;
                      case "up-1":
                        transformClass =
                          "-translate-y-14 xs:-translate-y-16 sm:-translate-y-20 md:-translate-y-24 lg:-translate-y-28 scale-80 sm:scale-85 lg:scale-90";
                        opacityClass = "opacity-85 sm:opacity-90";
                        zIndexClass = "z-[5]";
                        filterClass = "grayscale";
                        borderClass = "border border-gray-700/50";
                        break;
                      case "up-2":
                        transformClass =
                          "-translate-y-28 xs:-translate-y-32 sm:-translate-y-40 md:-translate-y-48 lg:-translate-y-56 scale-65 sm:scale-70 lg:scale-75";
                        opacityClass = "opacity-60 sm:opacity-70";
                        zIndexClass = "z-[1]";
                        filterClass = "grayscale";
                        borderClass = "border border-gray-800/50";
                        break;
                      case "down-1":
                        transformClass =
                          "translate-y-14 xs:translate-y-16 sm:translate-y-20 md:translate-y-24 lg:translate-y-28 scale-80 sm:scale-85 lg:scale-90";
                        opacityClass = "opacity-85 sm:opacity-90";
                        zIndexClass = "z-[5]";
                        filterClass = "grayscale";
                        borderClass = "border border-gray-700/50";
                        break;
                      case "down-2":
                        transformClass =
                          "translate-y-28 xs:translate-y-32 sm:translate-y-40 md:translate-y-48 lg:translate-y-56 scale-65 sm:scale-70 lg:scale-75";
                        opacityClass = "opacity-60 sm:opacity-70";
                        zIndexClass = "z-[1]";
                        filterClass = "grayscale";
                        borderClass = "border border-gray-800/50";
                        break;
                      case "hidden":
                        transformClass = "scale-0";
                        opacityClass = "opacity-0";
                        zIndexClass = "z-0";
                        filterClass = "";
                        borderClass = "";
                        break;
                    }

                    return (
                      <div
                        key={index}
                        onClick={() => updateCarousel(index)}
                        className={`absolute w-52 h-28 xs:w-56 xs:h-32 sm:w-64 sm:h-36 md:w-72 md:h-40 lg:w-80 lg:h-44 xl:w-[22rem] xl:h-48 bg-gray-900 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-700 ease-out cursor-pointer ${transformClass} ${opacityClass} ${zIndexClass} ${borderClass} ${position === "hidden" ? "pointer-events-none" : ""}`}
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

                {/* Down Arrow - Mobile/Tablet */}
                <button
                  onClick={() => updateCarousel(currentIndex + 1)}
                  className="lg:hidden absolute bottom-1 xs:bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 z-20 w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-transparent border-none hover:scale-110 active:scale-95 transition-transform"
                >
                  <img
                    src="https://ik.imagekit.io/gopichakradhar/icons/down.png?updatedAt=1754290523249"
                    alt="Down"
                    className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rotate-90 drop-shadow-lg brightness-[0.8] sepia saturate-[300%] hue-rotate-[-10deg]"
                  />
                </button>
              </div>
            </div>

            {/* Controls Section */}
            <div className="flex-1 flex flex-col justify-center items-center gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 lg:pl-8 xl:pl-10 w-full">
              {/* Committee Name */}
              <div className="text-center mb-2 sm:mb-4">
                <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent uppercase tracking-wider animate-gradient">
                  {currentCommittee.name}
                </h3>
                <div className="w-16 xs:w-20 sm:w-24 md:w-32 h-0.5 bg-gradient-to-r from-red-500 via-red-600 to-red-700 mx-auto mt-2 rounded-full"></div>
              </div>

              {/* Navigation Arrows - Desktop */}
              <div className="hidden lg:flex flex-row gap-4 xl:gap-6 items-center justify-center">
                <button
                  onClick={() => updateCarousel(currentIndex - 1)}
                  className="relative bg-transparent w-14 h-14 xl:w-16 xl:h-16 rounded-full flex items-center justify-center cursor-pointer z-20 transition-all hover:scale-110 active:scale-95 border-none"
                >
                  <img
                    src="https://ik.imagekit.io/gopichakradhar/icons/top.png?updatedAt=1754290522765"
                    alt="Up"
                    className="w-10 h-10 xl:w-12 xl:h-12 object-contain transition-all hover:scale-110 brightness-[0.8] sepia saturate-[300%] hue-rotate-[-10deg]"
                  />
                </button>
                <button
                  onClick={() => updateCarousel(currentIndex + 1)}
                  className="relative bg-transparent w-14 h-14 xl:w-16 xl:h-16 rounded-full flex items-center justify-center cursor-pointer z-20 transition-all hover:scale-110 active:scale-95 border-none"
                >
                  <img
                    src="https://ik.imagekit.io/gopichakradhar/icons/down.png?updatedAt=1754290523249"
                    alt="Down"
                    className="w-10 h-10 xl:w-12 xl:h-12 object-contain transition-all hover:scale-110 brightness-[0.8] sepia saturate-[300%] hue-rotate-[-10deg]"
                  />
                </button>
              </div>

              {/* Member Info */}
              <div className="text-center transition-all duration-500 px-3 sm:px-4">
                <h2
                  className="text-red-500 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold mb-1.5 sm:mb-2 relative inline-block transition-opacity duration-300"
                  style={{ opacity: nameOpacity }}
                >
                  <span className="hidden sm:block absolute top-full left-0 w-6 sm:w-8 md:w-10 lg:w-12 xl:w-16 h-0.5 bg-red-500 -translate-x-full -translate-y-2 lg:-translate-x-10 xl:-translate-x-20"></span>
                  {teamMembers[currentIndex].name}
                  <span className="hidden sm:block absolute top-full right-0 w-6 sm:w-8 md:w-10 lg:w-12 xl:w-16 h-0.5 bg-red-500 translate-x-full -translate-y-2 lg:translate-x-10 xl:translate-x-20"></span>
                </h2>
                <p
                  className="text-gray-300 text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium opacity-80 uppercase tracking-wider sm:tracking-widest py-0.5 sm:py-1 -mt-0.5 sm:-mt-1 transition-opacity duration-300"
                  style={{ opacity: nameOpacity }}
                >
                  {teamMembers[currentIndex].role}
                </p>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-1.5 sm:gap-2 mt-1 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-6">
                {teamMembers.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => updateCarousel(index)}
                    className={`w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full cursor-pointer transition-all ${
                      index === currentIndex
                        ? "bg-red-500 scale-110 shadow-lg shadow-red-500/50"
                        : "bg-red-500/20 hover:bg-red-500/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          {showScrollIndicator && (
            <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-3 sm:right-4 lg:right-8 bg-red-500/80 text-white px-2 xs:px-2.5 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-2xl sm:rounded-3xl text-[8px] xs:text-[9px] sm:text-[10px] lg:text-xs text-center z-[1000] backdrop-blur-md border border-white/20 font-medium animate-pulse shadow-lg">
              scroll
              <span className="text-[8px] xs:text-[9px] sm:text-[10px] lg:text-xs opacity-90 block mt-0.5">
                ↕
              </span>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <div className="relative z-20 w-full mt-4 sm:mt-6 md:mt-8">
        <Footer />
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(239, 68, 68, 0.5);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(239, 68, 68, 0.7);
        }
      `}</style>
    </div>
  );
}
