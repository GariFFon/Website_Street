import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      try {
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } catch (error) {
        console.error('Error handling scroll event:', error);
      }
    };

    try {
      window.addEventListener('scroll', toggleVisibility);
      // Initial check
      toggleVisibility();
      
      return () => {
        try {
          window.removeEventListener('scroll', toggleVisibility);
        } catch (error) {
          console.error('Error removing scroll event listener:', error);
        }
      };
    } catch (error) {
      console.error('Error setting up scroll listener:', error);
    }
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button 
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-black text-white 
                   shadow-lg transition-all duration-300 hover:scale-110
                   flex items-center justify-center"
          aria-label="Back to top"
          style={{
            background: isHovered ? 'linear-gradient(145deg, #333333, #000000)' : '#000000',
            boxShadow: isHovered ? '0 10px 25px rgba(255, 255, 255, 0.2)' : '0 4px 12px rgba(0, 0, 0, 0.15)'
          }}
        >
          <ChevronUp 
            size={24} 
            className={`transform transition-transform duration-500 ${isHovered ? '-translate-y-1' : ''}`}
          />
          {!isHovered && (
            <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-20 animate-ping"></span>
          )}
        </button>
      )}
    </>
  );
};

export default BackToTop;
