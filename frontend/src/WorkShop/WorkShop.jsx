import React from "react";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  ExternalLink,
  Sparkles,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import BackgroundLayer from "../components/BackgroundLayer";
import ComingSoon from "../components/ComingSoon/ComingSoon";

function WorkShop() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const navigate = useNavigate();

  // Toggle this to show/hide coming soon
  const isComingSoon = true; // Set to false to show workshops

  const workshops = [
    {
      id: 1,
      title: "Advanced React Development",
      category: "Development",
      instructor: "Sarah Johnson",
      rating: 4.9,
      duration: "3 hours",
      date: "December 15, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "Tech Hub, Room 201",
      participants: 25,
      price: "$99",
      description:
        "Master advanced React concepts including hooks, context API, performance optimization, and modern development patterns.",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      skills: [
        "React Hooks",
        "Context API",
        "Performance Optimization",
        "Testing",
      ],
    },
    {
      id: 2,
      title: "UI/UX Design Fundamentals",
      category: "Design",
      instructor: "Michael Chen",
      rating: 4.8,
      duration: "4 hours",
      date: "December 18, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Design Studio, Floor 3",
      participants: 20,
      price: "$129",
      description:
        "Learn the core principles of user interface and user experience design, including wireframing, prototyping, and user research.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      skills: ["Wireframing", "Prototyping", "User Research", "Design Systems"],
    },
    {
      id: 3,
      title: "Digital Marketing Strategy",
      category: "Marketing",
      instructor: "Emily Rodriguez",
      rating: 4.7,
      duration: "2.5 hours",
      date: "December 20, 2025",
      time: "9:00 AM - 11:30 AM",
      location: "Conference Room A",
      participants: 30,
      price: "$79",
      description:
        "Comprehensive guide to digital marketing including SEO, social media marketing, content strategy, and analytics.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      skills: ["SEO", "Social Media", "Content Strategy", "Analytics"],
    },
    {
      id: 4,
      title: "Data Science with Python",
      category: "Data Science",
      instructor: "David Kim",
      rating: 4.9,
      duration: "5 hours",
      date: "December 22, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Lab 105",
      participants: 15,
      price: "$149",
      description:
        "Hands-on workshop covering data analysis, visualization, and machine learning basics using Python and popular libraries.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      skills: ["Python", "Pandas", "Data Visualization", "Machine Learning"],
    },
    {
      id: 5,
      title: "Mobile App Development",
      category: "Development",
      instructor: "Lisa Park",
      rating: 4.6,
      duration: "6 hours",
      date: "December 25, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "Mobile Dev Lab",
      participants: 18,
      price: "$179",
      description:
        "Build your first mobile app using React Native. Learn navigation, state management, and app deployment.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      skills: ["React Native", "Mobile UI", "State Management", "App Store"],
    },
    {
      id: 6,
      title: "Entrepreneurship Essentials",
      category: "Business",
      instructor: "James Wilson",
      rating: 4.8,
      duration: "3.5 hours",
      date: "December 28, 2025",
      time: "1:00 PM - 4:30 PM",
      location: "Business Center",
      participants: 40,
      price: "$89",
      description:
        "Learn the fundamentals of starting and running a successful business, from idea validation to funding strategies.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      skills: ["Business Planning", "Funding", "Market Research", "Networking"],
    },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case "Development":
        return "from-red-500 to-red-600";
      case "Design":
        return "from-red-600 to-red-700";
      case "Marketing":
        return "from-red-500 to-red-700";
      case "Data Science":
        return "from-red-600 to-red-800";
      case "Business":
        return "from-red-500 to-red-800";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleRegister = (workshopId) => {
    console.log("Registering for workshop:", workshopId);
    alert(
      "Registration successful! You will receive a confirmation email shortly.",
    );
  };

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col relative">
      {/* Background Layer */}
      <BackgroundLayer />

      {/* Main Content */}
      <main className="flex-grow relative overflow-hidden z-10">
        {/* Back Button */}
        <div className="fixed top-4 sm:top-6 left-4 sm:left-6 z-20">
          <button
            onClick={handleBack}
            className="group relative flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl border-2 border-red-500/30 rounded-xl sm:rounded-2xl hover:border-red-500/60 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 group-hover:text-red-300 transition-colors duration-300 group-hover:-translate-x-1" />
            <span className="text-red-400 group-hover:text-red-300 font-semibold text-xs sm:text-sm tracking-wide transition-colors duration-300">
              Home
            </span>
          </button>
        </div>

        <section className="pt-16 sm:pt-20 md:pt-24 pb-6 sm:pb-8 px-4 relative z-10 text-center">
          <div className="max-w-7xl mx-auto">
            {/* Tagline */}
            <div className="text-xs sm:text-sm md:text-base tracking-[2px] sm:tracking-[3px] text-red-400 mb-3 sm:mb-4 uppercase font-medium animate-pulse">
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
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl tracking-[1px] xs:tracking-[2px] sm:tracking-[3px] uppercase text-gray-300 font-light mt-2">
              "BRIGHTER THAN EVER BEFORE"
            </p>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-4 sm:py-6 px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-[10px] xs:text-xs tracking-[2px] xs:tracking-[3px] sm:tracking-[4px] text-red-400 mb-4 sm:mb-6 uppercase">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
              <span className="animate-pulse">Skill Building</span>
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-wider bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent uppercase mb-4 sm:mb-6 animate-gradient">
              Workshops
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
              Enhance your skills with our expert-led workshops and hands-on
              learning experiences
            </p>
            <div className="w-20 sm:w-28 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-red-400 via-red-500 to-red-600 mx-auto rounded-full animate-pulse"></div>
          </div>
        </section>

        {/* Conditional Rendering */}
        {isComingSoon ? (
          <ComingSoon />
        ) : (
          /* Workshops Grid */
          <section className="py-8 sm:py-12 md:py-16 px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {workshops.map((workshop, index) => (
                  <div
                    key={workshop.id}
                    className="relative group"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-1000"></div>

                    {/* Card */}
                    <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-2 border-red-500/20 rounded-2xl overflow-hidden transition-all duration-700 hover:border-red-500/60 hover:shadow-xl hover:shadow-red-500/30 hover:scale-105">
                      {/* Workshop Image */}
                      <div className="h-48 overflow-hidden relative">
                        <img
                          src={workshop.image}
                          alt={workshop.title}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                        {/* Price Badge */}
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full font-bold text-sm">
                          {workshop.price}
                        </div>

                        {/* Category Badge */}
                        <div
                          className={`absolute top-4 left-4 bg-gradient-to-r ${getCategoryColor(workshop.category)} text-white px-3 py-1 rounded-full text-xs font-bold`}
                        >
                          {workshop.category}
                        </div>
                      </div>

                      {/* Workshop Content */}
                      <div className="p-6">
                        {/* Animated background particles */}
                        {hoveredIndex === index &&
                          [...Array(8)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-1 h-1 bg-red-400 rounded-full"
                              style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animation: `particleFloat ${2 + Math.random() * 3}s infinite ease-in-out`,
                                animationDelay: `${Math.random() * 2}s`,
                                opacity: 0.9,
                              }}
                            />
                          ))}

                        {/* Workshop Title */}
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                          {workshop.title}
                        </h3>

                        {/* Instructor & Rating */}
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-gray-300 font-medium text-sm">
                            by {workshop.instructor}
                          </p>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-gray-300 text-sm">
                              {workshop.rating}
                            </span>
                          </div>
                        </div>

                        {/* Workshop Details */}
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-gray-300 text-sm">
                            <Calendar className="w-4 h-4 text-red-400" />
                            <span>{workshop.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300 text-sm">
                            <Clock className="w-4 h-4 text-red-400" />
                            <span>
                              {workshop.time} ({workshop.duration})
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300 text-sm">
                            <MapPin className="w-4 h-4 text-red-400" />
                            <span>{workshop.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300 text-sm">
                            <Users className="w-4 h-4 text-red-400" />
                            <span>{workshop.participants} participants</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-2">
                          {workshop.description}
                        </p>

                        {/* Skills */}
                        <div className="mb-4">
                          <p className="text-sm font-semibold text-gray-300 mb-2">
                            What you'll learn:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {workshop.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-2 py-1 bg-gray-800/50 text-red-400 text-xs rounded-full border border-red-500/30"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Register Button */}
                        <button
                          onClick={() => handleRegister(workshop.id)}
                          className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg hover:from-red-400 hover:to-red-500 transition-all duration-300 font-medium flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50"
                        >
                          Register Now
                          <ExternalLink size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

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
}

export default WorkShop;
