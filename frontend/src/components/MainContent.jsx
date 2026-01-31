import React, { useState, useEffect } from "react";
import Clock from "./Clock/Clock";
import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import Director from '../assets/director-manesh-kokare.jpg'
import Dean from '../assets/dean-sb-dethe.jpg'
import fac_Cor from '../assets/Atul_Shine_sir.webp'

export default function MainContent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [vipSlide, setVipSlide] = useState(0);
  const [mentorSlide, setMentorSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const navigate = useNavigate();

  const eventImages = [
    {
      img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
      title: "Tech Workshop 2025",
      desc: "AI & Machine Learning",
    },
    {
      img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=500&fit=crop",
      title: "Cultural Night",
      desc: "Dance & Music Performances",
    },
    {
      img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop",
      title: "Awards Ceremony",
      desc: "Recognizing Excellence",
    },
    {
      img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop",
      title: "Robotics Arena",
      desc: "Innovation & Competition",
    },
    {
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop",
      title: "Hackathon Finals",
      desc: "Code & Create",
    },
  ];

  const vipGuests = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Chief Guest",
      desc: "Renowned AI Research Scientist and Former ISRO Director",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      name: "Prof. Anjali Sharma",
      role: "Guest of Honor",
      desc: "Dean of Engineering, IIT Bombay & Tech Innovation Expert",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      name: "Mr. Vishal Mane",
      role: "Sports Icon",
      desc: "First player to complete 100 PKL matches, Top Defender",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
  ];

  const mentors = [
    {
      name: "Manesh Kokare",
      role: "SGGSIE&T ",
      badge: "Director",
      desc: "Leading SGGSIET towards excellence in technical education",
      img: Director,
    },
    {
      name: "Prof.S.B.Dethe",
      role: "Dean",
      badge: "Student Affairs",
      desc: "Fostering innovation and research culture",
      img: Dean,
    },
    {
      name: "Dr.A.S.Shinde",
      role: "Faculty Coordinator",
      badge: "Festival Mentor",
      desc: "Orchestrating PRAGYAA's success year after year",
      img: fac_Cor,
    },
    {
      name: "Dr. A. B. Desai",
      role: "Faculty Coordinator",
      badge: "Technical Advisor",
      desc: "Driving technical excellence in computer science",
      img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=400&fit=crop",
    },
  ];

  const eventHighlights = [
    {
      quote:
        "PRAGYAA 2025 witnessed groundbreaking tech innovations with over 50 events spanning robotics, AI hackathons, and cultural performances. The energy and enthusiasm of 5000+ participants made it unforgettable!",
      name: "Robotics Competition 2025",
      designation: "Technical Innovation at its Peak",
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    },
    {
      quote:
        "The hackathon finale brought together brilliant minds solving real-world problems. Teams worked tirelessly for 24 hours, creating solutions that impressed industry experts and secured job offers on the spot.",
      name: "Code Sprint Hackathon",
      designation: "24 Hours of Pure Innovation",
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
    },
  ];

  const sponsors = [
    {
      name: "TechCorp Industries",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop",
    },
    {
      name: "Global Finance Group",
      img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=400&fit=crop",
    },
    {
      name: "Green Energy Solutions",
      img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=400&fit=crop",
    },
    {
      name: "MediCare Plus",
      img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=400&fit=crop",
    },
    {
      name: "Education First",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop",
    },
    {
      name: "AutoDrive Motors",
      img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=400&fit=crop",
    },
  ];

  const faqs = [
    {
      question: "What are the accommodation arrangements?",
      answer:
        "For boys accommodation facilities are available at the Gurdwara for free. For girls accommodation facilities are available at SGGS girls hostel.",
    },
    {
      question: "What is the exact location of the event?",
      answer:
        "The event will be held at SGGSIE&T Vishnupuri, Nanded, Maharashtra. The campus is easily accessible from the Nanded railway station and bus stand.",
    },
    {
      question: "Is registration fee refundable?",
      answer:
        "No, the registration fee is non-refundable. However, it can be transferred to another participant from the same institution with prior approval.",
    },
    {
      question: "Is there any on the spot registration available?",
      answer:
        "Yes, on-the-spot registration is available for select events, subject to availability. However, pre-registration is highly recommended to ensure your participation.",
    },
    {
      question: "What is arrangement of food?",
      answer:
        "Food arrangements will be available on campus throughout the event. Multiple food stalls and canteens will be operational serving breakfast, lunch, dinner, and snacks at reasonable prices.",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    );

    const sections = document.querySelectorAll("[data-animate-section]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

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
    setCurrentSlide(
      (prev) => (prev - 1 + eventImages.length) % eventImages.length,
    );
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

  const eventDetails = {
    date: "Feb 27, 28 & Mar 1, 2026",
    venue: "SGGSIE&T Vishnupuri, Nanded",
    participants: "5000+ Expected",
    events: "30+ Events",
    contact: {
      email: "pragyaa@sggs.ac.in",
      phone: "+91 1234567890",
    },
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToMap = () => {
    document.getElementById("map-section")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="relative z-5 flex flex-col items-center justify-start flex-grow min-[780px]:justify-center text-center px-3 min-[480px]:px-0 md:px-6 min-[780px]:px-12 xl:px-16 py-6 sm:py-8 min-[780px]:py-0 w-full">
        <div className="w-full max-w-6xl min-[480px]:max-w-full min-[780px]:max-w-6xl min-[480px]:px-3">
          <div
            className={`text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs min-[780px]:text-[10px] lg:text-xs xl:text-sm tracking-[1.5px] xs:tracking-[2px] sm:tracking-[2.5px] md:tracking-[3px] min-[780px]:tracking-[2px] lg:tracking-[2.5px] xl:tracking-[3px] text-red-400 mb-1.5 xs:mb-2 sm:mb-2.5 md:mb-3 min-[780px]:mb-1.5 lg:mb-2 xl:mb-3 uppercase font-medium animate-pulse transition-all duration-500 ease-out ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            THE QUANTUM NEXUS
          </div>

          <h1
            className={`text-4xl xs:text-5xl sm:text-6xl md:text-7xl min-[780px]:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black tracking-[4px] xs:tracking-[6px] sm:tracking-[8px] md:tracking-[10px] min-[780px]:tracking-[8px] lg:tracking-[10px] xl:tracking-[12px] 2xl:tracking-[15px] my-2 xs:my-3 sm:my-3.5 md:my-4 min-[780px]:my-2 lg:my-3 xl:my-4 bg-gradient-to-b from-white via-red-200 to-gray-600 bg-clip-text text-transparent uppercase animate-glitch drop-shadow-2xl transition-all duration-700 ease-out delay-100 leading-tight ${
              isLoaded
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-95"
            }`}
          >
            PRAGYAA
          </h1>

          <p
            className={`text-[10px] xs:text-xs sm:text-sm md:text-base min-[780px]:text-xs lg:text-sm xl:text-base 2xl:text-lg tracking-[1px] xs:tracking-[1.5px] sm:tracking-[2px] md:tracking-[2.5px] min-[780px]:tracking-[1.5px] lg:tracking-[2px] xl:tracking-[2.5px] 2xl:tracking-[3px] my-2 xs:my-3 sm:my-3.5 md:my-4 min-[780px]:my-1.5 lg:my-2 xl:my-3 uppercase text-gray-300 font-light max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg min-[780px]:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto leading-relaxed transition-all duration-600 ease-out delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            "BRIGHTER THAN EVER BEFORE"
          </p>

          <div
            className={`mt-3 xs:mt-4 sm:mt-5 md:mt-6 min-[780px]:mt-3 lg:mt-4 xl:mt-5 w-full max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-md min-[480px]:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl mx-auto transition-all duration-600 ease-out delay-400 ${
              isLoaded
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-90"
            }`}
          >
            <Clock />
          </div>
        </div>

        <div
          className={`block max-[778px]:block min-[779px]:hidden w-full max-w-md min-[480px]:max-w-full mx-auto mt-6 xs:mt-8 min-[480px]:px-3 transition-all duration-700 ease-out delay-600 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
            <button
              onClick={() => navigate("/schedule")}
              className="p-3 sm:p-4 bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-lg transition-all duration-300 cursor-pointer hover:bg-white/10 hover:border-red-400/50 hover:scale-105 w-full"
            >
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mb-1.5 sm:mb-2 mx-auto" />
              <h3 className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1">
                Schedule
              </h3>
              <p className="text-[10px] sm:text-xs text-white font-semibold leading-tight">
                View Events
              </p>
            </button>

            <button
              onClick={scrollToMap}
              className="p-3 sm:p-4 bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-lg transition-all duration-300 cursor-pointer hover:bg-white/10 hover:border-red-400/50 hover:scale-105 w-full"
            >
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mb-1.5 sm:mb-2 mx-auto" />
              <h3 className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1">
                Venue
              </h3>
              <p className="text-[10px] sm:text-xs text-white font-semibold leading-tight">
                {eventDetails.venue}
              </p>
            </button>

            <div className="p-3 sm:p-4 bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-red-400/50">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mb-1.5 sm:mb-2 mx-auto" />
              <h3 className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1">
                Participants
              </h3>
              <p className="text-[10px] sm:text-xs text-white font-semibold leading-tight">
                {eventDetails.participants}
              </p>
            </div>

            <div className="p-3 sm:p-4 bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-red-400/50">
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mb-1.5 sm:mb-2 mx-auto" />
              <h3 className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mb-0.5 sm:mb-1">
                Events
              </h3>
              <p className="text-[10px] sm:text-xs text-white font-semibold leading-tight">
                {eventDetails.events}
              </p>
            </div>
          </div>

          <div
            id="about-section"
            data-animate-section
            className={`p-5 bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-lg transition-all duration-700 ${
              visibleSections.has("about-section")
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <h3 className="text-sm text-red-400 uppercase tracking-wider mb-3 font-bold">
              About PRAGYAA 2K26
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed text-left">
              PRAGYAA is a national-level technical fiesta by SGGSIE&T, Nanded,
              where students compete in techno-social events focused on
              technology for societal welfare. With themes highlighting human
              welfare, it offers diverse competitions, from junior science to
              robotics, fostering excellence in technology.
            </p>
          </div>
        </div>

        <div
          id="vip-section"
          data-animate-section
          className={`block max-[778px]:block min-[779px]:hidden w-full max-w-md min-[480px]:max-w-full mx-auto mt-3 sm:mt-4 min-[480px]:px-3 transition-all duration-700 ${
            visibleSections.has("vip-section")
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-20"
          }`}
        >
          <div className="p-4 sm:p-6 border-b border-red-900/30 bg-gradient-to-r from-red-200/20 via-pink-500/10 to-transparent rounded-t-2xl">
            <h3 className="text-base sm:text-lg text-red-700 uppercase tracking-wider font-bold text-center">
              VIP Spotlight
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-1 text-center">
              Distinguished guests who graced our festival
            </p>
          </div>

          <div className="relative py-12 sm:py-16 px-4 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-b-2xl">
            <div className="relative flex items-center justify-center">
              {/* Previous Button - Positioned Absolutely */}
              <button
                onClick={prevVipSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-pink-600 hover:from-red-400 hover:to-pink-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl shadow-red-500/50 hover:shadow-red-500/70 z-40"
                aria-label="Previous VIP"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </button>

              <div className="relative w-full max-w-sm sm:max-w-md min-h-[400px] sm:min-h-[450px]">
                {vipGuests.map((vip, index) => {
                  const position =
                    (index - vipSlide + vipGuests.length) % vipGuests.length;
                  const isCenter = position === 0;
                  const isLeft = position === vipGuests.length - 1;
                  const isRight = position === 1;

                  return (
                    <div
                      key={index}
                      className={`absolute top-1/2 left-1/2 transition-all duration-700 ease-out ${
                        isCenter
                          ? "translate-x-[-50%] translate-y-[-50%] scale-100 z-30 opacity-100"
                          : isLeft
                            ? "translate-x-[-140%] translate-y-[-50%] scale-70 z-10 opacity-20 blur-md"
                            : isRight
                              ? "translate-x-[40%] translate-y-[-50%] scale-70 z-10 opacity-20 blur-md"
                              : "translate-x-[-50%] translate-y-[-50%] scale-50 z-0 opacity-0"
                      }`}
                      style={{ width: isCenter ? "300px" : "260px" }}
                    >
                      <div
                        className={`relative rounded-3xl overflow-hidden backdrop-blur-sm h-[400px] sm:h-[450px] ${
                          isCenter
                            ? "border-4 border-red-400 shadow-xl shadow-red-300/40"
                            : "border-2 border-gray-700/50"
                        }`}
                      >
                        <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800">
                          <img
                            src={vip.img}
                            alt={vip.name}
                            className="w-full h-full object-cover object-center"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                          {/* Top Badge */}
                          {/* <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-red-500/40 backdrop-blur-md rounded-full border border-red-400/60 shadow-lg shadow-red-500/30">
                            <p className="text-xs sm:text-sm text-red-200 font-bold uppercase tracking-wider text-center">
                              {vip.badge}
                            </p>
                          </div> */}

                          {/* Bottom Content */}
                          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                            <h4 className="text-lg sm:text-xl font-black text-white mb-1 tracking-wide">
                              {vip.name}
                            </h4>
                            <p className="text-sm text-gray-300 font-semibold mb-2">
                              {vip.role}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed line-clamp-2">
                              {vip.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Next Button - Positioned Absolutely */}
              <button
                onClick={nextVipSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-400 to-pink-400 hover:from-red-400 hover:to-pink-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl shadow-red-4  00/50 hover:shadow-red-400/70 z-40"
                aria-label="Next VIP"
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {vipGuests.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setVipSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === vipSlide
                      ? "w-8 bg-gradient-to-r from-red-500 to-pink-500"
                      : "w-2 bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          id="highlights-section"
          data-animate-section
          className={`block max-[778px]:block min-[779px]:hidden w-full max-w-md min-[480px]:max-w-full mx-auto mt-3 sm:mt-4 min-[480px]:px-3 overflow-hidden transition-all duration-700 ${
            visibleSections.has("highlights-section")
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-20"
          }`}
        >
          <div className="p-4 border-b border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-transparent">
            <h3 className="text-sm sm:text-base text-cyan-400 uppercase tracking-wider font-bold">
              Event Highlights
            </h3>
            <p className="text-[9px] sm:text-[10px] text-gray-400 mt-1">
              Reliving the magic of past editions
            </p>
          </div>

          <div className="py-2">
            <AnimatedTestimonials
              testimonials={eventHighlights}
              autoplay={true}
            />
          </div>
        </div>

        <div
          id="mentors-section"
          data-animate-section
          className={`block max-[778px]:block min-[779px]:hidden w-full max-w-md min-[480px]:max-w-full mx-auto mt-3 sm:mt-4 min-[480px]:px-3 overflow-hidden transition-all duration-700 ${
            visibleSections.has("mentors-section")
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-20"
          }`}
        >
          <div className="p-4 border-b border-pink-500/20 bg-gradient-to-r from-pink-500/10 to-transparent">
            <h3 className="text-sm sm:text-base text-pink-400 uppercase tracking-wider font-bold">
              Our Guiding Lights
            </h3>
            <p className="text-[9px] sm:text-[10px] text-gray-400 mt-1">
              The visionaries who make PRAGYAA legendary
            </p>
          </div>

          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {mentors.map((mentor, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center text-center p-4 bg-gradient-to-br from-gray-900/20 to-gray-800/10 rounded-xl border-2 border-pink-500/30 hover:border-pink-500/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30 hover:bg-gradient-to-br hover:from-gray-800/40 hover:to-gray-700/30 backdrop-blur-xl"
                >
                  <div className="relative mb-3">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-3 border-pink-500/50 group-hover:border-pink-400 transition-all duration-500 shadow-lg shadow-pink-500/20 group-hover:shadow-pink-500/60 group-hover:shadow-2xl">
                      <img
                        src={mentor.img}
                        alt={mentor.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-3"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-500/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-pink-500/90 group-hover:bg-pink-500 backdrop-blur-sm rounded-full whitespace-nowrap transition-all duration-300 group-hover:scale-110 shadow-md">
                      <p className="text-[7px] sm:text-[8px] text-white font-bold uppercase tracking-wide">
                        {mentor.badge}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1 transition-all duration-300 group-hover:translate-y-[-4px]">
                    <h4 className="text-xs sm:text-sm md:text-base font-bold text-white leading-tight group-hover:text-pink-300 transition-colors duration-300">
                      {mentor.name}
                    </h4>
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-pink-300 font-semibold group-hover:text-pink-200 transition-colors duration-300">
                      {mentor.role}
                    </p>
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-400 leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                      {mentor.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          id="sponsors-section"
          data-animate-section
          className={`block max-[778px]:block min-[779px]:hidden w-full max-w-md min-[480px]:max-w-full mx-auto mt-3 sm:mt-4 min-[480px]:px-3 overflow-hidden transition-all duration-700 ${
            visibleSections.has("sponsors-section")
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-20"
          }`}
        >
          <div className="p-4 border-b border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-transparent">
            <h3 className="text-sm sm:text-base text-purple-400 uppercase tracking-wider font-bold text-center">
              Our Sponsors
            </h3>
            <p className="text-[9px] sm:text-[10px] text-gray-400 mt-1 text-center">
              Powered by our esteemed partners
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border border-purple-500/30 hover:border-purple-500/50 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
                >
                  <img
                    src={sponsor.img}
                    alt={sponsor.name}
                    className="w-full h-24 object-cover rounded-lg transition-all duration-500 group-hover:scale-105"
                  />
                  <p className="mt-3 text-xs sm:text-sm font-semibold text-white text-center group-hover:text-purple-300 transition-colors">
                    {sponsor.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          id="faq-section"
          data-animate-section
          className={`block max-[778px]:block min-[779px]:hidden w-full max-w-md min-[480px]:max-w-full mx-auto mt-3 sm:mt-4 min-[480px]:px-3 overflow-hidden transition-all duration-700 ${
            visibleSections.has("faq-section")
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-20"
          }`}
        >
          <div className="p-4 border-b border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-transparent">
            <h3 className="text-sm sm:text-base text-blue-400 uppercase tracking-wider font-bold text-center">
              FAQ
            </h3>
            <p className="text-[9px] sm:text-[10px] text-gray-400 mt-1 text-center">
              Frequently Asked Questions
            </p>
          </div>

          <div className="p-4 sm:p-6">
            <div className="space-y-3 max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/20 to-gray-800/10 backdrop-blur-xl border border-blue-500/20 rounded-lg overflow-hidden hover:border-blue-500/40 transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left hover:bg-blue-500/5 transition-all duration-300"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-semibold text-white pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-blue-400 flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-blue-500/20 bg-blue-500/5">
                      <p className="text-[10px] sm:text-xs md:text-sm text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          id="map-section"
          data-animate-section
          className={`block max-[778px]:block min-[779px]:hidden w-full max-w-md min-[480px]:max-w-full mx-auto mt-3 sm:mt-4 mb-6 min-[480px]:px-3 overflow-hidden transition-all duration-700 ${
            visibleSections.has("map-section")
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-20"
          }`}
        >
          <div className="p-4 border-b border-green-500/20 bg-gradient-to-r from-green-500/10 to-transparent">
            <h3 className="text-sm sm:text-base text-green-400 uppercase tracking-wider font-bold text-center">
              Our Location
            </h3>
            <p className="text-[9px] sm:text-[10px] text-gray-400 mt-1 text-center">
              Find us on the map
            </p>
          </div>

          <div className="p-4 sm:p-6">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.8919886453847!2d77.30847831490152!3d19.15976098704085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d7a33d2e8a8d%3A0x4e5f5f5e5f5e5f5e!2sShri%20Guru%20Gobind%20Singhji%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1642000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64 sm:h-80 md:h-96"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://maps.google.com/?q=476V+J6R+Shri+Guru+Gobind+Singhji+Institute+of+Engineering+and+Technology,+Guru+Tegh+Bahadurji+Marg,+Vishnupuri,+Nanded,+Maharashtra+431606"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/50"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        <div
          className={`hidden md:block absolute top-1/4 left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 w-0.5 sm:w-1 h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24 bg-gradient-to-b from-red-400 to-transparent opacity-30 transition-all duration-500 ease-out delay-500 ${
            isLoaded ? "opacity-30 scale-y-100" : "opacity-0 scale-y-0"
          }`}
        ></div>
        <div
          className={`hidden md:block absolute top-1/4 right-4 sm:right-6 md:right-8 lg:right-12 xl:right-16 w-0.5 sm:w-1 h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24 bg-gradient-to-b from-red-400 to-transparent opacity-30 transition-all duration-500 ease-out delay-550 ${
            isLoaded ? "opacity-30 scale-y-100" : "opacity-0 scale-y-0"
          }`}
        ></div>

        <div
          className={`absolute inset-0 bg-gradient-radial from-red-500/5 via-transparent to-transparent pointer-events-none transition-opacity duration-800 ease-out delay-150 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </main>

      <footer className="w-full bg-gradient-to-br from-black/40 to-gray-900/30 backdrop-blur-xl border-t border-red-500/30 shadow-2xl mt-auto min-[780px]:hidden">
        <div className="max-w-7xl mx-auto px-5 pt-8 pb-4">
          <div className="text-center mb-4">
            <h2 className="text-xl font-black tracking-wider text-white mb-1">
              PRAGYAA 2026
            </h2>
            <p className="text-[9px] text-gray-400 uppercase tracking-wide">
              National Level Annual Technical Festival
            </p>
          </div>

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

          <div className="mb-4 pb-4 border-b border-gray-700 max-w-md mx-auto">
            <h3 className="text-xs text-red-400 uppercase tracking-wider mb-3 font-bold text-center">
              Contact Us
            </h3>
            <div className="space-y-2 text-left">
              <a
                href={`mailto:${eventDetails.contact.email}`}
                className="flex items-center gap-2 text-[10px] text-gray-400 hover:text-red-400 transition-colors duration-300 group"
              >
                <Mail className="w-3.5 h-3.5 text-red-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="truncate">{eventDetails.contact.email}</span>
              </a>
              <a
                href={`tel:${eventDetails.contact.phone}`}
                className="flex items-center gap-2 text-[10px] text-gray-400 hover:text-red-400 transition-colors duration-300 group"
              >
                <Phone className="w-3.5 h-3.5 text-red-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span>{eventDetails.contact.phone}</span>
              </a>
              <div className="flex items-center gap-2 text-[10px] text-gray-400 group">
                <MapPin className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                <span className="leading-relaxed">{eventDetails.venue}</span>
              </div>
            </div>
          </div>

          <div className="pt-3 pb-3 border-t border-gray-700">
            <p className="text-[9px] text-gray-500 text-center uppercase tracking-wider">
              © 2026 PRAGYAA | All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

      <button
        onClick={scrollToTop}
        className="md:hidden fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-red-500/50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-white group-hover:translate-y-[-2px] transition-transform duration-300" />
      </button>
    </div>
  );
}
