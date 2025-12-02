import React from "react";
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate()
  const servicesOffered = [
    "Emergency Care",
    "Surgery",
    "Pediatrics",
    "Radiology",
  ];

  return (
    <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto my-12 md:my-20 px-4 justify-between gap-8 md:gap-10">
      {/* Left: Doctor Image + Floating Badge */}
      <div className="relative flex-shrink-0 w-full md:w-auto">
        <img
          src={assets.doctor1}
          alt="doctor"
          className="w-64 max-w-xs mx-auto md:w-96 h-64 sm:h-48 md:h-[38rem] rounded-lg"
        />

        {/* Floating 25+ years badge - kept your original styling */}
        <div className="absolute -top-4 -right-4 md:top-10 md:-right-37 bg-green-500 text-white font-semibold px-3 py-2 md:px-4 md:py-2 rounded-lg text-xs md:text-base animate-bounce">
          25+ Years Trusted Hospital
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-96 flex flex-col space-y-6 text-center md:text-left">
        {/* Heading - kept your original size */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800">About Us</h3>

        {/* Description - kept your original size */}
        <p className="text-gray-600 text-base md:text-1xl leading-relaxed">
          We provide world-class healthcare services, combining modern
          technology with compassionate care. Our experienced doctors and staff
          are committed to ensuring the well-being of every patient who walks
          through our doors.
        </p>

        {/* Services Offered - subtle improvements */}
        <div className="grid grid-cols-2 gap-4">
          {servicesOffered.map((service) => (
            <div
              key={service}
              className="bg-green-50 text-green-800 font-medium p-3 rounded-lg text-center text-sm md:text-base 
             transform transition duration-300 hover:-translate-y-1 border border-green-100 hover:bg-green-100"
            >
              {service}
            </div>
          ))}
        </div>

        {/* Button - kept your original styling */}
        <button 
        onClick={()=>navigate('/contact-us')}
        className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg font-semibold text-base md:text-lg transition duration-300 w-full md:w-auto">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default About;