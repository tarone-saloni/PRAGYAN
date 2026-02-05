import React from "react";
import { ArrowLeft, Crown, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import BackgroundLayer from "../components/BackgroundLayer";

function Sponsors() {
  const navigate = useNavigate();

  const titleSponsors = [
    {
      id: 1,
      name: "Sharda Construction & Corporation Pvt. Ltd.",
      logo: "/sharda-construction.jpg",
    },
  ];

  const otherSponsors = [
    {
      id: 2,
      name: "Hotel Manju Palace",
      logo: "/hotel-manju-palace.png",
    },
    {
      id: 3,
      name: "Aqua Gold Mineral Water",
      logo: "/aqua-gold.png",
    },
    {
      id: 4,
      name: "Raj Opticals",
      logo: "/raj-opticals.png",
    },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-x-hidden">
      {/* Background Layer */}
      <BackgroundLayer />

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

      {/* Main Content */}
      <main className="flex-grow relative overflow-hidden z-10">
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
          <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wider bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent uppercase mb-3 sm:mb-4 md:mb-6 animate-gradient">
              Our Sponsors
            </h2>
            <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg tracking-[1px] xs:tracking-[1.5px] sm:tracking-[2px] text-gray-300 max-w-2xl mx-auto">
              Thank you to our amazing partners who make PRAGYAA possible
            </p>
          </div>

          {/* Title Sponsor Section */}
          <div className="max-w-7xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-2 sm:px-0">
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Crown className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-yellow-400" />
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent uppercase">
                  Title Sponsor
                </h3>
                <Crown className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-yellow-400" />
              </div>
              <div className="w-16 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
            </div>

            <div className="flex justify-center">
              {titleSponsors.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="group relative bg-gradient-to-br from-yellow-900/20 via-gray-900/80 to-yellow-900/20 backdrop-blur-sm rounded-xl sm:rounded-2xl border-2 border-yellow-500/40 overflow-hidden hover:border-yellow-500/80 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/30 hover:scale-105 w-full max-w-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col items-center justify-center min-h-[250px] sm:min-h-[300px]">
                    <div className="w-full h-40 sm:h-48 md:h-56 flex items-center justify-center mb-6">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-w-full max-h-full object-contain filter drop-shadow-2xl group-hover:scale-110 transition-all duration-500"
                      />
                    </div>
                    <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-yellow-400 text-center">
                      {sponsor.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Sponsors Section */}
          <div className="max-w-7xl mx-auto px-2 sm:px-0">
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-red-400" />
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent uppercase">
                  Our Sponsors
                </h3>
                <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-red-400" />
              </div>
              <div className="w-16 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {otherSponsors.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="group relative bg-gradient-to-br from-red-900/20 via-gray-900/80 to-red-900/20 backdrop-blur-sm rounded-xl border-2 border-red-500/30 overflow-hidden hover:border-red-500/60 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/20 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative p-6 sm:p-8 flex flex-col items-center justify-center min-h-[180px] sm:min-h-[200px]">
                    <div className="w-full h-28 sm:h-32 flex items-center justify-center mb-4">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-w-full max-h-full object-contain filter drop-shadow-lg group-hover:scale-110 transition-all duration-500"
                      />
                    </div>
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-red-400 text-center">
                      {sponsor.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <div className="relative z-20 w-full mt-8 sm:mt-12 md:mt-16">
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

export default Sponsors;
