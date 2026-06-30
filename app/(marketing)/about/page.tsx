import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { JsonLd } from '@/components/seo/json-ld';
import { personLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About Abdullah Sherdy',
  description:
    'Meet Abdullah Sherdy, software engineer and coding instructor teaching programming fundamentals: Intro, OOP, FP, and DSA in Arabic and English.',
  alternates: { canonical: '/about' },
};

const principles = [
  'Fundamentals before frameworks, so every new tool has somewhere solid to land.',
  'Understand why the code works, not just how to copy the next step.',
  'Practice with clear feedback until concepts become decisions you can explain.',
];

const experience = [
  { label: 'Teaching and mentoring', value: '~4 years' },
  { label: 'Students taught', value: '~100' },
  { label: 'Software engineering', value: '1 year' },
  { label: 'Teaching languages', value: 'Arabic / English' },
];

const focusAreas = ['Intro to Programming', 'Object-Oriented Programming', 'Functional Programming', 'Data Structures & Algorithms'];

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={personLd()} />
      <section className="bg-brand-fog px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-brand-navy/55">
              About CoreCraft
            </p>
            <h1 className="font-display text-4xl font-bold text-brand-navy md:text-5xl">
              Clear engineering fundamentals, taught with practical context.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-navy/70 md:text-lg">
              I am Abdullah Sherdy, a software engineer and coding instructor. I teach the
              fundamentals behind professional programming so students can reason through code,
              not just repeat steps.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/contact" className="gap-2">
                  Book free intro call
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/courses">View courses</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-brand border border-brand-navy/10 bg-white p-5">
            <div className="flex items-center gap-4 border-b border-brand-navy/10 pb-5">
              <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-navy">
                <span className="font-display text-3xl font-bold text-white">AS</span>
              </div>
              <div>
                <p className="font-display text-xl font-medium text-brand-navy">Abdullah Sherdy</p>
                <p className="mt-1 text-sm leading-relaxed text-brand-navy/65">
                  Software Engineer & Specialised Coding Instructor
                </p>
              </div>
            </div>
            <dl className="mt-5 grid grid-cols-2 gap-4">
              {experience.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-medium uppercase tracking-wider text-brand-navy/45">
                    {item.label}
                  </dt>
                  <dd className="mt-1 font-display text-xl font-medium text-brand-navy">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-brand-navy/60">
              Teaching philosophy
            </p>
            <h2 className="font-display text-3xl font-bold text-brand-navy md:text-4xl">
              The core ideas should feel explainable.
            </h2>
          </div>
          <div className="space-y-5">
            <p className="text-base leading-relaxed text-brand-navy/70 md:text-lg">
              Frameworks change, syntax changes, and tools change. The core does not. CoreCraft
              focuses on problem solving, code reading, clear mental models, and practice that turns
              concepts into decisions.
            </p>
            <ul className="grid grid-cols-1 gap-3">
              {principles.map((principle) => (
                <li
                  key={principle}
                  className="flex items-start gap-3 rounded-brand border border-brand-navy/10 bg-brand-fog p-4 text-sm leading-relaxed text-brand-navy/75"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-teal" aria-hidden="true" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-brand-fog">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-brand-navy/60">
              What CoreCraft teaches
            </p>
            <h2 className="font-display text-3xl font-bold text-brand-navy md:text-4xl">
              A foundation that makes every next stack easier.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-brand-navy/70">
              <p>
                My strongest advantage is not one specific stack. It is the foundation that makes
                new tracks and technologies easier to learn.
              </p>
              <p>
                CoreCraft offers private mentorship, private courses, and group courses for students
                who want direct guidance without skipping the reasoning behind the code.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <div key={area} className="rounded-brand border border-brand-navy/10 bg-white p-4">
                <p className="font-display text-base font-medium text-brand-navy">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
