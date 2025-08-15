"use client";

import { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Browse = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Browse Articles
        </h1>
        <p className="text-gray-600 mt-2 text-sm">
          Explore our comprehensive collection of IRL streaming history and culture.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="max-w-7xl mx-auto mt-6 flex flex-col sm:flex-row gap-4">
        {/* Search Box */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search articles, events, or people..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#2A65E4] transition-all duration-200"
          />
        </div>

        {/* Filter Button */}
        <button
          onClick={() => setFilterOpen(true)}
          className="flex items-center justify-center gap-2 px-5 py-2 border border-gray-300 bg-gray-50 text-gray-800 text-sm hover:bg-gray-100 transition-all duration-200"
        >
          <Filter className="w-4 h-4" />
          Filters
        </button>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto mt-6 border-t border-gray-200"></div>

      {/* Articles Section */}
      <div className="max-w-7xl mx-auto mt-6">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          All Articles
          <span className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 border border-gray-300">
            0
          </span>
        </h2>

        {/* Empty State */}
        <div className="text-center text-gray-500 mt-16 text-sm">
          No articles found matching your criteria.
        </div>
      </div>

      {/* Filter Sidebar */}
      <AnimatePresence>
        {filterOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFilterOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-lg z-[10000] p-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                <button onClick={() => setFilterOpen(false)}>
                  <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                </button>
              </div>

              {/* Example filter content */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select className="w-full border border-gray-300 text-sm px-3 py-2 focus:ring-2 focus:ring-[#2A65E4] outline-none">
                    <option>All</option>
                    <option>IRL Streamers</option>
                    <option>Events</option>
                    <option>Milestones</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date Range
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 text-sm px-3 py-2 focus:ring-2 focus:ring-[#2A65E4] outline-none"
                  />
                </div>
              </div>

              <div className="mt-auto">
                <button
                  className="w-full bg-[#2A65E4] text-white py-2 text-sm font-medium hover:bg-[#1f4dbf] transition-all duration-200"
                  onClick={() => setFilterOpen(false)}
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Browse;
