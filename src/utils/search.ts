import { useStore } from '../store';

export const searchItems = <T extends Record<string, any>>(
  items: T[] | undefined,
  searchTerm: string,
  fields: (keyof T)[],
  category?: string,
  categoryField?: keyof T
): T[] => {
  if (!items) return [];
  
  const normalizedSearch = searchTerm.toLowerCase().trim();
  
  return items.filter(item => {
    // Category filter
    if (category && category !== 'All' && categoryField) {
      if (item[categoryField] !== category) return false;
    }

    // Search term filter
    if (!normalizedSearch) return true;

    return fields.some(field => {
      const value = item[field];
      if (typeof value === 'string') {
        return value.toLowerCase().includes(normalizedSearch);
      }
      return false;
    });
  });
};

export const useGlobalSearch = (searchTerm: string) => {
  const store = useStore();

  const searchResults = {
    events: searchItems(store.events, searchTerm, ['title', 'description', 'location', 'category']),
    traditions: searchItems(store.traditions, searchTerm, ['title', 'description', 'culture', 'category']),
    forumPosts: searchItems(store.forumPosts, searchTerm, ['title', 'content'])
  };

  return searchResults;
};