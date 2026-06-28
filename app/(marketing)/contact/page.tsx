import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CONTACT, whatsappUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with CoreCraft. Book private mentorship, ask about courses, or send a question — over WhatsApp or email.',
  alternates: { canonical: '/contact' },
};

const details = [
  { label: 'WhatsApp', value: CONTACT.whatsappDisplay, href: whatsappUrl() },
  { label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { label: 'Location', value: CONTACT.location },
  { label: 'Teaching languages', value: CONTACT.languages.join(' / ') },
];

export default function ContactPage() {
  return (
    <main>
      <section className="bg-brand-fog px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-brand-navy/50">
            Build from the core.
          </p>
          <h1 className="font-display text-4xl font-bold text-brand-navy md:text-5xl">
            Let&apos;s talk
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-navy/70 md:text-lg">
            Book private mentorship, ask about a course, or send a question. The fastest way to reach me
            is WhatsApp — I follow up daily.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                Message on WhatsApp
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/mentorship">View mentorship</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {details.map((item) => (
              <div
                key={item.label}
                className="rounded-brand border border-brand-navy/10 bg-brand-fog p-5"
              >
                <dt className="text-sm font-medium text-brand-navy/60">{item.label}</dt>
                {item.href ? (
                  <dd className="mt-1">
                    <a
                      href={item.href}
                      className="font-display text-lg font-medium text-brand-navy underline-offset-4 hover:underline"
                    >
                      {item.value}
                    </a>
                  </dd>
                ) : (
                  <dd className="mt-1 font-display text-lg font-medium text-brand-navy">
                    {item.value}
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
