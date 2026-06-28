import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://corecraft-one.vercel.app';

export const metadata: Metadata = {
  title: 'Mentorship — CoreCraft',
  description: 'Private 1-on-1 mentorship with Abdullah Sherdy at CoreCraft — weekly sessions, daily WhatsApp follow-up, and a detailed study guide covering Intro, OOP, FP, and Data Structures.',
  alternates: { canonical: `${SITE_URL}/mentorship` },
};

const WHATSAPP_NUMBER = '+201021862880';
const WHATSAPP_URL = 'https://wa.me/201021862880';
const EMAIL = 'abdullah.sherdy.work@gmail.com';

const heroStats = [
  { label: 'Mentoring experience', value: '~4 years' },
  { label: 'Students taught', value: '~100' },
  { label: 'Session length', value: '1–2 hours' },
  { label: 'Frequency', value: 'Weekly + daily' },
];

const differences = [
  {
    title: 'Truly 1-on-1',
    body: 'Private mentorship is one-to-one rather than a group course, so every session is shaped around you and your pace.',
  },
  {
    title: 'Priced below private courses',
    body: 'You get direct guidance at a price lower than a private 1:1 course, without losing the personal focus.',
  },
  {
    title: 'Advice anywhere, anytime',
    body: 'Reach out over WhatsApp whenever a question comes up between sessions — no waiting for the next class.',
  },
  {
    title: 'Level up, fast',
    body: 'A focused plan helps you scale your learning level up in a short period instead of drifting through material.',
  },
];

const format = [
  {
    label: 'Session length',
    value: '1–2 hours',
    detail: 'Adjusted to what you need each week.',
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
    detail: 'Detailed weekly topics, suggested resources, my own explanations, tips and tricks, and a practice sheet.',
  },
  {
    label: 'Teaching languages',
    value: 'Arabic / English',
    detail: 'Whichever you are most comfortable learning in.',
  },
];

const subjects = [
  'Intro to Programming',
  'Object-Oriented Programming',
  'Functional Programming',
  'Data Structures & Algorithms',
];

export default function MentorshipPage() {
  return (
    <main>
      <section className="bg-brand-fog px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.3fr_0.9fr]">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-brand-navy/50">
              Build from the core.
            </p>
            <h1 className="font-display text-4xl font-bold text-brand-navy md:text-5xl">
              Private Mentorship
            </h1>
            <p className="mt-4 font-display text-xl font-medium text-brand-navy-muted">
              With Abdullah Sherdy — Software Engineer &amp; Coding Instructor
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-navy/70 md:text-lg">
              One-on-one mentorship built around you. We meet weekly, follow up daily over WhatsApp, and
              work from a detailed study guide covering Intro, OOP, Functional Programming, and Data
              Structures &amp; Algorithms — so you understand the why, not just the how.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="lg" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Book on WhatsApp
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </Button>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-4">
            {heroStats.map((item) => (
              <div key={item.label} className="rounded-brand border border-brand-navy/10 bg-white p-5">
                <dt className="text-sm font-medium text-brand-navy/45">{item.label}</dt>
                <dd className="mt-1 font-display text-2xl font-medium text-brand-navy">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-brand-navy/45">
              Mentorship, not just a course
            </p>
            <h2 className="font-display text-3xl font-bold text-brand-navy md:text-4xl">
              Guidance that scales your level up — fast.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {differences.map((item) => (
              <div key={item.title} className="rounded-brand border border-brand-navy/10 bg-brand-fog p-5">
                <h3 className="font-display text-lg font-medium text-brand-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-navy/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-brand-fog">
        <div className="max-w-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-brand-navy/45">
            How mentorship works
          </p>
          <h2 className="font-display text-3xl font-bold text-brand-navy md:text-4xl">
            A clear format, every single week.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-navy/70 md:text-lg">
            Each plan is tailored to you, but the structure stays consistent: a focused weekly session,
            daily WhatsApp follow-up, and a study guide that keeps you moving between meetings.
          </p>
        </div>

        <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {format.map((item) => (
            <div key={item.label} className="rounded-brand border border-brand-navy/10 bg-white p-5">
              <dt className="text-sm font-medium text-brand-navy/45">{item.label}</dt>
              <dd className="mt-1 font-display text-xl font-medium text-brand-navy">{item.value}</dd>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/70">{item.detail}</p>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-brand-navy/45">
              What we cover
            </p>
            <h2 className="font-display text-3xl font-bold text-brand-navy md:text-4xl">
              The fundamentals behind every framework.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-navy/70 md:text-lg">
              I work professionally in backend development, especially .NET — but the real advantage is
              the foundation that makes any track easier to learn. That same foundation is what we build
              together.
            </p>
          </div>
          <div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {subjects.map((subject) => (
                <li
                  key={subject}
                  className="rounded-brand border border-brand-navy/10 bg-brand-fog p-4 text-sm font-medium font-body text-brand-navy/75"
                >
                  {subject}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-brand-fog">
        <div className="max-w-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-brand-navy/45">
            Who this is for
          </p>
          <h2 className="font-display text-3xl font-bold text-brand-navy md:text-4xl">
            Ready if you know your way around a computer.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-navy/70 md:text-lg">
            The ideal student has basic computer familiarity — comfortable using a computer beyond everyday
            tasks. You don&apos;t need to be a programmer yet; you just need the willingness to build from the
            core and understand why the code works.
          </p>
        </div>
      </Section>

      <Section dark className="text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-4xl font-bold text-white">
            Ready to build from the core?
          </h2>
          <p className="mt-4 text-lg font-body text-white/70">
            Book your first session over WhatsApp, or email me with any questions about the plan that fits you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                WhatsApp {WHATSAPP_NUMBER}
              </a>
            </Button>
            <Button variant="secondary" size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/20" asChild>
              <a href={`mailto:${EMAIL}`}>Email me</a>
            </Button>
          </div>
          <p className="mt-6 text-sm font-body text-white/50">
            {EMAIL} · {WHATSAPP_NUMBER}
          </p>
        </div>
      </Section>
    </main>
  );
}
