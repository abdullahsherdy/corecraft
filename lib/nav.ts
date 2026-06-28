import type { Course } from '@/lib/sanity/types';

export const navLinks = [
  { href: '/courses', label: 'Courses' },
  { href: '/mentorship', label: 'Mentorship' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
] as const;

export const trackLabel: Record<Course['track'], string> = {
  foundations: 'Foundations',
  backend: 'Backend',
  frontend: 'Frontend',
};

export const levelLabel: Record<Course['level'], string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};
