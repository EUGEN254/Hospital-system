import React, { useState } from "react";
import { Search, Filter, Phone, Mail, MessageSquare, Star, MapPin, Calendar, ChevronRight, User, Award, Clock } from "lucide-react";

const DoctorsPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      experience: "15 years",
      rating: 4.8,
      reviews: 234,
      availability: "Available Today",
      location: "Main Hospital, Floor 3",
      phone: "(555) 123-4567",
      email: "s.johnson@medical.com",
      education: "MD, Harvard Medical School",
      imageColor: "bg-blue-100 text-blue-600",
      status: "available"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      experience: "12 years",
      rating: 4.9,
      reviews: 189,
      availability: "Tomorrow 9 AM",
      location: "Neuro Center, Building B",
      phone: "(555) 234-5678",
      email: "m.chen@medical.com",
      education: "MD, Stanford University",
      imageColor: "bg-green-100 text-green-600",
      status: "busy"
    },
    {
      id: 3,
      name: "Dr. Emily Wilson",
      specialty: "Pediatrics",
      experience: "8 years",
      rating: 4.7,
      reviews: 156,
      availability: "Available Now",
      location: "Children's Wing, Floor 1",
      phone: "(555) 345-6789",
      email: "e.wilson@medical.com",
      education: "MD, Johns Hopkins",
      imageColor: "bg-purple-100 text-purple-600",
      status: "available"
    },
    {
      id: 4,
      name: "Dr. Robert Davis",
      specialty: "Orthopedics",
      experience: "20 years",
      rating: 4.6,
      reviews: 312,
      availability: "Next Week",
      location: "Surgery Center, Floor 2",
      phone: "(555) 456-7890",
      email: "r.davis@medical.com",
      education: "MD, Mayo Clinic",
      imageColor: "bg-amber-100 text-amber-600",
      status: "available"
    },
    {
      id: 5,
      name: "Dr. Lisa Martinez",
      specialty: "Dermatology",
      experience: "10 years",
      rating: 4.9,
      reviews: 278,
      availability: "Available Today",
      location: "Skin Clinic, Building C",
      phone: "(555) 567-8901",
      email: "l.martinez@medical.com",
      education: "MD, UCLA",
      imageColor: "bg-pink-100 text-pink-600",
      status: "available"
    },
  ];

  const specialties = ["All", "Cardiology", "Neurology", "Pediatrics", "Orthopedics", "Dermatology", "Surgery", "Radiology"];

  const filteredDoctors = doctors.filter(doctor => {
    if (activeTab !== "all" && doctor.specialty !== activeTab) return false;
    if (searchTerm && !doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  const getStatusBadge = (status) => {
    const styles = {
      available: "bg-green-100 text-green-800",
      busy: "bg-yellow-100 text-yellow-800",
      offline: "bg-gray-100 text-gray-800"
    };
    const labels = {
      available: "Available",
      busy: "In Session",
      offline: "Offline"
    };
    return <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}>{labels[status]}</span>;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Medical Team</h1>
          <p className="text-gray-600 mt-2">Find and connect with our expert healthcare professionals</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search doctors by name or specialty..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-colors">
                <Filter className="w-5 h-5 mr-2" />
                Filter
              </button>
              <button className="flex items-center px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </button>
            </div>
          </div>

          {/* Specialty Tabs */}
          <div className="flex flex-wrap gap-2 mt-6">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setActiveTab(specialty === "All" ? "all" : specialty)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  (activeTab === "all" && specialty === "All") || activeTab === specialty
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="p-6">
                {/* Doctor Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-16 h-16 rounded-xl ${doctor.imageColor} flex items-center justify-center mr-4`}>
                      <User className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{doctor.name}</h3>
                      <p className="text-green-600 font-medium">{doctor.specialty}</p>
                    </div>
                  </div>
                  {getStatusBadge(doctor.status)}
                </div>

                {/* Ratings and Experience */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-2 font-semibold text-gray-900">{doctor.rating}</span>
                    <span className="ml-1 text-sm text-gray-600">({doctor.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Award className="w-5 h-5 mr-2" />
                    <span className="text-sm">{doctor.experience}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-3 text-gray-400" />
                    <span className="text-sm">{doctor.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-3 text-gray-400" />
                    <span className="text-sm">{doctor.availability}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Education:</span> {doctor.education}
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-green-50 text-green-600 rounded-lg transition-colors" title="Call">
                      <Phone className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-green-50 text-green-600 rounded-lg transition-colors" title="Email">
                      <Mail className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-green-50 text-green-600 rounded-lg transition-colors" title="Message">
                      <MessageSquare className="w-5 h-5" />
                    </button>
                  </div>
                  <button className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-medium">
                    View Profile
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Doctors</p>
                <p className="text-2xl font-bold text-gray-900">45</p>
              </div>
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Average Rating</p>
                <p className="text-2xl font-bold text-gray-900">4.8</p>
              </div>
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Available Today</p>
                <p className="text-2xl font-bold text-gray-900">32</p>
              </div>
              <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Specialties</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;