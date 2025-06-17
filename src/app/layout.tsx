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



  // export const metadata = {
  //   title: "BevEX Express",
  //   description: "Fast DOB Violation Booking",
  //   icons: {
  //     icon: "/WhatsApp_Image_2025-04-18_at_13.18.34_c36a8747-removebg-preview-200x200.png.png",
  //   },
  // };
;
export const metadata: Metadata = {
  title: "BevEX Express | DOB Violation Help",
  description: "We help you convert DOB violation notices into booked calls—fast, easy, and reliable. Get help today with BevEX Express.",
  icons: {
    icon: "/WhatsApp_Image_2025-04-18_at_13.18.34_c36a8747-removebg-preview-200x200.png.png",
  },
  keywords: "DOB violation, NYC building violation, violation help, BevEX Express",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
