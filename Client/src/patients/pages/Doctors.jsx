import React, { useState } from 'react';
import { Search, Filter, Star, MapPin, Phone, Mail, Calendar, Award, Clock, Users, ChevronRight, Shield, CheckCircle } from 'lucide-react';

// Mock data for doctors
const initialDoctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    subSpecialty: "Interventional Cardiology",
    rating: 4.8,
    reviews: 247,
    experience: 12,
    location: "New York Heart Center, NY",
    availability: "Today 2:00 PM - 6:00 PM",
    phone: "(212) 555-1234",
    email: "s.johnson@medical.com",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
    consultationFee: "$200",
    insurance: ["Aetna", "Blue Cross", "UnitedHealth"],
    languages: ["English", "Spanish"],
    education: "Harvard Medical School",
    awards: ["Top Doctor 2023", "Excellence in Cardiology"],
    nextAvailable: "Today at 2:00 PM"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    subSpecialty: "Movement Disorders",
    rating: 4.9,
    reviews: 312,
    experience: 15,
    location: "Neurology Institute, Los Angeles, CA",
    availability: "Tomorrow 9:00 AM - 4:00 PM",
    phone: "(310) 555-5678",
    email: "m.chen@medical.com",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400",
    consultationFee: "$250",
    insurance: ["Cigna", "Blue Cross", "Medicare"],
    languages: ["English", "Mandarin"],
    education: "Stanford University School of Medicine",
    awards: ["Neurology Innovator Award", "Patient Choice Award"],
    nextAvailable: "Tomorrow at 9:00 AM"
  },
  {
    id: 3,
    name: "Dr. Emily Williams",
    specialty: "Pediatrician",
    subSpecialty: "Child Development",
    rating: 4.7,
    reviews: 189,
    experience: 8,
    location: "Children's Hospital, Chicago, IL",
    availability: "Today 10:00 AM - 7:00 PM",
    phone: "(312) 555-9012",
    email: "e.williams@medical.com",
    image: "https://images.unsplash.com/photo-1594824434340-7e7dfc37cabb?w=400",
    consultationFee: "$180",
    insurance: ["Aetna", "Humana", "Medicaid"],
    languages: ["English", "French"],
    education: "Johns Hopkins School of Medicine",
    awards: ["Pediatric Excellence Award"],
    nextAvailable: "Today at 3:30 PM"
  },
  {
    id: 4,
    name: "Dr. Robert Garcia",
    specialty: "Orthopedic Surgeon",
    subSpecialty: "Sports Medicine",
    rating: 4.6,
    reviews: 421,
    experience: 20,
    location: "Sports Medicine Center, Miami, FL",
    availability: "Next Week",
    phone: "(305) 555-3456",
    email: "r.garcia@medical.com",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400",
    consultationFee: "$300",
    insurance: ["UnitedHealth", "Cigna", "Medicare"],
    languages: ["English", "Spanish"],
    education: "Mayo Clinic School of Medicine",
    awards: ["Best Orthopedic Surgeon 2022", "Sports Medicine Pioneer"],
    nextAvailable: "Monday at 10:00 AM"
  },
  {
    id: 5,
    name: "Dr. Lisa Patel",
    specialty: "Dermatologist",
    subSpecialty: "Cosmetic Dermatology",
    rating: 4.9,
    reviews: 298,
    experience: 10,
    location: "Skin Care Center, Seattle, WA",
    availability: "Today 11:00 AM - 8:00 PM",
    phone: "(206) 555-7890",
    email: "l.patel@medical.com",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400",
    consultationFee: "$220",
    insurance: ["Aetna", "Blue Cross", "Cigna"],
    languages: ["English", "Hindi", "Gujarati"],
    education: "Yale School of Medicine",
    awards: ["Dermatology Leadership Award", "Patient Satisfaction Award"],
    nextAvailable: "Today at 4:00 PM"
  },
  {
    id: 6,
    name: "Dr. James Wilson",
    specialty: "Psychiatrist",
    subSpecialty: "Anxiety & Depression",
    rating: 4.5,
    reviews: 176,
    experience: 14,
    location: "Mental Wellness Center, Boston, MA",
    availability: "Tomorrow 8:00 AM - 5:00 PM",
    phone: "(617) 555-2345",
    email: "j.wilson@medical.com",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400",
    consultationFee: "$280",
    insurance: ["Blue Cross", "UnitedHealth", "Aetna"],
    languages: ["English"],
    education: "Columbia University Medical Center",
    awards: ["Mental Health Advocate Award"],
    nextAvailable: "Tomorrow at 2:00 PM"
  }
];

