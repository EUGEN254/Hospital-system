import React from "react";
import { Calendar, Clock, MapPin, Users, Bell, MoreVertical, Plus } from "lucide-react";

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Cardiology Department Meeting",
      date: "Today",
      time: "2:00 PM - 3:30 PM",
      location: "Conference Room A",
      attendees: 12,
      type: "meeting",
      priority: "high"
    },
    {
      id: 2,
      title: "Medical Conference 2024",
      date: "Dec 15",
      time: "9:00 AM - 5:00 PM",
      location: "Grand Convention Center",
      attendees: 200,
      type: "conference",
      priority: "medium"
    },
    {
      id: 3,
      title: "Training: New EHR System",
      date: "Dec 18",
      time: "10:00 AM - 12:00 PM",
      location: "Training Room 3",
      attendees: 25,
      type: "training",
      priority: "high"
    },
    {
      id: 4,
      title: "Monthly Staff Review",
      date: "Dec 20",
      time: "4:00 PM - 5:00 PM",
      location: "Admin Office",
      attendees: 8,
      type: "meeting",
      priority: "medium"
    },
    {
      id: 5,
      title: "Medical Equipment Demo",
      date: "Dec 22",
      time: "11:00 AM - 1:00 PM",
      location: "Lab Room 2",
      attendees: 15,
      type: "demo",
      priority: "low"
    }
  ];

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'meeting':
        return 'bg-blue-100 text-blue-800';
      case 'conference':
        return 'bg-purple-100 text-purple-800';
      case 'training':
        return 'bg-green-100 text-green-800';
      case 'demo':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Calendar Preview */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900">December 2024</h3>
          <div className="flex space-x-2">
            <button className="p-2 hover:bg-white rounded-lg transition-colors">
              &lt;
            </button>
            <button className="p-2 hover:bg-white rounded-lg transition-colors">
              &gt;
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
            <div key={index} className="text-sm font-medium text-gray-600 py-1">
              {day}
            </div>
          ))}
          {Array.from({ length: 31 }).map((_, index) => (
            <div
              key={index}
              className={`py-1 text-sm ${
                index + 1 === 12
                  ? 'bg-blue-600 text-white rounded-full'
                  : index + 1 === 15 || index + 1 === 18 || index + 1 === 20 || index + 1 === 22
                  ? 'bg-blue-100 text-blue-600 rounded-full'
                  : 'text-gray-700 hover:bg-gray-100 rounded-full'
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events List */}
      <div className="space-y-4">
        <h3 className="font-bold text-gray-900 text-lg">Upcoming Events</h3>
        {events.map((event) => (
          <div
            key={event.id}
            className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-semibold text-gray-900">{event.title}</h4>
                <div className="flex items-center mt-2 space-x-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getEventTypeColor(event.type)}`}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(event.priority)}`}>
                    {event.priority}
                  </span>
                </div>
              </div>
              <button className="p-1 hover:bg-gray-100 rounded">
                <MoreVertical className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-2" />
                {event.date} • {event.time}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                {event.location}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Users className="w-4 h-4 mr-2" />
                {event.attendees} attendees
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
              <button className="flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium">
                <Bell className="w-4 h-4 mr-1" />
                Set Reminder
              </button>
              <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Event Card */}
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 hover:bg-blue-50 transition-colors cursor-pointer">
        <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
          <Plus className="w-6 h-6 text-blue-600" />
        </div>
        <h4 className="font-semibold text-gray-900 mb-2">Add New Event</h4>
        <p className="text-sm text-gray-600">Schedule meetings, conferences, and training sessions</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900">5</p>
          <p className="text-sm text-gray-600">Events this week</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900">2</p>
          <p className="text-sm text-gray-600">High priority</p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;