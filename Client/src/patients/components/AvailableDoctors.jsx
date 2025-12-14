import React from "react";
import { User, Phone, Mail, Clock, MessageCircle, Star, CheckCircle } from "lucide-react";

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
      email: "sarah.j@hospital.com"
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
      email: "m.chen@hospital.com"
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
      email: "e.wilson@hospital.com"
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
      email: "r.davis@hospital.com"
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
      email: "l.martinez@hospital.com"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'busy':
        return 'bg-yellow-100 text-yellow-800';
      case 'offline':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">On Duty</p>
          <p className="text-2xl font-bold text-gray-900">3</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Available</p>
          <p className="text-2xl font-bold text-gray-900">2</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Avg. Rating</p>
          <p className="text-2xl font-bold text-gray-900">4.8</p>
        </div>
      </div>

      {/* Doctors List */}
      <div className="space-y-4">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {doctor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                    doctor.status === 'available' ? 'bg-green-500' : 
                    doctor.status === 'busy' ? 'bg-yellow-500' : 'bg-gray-400'
                  }`}></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900">{doctor.name}</h3>
                      <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(doctor.status)}`}>
                      {doctor.status.charAt(0).toUpperCase() + doctor.status.slice(1)}
                    </span>
                  </div>
                  
                  <div className="flex items-center mt-2 space-x-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      {doctor.availability}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="w-4 h-4 mr-1" />
                      {doctor.patients} patients
                    </div>
                    <div className="flex items-center text-sm text-yellow-600">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      {doctor.rating}
                    </div>
                  </div>

                  <div className="flex items-center mt-3 space-x-4">
                    <a href={`tel:${doctor.phone}`} className="flex items-center text-sm text-gray-600 hover:text-blue-600">
                      <Phone className="w-4 h-4 mr-1" />
                      Call
                    </a>
                    <a href={`mailto:${doctor.email}`} className="flex items-center text-sm text-gray-600 hover:text-blue-600">
                      <Mail className="w-4 h-4 mr-1" />
                      Email
                    </a>
                    <button className="flex items-center text-sm text-gray-600 hover:text-blue-600">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-6">
        <button className="w-full py-3 bg-white border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center">
          <CheckCircle className="w-5 h-5 mr-2" />
          View All Doctors Schedule
        </button>
      </div>
    </div>
  );
};

export default AvailableDoctors;