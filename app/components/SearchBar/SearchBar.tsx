'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import axios from 'axios';
import { Search } from 'lucide-react';

interface Props {}
const SearchBar = (props: Props) => {
    const handleOnSearch = async (query: string) => {
        const req = await axios.get(`/api/v1/search?query=${query}`);
    };
    return (
        <div className="flex flex-row justify-center items-end my-5 bg-gray-100 ">
            <div>
                <Label htmlFor="email">Search</Label>
                <div className="flex flex-row justify-between items-center ">
                    <Input id="email" placeholder="Search" className="w-[80%]" onClick={() => handleOnSearch()}/>
                    <Button variant="default" size="icon" className="ml-2">
                        <Search />
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default SearchBar;
