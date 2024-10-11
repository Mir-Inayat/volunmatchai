import React from 'react';
import { Clock, Award, Briefcase, ChevronRight } from 'lucide-react';

const VolunteerDashboard: React.FC = () => {
  // Mock data
  const volunteerName = "Jane Doe";
  const totalHours = 120;
  const rank = 15;
  const upcomingOpportunities = [
    { id: 1, title: "Beach Cleanup", date: "2024-03-15", organization: "Ocean Guardians" },
    { id: 2, title: "Food Bank Assistance", date: "2024-03-20", organization: "Community Pantry" },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Welcome, {volunteerName}!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Clock className="w-8 h-8 text-blue-600 mb-2" />
          <h2 className="text-xl font-semibold mb-1">Total Hours</h2>
          <p className="text-3xl font-bold text-blue-600">{totalHours}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Award className="w-8 h-8 text-green-600 mb-2" />
          <h2 className="text-xl font-semibold mb-1">Current Rank</h2>
          <p className="text-3xl font-bold text-green-600">#{rank}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Briefcase className="w-8 h-8 text-purple-600 mb-2" />
          <h2 className="text-xl font-semibold mb-1">Opportunities</h2>
          <p className="text-3xl font-bold text-purple-600">{upcomingOpportunities.length}</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Opportunities</h2>
        {upcomingOpportunities.map((opportunity) => (
          <div key={opportunity.id} className="flex items-center justify-between py-3 border-b last:border-b-0">
            <div>
              <h3 className="font-semibold">{opportunity.title}</h3>
              <p className="text-sm text-gray-600">{opportunity.organization} • {opportunity.date}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">AI Recommendations</h2>
          <p className="text-gray-600 mb-4">Based on your profile and past activities, we recommend:</p>
          <ul className="list-disc list-inside">
            <li>Environmental conservation projects</li>
            <li>Youth mentoring programs</li>
            <li>Skill-based volunteering in web development</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Your Impact</h2>
          <p className="text-gray-600 mb-4">Here's how you've made a difference:</p>
          <ul className="list-disc list-inside">
            <li>Helped serve 500+ meals at local shelters</li>
            <li>Contributed to planting 100 trees in urban areas</li>
            <li>Mentored 5 high school students in coding</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;