import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Process } from "@/components/Process";
import { MapSection } from "@/components/MapSection";
import { ItemsCollected } from "@/components/ItemsCollected";
import { SpecialOffer } from "@/components/SpecialOffer";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Process />
      <MapSection />
      <ItemsCollected />
      <SpecialOffer />
      <FAQ />
      <Features />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
