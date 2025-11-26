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
    <section className="hidden md:block py-12 md:py-20 bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">Why Choose Us</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            A warm, boutique hair parlour serving the St George community with personalised care and modern hairdressing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.4, delay: index * 0.1}}
                className="bg-gray-700 p-4 sm:p-6 rounded-lg hover:bg-gray-600 transition-all duration-200 ease-out hover:shadow-lg hover:scale-105 hover:-translate-y-1 text-center touch-manipulation"
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

