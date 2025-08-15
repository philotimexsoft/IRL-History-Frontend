"use client";
import { useState, useEffect, useRef } from "react";
import {
  Search,
  User,
  Plus,
  Menu,
  X,
  Shield,
  Gift,
  Book,
  Settings,
  LogOut,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "@/store/Reducers/UserReducer/UserActions";

export default function IRLNavbar() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const {
    loading: userLoading,
    user,
    isAuthenticated,
    isVerified,
  } = useSelector((state) => state.user);

  const isAdmin = false;
  const pathname = usePathname();

  const navLinks = [
    { href: "/irl", label: "Home" },
    { href: "/irl/browse", label: "Browse" },
    { href: "/irl/store", label: "Store" },
  ];


  const dropdownLinks = isAdmin
    ? [
        { icon: <Shield size={16} />, label: "Admin Tools", href: "/admin" },
        {
          icon: <Plus size={16} />,
          label: "Contribute",
          href: "/irl/contribute",
        },
        {
          icon: <Book size={16} />,
          label: "My Articles",
          href: "/my-articles",
        },
        { icon: <Gift size={16} />, label: "Store", href: "/irl/store" },
        { icon: <Gift size={16} />, label: "Donate", href: "/donate" },
        { icon: <Settings size={16} />, label: "Settings", href: "/settings" },
        { icon: <LogOut size={16} />, label: "Sign Out", href: "/logout" },
      ]
    : [
        { icon: <User size={16} />, label: "Profile", href: "/irl/profile" },
        {
          icon: <Book size={16} />,
          label: "My Articles",
          href: "/my-articles",
        },
        { icon: <Gift size={16} />, label: "Store", href: "/irl/store" },
        { icon: <Gift size={16} />, label: "Donate", href: "/donate" },
        { icon: <Settings size={16} />, label: "Settings", href: "/settings" },
        { icon: <LogOut size={16} />, label: "Sign Out", href: "/logout" },
      ];

  /* Close dropdown when clicking outside */
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* Sign Out */
  const SignOut = () => {
    dispatch(LogoutUser());
  }

  return (
    <>
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Left: Logo + Brand */}
        <div className="flex items-center gap-2">
          <img src="/Logos/logo3.png" alt="Logo" className="h-8 w-8" />
          <span>
            <span className="text-[#2A65E4] font-bold">IRLHistory</span>
            <span className="mx-2">|</span>
            In Real Life
          </span>
        </div>

        {/* Middle: Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 relative">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors ${
                pathname === link.href
                  ? "text-[#2A65E4]"
                  : "hover:text-[#2A65E4]"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="block h-[2px] bg-[#2A65E4] mt-1 rounded-full transition-all"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Search + Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search historical events, streamers, dates..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-1.5 border border-gray-300 focus:border-[#2A65E4] text-sm w-64 focus:w-80 outline-none transition-all
               whitespace-nowrap overflow-hidden text-ellipsis"
            />
          </div>

          {/* Contribute Button */}
          <Link href="/irl/contribute">
            <button className="flex items-center gap-1 bg-[#2A65E4] text-white px-3 py-1.5 text-sm hover:bg-blue-700 transition">
              <Plus className="h-4 w-4" />
              Contribute
            </button>
          </Link>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <div
              className="flex items-center gap-1 cursor-pointer p-2 hover:bg-gray-100"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <User className="h-5 w-5 text-gray-600" />
              <span className="hidden sm:block font-medium">
                {isAuthenticated && user ? user.uname : "..."}
              </span>
              <ChevronDown
                className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Animated dropdown */}
            <div
              className={`absolute right-0 mt-2 w-48 bg-white border shadow-lg  overflow-hidden transform transition-all duration-200 origin-top ${
                dropdownOpen
                  ? "scale-y-100 opacity-100"
                  : "scale-y-0 opacity-0 pointer-events-none"
              }`}
            >
              {dropdownLinks.map((item, idx) =>
                item.label == "Sign Out" ? (
                  <button className="flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100" onClick={() => SignOut()} key="signout">
                    {item.icon}
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={idx}
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-3 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block font-medium ${
                pathname === link.href
                  ? "text-[#2A65E4]"
                  : "hover:text-[#2A65E4]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {/* Search in mobile */}
          <div className="relative mt-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-1.5 border border-gray-300 focus:border-[#2A65E4] w-full outline-none text-sm"
            />
          </div>
        </div>
      )}
    </header>
    </>
  );
}
