export const VEXA_DATA = {
  name: "Vexa",
  tagline: "Free High-Quality Discord Music Bot",
  supportServerUrl: "https://discord.gg/delhi",
  inviteUrls: {
    free: "https://discord.com/oauth2/authorize?client_id=1529737651098226718&permissions=282162275675329&integration_type=0&scope=bot+applications.commands",
    pro: "https://discord.com/oauth2/authorize?client_id=1529737818539298897&permissions=282162275675329&integration_type=0&scope=bot+applications.commands",
    ultra: "https://discord.com/oauth2/authorize?client_id=1529737931529519195&permissions=282162275675329&integration_type=0&scope=bot+applications.commands"
  },
  stats: {
    servers: "50,000+",
    users: "2,000,000+",
    commands: "45+"
  }
};

export const FEATURES = [
  {
    title: "High-Quality Audio",
    description: "Crystal-clear audio from YouTube, Spotify, SoundCloud, Apple Music, Tidal, Deezer, and 200+ sources.",
    icon: "headphone"
  },
  {
    title: "Smart Queue",
    description: "Intelligent queue management with shuffle, repeat, skip, and vote-skip. Remembers your preferences.",
    icon: "list"
  },
  {
    title: "Playlist Support",
    description: "Import and play full playlists from Spotify, YouTube, and more. Auto-fetch lyrics and album art.",
    icon: "list-music"
  },
  {
    title: "Rock-Solid Stability",
    description: "Custom audio engine optimized for Discord. Zero crashes, automatic reconnection, 99.9% uptime.",
    icon: "activity"
  },
  {
    title: "Rich Controls",
    description: "Interactive buttons, slash commands, and a powerful dashboard. Volume, equalizer, filters, and more.",
    icon: "sliders"
  },
  {
    title: "Instant Setup",
    description: "Add Vexa with one click. No configuration needed. It just works.",
    icon: "zap"
  }
];

export const COMMANDS = [
  { name: "/play", desc: "Play a song or playlist" },
  { name: "/pause", desc: "Pause current playback" },
  { name: "/skip", desc: "Skip to the next song" },
  { name: "/queue", desc: "View the music queue" },
  { name: "/shuffle", desc: "Shuffle the current queue" },
  { name: "/loop", desc: "Loop song or queue" },
  { name: "/volume", desc: "Adjust playback volume" },
  { name: "/nowplaying", desc: "See what's playing" },
  { name: "/lyrics", desc: "Get song lyrics" },
  { name: "/playlist", desc: "Manage your playlists" },
  { name: "/247", desc: "Keep bot in channel 24/7" },
  { name: "/filters", desc: "Apply audio effects" }
];
