import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import ServiceArea from "@/components/ServiceArea";
import TrustBadges from "@/components/TrustBadges";

export default function Contact() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactForm />
      <ServiceArea />
      <TrustBadges />
    </main>
  );
}

