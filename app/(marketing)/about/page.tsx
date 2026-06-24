import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';

export const metadata: Metadata = {
  title: 'About',
  description: 'CoreCraft is a coding education company that teaches programming fundamentals through private and group courses.',
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <Section>
      <h1 className="text-5xl font-bold font-display text-brand-navy">About CoreCraft</h1>
      <p className="mt-4 text-lg font-body text-brand-navy-muted">Coming soon.</p>
    </Section>
  );
}
