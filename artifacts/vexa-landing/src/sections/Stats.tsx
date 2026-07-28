import { VEXA_DATA } from '@/lib/config';
import { motion } from 'framer-motion';

export function Stats() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
            <div className="flex flex-col items-center text-center pt-8 md:pt-0">
              <h3 className="text-6xl font-black text-white tracking-tighter">{VEXA_DATA.stats.servers}</h3>
              <p className="text-[11px] tracking-[0.15em] uppercase text-white/40 mt-3">Active Servers</p>
            </div>
            
            <div className="flex flex-col items-center text-center pt-8 md:pt-0">
              <h3 className="text-6xl font-black text-white tracking-tighter">{VEXA_DATA.stats.users}</h3>
              <p className="text-[11px] tracking-[0.15em] uppercase text-white/40 mt-3">Happy Users</p>
            </div>
            
            <div className="flex flex-col items-center text-center pt-8 md:pt-0">
              <h3 className="text-6xl font-black text-white tracking-tighter">{VEXA_DATA.stats.commands}</h3>
              <p className="text-[11px] tracking-[0.15em] uppercase text-white/40 mt-3">Slash Commands</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}