import React from "react";
import { FaCalendarCheck, FaBell, FaComments } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      title: "Booking an appointment",
      description:
        "Easily schedule your doctor appointments online without any hassle.",
      icon: (
        <FaCalendarCheck className="text-green-500 w-6 h-6 flex-shrink-0" />
      ),
    },
    {
      title: "Scheduling reminders",
      description:
        "Get timely reminders for your appointments and medication schedules.",
      icon: <FaBell className="text-green-500 w-6 h-6 flex-shrink-0" />,
    },
    {
      title: "Talking to a doctor",
      description:
        "Consult with our experienced doctors via chat or video call anytime.",
      icon: <FaComments className="text-green-500 w-6 h-6 flex-shrink-0" />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex md:flex-row flex-col justify-between">
      {/* Header */}
      <div className="flex flex-col items-start gap-4 mb-8">
        <p className="text-2xl md:text-3xl font-bold text-gray-800">
          Explore Our Features
        </p>
        <p className="text-gray-600 text-md md:text-lg max-w-2xl">
          Our platform is designed to make your healthcare experience smooth,
          convenient, and accessible. Here are some of the key features we
          offer:
        </p>
        <button className="group bg-green-100 px-6 py-2 rounded-lg inline-block">
          <span className="text-green-600 font-semibold transition-transform duration-300 group-hover:translate-x-2">
            Learn More &rarr;
          </span>
        </button>
      </div>

      {/* Features List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-start gap-2 bg-green-50 p-4 rounded-lg shadow-md hover:translate-y-1 transform transition duration-300"
          >
            <div className="flex items-center gap-3">
              {feature.icon}
              <p className="text-gray-700 font-semibold text-md">
                {feature.title}
              </p>
            </div>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
