import React from "react";
import Appointment from "../components/Appointment";
import AppointmentActivity from "../components/AppointmentActivity";
import AvailableDoctors from "../components/AvailableDoctors";
import UpcomingEvents from "../components/UpcomingEvents";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* Left side */}
      <div className="flex-1 flex flex-col gap-3">
        <h1 className="font-semibold ">Appointment</h1>
        {/* Appointments and activity side by side */}
        <div className="flex flex-col md:flex-row ">
          <div className="flex-1">
            <Appointment />
          </div>
          <div className="flex-1">
            <AppointmentActivity />
          </div>
        </div>

        {/* Available doctors */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <AvailableDoctors />
        </div>
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/3 bg-white shadow-md rounded-lg p-4">
        <UpcomingEvents />
      </div>
    </div>
  );
};

export default Dashboard;
