import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useCart } from '@/lib/cart-context';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openCart, getTotalItems } = useCart();
  
  const cartItemCount = getTotalItems();

  const navLinks = [
    { name: 'Shop', href: '#shop' },
    { name: 'Customize', href: '#customize' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blog', href: '#blog' },
    { name: 'FAQ', href: '#faq' },
  ];
  
  // Handle smooth scrolling when clicking on nav links
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove the # character
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Close menu on mobile if it's open
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
      
      // Scroll to the element smoothly
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    let lastScrollTop = 0;
    
    const handleScroll = () => {
      try {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        // Check if scrolled down more than threshold
        if (scrollTop > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      } catch (error) {
        console.error('Error handling scroll event in Navbar:', error);
      }
    };

    try {
      window.addEventListener('scroll', handleScroll, { passive: true });
      // Initial check to set correct state
      handleScroll();
      
      return () => {
        try {
          window.removeEventListener('scroll', handleScroll);
        } catch (error) {
          console.error('Error removing scroll listener in Navbar:', error);
        }
      };
    } catch (error) {
      console.error('Error setting up scroll listener in Navbar:', error);
    }
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-black py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center">
            <svg 
              width="14" 
              height="35" 
              viewBox="0 0 137 398" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="mr-1"
            >
              {/* Top zigzag shape */}
              <path d="M134 2L9 214h58l66-210z" fill={isScrolled ? "black" : "white"}/>
              {/* Bottom zigzag shape */}
              <path d="M4 397l125-218h-62l-63 218z" fill={isScrolled ? "black" : "white"}/>
            </svg>
            <a href="/" className={cn("font-display text-xl sm:text-2xl tracking-tight", 
              isScrolled ? "text-black" : "text-white"
            )}>
              MODKICKS
            </a>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={cn(
                "font-medium transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left px-2 py-1",
                isScrolled 
                  ? "text-black hover:text-gray-600 after:bg-black" 
                  : "text-white hover:text-gray-300 after:bg-white"
              )}
              onClick={(e) => handleNavLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button className={cn("transition-colors", 
            isScrolled 
              ? "text-black hover:text-gray-600" 
              : "text-white hover:text-gray-300"
          )}>
            <Search size={20} />
          </button>
          <button className={cn("transition-colors", 
            isScrolled 
              ? "text-black hover:text-gray-600" 
              : "text-white hover:text-gray-300"
          )}>
            <User size={20} />
          </button>
          <button 
            onClick={openCart}
            className={cn(
              "transition-colors relative", 
              isScrolled 
                ? "text-black hover:text-gray-600" 
                : "text-white hover:text-gray-300"
            )}
          >
            <ShoppingCart size={20} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount > 9 ? '9+' : cartItemCount}
              </span>
            )}
          </button>
          
          {/* Mobile menu button */}
          <button 
            className={cn("md:hidden", 
              isScrolled ? "text-black" : "text-white"
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 z-50">
          <nav className="flex flex-col space-y-4 max-w-7xl mx-auto">
            <div className="flex items-center pb-3 border-b border-gray-100">
              <svg 
                width="12" 
                height="30" 
                viewBox="0 0 137 398" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="mr-1"
              >
                <path d="M134 2L9 214h58l66-210z" fill="black"/>
                <path d="M4 397l125-218h-62l-63 218z" fill="black"/>
              </svg>
              <span className="font-display text-xl text-black">MODKICKS</span>
            </div>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="font-medium text-black hover:text-gray-600 transition-colors py-2 border-b border-gray-100 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-black after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                onClick={(e) => handleNavLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
