"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-indigo-500/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 blur-lg opacity-50 group-hover:opacity-80 transition-opacity -z-10" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
            ServiceHub
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="relative px-4 py-2 text-gray-700 font-medium rounded-lg hover:text-indigo-600 transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          {/* <Link
            href="/login"
            className="px-4 py-2 text-gray-700 font-medium hover:text-indigo-600 transition"
          >
            Login */}
          {/* </Link> */}
          {/* <Link
            href="/get-started"
            className="relative px-6 py-2.5 rounded-full font-semibold text-white overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:scale-110 transition-transform duration-500" />
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative flex items-center gap-2">
              Get Started
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30 active:scale-95 transition"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-5 p-5 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/40 shadow-2xl shadow-indigo-500/20">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <li
                key={link.name}
                style={{ transitionDelay: `${i * 50}ms` }}
                className={`transition-all duration-300 ${
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-gradient-to-r hover:from-indigo-50 hover:to-pink-50 hover:text-indigo-600 transition-all group"
                >
                  <span>{link.name}</span>
                  <svg
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col gap-2">
            {/* <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-center text-gray-700 font-medium rounded-xl hover:bg-gray-100 transition"
            >
              Login
            </Link> */}
            {/* <Link
              href="/get-started"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-center rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/40 active:scale-95 transition"
            >
              Get Started →
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}