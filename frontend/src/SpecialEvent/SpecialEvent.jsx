import React, { useState } from "react";
import { ArrowLeft, Microscope, Beaker, Atom, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import BackgroundLayer from "../components/BackgroundLayer";

function SpecialEvent() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery images from previous years
  const galleryImages = [
    { src: "/Aditya.jpg", title: "Science Exhibition 2025" },
    { src: "/Aditya.jpg", title: "Robotics Workshop 2025" },
    { src: "/Aditya.jpg", title: "Chemistry Lab Session 2025" },
    { src: "/Aditya.jpg", title: "Physics Experiments 2025" },
    { src: "/Aditya.jpg", title: "Innovation Fair 2025" },
    { src: "/Aditya.jpg", title: "Tech Competition 2025" },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-x-hidden">
      {/* Background Layer */}
      <BackgroundLayer />

      {/* Main Content */}
      <main className="flex-grow relative overflow-hidden z-10">
        {/* Back Button */}
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

        {/* Header Section */}
        <section className="pt-16 sm:pt-20 md:pt-24 pb-3 sm:pb-4 md:pb-6 px-4 relative z-10 text-center">
          <div className="max-w-7xl mx-auto">
            {/* Main title */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-[4px] xs:tracking-[6px] sm:tracking-[8px] md:tracking-[10px] lg:tracking-[12px] my-2 sm:my-3 bg-gradient-to-b from-white via-red-200 to-gray-600 bg-clip-text text-transparent uppercase">
              PRAGYAA
            </h1>
            {/* Subtitle */}
            <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg tracking-[1px] xs:tracking-[1.5px] sm:tracking-[2px] md:tracking-[3px] uppercase text-gray-300 font-light">
              "BRIGHTER THAN EVER BEFORE"
            </p>
          </div>
        </section>

        {/* Junior Scientists Section */}
        <section className="py-3 sm:py-4 md:py-6 px-4 relative z-10 flex flex-col justify-center items-center text-center">
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wider bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent uppercase mb-3 sm:mb-4 md:mb-6 animate-gradient">
            Junior Scientists Program
          </h2>
          <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg tracking-[1px] xs:tracking-[1.5px] sm:tracking-[2px] md:tracking-[3px] my-1.5 sm:my-2 md:my-3 lg:my-4 uppercase text-gray-300 font-light max-w-4xl leading-relaxed">
            "Igniting Young Minds - For Classes 6 to 9"
          </p>
          <div className="w-20 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 mx-auto rounded-full animate-pulse mb-8"></div>
        </section>

        {/* Activities Section */}
        <section className="py-6 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Activity Card 1 */}
              <div className="bg-gradient-to-br from-red-900/70 via-gray-900/80 to-red-900/70 border-2 border-red-500/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="flex justify-center mb-4">
                  <Microscope className="w-16 h-16 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Science Experiments</h3>
                <p className="text-gray-300 text-sm text-center">
                  Hands-on experiments in Physics, Chemistry, and Biology with expert guidance.
                </p>
              </div>

              {/* Activity Card 2 */}
              <div className="bg-gradient-to-br from-red-900/70 via-gray-900/80 to-red-900/70 border-2 border-red-500/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="flex justify-center mb-4">
                  <Beaker className="w-16 h-16 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Lab Sessions</h3>
                <p className="text-gray-300 text-sm text-center">
                  Interactive lab sessions to understand scientific concepts through practical learning.
                </p>
              </div>

              {/* Activity Card 3 */}
              <div className="bg-gradient-to-br from-red-900/70 via-gray-900/80 to-red-900/70 border-2 border-red-500/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="flex justify-center mb-4">
                  <Atom className="w-16 h-16 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Robotics & Tech</h3>
                <p className="text-gray-300 text-sm text-center">
                  Introduction to robotics, coding, and modern technology for young innovators.
                </p>
              </div>

              {/* Activity Card 4 */}
              <div className="bg-gradient-to-br from-red-900/70 via-gray-900/80 to-red-900/70 border-2 border-red-500/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="flex justify-center mb-4">
                  <Sparkles className="w-16 h-16 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Innovation Projects</h3>
                <p className="text-gray-300 text-sm text-center">
                  Create and showcase innovative science projects with mentorship support.
                </p>
              </div>

              {/* Activity Card 5 */}
              <div className="bg-gradient-to-br from-red-900/70 via-gray-900/80 to-red-900/70 border-2 border-red-500/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="flex justify-center mb-4">
                  <svg className="w-16 h-16 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Science Quiz</h3>
                <p className="text-gray-300 text-sm text-center">
                  Participate in exciting science quizzes and competitions to test your knowledge.
                </p>
              </div>

              {/* Activity Card 6 */}
              <div className="bg-gradient-to-br from-red-900/70 via-gray-900/80 to-red-900/70 border-2 border-red-500/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="flex justify-center mb-4">
                  <svg className="w-16 h-16 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Learning Workshops</h3>
                <p className="text-gray-300 text-sm text-center">
                  Attend workshops on various scientific topics by experienced educators.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-8 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent uppercase mb-8">
              Previous Year Memories
            </h2>
            
            {/* Gallery Carousel */}
            <div className="relative bg-gradient-to-br from-red-900/50 via-gray-900/60 to-red-900/50 border-2 border-red-500/30 rounded-2xl overflow-hidden">
              <div className="relative aspect-video">
                <img
                  src={galleryImages[currentImageIndex].src}
                  alt={galleryImages[currentImageIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white text-lg sm:text-xl font-bold text-center">
                    {galleryImages[currentImageIndex].title}
                  </h3>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-red-600/80 hover:bg-red-600 text-white p-3 rounded-full transition-all hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-600/80 hover:bg-red-600 text-white p-3 rounded-full transition-all hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-red-500 w-8"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-4 mt-6">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden transition-all ${
                    index === currentImageIndex
                      ? "ring-4 ring-red-500 scale-105"
                      : "hover:scale-105 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Info */}
        <section className="py-8 px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-red-900/70 via-gray-900/80 to-red-900/70 border-2 border-red-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Join the Junior Scientists Program!
            </h3>
            <p className="text-gray-300 mb-6">
              Open for students from Classes 6 to 9. Experience the joy of science through interactive learning and exciting activities.
            </p>
            <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg shadow-red-500/50">
              Register Now
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <div className="relative z-20 w-full mt-4 sm:mt-6 md:mt-8">
        <Footer />
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
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
      `}</style>
    </div>
  );
}

export default SpecialEvent;
