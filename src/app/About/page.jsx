// AboutUs.js
import FooterSection from "../components/FooterSection";
import {
  FaBuilding,
  FaCity,
  FaHome,
  FaMapMarkedAlt,
  FaHandshake,
} from "react-icons/fa";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-gray-800">
      <section className="bg-gray-800 text-white py-12 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold">
              About Purvanchal Home Infra
            </h2>
            <p className="mt-4 text-gray-300">
              Leading the Real Estate Market in Noida, Delhi, Ghaziabad, and
              Jewar
            </p>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Text Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
              <p className="text-lg text-gray-300 mb-6">
                Purvanchal Home Infra has established itself as a trusted name
                in the real estate market, specializing in property selling in
                Noida, Delhi, Ghaziabad, and the fast-developing Jewar. We bring
                unparalleled expertise in both residential and commercial
                properties, offering clients transparent, reliable, and
                high-value services.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <FaBuilding size={30} className="text-yellow-500 mr-4" />
                  <p className="text-lg text-gray-300">
                    We offer premium properties in **Noida** with world-class
                    amenities, located in prime areas near commercial hubs and
                    educational institutions.
                  </p>
                </div>
                <div className="flex items-center">
                  <FaCity size={30} className="text-blue-500 mr-4" />
                  <p className="text-lg text-gray-300">
                    **Delhi**'s competitive real estate market demands
                    excellence, and we provide exclusive residential and
                    commercial properties in sought-after locations.
                  </p>
                </div>
                <div className="flex items-center">
                  <FaHome size={30} className="text-green-500 mr-4" />
                  <p className="text-lg text-gray-300">
                    In **Ghaziabad**, we offer affordable housing and premium
                    properties tailored to your budget and investment needs.
                  </p>
                </div>
                <div className="flex items-center">
                  <FaMapMarkedAlt size={30} className="text-red-500 mr-4" />
                  <p className="text-lg text-gray-300">
                    With the upcoming **Jewar International Airport**, this
                    region offers significant growth potential, and we help
                    clients secure high-value investment properties in this
                    area.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/product.jpg"
                alt="Purvanchal Home Infra Properties"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Our Vision Section */}
          <div className="bg-gray-700 p-8 rounded-lg shadow-md mb-12">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Our Vision
            </h3>
            <p className="text-lg text-gray-300 text-center">
              Our vision is to become a leading real estate company in North
              India, committed to offering sustainable and innovative property
              solutions. We aim to create value for our clients by providing
              high-quality properties and exceptional customer service, ensuring
              the best return on their investment.
            </p>
          </div>

          {/* Why Choose Us Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center bg-gray-700 p-6 rounded-lg shadow-lg">
              <FaBuilding size={40} className="text-yellow-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Experience</h4>
              <p className="text-gray-300">
                With over a decade of experience in real estate, we bring deep
                market knowledge and expertise to every transaction.
              </p>
            </div>
            <div className="text-center bg-gray-700 p-6 rounded-lg shadow-lg">
              <FaHome size={40} className="text-blue-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">
                Wide Range of Properties
              </h4>
              <p className="text-gray-300">
                From luxury apartments to budget homes, we offer a wide range of
                properties that meet diverse needs.
              </p>
            </div>
            <div className="text-center bg-gray-700 p-6 rounded-lg shadow-lg">
              <FaHandshake size={40} className="text-green-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">
                Trust & Transparency
              </h4>
              <p className="text-gray-300">
                Our reputation is built on trust. We ensure transparency in
                every deal, from documentation to delivery.
              </p>
            </div>
            <div className="text-center bg-gray-700 p-6 rounded-lg shadow-lg">
              <FaMapMarkedAlt size={40} className="text-red-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">
                Prime Locations
              </h4>
              <p className="text-gray-300">
                We offer properties in prime locations with excellent
                connectivity and future growth potential.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Contact Us Today
            </h3>
            <p className="text-lg text-gray-300">
              If you're looking for a trusted partner in real estate, Purvanchal
              Home Infra is here to assist you in realizing your property
              dreams. Contact us to explore the best real estate options in the
              market.
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default AboutUs;
