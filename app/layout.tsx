import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Timeline: Anthropic, OpenAI, and U.S. Government",
  description:
    "Timeline of recent events involving Anthropic, OpenAI, and the U.S. Department of War/Defense.",

  openGraph: {
    images: [
      {
        url: "https://ik.imagekit.io/fl2lbswwo/og.png",
        width: 1200,
        height: 630,
        alt: "Timeline: Anthropic, OpenAI, and U.S. Government",
        type: "image/png",
      },
    ],
    siteName: "Timeline: Anthropic, OpenAI, and U.S. Government",
    title: "Timeline: Anthropic, OpenAI, and U.S. Government",
    description:
      "Timeline of recent events involving Anthropic, OpenAI, and the U.S. Department of War/Defense.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Timeline: Anthropic, OpenAI, and U.S. Government",
    description:
      "Timeline of recent events involving Anthropic, OpenAI, and the U.S. Department of War/Defense.",
    site: "https://anthropic-timeline.vercel.app",
    images: [
      {
        url: "https://ik.imagekit.io/fl2lbswwo/og.png",
        width: 1200,
        height: 630,
        alt: "Timeline: Anthropic, OpenAI, and U.S. Government",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
