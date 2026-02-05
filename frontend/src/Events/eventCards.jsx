import React, { useState } from "react";
import { Trophy, Users, Phone, X, MapPin } from "lucide-react";

function EventCard({ event, onClick }) {
  return (
    <div
      className="bg-gradient-to-br from-red-900/70 via-gray-900/80 to-red-900/70 border-2 border-red-500/30 rounded-xl overflow-hidden shadow-lg shadow-red-500/10 hover:border-red-500/50 hover:scale-105 transition-all duration-300 cursor-pointer p-4 sm:p-6 flex flex-col"
      onClick={onClick}
    >
      <h3 className="text-base sm:text-lg font-bold text-white mb-2">{event.title}</h3>
      <p className="text-xs sm:text-sm text-red-300 mb-3 sm:mb-4">{event.tagline}</p>

      <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm mb-3 sm:mb-4">
        <div className="flex items-center gap-1 text-yellow-400">
          <Trophy className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="font-semibold">₹{event.prizePool}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-300">
          <span>Entry: ₹{event.entryFee}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-300">
          <Users className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>{event.members} Members</span>
        </div>
      </div>

      {/* View Details Button */}
      <button
        className="mt-auto px-3 sm:px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs sm:text-sm rounded-lg font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow hover:shadow-red-500/40"
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        View Details
      </button>
    </div>
  );
}

/* ------------------------------- EVENT MODAL -------------------------------- */

function EventModal({ event, onClose }) {
  if (!event) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-red-500/50 rounded-xl sm:rounded-2xl max-w-3xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl shadow-red-500/30 my-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="sticky top-2 sm:top-4 right-2 sm:right-4 float-right z-10 p-1.5 sm:p-2 bg-red-600/80 hover:bg-red-600 rounded-full transition-all"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>

        <div className="p-4 sm:p-6 md:p-8">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{event.title}</h2>
            <p className="text-base sm:text-lg text-red-300">{event.tagline}</p>
          </div>

          <div className="mb-4 sm:mb-6">
            <h3 className="text-xs sm:text-sm font-semibold text-red-400 uppercase mb-2">Description</h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{event.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-gray-900/50 rounded-lg p-3 sm:p-4 border border-red-500/20">
              <div className="flex items-center gap-2 text-yellow-400 mb-2">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-[10px] sm:text-xs font-semibold uppercase">Prize Pool</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-white">₹{event.prizePool}</p>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-3 sm:p-4 border border-red-500/20">
              <span className="text-[10px] sm:text-xs font-semibold uppercase text-red-400 block mb-2">Entry Fee</span>
              <p className="text-xl sm:text-2xl font-bold text-white">₹{event.entryFee}</p>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-3 sm:p-4 border border-red-500/20">
              <div className="flex items-center gap-2 text-red-400 mb-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-[10px] sm:text-xs font-semibold uppercase">Team Size</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-white">{event.members} Members</p>
            </div>

            {event.venue && (
              <div className="bg-gray-900/50 rounded-lg p-3 sm:p-4 border border-red-500/20">
                <div className="flex items-center gap-2 text-red-400 mb-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-[10px] sm:text-xs font-semibold uppercase">Venue</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-white">{event.venue}</p>
              </div>
            )}
          </div>

          <div className="bg-gray-900/50 rounded-lg p-3 sm:p-4 border border-red-500/20 mb-4 sm:mb-6">
            <div className="flex items-center gap-2 text-red-400 mb-3">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-semibold uppercase">Coordinators</span>
            </div>
            <div className="space-y-2 sm:space-y-3">
              {event.coordinators.map((coord, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
                  <span className="text-gray-300 font-medium text-sm sm:text-base">{coord.name}</span>
                  <a
                    href={`tel:${coord.phone}`}
                    className="text-red-400 hover:text-red-300 hover:underline transition-colors text-sm sm:text-base"
                  >
                    {coord.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <a
            href={event.registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white text-base sm:text-lg font-bold rounded-xl hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-red-500/50"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------- MAIN GRID EXPORT ------------------------------ */

export default function NeonEventCards({ events = [] }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
      <section className="relative w-full px-2 sm:px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {events.map((event, i) => (
              <EventCard 
                key={i} 
                event={event} 
                onClick={() => setSelectedEvent(event)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}
    </>
  );
}
