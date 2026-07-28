import { COMMANDS } from '@/lib/config';
import { ScrollReveal, StaggerChildren, StaggerItem } from '@/components/ScrollReveal';
import { TerminalSquare } from 'lucide-react';

export function Commands() {
  return (
    <section id="commands" className="py-24 bg-[#16161d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
            Commands
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Powerful, intuitive controls</h2>
          <p className="text-lg text-secondary-foreground">
            Slash commands with autocomplete. Your members will figure it out instantly.
          </p>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {COMMANDS.map((cmd, i) => (
            <StaggerItem key={i}>
              <div className="group bg-card border border-white/5 rounded-xl p-5 hover:bg-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-2">
                  <TerminalSquare className="w-4 h-4 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                  <code className="text-primary font-mono text-sm bg-primary/10 px-2 py-0.5 rounded">
                    {cmd.name}
                  </code>
                </div>
                <p className="text-sm text-secondary-foreground group-hover:text-white/90 transition-colors">
                  {cmd.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <ScrollReveal className="mt-12 text-center">
          <p className="text-secondary-foreground text-sm">
            + 30 more commands available in the bot. Type <code className="text-primary bg-primary/10 px-1 py-0.5 rounded">/help</code> to see them all.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
