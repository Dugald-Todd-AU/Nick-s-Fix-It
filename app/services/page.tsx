import ServicesHero from "@/components/ServicesHero";
import ServicesPage from "@/components/ServicesPage";
import MapOrRegionList from "@/components/MapOrRegionList";
import GalleryGrid from "@/components/GalleryGrid";
import CTA from "@/components/CTA";

export default function Services() {
  return (
    <main className="min-h-screen">
      <ServicesHero />
      <ServicesPage />
      <MapOrRegionList />
      <GalleryGrid title="Completed Jobs Photos" subtitle="Real projects we've completed for customers in {{REGION}}" />
      <CTA />
    </main>
  );
}

