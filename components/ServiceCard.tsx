"use client";

import { motion } from "framer-motion";
import { WrenchScrewdriverIcon, PhoneIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  index?: number;
  href?: string;
  bulletPoints?: string[];
  ctaText?: string;
  showPhoneIcon?: boolean;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon = WrenchScrewdriverIcon,
  index = 0,
  href = "#contact",
  bulletPoints = [],
  ctaText = "Call Now",
  showPhoneIcon = true,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 0.4, delay: index * 0.1}}
      className="bg-[#111C2F]/80 md:bg-[#1A2333] border border-white/10 rounded-xl hover:bg-[#1E2A3F] hover:border-primary/60 transition-all duration-200 ease-out hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] hover:-translate-y-1 group touch-manipulation flex flex-col relative overflow-hidden mb-4 md:mb-0"
    >
      {/* Subtle brand color accent bar at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-transparent opacity-70"></div>
      
      <div className="p-5 md:p-8 flex flex-col flex-1">
        {/* Header with Icon and Title */}
        <div className="flex flex-row items-start gap-3 mb-4">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 md:w-18 md:h-18 bg-[#1E2D47] md:bg-white/10 rounded-lg md:rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors border border-white/10 md:border-white/20 group-hover:border-primary/60 p-3">
              <Icon className="w-7 h-7 md:w-9 md:h-9 text-white group-hover:text-white transition-colors" />
            </div>
          </div>
          <div className="flex-1 min-w-0 pt-1">
            <h3 className="text-lg md:text-2xl font-semibold md:font-bold mb-0 text-[#2F66CC] md:text-white leading-tight group-hover:text-white transition-colors">{title}</h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm md:text-lg text-white/90 md:text-gray-200 leading-relaxed mb-6 font-normal group-hover:text-gray-100 transition-colors">{description}</p>

        {/* Bullet Points */}
        {bulletPoints.length > 0 && (
          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-300 mb-4 sm:mb-5 flex-1">
            {bulletPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-primary mt-1 flex-shrink-0 font-bold text-base">•</span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA Link */}
        <div className="mt-auto pt-4 border-t border-white/10 group-hover:border-white/20 transition-colors">
          <a 
            href={href}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold text-sm md:text-lg transition-all group/link shadow-md hover:shadow-lg hover:shadow-primary/50 hover:scale-105"
          >
            {showPhoneIcon ? (
              <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            ) : (
              <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            )}
            <span>{ctaText}</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

