import React from "react";
import { availableDoctorsData } from "../../assets/assets";

const AvailableDoctors = () => {
  return (
    <div className="w-full">
      <h2 className="text-base font-semibold text-gray-800 mb-2">
        Available Doctors
      </h2>

      <div className="max-h-[300px] overflow-y-auto doctor-scrollbar border border-gray-200 rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="text-left py-1.5 px-4 text-xs font-medium text-gray-600">No</th>
              <th className="text-left py-1.5 px-2 text-xs font-medium text-gray-600">Doctor</th>
              <th className="text-left py-1.5 px-2 text-xs font-medium text-gray-600">Specialty</th>
              <th className="text-left py-1.5 px-2 text-xs font-medium text-gray-600">Experience</th>
              <th className="text-left py-1.5 px-2 text-xs font-medium text-gray-600">Status</th>
              <th className="text-left py-1.5 px-2 text-xs font-medium text-gray-600">Actions</th>
            </tr>
          </thead>

          <tbody>
            {availableDoctorsData.map((doctor, index) => (
              <tr
                key={doctor.id}
                className="border-t border-gray-100  hover:bg-gray-50"
              >
                <td className="py-2 px-4 text-xs text-gray-700">{index + 1}.</td>

                <td className="py-2 px-2">
                  <div className="flex items-center gap-1.5">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-6 h-6 rounded-full object-cover border border-gray-200"
                    />
                    <span className="flex flex-col text-xs font-medium text-gray-800">
                      {doctor.name}
                      <span className="font-light">email</span>
                    </span>
                  </div>
                </td>

                <td className="py-1 px-2 text-xs text-gray-600">
                  {doctor.specialty}
                </td>

                <td className="py-1 px-2 text-xs text-gray-600">
                  {doctor.experience}
                </td>

                <td className="py-1 px-2">
                  <span
                    className={`px-3.5 py-0.5 rounded-2xl text-2xl${
                      doctor.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {doctor.status}
                  </span>
                </td>

                <td className="py-1 px-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AvailableDoctors;
