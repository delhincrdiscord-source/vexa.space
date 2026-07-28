import { VEXA_DATA } from '@/lib/config';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SiDiscord } from 'react-icons/si';
import { AudioWaveform } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 bg-[#0e0e12] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="relative rounded-[2rem] overflow-hidden bg-[#1c1c26] border border-white/10 p-10 md:p-16 text-center">
            {/* Inner Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-[#1c1c26] opacity-50" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
            
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 mx-auto flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(124,92,255,0.2)]">
                <AudioWaveform className="w-10 h-10 text-primary" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Ready to level up your server?
              </h2>
              <p className="text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto mb-10">
                Join {VEXA_DATA.stats.servers} servers already using Vexa. Free to use, no ads, no limits on the basics.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href={VEXA_DATA.inviteUrls.free}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(124,92,255,0.4)] active:scale-95 group"
                >
                  <SiDiscord className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
                  Add to Discord
                </a>
                <a 
                  href={VEXA_DATA.supportServerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-all active:scale-95"
                >
                  Join Support
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
