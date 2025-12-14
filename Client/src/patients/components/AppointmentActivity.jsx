import React from "react";
import { TrendingUp, TrendingDown, MoreVertical } from "lucide-react";

const AppointmentActivity = () => {
  const data = [
    { day: "Mon", appointments: 12, trend: "up" },
    { day: "Tue", appointments: 18, trend: "up" },
    { day: "Wed", appointments: 15, trend: "down" },
    { day: "Thu", appointments: 22, trend: "up" },
    { day: "Fri", appointments: 20, trend: "down" },
    { day: "Sat", appointments: 8, trend: "down" },
    { day: "Sun", appointments: 4, trend: "up" }
  ];

  const maxAppointments = Math.max(...data.map(d => d.appointments));

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Weekly Average</p>
          <div className="flex items-center mt-1">
            <p className="text-2xl font-bold text-gray-900">14.1</p>
            <div className="ml-2 flex items-center text-emerald-600 text-sm">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span>+12%</span>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Peak Day</p>
          <div className="flex items-center mt-1">
            <p className="text-2xl font-bold text-gray-900">22</p>
            <span className="ml-2 text-sm text-gray-600">on Thursday</span>
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="w-12 text-sm text-gray-600 font-medium">{item.day}</div>
            <div className="flex-1 ml-4">
              <div className="relative h-8">
                <div 
                  className="absolute h-full bg-linear-to-r from-blue-500 to-blue-600 rounded-lg transition-all duration-300"
                  style={{ width: `${(item.appointments / maxAppointments) * 100}%` }}
                >
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-white font-medium">
                    {item.appointments}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-8 ml-2 flex justify-center">
              {item.trend === "up" ? (
                <TrendingUp className="w-4 h-4 text-emerald-500" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
              <span className="text-sm text-gray-600">Appointments</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 text-emerald-500 mr-1" />
              <span className="text-sm text-gray-600">Increase</span>
            </div>
          </div>
          <button className="p-1 hover:bg-gray-100 rounded">
            <MoreVertical className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentActivity;