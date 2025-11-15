// SEO component for Next.js 14 App Router
// Note: Metadata is handled via metadata export in layout.tsx and page.tsx files
// This component is kept for reference but metadata should be exported from pages

import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Brendan Coonan Plumbing & Gasfitting — Professional Plumbing & Gas Fitting Services in Toowoomba & Darling Downs",
    description: "Licensed and insured tradie services in Toowoomba & Darling Downs. Call 0418 793 898 for fast and reliable service.",
    keywords: "Plumbing & Gas Fitting, Hot Water System Installations, tradies, plumbing, electrical, Toowoomba & Darling Downs",
  };
}

// This component is a placeholder - actual SEO is handled via metadata exports
export default function SEO() {
  return null;
}

