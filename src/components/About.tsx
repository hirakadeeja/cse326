import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              CultureConnect is dedicated to fostering global understanding and appreciation through meaningful cultural exchange. We believe that by sharing our diverse traditions and experiences, we can build bridges between communities and create lasting connections.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-4xl font-bold text-indigo-600 mb-2">50K+</h3>
                <p className="text-gray-600">Active Members</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-indigo-600 mb-2">100+</h3>
                <p className="text-gray-600">Countries Represented</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-indigo-600 mb-2">5K+</h3>
                <p className="text-gray-600">Cultural Events</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-indigo-600 mb-2">10K+</h3>
                <p className="text-gray-600">Shared Stories</p>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1526958097901-5e6d742d3371?auto=format&fit=crop&q=80"
              alt="Cultural celebration"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}