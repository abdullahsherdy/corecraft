import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Level = 'beginner' | 'intermediate' | 'advanced';
type Track = 'foundations' | 'backend' | 'frontend';

interface CourseCardProps {
  title:    string;
  slug:     string;
  track:    Track;
  level:    Level;
  duration: string;
  excerpt:  string;
}

const trackLabel: Record<Track, string> = {
  foundations: 'Foundations',
  backend:     'Backend',
  frontend:    'Frontend',
};

const levelLabel: Record<Level, string> = {
  beginner:     'Beginner',
  intermediate: 'Intermediate',
  advanced:     'Advanced',
};

const levelStyles: Record<Level, string> = {
  beginner:     'bg-[#E6FAF8] text-[#007A6B]',
  intermediate: 'bg-[#FFF5E0] text-[#7A4E00]',
  advanced:     'bg-[#FFE6E0] text-[#7A2E00]',
};

export function CourseCard({ title, slug, track, level, duration, excerpt }: CourseCardProps) {
  return (
    <Link
      href={`/courses/${slug}`}
      className={cn(
        'group flex flex-col overflow-hidden rounded-xl border border-brand-navy/10 bg-white',
        'transition-colors duration-150 hover:border-brand-teal',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal'
      )}
    >
      <div className="h-[3px] bg-brand-teal" aria-hidden="true" />
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap gap-1.5">
          <span className="rounded-full bg-brand-fog px-2.5 py-0.5 text-xs font-medium text-brand-navy">
            {trackLabel[track]}
          </span>
          <span className={cn('rounded-full px-2.5 py-0.5 text-xs font-medium', levelStyles[level])}>
            {levelLabel[level]}
          </span>
        </div>
        <h3 className="mb-2 font-display text-lg font-medium leading-tight text-brand-navy">
          {title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-brand-navy/60">
          {excerpt}
        </p>
        <div className="flex items-center justify-between border-t border-brand-navy/5 pt-3">
          <span className="inline-flex items-center gap-1.5 text-xs text-brand-navy/50">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {duration}
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-teal">
            View
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
