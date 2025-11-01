import { useEffect, useRef } from 'react';

function StarField({ 
  density = 'medium', 
  showComets = true, 
  cometCount = 3, 
  isDark = true,
  showNebula = true,
  showPulsars = true,
  showConstellations = false 
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    container.innerHTML = '';

    // Enhanced density mapping
    const densityMap = { low: 150, medium: 400, high: 800, ultra: 1200 };
    const starCount = densityMap[density] || densityMap.medium;

    // Create nebula background if enabled
    if (showNebula) {
      for (let i = 0; i < 3; i++) {
        const nebula = document.createElement('div');
        nebula.style.position = 'absolute';
        nebula.style.borderRadius = '50%';
        nebula.style.pointerEvents = 'none';
        
        const size = 200 + Math.random() * 300;
        const colors = [
          'rgba(99, 102, 241, 0.08)', // Purple
          'rgba(59, 130, 246, 0.06)', // Blue
          'rgba(16, 185, 129, 0.05)', // Emerald
          'rgba(245, 101, 101, 0.04)', // Red
          'rgba(139, 69, 19, 0.03)'   // Brown
        ];
        
        nebula.style.width = `${size}px`;
        nebula.style.height = `${size}px`;
        nebula.style.left = `${Math.random() * 100}%`;
        nebula.style.top = `${Math.random() * 100}%`;
        nebula.style.background = `radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]}, transparent 70%)`;
        nebula.style.animation = `nebulaFloat ${20 + Math.random() * 30}s infinite ease-in-out alternate`;
        nebula.style.animationDelay = `${Math.random() * 10}s`;
        nebula.style.filter = 'blur(1px)';
        
        container.appendChild(nebula);
      }
    }

    // Enhanced star creation
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.style.position = 'absolute';
      star.style.borderRadius = '50%';
      star.style.pointerEvents = 'none';
      
      // Enhanced size distribution
      const sizeRand = Math.random();
      let size, intensity, starType;
      
      if (sizeRand < 0.7) {
        size = 0.5 + Math.random() * 0.5; // Tiny stars
        intensity = 0.3 + Math.random() * 0.4;
        starType = 'normal';
      } else if (sizeRand < 0.85) {
        size = 1 + Math.random() * 0.5; // Small stars
        intensity = 0.5 + Math.random() * 0.3;
        starType = 'normal';
      } else if (sizeRand < 0.95) {
        size = 1.5 + Math.random() * 1; // Medium stars
        intensity = 0.6 + Math.random() * 0.3;
        starType = 'bright';
      } else {
        size = 2 + Math.random() * 1.5; // Large stars
        intensity = 0.8 + Math.random() * 0.2;
        starType = 'giant';
      }
      
      // Enhanced color variations
      const colorVariations = isDark ? [
        '#ffffff', '#f0f8ff', '#e6f3ff', '#ffe4e1', '#fff8dc', '#f0ffff'
      ] : [
        '#4a5568', '#2d3748', '#1a202c', '#2c5282', '#553c9a', '#744210'
      ];
      
      const baseColor = colorVariations[Math.floor(Math.random() * colorVariations.length)];
      
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.backgroundColor = baseColor;
      star.style.opacity = intensity;
      
      // Enhanced animations based on star type
      if (starType === 'giant') {
        star.style.animation = `giantTwinkle ${2 + Math.random() * 3}s infinite ease-in-out alternate`;
        star.style.boxShadow = isDark 
          ? `0 0 ${size * 3}px ${size}px rgba(255, 255, 255, 0.6), 0 0 ${size * 6}px rgba(255, 255, 255, 0.3)`
          : `0 0 ${size * 2}px rgba(74, 85, 104, 0.8)`;
      } else if (starType === 'bright') {
        star.style.animation = `brightTwinkle ${1.5 + Math.random() * 2}s infinite ease-in-out alternate`;
        star.style.boxShadow = isDark 
          ? `0 0 ${size * 2}px rgba(255, 255, 255, 0.8)`
          : `0 0 ${size * 1.5}px rgba(74, 85, 104, 0.6)`;
      } else {
        star.style.animation = `normalTwinkle ${1 + Math.random() * 2}s infinite ease-in-out alternate`;
        star.style.boxShadow = isDark 
          ? `0 0 ${size}px rgba(255, 255, 255, 0.5)`
          : `0 0 ${size * 0.5}px rgba(74, 85, 104, 0.4)`;
      }
      
      star.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(star);
    }

    // Enhanced pulsars (rapidly spinning neutron stars)
    if (showPulsars) {
      for (let i = 0; i < 2; i++) {
        const pulsar = document.createElement('div');
        pulsar.style.position = 'absolute';
        pulsar.style.width = '3px';
        pulsar.style.height = '3px';
        pulsar.style.borderRadius = '50%';
        pulsar.style.backgroundColor = isDark ? '#00ffff' : '#0891b2';
        pulsar.style.left = `${Math.random() * 100}%`;
        pulsar.style.top = `${Math.random() * 100}%`;
        pulsar.style.boxShadow = isDark
          ? '0 0 20px 5px rgba(0, 255, 255, 0.8), 0 0 40px 10px rgba(0, 255, 255, 0.4)'
          : '0 0 15px 3px rgba(8, 145, 178, 0.6)';
        pulsar.style.animation = `pulsar 0.5s linear infinite`;
        pulsar.style.animationDelay = `${Math.random() * 2}s`;
        
        container.appendChild(pulsar);
      }
    }

    // Enhanced comets with trails
    if (showComets) {
      for (let i = 0; i < cometCount; i++) {
        const cometContainer = document.createElement('div');
        cometContainer.style.position = 'absolute';
        cometContainer.style.pointerEvents = 'none';
        
        // Comet head
        const comet = document.createElement('div');
        comet.style.position = 'absolute';
        comet.style.width = '3px';
        comet.style.height = '3px';
        comet.style.borderRadius = '50%';
        comet.style.backgroundColor = isDark ? '#fff' : '#64748b';
        comet.style.boxShadow = isDark
          ? '0 0 40px 15px rgba(255, 255, 255, 0.4), 0 0 80px 25px rgba(255, 255, 255, 0.2)'
          : '0 0 30px 10px rgba(100, 116, 139, 0.3)';
        
        // Comet tail
        const tail = document.createElement('div');
        tail.style.position = 'absolute';
        tail.style.width = '100px';
        tail.style.height = '2px';
        tail.style.background = isDark
          ? 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 50%, transparent 100%)'
          : 'linear-gradient(90deg, rgba(100,116,139,0.6) 0%, rgba(100,116,139,0.3) 50%, transparent 100%)';
        tail.style.transformOrigin = 'left center';
        tail.style.transform = 'rotate(-45deg)';
        tail.style.left = '-97px';
        tail.style.top = '1px';
        
        cometContainer.appendChild(tail);
        cometContainer.appendChild(comet);
        
        // Random starting position (off-screen)
        const startSide = Math.random();
        if (startSide < 0.25) {
          cometContainer.style.left = '-5%';
          cometContainer.style.top = `${Math.random() * 50}%`;
        } else if (startSide < 0.5) {
          cometContainer.style.left = `${Math.random() * 50}%`;
          cometContainer.style.top = '-5%';
        } else if (startSide < 0.75) {
          cometContainer.style.left = '105%';
          cometContainer.style.top = `${Math.random() * 50 + 50}%`;
        } else {
          cometContainer.style.left = `${Math.random() * 50 + 50}%`;
          cometContainer.style.top = '105%';
        }
        
        cometContainer.style.animation = `enhancedComet ${8 + Math.random() * 12}s linear infinite`;
        cometContainer.style.animationDelay = `${Math.random() * 8}s`;
        
        container.appendChild(cometContainer);
      }
    }

    // Constellation lines (if enabled)
    if (showConstellations) {
      for (let i = 0; i < 3; i++) {
        const line = document.createElement('div');
        line.style.position = 'absolute';
        line.style.height = '1px';
        line.style.width = `${50 + Math.random() * 100}px`;
        line.style.background = isDark
          ? 'rgba(255, 255, 255, 0.2)'
          : 'rgba(74, 85, 104, 0.3)';
        line.style.left = `${Math.random() * 80 + 10}%`;
        line.style.top = `${Math.random() * 80 + 10}%`;
        line.style.transform = `rotate(${Math.random() * 360}deg)`;
        line.style.animation = `fadeInOut ${10 + Math.random() * 20}s infinite ease-in-out`;
        line.style.animationDelay = `${Math.random() * 10}s`;
        
        container.appendChild(line);
      }
    }

  }, [density, showComets, cometCount, isDark, showNebula, showPulsars, showConstellations]);

  return (
    <>
      <div 
        ref={containerRef} 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          pointerEvents: 'none', 
          overflow: 'hidden', 
          zIndex: 1 
        }} 
      />
      
      <style jsx>{`
        @keyframes normalTwinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        @keyframes brightTwinkle {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes giantTwinkle {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); filter: brightness(1.2); }
        }
        
        @keyframes pulsar {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.8); }
        }
        
        @keyframes enhancedComet {
          0% { transform: translate(0, 0) rotate(-45deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(120vw, 120vh) rotate(-45deg); opacity: 0; }
        }
        
        @keyframes nebulaFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.1); }
        }
        
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </>
  );
}

export default StarField;