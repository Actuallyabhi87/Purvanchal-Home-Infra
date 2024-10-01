import Link from "next/link";
import React from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 py-8 text-white mt-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-orange-500 text-2xl" />
            <span>+91 8860762386</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-orange-500 text-2xl" />
            <span>DhananjayKumar89@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-orange-500 text-2xl" />
            <span>Sector 2, Noida 201301, India</span>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <h3 className="font-bold mb-4">About</h3>
              <ul>
                <li>
                  <Link href="#" className="hover:underline">
                    Our Story
                  </Link>
                </li>

                <li>
                  <Link href="#" className="hover:underline">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Career
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul>
                <li>
                  <Link href="/Service" className="hover:underline">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Clients
                  </Link>
                </li>
                <li>
                  <Link href="/Contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul>
                <li>
                  <Link href="#" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Newsletter
                  </Link>
                </li>
                <li>
                  <Link href="/Privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Subscribe</h3>
              <form
                className="flex"
                action="https://formspree.io/f/xqazvvej"
                method="POST"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="px-4 py-2 rounded-l bg-gray-800 border border-gray-700 text-white"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-500 text-white rounded-r"
                >
                  <FaArrowRight />
                </button>
              </form>
              <p className="mt-2 text-sm">
                Get property-related updates in your mailbox
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm">
            © 2024 - 2025 Purvanchal Home Infra. All Rights Reserved.
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61561885274997"
              className="text-gray-500 hover:text-white"
            >
              <FaFacebookF />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white">
              <FaLinkedinIn />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white">
              <FaTwitter />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
