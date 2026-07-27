export const BOT_URLS = {
  free: "https://discord.com/oauth2/authorize?client_id=1529737651098226718&permissions=282162275675329&integration_type=0&scope=bot+applications.commands",
  premium1: "https://discord.com/oauth2/authorize?client_id=1529737818539298897&permissions=282162275675329&integration_type=0&scope=bot+applications.commands",
  premium2: "https://discord.com/oauth2/authorize?client_id=1529737931529519195&permissions=282162275675329&integration_type=0&scope=bot+applications.commands",
} as const;

export const SUPPORT_SERVER = "https://discord.gg/delhi";

export const PREMIUM_TIERS = [
  {
    name: "Vexa",
    tag: "Free",
    description: "Everything you need to get started. High-quality music, queue management, and essential commands.",
    url: BOT_URLS.free,
    highlighted: false,
    features: [
      "High-quality audio playback",
      "Queue & playlist support",
      "Slash commands with autocomplete",
      "24/7 voice channel mode",
      "Basic audio filters",
    ],
  },
  {
    name: "Vexa Pro",
    tag: "Premium",
    description: "Enhanced performance with priority queue, advanced filters, and custom configurations for power users.",
    url: BOT_URLS.premium1,
    highlighted: true,
    features: [
      "Everything in Free",
      "Priority queue (jump the line)",
      "Advanced equalizer & filters",
      "Custom per-server settings",
      "Extended playlist length",
    ],
  },
  {
    name: "Vexa Ultra",
    tag: "Premium+",
    description: "The ultimate experience. Dedicated resources, exclusive features, and white-glove support.",
    url: BOT_URLS.premium2,
    highlighted: false,
    features: [
      "Everything in Pro",
      "Dedicated audio cluster",
      "Lossless audio quality",
      "Exclusive filters & effects",
      "Priority support channel",
    ],
  },
] as const;
