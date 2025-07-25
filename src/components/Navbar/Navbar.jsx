

// src/components/Navbar/navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/channels4_profile.jpg';

const Navbar = ({ cartCount, user, setUser }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <nav className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src={logo} alt="MonkeyMagic Logo" className="h-10 w-10 mr-2 rounded-2xl" />
            </Link>
            <Link to="/" className="font-bold text-xl text-white">MonkeyMagic</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-white hover:text-yellow-200 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/products" className="text-white hover:text-yellow-200 px-3 py-2 rounded-md text-sm font-medium">Product & Service</Link>
            <Link to="/about" className="text-white hover:text-yellow-200 px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
          </div>

          {/* Desktop Auth/Cart Buttons */}
          <div className="hidden md:flex items-center">
            <Link to="/cart" className="relative mr-4 text-white hover:text-yellow-200 focus:outline-none" aria-label="Cart">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.6 17h8.8a1 1 0 00.95-1.3L17 13M7 13V6h13" />
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-red-700 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            
            {user ? (
              <div className="flex items-center">
                <span className="text-white mr-4">{user.email}</span>
                <button 
                  onClick={handleLogout}
                  className="ml-4 px-4 py-2 bg-white text-orange-600 rounded-md hover:bg-yellow-200 transition-colors text-sm font-semibold"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link 
                to="/auth" 
                className="ml-4 px-4 py-2 bg-white text-orange-600 rounded-md hover:bg-yellow-200 transition-colors text-sm font-semibold"
              >
                Login / Sign Up
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="relative mr-4 text-white hover:text-yellow-200 focus:outline-none" aria-label="Cart">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.6 17h8.8a1 1 0 00.95-1.3L17 13M7 13V6h13" />
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-red-700 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              aria-label="Open main menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white hover:text-yellow-200 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              onClick={() => setMenuOpen(false)}
              className="block text-white hover:text-yellow-200 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link 
              to="/products" 
              onClick={() => setMenuOpen(false)}
              className="block text-white hover:text-yellow-200 px-3 py-2 rounded-md text-base font-medium"
            >
              Product & Service
            </Link>
            <Link 
              to="/about" 
              onClick={() => setMenuOpen(false)}
              className="block text-white hover:text-yellow-200 px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </Link>
            {user ? (
              <>
                <div className="block text-white px-3 py-2 text-base font-medium">
                  Welcome, {user.email}
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="w-full mt-2 px-4 py-2 bg-white text-orange-600 rounded-md hover:bg-yellow-200 transition-colors text-base font-semibold"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link 
                to="/auth" 
                onClick={() => setMenuOpen(false)}
                className="w-full mt-2 px-4 py-2 bg-white text-orange-600 rounded-md hover:bg-yellow-200 transition-colors text-base font-semibold block text-center"
              >
                Login / Sign Up
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;