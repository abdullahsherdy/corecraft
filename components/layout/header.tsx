import Link from 'next/link';
import { Nav } from './nav';

export function Header() {
  return (
    <header className="bg-brand-navy sticky top-0 z-50 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded"
          aria-label="CoreCraft home"
        >
          <span className="text-lg font-bold font-display text-white">
            Core<span className="text-brand-teal">Craft</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Nav />
          <Link
            href="/contact"
            className="text-sm font-medium font-body text-brand-teal hover:underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
