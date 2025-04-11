"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#brands", label: "Our Brands" },
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact Us" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <div className="bg-green-600 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a
              href="tel:925-238-1915"
              className="flex items-center space-x-2 hover:text-gray-200"
            >
              <FaPhone className="text-sm" />
              <span className="text-sm">925-238-1915</span>
            </a>
            <a
              href="mailto:contact@wempro.com"
              className="flex items-center space-x-2 hover:text-gray-200"
            >
              <FaEnvelope className="text-sm" />
              <span className="text-sm">contact@wempro.com</span>
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-gray-200">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto md:px-2">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <Image
                src="/wempro_logo.jpeg"
                alt="Wempro Logo"
                width={200}
                height={55}
                className="object-contain h-16"
              />
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-green-600 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:hidden bg-white pb-4`}
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-green-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
