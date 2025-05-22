"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Button from "../Button";

interface ProcessEntry {
  title: string;                    // Phase title or name
  department: string;               // Department handling this phase
  timeframe: string;               // Expected duration or timing of the phase
  description: string;             // Short description of the phase
  responsibilities: string[];      // Key activities and responsibilities in this phase
  color: string;                  // UI theme color for this phase
}

export default function CustomizationPortal() {
  const processPath: ProcessEntry[] = [{
    title: "Select Your Item",
    department: "Product Selection Team",
    timeframe: "1-2 Days",
    description: "Choose from our curated collection or bring your own item for customization",
    responsibilities: [
      "Browse our extensive product catalog",
      "Choose your perfect base item",
      "Submit your own item option",
      "Review detailed specifications",
    ],
    color: "from-zinc-700 to-zinc-900",
  }, {
    title: "Share Your Vision",
    department: "Design Team",
    timeframe: "2-3 Days",
    description: "Work with our expert designers to bring your creative vision to life",
    responsibilities: [
      "Describe your dream design",
      "Browse inspiring templates",
      "Discuss custom elements",
      "Expert design consultation",
    ],
    color: "from-zinc-700 to-zinc-900",
  }, {
    title: "Approve The Design",
    department: "Creative Department",
    timeframe: "3-5 Days",
    description: "Review and perfect your custom design until it's exactly what you want",
    responsibilities: [
      "Review detailed mockups",
      "Request refinements",
      "Approve final design",
      "Confirm all details",
    ],
    color: "from-zinc-700 to-zinc-900",
  }, {
    title: "Receive Your 1-of-1",
    department: "Production Team",
    timeframe: "7-10 Days",
    description: "Watch as your unique piece is crafted with precision and care",
    responsibilities: [
      "Create your unique piece",
      "Rigorous quality check",
      "Premium packaging",
      "Secure delivery",
    ],
    color: "from-zinc-700 to-zinc-900",
  },
  ];

  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="customize" className="py-12 px-16 flex justify-center flex-col bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-400 mb-4">
          Customization Journey
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-zinc-400 to-zinc-700 mx-auto mb-6"></div>
        <p className="text-white/80 max-w-2xl mx-auto text-lg">
          Transform your vision into a guaranteed 1-of-1 masterpiece. Our expert artisans guide you through each step to create something truly unique and personal.
        </p>
      </motion.div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center items-center mb-16 md:hidden"
        >
          <div className="w-8 h-8 bg-gradient-to-r from-zinc-700 to-zinc-900 rounded-full shadow-[0_0_15px_rgba(161,161,170,0.5)] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="ml-2 text-white/80 font-medium">
            Process Start
          </span>
        </motion.div>

        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-zinc-400 to-zinc-700 rounded-full hidden md:block"
          style={{ height: "calc(100% )" }}
          initial={{ height: 0 }}
          whileInView={{ height: "calc(100%)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        <div className="md:hidden space-y-6">
          {processPath.map((phase, index) => {
            const isExpanded = expandedItems.includes(index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/40 rounded-xl p-6 transition-all duration-300"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(161,161,170,0.15)",
                }}
                onClick={() => toggleItem(index)}
              >
                <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-zinc-700 to-zinc-900 rounded-full text-xs font-bold text-white">
                  Phase {index + 1}
                </div>
                <div className="flex flex-col mb-4 mt-2">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {phase.title}
                  </h3>                  <p className="text-white/80 font-medium mt-2">
                    {phase.department}
                  </p>
                  <p className="text-white/60 text-sm mt-1">{phase.timeframe}</p>
                  <p className="text-white/70 text-sm mt-2 italic">{phase.description}</p>
                </div>

                <motion.div
                  initial={{ height: "auto" }}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-white/90 mb-2">Key Activities:</h4>
                      <ul className="list-none space-y-2 text-white/70 pl-1">
                        {phase.responsibilities.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{
                              opacity: isExpanded ? 1 : 0,
                              x: isExpanded ? 0 : -10,
                            }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="flex items-start"
                          >
                            <span className="inline-block w-2 h-2 rounded-full mt-1.5 mr-2 bg-zinc-500" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <div className="hidden md:block space-y-32 relative">
          {processPath.map((phase, index) => {
            const isEven = index % 2 === 0;
            const isExpanded = expandedItems.includes(index);

            return (
              <div key={index} className="relative">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`absolute top-3 ${isEven ? "right-1/2" : "left-1/2"} h-0.5 w-[10%] origin-${isEven ? "right" : "left"} bg-zinc-700`}
                />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="absolute left-[calc(50%-0.75rem)] top-0 w-6 h-6 rounded-full bg-gradient-to-r from-zinc-700 to-zinc-900 z-10 shadow-xl cursor-pointer flex items-center justify-center group/dot"
                  onClick={() => toggleItem(index)}
                  whileHover={{ scale: 1.2 }}
                >
                  <span className="block w-3 h-3 rounded-full bg-white transform scale-75 transition-all duration-500 group-hover/dot:scale-90" />
                </motion.div>

                <motion.div
                  className={`w-5/12 ${isEven ? "mr-auto" : "ml-auto"}
                    relative bg-zinc-900/50 backdrop-blur-sm border-4 border-zinc-800/40 rounded-2xl p-8
                    transition-all duration-500 cursor-pointer hover:shadow-[0_0_30px_rgba(161,161,170,0.15)]
                    hover:border-zinc-700/40 group`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  onClick={() => toggleItem(index)}
                >
                  <div className="absolute -top-3 left-6 px-4 py-1.5 bg-gradient-to-r from-zinc-700 to-zinc-900 rounded-full text-sm font-bold text-white shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                    Phase {index + 1}
                  </div>
                  <div className="flex flex-col mb-4 mt-2">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 mb-1 group-hover:from-zinc-100 group-hover:to-zinc-400 transition-all duration-500">
                      {phase.title}
                    </h3>                    <p className="text-zinc-400 font-medium mt-2 group-hover:text-zinc-300 transition-colors duration-500">
                      {phase.department}
                    </p>
                    <p className="text-white/60 text-sm mt-1 group-hover:text-white/80 transition-colors duration-500">{phase.timeframe}</p>
                    <p className="text-white/70 text-sm mt-2 italic group-hover:text-white/90 transition-colors duration-500">{phase.description}</p>
                  </div>

                  <motion.div
                    initial={{ height: "auto" }}
                    animate={{
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-bold text-white/90 mb-3 group-hover:text-zinc-300 transition-colors duration-500">Key Activities:</h4>
                        <ul className="list-none space-y-3 text-white/70 pl-1">
                          {phase.responsibilities.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{
                                opacity: isExpanded ? 1 : 0,
                                x: isExpanded ? 0 : -10,
                              }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              className="flex items-start group/item"
                            >
                              <span className="inline-block w-2.5 h-2.5 rounded-full mt-1.5 mr-3 bg-zinc-500 transform group-hover/item:scale-125 transition-all duration-500" />
                              <span className="group-hover/item:text-white transition-colors duration-300">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-xl p-8 md:p-12"
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h3 className="font-display text-4xl text-white mb-4">
              START YOUR CUSTOM PROJECT
            </h3>
            <p className="text-white/90 max-w-lg">
              Express your style with a guaranteed 1-of-1 piece. Our artists are ready
              to bring your vision to life on your favorite sneakers or streetwear.
            </p>
          </div>          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <Button variant="outline" size="lg" className="whitespace-nowrap font-bold px-8 py-6 text-xl bg-black/20 hover:bg-black/30 text-white border-2 border-zinc-700">
              BEGIN PROJECT
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
