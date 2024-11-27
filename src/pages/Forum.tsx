import React, { useState } from 'react';
import { useStore } from '../store';
import { MessageCircle, Heart, Share2 } from 'lucide-react';
import { format } from 'date-fns';

export default function Forum() {
  const [searchTerm, setSearchTerm] = useState('');
  const forumPosts = useStore((state) => state.forumPosts);
  const user = useStore((state) => state.user);

  const filteredPosts = forumPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Community Forum</h1>
          {user && (
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              New Post
            </button>
          )}
        </div>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search discussions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.content}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 hover:text-indigo-600">
                    <Heart className="h-5 w-5" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-indigo-600">
                    <MessageCircle className="h-5 w-5" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-indigo-600">
                    <Share2 className="h-5 w-5" />
                    <span>Share</span>
                  </button>
                </div>
                <span>{format(new Date(post.date), 'MMM d, yyyy')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}