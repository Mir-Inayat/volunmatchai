import React from 'react';
import { Trophy, Star, Award } from 'lucide-react';

const Leaderboard: React.FC = () => {
  // Mock data for leaderboard
  const leaderboardData = [
    { rank: 1, name: "Sarah Johnson", hours: 150, organization: "City Hope Foundation" },
    { rank: 2, name: "Michael Chen", hours: 135, organization: "Green Thumbs Society" },
    { rank: 3, name: "Emily Rodriguez", hours: 120, organization: "Tech for All" },
    { rank: 4, name: "David Kim", hours: 110, organization: "Animal Rescue League" },
    { rank: 5, name: "Lisa Patel", hours: 100, organization: "Meals on Wheels" },
    // Add more entries as needed
  ];

  const renderRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-400" />;
      case 2:
        return <Star className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-orange-400" />;
      default:
        return <span className="text-lg font-bold">{rank}</span>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Volunteer Leaderboard</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hours</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Organization</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {leaderboardData.map((entry) => (
              <tr key={entry.rank} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                    {renderRankIcon(entry.rank)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{entry.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{entry.hours} hours</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{entry.organization}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">How to Climb the Leaderboard</h2>
        <ul className="list-disc list-insidespace-y-2">
          <li>Participate in more volunteer opportunities</li>
          <li>Log your hours accurately after each event</li>
          <li>Engage in longer-term projects for consistent contributions</li>
          <li>Invite friends to join VolunMatch and volunteer together</li>
          <li>Take on leadership roles in volunteer projects</li>
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;