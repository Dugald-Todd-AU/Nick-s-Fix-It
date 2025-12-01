"use client";

import { motion } from "framer-motion";
import { PhoneIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function StickyCTA() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black border-t border-black/20 shadow-lg"
      style={{
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="container-custom py-1.5 sm:py-3 px-4">
        <div className="flex gap-2 sm:gap-3">
          <a
            href={`tel:0746255654`}
            className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-3 bg-primary hover:bg-primary-dark active:bg-primary-dark text-white rounded-lg font-semibold text-xs sm:text-base transition-all transform active:scale-95 shadow-md touch-manipulation min-h-[32px] sm:min-h-[44px]"
            aria-label="Call (07) 4625 5654"
          >
            <PhoneIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5 flex-shrink-0" />
            <span>Call Nick</span>
          </a>
          <Link
            href="/contact"
            className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-3 bg-gray-700 hover:bg-gray-600 active:bg-gray-600 text-white rounded-lg font-semibold text-xs sm:text-base transition-all transform active:scale-95 shadow-md touch-manipulation min-h-[32px] sm:min-h-[44px]"
          >
            <span>Book Service</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

