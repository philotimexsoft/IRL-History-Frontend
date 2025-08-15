"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FiArrowDown } from "react-icons/fi";
import { Mission, CoreFeatures, CommunityFocus } from "../../../Components/About/AboutSections";
import CallToAction from "@/Components/Home/CallToAction";
import PerPageHeader from "@/Components/Common/PerPageHeader";

const About = () => {
  const nextSectionRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <PerPageHeader title="About the" description="Document, share, and explore the rich history of IRL streaming culture. Our platform lets you preserve important moments, connect with other enthusiasts, and contribute to a living archive of real-world streaming." bgVideo="vid2.mp4"/>
      <Mission />
      <CoreFeatures />
      <CommunityFocus />
      <CallToAction/>
    </>
  );
};

export default About;
