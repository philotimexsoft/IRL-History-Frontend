import React from "react";
import { Users, Video, PenTool } from "lucide-react";

export default function CommunityStats() {
  const stats = [
    { label: "Streamers Documented", value: "1,245", icon: Users },
    { label: "Events Recorded", value: "3,876", icon: Video },
    { label: "Active Contributors", value: "429", icon: PenTool },
  ];

  return (
    <section className="relative bg-gradient-to-r from-black via-[#0D0D0D] to-black text-white py-20 px-6 overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#2A65E4]/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center animate-fadeIn">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Our Growing Community
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-14 max-w-2xl mx-auto leading-relaxed">
          Together, we’re building the most complete record of IRL streaming
          history — one event at a time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 p-8 shadow-lg hover:shadow-[#2A65E4]/30 hover:-translate-y-1 transition-all duration-300"
            >
              <stat.icon className="mx-auto mb-5 text-[#2A65E4]" size={44} />
              <h3 className="text-5xl font-extrabold">{stat.value}</h3>
              <p className="text-gray-400 text-lg mt-2">{stat.label}</p>
            </div>
          ))}
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
