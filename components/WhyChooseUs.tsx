"use client";

import { motion } from "framer-motion";
import {
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

export default function WhyChooseUs() {
  const features = [
    {
      icon: WrenchScrewdriverIcon,
      title: "Experienced Mechanic",
      description: "Years of experience across all makes and models, with expertise in rural vehicle servicing",
    },
    {
      icon: ShieldCheckIcon,
      title: "Honest & Reliable",
      description: "Transparent pricing and honest communication. Quality workmanship you can trust",
    },
    {
      icon: MapPinIcon,
      title: "Local & Community-Driven",
      description: `A trusted local business serving St George drivers with dependable mechanical care`,
    },
    {
      icon: ClockIcon,
      title: "Fast Turnaround",
      description: "Quick diagnostics and efficient repairs to get you back on the road as soon as possible",
    },
  ];

  return (
    <section className="hidden md:block py-16 md:py-20 bg-[#0B1627]">
      <div className="container-custom">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-8 md:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-3 px-4">Why Choose Us</h2>
          <p className="text-base sm:text-lg md:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Reliable mechanical repairs and servicing for drivers across St George. Honest advice, quality workmanship and fast turnaround times
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.4, delay: index * 0.1}}
                className="bg-[#1A2333] border border-white/10 p-6 md:p-8 rounded-xl hover:bg-[#1E2A3F] hover:border-primary/60 transition-all duration-200 ease-out hover:shadow-lg hover:shadow-primary/30 hover:scale-105 hover:-translate-y-1 text-center touch-manipulation group"
              >
                <div className="flex justify-center mb-3 sm:mb-3 md:mb-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-primary/20 border-2 border-primary/40 rounded-full flex items-center justify-center group-hover:bg-primary/30 group-hover:border-primary/60 transition-all">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-6 md:h-6 lg:w-7 lg:h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-lg lg:text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-sm sm:text-base md:text-sm lg:text-base text-gray-200 group-hover:text-gray-100 leading-relaxed transition-colors">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

