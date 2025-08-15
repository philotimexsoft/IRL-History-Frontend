"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SuccessPage = ({ onClose }) => {
  const [progressText, setProgressText] = useState("Processing");
  const [isComplete, setIsComplete] = useState(false);

  // Simulate UNIX-style loading then success
  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      if (step < 3) {
        setProgressText((prev) => prev + ".");
        step++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-blue-900/80 backdrop-blur-md flex items-center justify-center p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
      >
        <X size={28} />
      </button>

      {/* Main Content */}
      <div className="bg-white/10 border border-white/20 rounded-2xl p-8 w-full max-w-lg text-center shadow-xl">
        <AnimatePresence mode="wait">
          {!isComplete ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-white text-lg font-mono">{progressText}</p>
              <div className="mt-6 w-full bg-white/20 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2 }}
                  className="bg-green-400 h-full"
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <CheckCircle2 className="text-green-400 w-16 h-16 mx-auto mb-4" />
              <h1 className="text-white text-2xl font-bold">Success!</h1>
              <p className="text-white/80 mt-2">
                Your operation completed successfully.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SuccessPage;
