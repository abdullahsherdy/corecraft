import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';

export const metadata: Metadata = {
  title: 'Courses',
  description: 'Browse CoreCraft courses in programming fundamentals: Intro to Programming, OOP, Functional Programming, and Data Structures & Algorithms.',
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/courses` },
};

export default function CoursesPage() {
  return (
    <Section>
      <h1 className="text-5xl font-bold font-display text-brand-navy">Courses</h1>
      <p className="mt-4 text-lg font-body text-brand-navy-muted">Coming soon.</p>
    </Section>
  );
}
