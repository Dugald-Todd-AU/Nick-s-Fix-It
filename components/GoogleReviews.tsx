"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

interface Review {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface ReviewsData {
  reviews: Review[];
  rating: number;
  totalReviews: number;
  source?: string;
  placeId?: string | null;
}

export default function GoogleReviews() {
  const [reviewsData, setReviewsData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch("/api/reviews");
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data: ReviewsData = await response.json();
        setReviewsData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load reviews");
        console.error("Error fetching reviews:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  // Ensure component is mounted before running auto-scroll
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Memoize computed values
  const displayedReviews = useMemo(() => {
    return reviewsData?.reviews.slice(0, 10) || [];
  }, [reviewsData?.reviews]);

  const googleMapsUrl = useMemo(() => {
    const placeId = reviewsData?.placeId;
    return placeId 
      ? `https://www.google.com/maps/place/?q=place_id:${placeId}`
      : "https://www.google.com/maps/search/?api=1&query=Amber's+Hair+Parlour+St+George+Queensland";
  }, [reviewsData?.placeId]);

  // Memoize event handlers
  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  // Auto-scroll functionality for desktop - MUST be before conditional returns
  useEffect(() => {
    if (!isMounted || !scrollContainerRef.current || isPaused || displayedReviews.length <= 1) return;

    const container = scrollContainerRef.current;
    let animationFrameId: number | null = null;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame
    
    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      const autoScroll = () => {
        if (!container) return;
        
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;
        const maxScroll = scrollWidth - clientWidth;

        // If content doesn't overflow, don't scroll
        if (maxScroll <= 0) return;

        scrollPosition += scrollSpeed;
        
        // Reset to beginning when reaching the end
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
          container.scrollLeft = 0;
        } else {
          container.scrollLeft = scrollPosition;
        }

        animationFrameId = requestAnimationFrame(autoScroll);
      };

      animationFrameId = requestAnimationFrame(autoScroll);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isMounted, displayedReviews.length, isPaused]);

  if (loading) {
    return (
      <section id="testimonials" className="py-12 sm:py-16 md:py-12 lg:py-16 bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-10 md:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-3 px-4">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-700 p-4 sm:p-6 rounded-lg animate-pulse"
              >
                <div className="h-6 bg-gray-600 rounded w-24 mb-4"></div>
                <div className="h-4 bg-gray-600 rounded mb-2"></div>
                <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                <div className="h-4 bg-gray-600 rounded w-1/2 mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !reviewsData) {
    return null; // Fail silently or show fallback
  }

  const { rating, totalReviews } = reviewsData;

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-12 lg:py-16 bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-3 px-4">
            What Our Customers Say
          </h2>
          {rating > 0 && (
            <div className="flex items-center justify-center gap-2 mt-3 md:mt-2">
              <div className="flex items-center gap-1">
                <StarIcon className="w-5 h-5 md:w-5 md:h-5 text-primary" />
                <span className="text-xl md:text-xl font-bold text-white">{rating.toFixed(1)}</span>
              </div>
              {totalReviews > 0 && (
                <span className="text-gray-300 text-base md:text-base">
                  ({totalReviews} {totalReviews === 1 ? "review" : "reviews"})
                </span>
              )}
            </div>
          )}
        </motion.div>
        
        {/* Mobile: Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:hidden">
          {displayedReviews.map((review, index) => (
            <motion.div
              key={`${review.author_name}-${review.time}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-700 p-4 sm:p-5 rounded-lg hover:bg-gray-600 transition-all duration-200 ease-out hover:shadow-lg hover:scale-105 hover:-translate-y-1 touch-manipulation flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating
                        ? "text-primary fill-primary"
                        : "text-gray-600"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-4 flex-1 leading-relaxed">
                &quot;{review.text}&quot;
              </p>
              <div className="border-t border-gray-600 pt-4 mt-auto">
                <p className="font-semibold text-white">{review.author_name}</p>
                <p className="text-sm text-gray-400">
                  {review.relative_time_description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: Horizontal Scroll */}
        <div className="hidden md:block">
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {displayedReviews.map((review, index) => (
              <motion.div
                key={`${review.author_name}-${review.time}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gray-700 p-5 rounded-lg hover:bg-gray-600 transition-all duration-200 ease-out hover:shadow-lg hover:scale-105 hover:-translate-y-1 flex flex-col min-w-[320px] max-w-[320px]"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? "text-primary fill-primary"
                          : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 flex-1 leading-relaxed">
                  &quot;{review.text}&quot;
                </p>
                <div className="border-t border-gray-600 pt-4 mt-auto">
                  <p className="font-semibold text-white">{review.author_name}</p>
                  <p className="text-sm text-gray-400">
                    {review.relative_time_description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* View More Button - Desktop Only */}
          {(reviewsData.source === "google" || reviewsData.source === "mock" || reviewsData.source === "fallback") && (
            <div className="text-center mt-6">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-colors"
              >
                View More Reviews
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

