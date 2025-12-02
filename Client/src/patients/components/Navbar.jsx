import React, { useState } from "react";
import assets from "../../assets/assets";
import { NavLink } from "react-router-dom";
import {
  FaArrowDown,
  FaFacebookMessenger,
  FaBell,
  FaUserMd,
  FaCog,
  FaBars,
} from "react-icons/fa";
import { MdDashboard } from 'react-icons/md';
import { useHealthcare } from "../../sharedcontext/healthCareContext";

const Navbar = () => {
  const navLinks = [
    { name: "Dashboard", icon: <MdDashboard /> },
    { name: "Doctors", icon: <FaUserMd /> },
    { name: "Settings", icon: <FaCog /> },
  ];

  const [showProfile, setShowProfile] = useState(false);
  const { user,logout } = useHealthcare();

  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Left: Logo and user info */}
      <div className="flex items-center gap-4 ml-6">
        <img
          src={assets.logo}
          alt="hospital-logo"
          className="w-12 h-12 object-contain"
        />
        <div className="hidden md:flex flex-col">
          <span className="font-semibold text-gray-800">
            {user?.fullName}
          </span>
          <p className="text-xs text-gray-500">{user?.email}</p>
        </div>
      </div>

      {/* Middle: Navigation links */}
      <div className="hidden md:flex gap-4">
        {navLinks.map((nav) => (
          <NavLink
            key={nav.name}
            to={`/patient-dashboard${
              nav.name === "Dashboard" ? "" : "/" + nav.name.toLowerCase()
            }`}
            end={nav.name === "Dashboard"} // exact match for Dashboard
            className={({ isActive }) =>
              `flex items-center text-xs gap-2 px-4 py-2 font-medium text-gray-700 hover:text-white hover:bg-green-700 transition-colors rounded-3xl ${
                isActive ? "bg-green-700 text-white" : ""
              }`
            }
          >
            <span className="text-lg">{nav.icon}</span>
            {nav.name}
          </NavLink>
        ))}
      </div>

      {/* Right: Icons and profile */}
      <div className="flex items-center gap-4 mr-8 relative">
        <FaFacebookMessenger
          size={22}
          className="text-gray-700 text-xl hover:text-green-700 cursor-pointer"
        />
        <FaBell
          size={22}
          className="text-gray-700 text-xl hover:text-green-700 cursor-pointer"
        />

        {user && (
          <div
            onClick={() => setShowProfile(!showProfile)}
            className="relative group"
          >
            <img
              src={user.image || assets.doctor}
              alt="profile"
              className="w-10 h-10 rounded-full object-cover cursor-pointer"
            />
            <FaArrowDown
              size={18}
              className={`absolute -right-4 top-2 text-gray-600 cursor-pointer transition-transform duration-200 transform group-hover:-rotate-180`}
            />

            {showProfile && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg py-2 z-50">
                <NavLink
                  to="/patient-dashboard/settings"
                  className="block px-4 py-2 text-gray-700 hover:bg-green-50"
                >
                  Profile
                </NavLink>
                <NavLink
                  to="/patient-dashboard/settings"
                  className="block px-4 py-2 text-gray-700 hover:bg-green-50"
                >
                  Settings
                </NavLink>
                <button
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50"
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
