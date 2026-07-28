import { useEffect, useRef } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './sections/Hero';
import { Stats } from './sections/Stats';
import { Features } from './sections/Features';
import { HowItWorks } from './sections/HowItWorks';
import { Premium } from './sections/Premium';
import { Commands } from './sections/Commands';
import { CTA } from './sections/CTA';
import { Footer } from './components/Footer';

function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawStars();
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const count = 100;
      for (let i = 0; i < count; i++) {
        // pseudo-random but stable based on index
        const x = (Math.sin(i * 12.345) * 0.5 + 0.5) * canvas.width;
        const y = (Math.cos(i * 54.321) * 0.5 + 0.5) * canvas.height;
        const size = (Math.sin(i * 23.456) * 0.5 + 0.5) * 1.5 + 0.5;
        const opacity = (Math.cos(i * 34.567) * 0.5 + 0.5) * 0.3 + 0.2;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      }
    };

    window.addEventListener('resize', resize);
    resize();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <StarField />
      
      <div className="relative z-10">
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
    </div>
  );
}

export default App;