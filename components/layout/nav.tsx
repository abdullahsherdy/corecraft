import Link from 'next/link';

const links = [
  { href: '/courses',    label: 'Courses' },
  { href: '/mentorship', label: 'Mentorship' },
  { href: '/about',      label: 'About' },
  { href: '/blog',       label: 'Blog' },
  { href: '/contact',    label: 'Contact' },
];

export function Nav() {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-6">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-sm font-medium font-body text-white/80 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
