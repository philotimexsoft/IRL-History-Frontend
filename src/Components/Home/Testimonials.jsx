// components/Testimonials.tsx
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Chen",
      role: "IRL Streamer since 2016",
      text: "Finally, a place where IRL streaming history is preserved for future fans. I’ve contributed 20+ events so far!",
      image: "/avatars/avatar1.jpg",
    },
    {
      name: "Maria Lopez",
      role: "Twitch Moderator",
      text: "I use IRLHistory to fact-check streamer timelines. The community here is amazing.",
      image: "/avatars/avatar2.jpg",
    },
    {
      name: "David Kim",
      role: "Streaming Enthusiast",
      text: "It’s like a living museum of live streaming. Highly recommend joining and contributing!",
      image: "/avatars/avatar3.jpg",
    },
    {
      name: "Sarah Park",
      role: "YouTube IRL Vlogger",
      text: "A vital resource for preserving the culture and milestones of live streaming.",
      image: "/avatars/avatar4.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="relative bg-gradient-to-r from-black via-[#0D0D0D] to-black text-white py-20 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#2A65E4]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center animate-fadeIn">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Loved by the Community
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-14 max-w-2xl mx-auto leading-relaxed">
          Together, we’re building the most complete record of IRL streaming
          history — one event at a time.
        </p>

        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="px-4">
              <div className="border border-gray-700 bg-black/50 p-6 h-full flex flex-col justify-between hover:border-[#2A65E4] transition-colors">
                <div>
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 mx-auto mb-4 object-cover rounded-full border border-gray-600"
                  />
                  <p className="text-gray-300 italic mb-4 leading-relaxed">
                    “{t.text}”
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-white">{t.name}</h3>
                  <span className="text-sm text-gray-400">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        /* Fade in animation */
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

        /* Make carousel dots blue */
        :global(.slick-dots li button:before) {
          color: #2a65e4 !important;
          opacity: 0.8;
        }
        :global(.slick-dots li.slick-active button:before) {
          color: #2a65e4 !important;
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
