import { VEXA_DATA } from '@/lib/config';
import vexaLogo from '@assets/vexa-logo_1785211339452.png';
import { SiDiscord } from 'react-icons/si';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.06] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={vexaLogo} alt="Vexa" className="w-7 h-7 rounded-full object-cover" />
              <span className="text-xl font-bold tracking-tight text-white">Vexa</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Free high-quality Discord music bot for your server. Built for reliability, quality, and simplicity.
            </p>
            <a 
              href={VEXA_DATA.supportServerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 hover:border-white/30 text-white/60 hover:text-white transition-colors"
            >
              <SiDiscord className="w-4 h-4" />
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest text-white/80">Product</h4>
            <ul className="space-y-3">
              <li><button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-white/50 hover:text-white transition-colors">Features</button></li>
              <li><button onClick={() => document.getElementById('commands')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-white/50 hover:text-white transition-colors">Commands</button></li>
              <li><button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-white/50 hover:text-white transition-colors">Pricing</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest text-white/80">Resources</h4>
            <ul className="space-y-3">
              <li><a href={VEXA_DATA.supportServerUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-white transition-colors">Support Server</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Status</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Top.gg</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest text-white/80">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} Vexa. All rights reserved.
          </p>
          <div className="text-sm text-white/30">
            Not affiliated with Discord.
          </div>
        </div>
      </div>
    </footer>
  );
}