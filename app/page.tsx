import dynamic from "next/dynamic";
import ExperienceCounter from "@/components/ExperienceCounter";
import Services from "@/components/Services";

// Lazy load components that are below the fold for better initial load performance
const GalleryGrid = dynamic(() => import("@/components/GalleryGrid"), {
  loading: () => <div className="py-12 bg-gray-800" />,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="py-12 bg-gray-800" />,
});
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), {
  loading: () => <div className="py-12 bg-gray-800" />,
});
const CTA = dynamic(() => import("@/components/CTA"), {
  loading: () => <div className="py-12 bg-gray-800" />,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <ExperienceCounter />
      <Services />
      <GalleryGrid title="Our Work" subtitle="Hair transformations and styling at Amber's Hair Parlour" />
      <Testimonials />
      <WhyChooseUs />
      <CTA />
    </main>
  );
}

