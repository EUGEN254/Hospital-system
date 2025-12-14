import React from "react";
import { Calendar, Clock, Phone, MapPin, MoreVertical, CheckCircle, AlertCircle, XCircle, ChevronRight, User } from "lucide-react";

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
      duration: "30 min",
      age: "45",
      doctor: "Dr. Miller",
      priority: "Normal"
    },
    {
      id: 2,
      patient: "Sarah Johnson",
      time: "10:00 AM",
      type: "Follow-up",
      status: "confirmed",
      phone: "(555) 234-5678",
      location: "Room 102",
      duration: "45 min",
      age: "32",
      doctor: "Dr. Martinez",
      priority: "Normal"
    },
    {
      id: 3,
      patient: "Michael Chen",
      time: "11:00 AM",
      type: "Consultation",
      status: "pending",
      phone: "(555) 345-6789",
      location: "Room 103",
      duration: "60 min",
      age: "28",
      doctor: "Dr. Patel",
      priority: "High"
    },
    {
      id: 4,
      patient: "Emily Wilson",
      time: "02:00 PM",
      type: "Procedure",
      status: "confirmed",
      phone: "(555) 456-7890",
      location: "Room 201",
      duration: "90 min",
      age: "52",
      doctor: "Dr. Johnson",
      priority: "Medium"
    },
    {
      id: 5,
      patient: "Robert Davis",
      time: "03:30 PM",
      type: "Regular Checkup",
      status: "cancelled",
      phone: "(555) 567-8901",
      location: "Room 202",
      duration: "30 min",
      age: "61",
      doctor: "Dr. Brown",
      priority: "Normal"
    }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'confirmed':
        return (
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
            <span className="text-emerald-700 font-medium text-sm">Confirmed</span>
          </div>
        );
      case 'pending':
        return (
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
            <span className="text-amber-700 font-medium text-sm">Pending</span>
          </div>
        );
      case 'cancelled':
        return (
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
            <span className="text-red-700 font-medium text-sm">Cancelled</span>
          </div>
        );
      default:
        return <span className="text-gray-700 text-sm">{status}</span>;
    }
  };

  const getPriorityBadge = (priority) => {
    const styles = {
      High: "bg-red-100 text-red-800",
      Medium: "bg-amber-100 text-amber-800",
      Normal: "bg-blue-100 text-blue-800"
    };
    
    return (
      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${styles[priority] || 'bg-gray-100 text-gray-800'}`}>
        {priority}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header with Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Today's Appointments</h2>
          <p className="text-sm text-gray-600">Monday, Dec 16, 2024</p>
        </div>
        <div className="mt-3 sm:mt-0">
          <button className="flex items-center px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule New
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        {/* Table Header */}
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3">
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Patient</span>
            </div>
            <div className="col-span-2">
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Time</span>
            </div>
            <div className="col-span-2">
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Type</span>
            </div>
            <div className="col-span-2">
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</span>
            </div>
            <div className="col-span-2">
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Priority</span>
            </div>
            <div className="col-span-1">
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider"></span>
            </div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-100">
          {appointments.map((appointment) => (
            <div 
              key={appointment.id} 
              className="px-6 py-4 hover:bg-gray-50 transition-colors duration-150"
            >
              <div className="grid grid-cols-12 gap-4 items-center">
                {/* Patient Column */}
                <div className="col-span-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <User className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{appointment.patient}</h4>
                      <div className="flex items-center mt-1">
                        <Phone className="w-3 h-3 text-gray-400 mr-1.5" />
                        <span className="text-xs text-gray-600">{appointment.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Time Column */}
                <div className="col-span-2">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="font-medium text-gray-900">{appointment.time}</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{appointment.duration}</div>
                </div>

                {/* Type Column */}
                <div className="col-span-2">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-900">{appointment.type}</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{appointment.doctor}</div>
                </div>

                {/* Status Column */}
                <div className="col-span-2">
                  {getStatusBadge(appointment.status)}
                </div>

                {/* Priority Column */}
                <div className="col-span-2">
                  {getPriorityBadge(appointment.priority)}
                </div>

                {/* Actions Column */}
                <div className="col-span-1">
                  <div className="flex justify-end">
                    <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors duration-150">
                      <MoreVertical className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Additional Details (Optional - can be expanded) */}
              <div className="mt-3 pt-3 border-t border-gray-100 hidden">
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                    <span>{appointment.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>Age: {appointment.age}</span>
                  </div>
                  <div className="text-right">
                    <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                      View Details <ChevronRight className="w-4 h-4 inline ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Table Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Showing <span className="font-medium">5</span> appointments
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1.5 text-sm text-gray-700 hover:bg-white hover:border-gray-300 border border-transparent rounded-lg transition-all duration-150">
                Previous
              </button>
              <button className="px-3 py-1.5 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors duration-150">
                1
              </button>
              <button className="px-3 py-1.5 text-sm text-gray-700 hover:bg-white hover:border-gray-300 border border-transparent rounded-lg transition-all duration-150">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Today</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mr-3">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Confirmed</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mr-3">
              <AlertCircle className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900">1</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mr-3">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Cancelled</p>
              <p className="text-2xl font-bold text-gray-900">1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;