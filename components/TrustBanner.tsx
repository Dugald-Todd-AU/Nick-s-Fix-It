"use client";

import { MapPinIcon, ClockIcon, StarIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function TrustBanner() {
  const trustItems = [
    {
      icon: ClockIcon,
      highlight: "15+",
      text: "Years Experience",
      color: "text-secondary",
      bgGradient: "from-secondary/20 to-secondary/5",
      customContent: null,
    },
    {
      icon: MapPinIcon,
      highlight: "Local",
      text: "St George",
      color: "text-blue-400",
      bgGradient: "from-blue-500/20 to-blue-500/5",
      customContent: null,
    },
    {
      icon: StarIcon,
      highlight: "4.8",
      text: "44 Google Reviews",
      color: "text-yellow-400",
      bgGradient: "from-yellow-500/20 to-yellow-500/5",
      customContent: "rating",
      rating: 4.8,
      reviewCount: 44,
    },
    {
      icon: WrenchScrewdriverIcon,
      highlight: "All Makes",
      text: "& Models",
      color: "text-purple-400",
      bgGradient: "from-purple-500/20 to-purple-500/5",
      customContent: null,
    },
  ];

  // Duplicate items for seamless scroll
  const duplicatedItems = [...trustItems, ...trustItems];

  return (
    <section className="relative py-8 sm:py-10 md:py-12 bg-[#0B1627] overflow-hidden">
      <div className="relative overflow-hidden">
        {/* Scrolling container */}
        <div className="flex gap-4 sm:gap-6 md:gap-8 animate-scroll-banner w-fit">
          {duplicatedItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={`${index}-${item.text}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-full border border-white/15 shadow-lg flex-shrink-0 hover:scale-105 hover:shadow-xl hover:border-primary/30 hover:from-white/15 hover:to-white/8 transition-all duration-300 group"
              >
                <div className={`${item.color} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                {item.customContent === "rating" ? (
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    <span className={`${item.color} font-bold text-base sm:text-lg md:text-xl`}>
                      {item.highlight}
                    </span>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-4 h-4 sm:w-5 sm:h-5 ${
                            i < Math.floor(item.rating!)
                              ? "text-yellow-400 fill-yellow-400"
                              : i === Math.floor(item.rating!) && item.rating! % 1 >= 0.5
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-500"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-white font-medium text-xs sm:text-sm md:text-base">
                      {item.reviewCount} Reviews
                    </span>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1.5 sm:gap-2">
                    <span className={`${item.color} font-bold text-base sm:text-lg md:text-xl`}>
                      {item.highlight}
                    </span>
                    <span className="text-white font-medium text-sm sm:text-base md:text-lg">
                      {item.text}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

