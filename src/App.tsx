import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import VolunteerDashboard from './pages/VolunteerDashboard';
import OrganizationDashboard from './pages/OrganizationDashboard';
import Register from './pages/Register';
import Opportunities from './pages/Opportunities';
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/volunteer-dashboard" element={<VolunteerDashboard />} />
            <Route path="/organization-dashboard" element={<OrganizationDashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;