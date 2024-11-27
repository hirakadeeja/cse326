import React from 'react';
import Features from '../components/Features';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80"
            alt="Cultural diversity"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bridging Cultural Gaps, Enriching Lives
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Connect with people from around the world, share traditions, and celebrate cultural diversity.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg flex items-center space-x-2 group">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* About Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About CultureConnect
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                CultureConnect is more than just a platform – it's a global community dedicated to celebrating and preserving cultural heritage. We believe that understanding different cultures is key to building a more connected and empathetic world.
              </p>
              <p className="text-lg text-gray-600">
                Through our various features and tools, we make it easy for people to share their traditions, learn from others, and build meaningful connections across cultural boundaries.
              </p>
            </div>
            <div className="relative h-96">
              <img
                src="https://images.unsplash.com/photo-1526958097901-5e6d742d3371?auto=format&fit=crop&q=80"
                alt="Cultural celebration"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}