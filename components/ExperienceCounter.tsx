"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ExperienceCounter() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Background Image - Mobile */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src="/MB BG.png"
          alt="AMBER"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Background Image - Desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/AMBER.png"
          alt="AMBER"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Subtle gradient from bottom for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none z-[1]"></div>
      
      <div className="container-custom relative z-10 w-full flex flex-col items-center justify-end pb-12 sm:pb-16 md:pb-20 min-h-[85vh] sm:min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto px-4"
        >
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">
            <span className="text-white drop-shadow-lg">Modern Hairdressing</span>
            <br />
            <span className="text-primary drop-shadow-lg">in St George</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 leading-relaxed font-light drop-shadow-md">
            Cuts, colour and styling inside a warm, boutique parlour.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

