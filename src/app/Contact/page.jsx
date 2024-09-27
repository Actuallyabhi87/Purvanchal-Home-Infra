"use client";
import React from "react";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import FooterSection from "../components/FooterSection";

const ContactUs = () => {
  return (
    <div className="bg-gray-800">
      <section className="py-12 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold">Contact Us</h2>
            <p className="mt-4 text-gray-300">
              Have any questions or concerns? We're always ready to help!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              <div className="flex items-center mb-4">
                <FaPhoneAlt size={24} className="text-blue-500 mr-4" />
                <span>+91 8860762386</span>
              </div>
              <div className="flex items-center mb-4">
                <FaEnvelope size={24} className="text-green-500 mr-4" />
                <span>DhananjayKumar89@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt size={24} className="text-red-500 mr-4" />
                <span>Sector 2, Noida, India</span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
              <form action="https://formspree.io/f/manwggqv" method="POST">
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                {/* Phone Number Input */}
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your Phone Number"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default ContactUs;
