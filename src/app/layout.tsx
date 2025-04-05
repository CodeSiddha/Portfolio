import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
    title: 'Portfolio | Software Developer',
    description: 'Professional portfolio showcasing my work and skills as a software developer',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body className={`${inter.variable} font-sans bg-light dark:bg-dark text-dark dark:text-light`}>
                {/* Prevent flash of wrong theme */}
                <script dangerouslySetInnerHTML={{
                    __html: `
                        (function() {
                            try {
                                const storedTheme = localStorage.getItem('theme');
                                if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                                    document.documentElement.classList.add('dark');
                                } else {
                                    document.documentElement.classList.remove('dark');
                                }
                            } catch (e) {}
                        })();
                    `
                }} />
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
} 