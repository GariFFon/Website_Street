import React, { useEffect, useState } from 'react';
import Button from '../Button';

const Hero = () => {
  // Add state to track window width for responsive carousel
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize(); // Set initial width
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  // Determine how many items to show based on screen size
  const carouselItemCount = windowWidth < 640 ? 4 : windowWidth < 1024 ? 6 : 8;

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-white rounded-full opacity-10 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-white rounded-full opacity-10 blur-[120px] animate-pulse" style={{ animationDelay: '2s', animationDuration: '8s' }} />
        <div className="absolute top-[40%] right-[20%] w-[40%] h-[40%] bg-gray-500 rounded-full opacity-10 blur-[100px] animate-pulse" style={{ animationDelay: '1s', animationDuration: '7s' }} />
        <div className="absolute bottom-[30%] left-[15%] w-[35%] h-[35%] bg-gray-400 rounded-full opacity-10 blur-[90px] animate-pulse" style={{ animationDelay: '3s', animationDuration: '9s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="flex flex-col lg:flex-row items-center w-full">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              <span className="inline-block text-sm font-bold bg-white text-black px-4 py-1 rounded-full mb-4 animate-pulse-green">NEW COLLECTION</span>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-4 leading-tight relative">
                <span className="animate-[fadeIn_1s_ease-out]">CUSTOM KICKS</span><br />
                <span className="text-white animate-[fadeIn_1s_ease-out_0.5s_both]">NEVER</span>
                <span className="animate-[fadeIn_1s_ease-out_0.7s_both]"> REPLICATED</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl max-w-lg mb-8 text-gray-300 animate-[fadeIn_1s_ease-out_1s_both]">
              Premium sneakers & streetwear with authentic, limited edition customization. Your style, your way, guaranteed 1-of-1.
            </p>
            <div className="flex flex-wrap gap-4 animate-[fadeIn_1s_ease-out_1.3s_both]">
              <Button variant="outline" size="lg" className="border-white text-white bg-black hover:bg-white hover:text-black hover:shadow-lg shadow-lg">
                Customize Now
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black hover:shadow-lg">
                Shop Collection
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative hidden lg:block">
            <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full bg-white/30 blur-xl animate-float" />
              <div className="absolute top-1/4 right-5 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full bg-gray-400/20 blur-lg animate-float" style={{ animationDelay: '1s' }} />
              
              <div className="absolute top-4 left-1/2 transform -translate-x-3/4 -rotate-12 z-10 transition-transform hover:scale-105 duration-300">
                <img 
                  src="/newdrop-sneakers.jpg" 
                  alt="Custom Jordan Sneaker" 
                  className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] object-contain drop-shadow-2xl" 
                />
                <div className="absolute -top-4 -left-4 bg-white text-black text-xs px-3 py-1 rounded-full font-bold transform rotate-12">NEW DROP</div>
              </div>
              
              <div className="absolute bottom-0 left-1/2 transform rotate-12 z-20 transition-transform hover:rotate-6 duration-300 hover:scale-105">
                <img 
                  src="/newdrop-sneakers2.jpg" 
                  alt="Custom Yeezy" 
                  className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] object-contain drop-shadow-xl" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-2 sm:py-3 md:py-4 bg-black bg-opacity-30 backdrop-blur-sm">
        <div className="relative flex whitespace-nowrap">
          <div className="flex animate-[marquee_25s_linear_infinite]">
            {Array(carouselItemCount).fill("ONE OF ONE").map((text, i) => (
              <span 
                key={i} 
                className="font-display text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mx-3 sm:mx-4 md:mx-6 lg:mx-8 opacity-20"
              >
                {text}
              </span>
            ))}
          </div>
          <div className="absolute top-0 flex animate-[marquee_25s_linear_infinite] left-[100%]">
            {Array(carouselItemCount).fill("ONE OF ONE").map((text, i) => (
              <span 
                key={i} 
                className="font-display text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mx-3 sm:mx-4 md:mx-6 lg:mx-8 opacity-20"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
