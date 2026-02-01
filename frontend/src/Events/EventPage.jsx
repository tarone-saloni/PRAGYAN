import React, { useState } from "react";
import eventData from "./eventData";
import NeonEventCards from "./eventCards";
import Background from "../components/background";
import BackgroundLayer from "../components/BackgroundLayer";
import Footer from "../Footer/Footer";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function EventPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("flagship");

  const currentEvents = eventData[selectedCategory]?.events || [];

  const uniqueTitles = Array.from(
    new Set(currentEvents.map((e) => e.title.split("(")[0].trim()))
  );

  return (
    <>
      
      <Background />
      <BackgroundLayer />

      <div className="relative min-h-screen bg-gray-950 overflow-x-hidden">
        <main className="relative z-10">
          {/* Back Button */}
          <div className="fixed top-4 left-4 z-30">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 backdrop-blur border border-red-500/40 rounded-xl hover:border-red-400 transition"
            >
              <ArrowLeft className="w-4 h-4 text-red-400" />
              <span className="text-red-400 font-semibold text-sm">Back</span>
            </button>
          </div>

          {/* Title */}
          <section className="pt-15 pb-8 text-center">
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent uppercase">
              Events & Experiences
            </h1>
            <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
              Explore flagship events, workshops, and competitions.
            </p>
          </section>

          {/* Category Filters */}
          <section className="px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(eventData).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-8 py-4 rounded-xl text-lg font-semibold transition ${
                    selectedCategory === key
                      ? "bg-gradient-to-r from-red-500 to-red-600 text-white scale-105"
                      : "bg-gray-900 text-gray-400 border border-gray-700 hover:text-red-400 "
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* 🔥 TRUE MASONRY — NO GAPS */}
            <div
              className="
              max-w-7xl mx-auto
              columns-1
              md:columns-2
              xl:columns-3
              gap-16
              space-y-10
            "
            
            >
              {uniqueTitles.map((title) => {
                const filtered = currentEvents.filter((e) =>
                  e.title.startsWith(title)
                );

                return (
                  <section
                    key={title}
                    className="break-inside-avoid"
                  >
                    <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-2 shadow-[10px_10px_30px_rgba(0,0,0,0.55)]
                    hover:shadow-[0_40px_120px_rgba(0,255,255,0.35)] tracking-wider">
                      {title}
                    </h2>

                    <NeonEventCards events={filtered} />
                  </section>
                );
              })}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
