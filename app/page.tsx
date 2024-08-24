import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { cn } from '@/lib/utils';
import React from 'react';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { IconArrowWaveRightUp, IconBoxAlignRightFilled, IconBoxAlignTopLeft, IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn } from '@tabler/icons-react';
import { Separator } from '@/components/ui/separator';
export default function Home() {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <Header></Header>
            <Separator className="w-[50vw]" />
            <main className="flex-grow mb-10">
                <BentoGrid className="max-w-screen mx-auto">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            link={item.link}
                            className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
                          
                        />
                    ))}
                </BentoGrid>
            </main>
            <Footer></Footer>
        </div>
    );
}
const Skeleton = () => <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>;
const items = [
    {
        title: 'The Dawn of Innovation',
        description: 'Explore the birth of groundbreaking ideas and inventions.',
        header: <Skeleton />,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
        link: '/y2s',
    },
    {
        title: 'The Digital Revolution',
        description: 'Dive into the transformative power of technology.',
        header: <Skeleton />,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'The Art of Design',
        description: 'Discover the beauty of thoughtful and functional design.',
        header: <Skeleton />,
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'The Power of Communication',
        description: 'Understand the impact of effective communication in our lives.',
        header: <Skeleton />,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'The Pursuit of Knowledge',
        description: 'Join the quest for understanding and enlightenment.',
        header: <Skeleton />,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
];
