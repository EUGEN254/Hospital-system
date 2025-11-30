import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./sharedpages/LandingPage";
import Footer from "./sharedcomponents/Footer";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <ToastContainer />

      <div>
      

        <Routes>
          {/* public route */}
          <Route path="/" element={<LandingPage />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
};

export default App;
