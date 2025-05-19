import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-modkicks-black text-white pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-modkicks-red rounded-full opacity-20 blur-[100px] animate-pulse" />
        <div
          className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-modkicks-darkred rounded-full opacity-20 blur-[100px] animate-pulse"
          style={{ animationDelay: "2s", animationDuration: "8s" }}
        />
        <div
          className="absolute top-[30%] right-[20%] w-[30%] h-[30%] bg-black rounded-full opacity-10 blur-[80px] animate-pulse"
          style={{ animationDelay: "1s", animationDuration: "7s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex-1 flex items-center">
        <div className="flex flex-col lg:flex-row items-center w-full">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              <span className="inline-block text-sm font-bold bg-modkicks-red text-white px-4 py-1 rounded-full mb-4 animate-pulse-green">
                NEW COLLECTION
              </span>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-4 leading-tight relative">
                <span className="animate-[fadeIn_1s_ease-out]">
                  CUSTOM KICKS
                </span>
                <br />
                <span className="text-modkicks-red animate-[fadeIn_1s_ease-out_0.5s_both]">
                  NEVER
                </span>
                <span className="animate-[fadeIn_1s_ease-out_0.7s_both]">
                  {" "}
                  REPLICATED
                </span>
              </h1>
            </div>
            <p className="text-lg md:text-xl max-w-lg mb-8 text-gray-300 animate-[fadeIn_1s_ease-out_1s_both]">
              Premium sneakers & streetwear with authentic, limited edition
              customization. Your style, your way, guaranteed 1-of-1.
            </p>
            <div className="flex flex-wrap gap-4 animate-[fadeIn_1s_ease-out_1.3s_both]">
              <Button
                variant="red"
                size="lg"
                className="shadow-lg shadow-modkicks-red/30"
              >
                Customize Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-modkicks-black hover:shadow-lg"
              >
                Shop Collection
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full bg-modkicks-red/30 blur-xl animate-float" />
              <div
                className="absolute top-1/4 right-5 w-[120px] h-[120px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] rounded-full bg-modkicks-darkred/20 blur-lg animate-float"
                style={{ animationDelay: "1s" }}
              />

              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 -rotate-12 z-10 transition-transform hover:scale-105 duration-300">
                <img
                  src="/assets/shoe1.jpeg"
                  alt="Custom Jordan Sneaker"
                  className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] object-contain drop-shadow-2xl"
                />
                <div className="absolute -top-4 -left-4 bg-modkicks-red text-white text-xs px-3 py-1 rounded-full font-bold transform rotate-12">
                  NEW DROP
                </div>
              </div>

              <div className="absolute bottom-0 left-1/4 transform rotate-12 z-20 transition-transform hover:rotate-6 duration-300 hover:scale-105">
                <img
                  src="/assets/shoe2.jpeg"
                  alt="Custom Yeezy"
                  className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-4 z-20">
        <div className="relative flex whitespace-nowrap">
          <div className="flex animate-[marquee_25s_linear_infinite]">
            {Array(10)
              .fill("ONE OF ONE")
              .map((text, i) => (
                <span
                  key={i}
                  className="font-display text-3xl md:text-4xl mx-8 opacity-20"
                >
                  {text}
                </span>
              ))}
          </div>
          <div className="absolute top-0 flex animate-[marquee_25s_linear_infinite] left-[100%]">
            {Array(10)
              .fill("ONE OF ONE")
              .map((text, i) => (
                <span
                  key={i}
                  className="font-display text-3xl md:text-4xl mx-8 opacity-20"
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
