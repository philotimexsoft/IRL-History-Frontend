"use client"

import { motion } from "framer-motion";
import { useRef,useState } from "react";
import { FiArrowDown } from "react-icons/fi";

const PerPageHeader = ({title,description, bgVideo}) =>{

    const nextSectionRef = useRef(null);
      const [menuOpen, setMenuOpen] = useState(false);

      const scrollToNextSection = () => {
        if (nextSectionRef.current) {
          nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
      };

    return (
        <>
             <section className="relative h-[70vh] flex flex-col text-white overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-y-[-1]"
        >
          <source src={`/Videos/${bgVideo}`} type="video/mp4" />
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
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
           {title} <span className="text-[#2A65E4]">IRL Stream</span> History
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
           {description}
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
        </>
    )
}

export default PerPageHeader