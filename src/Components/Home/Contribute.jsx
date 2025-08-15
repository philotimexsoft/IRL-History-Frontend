// components/Contribute.tsx
import React from "react";
import { PlusCircle, CheckCircle, MessageSquare } from "lucide-react";

export default function Contribute() {
  const methods = [
    {
      title: "Submit an Event",
      description: "Add milestones, streamer debuts, or important IRL moments.",
      icon: PlusCircle,
    },
    {
      title: "Verify Information",
      description:
        "Help fact-check entries to keep our records accurate and trustworthy.",
      icon: CheckCircle,
    },
    {
      title: "Join Discussions",
      description: "Collaborate with other contributors in our community forum.",
      icon: MessageSquare,
    },
  ];

  return (
    <section className="relative bg-white text-black py-20 px-6 overflow-hidden">
      {/* Light background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#2A65E4]/5 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          How You Can Contribute
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
          Whether you’re a streamer, moderator, or fan — you can help preserve
          IRL history.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {methods.map((m, i) => (
            <div
              key={i}
              className="p-8 border border-gray-200 hover:border-[#2A65E4] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white"
            >
              <m.icon className="mx-auto mb-6 text-[#2A65E4]" size={48} />
              <h3 className="text-2xl font-semibold mb-4">{m.title}</h3>
              <p className="text-gray-600">{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
