import React from 'react'
import { ArrowLeft, Users, Target, Award, Heart } from 'lucide-react'
import BackgroundLayer from '../components/BackgroundLayer'
import Footer from '../Footer/Footer'

function About() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const stats = [
    {
      id: 1,
      number: "500+",
      label: "Events Organized",
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />
    },
    {
      id: 2,
      number: "10K+",
      label: "Happy Participants",
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
    },
    {
      id: 3,
      number: "50+",
      label: "Partner Organizations",
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
    },
    {
      id: 4,
      number: "5+",
      label: "Years of Excellence",
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8 text-red-700" />
    }
  ]

  const values = [
    {
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />,
      title: "Passion",
      description: "We put our heart into everything we do, ensuring every event is crafted with care and enthusiasm."
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />,
      title: "Community",
      description: "Building strong connections and fostering inclusive environments where everyone feels welcome."
    },
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />,
      title: "Excellence",
      description: "Continuously striving for the highest standards in service delivery and event execution."
    }
  ]

  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-x-hidden">
      {/* Background Layer with StarField and GridLines */}
      <BackgroundLayer />
      
      {/* Main Content */}
      <main className="flex-grow relative z-10">
        {/* Back Button */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
          <button
            onClick={() => window.history.back()}
            className="group relative flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-gray-950 to-gray-900 backdrop-blur-xl border-2 border-red-500/40 rounded-xl sm:rounded-2xl hover:border-red-500/80 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 group-hover:text-red-400 transition-colors duration-300 group-hover:-translate-x-1" />
            <span className="text-red-500 group-hover:text-red-400 font-semibold text-xs sm:text-sm tracking-wide transition-colors duration-300">
              Back
            </span>
          </button>
        </div>

        {/* Title Section */}
        <section className="pt-20 sm:pt-24 md:pt-28 pb-6 sm:pb-8 px-4 relative z-10 text-center">
          <div className="max-w-7xl mx-auto">
            {/* Main title - Adjusted tracking for mobile */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[3px] xs:tracking-[5px] sm:tracking-[8px] md:tracking-[12px] lg:tracking-[15px] my-2 sm:my-3 md:my-4 bg-gradient-to-b from-white via-red-200 to-gray-600 bg-clip-text text-transparent uppercase">
              PRAGYAA
            </h1>

            {/* Tournament subtitle */}
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl tracking-[1px] xs:tracking-[2px] sm:tracking-[3px] uppercase text-gray-300 font-light">
              "BRIGHTER THAN EVER BEFORE"
            </p>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-6 sm:py-8 md:py-10 px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-wider bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent uppercase mb-4 sm:mb-6 animate-gradient">
              About Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
              Discover our story, mission, and the passionate team behind our success in creating exceptional experiences.
            </p>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 mx-auto rounded-full animate-pulse"></div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-8 sm:py-12 md:py-16 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-wider bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent uppercase mb-4 sm:mb-6">
                Our Mission
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
                We are dedicated to creating exceptional experiences that bring people together, 
                foster meaningful connections, and inspire positive change in our community. 
                Through innovative events and thoughtful engagement, we strive to make every 
                moment memorable and impactful.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 sm:py-12 md:py-16 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.id}
                  className="relative group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-1000"></div>
                  
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-2 border-red-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center transition-all duration-700 hover:border-red-500/60 hover:shadow-xl hover:shadow-red-500/30 hover:scale-105">
                    {/* Animated background particles */}
                    {hoveredIndex === index && [...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-red-400 rounded-full"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animation: `particleFloat ${2 + Math.random() * 3}s infinite ease-in-out`,
                          animationDelay: `${Math.random() * 2}s`,
                          opacity: 0.9
                        }}
                      />
                    ))}

                    <div className="flex justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-500">
                      {stat.icon}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-8 sm:py-12 md:py-16 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-2 border-red-500/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 overflow-hidden hover:border-red-500/60 transition-all duration-700">
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent mb-4 sm:mb-6 text-center">
                Our Vision
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                    We envision a world where every event serves as a catalyst for connection, 
                    learning, and growth. Our goal is to become the leading platform that 
                    transforms ordinary gatherings into extraordinary experiences.
                  </p>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Through cutting-edge technology, creative innovation, and unwavering 
                    commitment to excellence, we aim to set new standards in event management 
                    and community engagement.
                  </p>
                </div>
                <div className="h-48 sm:h-56 md:h-64 overflow-hidden rounded-lg relative group">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                    alt="Team collaboration"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-8 sm:py-12 md:py-16 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-wider bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent uppercase mb-4">
                Our Values
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {values.map((value, index) => (
                <div key={index} className="relative group">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-1000"></div>
                  
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-2 border-red-500/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center transition-all duration-700 hover:border-red-500/60 hover:shadow-xl hover:shadow-red-500/30 hover:scale-105">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-gray-800/90 to-gray-700/90 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-500">
                      {value.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-red-400 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
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
      `}</style>
    </div>
  )
}

export default About;