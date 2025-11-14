"use client";

import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  index?: number;
}

export default function TestimonialCard({
  name,
  location,
  rating,
  text,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 0.4, delay: index * 0.1}}
      className="bg-gray-700 p-6 rounded-lg h-full flex flex-col transition-all duration-200 ease-out hover:shadow-lg hover:scale-105 hover:-translate-y-1"
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-secondary fill-secondary" : "text-gray-600"
            }`}
          />
        ))}
      </div>
      <p className="text-gray-300 mb-4 flex-1 italic">&quot;{text}&quot;</p>
      <div className="border-t border-gray-600 pt-4">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-gray-400">{location}</p>
      </div>
    </motion.div>
  );
}

