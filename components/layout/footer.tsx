import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT, whatsappUrl } from '@/lib/site';
import { footerNavLinks } from '@/lib/nav';

const courseLinks = [
  { href: '/courses', label: 'Foundations track' },
  { href: '/courses', label: 'Private courses' },
  { href: '/mentorship', label: 'Private mentorship' },
];

export function Footer() {
  return (
    <footer className="bg-brand-midnight text-white/70">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr_1fr]">
          <div>
            <Link
              href="/"
              className="text-lg font-bold font-display text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded"
              aria-label="CoreCraft home"
            >
              Core<span className="text-brand-teal">Craft</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
              Teaching the fundamentals every professional programmer relies on.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
                Arabic / English
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
                1-on-1 available
              </span>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <p className="font-display text-sm font-medium text-white">Site</p>
            <ul className="mt-4 space-y-2">
              {footerNavLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Learning links">
            <p className="font-display text-sm font-medium text-white">Learning</p>
            <ul className="mt-4 space-y-2">
              {courseLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-display text-sm font-medium text-white">Start here</p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Share your current level and get a recommended next step for courses or mentorship.
            </p>
            <Button asChild size="sm" className="mt-5 gap-2">
              <Link href="/contact">
                Book free intro call
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 text-sm md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex flex-col gap-2 md:flex-row md:gap-5">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded"
            >
              WhatsApp {CONTACT.whatsappDisplay}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded"
            >
              {CONTACT.email}
            </a>
          </div>
          <p className="text-white/50">
            &copy; {new Date().getFullYear()} CoreCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
