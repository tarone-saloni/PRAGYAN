import React, { useState, useEffect } from 'react';
import Clock from './Clock/Clock';
import { Calendar, MapPin, Users, Trophy, Mail, Phone, ExternalLink, Instagram, Linkedin, Twitter, Youtube, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MainContent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [vipSlide, setVipSlide] = useState(0);
  const [mentorSlide, setMentorSlide] = useState(0);
  const navigate = useNavigate();

  const eventImages = [
    { img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop", title: "Tech Workshop 2025", desc: "AI & Machine Learning" },
    { img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=500&fit=crop", title: "Cultural Night", desc: "Dance & Music Performances" },
    { img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop", title: "Awards Ceremony", desc: "Recognizing Excellence" },
    { img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop", title: "Robotics Arena", desc: "Innovation & Competition" },
    { img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop", title: "Hackathon Finals", desc: "Code & Create" },
  ];

  const vipGuests = [
    { 
      name: "Dr. Rajesh Kumar", 
      role: "Chief Guest", 
      badge: "Appeared in PRAGYAA 2024",
      desc: "Renowned AI Research Scientist and Former ISRO Director",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    { 
      name: "Prof. Anjali Sharma", 
      role: "Guest of Honor", 
      badge: "Appeared in PRAGYAA 2023",
      desc: "Dean of Engineering, IIT Bombay & Tech Innovation Expert",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    { 
      name: "Mr. Vishal Mane", 
      role: "Sports Icon", 
      badge: "Appeared in PRAGYAA 2025",
      desc: "First player to complete 100 PKL matches, Top Defender",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
  ];

  const mentors = [
    { 
      name: "Dr. S. K. Deshmukh", 
      role: "Director", 
      badge: "Guiding Light",
      desc: "Leading SGGSIET towards excellence in technical education",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    { 
      name: "Dr. P. R. Patil", 
      role: "Dean Academics", 
      badge: "Academic Mentor",
      desc: "Fostering innovation and research culture",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
    },
    { 
      name: "Prof. M. S. Chavan", 
      role: "Faculty Coordinator", 
      badge: "Festival Mentor",
      desc: "Orchestrating PRAGYAA's success year after year",
      img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop"
    },
    { 
      name: "Dr. A. B. Desai", 
      role: "HOD CSE", 
      badge: "Technical Advisor",
      desc: "Driving technical excellence in computer science",
      img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=400&fit=crop"
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % eventImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [eventImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % eventImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + eventImages.length) % eventImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextVipSlide = () => {
    setVipSlide((prev) => (prev + 1) % vipGuests.length);
  };

  const prevVipSlide = () => {
    setVipSlide((prev) => (prev - 1 + vipGuests.length) % vipGuests.length);
  };

  const nextMentorSlide = () => {
    setMentorSlide((prev) => (prev + 1) % mentors.length);
  };

  const prevMentorSlide = () => {
    setMentorSlide((prev) => (prev - 1 + mentors.length) % mentors.length);
  };

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
    <main className="relative z-5 flex flex-col items-center justify-start min-h-screen lg:justify-center lg:min-h-[82vh] text-center px-3 sm:px-4 md:px-6 lg:px-12 xl:px-16 py-6 sm:py-8 lg:py-0">
      
      {/* Hero Section */}
      <div className="w-full max-w-6xl">
        {/* Top tagline - Responsive sizing */}
        <div className={`text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base tracking-[1.5px] xs:tracking-[2px] sm:tracking-[2.5px] md:tracking-[3px] lg:tracking-[3.5px] xl:tracking-[4px] text-red-400 mb-1.5 xs:mb-2 sm:mb-2.5 md:mb-3 lg:mb-3.5 xl:mb-4 uppercase font-medium animate-pulse transition-all duration-500 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}>
          THE QUANTUM NEXUS
        </div>

        {/* Main title - Fully responsive */}
        <h1 className={`text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-black tracking-[4px] xs:tracking-[6px] sm:tracking-[8px] md:tracking-[10px] lg:tracking-[12px] xl:tracking-[15px] 2xl:tracking-[18px] my-2 xs:my-3 sm:my-3.5 md:my-4 lg:my-5 xl:my-6 bg-gradient-to-b from-white via-red-200 to-gray-600 bg-clip-text text-transparent uppercase animate-glitch drop-shadow-2xl transition-all duration-700 ease-out delay-100 leading-tight ${
          isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
        }`}>
          PRAGYAA
        </h1>

        {/* Subtitle - Responsive sizing */}
        <p className={`text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl tracking-[1px] xs:tracking-[1.5px] sm:tracking-[2px] md:tracking-[2.5px] lg:tracking-[3px] xl:tracking-[3.5px] 2xl:tracking-[4px] my-2 xs:my-3 sm:my-3.5 md:my-4 lg:my-5 xl:my-6 uppercase text-gray-300 font-light max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-5xl leading-relaxed transition-all duration-600 ease-out delay-200 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          "BRIGHTER THAN EVER BEFORE"
        </p>

        {/* Clock component - Responsive container */}
        <div className={`mt-3 xs:mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8 w-full max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto transition-all duration-600 ease-out delay-400 ${
          isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'
        }`}>
          <Clock />
        </div>
      </div>

      {/* Mobile Event Details Section - Only visible on small screens up to 775px */}
      <div className={`lg:hidden w-full max-w-md mx-auto mt-6 xs:mt-8 space-y-3 sm:space-y-4 transition-all duration-700 ease-out delay-600 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Event Info Cards */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {/* Date Card */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-red-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg hover:border-red-500/60 transition-all duration-300">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mb-1.5 sm:mb-2 mx-auto" />
            <h3 className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1">Date</h3>
            <p className="text-[10px] sm:text-xs text-white font-semibold leading-tight">{eventDetails.date}</p>
          </div>

          {/* Venue Card */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-red-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg hover:border-red-500/60 transition-all duration-300">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mb-1.5 sm:mb-2 mx-auto" />
            <h3 className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1">Venue</h3>
            <p className="text-[10px] sm:text-xs text-white font-semibold leading-tight">{eventDetails.venue}</p>
          </div>

          {/* Participants Card */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-red-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg hover:border-red-500/60 transition-all duration-300">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mb-1.5 sm:mb-2 mx-auto" />
            <h3 className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1">Participants</h3>
            <p className="text-[10px] sm:text-xs text-white font-semibold leading-tight">{eventDetails.participants}</p>
          </div>

          {/* Events Card */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-red-500/30 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg hover:border-red-500/60 transition-all duration-300">
            <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mb-1.5 sm:mb-2 mx-auto" />
            <h3 className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1">Events</h3>
            <p className="text-[10px] sm:text-xs text-white font-semibold leading-tight">{eventDetails.events}</p>
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
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-red-500/30 rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-lg">
          <h3 className="text-xs sm:text-sm text-red-400 uppercase tracking-wider mb-3 sm:mb-4 font-bold">Quick Access</h3>
          <div className="grid grid-cols-2 gap-2">
            {quickLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => navigate(link.path)}
                className="flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-red-600/80 to-red-700/80 hover:from-red-500/90 hover:to-red-600/90 text-white py-2.5 sm:py-3 px-2 sm:px-3 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
              >
                <link.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="text-[10px] sm:text-xs font-semibold">{link.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-red-500/30 rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-lg">
          <h3 className="text-xs sm:text-sm text-red-400 uppercase tracking-wider mb-2 sm:mb-3 font-bold">Contact Us</h3>
          <div className="space-y-2 sm:space-y-3 text-left">
            <a href={`mailto:${eventDetails.contact.email}`} className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-300 hover:text-red-400 transition-colors duration-300">
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400 flex-shrink-0" />
              <span className="truncate">{eventDetails.contact.email}</span>
            </a>
            <a href={`tel:${eventDetails.contact.phone}`} className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-300 hover:text-red-400 transition-colors duration-300">
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400 flex-shrink-0" />
              <span>{eventDetails.contact.phone}</span>
            </a>
          </div>
        </div>

        {/* Register Button */}
        <button className="w-full bg-gradient-to-r from-red-600 via-red-500 to-pink-500 hover:from-red-500 hover:via-red-400 hover:to-pink-400 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl uppercase tracking-wider text-xs sm:text-sm">
          <span className="flex items-center justify-center gap-2">
            Register Now
            <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </span>
        </button>

        {/* Event Highlights Gallery - Auto-scrolling Carousel */}
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-cyan-500/30 rounded-xl overflow-hidden shadow-lg">
          <div className="p-4 border-b border-cyan-500/20">
            <h3 className="text-sm text-cyan-400 uppercase tracking-wider font-bold">Event Highlights</h3>
            <p className="text-[9px] text-gray-400 mt-1">Glimpses of our spectacular moments</p>
          </div>
          
          <div className="relative h-64 sm:h-72 overflow-hidden group">
            {/* Images */}
            <div className="relative h-full">
              {eventImages.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide
                      ? 'opacity-100 translate-x-0 scale-100'
                      : index < currentSlide
                      ? 'opacity-0 -translate-x-full scale-95'
                      : 'opacity-0 translate-x-full scale-95'
                  }`}
                >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h4 className="text-base sm:text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 border border-cyan-500/30 hover:border-cyan-500 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-cyan-400" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 border border-cyan-500/30 hover:border-cyan-500 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-cyan-400" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {eventImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? 'w-8 h-2 bg-cyan-400'
                      : 'w-2 h-2 bg-gray-500 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* About PRAGYAA - Enhanced */}
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-red-500/30 rounded-xl p-5 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></div>
            <h3 className="text-sm text-red-400 uppercase tracking-wider font-bold">About The Festival</h3>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed text-left mb-3">
            PRAGYAA is the flagship National Level Annual Technical Festival of SGGSIET, bringing together the brightest minds 
            in technology, innovation, and creativity.
          </p>
          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-red-500/20">
            <div className="text-center">
              <div className="text-lg font-bold text-red-400">50+</div>
              <div className="text-[9px] text-gray-400 uppercase">Events</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-cyan-400">5000+</div>
              <div className="text-[9px] text-gray-400 uppercase">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-pink-400">3</div>
              <div className="text-[9px] text-gray-400 uppercase">Days</div>
            </div>
          </div>
        </div>

        {/* VIP Spotlight - Carousel */}
        <div className="bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-md border border-orange-500/20 rounded-xl overflow-hidden shadow-2xl">
          <div className="p-4 border-b border-orange-500/20 bg-gradient-to-r from-orange-500/10 to-transparent">
            <h3 className="text-sm sm:text-base text-orange-400 uppercase tracking-wider font-bold">VIP Spotlight</h3>
            <p className="text-[9px] sm:text-[10px] text-gray-400 mt-1">Distinguished guests who graced our festival</p>
          </div>
          
          <div className="relative py-8 px-2">
            <div className="flex items-center justify-center gap-2 sm:gap-4">
              {/* Previous Button */}
              <button
                onClick={prevVipSlide}
                className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-10"
                aria-label="Previous VIP"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>

              {/* Cards Container */}
              <div className="relative w-full max-w-xs sm:max-w-sm h-80 sm:h-96 overflow-hidden">
                {vipGuests.map((vip, index) => {
                  const position = (index - vipSlide + vipGuests.length) % vipGuests.length;
                  const isCenter = position === 0;
                  const isLeft = position === vipGuests.length - 1;
                  const isRight = position === 1;

                  return (
                    <div
                      key={index}
                      className={`absolute top-1/2 left-1/2 transition-all duration-500 ease-out ${
                        isCenter
                          ? 'translate-x-[-50%] translate-y-[-50%] scale-100 z-30 opacity-100'
                          : isLeft
                          ? 'translate-x-[-120%] translate-y-[-50%] scale-75 z-10 opacity-40 blur-sm'
                          : isRight
                          ? 'translate-x-[20%] translate-y-[-50%] scale-75 z-10 opacity-40 blur-sm'
                          : 'translate-x-[-50%] translate-y-[-50%] scale-50 z-0 opacity-0'
                      }`}
                      style={{ width: isCenter ? '280px' : '240px' }}
                    >
                      <div className={`relative rounded-2xl overflow-hidden ${
                        isCenter 
                          ? 'border-2 border-orange-400 shadow-2xl shadow-orange-500/50' 
                          : 'border border-gray-700'
                      }`}>
                        {/* Image */}
                        <div className="relative h-72 sm:h-80">
                          <img 
                            src={vip.img} 
                            alt={vip.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                          
                          {/* Badge */}
                          <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-orange-500/90 backdrop-blur-sm rounded-full">
                            <p className="text-[9px] sm:text-[10px] text-white font-bold uppercase tracking-wide">{vip.badge}</p>
                          </div>

                          {/* Content */}
                          <div className="absolute bottom-0 left-0 right-0 p-5">
                            <h4 className="text-lg sm:text-xl font-black text-white mb-1">{vip.name}</h4>
                            <p className="text-xs sm:text-sm text-orange-300 font-semibold mb-2">{vip.role}</p>
                            <p className="text-[10px] sm:text-xs text-gray-300 leading-relaxed">{vip.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={nextVipSlide}
                className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-10"
                aria-label="Next VIP"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Our Guiding Lights - Carousel */}
        <div className="bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-md border border-pink-500/20 rounded-xl overflow-hidden shadow-2xl">
          <div className="p-4 border-b border-pink-500/20 bg-gradient-to-r from-pink-500/10 to-transparent">
            <h3 className="text-sm sm:text-base text-pink-400 uppercase tracking-wider font-bold">Our Guiding Lights</h3>
            <p className="text-[9px] sm:text-[10px] text-gray-400 mt-1">The visionaries who make PRAGYAA legendary</p>
          </div>
          
          <div className="relative py-8 px-2">
            <div className="flex items-center justify-center gap-2 sm:gap-4">
              {/* Previous Button */}
              <button
                onClick={prevMentorSlide}
                className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-10"
                aria-label="Previous Mentor"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>

              {/* Cards Container */}
              <div className="relative w-full max-w-xs sm:max-w-sm h-80 sm:h-96 overflow-hidden">
                {mentors.map((mentor, index) => {
                  const position = (index - mentorSlide + mentors.length) % mentors.length;
                  const isCenter = position === 0;
                  const isLeft = position === mentors.length - 1;
                  const isRight = position === 1;

                  return (
                    <div
                      key={index}
                      className={`absolute top-1/2 left-1/2 transition-all duration-500 ease-out ${
                        isCenter
                          ? 'translate-x-[-50%] translate-y-[-50%] scale-100 z-30 opacity-100'
                          : isLeft
                          ? 'translate-x-[-120%] translate-y-[-50%] scale-75 z-10 opacity-40 blur-sm'
                          : isRight
                          ? 'translate-x-[20%] translate-y-[-50%] scale-75 z-10 opacity-40 blur-sm'
                          : 'translate-x-[-50%] translate-y-[-50%] scale-50 z-0 opacity-0'
                      }`}
                      style={{ width: isCenter ? '280px' : '240px' }}
                    >
                      <div className={`relative rounded-2xl overflow-hidden ${
                        isCenter 
                          ? 'border-2 border-pink-400 shadow-2xl shadow-pink-500/50' 
                          : 'border border-gray-700'
                      }`}>
                        {/* Image */}
                        <div className="relative h-72 sm:h-80">
                          <img 
                            src={mentor.img} 
                            alt={mentor.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                          
                          {/* Badge */}
                          <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-pink-500/90 backdrop-blur-sm rounded-full">
                            <p className="text-[9px] sm:text-[10px] text-white font-bold uppercase tracking-wide">{mentor.badge}</p>
                          </div>

                          {/* Content */}
                          <div className="absolute bottom-0 left-0 right-0 p-5">
                            <h4 className="text-lg sm:text-xl font-black text-white mb-1">{mentor.name}</h4>
                            <p className="text-xs sm:text-sm text-pink-300 font-semibold mb-2">{mentor.role}</p>
                            <p className="text-[10px] sm:text-xs text-gray-300 leading-relaxed">{mentor.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={nextMentorSlide}
                className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg z-10"
                aria-label="Next Mentor"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer for Mobile */}
        <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-sm border border-red-500/20 rounded-xl p-5 shadow-lg">
          <div className="text-center mb-4">
            <h2 className="text-xl font-black tracking-wider text-white mb-1">PRAGYAA 2026</h2>
            <p className="text-[9px] text-gray-400 uppercase tracking-wide">National Level Annual Technical Festival</p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-3 mb-4">
            <a 
              href="https://www.instagram.com/sggspragyaa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-pink-500/30 hover:border-pink-500 bg-gray-800/50 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-pink-400" />
            </a>
            <a 
              href="https://www.linkedin.com/company/pragyaa-sggs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-blue-500/30 hover:border-blue-500 bg-gray-800/50 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-blue-400" />
            </a>
            <a 
              href="https://x.com/sggspragyaa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-cyan-500/30 hover:border-cyan-500 bg-gray-800/50 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-cyan-400" />
            </a>
            <a 
              href="https://youtube.com/@pragyaa-sggsiet7271" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-red-500/30 hover:border-red-500 bg-gray-800/50 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 text-red-400" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-2 mb-4 text-[10px]">
            {['Events', 'Schedule', 'Gallery', 'Contact'].map((link, index) => (
              <button 
                key={index}
                onClick={() => navigate(`/${link.toLowerCase()}`)}
                className="text-gray-400 hover:text-red-400 transition-colors duration-300 uppercase tracking-wide"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-3 border-t border-gray-700">
            <p className="text-[9px] text-gray-500 text-center uppercase tracking-wider">
              © 2026 PRAGYAA | All Rights Reserved
            </p>
          </div>
        </div>

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