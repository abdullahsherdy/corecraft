import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero-section';
import { StatsStrip } from '@/components/sections/stats-strip';
import { ServicesSection } from '@/components/sections/services-section';
import { CoursesPreview } from '@/components/sections/courses-preview';
import { CtaSection } from '@/components/sections/cta-section';

export const metadata: Metadata = {
  title: 'CoreCraft — Learn Programming Fundamentals',
  description:
    'CoreCraft teaches Intro to Programming, OOP, Functional Programming, and Data Structures & Algorithms through private mentorship, private courses, and group courses.',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://corecraft-one.vercel.app',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <ServicesSection />
      <CoursesPreview />
      <CtaSection />
    </>
  );
}
