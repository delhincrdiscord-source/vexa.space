import { VEXA_DATA } from '@/lib/config';
import { ScrollReveal, StaggerChildren, StaggerItem } from '@/components/ScrollReveal';
import { Check } from 'lucide-react';

export function Premium() {
  return (
    <section id="pricing" className="py-24 bg-[#0e0e12]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-semibold mb-6">
            Premium ✨
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Choose your experience</h2>
          <p className="text-lg text-secondary-foreground">
            Start free forever, upgrade when your server needs more power.
          </p>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {/* Free Tier */}
          <StaggerItem>
            <div className="bg-card border border-white/5 rounded-3xl p-8 transition-all hover:border-white/10 flex flex-col h-[500px]">
              <h3 className="text-xl font-semibold text-white mb-2">Vexa Free</h3>
              <div className="text-4xl font-bold text-white mb-6">$0<span className="text-lg text-secondary-foreground font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8 flex-1">
                {["High-quality audio playback", "Queue & playlist support", "Slash commands with autocomplete", "24/7 voice channel mode", "Basic audio filters"].map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-secondary-foreground text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <a 
                href={VEXA_DATA.inviteUrls.free}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-colors text-center"
              >
                Add for Free
              </a>
            </div>
          </StaggerItem>

          {/* Pro Tier (Popular) */}
          <StaggerItem className="relative">
            <div className="absolute -inset-[1px] bg-gradient-to-b from-primary to-primary/20 rounded-[25px] blur-sm opacity-50" />
            <div className="bg-[#1c1c26] border border-primary/50 rounded-3xl p-8 relative flex flex-col h-[540px] transform md:-translate-y-4 shadow-2xl shadow-primary/10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 mt-2">Vexa Pro</h3>
              <div className="text-4xl font-bold text-white mb-6">$4.99<span className="text-lg text-secondary-foreground font-normal">/mo</span></div>
              <div className="text-sm text-primary mb-4 font-medium">Everything in Free, plus:</div>
              <ul className="space-y-4 mb-8 flex-1">
                {["Priority queue (jump the line)", "Advanced equalizer & filters", "Custom per-server settings", "Extended playlist length", "Volume control presets"].map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-white text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <a 
                href={VEXA_DATA.inviteUrls.pro}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-colors text-center shadow-lg shadow-primary/25"
              >
                Get Pro
              </a>
            </div>
          </StaggerItem>

          {/* Ultra Tier */}
          <StaggerItem>
            <div className="bg-card border border-white/5 rounded-3xl p-8 transition-all hover:border-white/10 flex flex-col h-[500px]">
              <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">Vexa Ultra <span className="text-amber-400 text-sm font-normal bg-amber-400/10 px-2 py-0.5 rounded">Premium+</span></h3>
              <div className="text-4xl font-bold text-white mb-6">$9.99<span className="text-lg text-secondary-foreground font-normal">/mo</span></div>
              <div className="text-sm text-secondary-foreground mb-4 font-medium">Everything in Pro, plus:</div>
              <ul className="space-y-4 mb-8 flex-1">
                {["Dedicated audio cluster", "Lossless audio quality", "Exclusive filters & effects", "Priority support channel", "Auto-play related songs"].map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-secondary-foreground text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <a 
                href={VEXA_DATA.inviteUrls.ultra}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors text-center"
              >
                Get Ultra
              </a>
            </div>
          </StaggerItem>

        </StaggerChildren>
      </div>
    </section>
  );
}
