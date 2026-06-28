export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://corecraft-one.vercel.app';

export function absoluteUrl(path = ''): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export const CONTACT = {
  email: 'abdullah.sherdy.work@gmail.com',
  whatsappDisplay: '+201021862880',
  whatsappE164: '201021862880',
  location: 'Egypt',
  languages: ['Arabic', 'English'],
} as const;

export function whatsappUrl(): string {
  return `https://wa.me/${CONTACT.whatsappE164}`;
}

export const ORG = {
  name: 'CoreCraft',
  tagline: 'Build from the core.',
  founder: 'Abdullah Sherdy',
  founderRole: 'Software Engineer & Specialised Coding Instructor',
} as const;
