import React from "react";
import { appointmentData } from "../../assets/assets";

const Appointment = () => {
  return (
    <div className="flex flex-col gap-4">
      {appointmentData.map((item, index) => (
        <div
          key={index}
          className="bg-green-800 shadow-md rounded-lg p-8 pr-10 flex flex-col gap-3 w-88" 
        >
          <p className="text-gray-100 text-sm">{item.title}</p>
          <p className="text-2xl font-bold text-gray-800">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Appointment;
