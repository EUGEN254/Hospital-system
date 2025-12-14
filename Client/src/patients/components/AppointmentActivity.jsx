import React from "react";
import { Activity, TrendingUp, TrendingDown, CheckCircle, XCircle, Clock } from "lucide-react";

const AppointmentActivity = () => {
  const activityData = [
    { hour: "8 AM", appointments: 2 },
    { hour: "9 AM", appointments: 5 },
    { hour: "10 AM", appointments: 3 },
    { hour: "11 AM", appointments: 4 },
    { hour: "12 PM", appointments: 6 },
    { hour: "1 PM", appointments: 3 },
    { hour: "2 PM", appointments: 4 },
    { hour: "3 PM", appointments: 5 },
    { hour: "4 PM", appointments: 2 },
    { hour: "5 PM", appointments: 1 },
  ];

  const stats = [
    { label: "Completed", value: 15, icon: CheckCircle, color: "text-green-500", bgColor: "bg-green-100" },
    { label: "No-show", value: 2, icon: XCircle, color: "text-red-500", bgColor: "bg-red-100" },
    { label: "Rescheduled", value: 3, icon: Clock, color: "text-yellow-500", bgColor: "bg-yellow-100" }
  ];

  const maxAppointments = Math.max(...activityData.map(d => d.appointments));

  return (
    <div className="space-y-6">
      {/* Activity Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">Today's Activity</p>
          <p className="text-2xl font-bold text-gray-900">38 Appointments</p>
        </div>
        <div className="flex items-center text-green-600">
          <TrendingUp className="w-5 h-5 mr-1" />
          <span className="font-medium">+12%</span>
        </div>
      </div>

      {/* Activity Chart */}
      <div>
        <div className="flex items-end justify-between h-32 mb-2">
          {activityData.map((item, index) => {
            const height = (item.appointments / maxAppointments) * 100;
            return (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="w-6 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg"
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-xs text-gray-500 mt-1">{item.hour}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className={`p-2 ${stat.bgColor} rounded-lg mr-3`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{stat.label}</p>
                  <p className="text-sm text-gray-600">Today</p>
                </div>
              </div>
              <p className="text-lg font-bold text-gray-900">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Peak Hours */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
        <h3 className="font-semibold text-gray-900 mb-2">Peak Hours</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-gray-900">9 AM - 12 PM</p>
            <p className="text-sm text-gray-600">Most appointments</p>
          </div>
          <Activity className="w-8 h-8 text-blue-600" />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-4">
        <h3 className="font-semibold text-gray-900 mb-3">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-2">
          <button className="p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
            Send Reminders
          </button>
          <button className="p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentActivity;