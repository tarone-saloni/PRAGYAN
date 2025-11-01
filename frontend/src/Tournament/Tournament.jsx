import React from 'react';
import { 
  Trophy,
  Gamepad2,
  Users,
  Calendar,
  Clock,
  MapPin,
  Star,
  ArrowLeft,
  ExternalLink,
  Sparkles,
  Zap,
  Award,
  Target,
  Medal,
  Crown,
  Swords
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';

function Tournament() {
  
  const navigate = useNavigate();

  const winners = [
    {
      tournament: "Apex Legends Championship 2024",
      team: "Thunder Esports",
      prize: "₹5,00,000",
      members: ["Phoenix", "Viper", "Sage", "Reyna"],
      date: "Nov 15, 2024"
    },
    {
      tournament: "PUBG Mobile India Series",
      team: "Royal Challengers",
      prize: "₹3,50,000",
      members: ["Alpha", "Beta", "Gamma", "Delta"],
      date: "Oct 28, 2024"
    },
    {
      tournament: "CS:GO Regional Championship",
      team: "Cyber Warriors",
      prize: "₹4,20,000",
      members: ["Storm", "Blaze", "Frost", "Nova", "Titan"],
      date: "Oct 10, 2024"
    }
  ];
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
            onClick={() => navigate(-1)}
            className="group relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl border-2 border-cyan-500/30 rounded-2xl hover:border-cyan-500/60 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            <ArrowLeft className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 group-hover:-translate-x-1" />
            <span className="text-cyan-400 group-hover:text-cyan-300 font-semibold text-sm tracking-wide transition-colors duration-300">
              Back
            </span>
          </button>
        </div>



        {/* Winners Section */}
        <section className="py-16 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-xs tracking-[4px] text-cyan-400 mb-6 uppercase">
                <Medal className="w-4 h-4 animate-pulse" />
                <span>Hall of Fame</span>
                <Medal className="w-4 h-4 animate-pulse" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent uppercase mb-4">
                Recent Winners
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Celebrating our champions who dominated the battlefield
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {winners.map((winner, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500">
                      <Trophy className="w-8 h-8 text-black" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                      {winner.tournament}
                    </h3>
                    
                    <div className="text-2xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">
                      {winner.team}
                    </div>
                    
                    <div className="text-lg font-semibold text-cyan-400 mb-3">
                      {winner.prize}
                    </div>
                    
                    <div className="text-sm text-gray-400 mb-3">
                      {winner.date}
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Team Members</div>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {winner.members.map((member, memberIndex) => (
                          <span key={memberIndex} className="px-2 py-1 bg-gray-800/50 text-yellow-400 text-xs rounded-full border border-yellow-500/30">
                            {member}
                          </span>
                        ))}
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

export default Tournament;