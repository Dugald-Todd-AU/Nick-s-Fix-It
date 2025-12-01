"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default function ContactHero() {
  const [isMounted, setIsMounted] = useState(false);

  // Ensure client-side only rendering to prevent hydration errors
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container-custom">
          <div className="text-center animate-pulse">
            <div className="h-12 bg-gray-700 rounded w-64 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-700 rounded w-full max-w-2xl mx-auto mb-8"></div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="h-12 bg-gray-700 rounded w-48"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-[85vh] sm:min-h-[80vh] md:min-h-screen flex items-end md:items-center py-8 sm:py-12 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Image - Mobile */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src="/Services BG mobile .png"
          alt="Contact Us Background"
          fill
          className="object-cover object-top grayscale"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability - Mobile only */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Bottom blur gradient for legibility - Mobile only */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 via-black/60 to-transparent backdrop-blur-sm"></div>
      </div>
      {/* Background Image - Desktop */}
      <div className="absolute inset-0 z-0 hidden md:block overflow-hidden">
        <Image
          src="/CU BG.png"
          alt="Contact Us Background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="container-custom relative z-10 w-full pb-8 sm:pb-12 md:pb-0">
        <div className={`text-center transition-opacity duration-600 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
            <span className="text-white">Contact Us</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
            Book your service or get in touch with Nick's Fix It in St George, Queensland
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4 w-full sm:w-auto">
            <a
              href={`tel:0746255654`}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-secondary hover:bg-secondary/90 active:bg-secondary/90 text-white rounded-lg font-semibold text-base sm:text-lg transition-all active:scale-95 shadow-lg touch-manipulation min-h-[48px] w-full sm:w-auto"
            >
              <PhoneIcon className="w-5 h-5 flex-shrink-0" />
              <span>{"(07) 4625 5654"}</span>
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
        </div>
      </div>
    </section>
  );
}

