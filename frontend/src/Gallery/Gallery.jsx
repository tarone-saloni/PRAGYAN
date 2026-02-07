import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Camera,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import BackgroundLayer from "../components/BackgroundLayer";

function Gallery() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  // ...existing galleryItems and categories arrays...
  const galleryItems = [
    {
      id: 1,
      title: "Tech Conference 2024",
      category: "Conferences",
      date: "March 15, 2024",
      location: "Convention Center",
      attendees: 500,
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      description:
        "Annual technology conference featuring industry leaders and innovative solutions.",
    },
    {
      id: 2,
      title: "React Workshop",
      category: "Workshops",
      date: "February 28, 2024",
      location: "Tech Hub",
      attendees: 25,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      description:
        "Hands-on React development workshop for intermediate developers.",
    },
    {
      id: 3,
      title: "Startup Networking Event",
      category: "Networking",
      date: "April 10, 2024",
      location: "Business Center",
      attendees: 150,
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
      description:
        "Networking event connecting startups with investors and mentors.",
    },
    {
      id: 4,
      title: "Design Thinking Seminar",
      category: "Seminars",
      date: "January 20, 2024",
      location: "Creative Studio",
      attendees: 75,
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      description:
        "Interactive seminar on design thinking methodologies and practices.",
    },
    {
      id: 5,
      title: "AI & Machine Learning Summit",
      category: "Conferences",
      date: "May 5, 2024",
      location: "Tech Campus",
      attendees: 300,
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      description:
        "Summit exploring the latest trends in artificial intelligence and machine learning.",
    },
    {
      id: 6,
      title: "Digital Marketing Workshop",
      category: "Workshops",
      date: "March 8, 2024",
      location: "Marketing Hub",
      attendees: 40,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      description:
        "Comprehensive workshop on modern digital marketing strategies.",
    },
    {
      id: 7,
      title: "Innovation Awards Ceremony",
      category: "Awards",
      date: "December 15, 2023",
      location: "Grand Hall",
      attendees: 200,
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
      description:
        "Annual ceremony recognizing outstanding innovation in technology.",
    },
    {
      id: 8,
      title: "Women in Tech Panel",
      category: "Panels",
      date: "March 25, 2024",
      location: "Conference Room",
      attendees: 80,
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop",
      description:
        "Panel discussion featuring successful women leaders in technology.",
    },
    {
      id: 9,
      title: "Blockchain Meetup",
      category: "Meetups",
      date: "April 18, 2024",
      location: "Tech Lounge",
      attendees: 60,
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      description:
        "Monthly meetup discussing blockchain technology and cryptocurrency trends.",
    },
  ];

  const categories = [
    "All",
    "Conferences",
    "Workshops",
    "Networking",
    "Seminars",
    "Awards",
    "Panels",
    "Meetups",
  ];

  // ...existing functions...
  const getCategoryColor = (category) => {
    switch (category) {
      case "Conferences":
        return "from-blue-500 to-cyan-500";
      case "Workshops":
        return "from-green-500 to-emerald-500";
      case "Networking":
        return "from-purple-500 to-indigo-500";
      case "Seminars":
        return "from-orange-500 to-yellow-500";
      case "Awards":
        return "from-red-500 to-pink-500";
      case "Panels":
        return "from-pink-500 to-rose-500";
      case "Meetups":
        return "from-indigo-500 to-purple-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const handleBack = () => {
    navigate("/");
  };

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedImage.id,
    );
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredItems.length;
    } else {
      newIndex =
        currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    }

    setSelectedImage(filteredItems[newIndex]);
  };

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
              Home
            </span>
          </button>
        </div>

        <section className="pt-10 pb-8 px-4 relative z-10 text-center">
          <div className="max-w-7xl mx-auto">
            {/* Tagline */}
            <div className="text-xs sm:text-sm md:text-base tracking-[2px] sm:tracking-[3px] text-cyan-400 mb-3 sm:mb-4 uppercase font-medium animate-pulse">
              Multiverse of innovation
            </div>

            {/* Main Image */}
            <div className="my-3 sm:my-4 md:my-5">
              <img
                src="/Pragyaa_main_image.png"
                alt="PRAGYAA 2026"
                className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto drop-shadow-2xl"
              />
            </div>

            {/* Subtitle */}
            <p className="text-sm xs:text-base sm:text-lg md:text-xl tracking-[1px] xs:tracking-[2px] sm:tracking-[3px] uppercase text-gray-300 font-light mt-2">
              "BRIGHTER THAN EVER BEFORE"
            </p>
          </div>
        </section>

        {/* Hero Section with Pragyaa Header */}
        <section className="py-6 px-4 relative z-10 flex flex-col justify-center items-center text-center">
          {/* Gallery subtitle */}
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent uppercase mb-6 animate-gradient transition-all duration-600 ease-out delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Event Gallery
          </h2>

          {/* Description */}
          <p
            className={`text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl tracking-[1px] xs:tracking-[2px] sm:tracking-[3px] my-3 sm:my-4 md:my-5 uppercase text-gray-300 font-light max-w-4xl leading-relaxed transition-all duration-600 ease-out delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            "CAPTURING MOMENTS OF INNOVATION"
          </p>

          {/* Decorative line */}
          <div
            className={`w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full animate-pulse transition-all duration-600 ease-out delay-400 ${
              isLoaded ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>

          {/* Additional decorative elements */}
          <div
            className={`absolute top-1/4 left-4 w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent opacity-30 sm:hidden transition-all duration-500 ease-out delay-500 ${
              isLoaded ? "opacity-30 scale-y-100" : "opacity-0 scale-y-0"
            }`}
          ></div>
          <div
            className={`absolute top-1/4 right-4 w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent opacity-30 sm:hidden transition-all duration-500 ease-out delay-550 ${
              isLoaded ? "opacity-30 scale-y-100" : "opacity-0 scale-y-0"
            }`}
          ></div>

          {/* Mobile-specific glow effects */}
          <div
            className={`absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent pointer-events-none sm:hidden transition-opacity duration-800 ease-out delay-150 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        </section>

        {/* Filter Section */}
        <section className="py-8 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg scale-105"
                      : "bg-gray-900/50 text-gray-400 hover:text-cyan-400 border border-gray-700/50 hover:border-cyan-500/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-8 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="relative group cursor-pointer"
                  onClick={() => openModal(item)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-1000"></div>

                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-2 border-cyan-500/20 rounded-2xl overflow-hidden transition-all duration-700 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105">
                    {/* Image */}
                    <div className="h-64 overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                      {/* Category Badge */}
                      <div
                        className={`absolute top-4 left-4 bg-gradient-to-r ${getCategoryColor(item.category)} text-white px-3 py-1 rounded-full text-xs font-bold`}
                      >
                        {item.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Animated background particles */}
                      {hoveredIndex === index &&
                        [...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                            style={{
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                              animation: `particleFloat ${2 + Math.random() * 3}s infinite ease-in-out`,
                              animationDelay: `${Math.random() * 2}s`,
                              opacity: 0.9,
                            }}
                          />
                        ))}

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {item.title}
                      </h3>

                      {/* Event Details */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <Calendar className="w-4 h-4 text-cyan-400" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <MapPin className="w-4 h-4 text-cyan-400" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <Users className="w-4 h-4 text-cyan-400" />
                          <span>{item.attendees} attendees</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Modal - same as before */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-2 border-cyan-500/30 rounded-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-gray-900/90 hover:bg-gray-800/90 text-cyan-400 rounded-full p-2 transition-all duration-300 hover:scale-110"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-900/90 hover:bg-gray-800/90 text-cyan-400 rounded-full p-2 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-900/90 hover:bg-gray-800/90 text-cyan-400 rounded-full p-2 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>

            {/* Modal Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="h-96 lg:h-auto">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-6">
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getCategoryColor(selectedImage.category)} mb-4`}
                >
                  {selectedImage.category}
                </div>

                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {selectedImage.title}
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    <span>{selectedImage.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span>{selectedImage.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <span>{selectedImage.attendees} attendees</span>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Component */}
      <Footer />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes particleFloat {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.9;
          }
          50% {
            transform: translateY(-30px) scale(1.2);
            opacity: 0.6;
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes glitch {
          0%,
          100% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-glitch {
          animation: glitch 4s ease-in-out infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}

export default Gallery;
