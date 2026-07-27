import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Commands } from "@/components/sections/Commands";
import { Stats } from "@/components/sections/Stats";
import { Premium } from "@/components/sections/Premium";
import { CTA } from "@/components/sections/CTA";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <ScrollReveal>
          <Stats />
        </ScrollReveal>
        <ScrollReveal>
          <Features />
        </ScrollReveal>
        <ScrollReveal>
          <HowItWorks />
        </ScrollReveal>
        <ScrollReveal>
          <Premium />
        </ScrollReveal>
        <ScrollReveal>
          <Commands />
        </ScrollReveal>
        <ScrollReveal>
          <CTA />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
