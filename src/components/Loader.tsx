import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

// Create an optimized background dots component using Canvas
const DotsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Draw dots only once on component mount
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match the viewport
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw dots (only needs to happen once)
      const dotCount = 80; // Reduced count for better performance
      
      for (let i = 0; i < dotCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 2 + 0.5; // Size between 0.5-2.5px (smaller for better performance)
        const opacity = Math.random() * 0.3 + 0.1; // Opacity between 0.1-0.4
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      }
    };
    
    // Initial draw
    updateCanvasSize();
    
    // Handle resize (though this shouldn't happen often during loading)
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ display: 'block' }}
    />
  );
};

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [animationStep, setAnimationStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start the animation sequence
    const timeline = setTimeout(() => {
      setAnimationStep(1); // Start text animation immediately

      // Progress animation
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 3; // Changed from 2 to 3 for faster animation
          if (newProgress >= 100) {
            clearInterval(progressInterval);

            // Complete animation and trigger callback when progress reaches 100%
            const completeTimeline = setTimeout(() => {
              setAnimationStep(3);

              setTimeout(() => {
                onComplete();
              }, 400); // Decreased from 500ms to 400ms
            }, 350); // Decreased from 450ms to 350ms

            return 100;
          }
          return newProgress;
        });
      }, 40); // Decreased from 50ms to 40ms for faster animation

      return () => {
        clearInterval(progressInterval);
      };
    }, 200); // Decreased from 250ms to 200ms

    return () => clearTimeout(timeline);
  }, [onComplete]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black transition-opacity duration-500 overflow-hidden",
        animationStep >= 3 ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      {/* Static Dots Background */}
      <DotsBackground />

      {/* Circular Progress Indicator */}
      <div
        className={cn(
          "relative w-48 h-48 transition-all duration-500 mb-12",
          animationStep === 0 ? "scale-0 opacity-0" : "scale-100 opacity-100",
          animationStep >= 3 ? "scale-0 opacity-0" : ""
        )}
      >
        {/* Track */}
        <div className="absolute inset-0 rounded-full border-8 border-gray-800 shadow-inner bg-black/50 backdrop-blur-sm"></div>

        {/* Progress */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90">
            <defs>
              <linearGradient
                id="progressGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#E0E0E0" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="0" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>{" "}
            <circle
              cx="96"
              cy="96"
              r="85"
              fill="transparent"
              stroke="#333333"
              strokeWidth="2"
              opacity="0.5"
            />
            <circle
              cx="96"
              cy="96"
              r="85"
              fill="transparent"
              stroke="url(#progressGradient)"
              strokeWidth="10"
              strokeDasharray={`${2 * Math.PI * 85}`}
              strokeDashoffset={`${2 * Math.PI * 85 * (1 - progress / 100)}`}
              className="transition-all duration-300 ease-out"
              strokeLinecap="round"
              style={{
                filter: `none`,
              }}
            />
          </svg>

          {/* Single Logo Image */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Base grey logo */}
            <div
              className="relative flex items-center justify-center"
              style={{ width: "120px", height: "100px" }}
            >
              {/* Grey base image */}
              <img
                src="/logo.svg"
                alt="Logo Base"
                style={{
                  width: "120px",
                  height: "100px",
                  filter: "grayscale(0.8) opacity(0.4) brightness(0.5)",
                  transform: `scale(1.0)`,
                  position: "absolute",
                  zIndex: 10,
                }}
              />

              {/* Red filling logo with clip mask */}
              <div
                style={{
                  width: "120px",
                  position: "absolute",
                  overflow: "hidden",
                  height: "100px",
                  clipPath: `inset(${100 - progress}% 0 0 0)`,
                  bottom: 0,
                  zIndex: 20,
                  transition: "all 0.3s ease-out",
                  filter: "none",
                }}
              >
                {/* Removing redundant image */}
                <img
                  src="/logo.svg"
                  alt="Logo Filling Red"
                  className={`${progress >= 100 ? "animate-pulse" : ""}`}
                  style={{
                    width: "120px",
                    height: "100px",
                    filter:
                      progress >= 95
                        ? "drop-shadow(0 0 4px rgba(255, 0, 0, 0.7)) brightness(0.5) saturate(200%) invert(15%) sepia(100%) saturate(6000%) hue-rotate(350deg) brightness(120%)"
                        : "brightness(0.5) saturate(200%) invert(15%) sepia(100%) saturate(6000%) hue-rotate(350deg) brightness(120%)",
                    transform: `scale(1.0)`,
                    position: "absolute",
                    top: 0,
                    transition: "filter 0.3s ease-out",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Text underneath */}
      <div className="flex flex-col items-center space-y-2">
        <p
          className={cn(
            "text-white font-bold text-center transition-all duration-500",
            animationStep === 0
              ? "opacity-0 transform translate-y-4"
              : "opacity-100 transform translate-y-0",
            animationStep >= 3 ? "opacity-0" : ""
          )}
          style={{
            textShadow: `0 0 ${2 + progress / 50}px rgba(255, 255, 255, ${
              0.4 + progress / 400
            })`,
            fontSize: "1.5rem",
            letterSpacing: "0.05em",
            transition: "all 0.5s ease-out",
          }}
        >
          <span>MOD</span>
          <span className="text-modkicks-red">KICKS</span>
        </p>

        <p
          className={cn(
            "text-white font-medium text-center transition-all duration-500",
            animationStep === 0
              ? "opacity-0 transform translate-y-4"
              : "opacity-100 transform translate-y-0",
            animationStep >= 3 ? "opacity-0" : ""
          )}
          style={{
            textShadow: `0 0 ${2 + progress / 50}px rgba(255, 255, 255, ${
              0.3 + progress / 500
            })`,
            fontSize: "1.25rem",
            letterSpacing: "0.05em",
            transition: "all 0.5s ease-out",
          }}
        >
          Lacing up your kicks...
        </p>
      </div>
    </div>
  );
};

export default Loader;
