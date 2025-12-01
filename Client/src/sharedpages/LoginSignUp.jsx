import React, { useState } from "react";
import assets from "../assets/assets";
import { FiMail, FiLock, FiUser, FiHome } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useHealthcare } from "../sharedcontext/healthCareContext";
import { GoogleLogin } from "@react-oauth/google";

const LoginSignUp = () => {
  const [isLogin, setIslogin] = useState("login");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { backendUrl, fetchCurrentUser, setUser } = useHealthcare();
  const navigate = useNavigate();

  // Toggle between login/signup
  const handleToggle = (mode) => {
    setIslogin(mode);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin === "signup" && password !== confirmPassword) {
      toast.info("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const endpoint =
        isLogin === "login"
          ? `${backendUrl}/api/users/login`
          : `${backendUrl}/api/users/register`;

      const payload =
        isLogin === "login"
          ? { email, password }
          : { fullName, email, password, termsAccepted };

      const response = await axios.post(endpoint, payload, {
        withCredentials: true,
      });

      if (response.data.success) {
        toast.success(response.data.message);

        if (response.data.user) {
          setUser(response.data.user);
          setFullName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setTermsAccepted(false);

          // Role-based navigation
          switch (response.data.user.role) {
            case "doctor":
              navigate("/doctor/dashboard");
              break;
            case "nurse":
              navigate("/nurse/dashboard");
              break;
            case "patient":
              navigate("/patient-dashboard");
              break;
            default:
              navigate("/dashboard");
          }
        } else {
          await fetchCurrentUser();
        }
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Handle Google Login
  const handleGoogleLogin = async (credentialResponse) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${backendUrl}/api/users/google-login`,
        { token: credentialResponse.credential },
        { withCredentials: true }
      );

      console.log(res);

      if (res.data.success) {
        toast.success("Logged in with Google!");
        if (res.data.user) {
          setUser(res.data.user);

          switch (res.data.user.role) {
            case "doctor":
              navigate("/doctor/dashboard");
              break;
            case "nurse":
              navigate("/nurse/dashboard");
              break;
            case "patient":
              navigate("/patient-dashboard");
              break;
            default:
              navigate("/dashboard");
          }
        } else {
          await fetchCurrentUser();
        }
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error("Google login failed, try again.");
    } finally {
      setLoading(false);
    }
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
            <p className="text-green-700 mt-1 text-sm">
              Your health, simplified
            </p>
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
            <form onSubmit={handleSubmit} className="space-y-3 text-sm">
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
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 transition text-sm"
                    />
                  </div>
                </div>
              )}

              {isLogin === "login" && (
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => navigate("/reset-password")}
                    className="text-xs text-green-800 hover:text-green-900 hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Terms Checkbox */}
              {isLogin === "signup" && (
                <div className="flex items-start gap-2 text-xs text-gray-600">
                  <input
                    type="checkbox"
                    required
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
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
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-800 hover:bg-green-900 text-white py-2.5 rounded-xl font-semibold shadow-md hover:shadow-lg transition text-sm flex items-center justify-center gap-2"
                disabled={loading}
              >
                {loading && (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                )}
                {isLogin === "login"
                  ? loading
                    ? "Signing In..."
                    : "Sign In"
                  : loading
                  ? "Creating..."
                  : "Create Account"}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-4 text-xs">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="px-2 text-gray-500">Or continue with</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Social Login - Google */}
            <div className="mb-3">
              <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={() => toast.error("Google login failed")}
              />
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
