import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
          <Heart className="w-8 h-8" />
          <span>VolunMatch</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/opportunities" className="hover:text-blue-200">Opportunities</Link></li>
            <li><Link to="/register" className="hover:text-blue-200">Register</Link></li>
            <li><Link to="/leaderboard" className="hover:text-blue-200">Leaderboard</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;