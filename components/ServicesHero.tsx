"use client";

import { motion } from "framer-motion";
import { PhoneIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 sm:py-16 md:py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-primary">Modern Hairdressing</span>
            <br />
            <span className="text-white">Services in St George, Queensland</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
            Experienced stylists offering personalised service and modern techniques in a warm, boutique hair parlour serving St George.
          </p>

          {/* Service Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 sm:mb-8 max-w-2xl mx-auto">
            {[
              "Experienced Stylists",
              "Personalised Service",
              "Modern Techniques",
              "Boutique Salon Experience",
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-3 justify-center sm:justify-start"
              >
                <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href={`tel:0746251693`}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-primary hover:bg-primary-dark active:bg-primary-dark text-white rounded-lg font-semibold text-base sm:text-lg transition-all active:scale-95 shadow-lg touch-manipulation min-h-[48px]"
            >
              <PhoneIcon className="w-5 h-5 flex-shrink-0" />
              <span>Call {"(07) 4625 1693"}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-secondary hover:bg-secondary-dark active:bg-secondary-dark text-white rounded-lg font-semibold text-base sm:text-lg transition-all active:scale-95 shadow-lg touch-manipulation min-h-[48px]"
            >
              Book your appointment
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

