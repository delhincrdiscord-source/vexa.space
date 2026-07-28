import { Navigation } from './components/Navigation';
import { Hero } from './sections/Hero';
import { Stats } from './sections/Stats';
import { Features } from './sections/Features';
import { HowItWorks } from './sections/HowItWorks';
import { Premium } from './sections/Premium';
import { Commands } from './sections/Commands';
import { CTA } from './sections/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0e0e12] text-white">
      <Navigation />
      
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Premium />
        <Commands />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
