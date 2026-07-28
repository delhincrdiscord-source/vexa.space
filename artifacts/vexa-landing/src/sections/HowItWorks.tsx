import { motion } from 'framer-motion';

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Add to Discord",
      desc: "Click 'Add Vexa' and authorize with your Discord server."
    },
    {
      num: "02",
      title: "Join a Voice Channel",
      desc: "Have your members join any voice channel to prepare for playback."
    },
    {
      num: "03",
      title: "Play Music",
      desc: "Use /play <song> and enjoy crystal-clear music instantly."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-[rgba(255,255,255,0.06)] text-[11px] tracking-widest uppercase text-white/60 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e03030]" />
            Setup
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Up and running in <span className="accent-italic">30 seconds</span>
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-[40px] left-[15%] right-[15%] h-px bg-white/[0.06] -z-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 relative z-10">
            {steps.map((step, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-8 hover:border-white/[0.1] hover:-translate-y-0.5 transition-all duration-300">
                <div className="text-sm font-mono text-[#e03030] mb-4">{step.num}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}