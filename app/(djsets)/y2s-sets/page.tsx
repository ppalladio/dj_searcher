'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Y2sSet {}
const Y2sSetPage = () => {
    const searchParams = useSearchParams();
    const sortField = searchParams.get('sortField');
    console.log(sortField);
    const [sets, setSets] = useState<Y2sSet[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchSets() {
            setLoading(true);
            try {
                const response = await axios.get(`/v1/api/sets?sortField=${sortField}`);
                if (!response.data.success) {
                    throw new Error('Failed to fetch sets');
                }
                const data = await response.data;
                setSets(data);
            } catch (error) {
                console.error('Error fetching sets:', error);
                // Handle error (e.g., show error message to user)
            } finally {
                setLoading(false);
            }
        }

        fetchSets();
    }, [sortField]);
    return <div>setsjs</div>;
};
export default Y2sSetPage;
