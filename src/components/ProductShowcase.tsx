
import React from 'react';
import Button from './Button';

const ProductShowcase = () => {
  const categories = [
    {
      title: "Sneakers",
      image: "/productshowcase-sneakers.jpg",
      items: "450+ items"
    },
    {
      title: "Streetwear",
      image: "/productshowcase-streetwear.jpg",
      items: "280+ items"
    },
    {
      title: "Modkicks Originals",
      image: "/modkicks-original.jpg",
      items: "120+ items"
    },
    {
      title: "Collectibles",
      image: "/collectibles-sneakers.jpg",
      items: "85+ items"
    }
  ];

  const featuredProducts = [
    {
      name: "Jordan 1 Retro High",
      price: "$220",
      image: "/jordan-1-retro-high.jpg",
      isCustomizable: true
    },
    {
      name: "Essentials Hoodie",
      price: "$120",
      image: "/essential-hoodie.jpg",
      isCustomizable: true
    },
    {
      name: "Nike Dunk Low",
      price: "$180",
      image: "/nike-dunk-low.jpg",
      isCustomizable: true
    },
    {
      name: "Modkicks Original Tee",
      price: "$65",
      image: "/modkicks-original-tee.jpg",
      isCustomizable: true
    }
  ];

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <h2 className="font-display text-6xl mb-4 md:mb-0">
            SHOP <span className="text-black">COLLECTION</span>
          </h2>
          <Button variant="outline">
            View All Products
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
            >
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 brightness-75 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 md:p-6">
                <h3 className="font-display text-2xl md:text-3xl text-white mb-1 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                  {category.title}
                </h3>
                <div className="overflow-hidden h-8">
                  <p className="text-sm text-gray-300 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    {category.items} <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">→ Browse</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <h2 className="font-display text-4xl md:text-5xl">
            FEATURED <span className="text-black">PRODUCTS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div key={index} className="product-card group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-white rounded-t-xl overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-medium text-lg group-hover:text-gray-600 transition-colors">{product.name}</h3>
                  <span className="font-bold text-black">{product.price}</span>
                </div>
                {product.isCustomizable && (
                  <div className="mb-3">
                    <span className="inline-block bg-gray-200 text-black text-xs px-3 py-1 rounded-full font-medium border border-gray-300">
                      Customizable
                    </span>
                  </div>
                )}
                <div className="mt-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Button variant="primary" className="w-full">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
