'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { BsQuestionLg } from 'react-icons/bs';

interface Props {}
const DJPage = (props: Props) => {
    const [url, setUrl] = useState('');

    const isValidUrl = (url: string): boolean => {
        try {
            new URL(url);
            return true;
        } catch (err) {
            return false;
        }
    };

    const handleConvert = async (url: string) => {
        if (!url.trim()) {
            toast.error('Please enter a URL');
            return;
        }

        if (!isValidUrl(url)) {
            toast.error('Invalid URL format');
            return;
        }

        try {
            const res = await axios.get(`/api/v1/dj`, { params: { url } });
            console.log(res);
            toast.success('Converted successfully');
        } catch (error) {
            console.error('Error fetching:', error);
            toast.error('Error converting URL');
        }
    };

    return (
        <div className="flex-col-center pt-10">
            <Card className="w-[50vw] ">
                <CardHeader>
                    <div className="flex-row flex justify-center items-end">
                        <CardTitle>Convert DJ Set</CardTitle>
                        <HoverCard>
                            <HoverCardTrigger>
                                <BsQuestionLg size={22} className="mx-2" data-testid="question-icon" />
                            </HoverCardTrigger>
                            <HoverCardContent className="w-auto">
                                How to use it:
                                <ul className="list-disc pl-5">
                                    <li>Pick a video from Youtube that contains multiple songs</li>
                                    <li>Copy the url and paste it in the input form</li>
                                    <li>Enjoy a music journey exploring the results</li>
                                    <li>Interact with the album covers to hear a song preview</li>
                                    <li>Please be patient, the conversion can take up to 60 seconds</li>
                                </ul>
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Input data-testid="dj-url-input" type="url" id="convert" placeholder="Youtube Video URL" value={url} onChange={(e) => setUrl(e.target.value)} />
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
                        data-testid="dj-clear-button"
                    >
                        Clear
                    </Button>
                    <Button data-testid="dj-convert-button" onClick={() => handleConvert(url)}>
                        Convert
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};
export default DJPage;
