'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { NavDrawer } from './nav-drawer';

export function MobileNav() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden inline-flex items-center justify-center p-2 rounded text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal transition-colors"
        aria-label="Open navigation menu"
        aria-expanded={drawerOpen}
        onClick={() => setDrawerOpen(true)}
      >
        <Menu size={22} />
      </button>

      <NavDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
