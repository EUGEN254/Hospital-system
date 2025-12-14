import React from "react";
import Appointment from "../components/Appointment";
import AppointmentActivity from "../components/AppointmentActivity";
import AvailableDoctors from "../components/AvailableDoctors";
import UpcomingEvents from "../components/UpcomingEvents";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Medical Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back, Dr. Anderson. Here's your schedule for today.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm text-gray-600">Current Time</p>
                <p className="text-lg font-semibold text-gray-900">10:45 AM</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-semibold">DA</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Today's Patients</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-semibold">👥</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Appointments</p>
                <p className="text-2xl font-bold text-gray-900">18</p>
              </div>
              <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                <span className="text-emerald-600 font-semibold">📅</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Tasks</p>
                <p className="text-2xl font-bold text-gray-900">7</p>
              </div>
              <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                <span className="text-amber-600 font-semibold">📋</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Available Rooms</p>
                <p className="text-2xl font-bold text-gray-900">9</p>
              </div>
              <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center">
                <span className="text-indigo-600 font-semibold">🏥</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Optimized for Tables */}
      <div className="flex flex-col xl:flex-row gap-6">
        {/* Left Column - Primary Content (Table takes more space) */}
        <div className="xl:flex-[2] flex flex-col gap-6">
          {/* Appointments Table Section */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6">
              <Appointment />
            </div>
          </div>

          {/* Available Doctors Section */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="p-6">
              <AvailableDoctors />
            </div>
          </div>
        </div>

        {/* Right Column - Secondary Content */}
        <div className="xl:w-96 flex flex-col gap-6">
          {/* Activity Chart */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-semibold text-gray-800">Appointment Activity</h3>
                  <p className="text-gray-500 text-sm mt-1">Daily appointment trends</p>
                </div>
                <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 bg-white">
                  <option>This Week</option>
                  <option>This Month</option>
                  <option>This Quarter</option>
                </select>
              </div>
              <AppointmentActivity />
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="p-6">
              <UpcomingEvents />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Stats */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="text-sm text-gray-600">
            <span className="font-medium">Last Updated:</span> Today at 10:30 AM
          </div>
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <button className="text-sm text-gray-600 hover:text-gray-800">
              Help & Support
            </button>
            <button className="text-sm text-gray-600 hover:text-gray-800">
              Settings
            </button>
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
              Export Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;