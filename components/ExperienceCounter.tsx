"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ExperienceCounter() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen md:min-h-[68.75vh] flex items-center py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Background Image - Mobile */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src="/MB BG V2.png"
          alt="AMBER"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Enhanced dark overlay for text readability - Mobile only */}
        <div className="absolute inset-0 bg-black/55"></div>
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
      
      {/* Subtle gradient from bottom for legibility - Desktop only */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none z-[1] hidden md:block"></div>
      
      <div className="relative z-10 w-full flex flex-col items-center md:items-start justify-start md:justify-end pt-[43px] pb-16 md:pt-0 md:pb-20 min-h-[85vh] sm:min-h-screen md:min-h-[68.75vh] px-4 sm:px-6 md:pr-6 md:pl-8 lg:pr-8 lg:pl-[2.7rem] md:max-w-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left max-w-[85%] md:max-w-lg mx-auto md:mx-0 md:px-0"
        >
          {/* Main Headline */}
          <h1 className="text-[36px] sm:text-3xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-6 leading-tight">
            <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Modern Hairdressing</span>
            <br />
            <span className="text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-[34px] sm:text-[28px] md:text-6xl lg:text-7xl">in St George</span>
          </h1>

          {/* Subheadline */}
          <p className="text-[20px] sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-100 opacity-75 md:opacity-100 leading-relaxed font-light drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
            Cuts, colour and styling inside a warm, boutique parlour.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

