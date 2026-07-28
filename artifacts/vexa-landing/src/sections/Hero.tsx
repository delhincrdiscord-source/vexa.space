import { motion } from 'framer-motion';
import { VEXA_DATA } from '@/lib/config';
import { AudioWaveform, ExternalLink } from 'lucide-react';
import { SiDiscord } from 'react-icons/si';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7c5cff]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiIvPjwvc3ZnPg==')] opacity-30 pointer-events-none mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        {/* Floating Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#1c1c26] border border-white/10 shadow-[0_0_60px_rgba(124,92,255,0.3)]"
          >
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
            <AudioWaveform className="w-16 h-16 md:w-20 md:h-20 text-primary relative z-10" />
          </motion.div>
        </motion.div>

        {/* Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.1] mb-6">
            Free High-Quality <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c5cff] to-[#b39eff]">Discord Music Bot</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto mb-10 font-medium">
            It supports Spotify, Apple Music, YouTube, SoundCloud, direct links, Radio and more. Zero configuration required.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href={VEXA_DATA.inviteUrls.free}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(124,92,255,0.4)] active:scale-95 group"
          >
            <SiDiscord className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
            Add Vexa
          </a>
          <a
            href={VEXA_DATA.supportServerUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-all active:scale-95"
          >
            <SiDiscord className="w-5 h-5 text-secondary-foreground" />
            Join Support
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-all active:scale-95"
          >
            <ExternalLink className="w-5 h-5 text-secondary-foreground" />
            TOP.GG
          </a>
        </motion.div>
      </div>

      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-0 rotate-180">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#16161d]"></path>
        </svg>
      </div>
    </section>
  );
}
