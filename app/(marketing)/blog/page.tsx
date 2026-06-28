import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Programming fundamentals explained clearly. Learn OOP, functional programming, algorithms, and more with CoreCraft.',
  alternates: { canonical: '/blog' },
  robots: { index: false, follow: true },
};

export default function BlogPage() {
  return (
    <Section>
      <h1 className="text-5xl font-bold font-display text-brand-navy">Blog</h1>
      <p className="mt-4 text-lg font-body text-brand-navy-muted">Coming soon.</p>
    </Section>
  );
}
