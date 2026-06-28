import Link from 'next/link';
import { CONTACT, whatsappUrl } from '@/lib/site';
import { navLinks } from '@/lib/nav';

export function Footer() {
  return (
    <footer className="bg-brand-midnight text-white/70">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <Link href="/" className="text-lg font-bold font-display text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded" aria-label="CoreCraft home">
              Core<span className="text-brand-teal">Craft</span>
            </Link>
            <p className="mt-2 text-sm font-body text-white/60 max-w-xs">
              Teaching the fundamentals every professional relies on.
            </p>
            <div className="mt-4 flex flex-col gap-1 text-sm font-body">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded"
              >
                WhatsApp {CONTACT.whatsappDisplay}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm font-body text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-sm font-body text-white/60">
            &copy; {new Date().getFullYear()} CoreCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
