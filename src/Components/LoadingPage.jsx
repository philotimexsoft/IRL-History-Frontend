"use client";
import { motion } from "framer-motion";

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white-500/40 backdrop-blur-lg overflow-hidden">
     <span className="loader"></span>
    </div>
  );
};

export default LoadingPage;
