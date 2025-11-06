import React, { useState, useEffect } from 'react';

const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add blur effect to main content when menu opens
  useEffect(() => {
    const mainContent = document.querySelector('main') || document.querySelector('#root > div');
    
    if (isMenuOpen) {
      if (mainContent) {
        mainContent.style.filter = 'blur(8px)';
        mainContent.style.transition = 'filter 0.5s ease';
      }
      document.body.style.overflow = 'hidden';
    } else {
      if (mainContent) {
        mainContent.style.filter = 'none';
      }
      document.body.style.overflow = '';
    }

    return () => {
      if (mainContent) {
        mainContent.style.filter = 'none';
      }
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Workshops', href: '/workshops' },
    { name: 'Team', href: '/team' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Sponsors', href: '/sponsors' },
    { name: 'Contact', href: '/contact' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Tournament', href: '/tournament' }
  ];

  return (
    <>
      <nav className="xl:hidden relative z-50">
        <div className="fixed top-6 right-6 z-[70]">
          {/* Simple Menu Button with Blur Effect */}
          <button
            onClick={toggleMenu}
            className="group relative w-14 h-14 bg-gray-800/80 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400/50"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            
            {/* Simple Hamburger Icon */}
            <div className="relative flex flex-col items-center justify-center w-full h-full">
              <span 
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1.5'
                }`}
              />
              <span 
                className={`block w-6 h-0.5 bg-white transition-all duration-200 ease-in-out ${
                  isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}
              />
              <span 
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1.5'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Full Screen Menu Panel */}
        <div className={`fixed inset-0 z-[60] transition-all duration-500 ease-out ${
          isMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}>
          {/* Enhanced Background with stronger blur and gradient */}
          <div className="absolute inset-0 bg-gray-900/97 backdrop-blur-[120px] backdrop-saturate-200">
            {/* Animated Background Gradient with blur */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/25 via-purple-500/25 to-pink-500/25 animate-gradient-shift blur-3xl"></div>
            
            {/* Multiple blur layers for enhanced effect */}
            <div className="absolute inset-0 backdrop-blur-[80px]"></div>
            <div className="absolute inset-0 bg-black/40 backdrop-blur-2xl"></div>
          </div>

          {/* Content Container */}
          <div className="relative h-full flex flex-col items-center justify-center px-6 py-20">
            
            {/* Header with Animation */}
            <div className={`mb-8 text-center transition-all duration-700 ${
              isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
            }`}>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-text-shimmer">
                Navigation
              </h3>
              <div className="mt-4 flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce-delay-1"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce-delay-2"></div>
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce-delay-3"></div>
              </div>
            </div>

            {/* Menu Items - Full Screen Layout */}
            <div className="w-full max-w-md space-y-4 overflow-y-auto max-h-[70vh] custom-scrollbar px-4">
              {menuItems.map((item, index) => (
                <div
                  key={item.name}
                  className={`menu-item-parent transition-all duration-300 ${
                    isMenuOpen ? 'animate-slide-in-stagger' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 60}ms`
                  }}
                >
                  <a
                    href={item.href}
                    className="menu-item-child relative flex items-center justify-center px-8 py-5 text-gray-300 rounded-2xl text-lg font-medium transition-all duration-300 overflow-hidden group/item hover:shadow-2xl transform hover:-translate-y-2 border border-gray-700/30 hover:border-gray-600/50 bg-gray-800/70 backdrop-blur-2xl"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {/* Animated background layers */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover/item:from-cyan-500/30 group-hover/item:via-purple-500/30 group-hover/item:to-pink-500/30 transition-all duration-500 rounded-2xl"></div>
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/80 via-purple-500/80 to-pink-500/80 translate-x-[-110%] group-hover/item:translate-x-0 transition-transform duration-500 ease-out rounded-2xl"></div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl"></div>
                    
                    {/* Menu item text with center alignment */}
                    <span className="relative z-10 group-hover/item:text-white transition-all duration-300 group-hover/item:font-bold group-hover/item:scale-110 text-center w-full tracking-wide">
                      {item.name}
                    </span>
                    
                    {/* Hover indicator - Arrow */}
                    <div className="absolute right-6 opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover/item:translate-x-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Footer with pulse animation */}
            <div className={`mt-8 text-center transition-all duration-700 delay-300 ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}>
              <p className="text-gray-400 text-sm">Tap anywhere to close</p>
            </div>
          </div>

          {/* Close on backdrop click */}
          <div 
            className="absolute inset-0 z-[-1]"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      </nav>

      {/* Enhanced Custom CSS for animations */}
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(99, 102, 241, 0.5) rgba(0, 0, 0, 0.1);
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #8b5cf6, #ec4899);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #7c3aed, #db2777);
          transform: scale(1.1);
        }

        @keyframes slide-in-stagger {
          0% {
            opacity: 0;
            transform: translateX(-30px) translateY(-10px) scale(0.9) rotateY(-10deg);
          }
          50% {
            opacity: 0.7;
            transform: translateX(-10px) translateY(-3px) scale(0.95) rotateY(-3deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0) scale(1) rotateY(0);
          }
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes text-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes bounce-delay-1 {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.7; }
          40% { transform: scale(1.2); opacity: 1; }
        }

        @keyframes bounce-delay-2 {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.7; }
          40% { transform: scale(1.2); opacity: 1; }
        }

        @keyframes bounce-delay-3 {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.7; }
          40% { transform: scale(1.2); opacity: 1; }
        }

        .animate-slide-in-stagger {
          animation: slide-in-stagger 0.8s ease-out forwards;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }

        .animate-text-shimmer {
          background-size: 200% auto;
          animation: text-shimmer 3s linear infinite;
        }

        .animate-bounce-delay-1 {
          animation: bounce-delay-1 1.4s infinite;
          animation-delay: 0s;
        }

        .animate-bounce-delay-2 {
          animation: bounce-delay-2 1.4s infinite;
          animation-delay: 0.2s;
        }

        .animate-bounce-delay-3 {
          animation: bounce-delay-3 1.4s infinite;
          animation-delay: 0.4s;
        }

        .menu-item-parent:hover .menu-item-child {
          transform: scale(1.02) translateY(-8px);
        }

        .menu-item-child:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(99, 102, 241, 0.3);
        }

        /* Prevent body scroll when menu is open */
        body.menu-open {
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default MenuBar;