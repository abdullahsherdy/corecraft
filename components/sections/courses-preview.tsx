import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { CourseCard } from '@/components/ui/course-card';
import { Button } from '@/components/ui/button';
import { sanityFetch } from '@/lib/sanity/client';
import { FEATURED_COURSES_QUERY } from '@/lib/sanity/queries';
import type { Course } from '@/lib/sanity/types';

export async function CoursesPreview() {
  const courses = await sanityFetch<Course>(FEATURED_COURSES_QUERY);

  return (
    <Section className="bg-brand-fog">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-brand-navy/55">
          Foundations track
        </p>
        <h2 className="font-display text-4xl font-bold text-brand-navy">The core before the stack</h2>
        <p className="mt-4 font-body text-lg leading-relaxed text-brand-navy/70">
          Four courses. The complete foundation every professional programmer needs.
        </p>
      </div>
      {courses.length === 0 ? (
        <div className="mx-auto max-w-xl rounded-brand border border-brand-navy/10 bg-white p-8 text-center">
          <h3 className="font-display text-2xl font-medium text-brand-navy">
            Courses are being prepared
          </h3>
          <p className="mt-3 font-body text-base leading-relaxed text-brand-navy/70">
            Message us to ask about upcoming cohorts or get a recommended starting point.
          </p>
          <Button asChild className="mt-6">
            <Link href="/contact">Contact CoreCraft</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {courses.map((c) => (
            <CourseCard
              key={c._id}
              title={c.title}
              slug={c.slug.current}
              track={c.track}
              level={c.level}
              duration={c.duration}
              excerpt={c.excerpt}
            />
          ))}
        </div>
      )}
      <div className="mt-10 text-center">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 rounded font-body text-base font-medium text-brand-teal underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
        >
          See all courses
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}
