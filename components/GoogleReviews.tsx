"use client";

import { useState, useEffect } from "react";
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
}

export default function GoogleReviews() {
  const [reviewsData, setReviewsData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  if (loading) {
    return (
      <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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

  const { reviews, rating, totalReviews } = reviewsData;

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">
            What Our Customers Say
          </h2>
          {rating > 0 && (
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex items-center gap-1">
                <StarIcon className="w-6 h-6 text-primary" />
                <span className="text-2xl font-bold text-white">{rating.toFixed(1)}</span>
              </div>
              {totalReviews > 0 && (
                <span className="text-gray-300 text-lg">
                  ({totalReviews} {totalReviews === 1 ? "review" : "reviews"})
                </span>
              )}
            </div>
          )}
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={`${review.author_name}-${review.time}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-700 p-4 sm:p-6 rounded-lg hover:bg-gray-600 transition-all duration-200 ease-out hover:shadow-lg hover:scale-105 hover:-translate-y-1 touch-manipulation flex flex-col"
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
        {reviewsData.source === "google" && (
          <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps/place/?cid=YOUR_PLACE_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark text-sm font-semibold transition-colors inline-flex items-center gap-1"
            >
              Read more reviews on Google
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
    </section>
  );
}

