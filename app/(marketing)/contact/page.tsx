import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with CoreCraft. Ask about private mentorship, courses, or group sessions.',
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <section>
      <h1 className="text-5xl font-bold font-display text-brand-navy">Contact</h1>
      <p className="mt-4 text-lg font-body text-brand-navy-muted">Coming soon.</p>
    </section>
  );
}
