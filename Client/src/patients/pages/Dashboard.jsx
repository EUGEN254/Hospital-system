import React from "react";
import { Calendar, Users, Clock, TrendingUp, Bell, Search } from "lucide-react";

// Import components
import Appointment from "../components/Appointment";
import AppointmentActivity from "../components/AppointmentActivity";
import AvailableDoctors from "../components/AvailableDoctors";
import UpcomingEvents from "../components/UpcomingEvents";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Medical Dashboard</h1>
            <p className="text-gray-600">Welcome back, Dr. Smith</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search patients, appointments..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Today's Appointments</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">18</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-600">+12% from yesterday</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Patients</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">247</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <Users className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-600">+8% this month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg. Wait Time</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">12m</p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-600">-3m from last week</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Occupancy Rate</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">78%</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="flex items-center mt-4 text-sm">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-600">+5% this month</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left side - 2/3 width */}
          <div className="lg:w-2/3 flex flex-col gap-6">
            {/* Appointments and Activity side by side */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-2/3">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Today's Appointments</h2>
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                      View All →
                    </button>
                  </div>
                  <Appointment />
                </div>
              </div>
              <div className="lg:w-1/3">
                <div className="bg-white rounded-xl border border-gray-200 p-6 h-full">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Appointment Activity</h2>
                  <AppointmentActivity />
                </div>
              </div>
            </div>

            {/* Available Doctors */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Available Doctors</h2>
                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  See All Doctors →
                </button>
              </div>
              <AvailableDoctors />
            </div>
          </div>

          {/* Right side - 1/3 width */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl border border-gray-200 p-6 h-full">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Upcoming Events</h2>
                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  + Add Event
                </button>
              </div>
              <UpcomingEvents />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;