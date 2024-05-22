import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl">Contact Management App</div>
        <div className="flex space-x-4">
          <Link to="/ContactManagement" className="text-white">
            Home
          </Link>
          <Link to="/dashboard" className="text-white">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
