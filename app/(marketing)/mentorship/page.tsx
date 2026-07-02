import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  MessageCircle,
  Route,
  Target,
  Timer,
  UserCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { JsonLd } from '@/components/seo/json-ld';
import { serviceLd } from '@/lib/seo';
import { whatsappUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Private Mentorship',
  description: 'Private 1-on-1 mentorship with Abdullah Sherdy at CoreCraft - weekly sessions, daily WhatsApp follow-up, and a clear study guide for programming basics.',
  alternates: { canonical: '/mentorship' },
};

const heroStats = [
  { label: 'Mentoring experience', value: '~4 years' },
  { label: 'Students taught', value: '~100' },
  { label: 'Session length', value: '1-2 hours' },
  { label: 'Frequency', value: 'Weekly + daily' },
];

const differences = [
  {
    icon: UserCheck,
    title: 'Truly 1-on-1',
    body: 'Every session is private, so we can move at your pace and focus on what you need.',
  },
  {
    icon: Target,
    title: 'Lower price than private courses',
    body: 'You get personal help at a lower price than a full private course.',
  },
  {
    icon: MessageCircle,
    title: 'Advice anywhere, anytime',
    body: 'Send questions on WhatsApp between sessions. You do not need to wait for the next class.',
  },
  {
    icon: Route,
    title: 'Level up, fast',
    body: 'A clear plan helps you improve faster and avoid random study.',
  },
];

const rhythm = [
  {
    icon: ClipboardList,
    title: 'Find the gap',
    body: 'We start with your level, your problems, and your goal.',
  },
  {
    icon: BookOpen,
    title: 'Study with structure',
    body: 'Each week has clear topics, simple explanations, resources, and practice.',
  },
  {
    icon: MessageCircle,
    title: 'Follow up daily',
    body: 'You can send questions while you practice, not only during the session.',
  },
];

const format = [
  {
    label: 'Session length',
    value: '1-2 hours',
    detail: 'Changed based on what you need each week.',
  },
  {
    label: 'Frequency',
    value: 'Once a week',
    detail: 'With a daily WhatsApp follow-up between sessions.',
  },
  {
    label: 'Platform',
    value: 'Flexible',
    detail: 'We pick what works based on availability.',
  },
  {
    label: 'Sessions per course',
    value: 'Plan-based',
    detail: 'The number of sessions depends on your plan and goals.',
  },
  {
    label: 'Between sessions',
    value: 'Full study guide',
    detail: 'Weekly topics, resources, simple notes, tips, and practice.',
  },
  {
    label: 'Teaching languages',
    value: 'Arabic / English',
    detail: 'Whichever you are most comfortable learning in.',
  },
];

const subjects = [
  {
    title: 'Intro to Programming',
    body: 'Variables, conditions, loops, functions, debugging, and reading code.',
  },
  {
    title: 'Object-Oriented Programming',
    body: 'Classes, objects, inheritance, and how to use OOP ideas well.',
  },
  {
    title: 'Functional Programming',
    body: 'Pure functions, immutability, and simple ways to work with data.',
  },
  {
    title: 'Data Structures & Algorithms',
    body: 'Arrays, lists, stacks, queues, trees, graphs, and problem solving.',
  },
];

const fitSignals = [
  'You want direct feedback, not only videos.',
  'You can use a computer and you are ready to practice.',
  'You want strong basics before learning new tools.',
];

const deliverables = [
  'Weekly private session',
  'Daily WhatsApp follow-up',
  'Detailed study guide',
  'Practice sheet',
  'Suggested resources',
  'Arabic or English teaching',
];

