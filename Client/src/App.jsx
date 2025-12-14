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
import DoctorsPage from "./sharedpages/DoctorsPage";
import BillingPage from "./sharedpages/BillingPage";
import ContactUsPage from "./sharedpages/ContactUsPage";
import AboutUsPage from "./sharedpages/AboutUsPage";
import FeaturesPage from "./sharedpages/FeaturesPage";
import PublicLayout from "./layouts/PublicLayout";
import ScrollToTop from "./utils/ScrollToTop.js";

const App = () => {
  const location = useLocation();

  // Check if the current path starts with /patient
  const isPatientRoute = location.pathname.startsWith("/patient");

  // Check if it's a public route that should NOT have header/navbar
  const noHeaderRoutes = ["/sign-up", "/reset-password"];
  const shouldShowHeader =
    !noHeaderRoutes.includes(location.pathname) && !isPatientRoute;

  return (
    <>
      <ScrollToTop />  {/* scroll everything to the top */}

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
          {/* Public Routes WITH Header */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="/available-doctors" element={<DoctorsPage />} />
            <Route path="/billing" element={<BillingPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/features" element={<FeaturesPage />} />
          </Route>

          {/* Public Routes WITHOUT Header */}
          <Route path="/sign-up" element={<LoginSignUp />} />
          <Route path="/reset-password" element={<ForgotPassword />} />

          {/* Patient routes */}
          <Route path="/patient-dashboard" element={<PatientHome />}>
            <Route index element={<Dashboard />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>

        {/* Only show footer if not patient route */}
        {!isPatientRoute && <Footer />}
      </div>
    </>
  );
};

export default App;
