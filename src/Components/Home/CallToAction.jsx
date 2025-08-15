// components/CallToAction.tsx
import React from "react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="relative bg-gradient-to-r from-black via-[#0D0D0D] to-black text-white py-20 px-6 overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#2A65E4]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      </div>

      <div className="relative max-w-3xl mx-auto text-center animate-fadeIn">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Ready to Start Contributing?
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
          Join thousands of users documenting and preserving IRL streaming history.
        </p>
        <Link
          href="/signup"
          className="inline-block px-10 py-4 bg-[#2A65E4] hover:bg-[#1E4DC0] transition-all duration-300 text-lg font-semibold text-white shadow-lg hover:shadow-[#2A65E4]/50 hover:-translate-y-1"
        >
          Get Started Today →
        </Link>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>


  );
}
