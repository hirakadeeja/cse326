import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80"
          alt="Cultural background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-indigo-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="lg:w-2/3">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Bridging Cultural Gaps,
            <span className="text-indigo-300"> Enriching Lives</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 animate-fade-in-delay">
            Connect with people from diverse backgrounds, share experiences, and explore rich cultural traditions from around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <button className="flex items-center justify-center px-8 py-3 bg-white text-indigo-600 rounded-md hover:bg-gray-100 transition group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition" />
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-md hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}