import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold">
            <Link to="/">MyCompany</Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="hover:text-accent transition duration-300">Home</Link>
            <Link to="/services" className="hover:text-accent transition duration-300">Our Services</Link>
            <Link to="/contact" className="hover:text-accent transition duration-300">Contact Us</Link>
            <Link to="/login" className="ml-4 px-4 py-2 bg-accent text-white rounded hover:bg-accent-dark transition duration-300">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-primary text-white">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-accent">Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block hover:text-accent">Our Services</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-accent">Contact Us</Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="block mt-2 px-4 py-2 bg-accent text-white rounded hover:bg-accent-dark transition">
            Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
