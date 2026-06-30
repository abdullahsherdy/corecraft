import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';

const roadmap = [
  {
    title: 'Intro',
    detail: 'Variables, conditions, loops, functions',
  },
  {
    title: 'OOP',
    detail: 'Objects, classes, modeling, code structure',
  },
  {
    title: 'Functional',
    detail: 'Pure functions, composition, data flow',
  },
  {
    title: 'DSA',
    detail: 'Problem solving, structures, algorithms',
  },
];

const proofPoints = ['1-on-1 guidance', 'Arabic / English', 'Practice-first learning'];

export function HeroSection() {
  return (
    <Section dark className="py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-brand-teal/40 bg-brand-teal/10 px-3 py-1 text-sm font-medium text-brand-teal">
            Build from the core
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight text-white md:text-6xl">
            Learn programming from the fundamentals up.
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-white/70">
            Private mentorship and structured courses for students who want to understand the why
            behind code, not just memorize syntax.
          </p>

          <div className="mt-8 grid max-w-2xl gap-3 text-sm text-white/70 sm:grid-cols-3">
            {proofPoints.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-brand-teal" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact" className="gap-2">
                Book free intro call
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="/courses">Explore foundations track</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-brand border border-white/10 bg-white/5 p-5 shadow-sm">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="font-display text-lg font-medium text-white">Foundations roadmap</p>
              <p className="mt-1 text-sm text-white/55">The path before frameworks</p>
            </div>
            <span className="rounded-full bg-brand-amber px-3 py-1 text-xs font-medium text-brand-midnight">
              4 core subjects
            </span>
          </div>

          <div className="space-y-3">
            {roadmap.map((item, index) => (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-brand-midnight/80 p-4"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-teal/15 font-display text-sm font-medium text-brand-teal">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-base font-medium text-white">{item.title}</p>
                  <p className="mt-0.5 text-sm text-white/50">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl bg-brand-teal/10 p-4">
            <p className="font-display text-sm font-medium text-brand-teal">Outcome</p>
            <p className="mt-1 text-sm leading-relaxed text-white/65">
              A stronger mental model for learning any language, framework, or technical track.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
