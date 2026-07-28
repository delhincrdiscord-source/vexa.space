import { COMMANDS } from '@/lib/config';
import { motion } from 'framer-motion';

export function Commands() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="commands" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-[rgba(255,255,255,0.06)] text-[11px] tracking-widest uppercase text-white/60 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e03030]" />
            Commands
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Powerful, <span className="accent-italic">intuitive commands</span>
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {COMMANDS.map((cmd, i) => (
            <motion.div key={i} variants={itemVariants} className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.1] hover:-translate-y-0.5 transition-all duration-300">
              <div className="inline-block bg-[#2d0a0a] text-[#f08080] text-sm font-mono rounded-lg px-3 py-1 mb-3">
                {cmd.name}
              </div>
              <p className="text-white/50 text-sm">
                {cmd.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}