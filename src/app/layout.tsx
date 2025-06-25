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

// ✅ Metadata Configuration
export const metadata: Metadata = {
  metadataBase: new URL("https://www.bevexexpress.com"),
  title: "BevEX Express | DOB Violation Help",
  description:
    "We help you convert DOB violation notices into booked calls—fast, easy, and reliable. Get help today with BevEX Express.",
  icons: {
    icon: "image2vector.svg",
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
        url: "/WhatsApp_Image_2025-04-18_at_13.18.34_c36a8747-removebg-preview-200x200.png.png",
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
    images: ["/WhatsApp_Image_2025-04-18_at_13.18.34_c36a8747-removebg-preview-200x200.png.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;  
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* <link rel="icon" href="/bevexlogo.svg.svg" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/bevex_logo.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" /> */}
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
