import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/app/components/Header';
import GenreBadge from '@/app/components/GenreBadge';
import ClientProvider from '@/app/components/ClientProvider';
import ThemeWrapper from '@/app/components/ThemeWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Movies App',
    description: 'Your go-to app for all movie information',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ClientProvider>
            <ThemeWrapper>
                <header>
                    <Header />
                </header>
                <GenreBadge />
                <main>{children}</main>
                <footer>
                    <p>© 2024 Movies App</p>
                </footer>
            </ThemeWrapper>
        </ClientProvider>
        </body>
        </html>
    );
}
