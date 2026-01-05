import React, { useState, useEffect } from 'react';
import Clock from './Clock/Clock';
import { Calendar, MapPin, Users, Trophy, Mail, Phone, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MainContent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // Event information
  const eventDetails = {
    date: "January 15-17, 2026",
    venue: "NIT Tiruchirappalli",
    participants: "5000+ Expected",
    events: "50+ Events",
    contact: {
      email: "pragyaa@nitt.edu",
      phone: "+91 1234567890"
    }
  };

  const quickLinks = [
    { name: 'Events', path: '/events', icon: Trophy },
    { name: 'Workshops', path: '/workshops', icon: Users },
    { name: 'Schedule', path: '/schedule', icon: Calendar },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <main className="relative z-5 flex flex-col items-center justify-start min-h-screen md:justify-center md:min-h-[82vh] text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-0">
      
      {/* Hero Section */}
      <div className="w-full max-w-6xl">
        {/* Top tagline - Responsive sizing */}
        <div className={`text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base tracking-[2px] sm:tracking-[2.5px] md:tracking-[3px] lg:tracking-[3.5px] xl:tracking-[4px] text-red-400 mb-2 sm:mb-2.5 md:mb-3 lg:mb-3.5 xl:mb-4 uppercase font-medium animate-pulse transition-all duration-500 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}>
          THE QUANTUM NEXUS
        </div>

        {/* Main title - Fully responsive */}
        <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-black tracking-[6px] sm:tracking-[8px] md:tracking-[10px] lg:tracking-[12px] xl:tracking-[15px] 2xl:tracking-[18px] my-3 sm:my-3.5 md:my-4 lg:my-5 xl:my-6 bg-gradient-to-b from-white via-red-200 to-gray-600 bg-clip-text text-transparent uppercase animate-glitch drop-shadow-2xl transition-all duration-700 ease-out delay-100 leading-tight ${
          isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
        }`}>
          PRAGYAA
        </h1>

        {/* Subtitle - Responsive sizing */}
        <p className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl tracking-[1.5px] sm:tracking-[2px] md:tracking-[2.5px] lg:tracking-[3px] xl:tracking-[3.5px] 2xl:tracking-[4px] my-3 sm:my-3.5 md:my-4 lg:my-5 xl:my-6 uppercase text-gray-300 font-light max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-5xl leading-relaxed transition-all duration-600 ease-out delay-200 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          "BRIGHTER THAN EVER BEFORE"
        </p>

        {/* Clock component - Responsive container */}
        <div className={`mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto transition-all duration-600 ease-out delay-400 ${
          isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'
        }`}>
          <Clock />
        </div>
      </div>

      {/* Mobile Event Details Section - Only visible on small screens */}
      <div className={`md:hidden w-full max-w-md mx-auto mt-8 space-y-4 transition-all duration-700 ease-out delay-600 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Event Info Cards */}
        <div className="grid grid-cols-2 gap-3">
          {/* Date Card */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-red-500/30 rounded-xl p-4 shadow-lg hover:border-red-500/60 transition-all duration-300">
            <Calendar className="w-6 h-6 text-red-400 mb-2 mx-auto" />
            <h3 className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Date</h3>
            <p className="text-xs text-white font-semibold leading-tight">{eventDetails.date}</p>
          </div>

          {/* Venue Card */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-red-500/30 rounded-xl p-4 shadow-lg hover:border-red-500/60 transition-all duration-300">
            <MapPin className="w-6 h-6 text-red-400 mb-2 mx-auto" />
            <h3 className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Venue</h3>
            <p className="text-xs text-white font-semibold leading-tight">{eventDetails.venue}</p>
          </div>

          {/* Participants Card */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-red-500/30 rounded-xl p-4 shadow-lg hover:border-red-500/60 transition-all duration-300">
            <Users className="w-6 h-6 text-red-400 mb-2 mx-auto" />
            <h3 className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Participants</h3>
            <p className="text-xs text-white font-semibold leading-tight">{eventDetails.participants}</p>
          </div>

          {/* Events Card */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-red-500/30 rounded-xl p-4 shadow-lg hover:border-red-500/60 transition-all duration-300">
            <Trophy className="w-6 h-6 text-red-400 mb-2 mx-auto" />
            <h3 className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Events</h3>
            <p className="text-xs text-white font-semibold leading-tight">{eventDetails.events}</p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-red-500/30 rounded-xl p-5 shadow-lg">
          <h3 className="text-sm text-red-400 uppercase tracking-wider mb-3 font-bold">About PRAGYAA 2K26</h3>
          <p className="text-xs text-gray-300 leading-relaxed text-left">
            The flagship cultural and technical festival of NIT Trichy. Join us for three days of innovation, 
            creativity, and excitement with workshops, competitions, performances, and networking opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-red-500/30 rounded-xl p-5 shadow-lg">
          <h3 className="text-sm text-red-400 uppercase tracking-wider mb-4 font-bold">Quick Access</h3>
          <div className="grid grid-cols-2 gap-2">
            {quickLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => navigate(link.path)}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600/80 to-red-700/80 hover:from-red-500/90 hover:to-red-600/90 text-white py-3 px-3 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
              >
                <link.icon className="w-4 h-4" />
                <span className="text-xs font-semibold">{link.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-red-500/30 rounded-xl p-5 shadow-lg">
          <h3 className="text-sm text-red-400 uppercase tracking-wider mb-3 font-bold">Contact Us</h3>
          <div className="space-y-3 text-left">
            <a href={`mailto:${eventDetails.contact.email}`} className="flex items-center gap-3 text-xs text-gray-300 hover:text-red-400 transition-colors duration-300">
              <Mail className="w-4 h-4 text-red-400" />
              <span>{eventDetails.contact.email}</span>
            </a>
            <a href={`tel:${eventDetails.contact.phone}`} className="flex items-center gap-3 text-xs text-gray-300 hover:text-red-400 transition-colors duration-300">
              <Phone className="w-4 h-4 text-red-400" />
              <span>{eventDetails.contact.phone}</span>
            </a>
          </div>
        </div>

        {/* Register Button */}
        <button className="w-full bg-gradient-to-r from-red-600 via-red-500 to-pink-500 hover:from-red-500 hover:via-red-400 hover:to-pink-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl uppercase tracking-wider text-sm">
          <span className="flex items-center justify-center gap-2">
            Register Now
            <ExternalLink className="w-4 h-4" />
          </span>
        </button>

        {/* Additional spacing at bottom for mobile */}
        <div className="h-8"></div>
      </div>

      {/* Decorative elements - Hidden on mobile, visible on larger screens */}
      <div className={`hidden md:block absolute top-1/4 left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 w-0.5 sm:w-1 h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24 bg-gradient-to-b from-red-400 to-transparent opacity-30 transition-all duration-500 ease-out delay-500 ${
        isLoaded ? 'opacity-30 scale-y-100' : 'opacity-0 scale-y-0'
      }`}></div>
      <div className={`hidden md:block absolute top-1/4 right-4 sm:right-6 md:right-8 lg:right-12 xl:right-16 w-0.5 sm:w-1 h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24 bg-gradient-to-b from-red-400 to-transparent opacity-30 transition-all duration-500 ease-out delay-550 ${
        isLoaded ? 'opacity-30 scale-y-100' : 'opacity-0 scale-y-0'
      }`}></div>
      
      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-radial from-red-500/5 via-transparent to-transparent pointer-events-none transition-opacity duration-800 ease-out delay-150 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </main>
  );
}