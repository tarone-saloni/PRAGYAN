import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GamingButton from './GamingButton';

export default function LeftSidebar() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  
  const menuItems = [
    { label: "TOURNAMENTS", path: "/tournament" },
    { label: "GALLERY", path: "/gallery" },
    { label: "HACKATHON", path: "/events" },
    { label: "WORKSHOPS", path: "/workshops" },
    { label: "SPONSORS", path: "/sponsors" }
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
    <div className="hidden lg:flex fixed left-5 top-1/2 -translate-y-1/2 z-10 flex-col gap-6">
      {/* Top right corner - Static */}
      <div className="absolute -top-16 -right-16 w-16 h-16">
        {/* Single gaming border */}
        <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-cyan-500 via-purple-500 to-transparent"></div>
        <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent"></div>
        
        {/* Corner bracket */}
        <div className="absolute top-1 right-1 w-6 h-6 border-t-2 border-r-2 border-cyan-400 shadow-lg shadow-cyan-500/50"></div>
        
        {/* Tech dot */}
        <div className="absolute top-2 right-2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
      </div>

      {menuItems.map((menuItem, index) => (
        <div 
          key={menuItem.label} 
          className={`relative flex items-center group transition-all duration-700 ease-out ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-8'
          }`}
          style={{
            transitionDelay: `${index * 150}ms`
          }}
        >
          <div onClick={() => handleNavigation(menuItem.path)} className="cursor-pointer">
            <GamingButton 
              item={menuItem.label} 
              index={index} 
              side="left" 
              color="cyan" 
            />
          </div>
          {/* Connecting line between buttons (except last one) */}
          {index < menuItems.length - 1 && (
            <div className="absolute -bottom-6 -right-6 w-1 h-6 flex flex-col justify-center">
            </div>
          )}
        </div>
      ))}

      {/* Bottom right corner - Static */}
      <div className="absolute -bottom-16 -right-16 w-16 h-16">
        {/* Single gaming border */}
        <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-red-500 via-purple-500 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-red-500 via-purple-500 to-transparent"></div>
        
        {/* Corner bracket */}
        <div className="absolute bottom-1 right-1 w-6 h-6 border-b-2 border-r-2 border-cyan-400 shadow-lg shadow-cyan-500/50"></div>
        
        {/* Tech dot */}
        <div className="absolute bottom-2 right-2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}