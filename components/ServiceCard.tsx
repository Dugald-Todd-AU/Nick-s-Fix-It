"use client";

import { motion } from "framer-motion";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  index?: number;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon = WrenchScrewdriverIcon,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 0.4, delay: index * 0.1}}
      className="bg-gray-700 p-4 sm:p-6 rounded-lg hover:bg-gray-600 transition-all duration-200 ease-out hover:shadow-lg hover:scale-105 hover:-translate-y-1 group touch-manipulation"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-white">{title}</h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

