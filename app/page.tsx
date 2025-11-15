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
      <ExperienceCounter years={28} region="Toowoomba & Darling Downs" />
      <Services />
      <Testimonials />
      <WhyChooseUs />
      <ServiceArea />
      <GalleryGrid title="Completed Jobs Photos" subtitle="Real projects we've completed for customers in Toowoomba & Darling Downs" />
      <CTA />
    </main>
  );
}

