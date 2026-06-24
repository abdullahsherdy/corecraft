import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';

export const metadata: Metadata = {
  title: 'Mentorship',
  description: 'Private 1-on-1 mentorship sessions with CoreCraft instructors. Scheduled around you, focused on fundamentals.',
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/mentorship` },
};

export default function MentorshipPage() {
  return (
    <Section>
      <h1 className="text-5xl font-bold font-display text-brand-navy">Private Mentorship</h1>
      <p className="mt-4 text-lg font-body text-brand-navy-muted">Coming soon.</p>
    </Section>
  );
}
