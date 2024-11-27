import React, { useState, useEffect, useCallback } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useGlobalSearch } from '../utils/search';

export default function GlobalSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const searchResults = useGlobalSearch(searchTerm);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleResultClick = useCallback((path: string) => {
    setIsOpen(false);
    setSearchTerm('');
    navigate(path);
  }, [navigate]);

  const hasResults = Object.values(searchResults).some(results => results.length > 0);

  return (
    <div className="relative">
      <div className="flex items-center">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 text-gray-600 hover:text-indigo-600"
          aria-label="Open search"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40" 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed inset-x-0 top-0 z-50 bg-white shadow-lg p-4 max-h-[80vh] overflow-y-auto">
            <div className="max-w-3xl mx-auto">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search across all content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  autoFocus
                  aria-label="Search input"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label="Close search"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {searchTerm && (
                <div className="space-y-6">
                  {!hasResults && (
                    <p className="text-center text-gray-500">No results found</p>
                  )}

                  {searchResults.events.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Events</h3>
                      <div className="space-y-2">
                        {searchResults.events.map(event => (
                          <div
                            key={event.id}
                            onClick={() => handleResultClick(`/events?search=${encodeURIComponent(event.title)}`)}
                            className="p-2 hover:bg-gray-50 rounded cursor-pointer"
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                handleResultClick(`/events?search=${encodeURIComponent(event.title)}`);
                              }
                            }}
                          >
                            <h4 className="font-medium">{event.title}</h4>
                            <p className="text-sm text-gray-600">{event.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {searchResults.traditions.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Traditions</h3>
                      <div className="space-y-2">
                        {searchResults.traditions.map(tradition => (
                          <div
                            key={tradition.id}
                            onClick={() => handleResultClick(`/traditions?search=${encodeURIComponent(tradition.title)}`)}
                            className="p-2 hover:bg-gray-50 rounded cursor-pointer"
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                handleResultClick(`/traditions?search=${encodeURIComponent(tradition.title)}`);
                              }
                            }}
                          >
                            <h4 className="font-medium">{tradition.title}</h4>
                            <p className="text-sm text-gray-600">{tradition.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {searchResults.forumPosts.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Forum Posts</h3>
                      <div className="space-y-2">
                        {searchResults.forumPosts.map(post => (
                          <div
                            key={post.id}
                            onClick={() => handleResultClick(`/forum?search=${encodeURIComponent(post.title)}`)}
                            className="p-2 hover:bg-gray-50 rounded cursor-pointer"
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                handleResultClick(`/forum?search=${encodeURIComponent(post.title)}`);
                              }
                            }}
                          >
                            <h4 className="font-medium">{post.title}</h4>
                            <p className="text-sm text-gray-600">{post.content.substring(0, 100)}...</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}