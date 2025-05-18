import React from 'react';
import Button from './Button';

const Gallery = () => {
  const galleryItems = [
    {
      title: "Custom Jordan 1 'Graffiti'",
      description: "Hand-painted urban art design",
      artist: "Mike Lowry",
      image: "/custom-jordan-1-graffiti.jpg"
    },
    {
      title: "Anime Denim Jacket",
      description: "One Piece inspired custom piece",
      artist: "Aria Chen",
      image: "/anime-denim-jacket.jpg"
    },
    {
      title: "Electric Dunks",
      description: "Lightning effect custom paint",
      artist: "Rashid Johnson",
      image: "/electric-dunks.jpg"
    },
    {
      title: "Vintage Wash Tee",
      description: "Distressed custom graphic tee",
      artist: "Taylor Kim",
      image: "/image1.jpg"
    },
    {
      title: "Galaxy Yeezy 350",
      description: "Cosmic custom colorway",
      artist: "Stella Nova",
      image: "/yeezy-350.jpg"
    },
    {
      title: "Varsity Jacket Rework",
      description: "Upcycled vintage jacket",
      artist: "Marcus Bell",
      image: "/varsity-jacket-rework.jpg"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-modkicks-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-6xl md:text-7xl mb-4">
            ONE OF <span className="text-modkicks-green">ONE</span> GALLERY
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-400">
            Explore our showcase of past custom projects. Each piece is unique and one-of-a-kind,
            never to be replicated again.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-modkicks-green/20 transition-all duration-500"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-bold text-xl mb-2 text-white group-hover:text-modkicks-green transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <span className="text-xs text-modkicks-green border border-modkicks-green/40 px-3 py-1 rounded-full">
                      By {item.artist}
                    </span>
                    <button className="text-white hover:text-modkicks-green transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-modkicks-black">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
