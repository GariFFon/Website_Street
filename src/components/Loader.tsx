
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [animationStep, setAnimationStep] = useState(0);
  
  useEffect(() => {
    // Start the animation sequence
    const timeline = setTimeout(() => {
      setAnimationStep(1); // Start text animation
      
      // Paint splatter animations
      const splatterTimeline = setTimeout(() => {
        setAnimationStep(2);
        
        // Complete animation and trigger callback
        const completeTimeline = setTimeout(() => {
          setAnimationStep(3);
          
          setTimeout(() => {
            onComplete();
          }, 600);
        }, 2000);
        
        return () => clearTimeout(completeTimeline);
      }, 1200);
      
      return () => clearTimeout(splatterTimeline);
    }, 300);
    
    return () => clearTimeout(timeline);
  }, [onComplete]);
  
  return (
    <div className={cn(
      "fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-500",
      animationStep >= 3 ? "opacity-0 pointer-events-none" : "opacity-100"
    )}>
      {/* Logo text animation */}
      <div className="relative">
        <h1 
          className={cn(
            "font-display text-modkicks-black tracking-wider transition-all duration-700 flex items-center gap-2",
            animationStep === 0 ? "scale-[0.1] opacity-0" : "scale-100 opacity-100"
          )}
          style={{ 
            fontSize: animationStep === 0 ? '1rem' : '6rem',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            transform: 'rotate(-5deg)'
          }}
        >
          MOD<span className="text-modkicks-green">KICKS</span>
          <Sparkles className="h-8 w-8 text-modkicks-green animate-pulse" />
        </h1>
      </div>
      
      {/* Paintball splatter effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Green paint splatter */}
        <div 
          className={cn(
            "absolute transition-all duration-700",
            animationStep >= 2 ? "opacity-80 scale-100" : "opacity-0 scale-0"
          )}
          style={{ 
            width: '350px', 
            height: '350px', 
            top: '25%', 
            left: '15%',
            backgroundImage: "radial-gradient(circle at center, rgba(57, 255, 20, 0.9) 0%, rgba(57, 255, 20, 0.7) 35%, rgba(57, 255, 20, 0.4) 70%, transparent 100%), radial-gradient(circle at 30% 40%, rgba(57, 255, 20, 0.8) 0%, transparent 60%)",
            borderRadius: '50% 60% 45% 70%/60% 40% 70% 45%',
            transform: animationStep >= 2 ? 'scale(1) rotate(-15deg)' : 'scale(0)',
            filter: 'drop-shadow(0 0 5px rgba(57, 255, 20, 0.3))',
            boxShadow: 'inset 0 0 10px 5px rgba(255, 255, 255, 0.3)'
          }}
        />
        
        {/* Blue paint splatter */}
        <div 
          className={cn(
            "absolute transition-all duration-700 delay-100",
            animationStep >= 2 ? "opacity-80 scale-100" : "opacity-0 scale-0"
          )}
          style={{ 
            width: '320px', 
            height: '290px', 
            top: '40%', 
            right: '20%',
            backgroundImage: "radial-gradient(circle at center, rgba(0, 102, 255, 0.9) 0%, rgba(0, 102, 255, 0.7) 40%, rgba(0, 102, 255, 0.4) 75%, transparent 100%), radial-gradient(circle at 60% 30%, rgba(0, 102, 255, 0.8) 0%, transparent 70%)",
            borderRadius: '60% 40% 65% 35%/40% 65% 35% 70%',
            transform: animationStep >= 2 ? 'scale(1) rotate(20deg)' : 'scale(0)',
            filter: 'drop-shadow(0 0 5px rgba(0, 102, 255, 0.3))',
            boxShadow: 'inset 0 0 15px 3px rgba(255, 255, 255, 0.4)'
          }}
        />
        
        {/* Small orange splatter */}
        <div 
          className={cn(
            "absolute transition-all duration-700 delay-150",
            animationStep >= 2 ? "opacity-80 scale-100" : "opacity-0 scale-0"
          )}
          style={{ 
            width: '200px', 
            height: '180px', 
            bottom: '20%', 
            left: '25%',
            backgroundImage: "radial-gradient(circle at center, rgba(255, 102, 0, 0.9) 0%, rgba(255, 102, 0, 0.7) 30%, rgba(255, 102, 0, 0.4) 70%, transparent 100%)",
            borderRadius: '70% 30% 50% 50%/50% 60% 40% 45%',
            transform: animationStep >= 2 ? 'scale(1) rotate(35deg)' : 'scale(0)',
            filter: 'drop-shadow(0 0 5px rgba(255, 102, 0, 0.3))',
            boxShadow: 'inset 0 0 10px 5px rgba(255, 255, 255, 0.3)'
          }}
        />
        
        {/* Purple paint drips */}
        <div 
          className={cn(
            "absolute transition-all duration-700 delay-200",
            animationStep >= 2 ? "opacity-70 scale-100" : "opacity-0 scale-0"
          )}
          style={{ 
            width: '220px', 
            height: '240px', 
            top: '15%', 
            right: '30%',
            backgroundImage: "radial-gradient(circle at center, rgba(139, 92, 246, 0.9) 0%, rgba(139, 92, 246, 0.6) 40%, rgba(139, 92, 246, 0.3) 80%, transparent 100%)",
            borderRadius: '30% 70% 40% 60%/50% 30% 70% 50%',
            transform: animationStep >= 2 ? 'scale(1) rotate(-25deg)' : 'scale(0)',
            filter: 'drop-shadow(0 0 5px rgba(139, 92, 246, 0.3))',
            boxShadow: 'inset 0 0 12px 4px rgba(255, 255, 255, 0.3)'
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
