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
import { Button } from "../components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

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
          <Button onClick={() => router.push("/booking")} variant="primary" className="py-3">
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
          <div className="absolute top-25 right-1 w-fit md:hidden">
            <Button onClick={() => router.push("/booking")} variant="primary" className="w-fit  py-4">
              GET FREE CONSULTATION
            </Button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-[#f0f6ff] px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12">
          <div className="lg:w-1/2 space-y-6">
            <p className="text-sm font-semibold text-blue-500 bg-[#d9e9ff] px-4 py-2 rounded-full w-full">
              NYC’s #1 Code Violation Specialists
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-700 leading-snug">
              Stop Paying Thousands in Fines For NYC Building Code Violations
            </h1>
            <p className="text-gray-600 text-lg">
              With nearly two decades of experience, we’ve helped hundreds of
              NYC landlords and businesses resolve violations, avoid costly
              fines, and get their buildings back to compliance—fast.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button onClick={() => router.push("/booking")} variant="orange" className="py-3">
                SCHEDULE FREE CONSULTATION
              </Button>
              <Button variant="outline" className="py-3">
                HOW IT WORKS
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/pexels-mikael-blomkvist-8960987-modified-scaled-r56qynf870yii1g6brl92xban6warzlqfjc0bj3db4.jpg.jpg"
              alt="Construction Worker"
              width={500}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-100 px-6 md:px-12 py-10 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center -my-20 bg-blue-600 rounded-2xl">
          {[
            { value: "90%", label: "First Shot Filing Approval Rate" },
            { value: "24/7", label: "Expert Support From Our In-House Team" },
            { value: "2000+", label: "Violations Resolved" },
          ].map((stat, index) => (
            <div key={index} className="p-6">
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-100 text-gray-800 my-15">
        {/* Our Expert Solutions */}
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">
            Our Expert Solutions
          </h2>
          <p className="text-gray-600 mb-10">
            We provide end-to-end services to resolve your building code
            violations and prevent future issues.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Code Violation Resolution",
                src: "/pexels-tima-miroshnichenko-6615041-modified-scaled-r5674gnrlx41xfa1880h62zilly0yeht1oqu69kmgo.jpg.jpg",
                desc: "We analyze your violations, create a strategic action plan, and liaise with NYC agencies to resolve issues quickly and avoid future risk.",
              },
              {
                title: "Code-Compliant Architectural Plans",
                src: "/pexels-tima-miroshnichenko-6615277-modified-scaled-r5673wx5med15m2pfhhb7pyu4inbgrbfyz1n3gdw3c.jpg.jpg",
                desc: "Our expert architects design compliant renovation plans that align with building codes while enhancing your property’s value and usability.",
              },
              {
                title: "Photo-Realistic Renderings",
                src: "/pexels-tima-miroshnichenko-6615286-modified-scaled-r567495238trcjkyg4rgm4vtuiz38tnycniyc1vrug.jpg.jpg",
                desc: "Visualize your project before construction begins with detailed 3D models and interior/exterior design renderings to aid approval and client understanding.",
              },
              {
                title: "Permit Filing & Approvals",
                src: "/pexels-olly-3932298-modified-1-scaled-r56742k6rekr39uiijx2mojlotviqxxtzqyjz45j20.jpg.jpg",
                desc: "We prepare NYC-compliant permit packages and handle approvals (e.g., zoning, permits, meetings) with agencies to keep your project approved faster.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-blue-50 flex-col rounded shadow-md hover:shadow-lg transition"
              >
                <Image
                  src={item.src}
                  alt="service Image"
                  width={500}
                  height={400}
                  className="rounded-t-sm shadow-lg object-cover"
                />
                <div className="p-4 space-y-4">
                  <h3 className="text-lg font-semibold text-orange-500 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-lg font-medium text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The High Cost of NYC Building Violations */}
        <div className="bg-orange-50 py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">
              The High Cost of NYC Building Violations
            </h3>
            <p className="text-gray-600 mb-10 text-center">
              Code violations in New York City don’t just mean fines, they can
              lead to serious legal and financial consequences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Costly Fines",
                  desc: "Building violations can result in fines averaging $10k–$25k per infraction, plus additional penalties for non-compliance.",
                },
                {
                  title: "Legal Liability",
                  desc: "Unresolved violations lead to criminal charges, restricted operations, and lawsuits at tenant rights violations.",
                },
                {
                  title: "Property Value Loss",
                  desc: "Outstanding code violations can lower property value by 10–15% and complicate future refinancing opportunities.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-white rounded-lg shadow-lg"
                >
                  <h4 className="text-blue-600 font-semibold text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Simple 4-Step Process */}
        <div className="bg-white py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-10">
              Our Simple 4-Step Process
            </h3>
            <p className="text-gray-600 mb-10">
              We make resolving NYC building code violations straightforward and
              stress-free.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                {
                  step: "1",
                  title: "Free Consultation",
                  desc: "We assess your violations, review your building conditions & history, then develop a strategic resolution plan.",
                },
                {
                  step: "2",
                  title: "Expert Analysis",
                  desc: "Our architects and code experts identify all violations and create comprehensive documentation.",
                },
                {
                  step: "3",
                  title: "Compliance Solutions",
                  desc: "We create and file architectural plans and represent you in front of agencies to resolve open code issues.",
                },
                {
                  step: "4",
                  title: "Case Resolution",
                  desc: "Once violations are dismissed, we deliver confirmation reports and long-term risk direction.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6 hover:shadow-lg transition"
                >
                  <div className="w-16 h-16 mb-4 flex items-center justify-center text-white font-bold rounded-full bg-blue-500 mx-auto">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-2xl text-gray-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-md text-gray-700 font-semi-bold">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white text-gray-800">
        {/* Testimonials */}
        <div className="bg-blue-500 text-white py-16 px-4 text-center">
          <h2 className="text-3xl font-bold mb-2">What Our Clients Say</h2>
          <p className="mb-10">
            Join hundreds of satisfied property owners who have saved thousands
            on violations.
          </p>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                Image:"/cheerful-guy-enjoying-outdoor-coffee-break-199x300.jpg",
                quote:
                  "Bexexpress saved me over $10,000 in potential fines by resolving my DOB violations quickly. Their expertise in navigating NYC’s complex building codes is unmatched.",
                name: "Michael R.",
                role: "Commercial Property Owner",
              },
              {
                 Image:"/young-african-woman-white-suit-using-phone-scaled.jpg",
                quote:
                  "After receiving multiple violations that threatened to shut down my restaurant, Bexexpress stepped in and resolved everything in weeks. Their team handled all the paperwork and meetings.",
                name: "Sarah D.",
                role: "Restaurant Owner",
              },
              {
                 Image:"/medium-shot-man-wearing-glasses-scaled.jpg.jpg",
                quote:
                  "As a property manager handling multiple buildings, I rely on Bexexpress to keep us compliant. Their proactive approach has prevented countless violations and saved our company millions.",
                name: "Daniel T.",
                role: "Property Management Firm",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-blue-700 text-white p-6 rounded-x text-left shadow-lg"
              >
                <p className="mb-4 text-lg">“{item.quote}”</p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-14 h-14 rounded-full bg-white/30 flex items-center justify-center text-xs font-bold">
                    {/* {item.name[0]} */}
                    <img src={item.Image} alt="client pic" className="rounded-full h-14 w-14" />
                  </div>
                  <div>
                    <p className="font-semibold text-md">{item.name}</p>
                    <p className="text-sm opacity-80">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Bexexpress */}
        <div className="py-10 mt-10 px-3 text-center">
          <h3 className="text-3xl lg:text-5xl font-bold text-gray-700 mb-6">
            Why Choose Bevex express?
          </h3>
          <p className="text-gray-600 mb-12 text-[18px]">
            See the difference between handling NYC building violations on your
            own versus working with our experts.
          </p>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Without Bexexpress */}
            <div className=" bg-orange-50 flex flex-col gap-5 rounded-lg p-6 text-left shadow-gray-500 shadow-lg">
              <h4 className="text-3xl font-semibold text-orange-600 mb-4">
                Without Bevex express
              </h4>
              <ul className="list-disc pl-10 space-y-2 text-gray-700 text-[16px]">
                <li>
                  Navigate complex NYC building codes alone with limited
                  expertise
                </li>
                <li>
                  Pay full violation fines, often $500-$25,000 per violation
                </li>
                <li>
                  Spend hours gathering documents and attending hearings yourself
                </li>
                <li>Risk additional penalties from improper remediation attempts</li>
                <li>Wait months or years for resolution with uncertain outcomes</li>
                <li>Face possible criminal charges for unresolved safety violations</li>
                <li>
                  Experience stress and uncertainty throughout the process
                </li>
                <li>Risk property devaluation and financing complications</li>
                <li>Likely receive future violations due to unaddressed root issues</li>
              </ul>
            </div>

            {/* With Bexexpress */}
            <div className= "bg-blue-50 flex flex-col gap-5 rounded-lg p-6 text-left shadow-gray-500 shadow-lg">
              <h4 className="text-3xl font-semibold text-blue-600 mb-4">
                With Bevex express
              </h4>
              <ul className="list-disc pl-10 space-y-2 text-gray-700 text-[16px]">
                <li>
                  Leverage 10+ years of specialized NYC building code experience
                </li>
                <li>
                  Reduce or eliminate fines through strategic resolution
                  approaches
                </li>
                <li>
                  Have all paperwork, hearings, and meetings handled by our team
                </li>
                <li>
                  Implement proper remediation with code-compliant solutions
                </li>
                <li>
                  Receive expedited resolution, often weeks instead of months
                </li>
                <li>
                  Avoid escalation to criminal proceedings with proper
                  compliance
                </li>
                <li>Enjoy peace of mind with our 95% success rate</li>
                <li>
                  Maintain or increase property value with proper documentation
                </li>
                <li>
                  Prevent future violations with our comprehensive approach
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-blue-600 flex flex-col gap-10 text-white mx-4 md:mx-64 my-20 py-20 text-center px-6 md:px-16 rounded-lg shadow-lg">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Stop Paying NYC Building Code Fines Today
          </h2>
          <p className="mb-6">
            Schedule your free consultation with our experts and discover how we
            can resolve your violations quickly and cost-effectively.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mb-4 justify-center items-center">
            <button onClick={() => router.push("/booking")} className="bg-orange-500 text-white font-semibold py-3 px-6 outline-0  rounded-full hover:bg-orange-600 transition">
              SCHEDULE FREE CONSULTATION
            </button>
            <a
              href="tel:+16464779876"
              className="bg-blue-700 hover:bg-blue-800 transition py-3 px-6 rounded-full border-[0.1px] border-gray-300 text-white font-semibold"
              // className="font-semibold text-white text-lg"c
            >
              CALL: +1-646-477-9876
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8">
            {/* Logo and desc */}
            <div>
              <div className="">
                {/* Bev<span className="text-white">EX</span> */}
                <Image width={120} height={120} src="/WhatsApp_Image_2025-04-18_at_13.18.34_c36a8747-removebg-preview-200x200.png.png" alt="LOGO"/>
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
