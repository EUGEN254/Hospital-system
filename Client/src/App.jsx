import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./sharedpages/LandingPage";
import Footer from "./sharedcomponents/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import LoginSignUp from "./sharedpages/LoginSignUp";
import ForgotPassword from "./sharedpages/ForgotPassword";
import PatientHome from "./patients/pages/PatientHome";
import Dashboard from "./patients/pages/Dashboard";
import Settings from "./patients/pages/Settings";
import Doctors from "./patients/pages/Doctors";

const App = () => {
  const location = useLocation();

  // check if the current path start with /patient
  const isPatientRoute = location.pathname.startsWith("/patient");
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

          {/* patient routes */}
          <Route path="/patient-dashboard" element={<PatientHome />}>
            <Route index element={<Dashboard />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* doctor route */}

          {/* admin routes */}
        </Routes>

        {/* only show footer if not parient route */}
        {!isPatientRoute && <Footer />}
      </div>
    </>
  );
};

export default App;
