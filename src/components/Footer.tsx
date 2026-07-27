import Image from "next/image";
import Link from "next/link";
import { SUPPORT_SERVER } from "@/lib/config";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Commands", href: "#commands" },
    { label: "Premium", href: "#premium" },
    { label: "Status", href: "#" },
  ],
  Resources: [
    { label: "Support Server", href: SUPPORT_SERVER },
    { label: "Documentation", href: "#" },
    { label: "Top.gg", href: "https://top.gg" },
    { label: "Blog", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#0e0e12]">
      <div className="mx-auto max-w-[1200px] px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-7 h-7 overflow-hidden rounded-md">
                <Image src="/vexa-logo.png" alt="Vexa" fill className="object-cover" />
              </div>
              <span className="text-[17px] font-bold text-white tracking-tight">Vexa</span>
            </Link>
            <p className="mt-3 text-[13px] text-[#5e6578] leading-relaxed max-w-[280px]">
              Premium Discord music bot. High-quality audio, smart queue management, and zero-config setup.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[11px] font-semibold text-[#5e6578] uppercase tracking-wider mb-3">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-[#5e6578] hover:text-[#9ba3b5] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#5e6578]">
            &copy; {new Date().getFullYear()} Vexa. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={SUPPORT_SERVER}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5e6578] hover:text-[#9ba3b5] transition-colors"
              aria-label="Discord Support"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
