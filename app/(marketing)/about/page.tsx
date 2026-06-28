import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { JsonLd } from '@/components/seo/json-ld';
import { personLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About Abdullah Sherdy',
  description: 'Meet Abdullah Sherdy, software engineer and coding instructor teaching programming fundamentals — Intro, OOP, FP, and DSA — in Arabic and English.',
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

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={personLd()} />
      <section className="bg-brand-fog px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-brand-navy/50">
              Build from the core.
            </p>
            <h1 className="font-display text-4xl font-bold text-brand-navy md:text-5xl">
              Abdullah Sherdy
            </h1>
            <p className="mt-3 font-display text-xl font-medium text-brand-navy-muted">
              Software Engineer &amp; Specialised Coding Instructor
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-navy/70 md:text-lg">
              I teach programming fundamentals through CoreCraft, helping students build a clear base in Intro to Programming, OOP, Functional Programming, and Data Structures &amp; Algorithms. My work is simple: make the core ideas understandable, practical, and strong enough to carry you into any technology.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="flex h-48 w-48 items-center justify-center rounded-full bg-brand-navy shadow-sm md:h-56 md:w-56">
              <span className="font-display text-6xl font-bold text-white md:text-7xl">
                AS
              </span>
            </div>
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
              Fundamentals before frameworks.
            </h2>
          </div>
          <div className="space-y-5">
            <p className="text-base leading-relaxed text-brand-navy/70 md:text-lg">
              Frameworks change, syntax changes, and tools change. The core does not. I teach students to reason about problems, read code carefully, and understand the decisions behind a solution.
            </p>
            <ul className="space-y-3">
              {principles.map((principle) => (
                <li key={principle} className="rounded-brand border border-brand-navy/10 bg-brand-fog p-4 text-sm leading-relaxed text-brand-navy/75">
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-brand-fog">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-brand-navy/60">
              Background and experience
            </p>
            <h2 className="font-display text-3xl font-bold text-brand-navy md:text-4xl">
              A practical engineering base, built for teaching.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-brand-navy/70">
              <p>
                I hold a bachelor&apos;s degree in Computer Science and Artificial Intelligence, and I work professionally in backend development, especially with .NET.
              </p>
              <p>
                My strongest advantage is not one specific stack. It is the foundation that makes new tracks and technologies easier to learn. That is the same foundation I help students build at CoreCraft.
              </p>
              <p>
                CoreCraft offers private mentorship, private courses, and group courses for students who want direct guidance without skipping the reasoning behind the code.
              </p>
            </div>
          </div>

          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {experience.map((item) => (
              <div key={item.label} className="rounded-brand border border-brand-navy/10 bg-white p-5">
                <dt className="text-sm font-medium text-brand-navy/60">{item.label}</dt>
                <dd className="mt-1 font-display text-2xl font-medium text-brand-navy">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>
    </main>
  );
}
