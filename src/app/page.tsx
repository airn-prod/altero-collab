import { Academy } from "@/components/academy-section/academy-section";
import { Cta } from "@/components/cta-section/cta-section";
import { Footer } from "@/components/footer-section/footer-section";
import { HeroSection } from "@/components/hero-section/hero-section";
import { KeyValue } from "@/components/key-value-section/key-value-section";
import Navbar from "@/components/navbar/navbar";
import { Partners } from "@/components/partner-section/partner-section";
import { Portofolio } from "@/components/portofolio-section/portofolio-section";
import { Quote } from "@/components/quote-section/quote-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Partners />
      <KeyValue />
      <Academy />
      <Quote />
      <Portofolio />
      <Cta />
      <Footer />
    </>
  );
}
