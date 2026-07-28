import { VEXA_DATA } from '@/lib/config';
import { motion } from 'framer-motion';
import { SiDiscord } from 'react-icons/si';

export function CTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0d0d0d] border border-[#e03030]/20 rounded-[2rem] p-16 relative overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(224,48,48,0.12),transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Ready to level up <span className="accent-italic">your server?</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
              Join {VEXA_DATA.stats.servers} servers already using Vexa. Free to use, no ads, no limits on the basics.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={VEXA_DATA.inviteUrls.free}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors w-full sm:w-auto"
              >
                <SiDiscord className="w-5 h-5" />
                Add to Discord
              </a>
              <a 
                href={VEXA_DATA.supportServerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-transparent border border-white/20 text-white font-medium hover:border-white/40 transition-colors w-full sm:w-auto"
              >
                Join Support
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}