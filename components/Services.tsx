"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import {
  WrenchScrewdriverIcon,
  BoltIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";

export default function Services() {
  const services = [
    {
      title: "{{SERVICE_1}}",
      description: `Expert {{SERVICE_1}} services for residential and commercial properties in Example Region. Licensed professionals available 24/7 for emergency call-outs.`,
      icon: WrenchScrewdriverIcon,
    },
    {
      title: "{{SERVICE_2}}",
      description: `Professional {{SERVICE_2}} solutions with fast response times. Fully insured and qualified tradespeople serving Example Region.`,
      icon: BoltIcon,
    },
    {
      title: "{{SERVICE_3}}",
      description: `Reliable {{SERVICE_3}} expertise you can trust. Quality workmanship and excellent customer service throughout Example Region.`,
      icon: HomeIcon,
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
            Professional services you can trust
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

