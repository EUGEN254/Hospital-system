import { NavLink, useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useHealthcare } from "../sharedcontext/healthCareContext";
import axios from "axios";


const ForgotPassword = () => {
  const navigate = useNavigate();
  const inputRefs = useRef([]);

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {  backendUrl } = useHealthcare();

  // Auto move between OTP fields
  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text").slice(0, 6).split("");
    paste.forEach((char, index) => {
      if (inputRefs.current[index]) inputRefs.current[index].value = char;
    });
  };

  // Step 1 — Send OTP
  const handleSendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `${ backendUrl}/api/users/send-reset-otp`,
        { email }
      );
      if (data.success) {
        toast.success(data.message);
        setIsEmailSent(true);
      } else toast.error(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send OTP");
    } finally {
      setIsLoading(false);
    }
  };

  // Step 2 — Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const enteredOtp = inputRefs.current.map((e) => e.value).join("");
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/users/verify-reset-otp`,
        { email, otp: enteredOtp }
      );
      if (data.success) {
        toast.success("OTP Verified");
        setOtp(enteredOtp);
        setIsOtpVerified(true);
      } else toast.error(data.message || "Invalid OTP");
    } catch (error) {
      toast.error(error.response?.data?.message || "OTP verification failed");
    } finally {
      setIsLoading(false);
    }
  };

  // Step 3 — Reset Password
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/users/reset-password`,
        {
          email,
          otp,
          newPassword,
        }
      );
      if (data.success) {
        toast.success(data.message);
        navigate("/sign-up");
      } else toast.error(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Reset failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-4">
      {/* Header */}
      <div className="w-full max-w-md mb-6">
        <NavLink
          to="/"
          className="inline-flex items-center gap-2 text-green-800 hover:text-green-900 font-medium mb-4"
        >
          <FaHome /> Back Home
        </NavLink>
        <h1 className="text-2xl font-bold text-green-900 mb-1">
          Forgot Password
        </h1>
        <p className="text-green-700 text-sm">
          {isOtpVerified
            ? "Create a new secure password"
            : isEmailSent
            ? "Enter the OTP sent to your email"
            : "Enter your registered email address"}
        </p>
      </div>

      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        {/* Email form */}
        {!isEmailSent && (
          <form onSubmit={handleSendEmail} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm mb-1">
                Email Address
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@example.com"
                  required
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 text-sm"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-800 hover:bg-green-900 text-white py-2.5 rounded-xl font-semibold transition text-sm"
            >
              {isLoading ? "Sending..." : "Send OTP"}
            </button>
          </form>
        )}

        {/* OTP form */}
        {isEmailSent && !isOtpVerified && (
          <form onSubmit={handleVerifyOtp} className="space-y-4 mt-4">
            <p className="text-gray-700 text-sm mb-2">
              Enter the 6-digit code below
            </p>
            <div onPaste={handlePaste} className="flex justify-between gap-2">
              {Array(6)
                .fill(0)
                .map((_, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    onInput={(e) => handleInput(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    type="text"
                    maxLength="1"
                    className="w-10 h-10 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-lg"
                  />
                ))}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-800 hover:bg-green-900 text-white py-2.5 rounded-xl font-semibold transition text-sm"
            >
              {isLoading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        )}

        {/* Reset Password form */}
        {isOtpVerified && (
          <form onSubmit={handleResetPassword} className="space-y-4 mt-4">
            <div>
              <label className="block text-gray-700 text-sm mb-1">
                New Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  required
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 text-sm"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-800 hover:bg-green-900 text-white py-2.5 rounded-xl font-semibold transition text-sm"
            >
              {isLoading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        )}
      </div>

      {/* Back to login */}
      <div className="w-full max-w-md mt-4 text-sm">
        <NavLink
          to="/sign-up"
          className="inline-flex items-center gap-1 text-green-800 hover:text-green-900 font-medium"
        >
          <FiArrowLeft /> Back to Login
        </NavLink>
      </div>
    </div>
  );
};

export default ForgotPassword;
