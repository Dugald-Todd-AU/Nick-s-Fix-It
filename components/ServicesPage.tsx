"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import {
  WrenchScrewdriverIcon,
  BoltIcon,
  HomeIcon,
  PaintBrushIcon,
  WrenchIcon,
  CogIcon,
} from "@heroicons/react/24/solid";

export default function ServicesPage() {
  const services = [
    {
      title: "{{SERVICE_1}}",
      description: "Comprehensive {{SERVICE_1}} solutions for residential and commercial properties. Our licensed professionals provide expert installation, repair, and maintenance services. Available 24/7 for emergency call-outs in Example Region.",
      icon: WrenchScrewdriverIcon,
    },
    {
      title: "{{SERVICE_2}}",
      description: "Professional {{SERVICE_2}} services with fast response times. We handle everything from routine maintenance to complex installations. Fully insured and qualified tradespeople serving Example Region.",
      icon: BoltIcon,
    },
    {
      title: "{{SERVICE_3}}",
      description: "Reliable {{SERVICE_3}} expertise you can trust. We deliver quality workmanship and excellent customer service. Licensed, insured, and available 24/7 for emergency situations throughout Example Region.",
      icon: HomeIcon,
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional trade services in {"Example Region"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

