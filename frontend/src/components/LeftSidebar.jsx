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
    <div className="hidden lg:flex fixed left-2 lg:left-3 xl:left-4 2xl:left-5 top-1/2 -translate-y-1/2 z-10 flex-col gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4 xl:gap-5">
      {/* Top right corner - Responsive */}
      <div className="absolute -top-8 sm:-top-10 md:-top-11 lg:-top-12 xl:-top-14 -right-8 sm:-right-10 md:-right-11 lg:-right-12 xl:-right-14 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 xl:w-14 xl:h-14">
        {/* Single gaming border */}
        <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-[#ff5757] via-purple-500 to-transparent"></div>
        <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-[#ff5757] via-purple-500 to-transparent"></div>
        
        {/* Corner bracket */}
        <div className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 border-t-2 border-r-2 border-[#ff5757] shadow-lg shadow-[#ff5757]/50"></div>
        
        {/* Tech dot */}
        <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#ff5757] rounded-full animate-pulse"></div>
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
              color="red"
              size="small"
            />
          </div>
        </div>
      ))}

      {/* Bottom right corner - Responsive */}
      <div className="absolute -bottom-8 sm:-bottom-10 md:-bottom-11 lg:-bottom-12 xl:-bottom-14 -right-8 sm:-right-10 md:-right-11 lg:-right-12 xl:-right-14 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 xl:w-14 xl:h-14">
        {/* Single gaming border */}
        <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-red-500 via-purple-500 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-red-500 via-purple-500 to-transparent"></div>
        
        {/* Corner bracket */}
        <div className="absolute bottom-0.5 right-0.5 sm:bottom-1 sm:right-1 w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 border-b-2 border-r-2 border-[#ff5757] shadow-lg shadow-[#ff5757]/50"></div>
        
        {/* Tech dot */}
        <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#ff5757] rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}