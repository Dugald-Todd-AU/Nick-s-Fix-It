"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Image from "next/image";

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
  // Gallery images
  const defaultImages = [
    {
      id: 1,
      src: "/HT1.png",
      alt: "Hair transformation example 1 - Haircut, colour, or styling at Amber's Hair Parlour",
      name: "Hair Transformation 1",
      suburb: "St George, QLD",
    },
    {
      id: 2,
      src: "/HT 2.png",
      alt: "Hair transformation example 2 - Haircut, colour, or styling at Amber's Hair Parlour",
      name: "Hair Transformation 2",
      suburb: "St George, QLD",
    },
    {
      id: 3,
      src: "/HT3.png",
      alt: "Hair transformation example 3 - Haircut, colour, or styling at Amber's Hair Parlour",
      name: "Hair Transformation 3",
      suburb: "St George, QLD",
    },
  ];

  const galleryImages = useMemo(() => images || defaultImages, [images]);
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

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);
  const handleIndicatorClick = useCallback((index: number) => setCurrentIndex(index), []);

  return (
    <section className="py-12 md:py-12 lg:py-16 bg-gray-800">
      <div className="container-custom">
        {(title || subtitle) && (
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="text-center mb-8 md:mb-8"
          >
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-3 px-4">{title}</h2>
            )}
            {subtitle && (
              <p className="text-base sm:text-lg md:text-lg text-gray-300 max-w-2xl mx-auto px-4">{subtitle}</p>
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
                ? { id: index, src: image, alt: `Hair styling example ${index + 1}`, name: `Hair Transformation ${index + 1}`, suburb: `St George, QLD` }
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
                  <Image
                    src={imageData.src}
                    alt={imageData.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 85vw, 33vw"
                    loading={index === 0 ? "eager" : "lazy"}
                    quality={85}
                  />
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
                onClick={() => handleIndicatorClick(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-4 lg:gap-5">
          {galleryImages.map((image, index) => {
            const imageData = typeof image === "string" 
              ? { id: index, src: image, alt: `Hair styling example ${index + 1}`, name: `Hair Transformation ${index + 1}`, suburb: `St George, QLD` }
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
                <Image
                  src={imageData.src}
                  alt={imageData.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 85vw, 33vw"
                />
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
      </div>
    </section>
  );
}

