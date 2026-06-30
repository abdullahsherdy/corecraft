'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { primaryNavLinks } from '@/lib/nav';
import { cn } from '@/lib/utils';

interface NavDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function NavDrawer({ open, onClose }: NavDrawerProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  useEffect(() => {
    if (!open) return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    const focusables = () =>
      Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => el.offsetParent !== null);

    const items = focusables();
    if (items.length) items[0].focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const list = focusables();
      if (!list.length) return;
      const first = list[0];
      const last = list[list.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  const transitionClasses = prefersReducedMotion ? '' : 'transition-transform duration-300 ease-in-out';

  return (
    <>
      {/* Overlay */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          'fixed inset-0 z-50 bg-brand-midnight/60 backdrop-blur-sm',
          !prefersReducedMotion && 'transition-opacity duration-300',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      />

      {/* Drawer */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          'fixed right-0 top-0 z-50 h-full w-80 bg-brand-navy flex flex-col',
          transitionClasses,
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header row */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-white/10 shrink-0">
          <Link
            href="/"
            onClick={onClose}
            className="inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded"
            aria-label="CoreCraft home"
          >
            <Logo variant="wordmark" />
          </Link>

          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 rounded text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Nav links */}
        <nav aria-label="Mobile navigation" className="flex-1 flex flex-col justify-center px-5">
          <ul className="flex flex-col gap-2">
            {primaryNavLinks.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(`${href}/`);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={onClose}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'block rounded border-b border-white/10 py-3 font-body text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal',
                      active ? 'text-brand-teal' : 'text-white/80 hover:text-white'
                    )}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA */}
        <div className="px-5 pb-8 shrink-0">
          <Link href="/contact" onClick={onClose} className="block">
            <Button variant="primary" size="lg" className="w-full">
              Book free intro call
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