const specialties = [
  "All Specialties",
  "Cardiologist",
  "Neurologist",
  "Pediatrician",
  "Orthopedic Surgeon",
  "Dermatologist",
  "Psychiatrist"
];

const Doctors = () => {
  const [doctors, setDoctors] = useState(initialDoctors);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState('card'); // 'card', 'compact', or 'detailed'
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const filteredDoctors = doctors
    .filter(doctor => {
      const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doctor.subSpecialty.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSpecialty = selectedSpecialty === 'All Specialties' || 
                              doctor.specialty === selectedSpecialty;
      return matchesSearch && matchesSpecialty;
    })
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'experience') return b.experience - a.experience;
      if (sortBy === 'reviews') return b.reviews - a.reviews;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  const totalDoctors = filteredDoctors.length;
  const averageRating = filteredDoctors.length > 0 
    ? (filteredDoctors.reduce((sum, doctor) => sum + doctor.rating, 0) / filteredDoctors.length).toFixed(1)
    : "0.0";

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Professional Header with Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                <span>Home</span>
                <ChevronRight className="w-4 h-4" />
                <span>Healthcare</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-blue-600 font-medium">Doctors</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Find Your Medical Specialist
              </h1>
              <p className="text-gray-600 max-w-2xl">
                Connect with board-certified doctors who are leaders in their fields. 
                All physicians are verified and accept most insurance plans.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg">
                <Shield className="w-5 h-5 mr-2" />
                <span className="font-medium">All doctors verified</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">{totalDoctors}</p>
                  <p className="text-sm text-gray-600">Verified Doctors</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <div className="flex items-center">
                <Star className="w-8 h-8 text-green-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">{averageRating}</p>
                  <p className="text-sm text-gray-600">Avg. Rating</p>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4">
              <div className="flex items-center">
                <Clock className="w-8 h-8 text-purple-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {doctors.filter(d => d.availability.includes('Today')).length}
                  </p>
                  <p className="text-sm text-gray-600">Available Today</p>
                </div>
              </div>
            </div>
            <div className="bg-orange-50 rounded-xl p-4">
              <div className="flex items-center">
                <Award className="w-8 h-8 text-orange-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">24/7</p>
                  <p className="text-sm text-gray-600">Telehealth Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Advanced Controls */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search Doctors
                </label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by name, specialty, or condition..."
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specialty
                </label>
                <div className="relative">
                  <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <select
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all"
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                  >
                    {specialties.map(specialty => (
                      <option key={specialty} value={specialty}>{specialty}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sort By
                </label>
                <select
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="rating">Highest Rated</option>
                  <option value="experience">Most Experienced</option>
                  <option value="reviews">Most Reviews</option>
                  <option value="name">Alphabetical</option>
                </select>
              </div>
            </div>

            {/* View Toggle with Labels */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">View as:</span>
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      viewMode === 'card' 
                        ? 'bg-white shadow-sm text-blue-600' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    onClick={() => setViewMode('card')}
                  >
                    Card View
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      viewMode === 'compact' 
                        ? 'bg-white shadow-sm text-blue-600' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    onClick={() => setViewMode('compact')}
                  >
                    Compact View
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      viewMode === 'detailed' 
                        ? 'bg-white shadow-sm text-blue-600' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    onClick={() => setViewMode('detailed')}
                  >
                    Detailed View
                  </button>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                Showing {filteredDoctors.length} of {doctors.length} doctors
              </div>
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className={
          viewMode === 'card' ? 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6' :
          viewMode === 'compact' ? 'space-y-3' :
          'space-y-8'
        }>
          {filteredDoctors.map(doctor => (
            <DoctorCard 
              key={doctor.id} 
              doctor={doctor} 
              viewMode={viewMode} 
              onSelect={setSelectedDoctor}
            />
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-20 h-20 text-gray-300 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">No matching doctors found</h3>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Try broadening your search criteria or contact our support team for assistance.
            </p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedSpecialty('All Specialties');
              }}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Trust Signals */}
        <div className="mt-16">
          <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Why Choose Our Doctors?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Board Certified</h4>
                <p className="text-gray-600 text-sm">
                  All physicians are board-certified and regularly credentialed
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Verified Reviews</h4>
                <p className="text-gray-600 text-sm">
                  All patient reviews are verified for authenticity and accuracy
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Same-Day Appointments</h4>
                <p className="text-gray-600 text-sm">
                  Get seen by a doctor today with our same-day appointment system
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DoctorCard = ({ doctor, viewMode, onSelect }) => {
  if (viewMode === 'compact') {
    return (
      <div className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
            />
            <div>
              <h3 className="font-bold text-gray-900">{doctor.name}</h3>
              <p className="text-blue-600 text-sm font-medium">{doctor.specialty}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center mb-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
              <span className="font-semibold">{doctor.rating}</span>
              <span className="text-gray-500 text-sm ml-1">({doctor.reviews})</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="w-4 h-4 mr-1" />
              {doctor.nextAvailable}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (viewMode === 'detailed') {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-8">
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="lg:w-1/3">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-64 lg:h-full object-cover rounded-2xl"
              />
            </div>
            <div className="lg:w-2/3">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                  <p className="text-blue-600 font-semibold text-lg mb-1">{doctor.specialty}</p>
                  <p className="text-gray-600 mb-2">{doctor.subSpecialty}</p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                      <span className="font-bold">{doctor.rating}</span>
                      <span className="text-gray-500 ml-1">({doctor.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Award className="w-5 h-5 mr-1" />
                      {doctor.experience} years experience
                    </div>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0">
                  <span className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-lg font-medium">
                    <Calendar className="w-5 h-5 mr-2" />
                    {doctor.nextAvailable}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Education & Credentials</h4>
                  <p className="text-gray-600">{doctor.education}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {doctor.awards.map((award, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                        {award}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-2 shrink-0" />
                      {doctor.location}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Accepted Insurance</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.insurance.map((ins, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">
                          {ins}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between pt-6 border-t border-gray-100">
                  <div>
                    <p className="text-3xl font-bold text-gray-900">{doctor.consultationFee}</p>
                    <p className="text-gray-500">Consultation fee</p>
                  </div>
                  <div className="flex space-x-3 mt-4 md:mt-0">
                    <button className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                      View Full Profile
                    </button>
                    <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default card view
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-semibold text-gray-900">{doctor.consultationFee}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
            <p className="text-blue-600 font-semibold">{doctor.specialty}</p>
            <p className="text-gray-500 text-sm mt-1">{doctor.subSpecialty}</p>
          </div>
          <button 
            onClick={() => onSelect(doctor)}
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
              <span className="font-bold">{doctor.rating}</span>
              <span className="text-gray-500 text-sm ml-1">({doctor.reviews} reviews)</span>
            </div>
            <span className="text-gray-600 text-sm">{doctor.experience} years exp.</span>
          </div>

          <div className="flex items-center text-gray-600">
            <MapPin className="w-5 h-5 mr-2 shrink-0" />
            <span className="text-sm truncate">{doctor.location}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Clock className="w-5 h-5 mr-2 shrink-0" />
            <span className="text-sm font-medium text-green-600">{doctor.nextAvailable}</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Accepted Insurance</h4>
          <div className="flex flex-wrap gap-2">
            {doctor.insurance.slice(0, 2).map((ins, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                {ins}
              </span>
            ))}
            {doctor.insurance.length > 2 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                +{doctor.insurance.length - 2} more
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div className="text-sm text-gray-500">
            {doctor.languages.length} language{doctor.languages.length !== 1 ? 's' : ''}
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition-colors">
              Contact
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;