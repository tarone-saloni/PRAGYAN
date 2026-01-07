import { useEffect, useRef, useMemo } from 'react';

function GridLines({ 
  strokeColor = '#ff5757', 
  horizontalLines = 20, 
  verticalLines = 20, 
  strokeOpacity = 0.4, 
  strokeWidth = 0.5, 
  speed = 5, 
  opacity = 0.4,
  enableMovingLines = true,
  enableGlow = true
}) {
  const containerRef = useRef(null);
  const styleRef = useRef(null);

  // Memoize animation styles to prevent recalculation
  const animationStyles = useMemo(() => `
    @keyframes moveDiagonal {
      0% { transform: translate3d(-100px, -100px, 0); }
      100% { transform: translate3d(100px, 100px, 0); }
    }
    
    @keyframes gridPulse {
      0%, 100% { stroke-opacity: ${strokeOpacity * 0.5}; }
      50% { stroke-opacity: ${strokeOpacity}; }
    }
    
    @keyframes slideHorizontal {
      0% { transform: translate3d(-100px, 0, 0); }
      100% { transform: translate3d(100px, 0, 0); }
    }
    
    @keyframes slideVertical {
      0% { transform: translate3d(0, -100px, 0); }
      100% { transform: translate3d(0, 100px, 0); }
    }
    
    @keyframes gridGlow {
      0%, 100% { 
        stroke-opacity: ${strokeOpacity * 0.7}; 
        filter: drop-shadow(0 0 2px ${strokeColor}); 
      }
      50% { 
        stroke-opacity: ${Math.min(strokeOpacity * 1.2, 1)}; 
        filter: drop-shadow(0 0 8px ${strokeColor}); 
      }
    }
  `, [strokeColor, strokeOpacity]);

  useEffect(() => {
    const gridContainer = containerRef.current;
    if (!gridContainer) return;

    // Remove old style if exists
    if (styleRef.current?.parentNode) {
      styleRef.current.parentNode.removeChild(styleRef.current);
    }

    // Create and cache style element
    const style = document.createElement('style');
    style.textContent = animationStyles;
    document.head.appendChild(style);
    styleRef.current = style;

    // Use DocumentFragment for better performance
    const fragment = document.createDocumentFragment();
    
    const gridSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    gridSvg.setAttribute('width', '100%');
    gridSvg.setAttribute('height', '100%');
    gridSvg.setAttribute('viewBox', '-100 -100 calc(100vw + 200) calc(100vh + 200)');
    gridSvg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    gridSvg.style.cssText = `
      position: absolute;
      inset: 0;
      will-change: transform;
      animation: moveDiagonal ${speed}s linear infinite;
    `;

    // Create defs for reusable patterns (better performance)
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    
    // Create line pattern for horizontal lines
    if (horizontalLines > 0) {
      const hPattern = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
      hPattern.setAttribute('id', 'hGrid');
      hPattern.setAttribute('width', '100');
      hPattern.setAttribute('height', `${100 / horizontalLines}`);
      hPattern.setAttribute('patternUnits', 'userSpaceOnUse');
      
      const hLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      hLine.setAttribute('x1', '0');
      hLine.setAttribute('y1', '0');
      hLine.setAttribute('x2', '100');
      hLine.setAttribute('y2', '0');
      hLine.setAttribute('stroke', strokeColor);
      hLine.setAttribute('stroke-width', String(strokeWidth));
      hLine.setAttribute('stroke-opacity', String(strokeOpacity));
      
      hPattern.appendChild(hLine);
      defs.appendChild(hPattern);
    }

    // Create line pattern for vertical lines
    if (verticalLines > 0) {
      const vPattern = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
      vPattern.setAttribute('id', 'vGrid');
      vPattern.setAttribute('width', `${100 / verticalLines}`);
      vPattern.setAttribute('height', '100');
      vPattern.setAttribute('patternUnits', 'userSpaceOnUse');
      
      const vLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      vLine.setAttribute('x1', '0');
      vLine.setAttribute('y1', '0');
      vLine.setAttribute('x2', '0');
      vLine.setAttribute('y2', '100');
      vLine.setAttribute('stroke', strokeColor);
      vLine.setAttribute('stroke-width', String(strokeWidth));
      vLine.setAttribute('stroke-opacity', String(strokeOpacity));
      
      vPattern.appendChild(vLine);
      defs.appendChild(vPattern);
    }

    gridSvg.appendChild(defs);

    // Use patterns instead of individual lines for better performance
    if (horizontalLines > 0) {
      const hRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      hRect.setAttribute('width', '100%');
      hRect.setAttribute('height', '100%');
      hRect.setAttribute('fill', 'url(#hGrid)');
      hRect.style.cssText = enableGlow 
        ? `animation: gridPulse ${speed * 0.8}s infinite alternate ease-in-out;`
        : '';
      gridSvg.appendChild(hRect);
    }

    if (verticalLines > 0) {
      const vRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      vRect.setAttribute('width', '100%');
      vRect.setAttribute('height', '100%');
      vRect.setAttribute('fill', 'url(#vGrid)');
      vRect.style.cssText = enableGlow 
        ? `animation: gridPulse ${speed * 0.8}s infinite alternate ease-in-out 0.3s;`
        : '';
      gridSvg.appendChild(vRect);
    }

    // Add special moving lines (optional for better performance)
    if (enableMovingLines) {
      const movingLinesCount = 3;
      for (let i = 0; i < movingLinesCount; i++) {
        // Moving horizontal line
        const movingHLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        movingHLine.setAttribute('x1', '0');
        movingHLine.setAttribute('y1', `${20 + i * 30}%`);
        movingHLine.setAttribute('x2', '100%');
        movingHLine.setAttribute('y2', `${20 + i * 30}%`);
        movingHLine.setAttribute('stroke', strokeColor);
        movingHLine.setAttribute('stroke-width', String(strokeWidth * 2));
        movingHLine.setAttribute('stroke-opacity', String(Math.min(strokeOpacity * 1.8, 1)));
        movingHLine.style.cssText = `
          animation: slideHorizontal ${speed * 1.5}s linear infinite ${i * 2}s
          ${enableGlow ? `, gridGlow 4s infinite ease-in-out ${i * 2}s` : ''};
          will-change: transform;
        `;
        gridSvg.appendChild(movingHLine);

        // Moving vertical line
        const movingVLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        movingVLine.setAttribute('x1', `${25 + i * 25}%`);
        movingVLine.setAttribute('y1', '0');
        movingVLine.setAttribute('x2', `${25 + i * 25}%`);
        movingVLine.setAttribute('y2', '100%');
        movingVLine.setAttribute('stroke', strokeColor);
        movingVLine.setAttribute('stroke-width', String(strokeWidth * 2));
        movingVLine.setAttribute('stroke-opacity', String(Math.min(strokeOpacity * 1.8, 1)));
        movingVLine.style.cssText = `
          animation: slideVertical ${speed * 1.5}s linear infinite ${i * 2 + 1}s
          ${enableGlow ? `, gridGlow 4s infinite ease-in-out ${i * 2 + 1}s` : ''};
          will-change: transform;
        `;
        gridSvg.appendChild(movingVLine);
      }
    }

    fragment.appendChild(gridSvg);
    gridContainer.innerHTML = '';
    gridContainer.appendChild(fragment);

    // Cleanup
    return () => {
      if (styleRef.current?.parentNode) {
        styleRef.current.parentNode.removeChild(styleRef.current);
        styleRef.current = null;
      }
    };
  }, [horizontalLines, verticalLines, strokeColor, strokeWidth, strokeOpacity, speed, enableMovingLines, enableGlow, animationStyles]);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: 'absolute', 
        inset: 0, 
        pointerEvents: 'none', 
        overflow: 'hidden', 
        opacity,
        willChange: 'opacity'
      }} 
    />
  );
}

export default GridLines;