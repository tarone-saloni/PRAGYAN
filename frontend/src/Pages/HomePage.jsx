import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import MainContent from "../components/MainContent";
import GlobalStyles from "../components/GlobalStyles";
import BackgroundLayer from "../components/BackgroundLayer";
import BorderOverlay from "../components/BorderOverlay";
import SocialMedia from "../components/SocialMedia";

const HomePage = () =>  {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden font-sans">
      {/* Background Layer */}
      <BackgroundLayer />
      
      {/* Main Layout Container */}
      <div className="relative w-full h-screen bg-gradient-to-br  to-gray-800 overflow-hidden">
        {/* Content Container */}
        <div className="absolute inset-8 md:inset-12 border border-cyan-500/30" />
        
        {/* Border Overlay System */}
        <BorderOverlay />
        
        {/* Sidebars */}
        <LeftSidebar />
        <RightSidebar />
        
        {/* Main Content */}
        <MainContent />
        
        {/* Social Media Links */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <SocialMedia />
        </div>
      </div>

      {/* Global Styles */}
      <GlobalStyles />
    </div>
  );
}

export default HomePage;