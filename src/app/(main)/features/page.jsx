"use client";

import PerPageHeader from "@/Components/Common/PerPageHeader";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaUser,
  FaMapMarkerAlt,
  FaRegSmileBeam,
  FaUsersCog,
  FaFileUpload,
} from "react-icons/fa";
import { MessageSquare, Users, Activity } from "lucide-react";
import CallToAction from "@/Components/Home/CallToAction";

 const featuresMessaging = [
    {
      title: "Direct Messaging (DMs)",
      description: "Chat privately with other users in real-time.",
      icon: MessageSquare,
    },
    {
      title: "Friends & Following",
      description: "Follow friends and track their activity effortlessly.",
      icon: Users,
    },
    {
      title: "Activity Feed",
      description: "Stay updated with community contributions and posts.",
      icon: Activity,
    },
  ];

const features = [
  {
    icon: <FaCalendarAlt className="w-10 h-10 text-[#2A65E4]" />,
    title: "Events",
    description: "Document significant events or happenings.",
    extendedDescription:
      "From live IRL moments to major milestones in the streaming community, the Events feature allows you to log and preserve key happenings. Each event entry can include detailed timelines, supporting images, and links to related streams or discussions, making it easy to relive and research history.",
  },
  {
    icon: <FaUser className="w-10 h-10 text-[#2A65E4]" />,
    title: "Person",
    description: "Add a person to the community database.",
    extendedDescription:
      "Profiles for creators, moderators, fans, and industry figures are a cornerstone of our archive. Each Person entry can showcase biographical details, notable contributions, and connected events, building a living network of individuals who shape the IRL streaming landscape.",
  },
  {
    icon: <FaMapMarkerAlt className="w-10 h-10 text-[#2A65E4]" />,
    title: "Place",
    description: "Add a location or venue to the database.",
    extendedDescription:
      "Places can be anything from iconic IRL streaming hotspots to unique venues tied to memorable moments. Each location entry supports photos, embedded maps, and a list of events or people associated with it.",
  },
  {
    icon: <FaRegSmileBeam className="w-10 h-10 text-[#2A65E4]" />,
    title: "Meme",
    description: "Document internet culture and memes.",
    extendedDescription:
      "Streaming culture thrives on humor and shared moments. With the Meme feature, you can archive viral clips, inside jokes, and iconic reaction images, preserving the cultural heartbeat of the IRL community.",
  },
  {
    icon: <FaUsersCog className="w-10 h-10 text-[#2A65E4]" />,
    title: "Group",
    description: "Add information about communities or organizations.",
    extendedDescription:
      "Communities, teams, and organizations form the backbone of streaming culture. The Group feature captures their histories, activities, and notable members, providing context to their role in the ecosystem.",
  },
  {
    icon: <FaFileUpload className="w-10 h-10 text-[#2A65E4]" />,
    title: "File Upload",
    description: "Upload a formatted file with multiple entries.",
    extendedDescription:
      "For bulk contributions, the File Upload feature allows you to submit multiple events, people, or places at once using a standardized format. This streamlines large-scale archival efforts and ensures data accuracy.",
  },
];

const Features = () => {
  return (
    <>
      <PerPageHeader
        title="Features Of The"
        description="Document, share, and explore the rich history of IRL streaming culture. Our platform lets you preserve important moments, connect with other enthusiasts, and contribute to a living archive of real-world streaming."
        bgVideo="vid2.mp4"
      />
      <section className="relative bg-white text-black py-20 px-6 overflow-hidden">
        {/* Light background accent */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#2A65E4]/5 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="relative max-w-6xl mx-auto animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
            Detailed Feature Overview
          </h1>

          <div className="grid gap-12 md:grid-cols-2">
            {features.map(({ icon, title, description, extendedDescription }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 border border-gray-200 hover:border-[#2A65E4] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white"
              >
                <div className="flex items-center gap-4 mb-6">
                  {icon}
                  <h3 className="text-2xl font-semibold">{title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{description}</p>
                <p className="text-gray-700 leading-relaxed">{extendedDescription}</p>
              </motion.div>
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
      {/* Flair Management Preview Section */}
<section className="relative bg-gradient-to-r from-black via-[#0D0D0D] to-black text-white py-20 px-6 overflow-hidden">
  {/* Decorative Background Glow */}
  <div className="absolute inset-0">
    <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#2A65E4]/20  blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
  </div>

  <div className="relative max-w-4xl mx-auto animate-fadeIn">
    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-center">
      Flair Management
    </h2>
    <p className="text-lg md:text-xl text-gray-300 mb-12 text-center leading-relaxed">
      A new way to customize your profile. Personalize your account with unique flairs to stand out in the community.
    </p>

    {/* Static Preview Card */}
    <div className="bg-gray-900/60  p-6 border border-gray-700 mb-8">
      <h3 className="text-2xl font-semibold mb-4">Feature Preview</h3>
      <p className="text-gray-400 mb-4">
        Manage your flairs and choose one to display next to your username. This feature is available to all members.
      </p>
      <div className="p-4 border border-gray-600 text-gray-500 text-center italic">
        Example: No active flair selected
      </div>
    </div>

    {/* Store Link */}
    <div className="text-center">
      <a
        href="/store"
        className="inline-block px-8 py-3 bg-[#2A65E4] hover:bg-[#1E4DC0] transition-all duration-300 text-lg font-semibold text-white shadow-lg hover:shadow-[#2A65E4]/50 hover:-translate-y-1"
      >
        Browse Flairs →
      </a>
    </div>
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

{/* Connect Socially Section */}
<section className="relative bg-white text-black py-20 px-6 overflow-hidden">
      {/* Light background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#2A65E4]/5 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Connect Socially
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
          Send direct messages, follow friends, and see what everyone’s up to
          in our interactive community.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {featuresMessaging.map((f, i) => (
            <div
              key={i}
              className="p-8 border border-gray-200 hover:border-[#2A65E4] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white"
            >
              <f.icon className="mx-auto mb-6 text-[#2A65E4]" size={48} />
              <h3 className="text-2xl font-semibold mb-4">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <CallToAction/>
    </>
  );
};

export default Features;
