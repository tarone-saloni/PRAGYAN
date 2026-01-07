import React from 'react';

export default function GlobalStyles() {
  return (
    <style jsx global>{`
      @keyframes slideRight {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(calc(100vw + 300px));
        }
      }

      @keyframes slideLeft {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(calc(-100vw - 300px));
        }
      }

      @keyframes float {
        0%,
        100% {
          transform: translateY(0) rotate(0deg);
        }
        50% {
          transform: translateY(-20px) rotate(10deg);
        }
      }

      @keyframes floatSlow {
        0%,
        100% {
          transform: translateY(0) rotate(0deg);
        }
        50% {
          transform: translateY(-20px) rotate(10deg);
        }
      }

      @keyframes rotate3d {
        0% {
          transform: rotateY(0deg) rotateZ(0deg);
        }
        100% {
          transform: rotateY(360deg) rotateZ(360deg);
        }
      }

      @keyframes rotate3dSlow {
        0% {
          transform: rotateY(0deg) rotateZ(0deg);
        }
        100% {
          transform: rotateY(360deg) rotateZ(360deg);
        }
      }

      @keyframes glitch {
        0%,
        90%,
        100% {
          transform: translate(0);
        }
        92% {
          transform: translate(-2px, 2px);
        }
        94% {
          transform: translate(2px, -2px);
        }
        96% {
          transform: translate(-2px, -2px);
        }
      }

      .animate-slideRight {
        animation: slideRight 8s infinite linear;
      }

      .animate-slideLeft {
        animation: slideLeft 8s infinite linear;
      }

      .animate-float {
        animation: float 6s infinite ease-in-out;
      }

      .animate-floatSlow {
        animation: floatSlow 8s infinite ease-in-out;
      }

      .animate-rotate3d {
        animation: rotate3d 10s infinite linear;
      }

      .animate-rotate3dSlow {
        animation: rotate3dSlow 15s infinite linear;
      }

      .animate-glitch {
        animation: glitch 5s infinite;
      }

      /* Hide scrollbar but keep functionality */
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }

      /* Smooth scroll behavior */
      @media (max-width: 775px) {
        html {
          scroll-behavior: smooth;
        }
      }

      /* Fade in animations */
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeInDown {
        from {
          opacity: 0;
          transform: translateY(-20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes slideInTopLeft {
        from {
          opacity: 0;
          transform: translate(-50px, -50px);
        }
        to {
          opacity: 1;
          transform: translate(0, 0);
        }
      }

      @keyframes slideInTopRight {
        from {
          opacity: 0;
          transform: translate(50px, -50px);
        }
        to {
          opacity: 1;
          transform: translate(0, 0);
        }
      }

      @keyframes slideInBottomLeft {
        from {
          opacity: 0;
          transform: translate(-50px, 50px);
        }
        to {
          opacity: 1;
          transform: translate(0, 0);
        }
      }

      @keyframes slideInBottomRight {
        from {
          opacity: 0;
          transform: translate(50px, 50px);
        }
        to {
          opacity: 1;
          transform: translate(0, 0);
        }
      }

      .animate-fadeInUp {
        animation: fadeInUp 0.8s ease-out forwards;
      }

      .animate-fadeInDown {
        animation: fadeInDown 0.8s ease-out forwards;
      }

      .animate-slideInTopLeft {
        animation: slideInTopLeft 1s ease-out forwards;
      }

      .animate-slideInTopRight {
        animation: slideInTopRight 1s ease-out forwards;
      }

      .animate-slideInBottomLeft {
        animation: slideInBottomLeft 1s ease-out forwards;
      }

      .animate-slideInBottomRight {
        animation: slideInBottomRight 1s ease-out forwards;
      }

      /* Carousel slide animations */
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(100%) scale(0.95);
        }
        to {
          opacity: 1;
          transform: translateX(0) scale(1);
        }
      }

      @keyframes slideOutLeft {
        from {
          opacity: 1;
          transform: translateX(0) scale(1);
        }
        to {
          opacity: 0;
          transform: translateX(-100%) scale(0.95);
        }
      }

      /* Smooth fade */
      @keyframes smoothFade {
        0% {
          opacity: 0;
          transform: scale(1.05);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }

      .animate-slideInRight {
        animation: slideInRight 0.7s ease-out forwards;
      }

      .animate-slideOutLeft {
        animation: slideOutLeft 0.7s ease-out forwards;
      }

      .animate-smoothFade {
        animation: smoothFade 0.7s ease-out forwards;
      }
    `}</style>
  );
}