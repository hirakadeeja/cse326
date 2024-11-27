import React from 'react';
import { Users, Calendar, Book, MessageCircle, UtensilsCrossed, Image } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Users,
    title: 'Cultural Profiles',
    description: 'Create and explore detailed cultural profiles showcasing traditions and experiences.',
    link: '/profile'
  },
  {
    icon: MessageCircle,
    title: 'Community Forum',
    description: 'Engage in meaningful discussions about cultural practices and traditions.',
    link: '/forum'
  },
  {
    icon: Calendar,
    title: 'Events Calendar',
    description: 'Stay updated with cultural events, festivals, and celebrations worldwide.',
    link: '/events'
  },
  {
    icon: Book,
    title: 'Traditions Library',
    description: 'Access a vast repository of cultural knowledge and historical information.',
    link: '/traditions'
  },
  {
    icon: UtensilsCrossed,
    title: 'Recipe Book',
    description: 'Discover and share authentic traditional recipes from around the globe.',
    link: '/recipes'
  },
  {
    icon: Image,
    title: 'Photo Gallery',
    description: 'Explore stunning visual representations of diverse cultural expressions.',
    link: '/gallery'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover Our Features
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to explore and share cultural experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition group cursor-pointer"
            >
              <feature.icon className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}