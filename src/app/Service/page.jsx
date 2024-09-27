// Services.js
"use client";

import { FaBuilding, FaKey, FaHandshake, FaMapMarkedAlt } from "react-icons/fa";
import Footer from "../components/FooterSection";

const Services = () => {
  const services = [
    {
      icon: <FaBuilding size={40} className="text-yellow-500 mb-4" />,
      title: "Property Sales",
      description:
        "At Purvanchal Home Infra, we provide the best deals on residential and commercial properties, ensuring transparency and trust in every transaction.",
    },
    {
      icon: <FaKey size={40} className="text-blue-500 mb-4" />,
      title: "Hassle-Free Possession",
      description:
        "Our commitment is to deliver property possession on time with all legal formalities taken care of, ensuring a seamless process for our clients.",
    },
    {
      icon: <FaHandshake size={40} className="text-green-500 mb-4" />,
      title: "Customer Support",
      description:
        "We offer exceptional customer support, assisting you throughout your property-buying journey and beyond, making your experience stress-free.",
    },
    {
      icon: <FaMapMarkedAlt size={40} className="text-red-500 mb-4" />,
      title: "Prime Locations",
      description:
        "Our properties are located in the most sought-after locations, providing easy access to all amenities and ensuring a great return on your investment.",
    },
  ];

  return (
    <section className="py-12 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Our Services</h2>
          <p className="mt-4 text-gray-300">
            Purvanchal Home Infra provides top-notch services in the real estate
            sector, ensuring quality, trust, and value for every client.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-700 rounded-lg shadow-md"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mt-4">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Services;
