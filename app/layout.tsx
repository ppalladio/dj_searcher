import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Separator } from '@/components/ui/separator';
import ClientWrapper from './components/ClientWrapper';
import { Toaster } from 'react-hot-toast';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});

export const metadata: Metadata = {
    title: 'DJ',
    description: 'DJ',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn('flex flex-col min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
                <Toaster />
                <ClientWrapper>
                    <Header />
                    <Separator />
                    <main className="flex-grow">{children}</main>
                    <Footer />
                </ClientWrapper>
            </body>
        </html>
    );
}
