"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import WhatIsIRL from "./WhatIsIRL";
import CallToAction from "./CallToAction";
import CommunityStats from "./CommunityStats";
import Testimonials from "./Testimonials";
import Contribute from "./Contribute";
import FeaturedStreamers from "./FeaturedStreamers";

const HeroSection = () => {
  const nextSectionRef = useRef(null);

  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative h-screen flex flex-col text-white overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-y-[-1]"
        >
          <source src="/Videos/vid2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlays */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)]"></div>


        {/* Hero content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center justify-center flex-grow text-center px-6 max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            The Ultimate <span className="text-[#2A65E4]">IRL Stream</span>{" "}
            History
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-200 leading-relaxed">
            Document, share, and explore the rich history of IRL streaming
            culture. Our platform lets you preserve important moments, connect
            with other enthusiasts, and contribute to a living archive of
            real-world streaming.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#join"
              className="bg-[#2A65E4] hover:bg-[#2153b6] text-white px-6 py-3 text-lg font-medium transition-all shadow-lg hover:shadow-xl"
            >
              Join the Community
            </a>
            <a
              href="#learn-more"
              className="border border-white hover:border-[#2A65E4] hover:text-[#2A65E4] px-6 py-3 text-lg font-medium transition-all"
            >
              Learn More
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-400">
            Built for enthusiasts. Powered by the community.
          </p>
        </motion.div>

        {/* Down Button */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
          <motion.button
            onClick={scrollToNextSection}
            className="relative w-14 h-14 flex items-center justify-center rounded-full bg-transparent border border-blue-500"
            initial={{ y: 0 }}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full border border-blue-500"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
            <FiArrowDown className="text-blue-500 text-2xl z-10" />
          </motion.button>
        </div>
      </section>

      {/* Next Section */}
      <WhatIsIRL nextSectionRef={nextSectionRef}/>

      <CommunityStats/>

      <Contribute/>
       <CallToAction/>
       <FeaturedStreamers/>
        <Testimonials/>
    </>
  );
};

export default HeroSection;
