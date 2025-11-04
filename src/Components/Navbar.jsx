import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const active = (path) =>
    location.pathname === path ? "text-white font-semibold" : "";

  const [isOpen, setIsOpen] = useState(false);
  const items = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}

        <Link to="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="DigitalWave logo" className="h-9 w-auto" />
         
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 text-white/90 font-medium relative">
          {items.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <motion.div key={item.to} className="relative group">
                {isActive && (
                  <motion.span
                    layoutId="nav-active-bg"
                    className="absolute inset-0 rounded-lg bg-white/10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Link
                  to={item.to}
                  className={`relative z-10 px-3 py-2 rounded-lg transition-colors ${
                    isActive ? "text-white" : "hover:text-white"
                  }`}
                >
                  <span className="relative">
                    {item.label}
                    <span className="pointer-events-none absolute left-0 -bottom-0.5 h-0.5 w-full origin-left scale-x-0 bg-white/80 rounded-full transition-transform duration-300 group-hover:scale-x-100" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md w-full transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100 py-5" : "max-h-0 opacity-0 py-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col px-6 space-y-3">
          <Link
            className={`px-3 py-2 rounded-lg transition ${active("/") || "text-gray-800"} hover:bg-gray-100`}
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            className={`px-3 py-2 rounded-lg transition ${active("/about") || "text-gray-800"} hover:bg-gray-100`}
            to="/about"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            className={`px-3 py-2 rounded-lg transition ${active("/services") || "text-gray-800"} hover:bg-gray-100`}
            to="/services"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            className={`px-3 py-2 rounded-lg transition ${active("/projects") || "text-gray-800"} hover:bg-gray-100`}
            to="/projects"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            className={`px-3 py-2 rounded-lg transition ${active("/contact") || "text-gray-800"} hover:bg-gray-100`}
            to="/contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
