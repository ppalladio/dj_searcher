import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface SearchItem {
  id: string;
  query: string;
}

interface SearchResults {
  results: any[];
  recentSearches: SearchItem[];
  topSearches: SearchItem[];
}

const fetchSearchResults = async (query: string): Promise<SearchResults> => {
  const { data } = await axios.get('/api/v1/search', { params: { s: query } });
  return data;
};

const fetchRecentAndTopSearches = async (): Promise<{ recentSearches: SearchItem[], topSearches: SearchItem[] }> => {
  const { data } = await axios.get('/api/v1/recent-top-searches');
  return data;
};

export const useSearch = (query: string) => {
  return useQuery({
    queryKey: ['search', query],
    queryFn: () => fetchSearchResults(query),
    enabled: !!query,
  });
};

export const useRecentAndTopSearches = () => {
  return useQuery({
    queryKey: ['recentTopSearches'],
    queryFn: fetchRecentAndTopSearches,
  });
};