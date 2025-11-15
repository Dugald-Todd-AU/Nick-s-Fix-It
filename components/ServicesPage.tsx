"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import {
  WrenchScrewdriverIcon,
  BoltIcon,
  HomeIcon,
  CogIcon,
} from "@heroicons/react/24/solid";

export default function ServicesPage() {
  const services = [
    {
      title: "Plumbing & Gas Fitting",
      description: "Expert plumbing and gas fitting services for homeowners, landlords, real estate agents, and commercial clients. From minor repairs to major installations, we provide fully licensed workmanship with fast turnaround times and a strong focus on safety, reliability, and customer care.",
      icon: WrenchScrewdriverIcon,
      bulletPoints: [
        "Burst pipes, leaks, and emergency repairs",
        "New plumbing installations for renovations",
        "Gas appliance installation & servicing",
        "Toilet, tap, and fixture repairs",
        "Blocked drains and drain diagnostics",
        "Water pressure issues & pipe replacements",
        "Compliance checks for plumbing & gas systems",
      ],
    },
    {
      title: "Hot Water System Installations & Repairs",
      description: "Professional hot water system installations and repairs for electric, gas, solar, and heat pump systems. We diagnose issues quickly and provide honest advice to keep your hot water running safely and efficiently.",
      icon: BoltIcon,
      bulletPoints: [
        "New system installations (all major brands)",
        "Fast repair service for no-hot-water issues",
        "Hot water tank replacements",
        "Thermostat & element repairs",
        "Gas hot water troubleshooting",
        "Safety checks and system servicing",
        "Advice on energy-efficient water heating",
      ],
    },
    {
      title: "Emergency Leak Repairs (24/7 Call-Out)",
      description: "Reliable 24/7 emergency plumbing support for urgent leak repairs, burst pipes, and water system failures. We respond quickly to minimise damage and restore function as fast as possible — day or night.",
      icon: HomeIcon,
      bulletPoints: [
        "Burst pipe isolation & repairs",
        "Leak detection",
        "Blocked drains & overflowing fixtures",
        "Gas leak response (licensed repair)",
        "After-hours emergency call-outs",
        "Temporary fixes & permanent repairs",
        "Fast arrival times across Toowoomba & region",
      ],
    },
    {
      title: "Custom Jobs & General Plumbing Help",
      description: "Need something specific or not sure what service you need? We handle custom plumbing projects, general maintenance, and provide expert advice for all your plumbing and gasfitting needs.",
      icon: CogIcon,
      bulletPoints: [
        "Custom plumbing solutions",
        "General maintenance & servicing",
        "Plumbing consultations & advice",
        "Renovation plumbing planning",
        "Fixture upgrades & replacements",
        "Water efficiency improvements",
        "Commercial plumbing services",
      ],
    },
  ];

  return (
    <section className="pt-12 md:pt-20 pb-12 md:pb-20 bg-gray-900">
      <div className="container-custom">
        {/* Title Block */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-12 md:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">Our Plumbing & Gas Services</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
            Comprehensive, reliable, and fully licensed trade services for homes and businesses across Toowoomba & Darling Downs.
          </p>
        </motion.div>

        {/* Hero Intro Paragraph */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.1}}
          className="max-w-[820px] mx-auto mb-12 md:mb-20 px-6"
        >
          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
            At <span className="text-primary font-semibold">Brendan Coonan Plumbing & Gasfitting</span>, we provide a complete range of residential and commercial plumbing solutions backed by <span className="text-primary font-semibold">over 30 years</span> of hands-on experience. Whether it's repairing a burst pipe, installing a new hot water system, or responding to an urgent after-hours call-out, our team delivers fast, reliable workmanship you can trust.
          </p>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mt-4">
            All services are performed by <span className="text-white font-semibold">licensed and insured tradespeople</span>, using quality parts and proven techniques to ensure long-lasting results.
          </p>
        </motion.div>

        {/* Service Cards Section */}
        <div className="bg-gray-800/60 rounded-xl p-4 sm:p-6 md:p-8 mt-12 md:mt-16 border border-gray-700/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
                bulletPoints={service.bulletPoints}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

