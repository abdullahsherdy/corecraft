'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { primaryNavLinks } from '@/lib/nav';
import { cn } from '@/lib/utils';

export function Nav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-6">
        {primaryNavLinks.map(({ href, label }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'text-sm font-medium font-body transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded',
                  active ? 'text-white' : 'text-white/70 hover:text-white'
                )}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
