"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  // Scroll listener to hide/show navbar after 100px scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 bg-transparent transition-all duration-300 ${
        isScrolled ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/images/Logo.png"
            alt="Logo"
            height={10}
            width={60}
            className="rounded-full"
          />
          <span className="ml-3 text-white text-lg font-bold">
            Purvanchal Home Infra
          </span>
        </a>

        {/* Menu Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/About" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link href="/Service" className="text-white hover:text-gray-300">
            Services
          </Link>
          <Link href="/Contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleNav}>
            {navOpen ? (
              <FaTimes className="text-white" size={24} />
            ) : (
              <FaBars className="text-white" size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-white">
          <ul className="space-y-6 text-center py-8">
            <li>
              <Link href="/" className="block text-white" onClick={toggleNav}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className="block text-white"
                onClick={toggleNav}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Service"
                className="block text-white"
                onClick={toggleNav}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className="block text-white"
                onClick={toggleNav}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
