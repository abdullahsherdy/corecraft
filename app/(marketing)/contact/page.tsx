import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Mail, MessageCircle, Timer, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT, whatsappUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Book a free intro call with CoreCraft, ask about courses, or send a question over WhatsApp or email.',
  alternates: { canonical: '/contact' },
};

const contactMethods = [
  {
    label: 'WhatsApp',
    value: CONTACT.whatsappDisplay,
    href: whatsappUrl(),
    icon: MessageCircle,
    detail: 'Fastest way to start. I follow up daily.',
  },
  {
    label: 'Email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: Mail,
    detail: 'Best for longer questions or course details.',
  },
];

const nextSteps = [
  {
    icon: MessageCircle,
    title: 'Send your goal',
    body: 'Tell me what you want to learn, your current level, and whether you prefer mentorship or a course.',
  },
  {
    icon: UserCheck,
    title: 'Get a recommended path',
    body: 'I will suggest a starting point based on your background, schedule, and confidence level.',
  },
  {
    icon: Timer,
    title: 'Choose the format',
    body: 'Continue with private mentorship, a private course, or a group track when available.',
  },
];

const formatOptions = ['Private mentorship', 'Private course', 'Group course', 'Not sure yet'];
const levelOptions = ['Beginner', 'Some basics', 'Intermediate', 'Advanced'];

export default function ContactPage() {
  return (
    <main>
      <section className="bg-brand-fog px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-brand-navy/55">
              Book free intro call
            </p>
            <h1 className="font-display text-4xl font-bold text-brand-navy md:text-5xl">
              Tell me where you are. I will help you choose the next step.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-navy/70 md:text-lg">
              Ask about the foundations track, private courses, or your current learning blocker.
              The fastest path is WhatsApp, and email works well for detailed questions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="gap-2">
                  Message on WhatsApp
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={`mailto:${CONTACT.email}`}>Send email</a>
              </Button>
            </div>
          </div>

          <div className="rounded-brand border border-brand-navy/10 bg-white p-5">
            <p className="font-display text-lg font-medium text-brand-navy">What happens next</p>
            <div className="mt-5 space-y-4">
              {nextSteps.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-display text-base font-medium text-brand-navy">{title}</h2>
                    <p className="mt-1 text-sm leading-relaxed text-brand-navy/65">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-4">
            {contactMethods.map(({ label, value, href, icon: Icon, detail }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('https://') ? '_blank' : undefined}
                rel={href.startsWith('https://') ? 'noopener noreferrer' : undefined}
                className="group block rounded-brand border border-brand-navy/10 bg-brand-fog p-5 transition-colors hover:border-brand-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-brand-teal">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-navy/60">{label}</p>
                    <p className="mt-1 break-all font-display text-lg font-medium text-brand-navy">
                      {value}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-brand-navy/65">{detail}</p>
                  </div>
                </div>
              </a>
            ))}

            <div className="rounded-brand border border-brand-navy/10 bg-white p-5">
              <dl className="space-y-3">
                <div className="flex justify-between gap-4">
                  <dt className="text-sm text-brand-navy/60">Location</dt>
                  <dd className="text-sm font-medium text-brand-navy">{CONTACT.location}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-sm text-brand-navy/60">Languages</dt>
                  <dd className="text-sm font-medium text-brand-navy">
                    {CONTACT.languages.join(' / ')}
                  </dd>
                </div>
              </dl>
            </div>
          </aside>

          <form
            action={`mailto:${CONTACT.email}`}
            method="post"
            encType="text/plain"
            className="rounded-brand border border-brand-navy/10 bg-brand-fog p-6 md:p-8"
          >
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-brand-navy/55">
                Inquiry form
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
                Share the context before we talk
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-navy/65">
                This opens your email app with the details. WhatsApp is still the fastest option.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-brand-navy">Name</span>
                <input
                  name="name"
                  type="text"
                  required
                  className="mt-2 h-11 w-full rounded-lg border border-brand-navy/15 bg-white px-3 text-sm text-brand-navy outline-none transition-colors focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-brand-navy">Email or WhatsApp</span>
                <input
                  name="contact"
                  type="text"
                  required
                  className="mt-2 h-11 w-full rounded-lg border border-brand-navy/15 bg-white px-3 text-sm text-brand-navy outline-none transition-colors focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-brand-navy">Preferred format</span>
                <select
                  name="preferred_format"
                  className="mt-2 h-11 w-full rounded-lg border border-brand-navy/15 bg-white px-3 text-sm text-brand-navy outline-none transition-colors focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose one
                  </option>
                  {formatOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-medium text-brand-navy">Current level</span>
                <select
                  name="current_level"
                  className="mt-2 h-11 w-full rounded-lg border border-brand-navy/15 bg-white px-3 text-sm text-brand-navy outline-none transition-colors focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose one
                  </option>
                  {levelOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-medium text-brand-navy">Goal or question</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-brand-navy/15 bg-white px-3 py-3 text-sm text-brand-navy outline-none transition-colors focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button type="submit" className="gap-2">
                Send inquiry
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Link
                href="/courses"
                className="rounded text-sm font-medium text-brand-teal underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
              >
                Explore courses first
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
