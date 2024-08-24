'use client';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface DJSetsPage {}
const DJSetsPage = () => {
    const searchParams = useSearchParams();
    const sortField = searchParams.get('sortField');
    console.log(sortField);
    const [sets, setSets] = useState<DJSetsPage[]>([]);
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
    return <div>y2s_set_page</div>;
};
export default DJSetsPage;
