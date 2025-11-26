"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface GalleryGridProps {
  images?: string[];
  title?: string;
  subtitle?: string;
}

export default function GalleryGrid({
  images,
  title = "Our Work",
  subtitle = "Hair transformations and styling at Amber's Hair Parlour",
}: GalleryGridProps) {
  // Placeholder images - in production these would come from props or CMS
  const defaultImages = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    src: `https://images.unsplash.com/photo-${1500000000000 + i}?w=800&h=600&fit=crop`,
    alt: `Hair styling example ${i + 1} - Haircut, colour, or styling at Amber's Hair Parlour`,
    name: `Hair Transformation ${i + 1}`,
    suburb: `St George, QLD`,
  }));

  const galleryImages = images || defaultImages;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-scroll on mobile (below lg breakpoint)
  useEffect(() => {
    if (!isMobile || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, [galleryImages.length, isPaused, isMobile]);

  // Scroll carousel to current index
  useEffect(() => {
    if (carouselRef.current && isMobile) {
      const container = carouselRef.current;
      const firstChild = container.firstElementChild as HTMLElement;
      if (firstChild) {
        const itemWidth = firstChild.offsetWidth;
        const gap = 16; // gap-4 = 1rem = 16px
        container.scrollTo({
          left: currentIndex * (itemWidth + gap),
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex, isMobile]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section className="py-12 md:py-20 bg-gray-900">
      <div className="container-custom">
        {(title || subtitle) && (
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="text-center mb-12"
          >
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">{title}</h2>
            )}
            {subtitle && (
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">{subtitle}</p>
            )}
          </motion.div>
        )}

        {/* Mobile: Carousel with auto-scroll | Desktop: Clean grid */}
        <div className="lg:hidden">
          <div
            ref={carouselRef}
            className="flex overflow-x-hidden scrollbar-hide snap-x snap-mandatory gap-4 px-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {galleryImages.map((image, index) => {
              const imageData = typeof image === "string" 
                ? { id: index, alt: `Hair styling example ${index + 1}`, name: `Hair Transformation ${index + 1}`, suburb: `St George, QLD` }
                : image;
              
              return (
                <motion.div
                  key={imageData.id}
                  initial={{opacity: 0, scale: 0.9}}
                  whileInView={{opacity: 1, scale: 1}}
                  viewport={{once: true}}
                  transition={{duration: 0.4, delay: index * 0.05}}
                  className="relative flex-shrink-0 w-[85vw] max-w-sm aspect-square overflow-hidden rounded-xl group cursor-pointer transition-all duration-200 ease-out hover:scale-105 hover:shadow-xl snap-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 flex items-center justify-center">
                    <span className="text-gray-400 text-sm font-medium">
                      {imageData.alt}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-200 flex flex-col items-center justify-center p-4">
                    <span className="opacity-0 group-hover:opacity-100 text-white font-semibold text-lg mb-1 transition-opacity text-center">
                      {imageData.name || "Hair Transformation"}
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 text-white/90 text-sm transition-opacity text-center">
                      {imageData.suburb || "St George, QLD"}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Carousel indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => {
            const imageData = typeof image === "string" 
              ? { id: index, alt: `Hair styling example ${index + 1}`, name: `Hair Transformation ${index + 1}`, suburb: `St George, QLD` }
              : image;
            
            return (
              <motion.div
                key={imageData.id}
                initial={{opacity: 0, scale: 0.9}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{duration: 0.4, delay: index * 0.05}}
                className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer transition-all duration-200 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 flex items-center justify-center">
                  <span className="text-gray-400 text-sm font-medium">
                    {imageData.alt}
                  </span>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-200 flex flex-col items-center justify-center p-4">
                  <span className="opacity-0 group-hover:opacity-100 text-white font-semibold text-lg mb-1 transition-opacity text-center">
                    {imageData.name || "{{PROJECT_1_NAME}}"}
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 text-white/90 text-sm transition-opacity text-center">
                    {imageData.suburb || "{{PROJECT_1_SUBURB}}"}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

