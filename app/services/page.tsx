import ServicesPage from "@/components/ServicesPage";
import MapOrRegionList from "@/components/MapOrRegionList";
import GalleryGrid from "@/components/GalleryGrid";
import CTA from "@/components/CTA";

export default function Services() {
  return (
    <main className="min-h-screen">
      <ServicesPage />
      <MapOrRegionList />
      <GalleryGrid title="Our Work" subtitle="Hair transformations and styling at Amber's Hair Parlour" />
      <CTA />
    </main>
  );
}

