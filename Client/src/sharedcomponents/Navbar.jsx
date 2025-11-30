import React, { useState } from "react";
import assets from "../assets/assets";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navlinks = [
    "Home",
    "About-Us",
    "Features",
    "Contact-Us",
    "Doctors",
    "Billing-Information",
  ];

  return (
    <nav className="bg-transparent max-w-5xl mx-auto p-4 relative z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src={assets.logo} alt="logo" className="h-16 md:h-22" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          {navlinks.map((link) => (
            <NavLink
              key={link}
              to={`/${link.toLowerCase().replace(/ /g, "")}`}
              className="relative text-gray-400 font-medium hover:text-gray-200 transition duration-300 group"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        {/* Sign Up button (desktop) */}
        <div className="hidden md:block">
          <button className="bg-green-300 py-2 px-6 text-gray-500 rounded-lg shadow-md hover:bg-green-600 font-semibold transition duration-300">
            Sign Up
          </button>
        </div>

        {/* Hamburger Icon (mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-black p-4 rounded-lg shadow-lg absolute w-full left-0 top-full">
          {navlinks.map((link) => (
            <NavLink
              key={link}
              to={`/${link.toLowerCase().replace(/ /g, "")}`}
              className="text-gray-300 font-medium hover:text-white transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </NavLink>
          ))}
          <button className="bg-green-500 py-2 px-4 text-white rounded-lg font-semibold hover:bg-green-600 transition duration-300">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
