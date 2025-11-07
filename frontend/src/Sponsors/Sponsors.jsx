import React from 'react'
import { ExternalLink, ArrowLeft, Sparkles, Heart, Trophy, Crown, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import BackgroundLayer from '../components/BackgroundLayer'
import ComingSoon from '../components/ComingSoon/ComingSoon'

function Sponsors() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const navigate = useNavigate()

  // Toggle this to show/hide coming soon
  const isComingSoon = true; // Set to false to show sponsors

  const sponsors = [
    {
      id: 1,
      name: "TechCorp Industries",
      tier: "Platinum Sponsor",
      description: "Leading technology solutions provider specializing in innovative software development and digital transformation services.",
      website: "https://techcorp.com",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      featured: true
    },
    {
      id: 2,
      name: "Global Finance Group",
      tier: "Gold Sponsor",
      description: "Premier financial services company offering comprehensive banking, investment, and wealth management solutions worldwide.",
      website: "https://globalfinance.com",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      featured: true
    },
    {
      id: 3,
      name: "Green Energy Solutions",
      tier: "Gold Sponsor",
      description: "Pioneering renewable energy company committed to sustainable power solutions and environmental conservation initiatives.",
      website: "https://greenenergy.com",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop",
      featured: false
    },
    {
      id: 4,
      name: "MediCare Plus",
      tier: "Silver Sponsor",
      description: "Trusted healthcare provider delivering quality medical services and advanced patient care across multiple specialties.",
      website: "https://medicareplus.com",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
      featured: false
    },
    {
      id: 5,
      name: "Education First",
      tier: "Silver Sponsor",
      description: "Educational technology platform revolutionizing learning experiences through innovative digital tools and resources.",
      website: "https://educationfirst.com",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
      featured: false
    },
    {
      id: 6,
      name: "AutoDrive Motors",
      tier: "Bronze Sponsor",
      description: "Automotive excellence with cutting-edge vehicle manufacturing and next-generation mobility solutions.",
      website: "https://autodrive.com",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop",
      featured: false
    }
  ]

  const getTierColor = (tier) => {
    if (tier.includes("Platinum")) return "from-gray-300 to-gray-100"
    if (tier.includes("Gold")) return "from-yellow-400 to-yellow-500"
    if (tier.includes("Silver")) return "from-gray-400 to-gray-500"
    return "from-orange-500 to-orange-600"
  }

  const getTierIcon = (tier) => {
    if (tier.includes("Platinum")) return <Crown className="w-3 h-3" />
    if (tier.includes("Gold")) return <Trophy className="w-3 h-3" />
    if (tier.includes("Silver")) return <Star className="w-3 h-3" />
    return <Heart className="w-3 h-3" />
  }

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col relative">
      {/* Background Layer */}
      <BackgroundLayer />
      
      {/* Main Content */}
      <main className="flex-grow relative overflow-hidden z-10">
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={() => navigate(-1)}
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

        {/* Hero Section */}
        <section className="py-6 px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent uppercase mb-6 animate-gradient">
              Our Sponsors
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Thank you to our amazing partners who make everything possible. Together, we're building the future of innovation.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full animate-pulse"></div>
          </div>
        </section>

        {/* Conditional Rendering */}
        {isComingSoon ? (
          <ComingSoon />
        ) : (
          /* Sponsors Grid */
          <section className="py-16 px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sponsors.map((sponsor, index) => (
                  <div
                    key={sponsor.id}
                    className="relative group"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Featured badge */}
                    {sponsor.featured && (
                      <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Featured
                      </div>
                    )}

                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-1000"></div>
                    
                    {/* Card */}
                    <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-2 border-cyan-500/20 rounded-2xl overflow-hidden transition-all duration-700 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105">
                      
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={sponsor.image}
                          alt={sponsor.name}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                        
                        {/* Tier badge */}
                        <div className={`absolute top-4 left-4 bg-gradient-to-r ${getTierColor(sponsor.tier)} text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1`}>
                          {getTierIcon(sponsor.tier)}
                          {sponsor.tier}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {sponsor.name}
                        </h3>
                        
                        <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                          {sponsor.description}
                        </p>

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

                        {/* Website Button */}
                        <a
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn relative w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
                        >
                          <span>Visit Website</span>
                          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
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

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

export default Sponsors