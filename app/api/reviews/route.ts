import { NextResponse } from "next/server";

// Cache configuration - reviews update infrequently, so we can cache aggressively
export const revalidate = 3600; // Revalidate every hour (3600 seconds)

interface GoogleReview {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface GooglePlacesResponse {
  result?: {
    reviews?: GoogleReview[];
    rating?: number;
    user_ratings_total?: number;
  };
  error_message?: string;
}

/**
 * Fetch Google Reviews using Places API
 * 
 * Setup Options:
 * 1. Google Places API (Recommended for production)
 *    - Requires: API key from Google Cloud Console
 *    - Enable: Places API and Places API (New)
 *    - Cost: ~$0.017 per request after free tier
 * 
 * 2. Google My Business API (More complex, requires OAuth)
 *    - Better for businesses managing their own listings
 * 
 * 3. Third-party services (ReviewPush, Grade.us, etc.)
 *    - Often include widgets and management tools
 * 
 * 4. Manual import (For prototyping/development)
 *    - Export reviews manually and store in database/JSON
 */
export async function GET() {
  try {
    const placeId = process.env.GOOGLE_PLACE_ID;
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;

    // If no API key configured, return mock data for development
    if (!placeId || !apiKey) {
      return NextResponse.json({
        reviews: [
          {
            author_name: "John Smith",
            rating: 5,
            relative_time_description: "2 weeks ago",
            text: "Amber's Hair Parlour gave me the best haircut I've had in years! The stylist was so friendly and really listened to what I wanted. Highly recommended!",
            time: Date.now() - 14 * 24 * 60 * 60 * 1000,
          },
          {
            author_name: "Sarah Johnson",
            rating: 5,
            relative_time_description: "1 month ago",
            text: "Amazing colour work! The foils turned out beautifully and the salon has such a warm, welcoming atmosphere. Will definitely be back!",
            time: Date.now() - 30 * 24 * 60 * 60 * 1000,
          },
          {
            author_name: "Mike Williams",
            rating: 5,
            relative_time_description: "2 months ago",
            text: "Best hairdresser in St George! Got my hair styled for a wedding and it looked absolutely perfect. The team is so talented and friendly!",
            time: Date.now() - 60 * 24 * 60 * 60 * 1000,
          },
        ],
        rating: 4.8,
        totalReviews: 47,
        source: "mock",
        placeId: placeId || null,
      });
    }
    // Fetch from Google Places API (Text Search or Details)
    // Using Places API Details endpoint
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
    
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Google Places API error: ${response.statusText}`);
    }

    const data: GooglePlacesResponse = await response.json();

    if (data.error_message) {
      throw new Error(data.error_message);
    }

    const allReviews = data.result?.reviews || [];
    const rating = data.result?.rating || 0;
    const totalReviews = data.result?.user_ratings_total || 0;

    // Filter to only show 5-star reviews
    const fiveStarReviews = allReviews.filter((review) => review.rating === 5);

    return NextResponse.json({
      reviews: fiveStarReviews.slice(0, 10), // Limit to 10 most recent 5-star reviews for desktop scroll
      rating,
      totalReviews,
      source: "google",
      placeId, // Include placeId for Google Maps link
    });
  } catch (error) {
    // Return mock data on error to prevent site breakage
    return NextResponse.json({
      reviews: [
        {
          author_name: "John Smith",
          rating: 5,
          relative_time_description: "2 weeks ago",
          text: "Amber's Hair Parlour gave me the best haircut I've had in years! The stylist was so friendly and really listened to what I wanted. Highly recommended!",
          time: Date.now() - 14 * 24 * 60 * 60 * 1000,
        },
        {
          author_name: "Sarah Johnson",
          rating: 5,
          relative_time_description: "1 month ago",
          text: "Amazing colour work! The foils turned out beautifully and the salon has such a warm, welcoming atmosphere. Will definitely be back!",
          time: Date.now() - 30 * 24 * 60 * 60 * 1000,
        },
        {
          author_name: "Mike Williams",
          rating: 5,
          relative_time_description: "2 months ago",
          text: "Best hairdresser in St George! Got my hair styled for a wedding and it looked absolutely perfect. The team is so talented and friendly!",
          time: Date.now() - 60 * 24 * 60 * 60 * 1000,
        },
      ],
      rating: 4.9,
      totalReviews: 32,
      source: "fallback",
      placeId: process.env.GOOGLE_PLACE_ID || null,
    }, { status: 200 }); // Always return 200 to prevent breaking the site
  }
}

