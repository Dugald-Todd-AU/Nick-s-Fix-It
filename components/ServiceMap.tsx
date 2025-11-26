"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface ServiceMapProps {
  center?: [number, number]; // [lat, lng]
  zoom?: number;
  region?: string;
  suburbs?: string[];
}

// Fix for default marker icons in Next.js - using CDN icons
const createDefaultIcon = () => {
  return L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
};

export default function ServiceMap({
  center = [-28.0369, 148.5811], // St George, Queensland
  zoom = 12,
  region = "St George, Queensland",
  suburbs = [],
}: ServiceMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<L.Marker[]>([]);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Initialize map
    const map = L.map(mapContainerRef.current, {
      center,
      zoom,
      zoomControl: true,
      scrollWheelZoom: true,
      attributionControl: true,
    });

    // Add legible map tile layer - using CartoDB Positron (light) with dark theme overlay
    // This provides better legibility while maintaining dark theme aesthetics
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 19,
    }).addTo(map);

    // Set default marker icon
    const defaultIcon = createDefaultIcon();
    L.Marker.prototype.options.icon = defaultIcon;

    // Add main region marker with styled popup
    const mainMarker = L.marker(center, { icon: defaultIcon })
      .addTo(map)
      .bindPopup(
        `<div style="color: #1f2937; font-weight: 600; font-size: 0.875rem; text-align: center;">${region}</div>`
      );
    markersRef.current.push(mainMarker);

    mapRef.current = map;

    // Cleanup
    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current = [];
    };
  }, [center, zoom, region]);

  return (
    <div
      ref={mapContainerRef}
      className="w-full h-full min-h-[400px] rounded-lg overflow-hidden"
      style={{ zIndex: 0 }}
    />
  );
}

