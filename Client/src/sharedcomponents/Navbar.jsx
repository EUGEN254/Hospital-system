import React from "react";
import assets from "../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navlinks = ["Home", "About-Us", "Contact-Us","Doctors","Billing-Information"];

  return (
    <div className="flex justify-between items-center bg-transparent max-w-5xl mx-auto p-4">
      {/* Logo */}
      <div>
        <img src={assets.logo} alt="logo" className="h-22" />
      </div>

      {/* Nav Links */}
      <div className="flex space-x-6">
        {navlinks.map((link) => (
          <NavLink
            key={link}
            to={`/${link.toLowerCase().replace(" ", "")}`}
            className="relative text-gray-400 font-medium hover:text-gray-200 transition duration-300 group"
          >
            {link}

            {/* animated line below each link */}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        ))}
      </div>

      {/* Optional right section */}
      <div>
        <button className="bg-green-300 py-2 px-6 text-gray-500 rounded-lg shadow-md hover:bg-green-600  font-semibold transition duration-300">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
