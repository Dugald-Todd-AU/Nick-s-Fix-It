// SEO component for Next.js 14 App Router
// Note: Metadata is handled via metadata export in layout.tsx and page.tsx files
// This component is kept for reference but metadata should be exported from pages

import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Nick's Fix It — Reliable Mechanic & Auto Repairs in St George, Queensland",
    description: "Nick's Fix It provides quality automotive servicing and mechanical repairs in St George, Queensland. Logbook servicing, diagnostics, tyres, air con, and 4WD repairs. Call (07) 4625 5654.",
    keywords: "mechanic St George QLD, car servicing St George, auto repairs St George, 4WD servicing St George, logbook servicing St George, air con regas St George, mechanic St George Queensland",
  };
}

// This component is a placeholder - actual SEO is handled via metadata exports
export default function SEO() {
  return null;
}

