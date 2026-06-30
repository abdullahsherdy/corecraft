import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';

export function CtaSection() {
  return (
    <Section dark className="text-center">
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-brand-teal">
          Start with a clear next step
        </p>
        <h2 className="font-display text-4xl font-bold text-white">
          Ready to build from the core?
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-white/70">
          Book a free intro call, share your current level, and get a recommended path for
          mentorship or the foundations track.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
              <Link href="/contact" className="gap-2">
              Book free intro call
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="border border-white/20 bg-white/10 text-white hover:bg-white/20"
            asChild
          >
            <Link href="/courses">Explore courses</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
