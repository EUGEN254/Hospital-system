import React, { useState } from "react";
import assets from "../assets/assets";
import { FiMail, FiLock, FiUser, FiHome } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const LoginSignUp = () => {
  const [isLogin, setIslogin] = useState("login");

  const handleToggle = (mode) => {
    setIslogin(mode);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-[85vh] bg-gradient-to-b from-green-50 to-green-100 flex flex-col">
      {/* Navbar */}
      <header className="px-6 py-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-green-900 transition text-sm"
        >
          <FiHome />
          <span>Home</span>
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-2xl shadow-md mb-2">
              <img src={assets.logo} className="w-9 h-9" alt="logo" />
            </div>
            <h1 className="text-xl font-bold text-green-900">SmartCare</h1>
            <p className="text-green-700 mt-1 text-sm">Your health, simplified</p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            {/* Toggle Buttons */}
            <div className="flex mb-6 bg-green-100 p-1 rounded-xl text-sm">
              <button
                onClick={() => handleToggle("login")}
                className={`flex-1 py-2 rounded-xl font-medium transition ${
                  isLogin === "login"
                    ? "bg-white shadow text-green-900"
                    : "text-green-700"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => handleToggle("signup")}
                className={`flex-1 py-2 rounded-xl font-medium transition ${
                  isLogin === "signup"
                    ? "bg-white shadow text-green-900"
                    : "text-green-700"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <form className="space-y-3 text-sm">
              {isLogin === "signup" && (
                <div>
                  <label className="block font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter full name"
                      className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 transition text-sm"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 transition text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 transition text-sm"
                  />
                </div>
              </div>

              {isLogin === "signup" && (
                <div>
                  <label className="block font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="password"
                      placeholder="Confirm password"
                      className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 transition text-sm"
                    />
                  </div>
                </div>
              )}

              {isLogin === "login" && (
                <div className="flex justify-end">
                  <button className="text-xs text-green-800 hover:text-green-900 hover:underline">
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Terms Checkbox */}
              <div className="flex items-start gap-2 text-xs text-gray-600">
                <input
                  type="checkbox"
                  required
                  className="mt-1 w-3 h-3 rounded border-gray-300"
                />
                <span>
                  By continuing, you agree to our{" "}
                  <button className="text-green-900 hover:text-green-800 font-medium">
                    Terms
                  </button>{" "}
                  &{" "}
                  <button className="text-green-900 hover:text-green-800 font-medium">
                    Privacy Policy
                  </button>
                </span>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-green-800 hover:bg-green-900 text-white py-2.5 rounded-xl font-semibold shadow-md hover:shadow-lg transition text-sm">
                {isLogin === "login" ? "Sign In" : "Create Account"}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-4 text-xs">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="px-2 text-gray-500">Or continue with</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Social Login - Google only */}
            <div className="mb-3">
              <button className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition text-sm">
                <FcGoogle size={18} />
                <span>Continue with Google</span>
              </button>
            </div>

            {/* Switch */}
            <p className="text-center text-xs text-gray-600">
              {isLogin === "login" ? (
                <>
                  Don’t have an account?{" "}
                  <button
                    onClick={() => handleToggle("signup")}
                    className="text-green-900 font-semibold hover:text-green-800 hover:underline"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => handleToggle("login")}
                    className="text-green-900 font-semibold hover:text-green-800 hover:underline"
                  >
                    Sign in
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginSignUp;
