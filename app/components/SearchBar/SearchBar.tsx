'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios from 'axios';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { KeyboardEvent, useEffect, useState } from 'react';

interface Props {}
const SearchBar = (props: Props) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const [searchValue, setSearchValue] = useState('');

    const handleOnSearch = async (s: string) => {
        const params = new URLSearchParams(searchParams);
        if (s) {
            params.set('s', s);
        } else {
            params.delete('s');
        }
        router.replace(`${pathname}?${params.toString()}`);

        if (s.trim().length === 0) {
            return;
        }
        try {
            const response = await axios.get('/api/v1/search', { params: { s } });
            console.log('Search results:', response.data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    const handleSearch = () => {
        handleOnSearch(searchValue);
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleOnSearch(e.currentTarget.value);
        }
    };

    return (
        <div className="relative w-[50vw] max-w-md mx-auto my-5">
            <div className="relative flex items-center">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <Input
                    data-testId="search-input"
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-full bg-muted pl-10 pr-24 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    defaultValue={searchParams.get('query')?.toString()}
                    onKeyDown={handleKeyPress}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <Button className="absolute right-0 rounded-r-full px-4 py-1 h-full" onClick={handleSearch}>
                    Search
                </Button>
            </div>

            {/* <div className="absolute top-full left-0 w-full mt-2 bg-background border rounded-lg shadow-lg z-10 overflow-hidden">
			<div className="p-4">
			  <h3 className="text-sm font-medium mb-2">Recent Searches</h3>
			  <div className="grid gap-2">
				<Link
				  href="#"
				  className="flex items-center gap-2 text-sm hover:bg-muted/50 rounded-md p-2"
				  prefetch={false}
				>
				  <ClockIcon className="h-4 w-4 text-muted-foreground" />
				  <span>Acme product</span>
				</Link>
				<Link
				  href="#"
				  className="flex items-center gap-2 text-sm hover:bg-muted/50 rounded-md p-2"
				  prefetch={false}
				>
				  <ClockIcon className="h-4 w-4 text-muted-foreground" />
				  <span>Vercel components</span>
				</Link>
				<Link
				  href="#"
				  className="flex items-center gap-2 text-sm hover:bg-muted/50 rounded-md p-2"
				  prefetch={false}
				>
				  <ClockIcon className="h-4 w-4 text-muted-foreground" />
				  <span>Tailwind CSS</span>
				</Link>
			  </div>
			</div>
			<div className="p-4 border-t">
			  <h3 className="text-sm font-medium mb-2">Popular Searches</h3>
			  <div className="grid gap-2">
				<Link
				  href="#"
				  className="flex items-center gap-2 text-sm hover:bg-muted/50 rounded-md p-2"
				  prefetch={false}
				>
				  <TrendingUpIcon className="h-4 w-4 text-muted-foreground" />
				  <span>React components</span>
				</Link>
				<Link
				  href="#"
				  className="flex items-center gap-2 text-sm hover:bg-muted/50 rounded-md p-2"
				  prefetch={false}
				>
				  <TrendingUpIcon className="h-4 w-4 text-muted-foreground" />
				  <span>Next.js framework</span>
				</Link>
				<Link
				  href="#"
				  className="flex items-center gap-2 text-sm hover:bg-muted/50 rounded-md p-2"
				  prefetch={false}
				>
				  <TrendingUpIcon className="h-4 w-4 text-muted-foreground" />
				  <span>Vercel deployment</span>
				</Link>
			  </div>
			</div>
		  </div> */}
        </div>
    );
};
export default SearchBar;
