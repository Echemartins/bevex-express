

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <main className=" bg-blue-100 text-[#1a1a1a] font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-28 py-2 bg-white shadow-xl sticky top-0 z-50">
        <div className="flex items-center space-x-2">
            <Link href="/">
          <Image
            src="/WhatsApp_Image_2025-04-18_at_13.18.34_c36a8747-removebg-preview-200x200.png.png"
            alt="BevEx Logo"
            width={80}
            height={80}
            />
            </Link>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <Button onClick={() => router.push("/")} variant="primary" className="py-3">
            Home
          </Button>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6 text-[#0057B8]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="absolute top-25 right-1 w-fit md:hidden">
            <Button variant="primary" className="w-full  py-4">
              Home
            </Button>
          </div>
        )}
      </header>
      
      <div className="w-full h-[400px] md:h-[550px] lg:h-[700px] bg-blue-200">
  <iframe
    src="https://calendly.com/bevexexpress"
    className="w-full h-full"
    title="Schedule Meeting"
  />
</div>

      
      <section className="bg-white text-gray-800">

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and desc */}
            <div>
              <div className="">
                {/* Bev<span className="text-white">EX</span> */}
                <Image width={120} height={120} src="/WhatsApp_Image_2025-04-18_at_13.18.34_c36a8747-removebg-preview-200x200.png.png" alt="LOGO" className="h-32 w-32"/>
              </div>
              <p className="text-md mt-2 text-gray-300">
                New York City building violation resolution experts providing
                fast, reliable, and affordable compliance solutions.
              </p>
            </div>

            {/* Services */}
            <div className="mt-8 pl-7">
              <h4 className="font-semibold text-2xl  mb-6">Services</h4>
              <ul className="text-md text-blue-800 space-y-3">
                <li>Code Violation Resolution</li>
                <li>Architectural Plans</li>
                <li>Permit Filing</li>
                <li>Photo Realistic Renderings</li>
              </ul>
            </div>

            {/* Company */}
            {/* <div className="mt-8 pl-7">
              <h4 className="font-semibold text-2xl text-white mb-6">Company</h4>
              <ul className="text-md text-gray-300 space-y-3">
                <li>WHO WE ARE</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>Contact Us</li>
              </ul>
            </div> */}

            {/* Contact */}
            <div className="mt-8">
              <h4 className="font-semibold text-2xl text-white mb-6">Contact</h4>
              <ul className="text-md text-gray-300 space-y-3">
                <li>+1-646-477-9876</li>
                <li>info@bexexpress.com</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-10">
            © 2025 Bevexpress Architectural Services. All Rights Reserved.
          </p>
        </footer>
      </section>
    </main>
  );
}
