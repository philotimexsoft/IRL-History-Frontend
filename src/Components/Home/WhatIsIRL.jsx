"use client";

import { motion } from "framer-motion";
import {
  FiFileText,
  FiUsers,
  FiMessageSquare,
  FiSearch,
  FiShield,
  FiClock,
  FiArrowRight,
} from "react-icons/fi";
import { useRouter } from "next/navigation";

const features = [
  {
    title: "Rich Content Creation",
    description:
      "Create detailed articles with rich text formatting, media embeds, and comprehensive documentation.",
    icon: FiFileText,
  },
  {
    title: "Social Connections",
    description:
      "Connect with other IRL streaming enthusiasts, build your network, and collaborate on content.",
    icon: FiUsers,
  },
  {
    title: "Real-time Messaging",
    description:
      "Communicate directly with other users through our integrated messaging system.",
    icon: FiMessageSquare,
  },
  {
    title: "Powerful Search",
    description:
      "Find specific events, streamers, or topics with our comprehensive search functionality.",
    icon: FiSearch,
  },
  {
    title: "Trusted Platform",
    description:
      "Built with security and reliability in mind, ensuring your content and data are safe.",
    icon: FiShield,
  },
  {
    title: "Historical Archive",
    description:
      "Preserve important moments and create a comprehensive timeline of IRL streaming culture.",
    icon: FiClock,
  },
];

export default function IRLHistorySection({ nextSectionRef }) {
  const router = useRouter();

  return (
    <section
      ref={nextSectionRef}
      className="bg-white px-6 py-24 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Side: Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 leading-tight">
            What is <span className="text-[#2A65E4]">IRLHistory?</span>
          </h2>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            IRLHistory is the ultimate platform for documenting, sharing, and
            exploring the rich history of IRL streaming culture. We bring
            together a community of streamers, fans, and historians to preserve
            important moments, celebrate the evolution of the scene, and keep
            the spirit of real-world streaming alive for generations to come.
          </p>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            “IRL” stands for “In Real Life.” It means live video broadcasts
            where the streamer is out in the real world — interacting with their
            environment, people, and everyday life.
          </p>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
            Imagine someone walking around a city, visiting a restaurant,
            attending an event, or just going about their day while broadcasting
            it live. That’s IRL livestreaming!
          </p>

          {/* Animated Arrow Button */}
          <motion.button
            onClick={() => router.push("/learn")}
            className="mt-8 flex items-center gap-2 text-[#2A65E4] font-semibold text-lg hover:underline focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Learn More</span>
            <motion.div
              animate={{ x: [0, 8, 0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <FiArrowRight size={22} />
            </motion.div>
          </motion.button>
        </div>

        {/* Right Side: Feature Boxes */}
        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map(({ title, description, icon: Icon }, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-gray-200 p-6 cursor-default hover:border-[#2A65E4] hover:shadow-lg transition-all duration-300 ease-in-out flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.12, ease: "easeOut" }}
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 text-[#2A65E4] bg-[#EAF1FF] rounded-full p-3 mr-4 flex items-center justify-center">
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {title}
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
