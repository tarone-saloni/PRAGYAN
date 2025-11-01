import { useState } from 'react';

export default function HoverGallery() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const boxes = [
    { id: 1, img: 'https://i.postimg.cc/sgBkfbtx/img-1.jpg', text: 'Renji' },
    { id: 2, img: 'https://i.postimg.cc/3RZ6bhDS/img-2.jpg', text: 'Sora' },
    { id: 3, img: 'https://i.postimg.cc/DZhHg0m4/img-3.jpg', text: 'Kaito' },
    { id: 4, img: 'https://i.postimg.cc/KjqWx5ft/img-4.jpg', text: 'Tsuki' },
    { id: 5, img: 'https://i.postimg.cc/nrcWyW4H/img-5.jpg', text: 'Mitsui' }
  ];

  const getGridCols = () => {
    if (hoveredIndex === null) return 'grid-cols-5';
    return '';
  };

  const getColSpan = (index) => {
    if (hoveredIndex === null) return '';
    return hoveredIndex === index ? 'col-span-3' : 'col-span-1';
  };

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center p-4 overflow-hidden">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Figtree:wght@400;600&display=swap");
        * {
          font-family: "Figtree", sans-serif;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .card-3d {
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        
        .card-inner {
          transform-style: preserve-3d;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .card-overlay {
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 0.4) 100%
          );
        }
        
        .shine-effect {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            transparent 30%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.6s ease;
        }
        
        .hovered .shine-effect {
          animation: shine 1.5s ease-in-out;
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%) translateY(100%); opacity: 0; }
        }
      `}</style>
      
      {/* Gallery Grid */}
      <div
        className={`relative grid ${getGridCols()} gap-6 w-full max-w-[900px] h-[550px] transition-all duration-700 ease-out ${
          selectedIndex !== null ? 'pointer-events-none' : ''
        }`}
        style={hoveredIndex !== null ? { gridTemplateColumns: boxes.map((_, i) => i === hoveredIndex ? '3fr' : '1fr').join(' ') } : {}}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {boxes.map((box, index) => (
          <div
            key={box.id}
            className={`card-3d relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-700 ease-out cursor-pointer ${getColSpan(index)} ${
              hoveredIndex === index ? 'hovered' : ''
            }`}
            style={{
              transform: selectedIndex !== null
                ? selectedIndex === index
                  ? 'translateY(0) scale(1)'
                  : index < selectedIndex
                    ? 'translateX(-150%) translateY(0) scale(0.8)'
                    : 'translateX(150%) translateY(0) scale(0.8)'
                : hoveredIndex === null 
                  ? `translateY(${index % 2 === 0 ? '-20px' : '20px'}) scale(1)` 
                  : hoveredIndex === index 
                    ? 'translateY(0) scale(1.02) rotateY(0deg)' 
                    : 'translateY(0) scale(0.95) rotateY(0deg)',
              filter: selectedIndex !== null
                ? selectedIndex === index ? 'blur(0px)' : 'blur(2px)'
                : hoveredIndex !== null && hoveredIndex !== index ? 'blur(2px)' : 'blur(0px)',
              opacity: selectedIndex !== null
                ? selectedIndex === index ? 1 : 0
                : hoveredIndex !== null && hoveredIndex !== index ? 0.3 : 1,
              zIndex: selectedIndex === index ? 50 : 1
            }}
            onMouseEnter={() => selectedIndex === null && setHoveredIndex(index)}
            onClick={() => handleClick(index)}
          >
            <div className="card-inner w-full h-full relative">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                style={{
                  backgroundImage: `url(${box.img})`,
                  transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'
                }}
              />
              
              {/* Overlay Gradient */}
              <div className={`card-overlay absolute inset-0 transition-opacity duration-700 ${
                hoveredIndex === index ? 'opacity-70' : 'opacity-40'
              }`} />
              
              {/* Shine Effect */}
              <div className="shine-effect" />
              
              {/* Border Glow Effect */}
              <div 
                className="absolute inset-0 rounded-2xl transition-all duration-700"
                style={{
                  boxShadow: hoveredIndex === index 
                    ? 'inset 0 0 60px rgba(255, 255, 255, 0.15), 0 0 40px rgba(255, 255, 255, 0.1)' 
                    : 'inset 0 0 20px rgba(255, 255, 255, 0.05)'
                }}
              />
              
              {/* Text Label */}
              <div className="absolute inset-0 flex items-end justify-center pb-8">
                <div
                  className={`relative bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md text-white px-6 py-3 tracking-[6px] uppercase text-sm font-semibold rounded-xl border border-white/20 shadow-2xl transition-all duration-700 ${
                    hoveredIndex === index 
                      ? 'translate-y-0 opacity-100 scale-100 delay-300' 
                      : 'translate-y-[80px] opacity-0 scale-90'
                  }`}
                  style={{ 
                    paddingLeft: '18px',
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-xl" />
                  <span className="relative z-10">{box.text}</span>
                </div>
              </div>
              
              {/* Top Accent Line */}
              <div 
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent transition-opacity duration-700 ${
                  hoveredIndex === index ? 'opacity-60' : 'opacity-0'
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Full Image View */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl transition-opacity duration-700"
          onClick={handleClose}
        >
          <div 
            className="relative w-full max-w-6xl h-full max-h-[90vh] mx-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Full Image */}
            <img
              src={boxes[selectedIndex].img}
              alt={boxes[selectedIndex].text}
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              style={{
                animation: 'scaleIn 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
              }}
            />
            
            {/* Image Label */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md text-white px-8 py-4 tracking-[8px] uppercase text-lg font-semibold rounded-xl border border-white/20 shadow-2xl">
              <span style={{ paddingLeft: '20px' }}>{boxes[selectedIndex].text}</span>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <style>{`
        @keyframes scaleIn {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}