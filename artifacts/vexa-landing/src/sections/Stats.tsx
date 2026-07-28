import { VEXA_DATA } from '@/lib/config';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Server, Users, Terminal } from 'lucide-react';

export function Stats() {
  return (
    <section className="py-20 bg-[#16161d] relative z-10 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex flex-col items-center text-center pt-8 md:pt-0">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Server className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-4xl font-black text-white tracking-tight mb-2">{VEXA_DATA.stats.servers}</h3>
              <p className="text-secondary-foreground font-medium uppercase tracking-widest text-sm">Active Servers</p>
            </div>
            
            <div className="flex flex-col items-center text-center pt-8 md:pt-0">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-4xl font-black text-white tracking-tight mb-2">{VEXA_DATA.stats.users}</h3>
              <p className="text-secondary-foreground font-medium uppercase tracking-widest text-sm">Happy Users</p>
            </div>
            
            <div className="flex flex-col items-center text-center pt-8 md:pt-0">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Terminal className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-4xl font-black text-white tracking-tight mb-2">{VEXA_DATA.stats.commands}</h3>
              <p className="text-secondary-foreground font-medium uppercase tracking-widest text-sm">Slash Commands</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
