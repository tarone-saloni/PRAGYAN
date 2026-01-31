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
    <div className="min-h-screen bg-gray-950 flex flex-col relative">
      {/* Background Layer */}
      <BackgroundLayer />

      {/* Main Content */}
      <main className="flex-grow relative overflow-hidden z-10">
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={handleBack}
            className="group relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl border-2 border-cyan-500/30 rounded-2xl hover:border-cyan-500/60 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            <ArrowLeft className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 group-hover:-translate-x-1" />
            <span className="text-cyan-400 group-hover:text-cyan-300 font-semibold text-sm tracking-wide transition-colors duration-300">
              Back
            </span>
          </button>
        </div>

        <section className="pt-10 pb-8 px-4 relative z-10 text-center">
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

        <section className="py-6 px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Event Schedule
            </h2>
            <p className="text-gray-400"> 14, 15 Feb & 01 March , 2026</p>
          </div>

          {/* Day Tabs */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex justify-center gap-4 flex-wrap">
              {schedule.map((day, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedDay(idx)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedDay === idx
                      ? "bg-gradient-to-r from-cyan-500 to-purple-300 text-white shadow-lg shadow-cyan-500/30"
                      : "bg-gray-900/50 text-gray-400 hover:bg-gray-800 hover:text-cyan-400 border border-gray-700"
                  }`}
                >
                  Day {idx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {schedule.filter((_, idx) => idx === selectedDay).map((day, idx) => (
              <div key={idx} className="bg-gray-900/50 border-2 border-cyan-500/30 rounded-lg overflow-hidden">
                {/* Header Row */}
                <div className="grid grid-cols-12 bg-gradient-to-r from-cyan-900/50 to-purple-900/50 border-b-2 border-cyan-500/30">
                  <div className="col-span-2 border-r-2 border-cyan-500/30 px-4 py-3">
                    <span className="text-sm font-bold text-cyan-400">TIME</span>
                  </div>
                  <div className="col-span-6 border-r-2 border-cyan-500/30 px-4 py-3">
                    <span className="text-sm font-bold text-purple-400">EVENT NAME</span>
                  </div>
                  <div className="col-span-4 px-4 py-3">
                    <span className="text-sm font-bold text-pink-400">LOCATION</span>
                  </div>
                </div>
                
                {/* Event Rows */}
                {day.events.map((event, eventIdx) => (
                  <div
                    key={eventIdx}
                    className={`grid grid-cols-12 hover:bg-cyan-900/20 transition-colors ${
                      eventIdx !== day.events.length - 1 ? 'border-b border-gray-800' : ''
                    }`}
                  >
                    <div className="col-span-2 border-r border-gray-800 px-4 py-3">
                      <div className="flex items-center gap-2 text-cyan-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">{event.time}</span>
                      </div>
                    </div>
                    <div className="col-span-6 border-r border-gray-800 px-4 py-3">
                      <p className="text-white font-medium">{event.name}</p>
                    </div>
                    <div className="col-span-4 px-4 py-3">
                      <div className="flex items-center gap-2 text-purple-300">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{event.venue}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SchedulePage;
