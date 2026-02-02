import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  Info,
  Calendar,
  Wrench,
  Users,
  Image,
  Award,
  Star,
  Clock,
  Zap,
} from "lucide-react";

const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add blur effect to main content when menu opens
  useEffect(() => {
    const mainContent =
      document.querySelector("main") || document.querySelector("#root > div");

    if (isMenuOpen) {
      if (mainContent) {
        mainContent.style.filter = "blur(8px)";
        mainContent.style.transition = "filter 0.5s ease";
      }
      document.body.style.overflow = "hidden";
    } else {
      if (mainContent) {
        mainContent.style.filter = "none";
      }
      document.body.style.overflow = "";
    }

    return () => {
      if (mainContent) {
        mainContent.style.filter = "none";
      }
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Updated menu items matching App.jsx routes with icons
  const menuItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "Workshops", href: "/workshops", icon: Wrench },
    { name: "Junior Scientists", href: "/junior-scientists", icon: Zap, featured: true },
    { name: "Schedule", href: "/schedule", icon: Clock },
    { name: "Team", href: "/team", icon: Users },
    { name: "Gallery", href: "/gallery", icon: Image },
    { name: "Sponsors", href: "/sponsors", icon: Award },
    { name: "VIP Guests", href: "/guest", icon: Star },
  ];

  const handleNavigation = (href) => {
    setIsMenuOpen(false);
    navigate(href);
  };

  // Check if route is active
  const isActiveRoute = (href) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      <nav className="xl:hidden relative z-50">
        <div className="fixed top-6 right-6 z-[70]">
          {/* Menu Button with Active Indicator */}
          <button
            onClick={toggleMenu}
            className={`group relative w-14 h-14 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400/50 ${
              isMenuOpen
                ? "bg-red-600/90 shadow-red-500/50"
                : "bg-gray-800/80 hover:bg-gray-700/80"
            }`}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">
              {isMenuOpen ? "Close menu" : "Open menu"}
            </span>

            {/* Hamburger Icon with Animation */}
            <div className="relative flex flex-col items-center justify-center w-full h-full gap-1.5">
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                  isMenuOpen
                    ? "rotate-45 translate-y-2"
                    : "group-hover:w-7"
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-200 ease-in-out ${
                  isMenuOpen
                    ? "opacity-0 scale-0"
                    : "opacity-100 scale-100 group-hover:w-5"
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                  isMenuOpen
                    ? "-rotate-45 -translate-y-2"
                    : "group-hover:w-7"
                }`}
              />
            </div>

            {/* Pulse effect when menu is open */}
            {isMenuOpen && (
              <span className="absolute inset-0 rounded-full animate-ping bg-red-500/30"></span>
            )}
          </button>
        </div>

        {/* Dropdown Menu Panel */}
        <div
          className={`fixed top-16 right-4 z-[60] w-80 transition-all duration-500 ease-out ${
            isMenuOpen
              ? "opacity-100 visible translate-y-0 scale-100"
              : "opacity-0 invisible -translate-y-4 scale-95"
          }`}
        >
          {/* Menu Container */}
          <div className="bg-gray-900/95 backdrop-blur-xl border border-red-500/30 rounded-2xl shadow-2xl shadow-red-500/20 overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 border-b border-red-500/20 bg-gradient-to-r from-red-500/10 to-orange-500/10">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold bg-gradient-to-r from-red-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                  PRAGYAA 2026
                </h3>
                <span className="text-xs text-gray-400 font-medium">
                  Navigation
                </span>
              </div>
            </div>

            {/* Menu Items */}
            <div className="max-h-[70vh] overflow-y-auto custom-scrollbar py-3 px-3">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = isActiveRoute(item.href);
                
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className={`w-full text-left px-4 py-3 mb-2 text-sm rounded-xl transition-all duration-300 group relative overflow-hidden ${
                      isActive
                        ? "bg-gradient-to-r from-red-600/90 via-orange-600/90 to-rose-600/90 text-white border border-red-500/50 shadow-lg shadow-red-500/30"
                        : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-red-600/50 hover:via-orange-600/50 hover:to-rose-600/50 border border-transparent hover:border-red-500/30"
                    } ${item.featured ? "animate-pulse-ring" : ""}`}
                    style={{
                      animationDelay: `${index * 0.05}s`,
                    }}
                  >
                    {/* Background gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                    
                    {/* Content */}
                    <div className="relative flex items-center gap-3">
                      <Icon
                        className={`w-5 h-5 transition-all duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-gray-400 group-hover:text-red-400 group-hover:scale-110"
                        }`}
                      />
                      <span className="font-medium flex-1">{item.name}</span>
                      
                      {/* Active indicator */}
                      {isActive && (
                        <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                      )}
                      
                      {/* Arrow on hover */}
                      {!isActive && (
                        <svg
                          className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      )}

                      {/* Featured badge */}
                      {item.featured && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Footer with Quick Info */}
            <div className="px-6 py-3 border-t border-red-500/20 bg-gradient-to-r from-red-500/5 to-orange-500/5">
              <p className="text-xs text-gray-400 text-center">
                Feb 27-28 & Mar 1, 2026
              </p>
            </div>
          </div>
        </div>

        {/* Backdrop overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm transition-opacity duration-500 animate-fade-in"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </nav>

      {/* Enhanced Custom CSS */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(239, 68, 68, 0.6) rgba(0, 0, 0, 0.1);
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #dc2626, #ea580c, #e11d48);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #b91c1c, #c2410c, #be123c);
        }

        @keyframes pulse-ring {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(239, 68, 68, 0);
          }
        }

        .animate-pulse-ring {
          animation: pulse-ring 2s ease-out infinite;
        }
      `}</style>
    </>
  );
};

export default MenuBar;
