import React from "react";
import { FaHospital } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { MdLocalAirport } from "react-icons/md";
import { IoIosFilm } from "react-icons/io";
import Image from "next/image";
const NearbySection = () => {
  return (
    <div className="mb-10">
      {/* <!-- Locality Nearby Section --> */}
      <section
        className="py-16 "
        style={{ backgroundColor: "#1F2937", color: "#fff" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <Image
              alt="Locality Image"
              className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8"
              height={400}
              src="/images/road.jpg"
              width={600}
            />
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-center mb-8">
                LOCALITY NEARBY
              </h2>
              <p className="text-2xl font-bold mb-4">
                Located close to important services and facilities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center flex-col gap-1">
                  <FaHospital size={50} className="text-yellow-500" />
                  <span> Sharda Hospital</span>
                </div>
                <div className="flex items-center flex-col gap-">
                  <IoIosFilm size={50} className="text-red-500" />
                  <span>Greater Noida Film City</span>
                </div>
                <div className="flex items-center flex-col gap-">
                  <FaUniversity size={50} className="text-green-500" />
                  <span>Glgotia University</span>
                </div>
                <div className="flex items-center flex-col gap-">
                  <MdLocalAirport size={50} className="text-blue-500" />
                  <span>Jewar Airport</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NearbySection;
