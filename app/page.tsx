import dynamic from "next/dynamic";
import ExperienceCounter from "@/components/ExperienceCounter";
import Services from "@/components/Services";
import TrustBanner from "@/components/TrustBanner";

// Lazy load components that are below the fold for better initial load performance
const GalleryGrid = dynamic(() => import("@/components/GalleryGrid"), {
  loading: () => <div className="py-16 bg-[#0B1627]" />,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="py-16 bg-[#0B1627]" />,
});
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), {
  loading: () => <div className="py-16 bg-[#0B1627]" />,
});
const CTA = dynamic(() => import("@/components/CTA"), {
  loading: () => <div className="py-16 bg-primary" />,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <ExperienceCounter />
      <Services />
      <GalleryGrid title="Our Work" subtitle="Quality mechanical repairs and servicing at Nick's Fix It" />
      <TrustBanner />
      <Testimonials />
      <WhyChooseUs />
      <CTA />
    </main>
  );
}

