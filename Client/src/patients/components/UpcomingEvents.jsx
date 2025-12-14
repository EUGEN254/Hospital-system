import React, { useState } from "react";
import { Calendar, Clock, MapPin, Users, Bell, MoreVertical, Plus, ChevronLeft, ChevronRight } from "lucide-react";

const UpcomingEvents = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 2;

  const events = [
    {
      id: 1,
      title: "Cardiology Department Meeting",
      date: "Today",
      time: "2:00 PM - 3:30 PM",
      location: "Conference Room A",
      attendees: 12,
      type: "meeting",
      priority: "high",
      duration: "1h 30m"
    },
    {
      id: 2,
      title: "Medical Conference 2024",
      date: "Dec 15",
      time: "9:00 AM - 5:00 PM",
      location: "Grand Convention Center",
      attendees: 200,
      type: "conference",
      priority: "medium",
      duration: "8h"
    },
    {
      id: 3,
      title: "Training: New EHR System",
      date: "Dec 18",
      time: "10:00 AM - 12:00 PM",
      location: "Training Room 3",
      attendees: 25,
      type: "training",
      priority: "high",
      duration: "2h"
    },
    {
      id: 4,
      title: "Monthly Staff Review",
      date: "Dec 20",
      time: "4:00 PM - 5:00 PM",
      location: "Admin Office",
      attendees: 8,
      type: "meeting",
      priority: "medium",
      duration: "1h"
    },
    {
      id: 5,
      title: "Medical Equipment Demo",
      date: "Dec 22",
      time: "11:00 AM - 1:00 PM",
      location: "Lab Room 2",
      attendees: 15,
      type: "demo",
      priority: "low",
      duration: "2h"
    }
  ];

  const getEventTypeBadge = (type) => {
    const styles = {
      meeting: "bg-blue-100 text-blue-800",
      conference: "bg-purple-100 text-purple-800",
      training: "bg-emerald-100 text-emerald-800",
      demo: "bg-amber-100 text-amber-800"
    };
    
    return (
      <span className={`px-2 py-0.5 rounded text-xs font-medium ${styles[type] || 'bg-gray-100 text-gray-800'}`}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
    );
  };

  const getPriorityBadge = (priority) => {
    const styles = {
      high: "bg-red-100 text-red-800",
      medium: "bg-yellow-100 text-yellow-800",
      low: "bg-green-100 text-green-800"
    };
    
    return (
      <span className={`px-2 py-0.5 rounded text-xs font-medium ${styles[priority] || 'bg-gray-100 text-gray-800'}`}>
        {priority}
      </span>
    );
  };

  // Calculate pagination
  const totalPages = Math.ceil(events.length / eventsPerPage);
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="space-y-6">
      {/* Calendar Preview */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900 text-sm">December 2024</h3>
          <div className="flex space-x-2">
            <button className="p-1.5 hover:bg-white rounded-lg transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-1.5 hover:bg-white rounded-lg transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
            <div key={index} className="text-xs font-medium text-gray-600 py-1">
              {day}
            </div>
          ))}
          {Array.from({ length: 31 }).map((_, index) => (
            <div
              key={index}
              className={`py-1 text-xs ${
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

      {/* Upcoming Events Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-900 text-base">Upcoming Events</h3>
          <div className="text-xs text-gray-600">
            Page {currentPage} of {totalPages}
          </div>
        </div>
        
        {/* Table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          {/* Table Header */}
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-6">
                <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Event</span>
              </div>
              <div className="col-span-3">
                <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Time</span>
              </div>
              <div className="col-span-2">
                <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</span>
              </div>
              <div className="col-span-1">
                <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider"></span>
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {currentEvents.map((event) => (
              <div 
                key={event.id} 
                className="px-4 py-3 hover:bg-gray-50 transition-colors duration-150"
              >
                <div className="grid grid-cols-12 gap-3 items-center">
                  {/* Event Column */}
                  <div className="col-span-6">
                    <h4 className="text-sm font-medium text-gray-900 mb-1 line-clamp-1">{event.title}</h4>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {getEventTypeBadge(event.type)}
                      {getPriorityBadge(event.priority)}
                    </div>
                    <div className="flex items-center text-xs text-gray-600 mb-1">
                      <MapPin className="w-3 h-3 mr-1.5 text-gray-400" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-600">
                      <Users className="w-3 h-3 mr-1.5 text-gray-400" />
                      <span>{event.attendees} attendees • {event.duration}</span>
                    </div>
                  </div>

                  {/* Time Column */}
                  <div className="col-span-3">
                    <div className="flex items-center mb-1">
                      <Calendar className="w-3 h-3 text-gray-400 mr-1.5" />
                      <span className="text-sm font-medium text-gray-900">{event.date}</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-600">
                      <Clock className="w-3 h-3 mr-1.5 text-gray-400" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  {/* Status Column */}
                  <div className="col-span-2">
                    <button className="flex items-center text-xs text-blue-600 hover:text-blue-800 mb-1">
                      <Bell className="w-3 h-3 mr-1" />
                      Reminder
                    </button>
                    <button className="px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors duration-150 w-full">
                      Join
                    </button>
                  </div>

                  {/* Actions Column */}
                  <div className="col-span-1">
                    <div className="flex justify-end">
                      <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors duration-150">
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-600">
                Showing <span className="font-medium">{indexOfFirstEvent + 1}-{Math.min(indexOfLastEvent, events.length)}</span> of <span className="font-medium">{events.length}</span> events
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className={`p-1.5 rounded-lg ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-600 hover:bg-white hover:border-gray-300'}`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-2 py-1 text-xs rounded-lg transition-colors duration-150 ${
                      currentPage === page 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-700 hover:bg-white hover:border-gray-300'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button 
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className={`p-1.5 rounded-lg ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-600 hover:bg-white hover:border-gray-300'}`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Event Card */}
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 hover:border-blue-400 hover:bg-blue-50 transition-colors duration-150 cursor-pointer">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
            <Plus className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-900">Add New Event</h4>
            <p className="text-xs text-gray-600 mt-0.5">Schedule meetings, conferences, and training sessions</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default UpcomingEvents;