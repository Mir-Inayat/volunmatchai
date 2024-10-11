import React, { useState } from 'react';
import { Search, Filter, MapPin, Calendar, Clock } from 'lucide-react';

const Opportunities: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data for opportunities
  const opportunities = [
    {
      id: 1,
      title: "Community Garden Planting",
      organization: "Green Thumbs Society",
      location: "Central Park",
      date: "2024-03-20",
      duration: "3 hours",
      description: "Help us plant new flowers and vegetables in our community garden. No experience necessary!",
      tags: ["Gardening", "Environment", "Community"]
    },
    {
      id: 2,
      title: "Homeless Shelter Meal Service",
      organization: "City Hope Foundation",
      location: "Downtown Shelter",
      date: "2024-03-22",
      duration: "2 hours",
      description: "Assist in preparing and serving meals to homeless individuals in our community.",
      tags: ["Food Service", "Homelessness", "Community"]
    },
    {
      id: 3,
      title: "Youth Coding Workshop",
      organization: "Tech for All",
      location: "Community Center",
      date: "2024-03-25",
      duration: "4 hours",
      description: "Teach basic coding skills to underprivileged youth. Programming knowledge required.",
      tags: ["Education", "Technology", "Youth"]
    },
    // Add more opportunities as needed
  ];

  const filteredOpportunities = opportunities.filter(opportunity =>
    opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    opportunity.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
    opportunity.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Volunteer Opportunities</h1>
      
      <div className="mb-8 flex">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search opportunities..."
            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-300 flex items-center">
          <Filter className="w-5 h-5 mr-2" /> Filter
        </button>
      </div>
      
      <div className="space-y-6">
        {filteredOpportunities.map((opportunity) => (
          <div key={opportunity.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{opportunity.title}</h2>
            <p className="text-gray-600 mb-4">{opportunity.organization}</p>
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-1" /> {opportunity.location}
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="w-5 h-5 mr-1" /> {opportunity.date}
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 mr-1" /> {opportunity.duration}
              </div>
            </div>
            <p className="mb-4">{opportunity.description}</p>
            <div className="flex flex-wrap gap-2">
              {opportunity.tags.map((tag, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Opportunities;