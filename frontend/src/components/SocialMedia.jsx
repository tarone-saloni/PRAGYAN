import React, { useState } from 'react';
import { Youtube, Instagram, Facebook, Linkedin } from "lucide-react";

export default function SocialMedia() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/",
      hoverColor: "hover:text-pink-500",
      glowColor: "hover:shadow-pink-500/50"
    },
    {
      name: "Facebook", 
      icon: Facebook,
      url: "https://facebook.com/",
      hoverColor: "hover:text-blue-600",
      glowColor: "hover:shadow-blue-500/50"
    },
    {
      name: "LinkedIn",
      icon: Linkedin, 
      url: "https://linkedin.com/",
      hoverColor: "hover:text-blue-700",
      glowColor: "hover:shadow-blue-600/50"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/",
      hoverColor: "hover:text-red-600", 
      glowColor: "hover:shadow-red-500/50"
    }
  ];

  return (
    <div className="bg-gradient-to-br flex items-center justify-center p-8">
      <div className="flex gap-8 justify-center">
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <div key={social.name} className="relative">
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`group relative transition-all duration-500 ${social.hoverColor} block`}
                onMouseEnter={() => setHoveredIcon(social.name)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                {/* Outer glow ring */}
                <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${social.glowColor} shadow-2xl scale-150`}></div>
                
                {/* Icon container with background */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-2xl border border-gray-700 group-hover:border-gray-600 transition-all duration-500 group-hover:scale-125 shadow-lg transform">
                  {/* Inner glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <IconComponent className="relative w-7 h-7 drop-shadow-lg" />
                </div>
              </a>
              
              {/* Tooltip */}
              {hoveredIcon === social.name && (
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg shadow-lg border border-gray-700 whitespace-nowrap z-10 animate-in fade-in-0 slide-in-from-top-2 duration-200">
                  <span>{social.name}</span>
                  {/* Tooltip arrow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}