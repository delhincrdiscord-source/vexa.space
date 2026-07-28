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
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col items-center text-center py-6 md:py-0 border-b md:border-b-0 md:border-r border-white/[0.06] px-6">
              <h3 className="text-5xl font-black text-white tracking-tighter leading-none">{VEXA_DATA.stats.servers}</h3>
              <p className="text-[11px] tracking-[0.15em] uppercase text-white/40 mt-3">Active Servers</p>
            </div>
            
            <div className="flex flex-col items-center text-center py-6 md:py-0 border-b md:border-b-0 md:border-r border-white/[0.06] px-6">
              <h3 className="text-5xl font-black text-white tracking-tighter leading-none">{VEXA_DATA.stats.users}</h3>
              <p className="text-[11px] tracking-[0.15em] uppercase text-white/40 mt-3">Happy Users</p>
            </div>
            
            <div className="flex flex-col items-center text-center py-6 md:py-0 px-6">
              <h3 className="text-5xl font-black text-white tracking-tighter leading-none">{VEXA_DATA.stats.commands}</h3>
              <p className="text-[11px] tracking-[0.15em] uppercase text-white/40 mt-3">Slash Commands</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}