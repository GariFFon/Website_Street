
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CustomizationPortal from '../components/CustomizationPortal';
import ProductShowcase from '../components/ProductShowcase';
import Gallery from '../components/Gallery';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Modkicks | Premium Sneakers & Custom Streetwear";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <CustomizationPortal />
        <Gallery />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
