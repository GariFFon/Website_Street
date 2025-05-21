import React from 'react';
import Button from '../Button';
import { useCart } from '@/lib/cart-context';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';

const ProductShowcase = () => {
  const { addToCart } = useCart();
  const [api, setApi] = React.useState<CarouselApi>();
  const [likedProducts, setLikedProducts] = React.useState<Record<string, boolean>>({});
  
  const plugin = React.useMemo(
    () =>
      Autoplay({
        delay: 2000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  );
  
  const handleLikeProduct = (productId: string) => {
    setLikedProducts(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

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
      price: "₹16500",
      image: "/jordan-1-retro-high.jpg",
      isCustomizable: true
    },
    {
      name: "Essentials Hoodie",
      price: "₹9000",
      image: "/essential-hoodie.jpg",
      isCustomizable: true
    },
    {
      name: "Nike Dunk Low",
      price: "₹13500",
      image: "/nike-dunk-low.jpg",
      isCustomizable: true
    },
    {
      name: "Modkicks Original Tee",
      price: "₹4900",
      image: "/modkicks-original-tee.jpg",
      isCustomizable: true
    },
    {
      name: "Jordan 1 Retro High",
      price: "₹16500",
      image: "/jordan-1-retro-high.jpg",
      isCustomizable: true
    },
    {
      name: "Essentials Hoodie",
      price: "₹9000",
      image: "/essential-hoodie.jpg",
      isCustomizable: true
    },
    {
      name: "Nike Dunk Low",
      price: "₹13500",
      image: "/nike-dunk-low.jpg",
      isCustomizable: true
    },
    {
      name: "Modkicks Original Tee",
      price: "₹4900",
      image: "/modkicks-original-tee.jpg",
      isCustomizable: true
    }
  ];

  return (
    <section id="shop" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="font-display text-6xl mb-4 md:mb-0 text-white"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            SHOP <span className="text-zinc-400">COLLECTION</span>
          </motion.h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              View All Products
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer border border-zinc-800 hover:border-zinc-600 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 brightness-50 group-hover:brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent flex flex-col justify-end p-4 md:p-6">
                <h3 className="font-display text-2xl md:text-3xl text-white mb-1 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                  {category.title}
                </h3>
                <div className="overflow-hidden h-8">
                  <p className="text-sm text-zinc-300 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    {category.items} <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">→ Browse</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>        

        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-white">
            FEATURED <span className="text-zinc-400">PRODUCTS</span>
          </h2>
        </motion.div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin]}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {featuredProducts.map((product, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">                  
                  <motion.div 
                    className="product-card group relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all duration-300 h-full mx-2"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  >
                    <div className="aspect-square bg-gradient-to-br from-zinc-900 to-black rounded-t-xl overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-90"
                      />                      

                      <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          className={`rounded-full w-8 h-8 flex items-center justify-center border transition-all duration-300 ${
                            likedProducts[`product-${index}`] 
                              ? "bg-red-500 border-red-600" 
                              : "bg-zinc-800 border-zinc-700 hover:bg-zinc-700"
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleLikeProduct(`product-${index}`);
                          }}
                        >
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill={likedProducts[`product-${index}`] ? "white" : "none"} 
                            stroke="white" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-medium text-lg text-white group-hover:text-zinc-300 transition-colors">{product.name}</h3>
                        <span className="font-bold text-white">{product.price}</span>
                      </div>
                      {product.isCustomizable && (
                        <div className="mb-3">
                          <span className="inline-block bg-zinc-800 text-zinc-200 text-xs px-3 py-1 rounded-full font-medium border border-zinc-700">
                            Customizable
                          </span>
                        </div>
                      )}
                      <motion.div 
                        className="mt-3 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >                        
                        <Button
                          variant="outline"
                          className="w-full text-white border-zinc-700 hover:bg-zinc-800"
                          onClick={() => addToCart({
                            id: `product-${index}`,
                            name: product.name,
                            price: typeof product.price === 'string'
                              ? parseFloat(product.price.replace('₹', ''))
                              : 0,
                            image: product.image
                          })}
                        >
                          Add to Cart
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>            
            <CarouselPrevious className="absolute left-0 -translate-x-1/2 h-20 w-10 rounded-md border border-zinc-700 bg-zinc-900/90 hover:bg-zinc-800 text-white" />
            <CarouselNext className="absolute right-0 translate-x-1/2 h-20 w-10 rounded-md border border-zinc-700 bg-zinc-900/90 hover:bg-zinc-800 text-white" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
