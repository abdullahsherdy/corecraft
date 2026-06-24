import Link from 'next/link';
import { Users, BookOpen, MonitorPlay } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon:        React.ReactNode;
  title:       string;
  description: string;
  href:        string;
  cta:         string;
}

function ServiceCard({ icon, title, description, href, cta }: ServiceCardProps) {
  return (
    <div className={cn(
      'rounded-brand border border-brand-fog bg-brand-fog p-8',
      'flex flex-col gap-4'
    )}>
      <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal">
        {icon}
      </div>
      <h3 className="text-2xl font-medium font-display text-brand-navy">{title}</h3>
      <p className="text-base font-body text-brand-navy-muted flex-1">{description}</p>
      <Link
        href={href}
        className="text-sm font-medium font-body text-brand-teal underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded self-start"
      >
        {cta} &rarr;
      </Link>
    </div>
  );
}

const services: ServiceCardProps[] = [
  {
    icon:        <Users size={24} />,
    title:       'Private Mentorship',
    description: '1-on-1 sessions with an instructor, scheduled around you. Work through exactly what you need — no fluff, no wasted time.',
    href:        '/mentorship',
    cta:         'Book a session',
  },
  {
    icon:        <BookOpen size={24} />,
    title:       'Private Courses',
    description: 'Self-paced material with direct instructor access for questions. Go at the speed that works for you.',
    href:        '/courses',
    cta:         'View courses',
  },
  {
    icon:        <MonitorPlay size={24} />,
    title:       'Group Courses',
    description: 'Cohort-based learning with peer accountability. Share the experience with others working through the same material.',
    href:        '/courses',
    cta:         'View courses',
  },
];

export function ServicesSection() {
  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold font-display text-brand-navy">How CoreCraft works</h2>
        <p className="mt-4 text-lg font-body text-brand-navy-muted">
          Choose the format that fits your schedule and learning style.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </Section>
  );
}
