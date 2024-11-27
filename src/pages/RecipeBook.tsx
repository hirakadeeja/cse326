import React, { useState } from 'react';
import { Search, Filter, Clock, Users } from 'lucide-react';

const recipes = [
  {
    id: 1,
    title: 'Traditional Sushi Rolls',
    cuisine: 'Japanese',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80',
    prepTime: '45 mins',
    servings: 4,
    difficulty: 'Medium',
    description: 'Learn to make authentic Japanese sushi rolls with fresh ingredients.'
  },
  {
    id: 2,
    title: 'Butter Chicken',
    cuisine: 'Indian',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80',
    prepTime: '60 mins',
    servings: 6,
    difficulty: 'Medium',
    description: 'Creamy, rich butter chicken made with traditional Indian spices.'
  },
  {
    id: 3,
    title: 'Paella Valenciana',
    cuisine: 'Spanish',
    image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80',
    prepTime: '90 mins',
    servings: 8,
    difficulty: 'Hard',
    description: 'Classic Spanish rice dish with seafood and saffron.'
  },
  {
    id: 4,
    title: 'Homemade Pasta',
    cuisine: 'Italian',
    image: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&q=80',
    prepTime: '75 mins',
    servings: 4,
    difficulty: 'Medium',
    description: 'Fresh handmade pasta with traditional Italian technique.'
  },
  {
    id: 5,
    title: 'Dim Sum',
    cuisine: 'Chinese',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80',
    prepTime: '120 mins',
    servings: 6,
    difficulty: 'Hard',
    description: 'Assorted traditional Chinese dumplings and small bites.'
  },
  {
    id: 6,
    title: 'Moroccan Tagine',
    cuisine: 'Moroccan',
    image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&q=80',
    prepTime: '90 mins',
    servings: 6,
    difficulty: 'Medium',
    description: 'Aromatic Moroccan stew cooked in a traditional clay pot.'
  },
  {
    id: 7,
    title: 'Greek Moussaka',
    cuisine: 'Greek',
    image: 'https://images.unsplash.com/photo-1544360415-84f7ff0b1013?auto=format&fit=crop&q=80',
    prepTime: '120 mins',
    servings: 8,
    difficulty: 'Hard',
    description: 'Traditional Greek casserole with eggplant and ground meat.'
  },
  {
    id: 8,
    title: 'Thai Green Curry',
    cuisine: 'Thai',
    image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&q=80',
    prepTime: '45 mins',
    servings: 4,
    difficulty: 'Medium',
    description: 'Authentic Thai green curry with coconut milk and fresh herbs.'
  },
  {
    id: 9,
    title: 'Brazilian Feijoada',
    cuisine: 'Brazilian',
    image: 'https://images.unsplash.com/photo-1550367363-ea12860cc124?auto=format&fit=crop&q=80',
    prepTime: '180 mins',
    servings: 8,
    difficulty: 'Hard',
    description: 'Traditional Brazilian black bean stew with pork and sausages.'
  },
  {
    id: 10,
    title: 'Vietnamese Pho',
    cuisine: 'Vietnamese',
    image: 'https://images.unsplash.com/photo-1576577445504-6c7989348e95?auto=format&fit=crop&q=80',
    prepTime: '180 mins',
    servings: 6,
    difficulty: 'Hard',
    description: 'Classic Vietnamese noodle soup with rich broth and herbs.'
  }
];

export default function RecipeBook() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('All');

  const cuisines = ['All', 'Japanese', 'Indian', 'Spanish', 'Italian', 'Chinese', 'Moroccan', 'Greek', 'Thai', 'Brazilian', 'Vietnamese'];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCuisine = selectedCuisine === 'All' || recipe.cuisine === selectedCuisine;
    return matchesSearch && matchesCuisine;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80"
          alt="Cooking ingredients"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Cultural Recipe Book</h1>
            <p className="text-xl">Discover authentic recipes from around the world</p>
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
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              value={selectedCuisine}
              onChange={(e) => setSelectedCuisine(e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
            >
              {cuisines.map(cuisine => (
                <option key={cuisine} value={cuisine}>{cuisine}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map(recipe => (
            <div key={recipe.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{recipe.title}</h3>
                  <p className="text-sm">{recipe.cuisine} Cuisine</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{recipe.prepTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Serves {recipe.servings}</span>
                  </div>
                </div>
                <p className="text-gray-600">{recipe.description}</p>
                <div className="mt-4">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                    {recipe.difficulty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}