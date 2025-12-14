import React from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle, Users } from "lucide-react";

const ContactUsPage = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      title: "Emergency Line",
      details: ["(555) 123-4567", "Available 24/7"],
      description: "Immediate medical assistance"
    },
    {
      icon: <Mail className="w-6 h-6 text-green-600" />,
      title: "Email Support",
      details: ["info@medicalcenter.com", "support@medicalcenter.com"],
      description: "Response within 2 hours"
    },
    {
      icon: <MapPin className="w-6 h-6 text-green-600" />,
      title: "Visit Us",
      details: ["123 Medical Center Drive", "Health City, HC 12345"],
      description: "Main Hospital Campus"
    },
    {
      icon: <Clock className="w-6 h-6 text-green-600" />,
      title: "Working Hours",
      details: ["Mon - Fri: 8:00 AM - 8:00 PM", "Sat: 9:00 AM - 5:00 PM"],
      description: "Emergency services: 24/7"
    },
  ];

  const departments = [
    { name: "Emergency", phone: "(555) 111-2222" },
    { name: "Appointments", phone: "(555) 333-4444" },
    { name: "Billing", phone: "(555) 555-6666" },
    { name: "Medical Records", phone: "(555) 777-8888" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Our Medical Center</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              We're here to help. Get in touch with our medical team for any questions, concerns, or appointment scheduling.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                {info.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{info.title}</h3>
              <div className="space-y-1 mb-3">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-700">{detail}</p>
                ))}
              </div>
              <p className="text-sm text-gray-600">{info.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Department
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>General Inquiry</option>
                  <option>Appointments</option>
                  <option>Billing</option>
                  <option>Emergency</option>
                  <option>Medical Records</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Describe your concern or question..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Department Contacts */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Department Contacts</h2>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="font-medium text-gray-900">{dept.name}</span>
                    </div>
                    <a href={`tel:${dept.phone}`} className="text-green-600 hover:text-green-700 font-medium">
                      {dept.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Help</h2>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Emergency Services</h4>
                      <p className="text-sm text-gray-600">
                        For life-threatening emergencies, call 911 or visit our Emergency Department immediately.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start">
                    <MessageSquare className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Online Consultation</h4>
                      <p className="text-sm text-gray-600">
                        Schedule virtual appointments with our specialists through the patient portal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Preview */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h2>
              <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600">123 Medical Center Drive</p>
                  <p className="text-gray-600">Health City, HC 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;