import { useState, useEffect } from 'react';
import { VEXA_DATA } from '@/lib/config';
import { Menu, X, AudioWaveform } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'vexa-glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#1c1c26] border border-white/10 group-hover:border-[#7c5cff]/50 transition-colors">
            <div className="absolute inset-0 rounded-full bg-[#7c5cff]/20 blur-md group-hover:bg-[#7c5cff]/40 transition-all duration-500" />
            <AudioWaveform className="w-5 h-5 text-[#7c5cff] relative z-10" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Vexa</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('features')} className="text-sm font-medium text-secondary-foreground hover:text-white transition-colors">Features</button>
          <button onClick={() => scrollTo('commands')} className="text-sm font-medium text-secondary-foreground hover:text-white transition-colors">Commands</button>
          <button onClick={() => scrollTo('pricing')} className="text-sm font-medium text-secondary-foreground hover:text-white transition-colors">Pricing</button>
          <a href={VEXA_DATA.supportServerUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-secondary-foreground hover:text-white transition-colors">FAQ</a>
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollTo('pricing')} className="text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1">
            Premium ✨
          </button>
          <a 
            href={VEXA_DATA.inviteUrls.free} 
            target="_blank" 
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_rgba(124,92,255,0.4)] active:scale-95"
          >
            Add Vexa
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-secondary-foreground hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0e0e12] border-b border-white/5 p-6 shadow-2xl md:hidden flex flex-col gap-6"
          >
            <button onClick={() => scrollTo('features')} className="text-left text-lg font-medium text-secondary-foreground hover:text-white">Features</button>
            <button onClick={() => scrollTo('commands')} className="text-left text-lg font-medium text-secondary-foreground hover:text-white">Commands</button>
            <button onClick={() => scrollTo('pricing')} className="text-left text-lg font-medium text-secondary-foreground hover:text-white">Pricing</button>
            <a href={VEXA_DATA.supportServerUrl} target="_blank" rel="noreferrer" className="text-left text-lg font-medium text-secondary-foreground hover:text-white">FAQ</a>
            
            <div className="h-px bg-white/10 w-full my-2" />
            
            <button onClick={() => scrollTo('pricing')} className="text-left text-lg font-medium text-amber-400">
              Premium ✨
            </button>
            <a 
              href={VEXA_DATA.inviteUrls.free} 
              target="_blank" 
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-primary text-white text-center font-semibold mt-2"
            >
              Add Vexa
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
