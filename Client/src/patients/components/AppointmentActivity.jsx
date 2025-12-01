import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { appointmentActivityData } from "../../assets/assets";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AppointmentActivity = () => {
  const [data, setData] = useState(appointmentActivityData);

  return (
    <div className="bg-white rounded-lg shadow-md pl-8 p-2">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-800">{data.filter}</h3>
        <select
          className="border border-gray-300 rounded px-3 py-0.5 text-sm"
          onChange={(e) => console.log("Filter change:", e.target.value)}
        >
          <option>This Week</option>
          <option>This Month</option>
        </select>
      </div>

      <Bar
        data={data}
        options={{
          responsive: true,
          scales: {
            x: {
              grid: { display: false },
              barPercentage: 0.4, 
            },
            y: {
              beginAtZero: true,
              grid: { display: false },
            },
          },
          plugins: {
            legend: { position: "top" },
            title: { display: false, text: "Appointment Activity" },
          },
        }}
      />
    </div>
  );
};

export default AppointmentActivity;
