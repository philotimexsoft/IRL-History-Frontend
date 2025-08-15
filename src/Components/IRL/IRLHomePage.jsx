"use client";
import { useState } from "react";
import { Clock, TrendingUp, User, Star } from "lucide-react";

const tabs = [
  { id: "latest", label: "Latest", number: "01", icon: Clock },
  { id: "trending", label: "Trending", number: "02", icon: TrendingUp },
  { id: "following", label: "Following", number: "03", icon: User },
  { id: "myposts", label: "My Posts", number: "04", icon: Star },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("latest");

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Main Content */}
      <div className="flex-1 p-6">
        {activeTab === "latest" && (
          <div className="max-w-7xl mx-auto">
            📢 Latest content goes here
          </div>
        )}
        {activeTab === "trending" && (
          <div className="max-w-7xl mx-auto">
            🔥 Trending content goes here
          </div>
        )}
        {activeTab === "following" && (
          <div className="max-w-7xl mx-auto">
            👥 Following feed goes here
          </div>
        )}
        {activeTab === "myposts" && (
          <div className="max-w-7xl mx-auto">
            ✏️ My posts go here
          </div>
        )}
      </div>

      {/* Floating Fixed Tabs */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-2">
        <nav className="flex border border-gray-300  overflow-hidden shadow-lg bg-white">
          {tabs.map(({ id, label, number, icon: Icon }, index) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex flex-col items-center justify-center flex-1 sm:w-44 md:w-60 py-2 sm:py-3 px-2 sm:px-6 transition-all duration-200 ${
                  isActive
                    ? "bg-[#2A65E4] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                } ${index !== tabs.length - 1 ? "border-r border-gray-300" : ""}`}
              >
                {/* Number on top */}
                {/* <span className="text-sm sm:text-lg md:text-xl font-extrabold mb-1 tracking-wide">
                  {number}
                </span> */}

                {/* Icon + Label in one row */}
                <div className="flex items-center gap-1 sm:gap-2">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-xs sm:text-sm md:text-base font-semibold">
                    {label}
                  </span>
                </div>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
