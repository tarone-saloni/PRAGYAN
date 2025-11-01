import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import GamingButton from "./GamingButton";

export default function RightSidebar() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  
  const menuItems = [
    { label: "ABOUT", path: "/about" },
    { label: "EVENTS", path: "/events" },
    { label: "TEAM", path: "/team" },
    { label: "CONTACT", path: "/contact" },
    { label: "SCHEDULE", path: "/schedule" }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-10 flex-col gap-6">
      {/* Top left corner - Static */}
      <div className="absolute -top-16 -left-16 w-16 h-16">
        {/* Single gaming border */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 via-cyan-500 to-transparent"></div>
        <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent"></div>
        
        {/* Corner bracket */}
        <div className="absolute top-1 left-1 w-6 h-6 border-t-2 border-l-2 border-purple-400 shadow-lg shadow-purple-500/50"></div>
        
        {/* Tech dot */}
        <div className="absolute top-2 left-2 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
      </div>

      {menuItems.map((menuItem, index) => (
        <div 
          key={menuItem.label} 
          className={`relative flex items-center group transition-all duration-700 ease-out ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-8'
          }`}
          style={{
            transitionDelay: `${index * 150}ms`
          }}
        >
          <div onClick={() => handleNavigation(menuItem.path)} className="cursor-pointer">
            <GamingButton 
              item={menuItem.label} 
              index={index} 
              side="right" 
              color="purple" 
            />
          </div>
        </div>
      ))}

      {/* Bottom left corner - Static */}
      <div className="absolute -bottom-16 -left-16 w-16 h-16">
        {/* Single gaming border */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 via-purple-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-red-500 via-purple-500 to-transparent"></div>
        
        {/* Corner bracket */}
        <div className="absolute bottom-1 left-1 w-6 h-6 border-b-2 border-l-2 border-purple-400 shadow-lg shadow-purple-500/50"></div>
        
        {/* Tech dot */}
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
      </div>

    </div>
  );
}