"use client";

import { FaHome, FaMoneyCheckAlt, FaCar, FaKey } from "react-icons/fa";

const FeatureSection = () => {
  const features = [
    {
      icon: <FaHome size={50} className="text-yellow-500 mb-4" />,
      title: "Versatile plot sizes",
      description:
        "Explore a variety of plot sizes for your convenience: currently offering residential options of 50, 100, 150, 200, and 500 yards.",
    },
    {
      icon: <FaMoneyCheckAlt size={50} className="text-green-500 mb-4" />,
      title: "Easy EMI option",
      description:
        "Choose interest-free EMIs for the remaining payment: 1, 3, 6,12 or 24 months.",
    },
    {
      icon: <FaCar size={50} className="text-red-500 mb-4" />,
      title: "Special site visit",
      description:
        "Get free site visits any day with Purvanchal Home Infra for your convenience.",
    },
    {
      icon: <FaKey size={50} className="text-blue-500 mb-4" />,
      title: "Complete possession",
      description:
        "Secure complete possession of your plot by paying just 40% booking and 60% registry—no hidden charges",
    },
  ];

  return (
    <section className="py-12 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-white">Why Choose Us?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-700 rounded-lg shadow-md"
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mt-4">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
