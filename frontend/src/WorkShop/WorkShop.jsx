import React from 'react'
import { ArrowLeft, Calendar, Clock, MapPin, Users, Star, ExternalLink, Sparkles, Zap } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'

function WorkShop() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const navigate = useNavigate()

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
      description: "Master advanced React concepts including hooks, context API, performance optimization, and modern development patterns.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      skills: ["React Hooks", "Context API", "Performance Optimization", "Testing"]
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
      description: "Learn the core principles of user interface and user experience design, including wireframing, prototyping, and user research.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      skills: ["Wireframing", "Prototyping", "User Research", "Design Systems"]
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
      description: "Comprehensive guide to digital marketing including SEO, social media marketing, content strategy, and analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      skills: ["SEO", "Social Media", "Content Strategy", "Analytics"]
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
      description: "Hands-on workshop covering data analysis, visualization, and machine learning basics using Python and popular libraries.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      skills: ["Python", "Pandas", "Data Visualization", "Machine Learning"]
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
      description: "Build your first mobile app using React Native. Learn navigation, state management, and app deployment.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      skills: ["React Native", "Mobile UI", "State Management", "App Store"]
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
      description: "Learn the fundamentals of starting and running a successful business, from idea validation to funding strategies.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      skills: ["Business Planning", "Funding", "Market Research", "Networking"]
    }
  ]

  const getCategoryColor = (category) => {
    switch (category) {
      case "Development": return "from-blue-500 to-cyan-500"
      case "Design": return "from-purple-500 to-pink-500"
      case "Marketing": return "from-green-500 to-emerald-500"
      case "Data Science": return "from-orange-500 to-yellow-500"
      case "Business": return "from-red-500 to-pink-500"
      default: return "from-gray-500 to-gray-600"
    }
  }

  const handleBack = () => {
    navigate(-1)
  }

  const handleRegister = (workshopId) => {
    console.log('Registering for workshop:', workshopId)
    alert('Registration successful! You will receive a confirmation email shortly.')
  }

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      {/* Main Content */}
      <main className="flex-grow relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
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

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

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
              <Zap className="w-4 h-4 animate-pulse" />
              <span className="animate-pulse">Skill Building</span>
              <Zap className="w-4 h-4 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent uppercase mb-6 animate-gradient">
              Workshops
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Enhance your skills with our expert-led workshops and hands-on learning experiences
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full animate-pulse"></div>
          </div>
        </section>

        {/* Workshops Grid */}
        <section className="py-16 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workshops.map((workshop, index) => (
                <div
                  key={workshop.id}
                  className="relative group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-1000"></div>
                  
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-2 border-cyan-500/20 rounded-2xl overflow-hidden transition-all duration-700 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105">
                    
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
                      <div className={`absolute top-4 left-4 bg-gradient-to-r ${getCategoryColor(workshop.category)} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                        {workshop.category}
                      </div>
                    </div>

                    {/* Workshop Content */}
                    <div className="p-6">
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

                      {/* Workshop Title */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {workshop.title}
                      </h3>

                      {/* Instructor & Rating */}
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-gray-300 font-medium text-sm">
                          by {workshop.instructor}
                        </p>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-gray-300 text-sm">{workshop.rating}</span>
                        </div>
                      </div>

                      {/* Workshop Details */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <Calendar className="w-4 h-4 text-cyan-400" />
                          <span>{workshop.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <Clock className="w-4 h-4 text-cyan-400" />
                          <span>{workshop.time} ({workshop.duration})</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <MapPin className="w-4 h-4 text-cyan-400" />
                          <span>{workshop.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <Users className="w-4 h-4 text-cyan-400" />
                          <span>{workshop.participants} participants</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-2">
                        {workshop.description}
                      </p>

                      {/* Skills */}
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-300 mb-2">What you'll learn:</p>
                        <div className="flex flex-wrap gap-1">
                          {workshop.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 bg-gray-800/50 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Register Button */}
                      <button
                        onClick={() => handleRegister(workshop.id)}
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 font-medium flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
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
  )
}

export default WorkShop