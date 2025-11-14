// SEO component for Next.js 14 App Router
// Note: Metadata is handled via metadata export in layout.tsx and page.tsx files
// This component is kept for reference but metadata should be exported from pages

import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Example Business — Professional {{SERVICE_1}} Services in Example Region",
    description: "Licensed and insured tradie services in Example Region. Call {{PHONE_NUMBER}} for fast and reliable service.",
    keywords: "{{SERVICE_1}}, {{SERVICE_2}}, tradies, plumbing, electrical, Example Region",
  };
}

// This component is a placeholder - actual SEO is handled via metadata exports
export default function SEO() {
  return null;
}

