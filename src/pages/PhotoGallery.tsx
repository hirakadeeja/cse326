import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const photos = [
  {
    id: 1,
    title: 'Traditional Japanese Tea Ceremony',
    category: 'Traditions',
    location: 'Kyoto, Japan',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=80',
    description: 'Ancient tea ceremony showcasing Japanese cultural precision and mindfulness.'
  },
  {
    id: 2,
    title: 'Diwali Festival of Lights',
    category: 'Festivals',
    location: 'Mumbai, India',
    image: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?auto=format&fit=crop&q=80',
    description: 'Vibrant celebration of Diwali with traditional oil lamps and colorful rangoli.'
  },
  {
    id: 3,
    title: 'Chinese New Year Parade',
    category: 'Festivals',
    location: 'Hong Kong',
    image: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80',
    description: 'Dragon dance performance during Lunar New Year celebrations.'
  },
  {
    id: 4,
    title: 'Traditional Moroccan Architecture',
    category: 'Architecture',
    location: 'Marrakech, Morocco',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80',
    description: 'Intricate geometric patterns in Islamic architecture.'
  },
  {
    id: 5,
    title: 'Day of the Dead Celebration',
    category: 'Festivals',
    location: 'Mexico City, Mexico',
    image: 'https://images.unsplash.com/photo-1509024644558-2f56ce76c490?auto=format&fit=crop&q=80',
    description: 'Colorful altar with offerings during Día de los Muertos.'
  },
  {
    id: 6,
    title: 'Traditional African Dance',
    category: 'Performance',
    location: 'Lagos, Nigeria',
    image: 'https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?auto=format&fit=crop&q=80',
    description: 'Energetic traditional dance performance in traditional attire.'
  },
  {
    id: 7,
    title: 'Venice Carnival',
    category: 'Festivals',
    location: 'Venice, Italy',
    image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&q=80',
    description: 'Elaborate masks and costumes during the Venice Carnival.'
  },
  {
    id: 8,
    title: 'Aboriginal Art',
    category: 'Art',
    location: 'Sydney, Australia',
    image: 'https://images.unsplash.com/photo-1599593752325-ffa41031056e?auto=format&fit=crop&q=80',
    description: 'Traditional Aboriginal dot painting telling ancient stories.'
  },
  {
    id: 9,
    title: 'Greek Orthodox Easter',
    category: 'Traditions',
    location: 'Athens, Greece',
    image: 'https://images.unsplash.com/photo-1588870995846-f4ffbc3d03f5?auto=format&fit=crop&q=80',
    description: 'Traditional Easter celebration with painted red eggs.'
  }
];

export default function PhotoGallery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Festivals', 'Traditions', 'Architecture', 'Performance', 'Art'];

  const filteredPhotos = photos.filter(photo => {
    const matchesSearch = photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         photo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         photo.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || photo.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80"
          alt="Cultural photography"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Cultural Photo Gallery</h1>
            <p className="text-xl">Explore the world through cultural moments</p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search photos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map(photo => (
            <div key={photo.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{photo.title}</h3>
                  <p className="text-sm">{photo.location}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                    {photo.category}
                  </span>
                </div>
                <p className="text-gray-600">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}