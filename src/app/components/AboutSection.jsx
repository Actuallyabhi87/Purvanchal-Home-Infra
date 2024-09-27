import React from "react";
import Button from "../components/Button";
import Link from "next/link";

const AboutSection = () => {
  return (
    <div>
      <section
        className="py-16"
        style={{ backgroundColor: "#1F2937", color: "#fff" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            ABOUT PURVANCHAL HOME INFRA
          </h2>
          <h3 className="text-2xl font-bold text-center mb-8">
            Discover your dream property, where endless possibilities meet the
            perfect landscape
          </h3>
          <div className="flex flex-col md:flex-row items-center">
            <iframe
              width={560}
              height={315}
              className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8"
              src="https://www.youtube.com/embed/0JT5a3HKnW8?si=6YiF8cwTeyjTtw-j"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />

            <div className="md:w-1/2">
              <p className="mb-4">
                Discovering Dreams &amp; Building Legacies. Our Residential
                Plots are near Airport, Railway Station, National Highway, and
                Hospitals.
              </p>
              <p className="mb-4">
                Welcome to Purvanchal Home Infra Pvt Ltd. We are committed to
                providing the best residential plots with all the necessary
                amenities and facilities. Our projects are strategically located
                to ensure convenience and accessibility for our customers.
              </p>
              <p className="mb-4">
                Our Vision: To be the leading real estate developer known for
                quality and trust.
              </p>
              <p className="mb-4">
                Our Mission: To deliver exceptional value to our customers
                through innovative and sustainable real estate solutions.
              </p>
              <Link href="#">
                <Button />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
