"use client";

import { motion } from "framer-motion";
import { PhoneIcon } from "@heroicons/react/24/solid";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center md:justify-start bg-gradient-to-br from-black via-gray-900 to-black py-12 sm:py-0">
      <div className="container-custom mx-auto md:mx-0 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-4 md:px-0">
            <span className="text-primary">Reliable Mechanical Repairs in St George</span>
            <br />
            <span className="text-white">Keeping St George Moving, One Fix at a Time</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto md:mx-0 px-4 md:px-0 leading-relaxed">
            Quality automotive servicing for all makes and models. Honest, local, and dependable.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start items-stretch sm:items-center px-4 md:px-0 w-full sm:w-auto">
            <a
              href={`tel:0746255654`}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-primary hover:bg-primary-dark active:bg-primary-dark text-white rounded-lg font-semibold text-base sm:text-lg transition-all active:scale-95 shadow-lg touch-manipulation min-h-[48px] w-full sm:w-auto"
            >
              <PhoneIcon className="w-5 h-5 flex-shrink-0" />
              <span>Call {"(07) 4625 5654"}</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-secondary hover:bg-secondary-dark active:bg-secondary-dark text-white rounded-lg font-semibold text-base sm:text-lg transition-all active:scale-95 shadow-lg touch-manipulation min-h-[48px] w-full sm:w-auto"
            >
              Book a Service
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

