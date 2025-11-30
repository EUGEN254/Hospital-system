import React from "react";
import assets from "../assets/assets";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "Amazing service! Booking appointments online is so convenient and fast.",
      role: "Patient",
      image: assets.doctor,
    },
    {
      name: "Sarah Smith",
      feedback:
        "The doctors are very professional and the reminders really help me stay on track.",
      role: "Patient",
      image: assets.doctor,
    },
    {
      name: "Michael Johnson",
      feedback:
        "I love the video consultation feature. It saves me so much time!",
      role: "Patient",
      image: assets.doctor,
    },
  ];

  // Duplicate array to make sliding continuous
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        What Our Patients Say
      </h2>

      {/* Scrolling container */}
      <div className="flex gap-4 animate-marquee">
        {marqueeItems.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-72 md:w-80 lg:w-96 bg-white rounded-lg shadow-lg p-6"
          >
            <img
              src={testimonial.image}
              alt=""
              className="h-12 w-12 rounded-full"
            />

            <p className="text-gray-700 mb-4 break-words">
              {testimonial.feedback}
            </p>
            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
            <p className="text-gray-500 text-sm">{testimonial.role}</p>
          </div>
        ))}
      </div>

      {/* Custom animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
