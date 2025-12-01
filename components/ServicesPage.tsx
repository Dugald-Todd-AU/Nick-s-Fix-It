"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ServiceCard from "./ServiceCard";
import {
  DocumentCheckIcon,
  WrenchScrewdriverIcon,
  CogIcon,
  Battery0Icon,
  CloudIcon,
  TruckIcon,
} from "@heroicons/react/24/solid";

export default function ServicesPage() {
  const services = [
    {
      title: "Logbook Servicing",
      description: "All makes and models, warranty-safe servicing. Keep your vehicle running smoothly with professional logbook servicing that maintains your warranty.",
      icon: DocumentCheckIcon,
      bulletPoints: [
        "Manufacturer-approved servicing",
        "Warranty-safe maintenance",
        "All makes and models",
        "Oil and filter changes",
        "Fluid top-ups and checks",
        "Comprehensive vehicle inspections",
      ],
    },
    {
      title: "Mechanical Repairs",
      description: "Brakes, suspension, clutch, cooling system, engine work. Expert repairs to get you back on the road safely and reliably.",
      icon: WrenchScrewdriverIcon,
      bulletPoints: [
        "Brake repairs and replacements",
        "Suspension and steering",
        "Clutch repairs",
        "Cooling system repairs",
        "Engine diagnostics and repairs",
        "Transmission servicing",
      ],
    },
    {
      title: "Diagnostics",
      description: "Scan tools, fault detection, warning light troubleshooting. Fast and accurate diagnosis of vehicle issues using modern diagnostic equipment.",
      icon: CogIcon,
      bulletPoints: [
        "Computer diagnostics",
        "Warning light diagnosis",
        "Fault code reading",
        "Performance testing",
        "Electrical system checks",
        "Pre-purchase inspections",
      ],
    },
    {
      title: "Tyres & Batteries",
      description: "Tyre replacement, puncture repairs, battery testing + replacement. Keep your vehicle rolling with quality tyres and reliable batteries.",
      icon: Battery0Icon,
      bulletPoints: [
        "Tyre replacement and fitting",
        "Puncture repairs",
        "Wheel alignment",
        "Battery testing and replacement",
        "Tyre pressure checks",
        "Tyre rotation and balancing",
      ],
    },
    {
      title: "Air Conditioning",
      description: "Re-gas, leak detection, full AC system repairs. Stay cool with professional air conditioning services for all vehicle types.",
      icon: CloudIcon,
      bulletPoints: [
        "AC re-gas and regassing",
        "Leak detection and repair",
        "AC system diagnostics",
        "Compressor repairs",
        "Filter replacement",
        "Climate control servicing",
      ],
    },
    {
      title: "4WD & Rural Vehicle Servicing",
      description: "Utes, farm vehicles, heavy-use 4x4 servicing. Specialised care for rural and off-road vehicles that work hard.",
      icon: TruckIcon,
      bulletPoints: [
        "4WD servicing",
        "Ute and farm vehicle maintenance",
        "Heavy-duty vehicle care",
        "Off-road vehicle expertise",
        "Differential servicing",
        "Transfer case maintenance",
      ],
    },
  ];

  return (
    <>
      {/* Full-width Hero Section with Background Image */}
      <section className="relative min-h-[85vh] sm:min-h-[80vh] md:min-h-screen flex items-start md:items-center py-8 sm:py-12 md:py-20 overflow-hidden">
        {/* Background Image - Mobile */}
        <div className="absolute inset-0 z-0 md:hidden">
          <Image
            src="/Services BG 22.png"
            alt="Services Background"
            fill
            className="object-cover object-top grayscale"
            priority
            quality={90}
          />
          {/* Dark overlay for text readability - Mobile only */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Background Image - Desktop */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src="/Services BG People.jpg"
            alt="Services Background"
            fill
            className="object-cover object-center grayscale"
            priority
            quality={90}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="container-custom relative z-10 w-full pt-8 sm:pt-12 md:pt-0">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, ease: "easeOut"}}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
              <span className="text-white">Our Mechanical Services</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto px-4 leading-relaxed drop-shadow-lg">
              Quality automotive servicing and repairs for all makes and models.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Content Section */}
      <section className="pt-12 md:pt-20 pb-12 md:pb-20 bg-gray-800">
        <div className="container-custom">

        {/* Intro Section - Visual and Broken Up */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.1}}
          className="mb-12 md:mb-16 px-6"
        >
          {/* Desktop: Two Column Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg p-6 lg:p-8 border border-primary/30">
              <h3 className="text-primary text-xl lg:text-2xl font-bold mb-4">Reliable Service</h3>
              <p className="text-gray-200 text-base lg:text-lg leading-relaxed">
                At <span className="text-secondary font-semibold">Nick's Fix It</span>, we provide reliable mechanical repairs and servicing for drivers across St George.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/5 rounded-lg p-6 lg:p-8 border border-blue-500/30">
              <h3 className="text-blue-400 text-xl lg:text-2xl font-bold mb-4">Expert Care</h3>
              <p className="text-gray-200 text-base lg:text-lg leading-relaxed">
                With years of experience across all makes and models, Nick offers honest advice, quality workmanship and fast turnaround times to keep you moving.
              </p>
            </div>
          </div>

          {/* Mobile: New Content */}
          <div className="md:hidden max-w-2xl mx-auto space-y-4">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-blue-500 to-purple-500 rounded-full"></div>
              <div className="pl-6">
                <p className="text-white text-lg leading-relaxed mb-3 font-bold">
                  Honest service, expert repairs and fast turnaround times.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  <span className="text-secondary font-semibold">Nick's Fix It</span> provides comprehensive automotive servicing for all makes and models, helping St George drivers stay safe and moving with confidence.
                </p>
              </div>
            </div>
          </div>
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
    </>
  );
}

