import { useEffect, useRef } from 'react';

function GridLines({ strokeColor = '#ff5757', horizontalLines = 20, verticalLines = 20, strokeOpacity = 0.4, strokeWidth = 0.5, speed = 5, opacity = 0.4 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const gridContainer = containerRef.current;
    if (!gridContainer) return;
    gridContainer.innerHTML = '';

    // Create CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes moveDiagonal {
        0% { transform: translate(-100px, -100px); }
        100% { transform: translate(100px, 100px); }
      }
      
      @keyframes gridPulse {
        0% { stroke-opacity: ${strokeOpacity * 0.5}; }
        50% { stroke-opacity: ${strokeOpacity}; }
        100% { stroke-opacity: ${strokeOpacity * 0.5}; }
      }
      
      @keyframes slideHorizontal {
        0% { transform: translateX(-100px); }
        100% { transform: translateX(100px); }
      }
      
      @keyframes slideVertical {
        0% { transform: translateY(-100px); }
        100% { transform: translateY(100px); }
      }
      
      @keyframes gridGlow {
        0%, 100% { 
          stroke-opacity: ${strokeOpacity * 0.7}; 
          filter: drop-shadow(0 0 2px ${strokeColor}); 
        }
        50% { 
          stroke-opacity: ${strokeOpacity * 1.2}; 
          filter: drop-shadow(0 0 8px ${strokeColor}); 
        }
      }
    `;
    document.head.appendChild(style);

    const gridSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    gridSvg.setAttribute('width', 'calc(100% + 200px)');
    gridSvg.setAttribute('height', 'calc(100% + 200px)');
    gridSvg.style.position = 'absolute';
    gridSvg.style.top = '-100px';
    gridSvg.style.left = '-100px';
    gridSvg.style.animation = `moveDiagonal ${speed}s linear infinite`;

    // Create horizontal lines with movement
    if (horizontalLines > 0) {
      const hSpacing = (100 + 20) / horizontalLines; // Extra spacing for movement
      for (let i = 0; i < horizontalLines + 2; i++) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', '0');
        line.setAttribute('y1', `${i * hSpacing}%`);
        line.setAttribute('x2', '100%');
        line.setAttribute('y2', `${i * hSpacing}%`);
        line.setAttribute('stroke', strokeColor);
        line.setAttribute('stroke-width', String(strokeWidth));
        line.setAttribute('stroke-opacity', String(strokeOpacity));
        
        // Alternate animations for different lines
        if (i % 3 === 0) {
          line.style.animation = `gridGlow ${3 + (i % 5)}s infinite ease-in-out`;
        } else {
          line.style.animation = `gridPulse ${2 + (i % 4)}s infinite alternate ease-in-out`;
        }
        line.style.animationDelay = `${i * 0.3}s`;
        
        gridSvg.appendChild(line);
      }
    }

    // Create vertical lines with movement
    if (verticalLines > 0) {
      const vSpacing = (100 + 20) / verticalLines; // Extra spacing for movement
      for (let i = 0; i < verticalLines + 2; i++) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', `${i * vSpacing}%`);
        line.setAttribute('y1', '0');
        line.setAttribute('x2', `${i * vSpacing}%`);
        line.setAttribute('y2', '100%');
        line.setAttribute('stroke', strokeColor);
        line.setAttribute('stroke-width', String(strokeWidth));
        line.setAttribute('stroke-opacity', String(strokeOpacity));
        
        // Alternate animations for different lines
        if (i % 3 === 0) {
          line.style.animation = `gridGlow ${3 + (i % 5)}s infinite ease-in-out`;
        } else {
          line.style.animation = `gridPulse ${2 + (i % 4)}s infinite alternate ease-in-out`;
        }
        line.style.animationDelay = `${i * 0.3}s`;
        
        gridSvg.appendChild(line);
      }
    }

    // Add some special moving lines
    for (let i = 0; i < 3; i++) {
      // Moving horizontal line
      const movingHLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      movingHLine.setAttribute('x1', '0');
      movingHLine.setAttribute('y1', `${20 + i * 30}%`);
      movingHLine.setAttribute('x2', '100%');
      movingHLine.setAttribute('y2', `${20 + i * 30}%`);
      movingHLine.setAttribute('stroke', strokeColor);
      movingHLine.setAttribute('stroke-width', String(strokeWidth * 2));
      movingHLine.setAttribute('stroke-opacity', String(strokeOpacity * 1.8));
      movingHLine.style.animation = `slideHorizontal ${speed * 1.5}s linear infinite, gridGlow ${4}s infinite ease-in-out`;
      movingHLine.style.animationDelay = `${i * 2}s`;
      gridSvg.appendChild(movingHLine);

      // Moving vertical line
      const movingVLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      movingVLine.setAttribute('x1', `${25 + i * 25}%`);
      movingVLine.setAttribute('y1', '0');
      movingVLine.setAttribute('x2', `${25 + i * 25}%`);
      movingVLine.setAttribute('y2', '100%');
      movingVLine.setAttribute('stroke', strokeColor);
      movingVLine.setAttribute('stroke-width', String(strokeWidth * 2));
      movingVLine.setAttribute('stroke-opacity', String(strokeOpacity * 1.8));
      movingVLine.style.animation = `slideVertical ${speed * 1.5}s linear infinite, gridGlow ${4}s infinite ease-in-out`;
      movingVLine.style.animationDelay = `${i * 2 + 1}s`;
      gridSvg.appendChild(movingVLine);
    }

    gridContainer.appendChild(gridSvg);

    // Cleanup function to remove the style element
    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [horizontalLines, verticalLines, strokeColor, strokeWidth, strokeOpacity, speed]);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: 'absolute', 
        inset: 0, 
        pointerEvents: 'none', 
        overflow: 'hidden', 
        opacity 
      }} 
    />
  );
}

export default GridLines;