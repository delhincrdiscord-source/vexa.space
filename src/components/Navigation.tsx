"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BOT_URLS, SUPPORT_SERVER } from "@/lib/config";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Commands", href: "#commands" },
  { label: "FAQ", href: "#faq" },
  { label: "Status", href: "#" },
  { label: "Top Songs", href: "#commands" },
  { label: "Radios", href: "#commands" },
];

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0e0e12]/90 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-[1200px] px-6 h-[60px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Vexa Home">
          <div className="relative w-7 h-7 overflow-hidden rounded-md">
            <Image src="/vexa-logo.png" alt="Vexa" fill className="object-cover" priority />
          </div>
          <span className="text-[17px] font-bold text-white tracking-tight">Vexa</span>
        </Link>

        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-[13px] font-medium text-[#9ba3b5] hover:text-white transition-colors rounded-md hover:bg-white/[0.04]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#premium"
            className="ml-1 px-3 py-1.5 text-[13px] font-semibold text-[#facc15] hover:text-[#fde68a] transition-colors rounded-md"
          >
            Premium✨
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-2.5">
          <Link
            href={BOT_URLS.free}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-[13px] font-semibold text-white bg-[#7c5cff] hover:bg-[#6a4be0] rounded-lg transition-colors shadow-lg shadow-[#7c5cff]/20"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </svg>
            Add Vexa
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-[#9ba3b5] hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {mobileOpen ? (
              <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M3 6H17M3 10H17M3 14H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-[#0e0e12]/95 backdrop-blur-xl border-t border-white/[0.06]">
          <div className="px-5 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 text-sm font-medium text-[#9ba3b5] hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#premium"
              className="block px-3 py-2.5 text-sm font-semibold text-[#facc15] hover:bg-white/[0.04] rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Premium✨
            </Link>
            <div className="pt-3 border-t border-white/[0.06] space-y-2">
              <Link
                href={BOT_URLS.free}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-white bg-[#7c5cff] hover:bg-[#6a4be0] rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Add Vexa
              </Link>
              <Link
                href={SUPPORT_SERVER}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium text-[#9ba3b5] border border-white/[0.08] hover:bg-white/[0.04] rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Join Support
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export { Navigation };
