import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { SITE_URL } from '@/lib/site';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'CoreCraft - Learn Programming Fundamentals',
    template: '%s - CoreCraft',
  },
  description:
    'CoreCraft teaches programming fundamentals: Intro to Programming, OOP, Functional Programming, and Data Structures & Algorithms through private mentorship, private courses, and group courses.',
  applicationName: 'CoreCraft',
  openGraph: {
    type: 'website',
    siteName: 'CoreCraft',
    url: SITE_URL,
    title: 'CoreCraft - Learn Programming Fundamentals',
    description:
      'CoreCraft teaches programming fundamentals: Intro, OOP, Functional Programming, and Data Structures & Algorithms through private mentorship, private courses, and group courses.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoreCraft - Learn Programming Fundamentals',
    description:
      'Master the fundamentals every framework is built on. Private mentorship, private courses, and group courses.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body bg-white text-brand-navy antialiased">
        {children}
      </body>
    </html>
  );
}
