import { VEXA_DATA } from '@/lib/config';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function Premium() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-[rgba(255,255,255,0.06)] text-[11px] tracking-widest uppercase text-white/60 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e03030]" />
            Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Choose your <span className="accent-italic">experience</span>
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-6xl mx-auto"
        >
          {/* Free Tier */}
          <motion.div variants={itemVariants} className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-8 hover:border-white/[0.1] hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full">
            <div className="text-[10px] tracking-widest text-[#e03030] uppercase mb-4 font-semibold">Basic</div>
            <h3 className="text-2xl font-bold text-white mb-2">Vexa Free</h3>
            <div className="text-5xl font-black text-white mb-8">$0<span className="text-base text-white/40 font-normal">/mo</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              {["High-quality audio playback", "Queue & playlist support", "Slash commands with autocomplete", "24/7 voice channel mode", "Basic audio filters"].map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#e03030] shrink-0 mt-0.5" />
                  <span className="text-white/60 text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <a 
              href={VEXA_DATA.inviteUrls.free}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-full border border-white/20 text-white font-medium hover:border-white/40 transition-colors text-center text-sm"
            >
              Add for Free
            </a>
          </motion.div>

          {/* Pro Tier (Popular) */}
          <motion.div variants={itemVariants} className="rounded-2xl p-[1px] bg-gradient-to-b from-red-500 to-red-900 md:scale-[1.02] md:z-10 flex flex-col h-full">
            <div className="bg-[#0d0d0d] h-full w-full rounded-[15px] p-6 sm:p-8 flex flex-col relative shadow-2xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e03030] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap">
                Most Popular
              </div>
              <div className="text-[10px] tracking-widest text-[#e03030] uppercase mb-4 font-semibold mt-2">Premium</div>
              <h3 className="text-2xl font-bold text-white mb-2">Vexa Pro</h3>
              <div className="text-5xl font-black text-white mb-8">$1.5<span className="text-base text-white/40 font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8 flex-1">
                {["Priority queue (jump the line)", "Advanced equalizer & filters", "Custom per-server settings", "Extended playlist length", "Volume control presets"].map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#e03030] shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <a 
                href={VEXA_DATA.inviteUrls.pro}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors text-center text-sm"
              >
                Get Pro
              </a>
            </div>
          </motion.div>

          {/* Ultra Tier */}
          <motion.div variants={itemVariants} className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-8 hover:border-white/[0.1] hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full">
            <div className="text-[10px] tracking-widest text-[#e03030] uppercase mb-4 font-semibold">Ultimate</div>
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">Vexa Ultra</h3>
            <div className="text-5xl font-black text-white mb-8">$3<span className="text-base text-white/40 font-normal">/mo</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              {["Dedicated audio cluster", "Lossless audio quality", "Exclusive filters & effects", "Priority support channel", "Auto-play related songs"].map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#e03030] shrink-0 mt-0.5" />
                  <span className="text-white/60 text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <a 
              href={VEXA_DATA.inviteUrls.ultra}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-full border border-white/20 text-white font-medium hover:border-white/40 transition-colors text-center text-sm"
            >
              Get Ultra
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}