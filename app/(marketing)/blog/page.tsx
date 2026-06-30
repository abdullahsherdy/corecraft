import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Code2, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Programming fundamentals explained clearly. Learn OOP, functional programming, algorithms, and more with CoreCraft.',
  alternates: { canonical: '/blog' },
  robots: { index: false, follow: true },
};

const upcomingTopics = [
  {
    icon: Code2,
    title: 'Programming basics',
    body: 'Variables, conditions, loops, functions, and the mental model behind them.',
  },
  {
    icon: BookOpen,
    title: 'OOP and FP',
    body: 'How different programming styles shape the way you structure code.',
  },
  {
    icon: Lightbulb,
    title: 'Problem solving',
    body: 'Practical explanations for data structures, algorithms, and debugging.',
  },
];

export default function BlogPage() {
  return (
    <main>
      <Section className="bg-brand-fog">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-brand-navy/55">
            Resources
          </p>
          <h1 className="font-display text-4xl font-bold text-brand-navy md:text-5xl">
            Clear programming notes are on the way.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-navy/70 md:text-lg">
            The resource library will cover the same fundamentals taught in CoreCraft sessions:
            programming basics, OOP, functional programming, and problem solving.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/courses">Explore courses</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact" className="gap-2">
                Ask a question
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {upcomingTopics.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-brand border border-brand-navy/10 bg-brand-fog p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="mt-5 font-display text-xl font-medium text-brand-navy">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-navy/70">{body}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
