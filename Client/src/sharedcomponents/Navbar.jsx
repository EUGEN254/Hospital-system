import React, { useState } from "react";
import assets from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navlinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Features", path: "/features" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Doctors", path: "/available-doctors" },
    { name: "Billing", path: "/billing" },
  ];

  return (
    <nav className="bg-transparent max-w-5xl mx-auto  relative z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src={assets.logo} alt="logo" className="h-16 md:h-22 cursor-pointer" onClick={() => navigate("/")} />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          {navlinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `relative font-medium transition duration-300 group ${
                  isActive 
                    ? "text-white" 
                    : "text-gray-400 hover:text-gray-200"
                }`
              }
            >
              {link.name}
              <span className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full ${
                ({ isActive }) => isActive ? "w-full" : ""
              }`}></span>
            </NavLink>
          ))}
        </div>

        {/* Sign Up button (desktop) */}
        <div className="hidden md:block">
          <button 
            onClick={() => navigate('/sign-up')}
            className="bg-green-500 hover:bg-green-600 py-2 px-6 text-white rounded-lg shadow-md font-semibold transition duration-300"
          >
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
        <div className="md:hidden fixed inset-0 bg-black/90 z-40 flex flex-col pt-20 px-4">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl z-50"
          >
            <FaTimes />
          </button>

          {/* Menu Links */}
          <div className="flex flex-col gap-6 mt-8">
            {navlinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `font-medium transition duration-300 ${
                    isActive 
                      ? "text-white border-l-4 border-green-500 pl-4" 
                      : "text-gray-300 hover:text-white"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <button 
              onClick={() => {
                navigate('/sign-up');
                setIsOpen(false);
              }}
              className="bg-green-500 py-3 px-4 text-white rounded-lg font-semibold hover:bg-green-600 transition duration-300 mt-4"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;