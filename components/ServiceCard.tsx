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
      className="bg-gray-700 border-l-4 border-primary rounded-lg hover:bg-gray-600 hover:border-primary-dark transition-all duration-200 ease-out hover:shadow-xl hover:shadow-primary/10 hover:scale-[1.02] hover:-translate-y-1 group touch-manipulation flex flex-col relative overflow-hidden"
    >
      {/* Subtle brand color accent bar at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-dark to-transparent opacity-60"></div>
      
      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
        {/* Header with Icon and Title */}
        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors border-2 border-primary/30 group-hover:border-primary/50">
              <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            </div>
          </div>
          <div className="flex-1 min-w-0 pt-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-0 text-white leading-tight group-hover:text-primary transition-colors">{title}</h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-4 sm:mb-5 font-medium">{description}</p>

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
        <div className="mt-auto pt-2 border-t border-gray-600">
          <a 
            href={href}
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-bold text-sm sm:text-base transition-all group/link"
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

