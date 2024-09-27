import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <header className="bg-gray-800 py-4 fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm sm:text-base">
          <div className="flex flex-wrap items-center space-x-4">
            <span className="text-white flex items-center space-x-2">
              <FaLocationDot />
              <span>Sector-2 Noida</span>
            </span>
            <span className="text-white flex items-center space-x-2">
              <a href="tel:+918860762386" className="flex gap-2">
                <IoCall className="mt-1" />
                <span>Call us : +91 8860762386</span>
              </a>
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
