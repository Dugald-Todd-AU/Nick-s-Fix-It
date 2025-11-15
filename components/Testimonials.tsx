"use client";

// Use GoogleReviews component for dynamic Google Reviews integration
// Falls back to mock data if API not configured
import GoogleReviews from "./GoogleReviews";

export default function Testimonials() {
  return <GoogleReviews />;
}

