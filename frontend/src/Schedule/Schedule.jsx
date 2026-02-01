import React, { useState } from "react";
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import BackgroundLayer from "../components/BackgroundLayer";

const SchedulePage = () => {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState(0);

  const handleBack = () => {
    navigate(-1);
  };

  const schedule = [
    {
      day: "Day 1",
      events: [
        { time: "09:00 AM", name: "Hackathon Kickoff", venue: "Tech Hub Auditorium" },
        { time: "10:00 AM", name: "Gaming Tournament", venue: "Gaming Arena" },
        { time: "02:00 PM", name: "AI & ML Workshop", venue: "Lab Complex" },
        { time: "03:00 PM", name: "Design Thinking", venue: "Innovation Lab" },
        { time: "06:00 PM", name: "Cultural Night", venue: "Main Auditorium" },
        { time: "07:00 PM", name: "Tech Quiz", venue: "Seminar Hall B" },
      ],
    },
    {
      day: "Day 2",
      events: [
        { time: "09:00 AM", name: "Web Development", venue: "Computer Lab 1" },
        { time: "10:00 AM", name: "Robotics Workshop", venue: "Robotics Lab" },
        { time: "01:00 PM", name: "Startup Pitch", venue: "Entrepreneurship Cell" },
        { time: "02:00 PM", name: "Art Exhibition", venue: "Gallery Hall" },
        { time: "05:00 PM", name: "Dance Battle", venue: "Open Air Theatre" },
        { time: "07:00 PM", name: "E-Sports", venue: "Gaming Zone" },
      ],
    },
    {
      day: "Day 3",
      events: [
        { time: "09:00 AM", name: "Cybersecurity", venue: "Security Lab" },
        { time: "10:00 AM", name: "Blockchain Talk", venue: "Conference Hall" },
        { time: "01:00 PM", name: "Innovation Showcase", venue: "Exhibition Center" },
        { time: "02:00 PM", name: "Photography", venue: "Campus Grounds" },
        { time: "06:00 PM", name: "Celebrity Night", venue: "Main Stage" },
        { time: "08:00 PM", name: "Prize Distribution", venue: "Main Auditorium" },
      ],
    },
  ];

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

        {/* Schedule Section */}
        <section className="py-3 sm:py-4 md:py-6 px-4 relative z-10 flex flex-col justify-center items-center text-center">
          {/* Schedule Title */}
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wider bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent uppercase mb-3 sm:mb-4 md:mb-6 animate-gradient">
            Event Schedule
          </h2>

          {/* Description */}
          <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg tracking-[1px] xs:tracking-[1.5px] sm:tracking-[2px] md:tracking-[3px] my-1.5 sm:my-2 md:my-3 lg:my-4 uppercase text-gray-300 font-light max-w-4xl leading-relaxed">
            14, 15 Feb & 01 March , 2026
          </p>

          {/* Decorative line */}
          <div className="w-20 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 mx-auto rounded-full animate-pulse mb-8"></div>
        </section>

        {/* Day Tabs & Schedule */}
        <section className="py-3 sm:py-4 md:py-6 lg:py-8 px-3 sm:px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Day Tabs */}
            <div className="flex justify-center gap-4 flex-wrap mb-8">
              {schedule.map((day, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedDay(idx)}
                  className={`px-2.5 xs:px-3 sm:px-4 md:px-6 py-1.5 xs:py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-semibold text-[10px] xs:text-xs sm:text-sm md:text-base transition-all duration-300 whitespace-nowrap ${
                    selectedDay === idx
                      ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/50 scale-105"
                      : "bg-gray-900/50 text-gray-400 hover:text-red-400 border border-gray-800 hover:border-red-500/50"
                  }`}
                >
                  Day {idx + 1}
                </button>
              ))}
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {schedule.filter((_, idx) => idx === selectedDay).map((day, idx) => (
                <div key={idx} className="bg-gradient-to-br from-red-900/70 via-gray-900/80 to-red-900/70 border-2 border-red-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-red-500/10">
                {/* Header Row */}
                <div className="grid grid-cols-12 bg-gradient-to-r from-red-900/50 to-red-900/50 border-b-2 border-red-500/30">
                  <div className="col-span-2 border-r-2 border-red-500/30 px-4 py-3">
                    <span className="text-sm font-bold text-red-400">TIME</span>
                  </div>
                  <div className="col-span-6 border-r-2 border-red-500/30 px-4 py-3">
                    <span className="text-sm font-bold text-red-400">EVENT NAME</span>
                  </div>
                  <div className="col-span-4 px-4 py-3">
                    <span className="text-sm font-bold text-red-400">LOCATION</span>
                  </div>
                </div>
                {/* Event Rows */}
                {day.events.map((event, eventIdx) => (
                  <div
                    key={eventIdx}
                    className={`grid grid-cols-12 hover:bg-red-900/20 transition-colors ${
                      eventIdx !== day.events.length - 1 ? 'border-b border-gray-800' : ''
                    }`}
                  >
                    <div className="col-span-2 border-r border-gray-800 px-4 py-3">
                      <div className="flex items-center gap-2 text-red-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">{event.time}</span>
                      </div>
                    </div>
                    <div className="col-span-6 border-r border-gray-800 px-4 py-3">
                      <p className="text-white font-medium">{event.name}</p>
                    </div>
                    <div className="col-span-4 px-4 py-3">
                      <div className="flex items-center gap-2 text-red-300">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{event.venue}</span>
                      </div>
                    </div>
                  </div>
                ))}
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
};

export default SchedulePage;
