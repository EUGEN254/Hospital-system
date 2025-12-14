import React from "react";
import { Calendar, Clock, User, Phone, MapPin, MoreVertical } from "lucide-react";

const Appointment = () => {
  const appointments = [
    {
      id: 1,
      patient: "John Smith",
      time: "09:00 AM",
      type: "Regular Checkup",
      status: "confirmed",
      phone: "(555) 123-4567",
      location: "Room 101",
      duration: "30 min"
    },
    {
      id: 2,
      patient: "Sarah Johnson",
      time: "10:00 AM",
      type: "Follow-up",
      status: "confirmed",
      phone: "(555) 234-5678",
      location: "Room 102",
      duration: "45 min"
    },
    {
      id: 3,
      patient: "Michael Chen",
      time: "11:00 AM",
      type: "Consultation",
      status: "pending",
      phone: "(555) 345-6789",
      location: "Room 103",
      duration: "60 min"
    },
    {
      id: 4,
      patient: "Emily Wilson",
      time: "02:00 PM",
      type: "Procedure",
      status: "confirmed",
      phone: "(555) 456-7890",
      location: "Room 201",
      duration: "90 min"
    },
    {
      id: 5,
      patient: "Robert Davis",
      time: "03:30 PM",
      type: "Regular Checkup",
      status: "cancelled",
      phone: "(555) 567-8901",
      location: "Room 202",
      duration: "30 min"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4">
      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Total Today</p>
          <p className="text-2xl font-bold text-gray-900">5</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Confirmed</p>
          <p className="text-2xl font-bold text-gray-900">3</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Cancelled</p>
          <p className="text-2xl font-bold text-gray-900">1</p>
        </div>
      </div>

      {/* Appointments List */}
      <div className="space-y-3">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{appointment.patient}</h3>
                    <div className="flex items-center mt-1 space-x-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {appointment.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-1" />
                        {appointment.type}
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                    {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    {appointment.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {appointment.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {appointment.duration}
                  </div>
                </div>
              </div>
              <button className="ml-4 p-2 hover:bg-gray-100 rounded-lg">
                <MoreVertical className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Appointment Button */}
      <div className="mt-6">
        <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
          <Calendar className="w-5 h-5 mr-2" />
          Schedule New Appointment
        </button>
      </div>
    </div>
  );
};

export default Appointment;