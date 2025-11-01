import React, { useState } from "react";
import { ArrowLeft, Calendar, Clock, MapPin, Users, Star, Heart, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Footer from "../Footer/Footer"

const SchedulePage = () => {
  const navigate = useNavigate()
  const [activeDay, setActiveDay] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const days = [
    { id: 1, date: "Feb 21, 2025", day: "Day 1" },
    { id: 2, date: "Feb 22, 2025", day: "Day 2" },
    { id: 3, date: "Feb 23, 2025", day: "Day 3" },
  ];

  const eventSchedules = {
    1: [
      { id: 1, name: "Opening/Inauguration Event", organizer: "Team Pragyaa", timing: "10 AM - 11.30 AM", venue: "Auditorium" },
      { id: 2, name: "Python For AIML", organizer: "ITSA", timing: "1 PM - 4 PM", venue: "IT Dept" },
      { id: 3, name: "CAD & CATIA", organizer: "PESA", timing: "1 PM - 4 PM", venue: "Prod Dept" },
      { id: 4, name: "Surveying/Resume Building", organizer: "CESA", timing: "1 PM– 4 PM", venue: "Civil Dept" },
      { id: 5, name: "RC Car racing(round 1)", organizer: "PRAGYAA", timing: "2 PM onwards", venue: "Ground" },
      { id: 6, name: "Valorant", organizer: "PRAGYAA", timing: "5 PM onwards", venue: "Coming soon" },
      { id: 7, name: "Paper Presentation (Domain1)", organizer: "PRAGYAA", timing: "5 PM onwards", venue: "A4Hall/Seminar Hall" },
      { id: 8, name: "Math – e - magic", organizer: "BMC", timing: "12 noon – 4 PM", venue: "AB6" },
      { id: 9, name: "Voltage Voyage", organizer: "EESA", timing: "2 PM - 5 PM", venue: "Electrical Dept" },
      { id: 10, name: "Tex Quiz", organizer: "TESA", timing: "2 PM – 5 PM", venue: "Textile Dept" },
      { id: 11, name: "Bridge Building", organizer: "CESA", timing: "3 PM - 6.30 PM", venue: "Civil Dept" },
      { id: 12, name: "Coding Contest", organizer: "ITSA", timing: "5 PM onwards", venue: "IT Dept" },
      { id: 13, name: "BGMI", organizer: "MESA", timing: "5 PM onwards", venue: "IT Dept" },
      { id: 14, name: "Gear Based Puzzle", organizer: "MESA", timing: "5 PM onwards", venue: "Mech Dept" },
      { id: 15, name: "IPL auction", organizer: "PRAGYAA", timing: "7:30 PM Onwards", venue: "Coming soon" },
    ],

    2: [
      { id: 1, name: "Python For AIML", organizer: "PRAGYAA", timing: "10 AM - 2 PM", venue: "IT Dept" },
      { id: 2, name: "CAD & CATIA", organizer: "PESA", timing: "10 AM - 2 PM", venue: "Prod Dept" },
      { id: 3, name: "Surveying/Resume Building", organizer: "CESA", timing: "12 AM - 2PM", venue: "Civil Dept" },
      { id: 4, name: "RC Car Racing(finals)", organizer: "PRAGYAA", timing: "2PM – onwards", venue: "Ground" },
      { id: 5, name: "Pick & Place(round1)", organizer: "PRAGYAA", timing: "2PM – 6PM", venue: "PMC" },
      { id: 6, name: "Boat Racing", organizer: "PRAGYAA", timing: "2PM – 6PM", venue: "PMC" },
      { id: 7, name: "Paper Presentation (Domain2)", organizer: "ELITE", timing: "2 PM - 5 PM", venue: "A4Hall/Seminar Hall" },
      { id: 8, name: "Chem Crafter", organizer: "CHESA", timing: "10 AM onwards", venue: "Chem Dept" },
      { id: 9, name: "Town Planning", organizer: "CESA", timing: "5 PM – 8PM", venue: "Civil Dept" },
      { id: 10, name: "CAD WAR(civil)", organizer: "CESA", timing: "1PM – 4PM", venue: "Civil Dept" },
      { id: 11, name: "Style your Partner", organizer: "TESA", timing: "10 AM onwards", venue: "Textile Dept" },
      { id: 12, name: "Shark Tank", organizer: "PESA", timing: "10 AM – 2PM", venue: "A4 Hall" },
      { id: 13, name: "Astro Quest", organizer: "ANTRIX", timing: "10 AM – 2PM", venue: "A3 Hall" },
      { id: 14, name: "Bridge Buster Challenge", organizer: "HACKIT", timing: "5 PM onwards", venue: "CSE Dept" },
      { id: 15, name: "Mega Quiz", organizer: "ORATORY", timing: "4 PM onwards", venue: "PMC" },
      { id: 16, name: "Tech Quest", organizer: "ELITE", timing: "10 AM onwards", venue: "EXTC Dept" },
      { id: 17, name: "Free fire", organizer: "PRAGYAA", timing: "5 PM onwards", venue: "Coming soon" },
      { id: 18, name: "Chess Programmer", organizer: "PRAGYAA", timing: "5PM – 7PM", venue: "Coming soon" },
    ],

    3: [
      { id: 1, name: "Data Science Workshop", organizer: "PRAGYAA", timing: "12PM - 4 PM", venue: "ML lab CSE/IT" },
      { id: 2, name: "Junior Scientist", organizer: "PRAGYAA", timing: "10 AM Onwards", venue: "Coming soon" },
      { id: 3, name: "Mock Placement", organizer: "PRAGYAA", timing: "10 AM onwards", venue: "Coming soon" },
      { id: 4, name: "Float a Boat", organizer: "CESA", timing: "10 AM onwards", venue: "Civil Dept" },
      { id: 5, name: "Bridge Building Testing", organizer: "CESA", timing: "10 AM onwards", venue: "Civil Dept" },
      { id: 6, name: "CAD WAR", organizer: "MESA", timing: "1 PM - 4 PM", venue: "Mech Dept" },
      { id: 7, name: "Wire Whispering", organizer: "EESA", timing: "1 PM - 4 PM", venue: "Electrical Dept" },
      { id: 8, name: "Chess", organizer: "PRAGYAA", timing: "10 AM onwards", venue: "Coming soon" },
      { id: 9, name: "Chem Crafter", organizer: "CHESA", timing: "10 AM onwards", venue: "Chem Dept" },
      { id: 10, name: "COD", organizer: "PRAGYAA", timing: "10 AM onwards", venue: "Coming soon" },
      { id: 11, name: "Treasure Hunt", organizer: "PRAGYAA", timing: "1 PM – onwards", venue: "Coming soon" },
      { id: 12, name: "Draw your design", organizer: "TESA", timing: "5 PM onwards", venue: "Coming soon" },
      { id: 13, name: "Cultural Events", organizer: "PRAGYAA", timing: "5 PM onwards", venue: "Coming soon" },
    ],
  };

  const handleDayClick = (dayId) => {
    setActiveDay(dayId);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const getOrganizerColor = (organizer) => {
    switch (organizer) {
      case "PRAGYAA": return "from-cyan-500 to-cyan-600"
      case "CESA": return "from-green-500 to-green-600"
      case "MESA": return "from-purple-500 to-purple-600"
      case "EESA": return "from-orange-500 to-orange-600"
      case "ITSA": return "from-red-500 to-red-600"
      case "TESA": return "from-pink-500 to-pink-600"
      case "PESA": return "from-indigo-500 to-indigo-600"
      case "ELITE": return "from-yellow-500 to-yellow-600"
      case "CHESA": return "from-blue-500 to-blue-600"
      case "BMC": return "from-teal-500 to-teal-600"
      case "ANTRIX": return "from-violet-500 to-violet-600"
      case "HACKIT": return "from-emerald-500 to-emerald-600"
      case "ORATORY": return "from-rose-500 to-rose-600"
      default: return "from-gray-500 to-gray-600"
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      {/* Main Content */}
      <main className="flex-grow relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

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

        {/* Hero Section */}
        <section className="py-20 px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-xs tracking-[4px] text-cyan-400 mb-6 uppercase">
              <Heart className="w-4 h-4 animate-pulse" />
              <span className="animate-pulse">Event Timeline</span>
              <Heart className="w-4 h-4 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent uppercase mb-6 animate-gradient">
              Event Schedule
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Complete schedule of all events happening during Pragyaa 2025. Don't miss out on any exciting activities!
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full animate-pulse"></div>
          </div>
        </section>

        {/* Day Selection */}
        <section className="py-8 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center gap-6 mb-12">
              {days.map((day) => (
                <button
                  key={day.id}
                  onClick={() => handleDayClick(day.id)}
                  className={`relative group px-8 py-6 rounded-2xl font-bold transition-all duration-300 flex flex-col items-center min-w-[140px] backdrop-blur-xl border-2 ${
                    activeDay === day.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-cyan-500/60 shadow-lg shadow-cyan-500/30 scale-105'
                      : 'bg-gray-900/50 text-gray-300 border-gray-600/30 hover:bg-gray-800/70 hover:border-cyan-500/40 hover:scale-105'
                  }`}
                >
                  {/* Glow effect for active day */}
                  {activeDay === day.id && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-75 blur-lg"></div>
                  )}
                  
                  <div className="relative z-10">
                    <span className="text-lg font-bold">{day.day}</span>
                    <span className="text-sm opacity-80 block mt-1">{day.date}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Events Schedule */}
        <section className="py-16 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {eventSchedules[activeDay].map((event, index) => (
                <div
                  key={event.id}
                  className="relative group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-1000"></div>
                  
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-2 border-cyan-500/20 rounded-2xl p-6 transition-all duration-700 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105">
                    
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        #{event.id}
                      </span>
                      {/* Organizer Badge */}
                      <div className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getOrganizerColor(event.organizer)}`}>
                        {event.organizer}
                      </div>
                    </div>

                    {/* Event Name */}
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                      {event.name}
                    </h3>

                    {/* Event Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-gray-300 text-sm">
                        <Clock className="w-4 h-4 flex-shrink-0 text-cyan-400" />
                        <span>{event.timing}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300 text-sm">
                        <MapPin className="w-4 h-4 flex-shrink-0 text-purple-400" />
                        <span>{event.venue}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300 text-sm">
                        <Users className="w-4 h-4 flex-shrink-0 text-pink-400" />
                        <span>Organized by {event.organizer}</span>
                      </div>
                    </div>

                    {/* Animated background particles */}
                    {hoveredIndex === index && [...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animation: `particleFloat ${2 + Math.random() * 3}s infinite ease-in-out`,
                          animationDelay: `${Math.random() * 2}s`,
                          opacity: 0.9
                        }}
                      />
                    ))}

                    {/* Action Button */}
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-3 rounded-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 text-sm font-bold hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes particleFloat {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.9; }
          50% { transform: translateY(-30px) scale(1.2); opacity: 0.6; }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default SchedulePage;