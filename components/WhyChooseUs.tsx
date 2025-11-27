"use client";

import { motion } from "framer-motion";
import {
  HeartIcon,
  SparklesIcon,
  MapPinIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

export default function WhyChooseUs() {
  const features = [
    {
      icon: HeartIcon,
      title: "Experienced Stylists",
      description: "Skilled hairdressers with expertise in colour, blonding, and modern cuts",
    },
    {
      icon: SparklesIcon,
      title: "Personalised Service",
      description: "Friendly, boutique salon experience tailored to your individual style",
    },
    {
      icon: MapPinIcon,
      title: "Local & Community-Driven",
      description: `A long-standing local business serving St George with warmth and care`,
    },
    {
      icon: UserGroupIcon,
      title: "Modern Techniques",
      description: "Premium products and contemporary styling methods for beautiful results",
    },
  ];

  return (
    <section className="hidden md:block py-12 md:py-12 lg:py-16 bg-gray-800">
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
            A warm, boutique hair parlour serving the St George community with personalised care and modern hairdressing
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
                className="bg-gray-700 p-4 sm:p-5 md:p-4 lg:p-5 rounded-lg hover:bg-gray-600 transition-all duration-200 ease-out hover:shadow-lg hover:scale-105 hover:-translate-y-1 text-center touch-manipulation"
              >
                <div className="flex justify-center mb-3 sm:mb-3 md:mb-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-6 md:h-6 lg:w-7 lg:h-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-lg lg:text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-sm sm:text-base md:text-sm lg:text-base text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

