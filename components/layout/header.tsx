'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { Nav } from './nav';
import { NavDrawer } from './nav-drawer';

export function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="bg-brand-navy sticky top-0 z-50 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded"
            aria-label="CoreCraft home"
          >
            <Logo variant="wordmark" />
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

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal transition-colors"
            aria-label="Open navigation menu"
            onClick={() => setDrawerOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <NavDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
