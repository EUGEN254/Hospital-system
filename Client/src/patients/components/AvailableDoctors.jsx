import React from "react";
import { User, Phone, Mail, Clock, Star, MessageCircle, CheckCircle, MoreVertical } from "lucide-react";

const AvailableDoctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      status: "available",
      availability: "9:00 AM - 5:00 PM",
      rating: 4.8,
      patients: 12,
      phone: "(555) 123-4567",
      email: "sarah.j@hospital.com",
      nextAvailable: "11:30 AM"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      status: "busy",
      availability: "10:00 AM - 6:00 PM",
      rating: 4.9,
      patients: 8,
      phone: "(555) 234-5678",
      email: "m.chen@hospital.com",
      nextAvailable: "3:15 PM"
    },
    {
      id: 3,
      name: "Dr. Emily Wilson",
      specialty: "Pediatrics",
      status: "available",
      availability: "8:00 AM - 4:00 PM",
      rating: 4.7,
      patients: 15,
      phone: "(555) 345-6789",
      email: "e.wilson@hospital.com",
      nextAvailable: "Now"
    },
    {
      id: 4,
      name: "Dr. Robert Davis",
      specialty: "Orthopedics",
      status: "offline",
      availability: "11:00 AM - 7:00 PM",
      rating: 4.6,
      patients: 6,
      phone: "(555) 456-7890",
      email: "r.davis@hospital.com",
      nextAvailable: "Tomorrow"
    },
    {
      id: 5,
      name: "Dr. Lisa Martinez",
      specialty: "Dermatology",
      status: "available",
      availability: "9:30 AM - 5:30 PM",
      rating: 4.9,
      patients: 10,
      phone: "(555) 567-8901",
      email: "l.martinez@hospital.com",
      nextAvailable: "1:45 PM"
    }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'available':
        return (
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
            <span className="text-xs font-medium text-green-700">Available</span>
          </div>
        );
      case 'busy':
        return (
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
            <span className="text-xs font-medium text-amber-700">Busy</span>
          </div>
        );
      case 'offline':
        return (
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-gray-400 mr-2"></div>
            <span className="text-xs font-medium text-gray-700">Offline</span>
          </div>
        );
      default:
        return <span className="text-xs text-gray-700">{status}</span>;
    }
  };

  const getRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-3 h-3 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-3 h-3 fill-yellow-400 text-yellow-400" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-3 h-3 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-gray-900">Available Doctors</h3>
          <p className="text-xs text-gray-600 mt-0.5">Real-time doctor availability</p>
        </div>
        <div className="mt-2 sm:mt-0">
          <button className="flex items-center px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 text-xs font-medium rounded-lg transition-colors duration-150">
            <Clock className="w-3 h-3 mr-1.5" />
            Refresh Status
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        {/* Table Header */}
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-4">
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Doctor</span>
            </div>
            <div className="col-span-2">
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Specialty</span>
            </div>
            <div className="col-span-2">
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</span>
            </div>
            <div className="col-span-2">
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Rating</span>
            </div>
            <div className="col-span-2">
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</span>
            </div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-100">
          {doctors.map((doctor) => (
            <div 
              key={doctor.id} 
              className="px-4 py-3 hover:bg-gray-50 transition-colors duration-150"
            >
              <div className="grid grid-cols-12 gap-3 items-center">
                {/* Doctor Column */}
                <div className="col-span-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-xs font-bold text-white">
                        {doctor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{doctor.name}</h4>
                      <div className="flex items-center mt-0.5">
                        <Phone className="w-3 h-3 text-gray-400 mr-1.5" />
                        <span className="text-xs text-gray-600">{doctor.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specialty Column */}
                <div className="col-span-2">
                  <span className="text-sm text-gray-900 font-medium">{doctor.specialty}</span>
                  <div className="flex items-center mt-0.5">
                    <User className="w-3 h-3 text-gray-400 mr-1.5" />
                    <span className="text-xs text-gray-600">{doctor.patients} patients</span>
                  </div>
                </div>

                {/* Status Column */}
                <div className="col-span-2">
                  {getStatusBadge(doctor.status)}
                  <div className="flex items-center mt-1">
                    <Clock className="w-3 h-3 text-gray-400 mr-1.5" />
                    <span className="text-xs text-gray-600">Next: {doctor.nextAvailable}</span>
                  </div>
                </div>

                {/* Rating Column */}
                <div className="col-span-2">
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      {getRatingStars(doctor.rating)}
                    </div>
                    <span className="text-sm font-medium text-gray-900">{doctor.rating}</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-0.5">{doctor.availability}</div>
                </div>

                {/* Actions Column */}
                <div className="col-span-2">
                  <div className="flex items-center space-x-2">
                    <button className="p-1.5 hover:bg-blue-50 rounded-lg transition-colors duration-150" title="Call">
                      <Phone className="w-4 h-4 text-blue-600" />
                    </button>
                    <button className="p-1.5 hover:bg-blue-50 rounded-lg transition-colors duration-150" title="Message">
                      <MessageCircle className="w-4 h-4 text-blue-600" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors duration-150">
                      <MoreVertical className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Additional Details (Hidden by default, can expand) */}
              <div className="mt-3 pt-3 border-t border-gray-100 hidden">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-xs text-gray-600">
                    <Mail className="w-3 h-3 mr-2 text-gray-400" />
                    <span>{doctor.email}</span>
                  </div>
                  <div className="text-right">
                    <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                      View Full Schedule →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white p-3 border border-gray-200 rounded-lg">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
              <User className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-600">On Duty</p>
              <p className="text-lg font-bold text-gray-900">3</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-3 border border-gray-200 rounded-lg">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center mr-3">
              <CheckCircle className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <p className="text-xs text-gray-600">Available</p>
              <p className="text-lg font-bold text-gray-900">2</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-3 border border-gray-200 rounded-lg">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center mr-3">
              <Star className="w-4 h-4 text-purple-600 fill-current" />
            </div>
            <div>
              <p className="text-xs text-gray-600">Avg. Rating</p>
              <p className="text-lg font-bold text-gray-900">4.8</p>
            </div>
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="pt-4 border-t border-gray-200">
        <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-150 flex items-center justify-center">
          <CheckCircle className="w-4 h-4 mr-2" />
          View All Doctors Schedule
        </button>
      </div>
    </div>
  );
};

export default AvailableDoctors;