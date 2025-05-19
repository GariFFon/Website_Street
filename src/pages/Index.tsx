
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/home/Hero';
import CustomizationPortal from '@/components/home/CustomizationPortal';
import ProductShowcase from '../components/home/ProductShowcase';
import Gallery from '../components/home/Gallery';
import Blog from '../components/home/Blog';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Modkicks | Premium Sneakers & Custom Streetwear";
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <ProductShowcase />
      <CustomizationPortal />
      <Gallery />
      <Blog />
    </div>
  );
};

export default Index;
