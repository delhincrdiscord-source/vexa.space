import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Vexa — Free Discord Music Bot",
    template: "%s | Vexa",
  },
  description:
    "Free high-quality Discord music bot. Supports Spotify, Apple Music, YouTube, SoundCloud, and 200+ sources. Queue management, playlists, and zero-lag playback.",
  keywords: ["discord bot", "music bot", "discord music", "spotify", "youtube", "voice channel", "playlist"],
  authors: [{ name: "Vexa" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Vexa",
    title: "Vexa — Free Discord Music Bot",
    description:
      "Free high-quality Discord music bot. Supports Spotify, Apple Music, YouTube, and more.",
    images: [
      {
        url: "/vexa-logo.png",
        width: 512,
        height: 512,
        alt: "Vexa Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vexa — Free Discord Music Bot",
    description:
      "Free high-quality Discord music bot. Supports Spotify, Apple Music, YouTube, and more.",
    images: ["/vexa-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0e12",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
