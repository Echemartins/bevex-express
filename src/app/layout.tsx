import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Complete Metadata Configuration
export const metadata: Metadata = {
  metadataBase: new URL("https://www.bevexexpress.com"), // Set for resolving image URLs
  title: "BevEX Express | DOB Violation Help",
  description:
    "We help you convert DOB violation notices into booked calls—fast, easy, and reliable. Get help today with BevEX Express.",
  icons: {
    icon: "/bevex_logo.svg.ico", // Make sure this file exists in /public
  },
  keywords:
    "DOB violation, NYC building violation, violation help, BevEX Express",
  openGraph: {
    title: "BevEX Express",
    description: "Helping you resolve DOB violations fast.",
    url: "https://www.bevexexpress.com",
    siteName: "BevEX Express",
    images: [
      {
        url: "/bevex_logo.svg.ico",
        width: 1200,
        height: 630,
        alt: "BevEX Express - Resolve DOB violations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BevEX Express",
    description: "Convert DOB violations into booked calls.",
    images: [
      "/bevex_logo.svg.ico",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head />
      <body className="antialiased">{children}</body>
    </html>
  );
}
