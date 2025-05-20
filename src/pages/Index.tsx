import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import CustomizationPortal from '@/components/home/CustomizationPortal';
import ProductShowcase from '../components/home/ProductShowcase';
import Gallery from '../components/home/Gallery';
import Blog from '../components/home/Blog';
import Faq from '@/components/home/Faq';

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
      <Faq />
    </div>
  );
};

export default Index;
