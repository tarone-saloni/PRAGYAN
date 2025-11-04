import React, { useState, useEffect } from "react";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import MainContent from "../components/MainContent";
import GlobalStyles from "../components/GlobalStyles";
import BackgroundLayer from "../components/BackgroundLayer";
import SocialMedia from "../components/SocialMedia";
import MenuBar from "../components/MenuBar";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fallback timer in case video doesn't load
    const timer = setTimeout(() => {
      setLoading(false);
    },5000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden font-sans">
      {/* Video Loader */}
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
          <video
            autoPlay
            muted
            playsInline
            onEnded={() => setLoading(false)}
            onError={() => setLoading(false)}
            className="w-full h-full object-cover"
          >
            <source src="/pragyaa2.mp4" type="video/mp4" />
            <source src="/pragyaa2.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Background Layer */}
      <BackgroundLayer />

      {/* MenuBar - Fixed in top right corner */}
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 lg:top-10 lg:right-10 z-50">
        <MenuBar />
      </div>

      {/* Main Layout Container */}
      <div className="relative w-full min-h-screen bg-gradient-to-br to-gray-800 overflow-hidden">
        {/* Top-left corner design */}
        <div className="absolute top-0 left-0 w-96 h-96 overflow-hidden">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 384 384"
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient
                id="redGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#ef4444", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#dc2626", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>

            <path
              d="M 0 0 L 360 0 L 300 45 L 270 45 L 255 60 L 75 60 L 60 75 L 45 75 L 0 120 Z"
              fill="url(#redGrad)"
              filter="url(#glow)"
            />

            <path
              d="M 15 15 L 345 15 L 288 54 L 261 54 L 249 66 L 81 66 L 69 78 L 54 78 L 15 117 Z"
              fill="#1e293b"
            />

            <path
              d="M 30 30 L 330 30 L 276 63 L 252 63 L 243 72 L 87 72 L 78 81 L 63 81 L 30 114 Z"
              fill="none"
              stroke="#ef4444"
              strokeWidth="1"
              opacity="0.5"
            />

            <g opacity="0.8" filter="url(#glow)">
              <rect
                x="180"
                y="7"
                width="12"
                height="4"
                fill="#ef4444"
                transform="skewX(-45)"
              />
              <rect
                x="202"
                y="7"
                width="12"
                height="4"
                fill="#ef4444"
                transform="skewX(-45)"
              />
              <rect
                x="225"
                y="7"
                width="12"
                height="4"
                fill="#ef4444"
                transform="skewX(-45)"
              />
              <rect
                x="248"
                y="7"
                width="12"
                height="4"
                fill="#ef4444"
                transform="skewX(-45)"
              />
            </g>

            <g opacity="0.8" filter="url(#glow)">
              <rect
                x="300"
                y="7"
                width="9"
                height="4"
                fill="#ef4444"
                transform="skewX(-45)"
              />
              <rect
                x="315"
                y="7"
                width="9"
                height="4"
                fill="#ef4444"
                transform="skewX(-45)"
              />
              <rect
                x="330"
                y="7"
                width="9"
                height="4"
                fill="#ef4444"
                transform="skewX(-45)"
              />
              <rect
                x="345"
                y="7"
                width="9"
                height="4"
                fill="#ef4444"
                transform="skewX(-45)"
              />
            </g>

            <g opacity="0.8" filter="url(#glow)">
              <rect
                x="7"
                y="150"
                width="4"
                height="18"
                fill="#ef4444"
                transform="skewY(-45)"
              />
              <rect
                x="7"
                y="195"
                width="4"
                height="18"
                fill="#ef4444"
                transform="skewY(-45)"
              />
              <rect
                x="7"
                y="240"
                width="4"
                height="18"
                fill="#ef4444"
                transform="skewY(-45)"
              />
              <rect
                x="7"
                y="285"
                width="4"
                height="18"
                fill="#ef4444"
                transform="skewY(-45)"
              />
              <rect
                x="7"
                y="330"
                width="4"
                height="18"
                fill="#ef4444"
                transform="skewY(-45)"
              />
            </g>

            <path
              d="M 52 37 L 82 37 L 82 52 L 52 52 Z"
              fill="none"
              stroke="#ef4444"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <circle cx="67" cy="45" r="3" fill="#ef4444" opacity="0.8" />

            <line
              x1="105"
              y1="42"
              x2="210"
              y2="42"
              stroke="#ef4444"
              strokeWidth="1"
              opacity="0.4"
            />
            <line
              x1="105"
              y1="48"
              x2="180"
              y2="48"
              stroke="#ef4444"
              strokeWidth="1"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* Top-right corner design - Mirrored */}
        <div className="absolute top-0 right-0 w-96 h-96 overflow-hidden">
          <svg
            className="absolute top-0 right-0 w-full h-full"
            viewBox="0 0 384 384"
          >
            <defs>
              <filter id="glowTopRight">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient
                id="redGradTopRight"
                x1="100%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#ef4444", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#dc2626", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>

            <path
              d="M 384 0 L 24 0 L 84 45 L 114 45 L 129 60 L 309 60 L 324 75 L 339 75 L 384 120 Z"
              fill="url(#redGradTopRight)"
              filter="url(#glowTopRight)"
            />

            <path
              d="M 369 15 L 39 15 L 96 54 L 123 54 L 135 66 L 303 66 L 315 78 L 330 78 L 369 117 Z"
              fill="#1e293b"
            />

            <path
              d="M 354 30 L 54 30 L 108 63 L 132 63 L 141 72 L 297 72 L 306 81 L 321 81 L 354 114 Z"
              fill="none"
              stroke="#ef4444"
              strokeWidth="1"
              opacity="0.5"
            />

            <g opacity="0.8" filter="url(#glowTopRight)">
              <rect
                x="192"
                y="7"
                width="12"
                height="4"
                fill="#ef4444"
                transform="skewX(45)"
              />
              <rect
                x="170"
                y="7"
                width="12"
                height="4"
                fill="#ef4444"
                transform="skewX(45)"
              />
              <rect
                x="147"
                y="7"
                width="12"
                height="4"
                fill="#ef4444"
                transform="skewX(45)"
              />
              <rect
                x="124"
                y="7"
                width="12"
                height="4"
                fill="#ef4444"
                transform="skewX(45)"
              />
            </g>

            <g opacity="0.8" filter="url(#glowTopRight)">
              <rect
                x="75"
                y="7"
                width="9"
                height="4"
                fill="#ef4444"
                transform="skewX(45)"
              />
              <rect
                x="60"
                y="7"
                width="9"
                height="4"
                fill="#ef4444"
                transform="skewX(45)"
              />
              <rect
                x="45"
                y="7"
                width="9"
                height="4"
                fill="#ef4444"
                transform="skewX(45)"
              />
              <rect
                x="30"
                y="7"
                width="9"
                height="4"
                fill="#ef4444"
                transform="skewX(45)"
              />
            </g>

            <g opacity="0.8" filter="url(#glowTopRight)">
              <rect
                x="373"
                y="150"
                width="4"
                height="18"
                fill="#ef4444"
                transform="skewY(45)"
              />
              <rect
                x="373"
                y="195"
                width="4"
                height="18"
                fill="#ef4444"
                transform="skewY(45)"
              />
              <rect
                x="373"
                y="240"
                width="4"
                height="18"
                fill="#ef4444"
                transform="skewY(45)"
              />
              <rect
                x="373"
                y="285"
                width="4"
                height="18"
                fill="#ef4444"
                transform="skewY(45)"
              />
              <rect
                x="373"
                y="330"
                width="4"
                height="18"
                fill="#ef4444"
                transform="skewY(45)"
              />
            </g>

            <path
              d="M 332 37 L 302 37 L 302 52 L 332 52 Z"
              fill="none"
              stroke="#ef4444"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <circle cx="317" cy="45" r="3" fill="#ef4444" opacity="0.8" />

            <line
              x1="279"
              y1="42"
              x2="174"
              y2="42"
              stroke="#ef4444"
              strokeWidth="1"
              opacity="0.4"
            />
            <line
              x1="279"
              y1="48"
              x2="204"
              y2="48"
              stroke="#ef4444"
              strokeWidth="1"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* Content Container - Responsive borders */}
        {/* <div className="absolute inset-2 xs:inset-3 sm:inset-4 md:inset-6 lg:inset-8 xl:inset-12 border border-cyan-500/30"></div> */}

        {/* Bottom-right corner design - Mirrored */}
        <div className="absolute bottom-0 right-0 w-96 h-96 overflow-hidden">
          <svg
            className="absolute bottom-0 right-0 w-full h-full"
            viewBox="0 0 384 384"
          >
            <defs>
              <filter id="glowBottomRight">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient
                id="redGradBottomRight"
                x1="100%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#ef4444", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#dc2626", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>

            <path
              d="M 384 384 L 24 384 L 84 339 L 114 339 L 129 324 L 309 324 L 324 309 L 339 309 L 384 264 Z"
              fill="url(#redGradBottomRight)"
              filter="url(#glowBottomRight)"
            />

            <path
              d="M 369 369 L 39 369 L 96 330 L 123 330 L 135 318 L 303 318 L 315 306 L 330 306 L 369 267 Z"
              fill="#1e293b"
            />

            <path
              d="M 354 354 L 54 354 L 108 321 L 132 321 L 141 312 L 297 312 L 306 303 L 321 303 L 354 270 Z"
              fill="none"
              stroke="#ef4444"
              strokeWidth="1"
              opacity="0.5"
            />

            <g opacity="0.8" filter="url(#glowBottomRight)">
              <rect
                x="192"
                y="373"
                width="12"
                height="4"
                fill="#ef4444"
                transform="skewX(-45)"
              />
              <rect
                x="170"
                y="373"
                width="12"
                height="4"
                fill="#ef4444"
                transform="skewX(-45)"
              />
              <rect
                x="147"
                y="373"
                width="12"
                height="4"
                fill="#ef4444"
                transform="skewX(-45)"
              />
              <rect
                x="124"
                y="373"
                width="12"
                height="4"
                fill="#ef4444"
                transform="skewX(-45)"
              />
            </g>

            <g opacity="0.8" filter="url(#glowBottomRight)">
              <rect
                x="75"
                y="373"
                width="9"
                height="4"
                fill="#ef4444"
                transform="skewX(-45)"
              />
              <rect
                x="60"
                y="373"
                width="9"
                height="4"
                fill="#ef4444"
                transform="skewX(-45)"
              />
              <rect
                x="45"
                y="373"
                width="9"
                height="4"
                fill="#ef4444"
                transform="skewX(-45)"
              />
              <rect
                x="30"
                y="373"
                width="9"
                height="4"
                fill="#ef4444"
                transform="skewX(-45)"
              />
            </g>

            <g opacity="0.8" filter="url(#glowBottomRight)">
              <rect
                x="373"
                y="210"
                width="4"
                height="18"
                fill="#ef4444"
                transform="skewY(-45)"
              />
              <rect
                x="373"
                y="165"
                width="4"
                height="18"
                fill="#ef4444"
                transform="skewY(-45)"
              />
              <rect
                x="373"
                y="120"
                width="4"
                height="18"
                fill="#ef4444"
                transform="skewY(-45)"
              />
              <rect
                x="373"
                y="75"
                width="4"
                height="18"
                fill="#ef4444"
                transform="skewX(-45)"
              />
              <rect
                x="373"
                y="30"
                width="4"
                height="18"
                fill="#ef4444"
                transform="skewY(-45)"
              />
            </g>

            <path
              d="M 332 347 L 302 347 L 302 332 L 332 332 Z"
              fill="none"
              stroke="#ef4444"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <circle cx="317" cy="339" r="3" fill="#ef4444" opacity="0.8" />

            <line
              x1="279"
              y1="342"
              x2="174"
              y2="342"
              stroke="#ef4444"
              strokeWidth="1"
              opacity="0.4"
            />
            <line
              x1="279"
              y1="336"
              x2="204"
              y2="336"
              stroke="#ef4444"
              strokeWidth="1"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* Bottom-left corner design */}
        <div className="absolute bottom-0 left-0 w-96 h-96 overflow-hidden">
          <svg
            className="absolute bottom-0 left-0 w-full h-full"
            viewBox="0 0 384 384"
          >
            <defs>
              <filter id="glowBottomLeft">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient
                id="redGradBottomLeft"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#ef4444", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#dc2626", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>

            <path
              d="M 0 384 L 360 384 L 300 339 L 270 339 L 255 324 L 75 324 L 60 309 L 45 309 L 0 264 Z"
              fill="url(#redGradBottomLeft)"
              filter="url(#glowBottomLeft)"
            />

            <path
              d="M 15 369 L 345 369 L 288 330 L 261 330 L 249 318 L 81 318 L 69 306 L 54 306 L 15 267 Z"
              fill="#1e293b"
            />

            <path
              d="M 30 354 L 330 354 L 276 321 L 252 321 L 243 312 L 87 312 L 78 303 L 63 303 L 30 270 Z"
              fill="none"
              stroke="#ef4444"
              strokeWidth="1"
              opacity="0.5"
            />

            <g opacity="0.8" filter="url(#glowBottomLeft)">
              <rect
                x="180"
                y="373"
                width="12"
                height="4"
                fill="#ef4444"
                transform="skewX(45)"
              />
              <rect
                x="202"
                y="373"
                width="12"
                height="4"
                fill="#ef4444"
                transform="skewX(45)"
              />
              <rect
                x="225"
                y="373"
                width="12"
                height="4"
                fill="#ef4444"
                transform="skewX(45)"
              />
              <rect
                x="248"
                y="373"
                width="12"
                height="4"
                fill="#ef4444"
                transform="skewX(45)"
              />
            </g>

            <g opacity="0.8" filter="url(#glowBottomLeft)">
              <rect
                x="300"
                y="373"
                width="9"
                height="4"
                fill="#ef4444"
                transform="skewX(45)"
              />
              <rect
                x="315"
                y="373"
                width="9"
                height="4"
                fill="#ef4444"
                transform="skewX(45)"
              />
              <rect
                x="330"
                y="373"
                width="9"
                height="4"
                fill="#ef4444"
                transform="skewX(45)"
              />
              <rect
                x="345"
                y="373"
                width="9"
                height="4"
                fill="#ef4444"
                transform="skewX(45)"
              />
            </g>

            <g opacity="0.8" filter="url(#glowBottomLeft)">
              <rect
                x="7"
                y="210"
                width="4"
                height="18"
                fill="#ef4444"
                transform="skewY(45)"
              />
              <rect
                x="7"
                y="165"
                width="4"
                height="18"
                fill="#ef4444"
                transform="skewY(45)"
              />
              <rect
                x="7"
                y="120"
                width="4"
                height="18"
                fill="#ef4444"
                transform="skewY(45)"
              />
              <rect
                x="7"
                y="75"
                width="4"
                height="18"
                fill="#ef4444"
                transform="skewX(45)"
              />
              <rect
                x="7"
                y="30"
                width="4"
                height="18"
                fill="#ef4444"
                transform="skewY(45)"
              />
            </g>

            <path
              d="M 52 347 L 82 347 L 82 332 L 52 332 Z"
              fill="none"
              stroke="#ef4444"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <circle cx="67" cy="339" r="3" fill="#ef4444" opacity="0.8" />

            <line
              x1="105"
              y1="342"
              x2="210"
              y2="342"
              stroke="#ef4444"
              strokeWidth="1"
              opacity="0.4"
            />
            <line
              x1="105"
              y1="336"
              x2="180"
              y2="336"
              stroke="#ef4444"
              strokeWidth="1"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* Desktop Layout - Hidden on tablet and mobile */}
        <div className="hidden xl:block">
          <LeftSidebar />
          <RightSidebar />
        </div>

        {/* Mobile Navigation - Visible only on mobile */}
        <div className="block xl:hidden">
          <div className="relative z-20 p-4 sm:p-6"></div>
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
};

export default HomePage;