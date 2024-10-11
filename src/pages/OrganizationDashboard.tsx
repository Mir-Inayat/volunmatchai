import React from 'react';
import { Users, Calendar, BarChart, Plus } from 'lucide-react';

const OrganizationDashboard: React.FC = () => {
  // Mock data
  const organizationName = "Community Helpers Inc.";
  const activeVolunteers = 45;
  const upcomingEvents = 3;
  const totalHoursContributed = 1250;

  const recentApplications = [
    { id: 1, name: "John Smith", opportunity: "Food Drive Coordinator", date: "2024-03-10" },
    { id: 2, name: "Emily Johnson", opportunity: "Web Development Workshop", date: "2024-03-12" },
    { id: 3, name: "Michael Brown", opportunity: "Park Cleanup Event", date: "2024-03-15" },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome, {organizationName}!</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition duration-300">
          <Plus className="w-5 h-5 mr-2" /> Create Opportunity
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="w-8 h-8 text-blue-600 mb-2" />
          <h2 className="text-xl font-semibold mb-1">Active Volunteers</h2>
          <p className="text-3xl font-bold text-blue-600">{activeVolunteers}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Calendar className="w-8 h-8 text-green-600 mb-2" />
          <h2 className="text-xl font-semibold mb-1">Upcoming Events</h2>
          <p className="text-3xl font-bold text-green-600">{upcomingEvents}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <BarChart className="w-8 h-8 text-purple-600 mb-2" />
          <h2 className="text-xl font-semibold mb-1">Total Hours</h2>
          <p className="text-3xl font-bold text-purple-600">{totalHoursContributed}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Recent Applications</h2>
          <div className="space-y-4">
            {recentApplications.map((application) => (
              <div key={application.id} className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{application.name}</h3>
                  <p className="text-sm text-gray-600">{application.opportunity}</p>
                </div>
                <div className="text-sm text-gray-500">{application.date}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">AI Insights</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 mt-1 mr-2"></div>
              <p>Volunteer retention rate is 15% above average</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 mt-1 mr-2"></div>
              <p>Most popular skills: project management, teaching, and web development</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-500 mt-1 mr-2"></div>
              <p>Suggestion: Create more weekend opportunities to increase engagement</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrganizationDashboard;