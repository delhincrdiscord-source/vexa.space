"use client";

import Image from "next/image";
import Link from "next/link";
import { BOT_URLS, SUPPORT_SERVER } from "@/lib/config";

function Hero() {
  return (
    <section className="relative pt-[140px] pb-0 overflow-hidden">
      {/* Subtle radial glow behind logo */}
      <div className="absolute top-[60px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#7c5cff]/[0.08] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[800px] px-6 text-center">
        {/* Logo */}
        <div className="mx-auto mb-8 relative w-[180px] h-[180px]">
          <div className="absolute inset-0 rounded-full bg-[#7c5cff]/20 blur-[40px]" />
          <Image
            src="/vexa-logo.png"
            alt="Vexa"
            fill
            className="object-contain relative z-10 drop-shadow-[0_0_60px_rgba(124,92,255,0.2)]"
            priority
            sizes="180px"
          />
        </div>

        {/* Headline */}
        <h1 className="text-[40px] sm:text-[52px] md:text-[60px] font-black text-white leading-[1.05] tracking-tight uppercase">
          Free High-Quality
          <br />
          Discord Music Bot
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-[16px] text-[#9ba3b5] max-w-[480px] mx-auto leading-relaxed">
          It supports Spotify, Apple Music, YouTube, SoundCloud, direct links, Radio and more
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={BOT_URLS.free}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 text-[14px] font-semibold text-white border border-white/[0.12] hover:bg-white/[0.06] rounded-lg transition-all hover:border-white/[0.2]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8M8 12h8" />
            </svg>
            Add Vexa
          </Link>
          <Link
            href={SUPPORT_SERVER}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 text-[14px] font-semibold text-white border border-white/[0.12] hover:bg-white/[0.06] rounded-lg transition-all hover:border-white/[0.2]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            Join Support
          </Link>
          <Link
            href="https://top.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 text-[14px] font-semibold text-white border border-white/[0.12] hover:bg-white/[0.06] rounded-lg transition-all hover:border-white/[0.2]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            TOP.GG
          </Link>
        </div>
      </div>

      {/* Wave divider */}
      <div className="mt-16 relative">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
            fill="#16161d"
          />
        </svg>
      </div>
    </section>
  );
}

export { Hero };
