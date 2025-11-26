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
      <ExperienceCounter years={15} region="St George, Queensland" />
      <Services />
      <Testimonials />
      <WhyChooseUs />
      <ServiceArea />
      <GalleryGrid title="Our Work" subtitle="Hair transformations and styling at Amber's Hair Parlour" />
      <CTA />
    </main>
  );
}

