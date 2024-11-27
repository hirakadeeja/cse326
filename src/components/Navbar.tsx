import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, User } from 'lucide-react';
import { useStore } from '../store';
import GlobalSearch from './GlobalSearch';

export default function Navbar() {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);

  const handleLogin = () => {
    setUser({
      id: '1',
      name: 'John Doe',
      culture: 'Indian',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80'
    });
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">CultureConnect</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-indigo-600 px-3 py-2">Home</Link>
            <Link to="/recipes" className="text-gray-600 hover:text-indigo-600 px-3 py-2">Recipes</Link>
            <Link to="/gallery" className="text-gray-600 hover:text-indigo-600 px-3 py-2">Gallery</Link>
            <Link to="/forum" className="text-gray-600 hover:text-indigo-600 px-3 py-2">Forum</Link>
            <Link to="/events" className="text-gray-600 hover:text-indigo-600 px-3 py-2">Events</Link>
            <Link to="/traditions" className="text-gray-600 hover:text-indigo-600 px-3 py-2">Traditions</Link>
            <GlobalSearch />
            {user ? (
              <Link to="/profile" className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 px-3 py-2">
                <User className="h-5 w-5" />
                <span>{user.name}</span>
              </Link>
            ) : (
              <button
                onClick={handleLogin}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}