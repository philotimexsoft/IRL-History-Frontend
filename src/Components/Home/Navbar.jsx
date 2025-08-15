"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import LoginModal from "@/Components/Login/AuthModel"; // adjust path to where LoginModal.jsx is stored
import RegisterModal from "../Registration/RegistrationModel";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegistraitonModalOpen, setIsRegistrationModalOpen] = useState(false);
  const router = useRouter();
const [isLoading, setIsLoading] = useState(false);
  const {
    loading: userLoading,
    user,
    isAuthenticated,
    isVerified,
  } = useSelector((state) => state.user);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-white text-black border-b-2 border-[#2A65E4] backdrop-blur-md shadow-sm"
            : "bg-transparent text-white border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-lg">
            <Image
              src={scrolled ? "/Logos/logo3.png" : "/Logos/logo.png"}
              alt="Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span>
              <span className="text-[#2A65E4] font-bold">IRLHistory</span>
              <span className="mx-2">|</span>
              In Real Life
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 text-base font-medium">
            <Link href="/" className="hover:text-[#2A65E4]">Home</Link>
            <Link href="/about" className="hover:text-[#2A65E4]">About</Link>
            <Link href="/features" className="hover:text-[#2A65E4]">Features</Link>
            <Link href="/contact" className="hover:text-[#2A65E4]">Contact</Link>
          </div>

          {/* Desktop Buttons */}
          {isAuthenticated && user ? <div className="hidden md:flex gap-3">
             <button
      className="px-4 py-2 bg-[#2A65E4] hover:bg-[#2153b6] text-white transition flex items-center gap-2"
      onClick={() => router.push("/irl")}
    >
      Go To IRL Profile
      <ArrowRight size={18} />
    </button>

          </div> : <div className="hidden md:flex gap-3">
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="px-4 py-2 border border-current hover:border-[#2A65E4] hover:text-[#2A65E4] transition"
            >
              Sign In
            </button>
            <button className="px-4 py-2 bg-[#2A65E4] hover:bg-[#2153b6] text-white transition" onClick={() => setIsRegistrationModalOpen(true)}>
              Register
            </button>
          </div> }

          {/* Mobile Menu Toggle */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className={`absolute top-full left-0 w-full flex flex-col items-center gap-4 py-6 md:hidden text-base backdrop-blur-md ${
              scrolled
                ? "bg-white text-black border-t border-[#2A65E4]"
                : "bg-black/80 text-white"
            }`}
          >
            <Link href="/" className="hover:text-[#2A65E4]">Home</Link>
            <Link href="/about" className="hover:text-[#2A65E4]">About</Link>
            <Link href="/features" className="hover:text-[#2A65E4]">Features</Link>
            <Link href="/contact" className="hover:text-[#2A65E4]">Contact</Link>
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="px-4 py-2 border border-current hover:border-[#2A65E4] hover:text-[#2A65E4] transition"
              >
                Sign In
              </button>
              <button className="px-4 py-2 bg-[#2A65E4] hover:bg-[#2153b6] text-white transition">
                Register
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSwitchToSignup={() => {
          setIsLoginModalOpen(false);
          setIsRegistrationModalOpen(true);
        }}
      />

       <RegisterModal
        isOpen={isRegistraitonModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
        onSwitchToLogin={() => {
          setIsRegistrationModalOpen(false);
          setIsLoginModalOpen(true);
        }}
      />
    </>
  );
};

export default Navbar;
