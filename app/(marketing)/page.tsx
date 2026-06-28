import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero-section';
import { StatsStrip } from '@/components/sections/stats-strip';
import { ServicesSection } from '@/components/sections/services-section';
import { CoursesPreview } from '@/components/sections/courses-preview';
import { CtaSection } from '@/components/sections/cta-section';
import { JsonLd } from '@/components/seo/json-ld';
import { organizationLd, websiteLd } from '@/lib/seo';

export const revalidate = 3600;

export const metadata: Metadata = {
  description:
    'CoreCraft teaches Intro to Programming, OOP, Functional Programming, and Data Structures & Algorithms through private mentorship, private courses, and group courses.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationLd(), websiteLd()]} />
      <HeroSection />
      <StatsStrip />
      <ServicesSection />
      <CoursesPreview />
      <CtaSection />
    </>
  );
}
