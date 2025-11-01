import React from "react";
import {
  Linkedin,
  Mail,
  Instagram,
  Sparkles,
  ArrowLeft,
  Heart,
  ExternalLink,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import BackgroundLayer from "../components/BackgroundLayer";

export default function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "Alex Quantum",
      role: "Lead Developer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      email: "alex@pragyaa.com",
    },
    {
      name: "Sarah Nexus",
      role: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=500&h=500&fit=crop&crop=face",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      email: "sarah@pragyaa.com",
    },
    {
      name: "Max Cyber",
      role: "Tech Architect",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop&crop=face",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      email: "max@pragyaa.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col relative">
      {/* Background Layer */}
      <BackgroundLayer />
      
      {/* Main Content Container */}
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
              <Sparkles
                className="w-4 h-4 animate-spin"
                style={{ animationDuration: "3s" }}
              />
              <span className="animate-pulse">Meet The Innovators</span>
              <Sparkles
                className="w-4 h-4 animate-spin"
                style={{
                  animationDuration: "3s",
                  animationDirection: "reverse",
                }}
              />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent uppercase mb-6 animate-gradient">
              Our Team
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Meet the brilliant minds behind our innovation. Together, we're building the future of technology.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full animate-pulse"></div>
          </div>
        </section>

        {/* Team Cards Grid */}
        <section className="py-16 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="relative group w-full max-w-sm"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Mega glowing border effect */}
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-1000 animate-pulse"></div>

                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border-2 border-cyan-500/20 rounded-2xl p-6 overflow-hidden transition-all duration-700 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105 w-full min-h-[420px] flex flex-col">
                    {/* Background gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                    {/* Animated background particles */}
                    {hoveredIndex === index &&
                      [...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                          style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `particleFloat ${
                              2 + Math.random() * 3
                            }s infinite ease-in-out`,
                            animationDelay: `${Math.random() * 2}s`,
                            opacity: 0.9,
                          }}
                        />
                      ))}

                    {/* Profile Image Container */}
                    <div className="flex justify-center mb-6">
                      <div className="relative w-32 h-32">
                        {/* Multiple rotating borders */}
                        <div
                          className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-spin opacity-90"
                          style={{ animationDuration: "5s" }}
                        ></div>
                        <div
                          className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500 animate-spin opacity-70"
                          style={{
                            animationDuration: "3s",
                            animationDirection: "reverse",
                          }}
                        ></div>

                        {/* Image */}
                        <div className="absolute inset-0 rounded-full overflow-hidden bg-gray-800 shadow-xl ring-2 ring-cyan-500/30 group-hover:ring-cyan-500/60 transition-all duration-700">
                          <img
                            src={member.image}
                            alt={`${member.name} - ${member.role}`}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:brightness-110 group-hover:contrast-110"
                            onError={(e) => {
                              e.target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`;
                            }}
                          />
                          {/* Image overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        {/* Multiple pulse effects */}
                        <div className="absolute -inset-2 rounded-full bg-cyan-400/30 animate-ping opacity-50"></div>
                        <div
                          className="absolute -inset-1 rounded-full bg-purple-400/30 animate-ping opacity-40"
                          style={{ animationDelay: "0.5s" }}
                        ></div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-grow flex flex-col justify-center text-center">
                      {/* Name with enhanced styling */}
                      <h2 className="text-2xl font-black mb-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transform transition-all duration-500 group-hover:scale-110 tracking-wide">
                        {member.name}
                      </h2>

                      {/* Role with glow effect */}
                      <div className="relative mb-6">
                        <p className="text-cyan-400 text-sm tracking-[2px] uppercase opacity-90 font-bold relative z-10">
                          {member.role}
                        </p>
                        <div className="absolute inset-0 text-cyan-400 text-sm tracking-[2px] uppercase font-bold blur-md opacity-50">
                          {member.role}
                        </div>
                      </div>

                      {/* Divider line */}
                      <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-6 group-hover:w-24 transition-all duration-500"></div>
                    </div>

                    {/* Social Links Section */}
                    <div className="flex justify-center gap-3">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="relative w-10 h-10 rounded-full bg-gradient-to-br from-gray-800/90 to-gray-700/90 border border-cyan-500/40 flex items-center justify-center hover:bg-gradient-to-br hover:from-cyan-500/30 hover:to-cyan-600/30 hover:border-cyan-400 hover:scale-125 hover:rotate-12 transition-all duration-500 group/icon shadow-lg hover:shadow-cyan-500/60"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="w-5 h-5 text-cyan-400 group-hover/icon:text-cyan-300 transition-colors duration-300" />
                          <div className="absolute inset-0 rounded-full bg-cyan-400/30 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative w-10 h-10 rounded-full bg-gradient-to-br from-gray-800/90 to-gray-700/90 border border-blue-500/40 flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500/30 hover:to-blue-600/30 hover:border-blue-400 hover:scale-125 hover:rotate-12 transition-all duration-500 group/icon shadow-lg hover:shadow-blue-500/60"
                          aria-label={`${member.name}'s LinkedIn profile`}
                        >
                          <Linkedin className="w-5 h-5 text-blue-400 group-hover/icon:text-blue-300 transition-colors duration-300" />
                          <div className="absolute inset-0 rounded-full bg-blue-400/30 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                        </a>
                      )}
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative w-10 h-10 rounded-full bg-gradient-to-br from-gray-800/90 to-gray-700/90 border border-pink-500/40 flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-500/30 hover:to-pink-600/30 hover:border-pink-400 hover:scale-125 hover:rotate-12 transition-all duration-500 group/icon shadow-lg hover:shadow-pink-500/60"
                          aria-label={`${member.name}'s Instagram profile`}
                        >
                          <Instagram className="w-5 h-5 text-pink-400 group-hover/icon:text-pink-300 transition-colors duration-300" />
                          <div className="absolute inset-0 rounded-full bg-pink-400/30 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
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
      `}</style>
    </div>
  );
}
