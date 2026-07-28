import { motion } from 'framer-motion';
import { VEXA_DATA } from '@/lib/config';
import { ArrowRight } from 'lucide-react';
import vexaLogo from '@assets/vexa-logo_1785211339452.png';
import { SiDiscord } from 'react-icons/si';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-32 px-6">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto w-full flex flex-col items-center text-center relative z-10"
      >
        {/* Top badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-[rgba(255,255,255,0.06)] text-[11px] tracking-widest uppercase text-white/60">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e03030]" />
            New Version Available
          </div>
        </motion.div>

        {/* Typography */}
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-8xl font-extrabold leading-[1.05] tracking-tight text-white text-center mb-6 px-2">
          <span className="accent-italic">High-Quality</span><br className="hidden md:block" />
          Discord Music Bot
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-white/50 text-lg max-w-md mx-auto text-center mt-2 mb-10">
          It supports Spotify, Apple Music, YouTube, SoundCloud, direct links, Radio and more. Zero configuration required.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href={VEXA_DATA.inviteUrls.free}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors w-full sm:w-auto"
          >
            <SiDiscord className="w-4 h-4" />
            Add Vexa
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
          <a
            href={VEXA_DATA.supportServerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-transparent border border-white/20 text-white font-medium hover:border-white/40 transition-colors w-full sm:w-auto"
          >
            Join Support
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-transparent border border-white/20 text-white font-medium hover:border-white/40 transition-colors w-full sm:w-auto"
          >
            TOP.GG
          </a>
        </motion.div>
        
        {/* Hero Visual */}
        <motion.div variants={itemVariants} className="mt-24 relative flex items-center justify-center w-full max-w-2xl mx-auto">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,48,48,0.35),transparent_60%)] blur-3xl pointer-events-none w-full h-[400px] -mt-16" />
          <div className="relative z-10 flex items-center justify-center">
            <img src={vexaLogo} alt="Vexa" className="w-40 h-40 rounded-full object-cover drop-shadow-[0_0_40px_rgba(224,48,48,0.5)]" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}