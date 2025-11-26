"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ServiceCard from "./ServiceCard";
import {
  ScissorsIcon,
  SparklesIcon,
  UserIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

export default function ServicesPage() {
  const services = [
    {
      title: "Women's Cuts & Styling",
      description: "Expert haircuts and styling tailored to you. From classic bobs to modern shags, we create looks that enhance your natural beauty.",
      icon: ScissorsIcon,
      bulletPoints: [
        "Precision cuts for all hair types",
        "Layered cuts and texturising",
        "Blunt cuts and one-length styles",
        "Styling and blow-drying",
        "Hair consultations",
        "Maintenance trims",
      ],
    },
    {
      title: "Colour, Foils & Lightening",
      description: "Professional colour services using premium products. Specialising in blonding, foils, and creative colour work.",
      icon: SparklesIcon,
      bulletPoints: [
        "Full head colour and root touch-ups",
        "Highlights and lowlights",
        "Balayage and ombré",
        "Foils (partial and full head)",
        "Blonding and lightening",
        "Colour correction",
        "Toner and gloss treatments",
      ],
    },
    {
      title: "Men's Cuts",
      description: "Classic and contemporary men's haircuts in a welcoming, boutique atmosphere. Walk-ins welcome, appointments preferred.",
      icon: UserIcon,
      bulletPoints: [
        "Classic short back and sides",
        "Modern fades and tapers",
        "Textured crops and scissor cuts",
        "Longer men's styles",
        "Beard trims and styling",
        "Style consultations",
      ],
    },
    {
      title: "Special Occasion Hair",
      description: "Perfect styling for your special moments. Elegant updos, soft curls, and sleek styles. Book ahead to secure your preferred time.",
      icon: HeartIcon,
      bulletPoints: [
        "Wedding hair styling",
        "Formal and prom updos",
        "Bridal party styling",
        "Special event curls and waves",
        "Elegant chignons and buns",
        "Half-up, half-down styles",
      ],
    },
  ];

  return (
    <>
      {/* Full-width Hero Section with Background Image */}
      <section className="relative min-h-[85vh] sm:min-h-screen flex items-center py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Servcies BG.jpg"
            alt="Services Background"
            fill
            className="object-cover grayscale"
            priority
            quality={90}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="container-custom relative z-10 w-full">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, ease: "easeOut"}}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
              <span className="text-white">Our Hairdressing Services</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto px-4 leading-relaxed drop-shadow-lg">
              Cuts, colour and styling tailored to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Content Section */}
      <section className="pt-12 md:pt-20 pb-12 md:pb-20 bg-gray-800">
        <div className="container-custom">

        {/* Intro Paragraph */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.1}}
          className="max-w-3xl mx-auto mb-12 md:mb-16 px-6 text-center"
        >
          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
            At <span className="text-primary font-semibold">Amber's Hair Parlour</span>, we offer friendly, personalised hairdressing for the St George community. Our stylists specialise in modern cuts, blondes and colour work. Every service is performed with quality products and professional care.
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
    </>
  );
}

