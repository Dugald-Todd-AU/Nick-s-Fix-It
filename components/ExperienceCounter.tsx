"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function ExperienceCounter() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[85vh] flex items-center pt-12 sm:pt-16 md:pt-16 pb-8 sm:pb-12 md:pb-0 overflow-hidden bg-[#0B1627] md:bg-transparent">
      {/* Background Image - Mobile */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src="/MB BG 2.png"
          alt="Nick's Fix It - Mechanic workshop in St George, Queensland"
          fill
          className="object-cover object-center grayscale blur-[1.5px]"
          priority
          quality={90}
        />
        {/* Gradient overlay for better text readability - Mobile only */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        {/* Subtle gradient overlay behind hero text - Mobile only */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-[1]"></div>
      </div>
      
      {/* Background Image - Desktop */}
      <div className="absolute inset-0 z-0 hidden md:block overflow-hidden">
        <Image
          src="/DT BG 1.png"
          alt="Nick's Fix It - Mechanic workshop in St George, Queensland"
          fill
          className="object-cover object-top grayscale"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/55"></div>
      </div>
      
      <div className="relative z-10 w-full flex flex-col items-center md:items-end justify-start md:justify-center pt-16 sm:pt-20 md:pt-0 min-h-[70vh] sm:min-h-[75vh] md:min-h-[85vh] px-6 sm:px-8 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-right max-w-3xl w-full md:w-auto md:ml-auto flex flex-col gap-2 md:gap-0 md:space-y-0"
        >
            {/* Main Headline - Mobile: Updated text */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold tracking-tight leading-tight mb-0 md:mb-3 md:mb-4">
              {/* Mobile: New text with 15 years in pink */}
              <span className="md:hidden drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] text-white">
                Keeping St George Moving for over <span className="text-secondary">15 years</span>
              </span>
              {/* Desktop: Original structure */}
              <span className="hidden md:inline">
                <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">Reliable Mechanical Repairs</span>
                <br />
                <span className="text-secondary drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">in St George</span>
              </span>
            </h1>

            {/* Subheadline - Mobile: New text */}
            <p className="md:hidden text-base font-normal text-white/90 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] max-w-2xl mx-auto mt-2 mb-4">
              Honest, high-quality mechanical care you can depend on.
            </p>
            {/* Subheadline - Desktop */}
            <p className="hidden md:block text-xl lg:text-2xl font-normal text-gray-100 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] max-w-2xl mx-auto md:mx-0 mb-6">
              Quality automotive servicing for all makes and models.
            </p>

            {/* CTAs - Mobile: Reduced size by 30% */}
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center md:justify-end mt-4 md:mt-0 pt-0 md:pt-0">
              <a
                href={`tel:0746255654`}
                className="inline-flex items-center justify-center gap-1.5 px-4 md:px-6 py-2 md:py-3.5 bg-primary hover:bg-primary-dark active:bg-primary-dark text-white rounded-lg font-semibold text-sm md:text-base md:sm:text-lg transition-all active:scale-95 shadow-xl touch-manipulation min-h-[36px] md:min-h-[52px] w-[60%] mx-auto sm:mx-0 sm:w-auto md:w-auto"
              >
                <PhoneIcon className="w-[15px] h-[15px] md:w-5 md:h-5 flex-shrink-0" />
                Call Nick Now
              </a>
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center justify-center gap-1.5 px-6 py-3.5 bg-transparent border-2 border-white/90 hover:border-white hover:bg-white/10 text-white rounded-lg font-semibold text-base sm:text-lg transition-all active:scale-95 shadow-lg touch-manipulation min-h-[52px] w-full sm:w-auto"
              >
                Book a Service
              </Link>
            </div>
          </motion.div>
      </div>
    </section>
  );
}

