import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hero Sections Collection",
  description:
    "A curated collection of stunning, modern hero sections ready to copy and use in your projects.",
  keywords: ["hero sections", "web design", "react", "next.js", "components"],
  openGraph: {
    title: "Hero Sections Collection",
    description: "Beautiful hero sections ready to use",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
