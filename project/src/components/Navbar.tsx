import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Leaf, Plus, User, LogOut, Shield, Heart } from 'lucide-react';
import { useAuth } from '../types/AuthContext';

export function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-brown-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-sage-600 rounded-full flex items-center justify-center group-hover:bg-sage-700 transition-colors">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-display font-semibold text-brown-900">ReWear</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/browse" 
              className={`text-brown-700 hover:text-sage-600 transition-colors font-medium ${
                isActive('/browse') ? 'text-sage-600' : ''
              }`}
            >
              Browse Items
            </Link>
            {user && (
              <>
                <Link 
                  to="/dashboard" 
                  className={`text-brown-700 hover:text-sage-600 transition-colors font-medium ${
                    isActive('/dashboard') ? 'text-sage-600' : ''
                  }`}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/add-item" 
                  className="bg-sage-600 text-white px-4 py-2 rounded-full hover:bg-sage-700 transition-all duration-300 flex items-center space-x-2 shadow-md hover:shadow-lg"
                >
                  <Plus className="h-4 w-4" />
                  <span>List Item</span>
                </Link>
              </>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="hidden sm:flex items-center space-x-1 bg-brown-100 px-3 py-1 rounded-full">
                  <Heart className="h-4 w-4 text-brown-600 fill-current" />
                  <span className="text-sm text-brown-700 font-medium">{user.points}</span>
                </div>
                {user.isAdmin && (
                  <Link 
                    to="/admin"
                    className="text-brown-700 hover:text-sage-600 transition-colors"
                    title="Admin Panel"
                  >
                    <Shield className="h-5 w-5" />
                  </Link>
                )}
                <div className="relative group">
                  <button className="flex items-center space-x-2 text-brown-700 hover:text-sage-600 transition-colors">
                    <User className="h-5 w-5" />
                    <span className="hidden sm:block">{user.name}</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-cream-50 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-brown-200">
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-left text-brown-700 hover:bg-brown-100 rounded-lg"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/login" 
                  className="text-brown-700 hover:text-sage-600 transition-colors font-medium"
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="bg-sage-600 text-white px-4 py-2 rounded-full hover:bg-sage-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}