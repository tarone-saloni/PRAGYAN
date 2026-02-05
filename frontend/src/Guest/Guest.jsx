import React from "react";
import { ArrowLeft, Calendar, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import BackgroundLayer from "../components/BackgroundLayer";

function Guest() {
  const navigate = useNavigate();

  const currentGuest = {
    name: "Dr. Tikale Sir",
    title: "Chief Guest 2026",
    designation: "Distinguished Academic Leader & Visionary",
    image: "/tikale.webp",
    description:
      "An esteemed academician and visionary leader who has made remarkable contributions to technical education and research, inspiring countless students and faculty members.",
  };

  const previousGuests = [
    {
      id: 1,
      name: "Dr. Mukesh Sir",
      year: "2025",
      designation: "Renowned Research Scholar & Industry Expert",
      image: "/Mukesh_sir.jpg",
    },
    {
      id: 2,
      name: "Dr. Dinesh Sir",
      year: "2025",
      designation: "Eminent Professor & Educational Innovator",
      image: "/Dinesh_Sir.jpg",
    },
    {
      id: 3,
      name: "Dr. H.C. Verma Sir",
      year: "2023",
      designation: "Legendary Physics Educator & Author",
      image: "/hc-verma-bw.jpg",
    },
  ];

  const handleBack = () => {
    navigate(-1);
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
            onClick={handleBack}
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
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-[4px] xs:tracking-[6px] sm:tracking-[8px] md:tracking-[10px] lg:tracking-[12px] my-2 sm:my-3 bg-gradient-to-b from-white via-red-200 to-gray-600 bg-clip-text text-transparent uppercase transition-all duration-600 ease-out delay-100">
              PRAGYAA
            </h1>
            {/* Subtitle */}
            <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg tracking-[1px] xs:tracking-[1.5px] sm:tracking-[2px] md:tracking-[3px] uppercase text-gray-300 font-light transition-all duration-600 ease-out delay-150">
              "BRIGHTER THAN EVER BEFORE"
            </p>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-3 sm:py-4 md:py-6 px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center mb-8">
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wider bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent uppercase mb-3 sm:mb-4 md:mb-6 animate-gradient">
              Our Distinguished Guests
            </h2>
            <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg tracking-[1px] xs:tracking-[1.5px] sm:tracking-[2px] text-gray-300 max-w-2xl mx-auto">
              Meet our esteemed guests who have graced PRAGYAA over the years
              with their wisdom and inspiration
            </p>
          </div>

          {/* Current Special Guest Section */}
          <div className="max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20">
            <div className="bg-gradient-to-br from-red-900/20 via-gray-900/80 to-red-900/20 backdrop-blur-sm rounded-2xl border-2 border-red-500/30 overflow-hidden shadow-2xl shadow-red-500/10">
              <div className="bg-gradient-to-r from-red-900/50 to-red-900/50 border-b-2 border-red-500/30 px-4 sm:px-6 py-3 sm:py-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                  Special Guest 2026
                </h3>
              </div>

              <div className="p-6 sm:p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                  {/* Guest Image */}
                  <div className="relative">
                    <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-red-500/20 to-gray-900/40 border-2 border-red-500/20">
                      <img
                        src={currentGuest.image}
                        alt={currentGuest.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-red-600 to-red-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg shadow-red-500/30">
                      <p className="text-xs sm:text-sm font-semibold">Year</p>
                      <p className="text-xl sm:text-2xl font-bold">2026</p>
                    </div>
                  </div>

                  {/* Guest Info */}
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <p className="text-red-400 text-base sm:text-lg mb-2">
                        {currentGuest.title}
                      </p>
                      <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                        {currentGuest.name}
                      </h4>
                      <p className="text-lg sm:text-xl text-red-200 font-medium">
                        {currentGuest.designation}
                      </p>
                    </div>

                    <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                      {currentGuest.description}
                    </p>

                    <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
                      <div className="bg-gray-900/50 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-red-500/20">
                        <p className="text-red-400 text-xs sm:text-sm">Year</p>
                        <p className="text-white text-base sm:text-lg font-bold">2026</p>
                      </div>
                      <div className="bg-gray-900/50 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-red-500/20">
                        <p className="text-red-400 text-xs sm:text-sm">Event</p>
                        <p className="text-white text-base sm:text-lg font-bold">PRAGYAA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Previous Guests Section */}
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent uppercase mb-3 animate-gradient">
                Previous Distinguished Guests
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-300">
                Honoring those who have inspired us in the past years
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {previousGuests.map((guest) => (
                <div
                  key={guest.id}
                  className="bg-gradient-to-br from-red-900/20 via-gray-900/80 to-red-900/20 backdrop-blur-sm rounded-xl border-2 border-red-500/30 overflow-hidden hover:border-red-500/50 transition-all hover:shadow-xl hover:shadow-red-500/20 group"
                >
                  {/* Guest Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-red-500/10 to-gray-900/40">
                    <img
                      src={guest.image}
                      alt={guest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-br from-red-600 to-red-700 text-white px-3 sm:px-4 py-2 rounded-lg shadow-lg shadow-red-500/30">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="font-bold text-sm sm:text-base">{guest.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Guest Info */}
                  <div className="p-4 sm:p-6">
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {guest.name}
                    </h4>
                    <p className="text-sm sm:text-base text-red-200">{guest.designation}</p>
                  </div>
                </div>
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

export default Guest;