export default function MentorshipPage() {
  return (
    <main>
      <JsonLd data={serviceLd()} />
      <section className="bg-brand-fog px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <span className="mb-4 inline-flex rounded-full border border-brand-teal px-3 py-1 text-xs font-medium text-brand-teal">
              Private mentorship
            </span>
            <h1 className="max-w-3xl font-display text-4xl font-bold text-brand-navy md:text-5xl">
              Build strong programming basics with a weekly mentor.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-navy/70 md:text-lg">
              Private help with Abdullah Sherdy for students who want a clear plan, simple
              explanations, and support while they practice.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="lg" asChild>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="gap-2">
                  Book on WhatsApp
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Ask first</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-brand border border-brand-navy/10 bg-white p-5">
            <div className="flex items-start gap-3 border-b border-brand-navy/10 pb-5">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
                <Timer className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-display text-lg font-medium text-brand-navy">
                  Weekly session, daily support
                </p>
                <p className="mt-1 text-sm leading-relaxed text-brand-navy/65">
                  One focused session each week, with WhatsApp help while you practice.
                </p>
              </div>
            </div>
            <dl className="mt-5 grid grid-cols-2 gap-4">
              {heroStats.map((item) => (
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
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-brand-navy/60">
              Mentorship, not just a course
            </p>
            <h2 className="font-display text-3xl font-bold text-brand-navy md:text-4xl">
              Get help when self-study feels slow.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-navy/70">
              The goal is not to finish more videos. The goal is to understand the main ideas and
              know what to practice next.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {differences.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-brand border border-brand-navy/10 bg-brand-fog p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-teal">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-medium text-brand-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-navy/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-brand-fog">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-brand-navy/60">
              How mentorship works
            </p>
            <h2 className="font-display text-3xl font-bold text-brand-navy md:text-4xl">
              A simple weekly plan.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-navy/70 md:text-lg">
              Each plan is made for you. Every week we find what is missing, explain it, practice
              it, and answer your questions.
            </p>
          </div>

          <div className="space-y-4">
            {rhythm.map(({ icon: Icon, title, body }, index) => (
              <div key={title} className="flex gap-4 rounded-brand border border-brand-navy/10 bg-white p-5">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-brand-navy/45">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-medium text-brand-navy">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-navy/65">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {format.map((item) => (
            <div key={item.label} className="rounded-brand border border-brand-navy/10 bg-white p-5">
              <dt className="text-sm font-medium text-brand-navy/60">{item.label}</dt>
              <dd className="mt-1 font-display text-xl font-medium text-brand-navy">{item.value}</dd>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/70">{item.detail}</p>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-brand-navy/60">
              What we cover
            </p>
            <h2 className="font-display text-3xl font-bold text-brand-navy md:text-4xl">
              The basics behind every framework.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-navy/70 md:text-lg">
              I work in backend development, especially .NET. But in mentorship, we focus on the
              basics that make every next track easier.
            </p>
          </div>
          <div>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {subjects.map((subject) => (
                <li
                  key={subject.title}
                  className="rounded-brand border border-brand-navy/10 bg-brand-fog p-5"
                >
                  <h3 className="font-display text-lg font-medium text-brand-navy">{subject.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-navy/65">{subject.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-brand-fog">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-brand-navy/60">
              Who this is for
            </p>
            <h2 className="font-display text-3xl font-bold text-brand-navy md:text-4xl">
              Good for students who want support and clear explanations.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-navy/70 md:text-lg">
              You do not need to be a programmer yet. You need to know how to use a computer, have
              time to practice, and want to understand why the code works.
            </p>
            <ul className="mt-6 space-y-3">
              {fitSignals.map((signal) => (
                <li key={signal} className="flex items-start gap-3 text-sm leading-relaxed text-brand-navy/75">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-teal" aria-hidden="true" />
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-brand border border-brand-navy/10 bg-white p-5">
            <p className="font-display text-lg font-medium text-brand-navy">What you get</p>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {deliverables.map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-lg bg-brand-fog px-4 py-3">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-brand-teal" aria-hidden="true" />
                  <span className="text-sm font-medium text-brand-navy/75">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section dark className="bg-brand-midnight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Ready to build strong basics with direct feedback?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            Send your current level, your goal, and the topic that feels hard. I will help you
            decide if mentorship is the right next step.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="gap-2">
                Book on WhatsApp
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Use contact form</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
