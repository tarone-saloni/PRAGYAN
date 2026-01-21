import React, { useState } from "react";
import eventData from "./eventData";
import EventCard from "./eventCards";

import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Footer from "../Footer/Footer";
import BackgroundLayer from "../components/BackgroundLayer";

function EventPage() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("flagship");

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col relative overflow-x-hidden">
      <BackgroundLayer />

      <main className="flex-grow relative z-10">
        {/* Back Button */}
        <div className="absolute top-4 left-4 z-20">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-red-500/40 rounded-xl hover:border-red-400 transition"
          >
            <ArrowLeft className="w-4 h-4 text-red-400" />
            <span className="text-red-400 font-semibold text-sm">Back</span>
          </button>
        </div>

        {/* Title */}
        <section className="pt-24 pb-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent uppercase">
            Events & Experiences
          </h1>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Explore flagship events, workshops, and competitions.
          </p>
        </section>

        {/* Category Filters */}
        <section className="px-4 pb-10">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {Object.entries(eventData).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition ${
                  selectedCategory === key
                    ? "bg-gradient-to-r from-red-500 to-red-600 text-white scale-105"
                    : "bg-gray-900 text-gray-400 border border-gray-700 hover:text-red-400"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Event Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {eventData[selectedCategory]?.events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default EventPage;
