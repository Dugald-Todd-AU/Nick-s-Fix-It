"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

interface ExperienceCounterProps {
  years?: number;
  region?: string;
}

export default function ExperienceCounter({
  years = 15,
  region = "St George, Queensland",
}: ExperienceCounterProps) {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const hasAnimatedRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  // Ensure component is mounted on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Use IntersectionObserver directly for better mobile compatibility
  useEffect(() => {
    if (!isMounted || !ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;

            // Clear any existing timer
            if (timerRef.current) {
              clearInterval(timerRef.current);
            }

            // Reset count to 0 for animation
            setCount(0);

            // Animate counter with smooth easing
            const duration = 2000; // 2 seconds
            const steps = 60;
            const increment = years / steps;
            let current = 0;

            timerRef.current = setInterval(() => {
              current += increment;
              if (current >= years) {
                setCount(years);
                if (timerRef.current) {
                  clearInterval(timerRef.current);
                  timerRef.current = null;
                }
              } else {
                setCount(Math.floor(current));
              }
            }, duration / steps);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px" }
    );

    observer.observe(ref.current);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isMounted, years]);

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Enhanced background effects for hero prominence */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-gray-900/30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_70%)] pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Counter - Prominent Hero Text - Desktop Only */}
          <div className="mb-6 sm:mb-8 md:mb-10 hidden md:block">
            <p 
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-5xl mx-auto px-4 leading-tight sm:leading-snug font-bold"
              aria-live="polite"
              aria-atomic="true"
            >
              <span className="text-primary font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-2xl inline-block">
                {count} Years
              </span>{" "}
              <span className="text-white font-bold">Of Modern</span>{" "}
              <span className="text-white font-bold">Hairdressing In</span>{" "}
              <span className="text-primary font-black drop-shadow-2xl">{region}</span>
            </p>
          </div>

          {/* Mobile Counter Text */}
          <div className="mb-6 sm:mb-8 md:mb-10 md:hidden">
            <p 
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-5xl mx-auto px-4 leading-tight sm:leading-snug font-bold"
              aria-live="polite"
              aria-atomic="true"
            >
              <span className="text-primary font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-2xl inline-block">
                {count} Years
              </span>{" "}
              <span className="text-white font-bold">Of Modern</span>{" "}
              <span className="text-white font-bold">Hairdressing In</span>{" "}
              <span className="text-primary font-black drop-shadow-2xl">{region}</span>
            </p>
          </div>

          {/* Desktop Only Section */}
          <p className="hidden md:block text-sm sm:text-base md:text-base lg:text-lg text-gray-100 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-4xl mx-auto font-semibold px-4">
            Modern hairdressing for the St George community. Cuts, colours & styling inside a warm, boutique hair parlour.
          </p>

          {/* Service Highlights - Enhanced for Hero - Hidden on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4 md:hidden">
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
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="grid grid-cols-[auto_1fr] gap-3 items-start bg-gray-800/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-gray-700/50"
              >
                <CheckCircleIcon className="w-6 h-6 sm:w-7 sm:h-7 text-primary drop-shadow-lg flex-shrink-0" />
                <span className="text-base sm:text-lg md:text-xl text-gray-100 font-semibold leading-tight">{feature}</span>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}

