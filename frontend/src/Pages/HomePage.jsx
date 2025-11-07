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

      {/* MenuBar - Responsive positioning */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 z-50">
        <MenuBar />
      </div>

      {/* Main Layout Container */}
      <div className="relative w-full min-h-screen">
        {/* Corner designs - Hidden on mobile/tablet */}
        {/* Top-left corner */}
        <div className="absolute top-0 left-0 w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 overflow-hidden hidden lg:block opacity-80 lg:opacity-100">
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
          </svg>
        </div>

        {/* Top-right corner */}
        <div className="absolute top-0 right-0 w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 overflow-hidden hidden lg:block opacity-80 lg:opacity-100">
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
          </svg>
        </div>

        {/* Bottom-right corner */}
        <div className="absolute bottom-0 right-0 w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 overflow-hidden hidden lg:block opacity-80 lg:opacity-100">
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
          </svg>
        </div>

        {/* Bottom-left corner */}
        <div className="absolute bottom-0 left-0 w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 overflow-hidden hidden lg:block opacity-80 lg:opacity-100">
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
          </svg>
        </div>

        {/* Desktop Sidebars */}
        <div className="hidden xl:block">
          <LeftSidebar />
          <RightSidebar />
        </div>

        {/* Main Content */}
        <div className="relative min-h-screen flex items-center justify-center px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 xl:px-16">
          <MainContent />
        </div>

        {/* Social Media Links */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-20 md:bottom-6 lg:bottom-8">
          <SocialMedia />
        </div>
      </div>

      <GlobalStyles />
    </div>
  );
};

export default HomePage;