import React, { useState } from "react";
import { 
  Calendar, 
  Video, 
  FileText, 
  Bell, 
  Shield, 
  Zap, 
  Users, 
  Cloud,
  CheckCircle,
  ArrowRight,
  Lock,
  MessageSquare,
  BarChart,
  Smartphone
} from "lucide-react";

const FeaturesPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const features = [
    {
      category: "appointment",
      icon: <Calendar className="w-6 h-6 text-green-600" />,
      title: "Smart Appointment Scheduling",
      description: "Book, reschedule, or cancel appointments with real-time availability.",
      highlights: ["Real-time doctor availability", "Automated reminders", "Waitlist management", "Telemedicine integration"]
    },
    {
      category: "patient",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      title: "Electronic Health Records",
      description: "Secure, centralized access to patient medical history and records.",
      highlights: ["Digital prescriptions", "Lab results access", "Medical history tracking", "Secure data storage"]
    },
    {
      category: "communication",
      icon: <MessageSquare className="w-6 h-6 text-purple-600" />,
      title: "Secure Messaging",
      description: "Private communication between patients and healthcare providers.",
      highlights: ["End-to-end encryption", "File sharing capability", "Read receipts", "24/7 availability"]
    },
    {
      category: "telemedicine",
      icon: <Video className="w-6 h-6 text-red-600" />,
      title: "Virtual Consultations",
      description: "High-quality video consultations from the comfort of your home.",
      highlights: ["HD video quality", "Screen sharing", "Prescription writing", "Recording capability"]
    },
    {
      category: "security",
      icon: <Shield className="w-6 h-6 text-amber-600" />,
      title: "Advanced Security",
      description: "Bank-level security protocols to protect sensitive medical data.",
      highlights: ["HIPAA compliance", "Two-factor authentication", "Data encryption", "Regular audits"]
    },
    {
      category: "analytics",
      icon: <BarChart className="w-6 h-6 text-indigo-600" />,
      title: "Health Analytics",
      description: "Comprehensive health tracking and personalized insights.",
      highlights: ["Health trends analysis", "Personalized reports", "Predictive analytics", "Goal tracking"]
    },
    {
      category: "mobile",
      icon: <Smartphone className="w-6 h-6 text-pink-600" />,
      title: "Mobile App",
      description: "Full-featured mobile application for healthcare on the go.",
      highlights: ["iOS & Android support", "Offline access", "Biometric login", "Push notifications"]
    },
    {
      category: "integration",
      icon: <Cloud className="w-6 h-6 text-cyan-600" />,
      title: "System Integration",
      description: "Seamless integration with lab systems and medical devices.",
      highlights: ["Lab system integration", "Wearable device sync", "Pharmacy connectivity", "Insurance API"]
    },
  ];

  const categories = [
    { id: "all", label: "All Features", count: features.length },
    { id: "appointment", label: "Appointment", count: features.filter(f => f.category === "appointment").length },
    { id: "patient", label: "Patient Portal", count: features.filter(f => f.category === "patient").length },
    { id: "communication", label: "Communication", count: features.filter(f => f.category === "communication").length },
    { id: "telemedicine", label: "Telemedicine", count: features.filter(f => f.category === "telemedicine").length },
  ];

  const filteredFeatures = activeCategory === "all" 
    ? features 
    : features.filter(feature => feature.category === activeCategory);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-3 py-1.5 bg-white/20 rounded-full text-xs mb-4">
              <Zap className="w-3 h-3 mr-1.5" />
              Powered by Innovation
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Advanced Healthcare Features</h1>
            <p className="text-base sm:text-lg opacity-90">
              Discover the comprehensive suite of tools and features designed to enhance patient care, streamline operations, and improve healthcare outcomes.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center text-sm ${
                  activeCategory === category.id
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category.label}
                <span className={`ml-2 px-1.5 py-0.5 text-xs rounded-full ${
                  activeCategory === category.id
                    ? "bg-white/20"
                    : "bg-gray-100"
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-50 to-white flex items-center justify-center mb-4 border border-gray-100">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
                
                <div className="space-y-2 mb-6">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <button className="flex items-center text-green-600 hover:text-green-700 font-medium text-sm">
                  Learn More
                  <ArrowRight className="w-3 h-3 ml-1.5" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Key Benefits</h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              How our platform transforms healthcare delivery and patient experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">For Patients</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>24/7 access to medical records</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Reduced wait times</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Personalized health insights</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">For Doctors</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                  <span>Streamlined workflows</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                  <span>Better patient management</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                  <span>Reduced administrative tasks</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">For Healthcare</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                  <span>Improved operational efficiency</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                  <span>Enhanced data security</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                  <span>Better resource utilization</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl p-8 mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-2/3 mb-6 lg:mb-0">
              <div className="inline-flex items-center px-3 py-1.5 bg-white/10 rounded-full text-xs mb-4">
                <Lock className="w-3 h-3 mr-1.5" />
                Security & Compliance
              </div>
              <h2 className="text-2xl font-bold mb-3">Enterprise-Grade Security</h2>
              <p className="text-gray-300 text-sm mb-4">
                We adhere to the highest security standards and compliance requirements to ensure your data remains protected.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["HIPAA Compliant", "SOC 2 Type II", "GDPR Ready", "ISO 27001 Certified"].map((cert, idx) => (
                  <div key={idx} className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-xs font-medium">{cert}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center opacity-20">
                <Shield className="w-20 h-20" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Transform Your Healthcare Experience?</h2>
          <p className="text-sm text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of healthcare providers and patients who trust our platform for better healthcare delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center text-sm">
              Request a Demo
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
            <button className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition-colors border border-gray-300 text-sm">
              View Documentation
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FeaturesPage;