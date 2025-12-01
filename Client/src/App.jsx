import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./sharedpages/LandingPage";
import Footer from "./sharedcomponents/Footer";
import { Routes, Route } from "react-router-dom";
import LoginSignUp from "./sharedpages/LoginSignUp";

const App = () => {
  return (
    <>
      <ToastContainer />

      <div>
      

        <Routes>
          {/* public route */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-up" element={<LoginSignUp />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
};

export default App;
