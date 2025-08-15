"use client";

import { motion } from "framer-motion";
import {
  FaHistory,
  FaUsers,
  FaLightbulb,
  FaHandsHelping,
  FaCalendarAlt,
  FaUser,
  FaMapMarkerAlt,
  FaFileUpload,
  FaUsersCog,
  FaRegSmileBeam,
} from "react-icons/fa";
import { ShieldCheck, Users, CloudLightning, Shield } from "lucide-react";
import Link from "next/link";


export function Mission() {
  return (
    <section className="relative bg-white text-gray-900 py-20 px-6 overflow-hidden">
      {/* Light background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] bg-[#2A65E4]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center animate-fadeIn">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Our Mission</h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          We strive to preserve the evolving culture of IRL streaming by
          creating a comprehensive, community-driven archive. Our goal is to
          keep real-world stories alive and accessible, celebrating the moments
          and people shaping this unique entertainment form.
        </p>
        <p className="mt-6 text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Through this archive, we empower creators and fans alike to document
          and share their experiences — ensuring the vibrant history of IRL
          streaming is never lost or forgotten.
        </p>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

const features = [
  {
    icon: <FaCalendarAlt className="w-8 h-8 text-[#2A65E4]" />,
    title: "Events",
    description: "Document significant events or happenings.",
  },
  {
    icon: <FaUser className="w-8 h-8 text-[#2A65E4]" />,
    title: "Person",
    description: "Add a person to the community database.",
  },
  {
    icon: <FaMapMarkerAlt className="w-8 h-8 text-[#2A65E4]" />,
    title: "Place",
    description: "Add a location or venue to the database.",
  },
  {
    icon: <FaRegSmileBeam className="w-8 h-8 text-[#2A65E4]" />,
    title: "Meme",
    description: "Document internet culture and memes.",
  },
  {
    icon: <FaUsersCog className="w-8 h-8 text-[#2A65E4]" />,
    title: "Group",
    description: "Add information about communities or organizations.",
  },
  {
    icon: <FaFileUpload className="w-8 h-8 text-[#2A65E4]" />,
    title: "File Upload",
    description: "Upload a formatted file with multiple entries.",
  },
];

export function CoreFeatures() {
  return (
    <section className="relative bg-gradient-to-r from-black via-[#0D0D0D] to-black text-white py-20 px-6 overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#2A65E4]/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center animate-fadeIn">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">Core Features</h2>
        <div className="grid gap-12 md:grid-cols-3 mb-12">
          {features.map(({ icon, title, description }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 border border-gray-700 hover:border-[#2A65E4] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gray-900/50"
            >
              <div className="flex items-center justify-center mb-6">{icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{title}</h3>
              <p className="text-gray-300">{description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/features"
          className="inline-block px-10 py-4 bg-[#2A65E4] hover:bg-[#1E4DC0] transition-all duration-300 text-lg font-semibold text-white shadow-lg hover:shadow-[#2A65E4]/50 hover:-translate-y-1"
        >
          Go to All Features →
        </Link>
      </div>
    </section>
  );
}

export function CommunityFocus() {
  return (
    <section className="relative bg-white text-gray-900 py-20 px-6 overflow-hidden">
      {/* Light background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] bg-[#2A65E4]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center animate-fadeIn">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10">Join the Community</h2>

        <div className="max-w-4xl mx-auto space-y-8 text-left text-gray-700">
          <div className="flex items-start gap-4">
            <Users className="w-6 h-6 text-[#2A65E4] mt-1" />
            <div>
              <h3 className="font-semibold text-lg text-gray-900">Connect with Community</h3>
              <p>Join thousands of IRL streaming enthusiasts</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <CloudLightning className="w-6 h-6 text-[#2A65E4] mt-1" />
            <div>
              <h3 className="font-semibold text-lg text-gray-900">Share Your Stories</h3>
              <p>Document and share your streaming experiences</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-[#2A65E4] mt-1" />
            <div>
              <h3 className="font-semibold text-lg text-gray-900">Secure & Private</h3>
              <p>Your data is protected with enterprise security</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-green-50 border border-green-300 rounded-md p-4 text-green-900">
            <ShieldCheck className="w-6 h-6 mt-1" />
            <div>
              <h3 className="font-semibold text-green-800">Secure OAuth Authentication</h3>
              <p>We use industry-standard OAuth protocols. Your credentials are never stored on our servers.</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
