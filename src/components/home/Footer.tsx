import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Address</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-orange-500 font-medium mb-2">USA Office</h4>
                <p className="text-gray-300">Phone: 925-238-1915</p>
                <p className="text-gray-300">470 Harvest Park Dr, Suite E, Brentwood, CA 94513</p>
              </div>
              <div>
                <h4 className="text-orange-500 font-medium mb-2">Bangladesh Office</h4>
                <p className="text-gray-300">City Center, Suite 26-D1 Plot 5/A, Motijheel</p>
                <p className="text-gray-300">C/A Dhaka 1000, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">List Of Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-orange-500 transition-colors">
                <Link href="#">Web Design & Development</Link>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                <Link href="#">E-Commerce</Link>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                <Link href="#">Online Marketing</Link>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                <Link href="#">Domain Registration & Hosting</Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-orange-500 transition-colors">
                <Link href="#">Documentation</Link>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                <Link href="#">Privacy Policy</Link>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                <Link href="#">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Extra Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Extra Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-orange-500 transition-colors">
                <Link href="#">Element Search</Link>
              </li>
              <li className="hover:text-orange-500 transition-colors">
                <Link href="#">Pumps and Instrumentations</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Connect with us</span>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                  aria-label="Google"
                >
                  <FaGoogle size={20} />
                </a>
              </div>
            </div>
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>
                Copyright © {new Date().getFullYear()} by Elementsearch Company - All rights
                reserved | Design by{" "}
                <a
                  href="#"
                  className="text-orange-500 hover:text-orange-400 transition-colors"
                >
                  ELEMENT TEAM
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
