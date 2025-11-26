import ExperienceCounter from "@/components/ExperienceCounter";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import ServiceArea from "@/components/ServiceArea";
import Testimonials from "@/components/Testimonials";
import GalleryGrid from "@/components/GalleryGrid";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ExperienceCounter />
      <Services />
      <Testimonials />
      <WhyChooseUs />
      <GalleryGrid title="Our Work" subtitle="Hair transformations and styling at Amber's Hair Parlour" />
      <ServiceArea />
      <CTA />
    </main>
  );
}

