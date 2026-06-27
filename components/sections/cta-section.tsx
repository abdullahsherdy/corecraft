import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';

export function CtaSection() {
  return (
    <Section dark className="text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold font-display text-white">
          Ready to build from the core?
        </h2>
        <p className="mt-4 text-lg font-body text-white/70">
          Start with the fundamentals that professionals rely on.
          No shortcuts, no magic — just clear explanations and real practice.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/courses">Explore courses</Link>
          </Button>
          <Button variant="secondary" size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/20" asChild>
            <Link href="/contact">Talk to an instructor</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
