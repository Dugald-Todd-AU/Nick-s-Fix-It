"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import {
  ScissorsIcon,
  SparklesIcon,
  UserIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

export default function Services() {
  const services = [
    {
      title: "Women's Cuts & Styling",
      description: `Expert haircuts and styling for all hair types. From classic cuts to modern trends, personalised service in our boutique salon.`,
      icon: ScissorsIcon,
    },
    {
      title: "Colour, Foils & Lightening",
      description: `Professional colour services including full colour, foils, balayage, and lightening. Transform your look with modern techniques.`,
      icon: SparklesIcon,
    },
    {
      title: "Men's Cuts",
      description: `Classic and contemporary men's haircuts. Precision cuts tailored to your style in a welcoming, boutique atmosphere.`,
      icon: UserIcon,
    },
    {
      title: "Special Occasion Hair",
      description: `Perfect styling for formals, weddings, and special events. Let us create a look that makes you feel beautiful and confident.`,
      icon: HeartIcon,
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">Our Services</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Whether you're after a fresh cut, a full colour transformation, or something special for an event, Amber's Hair Parlour offers personalised styling for all hair types.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
              href="/services"
              ctaText="View More"
              showPhoneIcon={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

