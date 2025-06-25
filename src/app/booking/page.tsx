

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
          <Button onClick={() => router.push("/")} variant="primary" className="py-3 cursor-pointer">
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

      <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] bg-blue-200">
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
            {/* Logo and Description */}
            <div>
              <div>
                <Image
                  width={120}
                  height={120}
                  src="/WhatsApp_Image_2025-04-18_at_13.18.34_c36a8747-removebg-preview-200x200.png.png"
                  alt="LOGO"
                />
              </div>
              <p className="text-md mt-2 text-gray-300">
                New York City building violation resolution experts providing fast, reliable, and affordable compliance solutions.
              </p>
              {/* <div className="flex gap-4 mt-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                          <svg className="w-6 h-6 fill-current text-white hover:text-blue-500" viewBox="0 0 24 24">
                            <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2v1.7h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12Z" />
                          </svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                          <svg className="w-6 h-6 fill-current text-white hover:text-pink-400" viewBox="0 0 24 24">
                            <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.6.6.3 1 .7 1.5 1.5.3.5.5 1.2.6 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.6 2.4-.3.6-.7 1-1.5 1.5-.5.3-1.2.5-2.4.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.6-.6-.3-1-.7-1.5-1.5-.3-.5-.5-1.2-.6-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.6-2.4.3-.6.7-1 1.5-1.5.5-.3 1.2-.5 2.4-.6C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.7.1 4.6.4 3.7.9 2.7 1.4 1.9 2.2 1.4 3.2c-.5.9-.8 2-1 3.3C.1 8.3 0 8.7 0 12s.1 3.7.2 5c.1 1.3.4 2.4 1 3.3.5 1 1.3 1.8 2.3 2.3.9.5 2 1 3.3 1.1 1.3.1 1.7.2 5 .2s3.7 0 5-.2c1.3-.1 2.4-.4 3.3-1 1-.5 1.8-1.3 2.3-2.3.5-.9 1-2 1.1-3.3.1-1.3.2-1.7.2-5s0-3.7-.2-5c-.1-1.3-.4-2.4-1-3.3-.5-1-1.3-1.8-2.3-2.3-.9-.5-2-1-3.3-1.1C15.7.1 15.3 0 12 0zm0 5.8A6.2 6.2 0 1 0 18.2 12 6.2 6.2 0 0 0 12 5.8Zm0 10.2A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.4-10.7a1.44 1.44 0 1 1-1.44-1.44A1.44 1.44 0 0 1 18.4 5.3Z" />
                          </svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                          <svg className="w-6 h-6 fill-current text-white hover:text-blue-300" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.7 2.2 5 5 5h14c2.8 0 5-2.3 5-5v-14c0-2.8-2.2-5-5-5zm-11.5 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.8-.8-1.8-1.7s.8-1.8 1.7-1.8c1 0 1.8.8 1.8 1.8s-.8 1.7-1.7 1.7zm13 11.3h-3v-5.5c0-1.4-.5-2.3-1.8-2.3-1 0-1.5.7-1.7 1.3-.1.2-.1.5-.1.8v5.7h-3s.1-9.2 0-10h3v1.4c.4-.7 1.2-1.7 2.9-1.7 2.1 0 3.7 1.4 3.7 4.3v6z" />
                          </svg>
                        </a>
                      </div> */}
            </div>

            {/* Services */}
            <div className="mt-8 pl-7 lg:pl-24">
              <h4 className="font-semibold text-2xl mb-6">Services</h4>
              <ul className="text-md text-[#255892] md:text-gray-100 space-y-3">
                <li>Code Violation Resolution</li>
                <li>Architectural Plans</li>
                <li>Permit Filing</li>
                <li>Photo Realistic Renderings</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="mt-8 lg:pl-20">
              <h4 className="font-semibold text-2xl text-white mb-6">Contact</h4>
              <ul className="text-md text-gray-300 space-y-3">
                <li>
                  <a href="tel:+16464779876" className="hover:underline">
                    (646) 770-0796
                  </a>
                </li>
                <li>
                  <a href="tel:+18442383977" className="hover:underline">
                    Toll Free: 1 (844) 238-3977 [1(844)BevEx77]
                  </a>
                </li>
                <li>
                  <a href="mailto:info@bevexexpress.com" className="hover:underline">
                    info@bevexexpress.com
                  </a>
                </li>
              </ul>

            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-10">
            © 2025 BevExExpress Architectural Services. All Rights Reserved.
          </p>
        </footer>
      </section>
    </main>
  );
}
