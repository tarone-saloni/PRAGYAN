import React from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  ArrowLeft, 
  ExternalLink,
  Sparkles,
  Trophy,
  Heart
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import BackgroundLayer from '../components/BackgroundLayer';

function EventPage() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      date: "Dec 15, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Convention Center, Mumbai",
      category: "Technology",
      attendees: "500+",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
      description: "Join industry leaders and innovators for a day of cutting-edge technology discussions and networking.",
      price: "₹2,999",
      featured: true,
      tags: ["AI", "Machine Learning", "Innovation"]
    },
    {
      id: 2,
      title: "Digital Marketing Masterclass",
      date: "Dec 20, 2024",
      time: "2:00 PM - 8:00 PM",
      location: "Online Event",
      category: "Marketing",
      attendees: "1000+",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=400&fit=crop",
      description: "Master the art of digital marketing with hands-on workshops and expert insights.",
      price: "₹1,499",
      featured: false,
      tags: ["Digital Marketing", "SEO", "Social Media"]
    },
    {
      id: 3,
      title: "Startup Funding Workshop",
      date: "Dec 25, 2024",
      time: "11:00 AM - 5:00 PM",
      location: "Business Hub, Bangalore",
      category: "Business",
      attendees: "300+",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop",
      description: "Learn how to secure funding for your startup from successful entrepreneurs and VCs.",
      price: "₹3,999",
      featured: true,
      tags: ["Funding", "Venture Capital", "Entrepreneurship"]
    },
    {
      id: 4,
      title: "UI/UX Design Bootcamp",
      date: "Jan 5, 2025",
      time: "9:00 AM - 7:00 PM",
      location: "Design Studio, Delhi",
      category: "Design",
      attendees: "200+",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=400&fit=crop",
      description: "Intensive hands-on bootcamp covering modern UI/UX design principles and tools.",
      price: "₹4,999",
      featured: false,
      tags: ["UI Design", "UX Research", "Figma"]
    },
    {
      id: 5,
      title: "Blockchain & Web3 Conference",
      date: "Jan 10, 2025",
      time: "10:00 AM - 8:00 PM",
      location: "Tech Park, Hyderabad",
      category: "Technology",
      attendees: "800+",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
      description: "Explore the future of blockchain technology and Web3 applications.",
      price: "₹5,999",
      featured: true,
      tags: ["Blockchain", "Web3", "Cryptocurrency"]
    },
    {
      id: 6,
      title: "Content Creator Summit",
      date: "Jan 15, 2025",
      time: "1:00 PM - 9:00 PM",
      location: "Media Center, Chennai",
      category: "Content",
      attendees: "600+",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      description: "Connect with top content creators and learn monetization strategies.",
      price: "₹2,499",
      featured: false,
      tags: ["Content Creation", "Social Media", "Monetization"]
    }
  ];

  const sponsors = [
    { name: "TechCorp", logo: "https://via.placeholder.com/200x80/4338CA/FFFFFF?text=TechCorp", tier: "Platinum" },
    { name: "InnovateLabs", logo: "https://via.placeholder.com/200x80/059669/FFFFFF?text=InnovateLabs", tier: "Gold" },
    { name: "FutureVision", logo: "https://via.placeholder.com/200x80/DC2626/FFFFFF?text=FutureVision", tier: "Silver" },
    { name: "StartupHub", logo: "https://via.placeholder.com/200x80/7C3AED/FFFFFF?text=StartupHub", tier: "Bronze" },
    { name: "DigitalFlow", logo: "https://via.placeholder.com/200x80/EA580C/FFFFFF?text=DigitalFlow", tier: "Bronze" },
    { name: "CodeMasters", logo: "https://via.placeholder.com/200x80/0891B2/FFFFFF?text=CodeMasters", tier: "Silver" }
  ];

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

        {/* Hero Section */}
        <section className="py-20 px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-xs tracking-[4px] text-cyan-400 mb-6 uppercase">
              <Calendar className="w-4 h-4 animate-bounce" />
              <span className="animate-pulse">Upcoming Events</span>
              <Calendar className="w-4 h-4 animate-bounce" style={{ animationDelay: '0.5s' }} />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent uppercase mb-6 animate-gradient">
              Events & Experiences
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Join us for exclusive events, workshops, and networking opportunities designed to accelerate your growth and connect you with industry leaders.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full animate-pulse"></div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className="relative group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Featured badge */}
                  {event.featured && (
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
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                      
                      {/* Category badge */}
                      <div className="absolute top-4 left-4 bg-cyan-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {event.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {event.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {event.description}
                      </p>

                      {/* Event details */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Calendar className="w-4 h-4 text-cyan-400" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Clock className="w-4 h-4 text-cyan-400" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <MapPin className="w-4 h-4 text-cyan-400" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Users className="w-4 h-4 text-cyan-400" />
                          <span>{event.attendees} attendees</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {event.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-gray-800/50 text-cyan-400 text-xs rounded-full border border-cyan-500/30">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                          {event.price}
                        </div>
                        <button className="group/btn relative px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50">
                          <span className="flex items-center gap-2">
                            Register
                            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
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
}

export default EventPage;