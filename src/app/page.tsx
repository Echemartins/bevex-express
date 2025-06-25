"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { TiTick } from "react-icons/ti";
import { BsQuestionCircleFill } from "react-icons/bs";
import { FaDollarSign, FaWallet } from "react-icons/fa";
import { MdWarning } from "react-icons/md";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const stepRef = useRef<HTMLDivElement>(null);

  const scrollToSteps = () => {
    stepRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-28 py-2 bg-white shadow-lg sticky top-0 z-50">
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
          <Button onClick={() => router.push("/booking")} variant="primary" className="py-3 hover:cursor-pointer transform hover:scale-105 hover:-translate-y-2 transition-all duration-400">
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
            <Button onClick={() => router.push("/booking")} variant="primary" className="w-fit  py-4 hover:cursor-pointer transform hover:scale-105 hover:-translate-y-2 transition-all duration-400">
              GET FREE CONSULTATION
            </Button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-[#d9e9ff83] px-6 md:px-12 pt-10 md:pt-16 pb-36">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12">
          <div className="lg:w-1/2 space-y-6">
            <p className="text-sm font-medium text-[#2a61a0] bg-[#d9e9ff] px-4 py-2 rounded-full w-fit inline-block">
              NYC’s #1 Code Violation Specialists
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
              Stop Paying Thousands in Fines For NYC Building Code Violations
            </h1>
            <p className="text-gray-700 text-lg">
              With nearly two decades of experience, we’ve helped hundreds of
              NYC landlords and businesses resolve violations, avoid costly
              fines, and get their buildings back to compliance—fast.
            </p>
            <div className="flex gap-6 flex-wrap mt-16">
              <Button onClick={() => router.push("/booking")} variant="primary" className="py-5 px-8 text-md hover:cursor-pointer transform hover:scale-105 hover:-translate-y-2 transition-all duration-400">
                SCHEDULE FREE CONSULTATION
              </Button>
              <Button variant="outline" className="py-1 hover:cursor-pointer" onClick={scrollToSteps}>
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
              className="rounded-xl shadow-lg w-full h-auto object-cover md:object-contain"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white px-6 md:px-12 py-10 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center -my-24 bg-[#2a61a0] rounded-2xl">
          {[
            { value: "90%", label: "First Shot Filing Approval Rate" },
            { value: "24/7", label: "Expert Support From Our In-House Team" },
            { value: "2000+", label: "Violations Resolved" },
          ].map((stat, index) => (
            <div key={index} className="py-8 px-6 space-y-2">
              <p className="text-6xl font-semi-bold font-medium">{stat.value}</p>
              <p className="text-md mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white text-gray-950 my-20">
        {/* Our Expert Solutions */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4 text-center">
            Our Expert Solutions
          </h2>
          <p className="text-gray-700 text-lg font-medium mb-16 text-center">
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
                className="bg-white flex-col rounded-xl shadow-xl shadow-gray-300 transform hover:scale-105 hover:-translate-y-4 transition-all duration-400"
              >
                <Image
                  src={item.src}
                  alt="service Image"
                  width={500}
                  height={400}
                  className="rounded-t-xl shadow-lg object-cover"
                />
                <div className="p-6 space-y-5">
                  <h3 className="text-2xl font-medium text-gray-800 mb-6">
                    {item.title}
                  </h3>
                  <p className="md:text-[15px] font-medium text-gray-600 leading-loose">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The High Cost of NYC Building Violations */}
        <div className="bg-white py-30 px-4">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4 text-center">
              The High Cost of NYC Building Violations
            </h3>
            <p className="text-gray-700 text-lg font-medium mb-16 text-center">
              Code violations in New York City don’t just mean fines, they can
              lead to serious legal and financial consequences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <FaDollarSign className="text-5xl text-[#2a61a0] mb-4" />,
                  title: "Costly Fines",
                  desc: "Building violations can result in fines averaging $10k–$25k per infraction, plus additional penalties for non-compliance.",
                },
                {
                  icon: <MdWarning className="text-5xl text-[#2a61a0] mb-4" />,
                  title: "Legal Liability",
                  desc: "Unresolved violations lead to criminal charges, restricted operations, and lawsuits at tenant rights violations.",
                },
                {
                  icon: <FaWallet className="text-5xl text-[#2a61a0] mb-4" />,
                  title: "Property Value Loss",
                  desc: "Outstanding code violations can lower property value by 10–15% and complicate future refinancing opportunities.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-white rounded-xl shadow-xl shadow-gray-300 hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-400"
                >
                  {item.icon}
                  <h4 className="text-gray-950 font-medium text-xl md:text-2xl mb-6">
                    {item.title}
                  </h4>
                  <p className="text-[15px] text-gray-600 font-medium leading-loose">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Simple 4-Step Process */}
        <div ref={stepRef} className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl lg:text-5xl font-semibold text-gray-950 mb-8">
              Our Simple 4-Step Process
            </h3>
            <p className="text-gray-700 text-lg font-medium mb-15">
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
                  className="rounded-xl p-6 hover:shadow-2xl transition"
                >
                  <div className="w-18 h-18 mb-8 flex items-center justify-center text-white text-2xl font-bold rounded-full bg-[#2a61a0] mx-auto">
                    {item.step}
                  </div>
                  <h4 className="font-medium text-2xl md:text-3xl text-gray-900 mb-8">
                    {item.title}
                  </h4>
                  <p className="text-[15px] text-gray-600 font-medium leading-loose">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white text-gray-900">
        {/* Testimonials */}
        <div className="bg-[#2a61a0] text-white py-16 px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-medium mb-4">What Our Clients Say</h2>
          <p className="mb-15 text-lg font-medium">
            Join hundreds of satisfied property owners who have saved thousands
            on violations.
          </p>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                Image: "/cheerful-guy-enjoying-outdoor-coffee-break-199x300.jpg",
                quote:
                  "BevEx express saved me over $10,000 in potential fines by resolving my DOB violations quickly. Their expertise in navigating NYC’s complex building codes is unmatched.",
                name: "Michael R.",
                role: "Commercial Property Owner",
              },
              {
                Image: "/young-african-woman-white-suit-using-phone-scaled.jpg",
                quote:
                  "After receiving multiple violations that threatened to shut down my restaurant, BevEx express stepped in and resolved everything in weeks. Their team handled all the paperwork and meetings.",
                name: "Sarah D.",
                role: "Restaurant Owner",
              },
              {
                Image: "/medium-shot-man-wearing-glasses-scaled.jpg.jpg",
                quote:
                  "As a property manager handling multiple buildings, I rely on BevEx express to keep us compliant. Their proactive approach has prevented countless violations and saved our company millions.",
                name: "Daniel T.",
                role: "Property Management Firm",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="shadow-xl text-white p-6 rounded-xl text-left "
              >
                <p className="mb-4 text-[16px] leading-10">“{item.quote}”</p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-16 aspect-square overflow-hidden rounded-full border-2 border-gray-300">
                    {/* {item.name[0]} */}
                    <img src={item.Image} alt="client pic" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-md">{item.name}</p>
                    <p className="text-sm opacity-80 ">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Bexexpress */}
        <div className="py-10 mt-10 px-3 text-center">
          <h3 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Why Choose BevEx express?
          </h3>
          <p className="text-gray-600 mb-12 text-[18px]">
            See the difference between handling NYC building violations on your
            own versus working with our experts.
          </p>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Without Bexexpress */}
            <div className="bg-blue-50 flex flex-col gap-5 rounded-lg p-6 text-left shadow-gray-300 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <BsQuestionCircleFill className="text-5xl text-orange-700" />
                <h4 className="text-3xl font-semibold text-orange-700">
                  Without BevEx Express
                </h4>
              </div>
              <ul className="list-disc pl-10 space-y-2 text-gray-700 text-[15px] font-medium leading-9">
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
            <div className="bg-blue-50 flex flex-col gap-5 rounded-lg p-6 text-left shadow-gray-300 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <TiTick className="text-6xl text-[#2a61a0]" />
                <h4 className="text-3xl font-semibold text-[#2a61a0]">
                  With BevEx Express
                </h4>
              </div>
              <ul className="list-disc pl-10 space-y-2 text-gray-700 text-[15px] font-medium leading-9">
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
        <div className="bg-[#2a61a0] flex flex-col gap-10 text-white mx-4 lg:mx-64 my-20 py-20 text-center px-6 md:px-16 rounded-lg shadow-lg">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Stop Paying NYC Building Code Fines Today
          </h2>
          <p className="mb-6">
            Schedule your free consultation with our experts and discover how we
            can resolve your violations quickly and cost-effectively.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mb-4 justify-center items-center">
            <button onClick={() => router.push("/booking")} className="bg-white text-[#2a61a0] font-semibold py-4 px-4 md:px-8 outline-0  rounded-full transform hover:-translate-y-2 transition duration-300 hover:cursor-pointer">
              SCHEDULE FREE CONSULTATION
            </button>
            <a
              href="tel:(646) 770-0796"
              className="transition py-4 px-6 rounded-full border border-gray-300 text-white font-semibold hover:text-[#2a61a0] hover:bg-white hover:border-[#2a61a0] transform hover:-translate-y-2 duration-300"
            // className="font-semibold text-white text-lg"c
            >
              CALL: (646) 770-0796
            </a>
          </div>
        </div>

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
