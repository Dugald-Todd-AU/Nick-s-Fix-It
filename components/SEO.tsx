// SEO component for Next.js 14 App Router
// Note: Metadata is handled via metadata export in layout.tsx and page.tsx files
// This component is kept for reference but metadata should be exported from pages

import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Amber's Hair Parlour — Modern Hairdressing in St George, Queensland",
    description: "Amber's Hair Parlour offers modern hairdressing services in St George, Queensland. Cuts, colours, foils & styling in a warm, boutique hair parlour. Book your appointment at (07) 4625 1693.",
    keywords: "hairdressing, hair salon, haircuts, hair colour, foils, styling, St George Queensland, ladies hair, men's cuts, special occasion hair",
  };
}

// This component is a placeholder - actual SEO is handled via metadata exports
export default function SEO() {
  return null;
}

