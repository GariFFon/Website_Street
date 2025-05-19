
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [animationStep, setAnimationStep] = useState(0);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Progressive loading animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 4;
      });
    }, 50);
    
    // Start the animation sequence
    const timeline = setTimeout(() => {
      setAnimationStep(1); // Start logo animation
      
      // Complete animation after showing logo
      const completeTimeline = setTimeout(() => {
        setAnimationStep(2);
        
        setTimeout(() => {
          onComplete();
        }, 800);
      }, 2200);
      
      return () => clearTimeout(completeTimeline);
    }, 500);
    
    return () => {
      clearTimeout(timeline);
      clearInterval(progressInterval);
    };
  }, [onComplete]);
  
  return (
    <div className={cn(
      "fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-black to-gray-900 transition-opacity duration-700",
      animationStep >= 2 ? "opacity-0 pointer-events-none" : "opacity-100"
    )}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gray-800/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gray-800/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-700/5 rounded-full blur-2xl" />
      </div>
      
      {/* Logo Container with Animation */}
      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center">
          {/* Logo SVG with enhanced animation */}
          <div
            className={cn(
              "transition-all duration-1000 transform",
              animationStep === 0 ? "scale-0 opacity-0" : 
              "scale-100 opacity-100 animate-float"
            )}
          >
            <img 
              src="/logo.svg" 
              alt="ModKicks Logo" 
              className={cn(
                "w-32 h-auto transition-all duration-700", 
                animationStep >= 1 ? "filter drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" : ""
              )}
            />
          </div>
          
          {/* Text logo animation with enhanced styling */}
          <h1 
            className={cn(
              "font-display text-white tracking-widest transition-all duration-1000 mt-6 relative z-10",
              animationStep === 0 ? "scale-[0.1] opacity-0 translate-y-10" : 
              "scale-100 opacity-100 translate-y-0"
            )}
            style={{ 
              fontSize: animationStep === 0 ? '1rem' : '4.5rem',
              letterSpacing: '0.15em',
              textShadow: '0 0 20px rgba(255,255,255,0.3)'
            }}
          >
            MOD<span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">KICKS</span>
          </h1>
          
          {/* Loading progress bar */}
          <div className="mt-12 w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-gray-400 to-white transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-gray-500 mt-3 text-sm font-light tracking-wider">
            {progress >= 100 ? "READY" : "LOADING..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
