import { FEATURES } from '@/lib/config';
import { Headphones, List, ListMusic, Activity, SlidersHorizontal, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.ElementType> = {
  headphone: Headphones,
  list: List,
  "list-music": ListMusic,
  activity: Activity,
  sliders: SlidersHorizontal,
  zap: Zap
};

export function Features() {
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
    <section id="features" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-[rgba(255,255,255,0.06)] text-[11px] tracking-widest uppercase text-white/60 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e03030]" />
            Features
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Everything your server <span className="accent-italic">needs</span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl">
            Built from the ground up for reliability, quality, and simplicity. No bloated menus, just great music.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16"
        >
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div key={i} variants={itemVariants} className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.1] hover:-translate-y-0.5 transition-all duration-300">
                <div className="text-[10px] tracking-widest text-[#e03030] uppercase mb-4 font-semibold">Feature</div>
                <Icon className="w-5 h-5 text-[#e03030] mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}