'use client';
import SearchBar from '@/app/components/Search/SearchBar/SearchBar';
import SearchGridView from '@/app/components/Search/SearchGridView/SearchGridView';
import RecentAndTopSearches from '@/app/components/Search/RecentnTop/RecentnTop';
import { useSearch, useRecentAndTopSearches } from '@/app/hooks/useSearch';
import { useState } from 'react';

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { data: searchData, isLoading: isSearchLoading, isError: isSearchError } = useSearch(searchQuery);
    const { data: recentTopData, isLoading: isRecentTopLoading, isError: isRecentTopError } = useRecentAndTopSearches();

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    if (isSearchLoading || isRecentTopLoading) return <div>Loading...</div>;
    if (isSearchError || isRecentTopError) return <div>Error fetching data</div>;

    const renderSearchResults = () => {
        if (!searchQuery) {
            return recentTopData && (
                <RecentAndTopSearches
                    recentSearches={recentTopData.recentSearches}
                    topSearches={recentTopData.topSearches}
                />
            );
        }

        if (searchData?.results && searchData.results.length > 0) {
            return <SearchGridView results={searchData.results} />;
        }

        return <div>No results found</div>;
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            {renderSearchResults()}
        </div>
    );
};



export default SearchPage;