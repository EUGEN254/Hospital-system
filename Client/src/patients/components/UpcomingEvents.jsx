import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import assets from "../../assets/assets";

const UpcomingEvents = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="p-2">
      {/* Calendar */}
      <div className="mb-6">
        <Calendar
          onChange={setDate}
          value={date}
          className="custom-calendar"
          // Remove hover from tiles
          tileClassName={({ date: tileDate, view }) =>
            view === "month" && date.getDay() === 0
              ? "text-red-500 hover:!bg-transparent"
              : "text-gray-700 hover:!bg-transparent"
          }
          navigationLabel={({ date, label }) => (
            <span className="text-lg font-semibold text-gray-800">{label}</span>
          )}
        />
      </div>

      {/* Schedules Today */}
      <h1 className="text-xl font-semibold mb-3">25 schedules today</h1>

      <div className="space-y-4">
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Doctor
                </th>
                <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Row 1 */}
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      src={assets.doctor1}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <span className="font-medium text-gray-900">
                      Dr. Alisha
                    </span>
                  </div>
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <span className="text-gray-700">Malaria Test</span>
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <span className="font-semibold text-gray-900">09:00 AM</span>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      src={assets.doctor}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <span className="font-medium text-gray-900">
                      Dr. Alisha
                    </span>
                  </div>
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <span className="text-gray-700">Malaria Test</span>
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <span className="font-semibold text-gray-900">09:00 AM</span>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      src={assets.doctor}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <span className="font-medium text-gray-900">
                      Dr. Mohammed
                    </span>
                  </div>
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <span className="text-gray-700">Consultation</span>
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <span className="font-semibold text-gray-900">11:30 AM</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination Circles */}
        <div className="flex items-center gap-3 justify-center pt-3">
          <div className="w-8 h-8 bg-green-600 rounded-full shadow-md flex items-center justify-center text-white font-medium">
            1
          </div>
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-medium hover:bg-gray-400 cursor-pointer transition-colors">
            2
          </div>
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-medium hover:bg-gray-400 cursor-pointer transition-colors">
            3
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
