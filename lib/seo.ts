import { SITE_URL, absoluteUrl, CONTACT, ORG, whatsappUrl } from '@/lib/site';

export function organizationLd() {
  return {
    '@type': 'EducationalOrganization',
    '@id': `${SITE_URL}/#organization`,
    name: ORG.name,
    slogan: ORG.tagline,
    url: SITE_URL,
    logo: `${SITE_URL}/opengraph-image`,
    email: `mailto:${CONTACT.email}`,
    founder: {
      '@type': 'Person',
      '@id': `${SITE_URL}/about/#person`,
      name: ORG.founder,
    },
    sameAs: [whatsappUrl()],
  };
}

export function websiteLd() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: ORG.name,
    url: SITE_URL,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en',
  };
}

export function personLd() {
  return {
    '@type': 'Person',
    '@id': `${absoluteUrl('/about')}#person`,
    name: ORG.founder,
    jobTitle: 'Coding Instructor',
    description:
      'Software engineer and specialised coding instructor teaching programming fundamentals — Intro, OOP, Functional Programming, and Data Structures & Algorithms.',
    worksFor: { '@id': `${SITE_URL}/#organization` },
    email: `mailto:${CONTACT.email}`,
    address: { '@type': 'PostalAddress', addressCountry: CONTACT.location },
    knowsLanguage: CONTACT.languages,
    knowsAbout: [
      'Intro to Programming',
      'Object-Oriented Programming',
      'Functional Programming',
      'Data Structures & Algorithms',
      '.NET',
      'Backend Development',
    ],
    url: absoluteUrl('/about'),
  };
}

interface CourseLdInput {
  title: string;
  slug: string;
  excerpt: string;
  track: string;
  level: string;
  duration: string;
  outcomes?: string[];
}

export function courseLd(course: CourseLdInput) {
  return {
    '@type': 'Course',
    '@id': `${absoluteUrl(`/courses/${course.slug}`)}#course`,
    name: course.title,
    description: course.excerpt,
    url: absoluteUrl(`/courses/${course.slug}`),
    educationalLevel: course.level,
    courseCode: course.track,
    timeRequired: course.duration,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      instructor: { '@id': `${absoluteUrl('/about')}#person` },
    },
    provider: { '@id': `${SITE_URL}/#organization` },
    teaches: course.outcomes ?? [],
  };
}

export function serviceLd() {
  return {
    '@type': 'Service',
    '@id': `${absoluteUrl('/mentorship')}#service`,
    name: 'Private Mentorship',
    serviceType: 'Private 1-on-1 Programming Mentorship',
    description:
      'Private 1-on-1 mentorship with weekly sessions, daily WhatsApp follow-up, and a detailed study guide covering Intro to Programming, OOP, Functional Programming, and Data Structures & Algorithms.',
    url: absoluteUrl('/mentorship'),
    areaServed: 'Worldwide',
    provider: { '@id': `${SITE_URL}/#organization` },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: whatsappUrl(),
      servicePhone: CONTACT.whatsappDisplay,
    },
    offers: {
      '@type': 'Offer',
      availability: 'InStock',
      priceCurrency: 'EGP',
      description: 'Private mentorship — contact to book. Priced below private 1:1 courses.',
    },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
