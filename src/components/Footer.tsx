import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold flex items-center justify-center md:justify-start">
              <Heart className="w-6 h-6 mr-2" />
              VolunMatch
            </h2>
            <p className="mt-2">Connecting volunteers with meaningful opportunities.</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li><a href="/about" className="hover:text-blue-300">About Us</a></li>
              <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
              <li><a href="/privacy" className="hover:text-blue-300">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="text-white hover:text-blue-300"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white hover:text-blue-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-blue-300"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white hover:text-blue-300"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 VolunMatch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;