import { ScrollReveal, StaggerChildren, StaggerItem } from '@/components/ScrollReveal';

export function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Add to Discord",
      desc: "Click 'Add Vexa' and authorize with your Discord server."
    },
    {
      num: "2",
      title: "Join a Voice Channel",
      desc: "Have your members join any voice channel to prepare for playback."
    },
    {
      num: "3",
      title: "Play Music",
      desc: "Use /play <song> and enjoy crystal-clear music instantly."
    }
  ];

  return (
    <section className="py-24 bg-[#16161d] border-y border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-sm font-semibold mb-6">
            How It Works
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Up and running in 30 seconds</h2>
          <p className="text-lg text-secondary-foreground">
            No complex setup. No configuration files. Just add and play.
          </p>
        </ScrollReveal>

        <StaggerChildren className="relative">
          {/* Connecting line desktop */}
          <div className="hidden md:block absolute top-12 left-16 right-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <StaggerItem key={i} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-[#1c1c26] border border-white/10 flex items-center justify-center mb-8 relative shadow-lg">
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="text-3xl font-black text-primary relative z-10">{step.num}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-secondary-foreground">{step.desc}</p>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
