// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import { Button } from "../components/ui/button";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-white">
//       {/* Header */}
//       <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
//         <div className="flex items-center space-x-2">
//           <Image src="/logo.png" alt="BevEx Logo" width={40} height={40} />
//           <span className="text-2xl font-bold text-[#c43226]">BevEx</span>
//         </div>
//         <Button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-full">
//           GET FREE CONSULTATION
//         </Button>
//       </header>

//       {/* Hero Section */}
//       <section className="bg-[#efe9ff] px-8 py-16">
//         <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
//           {/* Text Block */}
//           <div className="lg:w-1/2 space-y-6">
//             <p className="text-sm font-semibold text-purple-700 bg-purple-200 px-4 py-1 rounded-full w-fit">
//               NYC’s #1 Code Violation Specialists
//             </p>
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
//               Stop Paying Thousands in Fines For NYC Building Code Violations
//             </h1>
//             <p className="text-gray-700 text-lg">
//               With nearly two decades of experience, we’ve helped hundreds of NYC landlords and
//               businesses resolve violations, avoid costly fines, and get their buildings back to
//               compliance—fast.
//             </p>
//             <div className="flex gap-4 flex-wrap">
//               <Button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-full">
//                 SCHEDULE FREE CONSULTATION
//               </Button>
//               <Button
//                 variant="outline"
//                 className="border-purple-600 text-purple-700 hover:bg-purple-100 px-6 py-3 rounded-full"
//               >
//                 HOW IT WORKS
//               </Button>
//             </div>
//           </div>

//           {/* Image Block */}
//           <div className="lg:w-1/2 flex justify-center">
//             <Image
//               src="/worker.jpg"
//               alt="Construction Worker"
//               width={500}
//               height={400}
//               className="rounded-xl shadow-lg object-cover"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="bg-purple-700 px-8 py-10 text-white">
//         <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-6">
//           <div className="bg-purple-800 rounded-2xl p-6 shadow-md">
//             <p className="text-3xl font-bold">90%</p>
//             <p className="text-sm mt-1">First Shot Filing Approval Rate</p>
//           </div>
//           <div className="bg-purple-800 rounded-2xl p-6 shadow-md">
//             <p className="text-3xl font-bold">24/7</p>
//             <p className="text-sm mt-1">Expert Support From Our In-House Team</p>
//           </div>
//           <div className="bg-purple-800 rounded-2xl p-6 shadow-md">
//             <p className="text-3xl font-bold">2000+</p>
//             <p className="text-sm mt-1">Violations Resolved</p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-blue-100 text-[#1a1a1a] font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-28 py-2 bg-white shadow-lg sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <Image
            src="/WhatsApp_Image_2025-04-18_at_13.18.34_c36a8747-removebg-preview-200x200.png.png"
            alt="BevEx Logo"
            width={80}
            height={80}
          />
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <Button variant="primary" className="py-3">
            GET FREE CONSULTATION
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
          <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
            <Button variant="primary" className="w-full  py-4">
              GET FREE CONSULTATION
            </Button>
          </div>
        )}
      </header>
      
      <div className="w-full h-[700px]">
  <iframe
    src="https://calendly.com/echemartins47"
    className="w-full h-full border-0"
    title="Schedule Meeting"
  />
</div>

      
      <section className="bg-white text-gray-800">

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8">
            {/* Logo and desc */}
            <div>
              <div className="">
                {/* Bev<span className="text-white">EX</span> */}
                <img src="/WhatsApp_Image_2025-04-18_at_13.18.34_c36a8747-removebg-preview-200x200.png.png" alt="LOGO" className="h-32 w-32"/>
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
            <div className="mt-8 pl-7">
              <h4 className="font-semibold text-2xl text-white mb-6">Company</h4>
              <ul className="text-md text-gray-300 space-y-3">
                <li>WHO WE ARE</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>Contact Us</li>
              </ul>
            </div>

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
