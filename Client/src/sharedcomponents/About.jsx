import React from "react";
import assets from "../assets/assets";

const About = () => {
  const servicesOffered = [
    "Emergency Care",
    "Surgery",
    "Pediatrics",
    "Radiology",
  ];

  return (
    <div className="flex flex-col md:flex-row items-start max-w-6xl mx-auto my-20 px-4 justify-between space-y-8 md:space-y-0 md:space-x-10">
      {/* Left: Doctor Image + Floating Badge */}
      <div className="relative flex-shrink-0">
        <img
          src={assets.doctor1}
          alt="doctor"
          className="w-72 md:w-96 h-[80vh] object-cover rounded-lg"
        />

        {/* Floating 25+ years badge */}
        <div className="absolute top-10 -right-40 bg-green-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md text-sm md:text-base animate-bounce">
          25+ Years Trusted Hospital
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-96 flex flex-col space-y-4">
        {/* Heading */}
        <h3 className="text-xl md:text-2xl font-bold">About Us</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base">
          We provide world-class healthcare services, combining modern
          technology with compassionate care. Our experienced doctors and staff
          are committed to ensuring the well-being of every patient who walks
          through our doors.
        </p>

        {/* Services Offered */}
        <div className="grid grid-cols-2 gap-3">
          {servicesOffered.map((service) => (
            <div
              key={service}
              className="text-green-800 font-medium p-2 rounded-lg text-center shadow-sm text-sm 
             transform transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {service}
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg font-semibold text-sm md:text-base transition duration-300">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default About;
