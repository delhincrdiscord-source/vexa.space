import { VEXA_DATA } from '@/lib/config';
import { AudioWaveform } from 'lucide-react';
import { SiDiscord } from 'react-icons/si';

export function Footer() {
  return (
    <footer className="bg-[#0e0e12] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1c1c26] border border-white/10">
                <AudioWaveform className="w-4 h-4 text-[#7c5cff]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Vexa</span>
            </div>
            <p className="text-secondary-foreground text-sm leading-relaxed mb-6">
              Free high-quality Discord music bot for your server. Built for reliability, quality, and simplicity.
            </p>
            <a 
              href={VEXA_DATA.supportServerUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 text-secondary-foreground hover:text-primary transition-colors"
            >
              <SiDiscord className="w-5 h-5" />
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-secondary-foreground hover:text-primary transition-colors">Features</button></li>
              <li><button onClick={() => document.getElementById('commands')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-secondary-foreground hover:text-primary transition-colors">Commands</button></li>
              <li><button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-secondary-foreground hover:text-primary transition-colors">Pricing</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href={VEXA_DATA.supportServerUrl} target="_blank" rel="noreferrer" className="text-sm text-secondary-foreground hover:text-primary transition-colors">Support Server</a></li>
              <li><a href="#" className="text-sm text-secondary-foreground hover:text-primary transition-colors">Status</a></li>
              <li><a href="#" className="text-sm text-secondary-foreground hover:text-primary transition-colors">Top.gg</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-secondary-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-secondary-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-secondary-foreground hover:text-primary transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground">
            © {new Date().getFullYear()} Vexa. All rights reserved.
          </p>
          <div className="text-sm text-secondary-foreground/50">
            Not affiliated with Discord.
          </div>
        </div>
      </div>
    </footer>
  );
}
