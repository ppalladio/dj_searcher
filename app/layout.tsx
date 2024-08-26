import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Separator } from '@/components/ui/separator';
import ClientWrapper from './components/ClientWrapper';
import { Toaster } from 'react-hot-toast';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});

export const metadata: Metadata = {
    title: 'DJ',
    description: 'DJ',
};
const queryClient = new QueryClient();

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
                    <QueryClientProvider client={queryClient}>
                        <Header />
                        <Separator />
                        <main className="flex-grow">{children}</main>
                        <Footer />
                        <ReactQueryDevtools initialIsOpen={false} />
                    </QueryClientProvider>
                </ClientWrapper>
            </body>
        </html>
    );
}
