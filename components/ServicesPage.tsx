"use client";

import { motion } from "framer-motion";
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
      description: "Expert haircuts and styling tailored to your face shape, hair type, and lifestyle. From classic bobs and layers to modern shags and pixie cuts, we create looks that enhance your natural beauty and suit your personal style. Our experienced stylists take time to understand what you want and provide personalised recommendations.",
      icon: ScissorsIcon,
      bulletPoints: [
        "Precision cuts for all hair types",
        "Layered cuts and texturising",
        "Blunt cuts and one-length styles",
        "Dry cutting and wet cutting techniques",
        "Styling and blow-drying",
        "Hair consultations and style advice",
        "Maintenance trims and shape-ups",
      ],
    },
    {
      title: "Colour, Foils & Lightening",
      description: "Transform your hair with professional colour services. Whether you want subtle highlights, bold balayage, full colour coverage, or a complete colour correction, we use premium products and modern techniques to achieve beautiful, long-lasting results. Specialising in blonding, foils, and creative colour work.",
      icon: SparklesIcon,
      bulletPoints: [
        "Full head colour and root touch-ups",
        "Highlights and lowlights",
        "Balayage and ombré techniques",
        "Foils (partial and full head)",
        "Blonding and lightening services",
        "Colour correction and transformations",
        "Toner and gloss treatments",
      ],
    },
    {
      title: "Men's Cuts",
      description: "Classic and contemporary men's haircuts in a welcoming, boutique atmosphere. From traditional short back and sides to modern fades, textured crops, and longer styles, we provide precision cuts that suit your face shape and lifestyle. Walk-ins welcome, appointments preferred.",
      icon: UserIcon,
      bulletPoints: [
        "Classic short back and sides",
        "Modern fades and tapers",
        "Textured crops and scissor cuts",
        "Longer men's styles",
        "Beard trims and styling",
        "Clipper and scissor work",
        "Style consultations",
      ],
    },
    {
      title: "Special Occasion Hair",
      description: "Perfect styling for your special moments. Whether it's a formal, wedding, birthday celebration, or any event where you want to look and feel your best, we create elegant updos, soft curls, sleek styles, and everything in between. Book ahead to ensure your preferred time slot.",
      icon: HeartIcon,
      bulletPoints: [
        "Wedding hair styling",
        "Formal and prom updos",
        "Bridal party styling",
        "Special event curls and waves",
        "Elegant chignons and buns",
        "Half-up, half-down styles",
        "Hair accessories and finishing touches",
      ],
    },
  ];

  return (
    <section className="pt-12 md:pt-20 pb-12 md:pb-20 bg-black">
      <div className="container-custom">
        {/* Title Block */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-12 md:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">Our Hairdressing Services</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
            Whether you're after a fresh cut, a full colour transformation, or something special for an event, Amber's Hair Parlour offers personalised styling for all hair types.
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
            At <span className="text-primary font-semibold">Amber's Hair Parlour</span>, we're a long-standing local hairdresser in St George, known for friendly service and personalised care. Our boutique salon offers a welcoming atmosphere where skilled stylists specialise in colour, blonding, and modern cuts. Whether you're after a fresh cut, a full colour transformation, or something special for an event, we create looks that make you feel beautiful and confident.
          </p>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mt-4">
            All services are performed by <span className="text-white font-semibold">experienced stylists</span>, using premium products and modern techniques to ensure beautiful, long-lasting results.
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

