import { FEATURES } from '@/lib/config';
import { ScrollReveal, StaggerChildren, StaggerItem } from '@/components/ScrollReveal';
import { Headphones, List, ListMusic, Activity, SlidersHorizontal, Zap } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  headphone: Headphones,
  list: List,
  "list-music": ListMusic,
  activity: Activity,
  sliders: SlidersHorizontal,
  zap: Zap
};

export function Features() {
  return (
    <section id="features" className="py-24 bg-[#0e0e12]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
            Features
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Everything your server needs</h2>
          <p className="text-lg text-secondary-foreground">
            Built from the ground up for reliability, quality, and simplicity. No bloated menus, just great music.
          </p>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <StaggerItem key={i}>
                <div className="bg-card border border-white/5 rounded-2xl p-8 h-full transition-all duration-300 hover:border-white/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-secondary-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
