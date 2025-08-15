"use client";

import { ArrowUpRight, ArrowUp } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-20 pb-10 px-6 relative overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mt-20 mx-auto">
        {/* CTA Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-base text-gray-600 mb-2">
           🔵 Just send us your idea and we will turn it into a beautiful
            website and application as per your need!
          </p>
          <Link
            href="/contactus"
            className="group text-5xl sm:text-6xl font-extrabold tracking-tight inline-block transition-colors text-[#2A65E4] hover:text-black"
          >
            LET’S START A JOURNEY
            <ArrowUpRight className="inline-block text-[#2A65E4] ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            <span className="block h-1 w-0 bg-[#2A65E4] group-hover:w-full transition-all duration-300 mt-2" />
          </Link>
        </motion.div>

        {/* Info Grid */}
        <div className="mt-16 border-t border-dashed border-gray-300 pt-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-base">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-gray-500 font-semibold mb-2">Location</h4>
            <p>40, Vrajbhumi Row-House</p>
            <p>Motavarachha</p>
            <p>Surat, Gujarat, India - 394101</p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-gray-500 font-semibold mb-2">
              Start a conversation
            </h4>
            <p className="text-[#2A65E4] hover:underline cursor-pointer transition">
              contact@philotimexsoft.com
            </p>
          </motion.div>

          {/* Legal & Social */}
          <motion.div
            className="flex flex-col gap-2 md:items-end"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 text-base">
              &copy; 2025 PhilotimexSoft, All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 flex-wrap">
              {[
                {
                  name: "LINKEDIN",
                  url: "https://www.linkedin.com/in/philotimex-software-290b16377/e",
                },
                {
                  name: "INSTAGRAM",
                  url: "https://www.instagram.com/philotimexsoft/",
                },
                { name: "TWITTER", url: "https://x.com/philotimexsoft" },
              ].map((platform) => (
                <motion.div
                  key={platform.name}
                  whileHover={{ scale: 1.1, color: "#2A65E4" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-[#2A65E4] transition text-base"
                  >
                    {platform.name} <ArrowUpRight size={16} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Back to top */}
        <motion.div
          className="mt-12 text-center text-[#2A65E4]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center justify-center gap-2 text-black hover:text-[#2A65E4] transition text-base"
          >
            Back to top <ArrowUp size={18} />
          </button>
        </motion.div>
      </div>

      {/* Floating scroll button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-[#2A65E4] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition-transform shadow-md"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ rotate: -10, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp size={18} className="text-white" />
      </motion.button>
    </footer>
  );
};

export default Footer;
