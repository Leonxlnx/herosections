import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://herosections.vercel.app"),
  title: "HeroSections — Beautiful Hero Sections Ready to Ship",
  description:
    "A curated collection of modern, stunning hero sections. Copy the code, customize, and ship faster. Open source and free to use.",
  keywords: [
    "hero sections",
    "landing page",
    "web design",
    "UI components",
    "React components",
    "Next.js",
    "tailwind",
    "open source",
    "free templates",
    "web development",
  ],
  authors: [{ name: "LexnLin", url: "https://x.com/LexnLin" }],
  creator: "LexnLin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://herosections.vercel.app",
    siteName: "HeroSections",
    title: "HeroSections — Beautiful Hero Sections Ready to Ship",
    description:
      "A curated collection of modern, stunning hero sections. Copy the code, customize, and ship faster.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HeroSections Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HeroSections — Beautiful Hero Sections Ready to Ship",
    description:
      "A curated collection of modern, stunning hero sections. Copy the code, customize, and ship faster.",
    creator: "@LexnLin",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://herosections.vercel.app" />
      </head>
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
