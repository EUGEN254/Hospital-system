import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "./Dashboard";
import { Outlet } from "react-router-dom";

const PatientHome = () => {
  return (
    <div className="bg-gray-200">
      <div>
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PatientHome;
