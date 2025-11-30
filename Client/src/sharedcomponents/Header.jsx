import React from "react";
import assets from "../assets/assets";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="relative w-full">
      <img
        src={assets.header}
        alt="header-section"
        className="w-full h-[40rem]"
      />
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      {/* Description + Doctor */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text block */}
          <div className="text-center md:text-left text-white max-w-xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Your Health, Our Priority
            </h1>
            <p className="text-lg md:text-xl">
              We combine modern technology with compassionate care to ensure
              your well-being.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg font-semibold transition duration-300">
              Get Started
            </button>
          </div>

          {/* Doctor Image */}
          <div className="relative flex-shrink-0">
            {/* Decorative Circle */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-green-500 opacity-30 z-0"></div>

            {/* Doctor Image */}
            <img
              src={assets.doctor}
              alt="doctor"
              className="relative w-48 md:w-64 lg:w-80 z-10"
            />

            {/* Group Profiles */}
            <div className="absolute top-[60px] -right-4">
              <img
                src={assets.group_profiles}
                alt="group"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
