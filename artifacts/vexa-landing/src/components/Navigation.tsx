import { useState, useEffect } from 'react';
import { VEXA_DATA } from '@/lib/config';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import vexaLogo from '@assets/vexa-logo_1785211339452.png';

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
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <header 
        className={`pointer-events-auto flex items-center justify-between gap-6 px-5 py-2.5 rounded-full border bg-black/80 backdrop-blur-xl max-w-4xl w-full transition-all duration-300 ${
          isScrolled ? 'border-white/20' : 'border-white/[0.08]'
        }`}
      >
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={vexaLogo} alt="Vexa" className="w-7 h-7 rounded-full object-cover" />
          <span className="text-base font-bold tracking-tight text-white">Vexa</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <button onClick={() => scrollTo('features')} className="text-[13px] text-white/60 hover:text-white px-3 py-1 rounded-full hover:bg-white/5 transition">Features</button>
          <button onClick={() => scrollTo('commands')} className="text-[13px] text-white/60 hover:text-white px-3 py-1 rounded-full hover:bg-white/5 transition">Commands</button>
          <button onClick={() => scrollTo('pricing')} className="text-[13px] text-white/60 hover:text-white px-3 py-1 rounded-full hover:bg-white/5 transition">Pricing</button>
          <a href={VEXA_DATA.supportServerUrl} target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/60 hover:text-white px-3 py-1 rounded-full hover:bg-white/5 transition">FAQ</a>
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center">
          <span className="text-[13px] text-amber-400 mr-4 font-medium">Premium ✨</span>
          <a 
            href={VEXA_DATA.inviteUrls.free} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-white text-black text-[13px] font-semibold px-4 py-1.5 rounded-full hover:bg-white/90 transition-colors"
          >
            Add Vexa <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-1 text-white/60 hover:text-white pointer-events-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-[calc(100%+0.5rem)] left-0 right-0 bg-black/90 border border-white/[0.08] backdrop-blur-xl p-4 rounded-2xl md:hidden flex flex-col gap-2"
            >
              <button onClick={() => scrollTo('features')} className="text-left text-sm font-medium text-white/60 hover:text-white p-2">Features</button>
              <button onClick={() => scrollTo('commands')} className="text-left text-sm font-medium text-white/60 hover:text-white p-2">Commands</button>
              <button onClick={() => scrollTo('pricing')} className="text-left text-sm font-medium text-white/60 hover:text-white p-2">Pricing</button>
              <a href={VEXA_DATA.supportServerUrl} target="_blank" rel="noopener noreferrer" className="text-left text-sm font-medium text-white/60 hover:text-white p-2">FAQ</a>
              
              <div className="h-px bg-white/10 w-full my-2" />
              
              <a 
                href={VEXA_DATA.inviteUrls.free} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-1.5 bg-white text-black text-[13px] font-semibold px-4 py-2.5 rounded-full w-full"
              >
                Add Vexa <ArrowRight className="w-3 h-3" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}