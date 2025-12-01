import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./sharedpages/LandingPage";
import Footer from "./sharedcomponents/Footer";
import { Routes, Route } from "react-router-dom";
import LoginSignUp from "./sharedpages/LoginSignUp";
import ForgotPassword from "./sharedpages/ForgotPassword";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        toastClassName="!z-[10000] !p-1  bg-green-700 text-white px-4 py-2 rounded-xl shadow-md text-sm"
        toastStyle={{ height: "50px", minHeight: "50px" }}
      />

      <div>
        <Routes>
          {/* public route */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-up" element={<LoginSignUp />} />
          <Route path="/reset-password" element={<ForgotPassword />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
};

export default App;
