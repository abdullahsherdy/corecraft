import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <Section className="min-h-[60vh] flex items-center justify-center text-center">
      <div>
        <p className="text-sm font-medium font-body text-brand-teal uppercase tracking-widest">404</p>
        <h1 className="mt-4 text-5xl font-bold font-display text-brand-navy">Page not found</h1>
        <p className="mt-4 text-lg font-body text-brand-navy-muted">
          The page you are looking for does not exist.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link href="/">Go home</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
