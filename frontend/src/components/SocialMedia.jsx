import React, { useState, useEffect } from 'react';
import { Youtube, Instagram, Facebook, Linkedin } from "lucide-react";

export default function SocialMedia() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/sggspragyaa/",
      hoverColor: "hover:text-pink-500",
      glowColor: "hover:shadow-pink-500/50",
      bgGradient: "hover:from-purple-500 hover:via-pink-500 hover:to-orange-500",
      iconColor: "text-gray-300 group-hover:text-white"
    },
    {
      name: "Facebook", 
      icon: Facebook,
      url: "https://www.facebook.com/sggspragyaa",
      hoverColor: "hover:text-blue-600",
      glowColor: "hover:shadow-blue-500/50",
      bgGradient: "hover:from-blue-600 hover:to-blue-700",
      iconColor: "text-gray-300 group-hover:text-white"
    },
    {
      name: "LinkedIn",
      icon: Linkedin, 
      url: "https://www.linkedin.com/company/pragyaa-sggs/",
      hoverColor: "hover:text-blue-700",
      glowColor: "hover:shadow-blue-600/50",
      bgGradient: "hover:from-blue-600 hover:to-blue-800",
      iconColor: "text-gray-300 group-hover:text-white"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@pragyaa-sggsiet7271",
      hoverColor: "hover:text-red-600", 
      glowColor: "hover:shadow-red-500/50",
      bgGradient: "hover:from-red-500 hover:to-red-600",
      iconColor: "text-gray-300 group-hover:text-white"
    }
  ];

  return (
    <div className="bg-gradient-to-br flex items-center justify-center p-1 xs:p-2 sm:p-3 md:p-4">
      <div className="flex flex-wrap gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-center max-w-full">
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <div 
              key={social.name} 
              className={`relative transform transition-all duration-700 ease-out ${
                isVisible 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-12 opacity-0 scale-75'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="group relative transition-all duration-500 block"
                onMouseEnter={() => setHoveredIcon(social.name)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${social.glowColor} shadow-2xl scale-150`}></div>
                
                <div className={`relative bg-gradient-to-br from-gray-800 to-gray-900 ${social.bgGradient} p-2 xs:p-2.5 sm:p-3 md:p-3.5 lg:p-4 rounded-lg xs:rounded-xl sm:rounded-2xl border border-gray-700 group-hover:border-gray-500 transition-all duration-500 group-hover:scale-110 shadow-lg transform`}>
                  <div className="absolute inset-0 rounded-lg xs:rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <IconComponent className={`relative w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 drop-shadow-lg transition-colors duration-500 ${social.iconColor}`} />
                </div>
              </a>
              
              {hoveredIcon === social.name && (
                <div className="absolute -top-8 xs:-top-9 sm:-top-10 md:-top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-[9px] xs:text-[10px] sm:text-xs md:text-sm px-1.5 xs:px-2 sm:px-2.5 md:px-3 py-0.5 xs:py-1 rounded-md sm:rounded-lg shadow-lg border border-gray-700 whitespace-nowrap z-10 animate-in fade-in-0 slide-in-from-top-2 duration-200">
                  <span>{social.name}</span>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 xs:border-l-3 sm:border-l-4 border-r-2 xs:border-r-3 sm:border-r-4 border-t-2 xs:border-t-3 sm:border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}