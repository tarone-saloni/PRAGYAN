import React from "react";
import { useNavigate } from 'react-router-dom';
import GamingButton from "./GamingButton";

export default function RightSidebar() {
  const navigate = useNavigate();
  
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

  return (
    <div className="hidden lg:flex fixed right-2 lg:right-3 xl:right-4 2xl:right-5 top-1/2 -translate-y-1/2 z-10 flex-col gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4 xl:gap-5">
      {/* Top left corner - Responsive */}
      <div className="absolute -top-8 sm:-top-10 md:-top-11 lg:-top-12 xl:-top-14 -left-8 sm:-left-10 md:-left-11 lg:-left-12 xl:-left-14 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 xl:w-14 xl:h-14">
        {/* Single gaming border */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 via-cyan-500 to-transparent"></div>
        <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent"></div>
        
        {/* Corner bracket */}
        <div className="absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 border-t-2 border-l-2 border-purple-400 shadow-lg shadow-purple-500/50"></div>
        
        {/* Tech dot */}
        <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-purple-400 rounded-full"></div>
      </div>

      {menuItems.map((menuItem, index) => (
        <div 
          key={menuItem.label} 
          className="relative flex items-center group"
        >
          <div onClick={() => handleNavigation(menuItem.path)} className="cursor-pointer">
            <GamingButton 
              item={menuItem.label} 
              index={index} 
              side="right" 
              color="red"
              size="small"
            />
          </div>
        </div>
      ))}

      {/* Bottom left corner - Responsive */}
      <div className="absolute -bottom-8 sm:-bottom-10 md:-bottom-11 lg:-bottom-12 xl:-bottom-14 -left-8 sm:-left-10 md:-left-11 lg:-left-12 xl:-left-14 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 xl:w-14 xl:h-14">
        {/* Single gaming border */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 via-purple-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-red-500 via-purple-500 to-transparent"></div>
        
        {/* Corner bracket */}
        <div className="absolute bottom-0.5 left-0.5 sm:bottom-1 sm:left-1 w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 border-b-2 border-l-2 border-purple-400 shadow-lg shadow-purple-500/50"></div>
        
        {/* Tech dot */}
        <div className="absolute bottom-1.5 left-1.5 sm:bottom-2 sm:left-2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-purple-400 rounded-full"></div>
      </div>

    </div>
  );
}