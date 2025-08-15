"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  FileText,
  Activity,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { LogoutUser } from "@/store/Reducers/UserReducer/UserActions";
import { FaSignOutAlt } from "react-icons/fa";

export default function ProfileModern() {
  const [activeTab, setActiveTab] = useState("about");
  const dispatch = useDispatch();

  const {
    loading: userLoading,
    user,
    isAuthenticated,
  } = useSelector((state) => state.user);

  const tabs = [
    { id: "about", label: "About", icon: <User size={20} /> },
    { id: "activity", label: "Activities", icon: <Activity size={20} /> },
    { id: "articles", label: "Articles", icon: <FileText size={20} /> },
    { id: "followers", label: "Followers", icon: <Users size={20} /> },
    { id: "settings", label: "Settings", icon: <Settings size={20} /> },
  ];

  const SignOut = () => {
    dispatch(LogoutUser());
  };

  const tabContent = {
    about: (
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">Bio</h2>
          <p className="text-gray-600 leading-relaxed">
            {isAuthenticated && <>{user?.bio || "No Bio Yet"}</>}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">Description</h2>
          <p className="text-gray-600 leading-relaxed">
            {isAuthenticated && (
              <>{user?.description || "No Description Yet"}</>
            )}
          </p>
        </section>
      </div>
    ),
    activity: <div className="text-gray-600">No recent activity yet.</div>,
    articles: <div className="text-gray-600">No articles published yet.</div>,
    followers: <div className="text-gray-600">No followers yet.</div>,
    settings: <div className="text-gray-600">Settings panel coming soon.</div>,
  };

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-7xl mx-auto flex bg-white">
        {/* Sidebar */}
        <aside
          className=" w-72 p-6 flex flex-col items-start bg-white min-h-screen border-r border-gray-200 sticky top-18"
          style={{ height: "calc(100vh - 0px)" }}
        >
          {/* Profile Avatar */}
          <div className="relative mb-6">
            <div className="w-32 h-32 rounded-md bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center shadow-lg">
              <img
                src={
                  isAuthenticated && user && user.avatar
                    ? user.avatar
                    : "/Logos/logo1.png"
                }
                alt="Avatar"
                className="w-28 h-28 rounded-md object-cover border-4 border-white shadow"
              />
            </div>
          </div>

          {/* Name & Role */}
          <h1 className="text-xl font-semibold text-gray-900">
            {isAuthenticated && user ? user.name : `Unknown User`}
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            {isAuthenticated && user ? user.email : `NAN`}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            @{isAuthenticated && user ? user.uname : `NAN`} • Joined 23 days ago
          </p>

          {/* Divider */}
          <hr className="my-6 w-full border-gray-200" />

          {/* Navigation Links */}
          <nav className="w-full flex flex-col space-y-2 flex-grow">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ x: 6 }}
                className={`flex items-center w-full gap-3 px-4 py-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2A65E4] cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#E6F0FF] text-[#2A65E4] font-semibold"
                    : "text-gray-500 hover:text-[#2A65E4] hover:bg-[#F0F6FF]"
                }`}
              >
                {tab.icon} <span className="truncate">{tab.label}</span>
              </motion.button>
            ))}
            <motion.button
              whileHover={{ x: 6 }}
              onClick={() => SignOut()} // change to logout action if needed
              className={`flex items-center w-full gap-3 px-4 py-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2A65E4] cursor-pointer ${
                activeTab === "signout"
                  ? "bg-[#E6F0FF] text-[#2A65E4] font-semibold"
                  : "text-gray-500 hover:text-[#2A65E4] hover:bg-[#F0F6FF]"
              }`}
            >
              <LogOut size={20} /> <span className="truncate">Sign Out</span>
            </motion.button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {tabContent[activeTab]}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
