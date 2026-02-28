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
    images: ["https://ik.imagekit.io/fl2lbswwo/og.png"],
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
    images: ["https://ik.imagekit.io/fl2lbswwo/og.png"],
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
