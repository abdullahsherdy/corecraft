import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface CourseCardData {
  title:    string;
  slug:     string;
  track:    string;
  level:    'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  excerpt:  string;
}

const courses: CourseCardData[] = [
  {
    title:    'Intro to Programming',
    slug:     'intro-to-programming',
    track:    'Foundations',
    level:    'Beginner',
    duration: '6 weeks',
    excerpt:  'Variables, control flow, functions, and loops — the building blocks every programmer needs before touching a framework.',
  },
  {
    title:    'Object-Oriented Programming',
    slug:     'object-oriented-programming',
    track:    'Foundations',
    level:    'Intermediate',
    duration: '8 weeks',
    excerpt:  'Classes, inheritance, encapsulation, and polymorphism. Learn to model real-world problems in code.',
  },
  {
    title:    'Functional Programming',
    slug:     'functional-programming',
    track:    'Foundations',
    level:    'Intermediate',
    duration: '8 weeks',
    excerpt:  'Pure functions, immutability, higher-order functions, and composition. Write code that is predictable and easy to test.',
  },
  {
    title:    'Data Structures & Algorithms',
    slug:     'data-structures-algorithms',
    track:    'Foundations',
    level:    'Advanced',
    duration: '10 weeks',
    excerpt:  'Arrays, linked lists, trees, graphs, sorting, and searching. The knowledge behind every technical interview and efficient system.',
  },
];

function CourseCard({ title, slug, track, level, duration, excerpt }: CourseCardData) {
  return (
    <Link
      href={`/courses/${slug}`}
      className={cn(
        'group rounded-brand border border-brand-navy/10 bg-white p-6',
        'flex flex-col gap-4 hover:border-brand-teal transition-colors duration-150',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal'
      )}
    >
      <div className="flex items-center gap-2 flex-wrap">
        <Badge variant="track">{track}</Badge>
        <Badge variant="level">{level}</Badge>
        <span className="text-sm font-medium font-body text-brand-navy-muted ml-auto">{duration}</span>
      </div>
      <h3 className="text-lg font-medium font-display text-brand-navy group-hover:text-brand-teal transition-colors">
        {title}
      </h3>
      <p className="text-sm font-body text-brand-navy-muted flex-1">{excerpt}</p>
      <span className="text-sm font-medium font-body text-brand-teal">
        View course &rarr;
      </span>
    </Link>
  );
}

export function CoursesPreview() {
  return (
    <Section className="bg-brand-fog">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold font-display text-brand-navy">Foundations track</h2>
        <p className="mt-4 text-lg font-body text-brand-navy-muted">
          Four courses. The complete foundation every professional programmer needs.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {courses.map((c) => (
          <CourseCard key={c.slug} {...c} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/courses"
          className="text-base font-medium font-body text-brand-teal underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded"
        >
          See all courses &rarr;
        </Link>
      </div>
    </Section>
  );
}
