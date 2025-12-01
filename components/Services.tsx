"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import {
  WrenchScrewdriverIcon,
  CogIcon,
  BatteryIcon,
  CloudIcon,
  TruckIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/solid";

export default function Services() {
  const services = [
    {
      title: "Logbook Servicing",
      description: `All makes and models, warranty-safe servicing. Keep your vehicle running smoothly with professional logbook servicing.`,
      icon: DocumentCheckIcon,
    },
    {
      title: "Mechanical Repairs",
      description: `Brakes, suspension, clutch, cooling system, engine work. Expert repairs to get you back on the road safely.`,
      icon: WrenchScrewdriverIcon,
    },
    {
      title: "Diagnostics",
      description: `Scan tools, fault detection, warning light troubleshooting. Fast and accurate diagnosis of vehicle issues.`,
      icon: CogIcon,
    },
    {
      title: "Tyres & Batteries",
      description: `Tyre replacement, puncture repairs, battery testing + replacement. Keep your vehicle rolling with quality tyres and reliable batteries.`,
      icon: BatteryIcon,
    },
    {
      title: "Air Conditioning",
      description: `Re-gas, leak detection, full AC system repairs. Stay cool with professional air conditioning services.`,
      icon: CloudIcon,
    },
    {
      title: "4WD & Rural Vehicle Servicing",
      description: `Utes, farm vehicles, heavy-use 4x4 servicing. Specialised care for rural and off-road vehicles.`,
      icon: TruckIcon,
    },
  ];

  return (
    <section id="services" className="pt-8 sm:pt-16 md:pt-16 pb-8 sm:pb-20 md:pb-20 bg-[#0B1627]">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-5 text-white mt-8 md:mt-0">Our Services</h2>
          {/* Mobile: Broken up paragraph */}
          <div className="md:hidden space-y-2 text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            <p>
              From logbook servicing to full mechanical repairs, <span className="text-secondary font-semibold">Nick's Fix It</span> provides reliable automotive care.
            </p>
            <p>
              Serving all makes and models in St George with honest service and quality workmanship.
            </p>
          </div>
          {/* Desktop: Single paragraph */}
          <p className="hidden md:block text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From logbook servicing to full mechanical repairs, Nick's Fix It provides reliable automotive care for all makes and models in St George.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7 md:gap-8">
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

