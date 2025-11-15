"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import {
  WrenchScrewdriverIcon,
  BoltIcon,
  HomeIcon,
  CogIcon,
} from "@heroicons/react/24/solid";

export default function Services() {
  const services = [
    {
      title: "Plumbing & Gas Fitting",
      description: `Expert plumbing and gas fitting services for residential and commercial properties. Licensed professionals available 24/7.`,
      icon: WrenchScrewdriverIcon,
    },
    {
      title: "Hot Water System Installations",
      description: `Professional hot water system installations and repairs. Fast response times with fully insured tradespeople.`,
      icon: BoltIcon,
    },
    {
      title: "Emergency Leak Repairs",
      description: `Reliable 24/7 emergency leak repairs. Quality workmanship and fast response times throughout Toowoomba & Darling Downs.`,
      icon: HomeIcon,
    },
    {
      title: "Custom Jobs & General Plumbing",
      description: `Custom plumbing projects, general maintenance, and expert advice for all your plumbing and gasfitting needs.`,
      icon: CogIcon,
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

