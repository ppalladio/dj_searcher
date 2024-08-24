'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { GlareCard } from '@/components/ui/glare-card';

interface Props {}
const PricingPage = (props: Props) => {
    return (
        <>
            <div className="flex flex-row justify-evenly items-center mx-auto mt-10">
                {' '}
                <GlareCard className="flex-col-center">
                    <Card className="w-auto h-full bg-transparent border-transparent">
                        <CardHeader className="flex-col-center">
                            <CardTitle className=" text-gray-200 mb-10">Free</CardTitle>
                            <CardDescription>
                                <h1 className="text-[40px] text-white">0 €</h1>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                            <Button variant="outline" onClick={() => {}} className="cursor-move">
                                Select
                            </Button>
                        </CardContent>
                        <CardContent>
                            <ul className="text-gray-200 flex-col-center">
                                <li>20 conversions per week</li>
                                <li>100 total conversions</li>
                                <li>likes playlist</li>
                                <li>random playlist</li>
                                <li>playlist analyzer</li>
                            </ul>
                        </CardContent>
                    </Card>
                </GlareCard>
                <GlareCard className="flex-col-center">
                    <Card className="w-auto h-full bg-transparent border-transparent">
                        <CardHeader className="flex-col-center">
                            <CardTitle className=" text-gray-200 mb-10">Supporter</CardTitle>
                            <CardDescription>
                                <h1 className="text-[40px] text-white">2 €</h1>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                            <Button variant="outline" onClick={() => {}} className="cursor-move">
                                Select
                            </Button>
                        </CardContent>
                        <CardContent>
                            <ul className="text-gray-200 flex-col-center">
                                <li>everything from free plus...</li>
                                <li>unlimited conversions</li>
                                <li>early access to new features</li>
                                <li>custom support</li>
                            </ul>
                        </CardContent>
                    </Card>
                </GlareCard>
            </div>
        </>
    );
};
export default PricingPage;
