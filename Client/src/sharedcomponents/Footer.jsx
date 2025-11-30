import React from "react";
import assets from "../assets/assets";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-950 text-gray-300 pt-16 rounded-t-3xl">
      {/* Main Footer Grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Branding */}
        <div className="flex flex-col items-start gap-4">
          <img
            src={assets.logo}
            alt="logo"
            className="w-28 h-28 md:w-32 md:h-32 -mt-12 md:-mt-16"
          />
          <p className="text-gray-400 text-sm md:text-base">
            We are committed to providing top-notch healthcare services to
            ensure your well-being.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              className="hover:text-green-400 transition duration-300"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              className="hover:text-green-400 transition duration-300"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="#"
              className="hover:text-green-400 transition duration-300"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="hover:text-green-400 transition duration-300"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold mb-2 text-lg">Quick Links</h4>
          <a href="#" className="hover:text-white transition duration-300">
            Home
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            About Us
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            Services
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            Doctors
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            Contact
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold mb-2 text-lg">Contact Us</h4>
          <p className="text-gray-400">123 Health Street, Nairobi, Kenya</p>
          <p className="text-gray-400">Email: info@hospital.com</p>
          <p className="text-gray-400">Phone: +254 700 123 456</p>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white text-l font-semibold mb-2 w-full">
            Subscribe to our Newsletter
          </h4>
          <p className="text-gray-400 text-sm mb-2">
            Get the latest updates, news, and offers directly in your inbox.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-55 px-4 py-2 rounded-l-lg bg-gray-100 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r-lg font-semibold transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-black pt-6 pb-3 text-center text-gray-100 text-sm md:text-base">
        &copy; {new Date().getFullYear()} Eugen Hospital System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
