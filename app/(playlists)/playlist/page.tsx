'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
const Playlist = () => {
	const [url, setUrl] = useState('');

    const isValidUrl = (url: string): boolean => {
        try {
            new URL(url);
            return true;
        } catch (err) {
            return false;
        }
    };

    const handleAnalyze = async (url: string) => {
        if (!url.trim()) {
            toast.error('Please enter a URL');
            return;
        }

        if (!isValidUrl(url)) {
            toast.error('Invalid URL format');
            return;
        }

        try {
            const res = await axios.get(`/api/v1/playlist`, { params: { url } });
            console.log(res);
            toast.success('Analyzed successfully');
        } catch (error) {
            console.error('Error fetching:', error);
            toast.error('Error Analyzing URL');
        }
    };

    return (
        <div className="flex-col-center pt-10">
            <Card className="w-[50vw] ">
                <CardHeader>
                    <CardTitle>Analyze DJ Set</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Input type="url" id="analyze" placeholder="Spotify Playlist URL" value={url} onChange={(e) => setUrl(e.target.value)} />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button
                        variant="outline"
                        onClick={() => {
                            setUrl('');
                        }}
                    >
                        Clear
                    </Button>
                    <Button onClick={() => handleAnalyze(url)}>Analyze</Button>
                </CardFooter>
            </Card>
        </div>
    );
};


export default Playlist;
