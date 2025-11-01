import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import MainContent from "../components/MainContent";
import GlobalStyles from "../components/GlobalStyles";
import BackgroundLayer from "../components/BackgroundLayer";
import BorderOverlay from "../components/BorderOverlay";
import SocialMedia from "../components/SocialMedia";
import MenuBar from "../components/MenuBar";

const HomePage = () =>  {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden font-sans">
      {/* Background Layer */}
      <BackgroundLayer />
      
      {/* Main Layout Container */}
      <div className="relative w-full min-h-screen bg-gradient-to-br to-gray-800 overflow-hidden">
        {/* Content Container - Responsive borders */}
        <div className="absolute inset-2 xs:inset-3 sm:inset-4 md:inset-6 lg:inset-8 xl:inset-12 border border-cyan-500/30" />
        
        {/* Border Overlay System - Hidden on small screens */}
        <div className="hidden sm:block">
          <BorderOverlay />
        </div>
        
        {/* Desktop Layout - Hidden on tablet and mobile */}
        <div className="hidden xl:block">
          <LeftSidebar />
          <RightSidebar />
        </div>
        
        {/* Mobile Navigation - Visible only on mobile */}
        <div className="block xl:hidden">
          {/* Mobile header/navigation can be added here */}
          <div className="relative z-20 p-4 sm:p-6">
            {/* You can add a mobile menu button here if needed */}
          </div>
        </div>
        
        {/* Main Content - Responsive positioning and padding */}
        <div className="relative xl:absolute xl:inset-0">
          <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 xl:px-0 xl:py-0">
            <MainContent />
          </div>
        </div>
        
        {/* Social Media Links - Responsive positioning with better mobile spacing */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2 z-10 w-full px-4 sm:px-6 md:px-8">
          <div className="flex justify-center">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <GlobalStyles />
    </div>
  );
}

export default HomePage;