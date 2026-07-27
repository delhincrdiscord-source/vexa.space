"use client";

import { SectionHeading } from "@/components/SectionHeading";

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
    title: "High-Quality Audio",
    description: "Crystal-clear audio from YouTube, Spotify, SoundCloud, Apple Music, Tidal, Deezer, and 200+ sources.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16M4 12h16M4 18h10" />
      </svg>
    ),
    title: "Smart Queue",
    description: "Intelligent queue management with shuffle, repeat, skip, and vote-skip. Remembers your preferences.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M3 9h18" />
      </svg>
    ),
    title: "Playlist Support",
    description: "Import and play full playlists from Spotify, YouTube, and more. Auto-fetch lyrics and album art.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Rock-Solid Stability",
    description: "Custom audio engine optimized for Discord. Zero crashes, automatic reconnection, 99.9% uptime.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: "Rich Controls",
    description: "Interactive buttons, slash commands, and a powerful dashboard. Volume, equalizer, filters, and more.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Instant Setup",
    description: "Add Vexa with one click. No configuration needed. It just works. Advanced settings for power users.",
  },
];

function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-24 bg-[#16161d]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          badge="Features"
          title="Everything your server needs"
          description="Built from the ground up for reliability, quality, and simplicity."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl bg-[#1c1c26] border border-white/[0.04] hover:border-white/[0.08] transition-all hover:bg-[#1e1e28]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#7c5cff]/10 flex items-center justify-center text-[#7c5cff] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-[15px] font-semibold text-white mb-1.5">
                {feature.title}
              </h3>
              <p className="text-[13px] text-[#5e6578] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Features };
