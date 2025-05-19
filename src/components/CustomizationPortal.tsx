
import React from 'react';
import Button from './Button';

const CustomizationPortal = () => {
  const customizationSteps = [
    {
      number: '01',
      title: 'Select your item',
      description: 'Choose from our catalog or send in your own item'
    },
    {
      number: '02',
      title: 'Share your vision',
      description: 'Describe your design idea or select from our templates'
    },
    {
      number: '03',
      title: 'Approve the design',
      description: 'Review and approve the digital mockup'
    },
    {
      number: '04',
      title: 'Receive your 1-of-1',
      description: 'Your unique item is created and delivered'
    }
  ];

  return (
    <section id="customize" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-6xl md:text-7xl mb-4">
            CUSTOMIZATION <span className="text-black">PORTAL</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-700">
            Transform your gear into one-of-a-kind pieces. Each custom design is 
            guaranteed to be a unique 1-of-1 creation that will never be replicated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {customizationSteps.map((step) => (
            <div 
              key={step.number}
              className="group bg-gradient-to-br from-white to-gray-100 rounded-xl p-8 shadow-lg hover:shadow-xl border border-gray-100 transition-all hover:-translate-y-2 duration-500 relative overflow-hidden"
            >
              {/* Background decorative elements */}
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gray-200/5 transition-transform duration-700 group-hover:scale-150 group-hover:bg-gray-300/10"></div>
              <div className="absolute -left-10 -bottom-10 w-16 h-16 rounded-full bg-gray-200/5 transition-transform duration-700 group-hover:scale-150 group-hover:bg-gray-300/10"></div>
              
              {/* Step number with enhanced styling */}
              <div className="font-display text-6xl bg-clip-text text-transparent bg-gradient-to-br from-black to-gray-600 mb-4 relative z-10 drop-shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:translate-x-2">
                {step.number}
              </div>
              
              {/* Step content */}
              <div className="relative z-10">
                <h3 className="font-bold text-xl mb-3 transition-colors duration-300 group-hover:text-gray-600">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-gray-400 to-black transition-all duration-700 ease-out"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-500 to-black rounded-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h3 className="font-display text-4xl text-white mb-4">
                START YOUR CUSTOM PROJECT
              </h3>
              <p className="text-gray-300 max-w-lg">
                Express your style with a guaranteed 1-of-1 piece. Our artists are ready 
                to bring your vision to life on your favorite sneakers or streetwear.
              </p>
            </div>
            <Button variant="green" size="lg" className="whitespace-nowrap">
              Begin Customization
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-gray-400/10 rounded-full blur-3xl" />
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-gray-500/10 rounded-full blur-3xl" />
    </section>
  );
};

export default CustomizationPortal;
