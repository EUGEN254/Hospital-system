import React from "react";
import { Heart, Award, Users, Target, Shield, Clock, Star, ChevronRight } from "lucide-react";

const AboutUsPage = () => {
  const stats = [
    { value: "25+", label: "Years of Excellence", icon: <Award className="w-7 h-7" /> },
    { value: "200+", label: "Medical Professionals", icon: <Users className="w-7 h-7" /> },
    { value: "50,000+", label: "Patients Treated", icon: <Heart className="w-7 h-7" /> },
    { value: "98%", label: "Patient Satisfaction", icon: <Star className="w-7 h-7" /> },
  ];

  const values = [
    {
      icon: <Heart className="w-5 h-5 text-green-600" />,
      title: "Patient-Centered Care",
      description: "Your health and comfort are our top priorities in every decision we make."
    },
    {
      icon: <Shield className="w-5 h-5 text-green-600" />,
      title: "Safety First",
      description: "We maintain the highest standards of safety and hygiene protocols."
    },
    {
      icon: <Target className="w-5 h-5 text-green-600" />,
      title: "Innovation",
      description: "Embracing cutting-edge technology and medical advancements."
    },
    {
      icon: <Clock className="w-5 h-5 text-green-600" />,
      title: "Accessibility",
      description: "Providing timely care when you need it most, 24/7 emergency services."
    },
  ];

  const departments = [
    "Cardiology",
    "Neurology",
    "Oncology",
    "Orthopedics",
    "Pediatrics",
    "Dermatology",
    "Emergency Medicine",
    "Radiology"
  ];

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Compassionate Care, Advanced Medicine</h1>
            <p className="text-base sm:text-lg opacity-90">
              For over 25 years, we've been dedicated to providing exceptional healthcare services with compassion, expertise, and innovation.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        {/* Stats */}
        <section className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 text-center hover:shadow transition-shadow">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3 text-green-600">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-green-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h2>
              <p className="text-sm text-gray-600 mb-4">
                To deliver exceptional, patient-centered healthcare through compassionate service, medical excellence, and innovative solutions that improve the health and well-being of our community.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Provide accessible, high-quality medical care</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Advance medical knowledge through research</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm">Train the next generation of healthcare professionals</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h2>
              <p className="text-sm text-gray-600 mb-4">
                To be recognized as the leading healthcare institution in the region, known for groundbreaking medical innovations, outstanding patient outcomes, and a culture of continuous improvement and compassion.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">2025 Strategic Goals</h3>
                <ul className="space-y-1.5">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                    <span className="text-xs">Expand telemedicine services by 40%</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                    <span className="text-xs">Reduce patient wait times by 30%</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                    <span className="text-xs">Achieve 99% patient satisfaction rate</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Core Values</h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every interaction we have with our patients and community.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow transition-shadow">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-3">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1.5">{value.title}</h3>
                <p className="text-xs text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Departments */}
        <section className="mb-12">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Medical Specialties</h2>
              <p className="text-sm text-gray-600">Comprehensive care across all major medical disciplines</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {departments.map((dept, index) => (
                <div key={index} className="p-3 bg-gray-50 hover:bg-green-50 rounded transition-colors group">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 group-hover:scale-125 transition-transform"></div>
                    <span className="text-sm font-medium text-gray-900 group-hover:text-green-700">{dept}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team Preview */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Meet Our Leadership</h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-8">
              Our team of experienced medical professionals and administrators work together to ensure the highest quality of care.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Dr. Sarah Johnson", role: "Medical Director", exp: "25 years" },
                { name: "Dr. Michael Chen", role: "Chief of Surgery", exp: "20 years" },
                { name: "Dr. Emily Wilson", role: "Chief Medical Officer", exp: "18 years" }
              ].map((leader, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-lg font-bold">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-green-600 font-medium text-sm mb-1.5">{leader.role}</p>
                  <p className="text-xs text-gray-600">Experience: {leader.exp}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUsPage;