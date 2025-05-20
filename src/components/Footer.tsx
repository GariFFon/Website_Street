import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-gray-600 via-white to-gray-800"></div>
      <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-white opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div variants={itemVariants}>
            <h3 className="font-display text-3xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">MODKICKS</h3>
            <p className="text-gray-400 mb-6">
              Premium sneakers & streetwear with authentic, limited edition customization.
              Your style, your way, guaranteed 1-of-1.
            </p>
            <motion.div 
              className="flex space-x-4"
              variants={itemVariants}
            >
              <a href="#" className="text-white hover:text-gray-300 transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20">
                <Facebook size={20} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-4">Shop</h4>
            <motion.ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sneakers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Streetwear</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Modkicks Originals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Collectibles</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">New Arrivals</a></li>
            </motion.ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-4">Customization</h4>
            <motion.ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Start A Project</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Artist Collaborations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
            </motion.ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-4">Contact & Support</h4>
            <motion.ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </motion.ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative"
          variants={itemVariants}
        >
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
          <div className="pt-10 mt-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center mr-2">
                  <span className="text-black font-bold text-xs">MK</span>
                </div>
                <p className="text-gray-500 text-sm">
                  © {new Date().getFullYear()} Modkicks. All rights reserved.
                </p>
              </div>
              <div className="flex flex-wrap justify-center space-x-6">
                <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors relative hover-underline">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors relative hover-underline">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors relative hover-underline">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
