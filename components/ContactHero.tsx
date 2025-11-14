"use client";

import { motion } from "framer-motion";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default function ContactHero() {
  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
            <span className="text-primary">Contact Us</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
            Get in touch for a free quote or emergency service in {"{{REGION}}"}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4 w-full sm:w-auto">
            <a
              href={`tel:{{PHONE_NUMBER}}`}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-primary hover:bg-primary-dark active:bg-primary-dark text-white rounded-lg font-semibold text-base sm:text-lg transition-all active:scale-95 shadow-lg touch-manipulation min-h-[48px] w-full sm:w-auto"
            >
              <PhoneIcon className="w-5 h-5 flex-shrink-0" />
              <span>{"{{PHONE_NUMBER}}"}</span>
            </a>
            {("{{EMAIL_ADDRESS}}" !== "{{EMAIL_ADDRESS}}") && (
              <a
                href={`mailto:{{EMAIL_ADDRESS}}`}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-gray-700 hover:bg-gray-600 active:bg-gray-600 text-white rounded-lg font-semibold text-base sm:text-lg transition-all active:scale-95 shadow-lg touch-manipulation min-h-[48px] w-full sm:w-auto"
              >
                <EnvelopeIcon className="w-5 h-5 flex-shrink-0" />
                <span className="break-all">{"{{EMAIL_ADDRESS}}"}</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

