import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';

export function HeroSection() {
  return (
    <Section dark className="py-28 md:py-36">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold font-display text-white leading-tight">
          Master the fundamentals.<br />Build anything.
        </h1>
        <p className="mt-6 text-lg font-body text-white/70 max-w-xl">
          CoreCraft teaches the programming concepts that every language and framework is built on —
          so you understand the why, not just the how.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button size="lg" asChild>
            <Link href="/courses">Explore courses</Link>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <Link href="/mentorship">Book a mentorship call</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
