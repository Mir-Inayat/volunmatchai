import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Building, Award } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to VolunMatch</h1>
      <p className="text-xl mb-8">Connecting passionate volunteers with impactful organizations</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
          <h2 className="text-2xl font-semibold mb-2">For Volunteers</h2>
          <p className="mb-4">Find meaningful opportunities and make a difference in your community.</p>
          <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Sign Up as Volunteer</Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Building className="w-12 h-12 mx-auto mb-4 text-green-600" />
          <h2 className="text-2xl font-semibold mb-2">For Organizations</h2>
          <p className="mb-4">Connect with dedicated volunteers to support your cause and mission.</p>
          <Link to="/register" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300">Register Organization</Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Award className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
          <h2 className="text-2xl font-semibold mb-2">Recognition</h2>
          <p className="mb-4">Track your impact, earn badges, and climb the leaderboard.</p>
          <Link to="/leaderboard" className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition duration-300">View Leaderboard</Link>
        </div>
      </div>
      
      <div className="bg-blue-100 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <ol className="list-decimal list-inside text-left max-w-2xl mx-auto">
          <li className="mb-2">Register as a volunteer or organization</li>
          <li className="mb-2">Create your profile or list opportunities</li>
          <li className="mb-2">Receive AI-powered recommendations</li>
          <li className="mb-2">Connect and make a difference</li>
          <li>Track your impact and earn recognition</li>
        </ol>
      </div>
    </div>
  );
};

export default Home;