'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useState, KeyboardEvent } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = () => {
        if (searchValue.trim()) {
            onSearch(searchValue.trim());
        }
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="relative w-[50vw] max-w-md mx-auto my-5">
            <div className="relative flex items-center">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <Input
                    data-testid="search-input"
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-full bg-muted pl-10 pr-24 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <Button className="absolute right-0 rounded-r-full px-4 py-1 h-full" onClick={handleSearch}>
                    Search
                </Button>
            </div>
        </div>
    );
};

export default SearchBar;
