import React, { useState } from "react";
import { ArrowLeft, Microscope, Lightbulb, Users, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import BackgroundLayer from "../components/BackgroundLayer";

function SpecialEvent() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery images from previous years
  const galleryImages = [
    { src: "/Junior_Scientist_6.jpeg" },
    { src: "/Junior_Scientist_5.jpeg" },
    { src: "/Junior_Scientist_1.jpeg" },
    { src: "/Junior_Scientist_2.jpeg" },
    { src: "/Junior_Scientist_3.jpeg" },
    { src: "/Junior_Scientist_4.jpeg" },
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
            onClick={() => navigate("/")}
            className="group relative flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-gray-950 to-gray-900 backdrop-blur-xl border-2 border-red-500/40 rounded-xl sm:rounded-2xl hover:border-red-500/80 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 group-hover:text-red-400 transition-colors duration-300 group-hover:-translate-x-1" />
            <span className="text-red-500 group-hover:text-red-400 font-semibold text-xs sm:text-sm tracking-wide transition-colors duration-300">
              Home
            </span>
          </button>
        </div>

        {/* Register Button - Top Right */}
        <div className="fixed top-4 sm:top-6 right-4 sm:right-6 z-50">
          <button className="group relative px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-red-600 to-red-700 backdrop-blur-xl border-2 border-red-500/40 rounded-xl sm:rounded-2xl hover:border-red-400 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50">
            <span className="text-white font-semibold text-xs sm:text-sm tracking-wide">
              Register Now
            </span>
          </button>
        </div>

        {/* Header Section */}
        <section className="pt-16 sm:pt-20 md:pt-24 pb-3 sm:pb-4 md:pb-6 px-4 relative z-10 text-center">
          <div className="max-w-7xl mx-auto">
            {/* Tagline */}
            <div className="text-xs sm:text-sm md:text-base tracking-[2px] sm:tracking-[3px] text-red-400 mb-3 sm:mb-4 uppercase font-medium animate-pulse">
              Multiverse of innovation
            </div>

            {/* Main Image */}
            <div className="my-3 sm:my-4 md:my-5">
              <img
                src="/Pragyaa_main_image.png"
                alt="PRAGYAA 2026"
                className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto drop-shadow-2xl"
              />
            </div>

            {/* Subtitle */}
            <p className="text-xs xs:text-sm sm:text-base md:text-lg tracking-[1px] xs:tracking-[2px] sm:tracking-[3px] uppercase text-gray-300 font-light mt-2">
              "BRIGHTER THAN EVER BEFORE"
            </p>
          </div>
        </section>

        {/* Junior Scientists Section */}
        <section className="py-3 sm:py-4 md:py-6 px-4 relative z-10 flex flex-col justify-center items-center text-center">
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wider bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent uppercase mb-3 sm:mb-4 md:mb-6 animate-gradient">
            Junior Scientists    
          </h2>
          <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg tracking-[1px] xs:tracking-[1.5px] sm:tracking-[2px] md:tracking-[3px] my-1.5 sm:my-2 md:my-3 lg:my-4 uppercase text-gray-300 font-light max-w-4xl leading-relaxed">
            "Inspiring Young Minds Through Science"
          </p>
          <div className="w-20 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 mx-auto rounded-full animate-pulse mb-8"></div>
        </section>

        {/* About Section */}
        <section className="py-4 sm:py-6 px-4 relative z-10">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-red-900/70 via-gray-900/80 to-red-900/70 border-2 border-red-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
            <p className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-center">
              Junior Scientist is a special educational event organized by Pragyaa for primary school children, 
              where students will showcase their self-made science projects and explain their ideas, working models, 
              and real-life applications in a simple and creative manner. The objective of this event is to promote 
              scientific thinking, curiosity, and innovation among young learners while enhancing their confidence 
              and communication skills. During the exhibition, participants will interact with visitors and judges 
              by answering questions, which helps strengthen their understanding and presentation abilities. This 
              event offers parents, teachers, and guests an opportunity to witness the creativity and potential of 
              young minds as they engage in practical and enjoyable learning experiences.
            </p>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-6 sm:py-8 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent uppercase mb-6 sm:mb-8">
              Event Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Feature Card 1 */}
              <div className="bg-gradient-to-br from-red-900/70 via-gray-900/80 to-red-900/70 border-2 border-red-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <Microscope className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-red-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 text-center">Project Exhibition</h3>
                <p className="text-gray-300 text-xs sm:text-sm text-center">
                  Students showcase self-made science projects with working models and demonstrations.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-gradient-to-br from-red-900/70 via-gray-900/80 to-red-900/70 border-2 border-red-500/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="flex justify-center mb-4">
                  <Lightbulb className="w-16 h-16 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Creative Thinking</h3>
                <p className="text-gray-300 text-sm text-center">
                  Promotes scientific thinking, curiosity, and innovation among young learners.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-gradient-to-br from-red-900/70 via-gray-900/80 to-red-900/70 border-2 border-red-500/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="flex justify-center mb-4">
                  <Users className="w-16 h-16 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Interactive Sessions</h3>
                <p className="text-gray-300 text-sm text-center">
                  Students interact with visitors and judges, enhancing communication skills.
                </p>
              </div>

              {/* Feature Card 4 */}
              <div className="bg-gradient-to-br from-red-900/70 via-gray-900/80 to-red-900/70 border-2 border-red-500/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="flex justify-center mb-4">
                  <Award className="w-16 h-16 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Confidence Building</h3>
                <p className="text-gray-300 text-sm text-center">
                  Strengthens understanding, presentation abilities, and builds confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-6 sm:py-8 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent uppercase mb-6 sm:mb-8">
              Previous Year Memories
            </h2>
            
            {/* Gallery Carousel */}
            <div className="relative bg-gradient-to-br from-red-900/50 via-gray-900/60 to-red-900/50 border-2 border-red-500/30 rounded-xl sm:rounded-2xl overflow-hidden">
              <div className="relative aspect-video">
                <img
                  src={galleryImages[currentImageIndex].src}
                  alt="Junior Scientist Exhibition"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-red-600/80 hover:bg-red-600 text-white p-2 sm:p-3 rounded-full transition-all hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-red-600/80 hover:bg-red-600 text-white p-2 sm:p-3 rounded-full transition-all hover:scale-110"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2">
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
                    alt="Gallery thumbnail"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
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
