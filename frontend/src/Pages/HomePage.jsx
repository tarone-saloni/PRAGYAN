import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import MainContent from "../components/MainContent";
import GlobalStyles from "../components/GlobalStyles";
import BackgroundLayer from "../components/BackgroundLayer";
import SocialMedia from "../components/SocialMedia";
import MenuBar from "../components/MenuBar";

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden font-sans">
      <BackgroundLayer />

      {/* MenuBar - Fixed in top right corner with better responsive positioning */}
      <div className="fixed top-2 right-2 xs:top-3 xs:right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 xl:top-10 xl:right-10 z-50">
        <MenuBar />
      </div>

      {/* Main Layout Container */}
      <div className="relative w-full min-h-screen bg-gradient-to-br to-gray-800 overflow-hidden">
        {/* Corner designs - Responsive scaling */}
        {/* Top-left corner design */}
        <div className="absolute top-0 left-0 w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden opacity-80 md:opacity-100">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 384 384">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#ff5757", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#ff3333", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path d="M 0 0 L 360 0 L 300 45 L 270 45 L 255 60 L 75 60 L 60 75 L 45 75 L 0 120 Z" fill="url(#redGrad)" filter="url(#glow)" />
            <path d="M 15 15 L 345 15 L 288 54 L 261 54 L 249 66 L 81 66 L 69 78 L 54 78 L 15 117 Z" fill="#1e293b" />
            <path d="M 30 30 L 330 30 L 276 63 L 252 63 L 243 72 L 87 72 L 78 81 L 63 81 L 30 114 Z" fill="none" stroke="#ff5757" strokeWidth="1" opacity="0.5" />
            <path d="M 52 37 L 82 37 L 82 52 L 52 52 Z" fill="none" stroke="#ff5757" strokeWidth="1.5" opacity="0.6" />
            <circle cx="67" cy="45" r="3" fill="#ff5757" opacity="0.8" />
            <line x1="105" y1="42" x2="210" y2="42" stroke="#ff5757" strokeWidth="1" opacity="0.4" />
            <line x1="105" y1="48" x2="180" y2="48" stroke="#ff5757" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        {/* Top-right corner design */}
        <div className="absolute top-0 right-0 w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden opacity-80 md:opacity-100">
          <svg className="absolute top-0 right-0 w-full h-full" viewBox="0 0 384 384">
            <defs>
              <filter id="glowTopRight">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="redGradTopRight" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#ff5757", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#ff3333", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path d="M 384 0 L 24 0 L 84 45 L 114 45 L 129 60 L 309 60 L 324 75 L 339 75 L 384 120 Z" fill="url(#redGradTopRight)" filter="url(#glowTopRight)" />
            <path d="M 369 15 L 39 15 L 96 54 L 123 54 L 135 66 L 303 66 L 315 78 L 330 78 L 369 117 Z" fill="#1e293b" />
            <path d="M 354 30 L 54 30 L 108 63 L 132 63 L 141 72 L 297 72 L 306 81 L 321 81 L 354 114 Z" fill="none" stroke="#ff5757" strokeWidth="1" opacity="0.5" />
            <path d="M 332 37 L 302 37 L 302 52 L 332 52 Z" fill="none" stroke="#ff5757" strokeWidth="1.5" opacity="0.6" />
            <circle cx="317" cy="45" r="3" fill="#ff5757" opacity="0.8" />
            <line x1="279" y1="42" x2="174" y2="42" stroke="#ff5757" strokeWidth="1" opacity="0.4" />
            <line x1="279" y1="48" x2="204" y2="48" stroke="#ff5757" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        {/* Bottom-right corner design */}
        <div className="absolute bottom-0 right-0 w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden opacity-80 md:opacity-100">
          <svg className="absolute bottom-0 right-0 w-full h-full" viewBox="0 0 384 384">
            <defs>
              <filter id="glowBottomRight">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="redGradBottomRight" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#ff5757", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#ff3333", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path d="M 384 384 L 24 384 L 84 339 L 114 339 L 129 324 L 309 324 L 324 309 L 339 309 L 384 264 Z" fill="url(#redGradBottomRight)" filter="url(#glowBottomRight)" />
            <path d="M 369 369 L 39 369 L 96 330 L 123 330 L 135 318 L 303 318 L 315 306 L 330 306 L 369 267 Z" fill="#1e293b" />
            <path d="M 354 354 L 54 354 L 108 321 L 132 321 L 141 312 L 297 312 L 306 303 L 321 303 L 354 270 Z" fill="none" stroke="#ff5757" strokeWidth="1" opacity="0.5" />
            <path d="M 332 347 L 302 347 L 302 332 L 332 332 Z" fill="none" stroke="#ff5757" strokeWidth="1.5" opacity="0.6" />
            <circle cx="317" cy="339" r="3" fill="#ff5757" opacity="0.8" />
            <line x1="279" y1="342" x2="174" y2="342" stroke="#ff5757" strokeWidth="1" opacity="0.4" />
            <line x1="279" y1="336" x2="204" y2="336" stroke="#ff5757" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        {/* Bottom-left corner design */}
        <div className="absolute bottom-0 left-0 w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden opacity-80 md:opacity-100">
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 384 384">
            <defs>
              <filter id="glowBottomLeft">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="redGradBottomLeft" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#ff5757", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#ff3333", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path d="M 0 384 L 360 384 L 300 339 L 270 339 L 255 324 L 75 324 L 60 309 L 45 309 L 0 264 Z" fill="url(#redGradBottomLeft)" filter="url(#glowBottomLeft)" />
            <path d="M 15 369 L 345 369 L 288 330 L 261 330 L 249 318 L 81 318 L 69 306 L 54 306 L 15 267 Z" fill="#1e293b" />
            <path d="M 30 354 L 330 354 L 276 321 L 252 321 L 243 312 L 87 312 L 78 303 L 63 303 L 30 270 Z" fill="none" stroke="#ff5757" strokeWidth="1" opacity="0.5" />
            <path d="M 52 347 L 82 347 L 82 332 L 52 332 Z" fill="none" stroke="#ff5757" strokeWidth="1.5" opacity="0.6" />
            <circle cx="67" cy="339" r="3" fill="#ff5757" opacity="0.8" />
            <line x1="105" y1="342" x2="210" y2="342" stroke="#ff5757" strokeWidth="1" opacity="0.4" />
            <line x1="105" y1="336" x2="180" y2="336" stroke="#ff5757" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        {/* Desktop Sidebars - Hidden on tablet and below */}
        <div className="hidden xl:block">
          <LeftSidebar />
          <RightSidebar />
        </div>

        {/* Main Content - Fully responsive with better spacing */}
        <div className="relative min-h-screen flex items-center justify-center">
          <div className="w-full px-3 py-4 xs:px-4 xs:py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 xl:px-16 xl:py-16">
            <MainContent />
          </div>
        </div>

        {/* Social Media Links - Better responsive positioning */}
        <div className="fixed bottom-2 xs:bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-full px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-center">
            <SocialMedia />
          </div>
        </div>
      </div>

      <GlobalStyles />
    </div>
  );
};

export default HomePage;