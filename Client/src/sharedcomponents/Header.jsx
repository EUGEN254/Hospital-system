import React, { useState } from "react";
import assets from "../assets/assets";
import Navbar from "./Navbar";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [showVedio, setShowVedio] = useState(false);
  return (
    <div>
      <div
        className="relative w-full h-160 bg-bottom"
        style={{
          backgroundImage: `url(${assets.header})`,
        }}
      >
        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full z-60">
          <Navbar />
        </div>

        {/* Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl px-4 z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Text block */}
            <div className="text-center md:text-left text-white max-w-xl space-y-4">
              <h1 className="sm:text-4xl md:text-3xl font-bold">
                Your Health, Our Priority
              </h1>
              <p className="text-base sm:text-lg md:text-1xl">
                We combine modern technology with compassionate care to ensure
                your well-being.We combine modern technology with compassionate
                care to ensure your well-being.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
                {/* Get Started Button */}
                <button
                  onClick={() => navigate("/sign-up")}
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg font-semibold transition duration-300"
                >
                  Get Started
                </button>

                {/* Watch Video Button */}
                <button
                  onClick={() => setShowVedio(true)}
                  type="button"
                  className="flex items-center gap-2 sm:gap-3 px-4 py-2 rounded-lg text-white bg-white/20 hover:bg-white/30 backdrop-blur-md transition duration-300 hover:scale-105 justify-center sm:justify-start"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-green-500 rounded-full hover:bg-green-600 transition duration-300">
                    <FaPlay className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-sm sm:text-base">
                    Watch Video
                  </span>
                </button>
              </div>
            </div>

            {/* Doctor Image */}
            <div className="relative shrink-0 mt-8 md:mt-0">
              {/* Decorative Circle */}
              <div className="absolute -top-6 -left-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-green-500 opacity-30 z-0"></div>

              {/* Doctor Image */}
              <img
                src={assets.doctor}
                alt="doctor"
                className="relative w-36 sm:w-48 md:w-64 lg:w-80 z-10"
              />

              {/* Group Profiles */}
              <div className="absolute top-[50px] -right-4">
                <img
                  src={assets.group_profiles}
                  alt="group"
                  className="w-16 sm:w-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* show vedio */}
      {showVedio && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-400 p-4"
          onClick={() => setShowVedio(false)} // overlay click
        >
          <div
            className="relative bg-white rounded-2xl shadow-lg w-full max-w-[800px]"
            onClick={(e) => e.stopPropagation()} // stops closing modal when clicking inside
          >
            {/* Close Button */}
            <span
              onClick={() => setShowVedio(false)}
              className="absolute right-1 -top-6 cursor-pointer text-3xl font-bold text-white z-500"
            >
              ×
            </span>

            {/* Responsive Video */}
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/yXPlM7yMjYI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
