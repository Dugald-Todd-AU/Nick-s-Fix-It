"use client";

import { useState, useEffect } from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import dynamic from "next/dynamic";

// Dynamically import map to avoid SSR issues - with safer client-side mounting and Chrome compatibility
const ServiceMap = dynamic(
  () => import("./ServiceMap").catch((err) => {
    console.error("Failed to load map:", err);
    return { default: () => (
      <div className="w-full h-full min-h-[400px] bg-gray-700 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <MapPinIcon className="w-16 h-16 text-primary mx-auto mb-4" />
          <p className="text-gray-400">Map unavailable</p>
        </div>
      </div>
    )};
  }),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[400px] bg-gray-700 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <MapPinIcon className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" />
          <p className="text-gray-400">Loading map...</p>
        </div>
      </div>
    ),
  }
);

interface ServiceAreaProps {
  region?: string;
  suburbs?: string[];
  showMap?: boolean;
}

export default function ServiceArea({
  region = "Toowoomba & Darling Downs",
  suburbs = [],
  showMap = true,
}: ServiceAreaProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [mapReady, setMapReady] = useState(false);

  // Ensure client-side only rendering to prevent hydration errors
  // Add small delay for Chrome compatibility
  useEffect(() => {
    setIsMounted(true);
    // Small delay to ensure Chrome has fully initialized modules
    const timer = setTimeout(() => {
      setMapReady(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  const defaultSuburbs = [
    "Toowoomba City",
    "East Toowoomba",
    "South Toowoomba",
    "North Toowoomba",
    "Centenary Heights",
    "Kearneys Spring",
    "Middle Ridge",
    "Mount Lofty",
    "Rangeville",
    "Wilsonton",
    "Harristown",
    "Newtown",
    "Darling Heights",
    "Highfields",
    "Cambooya",
    "Clifton",
    "Gatton",
    "Pittsworth",
    "Oakey",
    "Dalby",
  ];

  const displaySuburbs = suburbs.length > 0 ? suburbs : defaultSuburbs;

  // Don't render Framer Motion until mounted to prevent hydration errors
  if (!isMounted) {
    return (
      <section className="py-12 md:py-20 bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">Service Areas</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              We proudly serve {region} and surrounding areas
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {showMap && (
              <div className="bg-gray-700 rounded-lg p-1 sm:p-2 overflow-hidden min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <MapPinIcon className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" />
                  <p className="text-gray-400">Loading map...</p>
                </div>
              </div>
            )}
            <div className="bg-gray-700 rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Areas We Service</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {displaySuburbs.map((suburb, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm sm:text-base text-gray-300"
                  >
                    <MapPinIcon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{suburb}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 bg-gray-800">
      <div className="container-custom">
        <div className={`text-center mb-12 transition-opacity duration-600 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">Service Areas</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            We proudly serve {region} and surrounding areas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Interactive Map */}
          {showMap && isMounted && mapReady ? (
            <div className="bg-gray-700 rounded-lg p-1 sm:p-2 overflow-hidden transition-opacity duration-600 opacity-100">
              <ServiceMap region={region} suburbs={suburbs} />
            </div>
          ) : showMap ? (
            <div className="bg-gray-700 rounded-lg p-1 sm:p-2 overflow-hidden min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <MapPinIcon className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" />
                <p className="text-gray-400">Loading map...</p>
              </div>
            </div>
          ) : null}

          {/* Suburb List */}
          <div className={`bg-gray-700 rounded-lg p-6 sm:p-8 transition-opacity duration-600 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Areas We Service</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {displaySuburbs.map((suburb, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm sm:text-base text-gray-300 hover:text-primary transition-colors touch-manipulation"
                >
                  <MapPinIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{suburb}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-600">
              <p className="text-gray-400 text-sm leading-relaxed">
                Don&apos;t see your suburb? Give us a call - we may still service your area!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

