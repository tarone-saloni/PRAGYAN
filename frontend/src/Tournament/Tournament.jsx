import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import BackgroundLayer from "../components/BackgroundLayer";
import ComingSoon from "../components/ComingSoon/ComingSoon";

function Tournament() {
  const navigate = useNavigate();

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

        {/* Header Section with PRAGYAA title */}
        <section className="pt-20 pb-8 px-4 relative z-10 text-center">
          <div className="max-w-7xl mx-auto">
            {/* Main title */}
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[8px] xs:tracking-[10px] sm:tracking-[12px] md:tracking-[15px] my-3 sm:my-4 bg-gradient-to-b from-white via-cyan-200 to-gray-600 bg-clip-text text-transparent uppercase">
              PRAGYAA
            </h1>

            {/* Tournament subtitle */}
            <p className="text-sm xs:text-base sm:text-lg md:text-xl tracking-[1px] xs:tracking-[2px] sm:tracking-[3px] uppercase text-gray-300 font-light">
              "BRIGHTER THAN EVER BEFORE"
            </p>
          </div>
        </section>

        {/* Coming Soon Component */}
        <ComingSoon />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Tournament;
