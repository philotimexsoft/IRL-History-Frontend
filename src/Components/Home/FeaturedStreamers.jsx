// components/FeaturedStreamers.tsx
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function FeaturedStreamers() {
  const streamers = [
    {
      name: "StreamerOne",
      bio: "Pioneer of mobile IRL streaming, bringing everyday life to the audience.",
      img: "/Logos/logo1.png",
      slug: "streamer-one",
    },
    {
      name: "StreamerTwo",
      bio: "Known for adventurous city walks and cultural exploration streams.",
      img: "/Logos/logo2.png",
      slug: "streamer-two",
    },
    {
      name: "StreamerThree",
      bio: "Built a strong community around spontaneous IRL road trips.",
      img: "/Logos/logo3.png",
      slug: "streamer-three",
    },
  ];

  return (
    <section className="relative bg-white text-black py-20 px-6">
      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Featured Streamer Timelines
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          Discover the journeys of notable streamers who shaped IRL history.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {streamers.map((s, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 hover:border-[#2A65E4] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-left flex flex-col"
            >
              <Image
                src={s.img}
                alt={s.name}
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold mb-3">{s.name}</h3>
                <p className="text-gray-600 flex-1">{s.bio}</p>
                <a
                  href={`/timeline/${s.slug}`}
                  className="mt-6 inline-flex items-center text-[#2A65E4] font-semibold hover:underline"
                >
                  View Timeline <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
