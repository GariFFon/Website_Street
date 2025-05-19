import { useEffect } from 'react';

/**
 * ScrollManager component adds smooth scrolling behavior to the application
 * This is a utility component that doesn't render anything
 */
const ScrollManager = () => {
  useEffect(() => {
    // Set smooth scrolling behavior on HTML element
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      // Clean up when component unmounts
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  // This component doesn't render anything
  return null;
};

export default ScrollManager;
