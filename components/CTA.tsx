"use client";

import { motion } from "framer-motion";
import { PhoneIcon } from "@heroicons/react/24/solid";

export default function CTA() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-primary relative overflow-hidden">
      {/* Decorative accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-secondary"></div>
      
      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white px-4">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto px-4 leading-relaxed">
            Contact {"Brendan Coonan Plumbing & Gasfitting"} today for a free quote. Serving {"Toowoomba & Darling Downs"}.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4 w-full sm:w-auto">
            <a
              href={`tel:0418 793 898`}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-primary rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 active:bg-gray-100 transition-all active:scale-95 shadow-lg touch-manipulation min-h-[48px] w-full sm:w-auto"
            >
              <PhoneIcon className="w-5 h-5 flex-shrink-0" />
              <span>Call {"0418 793 898"}</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-secondary hover:bg-secondary-dark active:bg-secondary-dark text-white rounded-lg font-semibold text-base sm:text-lg transition-all active:scale-95 shadow-lg touch-manipulation min-h-[48px] w-full sm:w-auto"
            >
              Call now for a free quote!
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

