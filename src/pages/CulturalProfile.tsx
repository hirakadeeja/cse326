import React from 'react';
import { useStore } from '../store';
import { UserCircle, MapPin, Globe, Book } from 'lucide-react';

export default function CulturalProfile() {
  const user = useStore((state) => state.user);

  if (!user) {
    return (
      <div className="pt-24 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Sign in to view your cultural profile</h2>
            <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 bg-indigo-600">
            <div className="absolute -bottom-12 left-8">
              <div className="rounded-full border-4 border-white overflow-hidden">
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} className="h-24 w-24 object-cover" />
                ) : (
                  <UserCircle className="h-24 w-24 text-gray-400" />
                )}
              </div>
            </div>
          </div>
          
          <div className="pt-16 pb-8 px-8">
            <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
            <div className="mt-4 flex items-center space-x-4 text-gray-600">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Mumbai, India</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                <span>{user.culture}</span>
              </div>
              <div className="flex items-center">
                <Book className="h-5 w-5 mr-2" />
                <span>Member since 2024</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Cultural Interests</h2>
            <div className="flex flex-wrap gap-2">
              {['Traditional Music', 'Folk Dance', 'Cuisine', 'Festivals', 'Art'].map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Languages</h2>
            <div className="space-y-2">
              {[
                { language: 'English', level: 'Native' },
                { language: 'Hindi', level: 'Fluent' },
                { language: 'Spanish', level: 'Intermediate' }
              ].map((lang) => (
                <div key={lang.language} className="flex justify-between items-center">
                  <span>{lang.language}</span>
                  <span className="text-gray-600">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}