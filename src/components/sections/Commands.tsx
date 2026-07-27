"use client";

import { SectionHeading } from "@/components/SectionHeading";

const commands = [
  { name: "/play", description: "Play a song or playlist from URL or search query" },
  { name: "/pause", description: "Pause the current track" },
  { name: "/skip", description: "Skip to the next track in queue" },
  { name: "/queue", description: "View and manage the current queue" },
  { name: "/shuffle", description: "Shuffle the current queue" },
  { name: "/loop", description: "Toggle loop mode for track or queue" },
  { name: "/volume", description: "Adjust playback volume (1-100)" },
  { name: "/nowplaying", description: "Show current track with controls" },
  { name: "/lyrics", description: "Fetch lyrics for the current song" },
  { name: "/playlist", description: "Save and manage your playlists" },
  { name: "/247", description: "Toggle 24/7 mode — stay in voice channel" },
  { name: "/filters", description: "Apply audio effects and equalizer presets" },
];

function Commands() {
  return (
    <section id="commands" className="relative py-20 sm:py-24 bg-[#16161d]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          badge="Commands"
          title="Powerful, intuitive commands"
          description="Slash commands with autocomplete. Your members will figure it out instantly."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {commands.map((cmd) => (
            <div
              key={cmd.name}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#1c1c26] border border-white/[0.04] hover:border-white/[0.08] transition-all hover:bg-[#1e1e28]"
            >
              <code className="shrink-0 text-[13px] font-semibold text-[#7c5cff] bg-[#7c5cff]/10 px-2 py-0.5 rounded-md">
                {cmd.name}
              </code>
              <span className="text-[13px] text-[#5e6578] leading-snug">
                {cmd.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Commands };
