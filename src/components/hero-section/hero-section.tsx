"use client";
import { HeroContent } from "./hero-content";
import { Beams } from "../ui/beams";
import { GradientGrid } from "../ui/gradient-grid";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden h-screen bg-white">
      <HeroContent />
      <Beams />
      <GradientGrid />
    </section>
  );
};
