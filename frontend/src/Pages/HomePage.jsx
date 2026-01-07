import React, { useEffect, useState } from "react";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import MainContent from "../components/MainContent";
import GlobalStyles from "../components/GlobalStyles";
import BackgroundLayer from "../components/BackgroundForHome";
import SocialMedia from "../components/SocialMedia";
import MenuBar from "../components/MenuBar";

const HomePage = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Check if this is a fresh page load
    const hasAnimated = sessionStorage.getItem('homePageAnimated');
    
    if (!hasAnimated) {
      setShouldAnimate(true);
      sessionStorage.setItem('homePageAnimated', 'true');
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden overflow-y-auto font-sans">
      <BackgroundLayer />

      {/* MenuBar - Responsive positioning */}
      <div className={`fixed top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 z-50 ${shouldAnimate ? 'animate-fadeInDown' : ''}`}>
        <MenuBar />
      </div>

      {/* Main Layout Container */}
      <div className="relative w-full">
        {/* Corner designs - Hidden on mobile/tablet */}
        {/* Top-left corner */}
        <div className={`absolute top-0 left-0 w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 overflow-hidden hidden lg:block opacity-80 lg:opacity-100 ${shouldAnimate ? 'animate-slideInTopLeft' : ''}`}>
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 256 256">
            {/* Glow effect */}
            <defs>
              <filter id="glowTopLeft">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <linearGradient id="redGradTopLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#ff0000', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#cc0000', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            
            {/* Main red frame */}
            <path d="M 0 0 L 240 0 L 200 30 L 180 30 L 170 40 L 50 40 L 40 50 L 30 50 L 0 80 Z" 
                  fill="url(#redGradTopLeft)" 
                  filter="url(#glowTopLeft)" />
            
            {/* Inner dark frame */}
            <path d="M 10 10 L 230 10 L 192 36 L 174 36 L 166 44 L 54 44 L 46 52 L 36 52 L 10 78 Z" 
                  fill="#1e293b" />
            
            {/* Accent lines */}
            <path d="M 20 20 L 220 20 L 184 42 L 168 42 L 162 48 L 58 48 L 52 54 L 42 54 L 20 76 Z" 
                  fill="none" 
                  stroke="#ff0000" 
                  strokeWidth="1" 
                  opacity="0.8" />
            
            {/* Corner cutout detail */}
            <path d="M 35 25 L 55 25 L 55 35 L 35 35 Z" 
                  fill="none" 
                  stroke="#ff0000" 
                  strokeWidth="1.5" 
                  opacity="0.9" />
            <circle cx="45" cy="30" r="2" fill="#ff0000" opacity="1" />
            
            {/* Tech details */}
            <line x1="70" y1="28" x2="140" y2="28" stroke="#ff0000" strokeWidth="1" opacity="0.7" />
            <line x1="70" y1="32" x2="120" y2="32" stroke="#ff0000" strokeWidth="1" opacity="0.7" />
          </svg>
        </div>

        {/* Top-right corner */}
        <div className={`absolute top-0 right-0 w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 overflow-hidden hidden lg:block opacity-80 lg:opacity-100 ${shouldAnimate ? 'animate-slideInTopRight' : ''}`}>
          <svg className="absolute top-0 right-0 w-full h-full" viewBox="0 0 256 256">
            <defs>
              <filter id="glowTopRight">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="redGradTopRight" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#ff0000", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#cc0000", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            
            {/* Main red frame */}
            <path d="M 256 0 L 16 0 L 56 30 L 76 30 L 86 40 L 206 40 L 216 50 L 226 50 L 256 80 Z" 
                  fill="url(#redGradTopRight)" 
                  filter="url(#glowTopRight)" />
            
            {/* Inner dark frame */}
            <path d="M 246 10 L 26 10 L 64 36 L 82 36 L 90 44 L 202 44 L 210 52 L 220 52 L 246 78 Z" 
                  fill="#1e293b" />
            
            {/* Accent lines */}
            <path d="M 236 20 L 36 20 L 72 42 L 88 42 L 94 48 L 198 48 L 204 54 L 214 54 L 236 76 Z" 
                  fill="none" 
                  stroke="#ff0000" 
                  strokeWidth="1" 
                  opacity="0.8" />
            
            {/* Corner cutout detail */}
            <path d="M 221 25 L 201 25 L 201 35 L 221 35 Z" 
                  fill="none" 
                  stroke="#ff0000" 
                  strokeWidth="1.5" 
                  opacity="0.9" />
            <circle cx="211" cy="30" r="2" fill="#ff0000" opacity="1" />
            
            {/* Tech details */}
            <line x1="116" y1="28" x2="186" y2="28" stroke="#ff0000" strokeWidth="1" opacity="0.7" />
            <line x1="136" y1="32" x2="186" y2="32" stroke="#ff0000" strokeWidth="1" opacity="0.7" />
          </svg>
        </div>

        {/* Bottom-right corner */}
        <div className={`absolute bottom-0 right-0 w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 overflow-hidden hidden lg:block opacity-80 lg:opacity-100 ${shouldAnimate ? 'animate-slideInBottomRight' : ''}`}>
          <svg className="absolute bottom-0 right-0 w-full h-full" viewBox="0 0 256 256">
            <defs>
              <filter id="glowBottomRight">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="redGradBottomRight" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#ff0000", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#cc0000", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            
            {/* Main red frame */}
            <path d="M 256 256 L 16 256 L 56 226 L 76 226 L 86 216 L 206 216 L 216 206 L 226 206 L 256 176 Z" 
                  fill="url(#redGradBottomRight)" 
                  filter="url(#glowBottomRight)" />
            
            {/* Inner dark frame */}
            <path d="M 246 246 L 26 246 L 64 220 L 82 220 L 90 212 L 202 212 L 210 204 L 220 204 L 246 178 Z" 
                  fill="#1e293b" />
            
            {/* Accent lines */}
            <path d="M 236 236 L 36 236 L 72 214 L 88 214 L 94 208 L 198 208 L 204 202 L 214 202 L 236 180 Z" 
                  fill="none" 
                  stroke="#ff0000" 
                  strokeWidth="1" 
                  opacity="0.8" />
            
            {/* Corner cutout detail */}
            <path d="M 221 231 L 201 231 L 201 221 L 221 221 Z" 
                  fill="none" 
                  stroke="#ff0000" 
                  strokeWidth="1.5" 
                  opacity="0.9" />
            <circle cx="211" cy="226" r="2" fill="#ff0000" opacity="1" />
            
            {/* Tech details */}
            <line x1="116" y1="228" x2="186" y2="228" stroke="#ff0000" strokeWidth="1" opacity="0.7" />
            <line x1="136" y1="224" x2="186" y2="224" stroke="#ff0000" strokeWidth="1" opacity="0.7" />
          </svg>
        </div>

        {/* Bottom-left corner */}
        <div className={`absolute bottom-0 left-0 w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 overflow-hidden hidden lg:block opacity-80 lg:opacity-100 ${shouldAnimate ? 'animate-slideInBottomLeft' : ''}`}>
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 256 256">
            <defs>
              <filter id="glowBottomLeft">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="redGradBottomLeft" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#ff0000", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#cc0000", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            
            {/* Main red frame */}
            <path d="M 0 256 L 240 256 L 200 226 L 180 226 L 170 216 L 50 216 L 40 206 L 30 206 L 0 176 Z" 
                  fill="url(#redGradBottomLeft)" 
                  filter="url(#glowBottomLeft)" />
            
            {/* Inner dark frame */}
            <path d="M 10 246 L 230 246 L 192 220 L 174 220 L 166 212 L 54 212 L 46 204 L 36 204 L 10 178 Z" 
                  fill="#1e293b" />
            
            {/* Accent lines */}
            <path d="M 20 236 L 220 236 L 184 214 L 168 214 L 162 208 L 58 208 L 52 202 L 42 202 L 20 180 Z" 
                  fill="none" 
                  stroke="#ff0000" 
                  strokeWidth="1" 
                  opacity="0.8" />
            
            {/* Corner cutout detail */}
            <path d="M 35 231 L 55 231 L 55 221 L 35 221 Z" 
                  fill="none" 
                  stroke="#ff0000" 
                  strokeWidth="1.5" 
                  opacity="0.9" />
            <circle cx="45" cy="226" r="2" fill="#ff0000" opacity="1" />
            
            {/* Tech details */}
            <line x1="70" y1="228" x2="140" y2="228" stroke="#ff0000" strokeWidth="1" opacity="0.7" />
            <line x1="70" y1="224" x2="120" y2="224" stroke="#ff0000" strokeWidth="1" opacity="0.7" />
          </svg>
        </div>

        {/* Desktop Sidebars */}
        <div className="hidden xl:block">
          <LeftSidebar shouldAnimate={shouldAnimate} />
          <RightSidebar shouldAnimate={shouldAnimate} />
        </div>

        {/* Main Content */}
        <div className={`relative min-h-screen flex items-center justify-center px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 xl:px-16 ${shouldAnimate ? 'animate-fadeInUp' : ''}`}>
          <MainContent />
        </div>
      </div>

      <GlobalStyles />
    </div>
  );
};

export default HomePage;