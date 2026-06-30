import Link from 'next/link';
import { ArrowRight, BookOpen, MonitorPlay, Users } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

function ServiceCard({ icon, eyebrow, title, description, href, cta }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group flex flex-col gap-5 rounded-brand border border-brand-navy/10 bg-brand-fog p-6',
        'transition-colors duration-150 hover:border-brand-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal'
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
          {icon}
        </div>
        <ArrowRight
          className="h-5 w-5 text-brand-teal transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </div>
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-brand-navy/55">
          {eyebrow}
        </p>
        <h3 className="font-display text-2xl font-medium text-brand-navy">{title}</h3>
        <p className="mt-3 text-base leading-relaxed text-brand-navy/70">{description}</p>
      </div>
      <span className="mt-auto text-sm font-medium text-brand-teal">{cta}</span>
    </Link>
  );
}

const services: ServiceCardProps[] = [
  {
    icon: <Users size={24} />,
    eyebrow: 'Need help now',
    title: 'Private Mentorship',
    description:
      'Weekly 1-on-1 sessions, daily WhatsApp follow-up, and a plan shaped around your current level.',
    href: '/contact',
    cta: 'Book free intro call',
  },
  {
    icon: <BookOpen size={24} />,
    eyebrow: 'Want a full path',
    title: 'Private Courses',
    description:
      'A structured foundations track with direct instructor support, practice, and clear weekly topics.',
    href: '/courses',
    cta: 'Explore courses',
  },
  {
    icon: <MonitorPlay size={24} />,
    eyebrow: 'Learn with peers',
    title: 'Group Courses',
    description:
      'Cohort-based learning for students who want structure, accountability, and shared practice.',
    href: '/courses',
    cta: 'View available tracks',
  },
];

export function ServicesSection() {
  return (
    <Section>
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-brand-navy/55">
          Choose your path
        </p>
        <h2 className="font-display text-4xl font-bold text-brand-navy">How CoreCraft works</h2>
        <p className="mt-4 text-lg leading-relaxed text-brand-navy/70">
          Pick the learning format that matches your goal, schedule, and current confidence level.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </Section>
  );
}
