import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import ServiceArea from "@/components/ServiceArea";
import Testimonials from "@/components/Testimonials";
import GalleryGrid from "@/components/GalleryGrid";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyChooseUs />
      <Services />
      <ServiceArea />
      <Testimonials />
      <GalleryGrid title="Completed Jobs Photos" subtitle="Real projects we've completed for customers in {{REGION}}" />
      <CTA />
    </main>
  );
}

