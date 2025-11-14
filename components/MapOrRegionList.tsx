"use client";

import { motion } from "framer-motion";
import { MapPinIcon } from "@heroicons/react/24/solid";
import dynamic from "next/dynamic";

// Dynamically import map to avoid SSR issues
const ServiceMap = dynamic(() => import("./ServiceMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] bg-gray-700 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <MapPinIcon className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" />
        <p className="text-gray-400">Loading map...</p>
      </div>
    </div>
  ),
});

export default function MapOrRegionList() {
  // Example suburbs - would be replaced with actual data
  const suburbs = [
    "Suburb 1",
    "Suburb 2",
    "Suburb 3",
    "Suburb 4",
    "Suburb 5",
    "Suburb 6",
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">Service Areas</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            We proudly serve {"{{REGION}}"} and surrounding areas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Interactive Map */}
          <motion.div
            initial={{opacity: 0, x: -20}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="bg-gray-700 rounded-lg p-1 sm:p-2 overflow-hidden"
          >
            <ServiceMap region={"{{REGION}}"} suburbs={suburbs} />
          </motion.div>

          {/* Suburb List */}
          <motion.div
            initial={{opacity: 0, x: 20}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="bg-gray-700 rounded-lg p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Areas We Service</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {suburbs.map((suburb, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm sm:text-base text-gray-300 hover:text-primary transition-colors touch-manipulation"
                >
                  <MapPinIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{suburb}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-600">
              <p className="text-gray-400 text-sm leading-relaxed">
                Don&apos;t see your suburb? Give us a call - we may still service your area!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

