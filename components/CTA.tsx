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
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-4 text-white px-4">
            Ready to Book Your Service?
          </h2>
          <p className="text-base sm:text-lg md:text-lg mb-6 sm:mb-7 md:mb-6 text-white/90 max-w-2xl mx-auto px-4 leading-relaxed">
            Contact Nick's Fix It today to book your vehicle servicing or repairs. Serving St George, Queensland.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4 w-full sm:w-auto">
            <a
              href={`tel:0746255654`}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-primary rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 active:bg-gray-100 transition-all active:scale-95 shadow-lg touch-manipulation min-h-[52px] w-full sm:w-auto"
            >
              <PhoneIcon className="w-5 h-5 flex-shrink-0" />
              <span>Call {"(07) 4625 5654"}</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-primary hover:bg-gray-100 active:bg-gray-100 rounded-lg font-semibold text-base sm:text-lg transition-all active:scale-95 shadow-lg touch-manipulation min-h-[52px] w-full sm:w-auto"
            >
              Book a Service
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

