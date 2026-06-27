import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { CourseCard } from '@/components/ui/course-card';
import { sanityFetch } from '@/lib/sanity/client';
import { FEATURED_COURSES_QUERY } from '@/lib/sanity/queries';
import type { Course } from '@/lib/sanity/types';

export async function CoursesPreview() {
  const courses = await sanityFetch<Course>(FEATURED_COURSES_QUERY);

  return (
    <Section className="bg-brand-fog">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="font-display text-4xl font-bold text-brand-navy">Foundations track</h2>
        <p className="mt-4 font-body text-lg text-brand-navy-muted">
          Four courses. The complete foundation every professional programmer needs.
        </p>
      </div>
      {courses.length === 0 ? (
        <p className="text-center font-body text-base text-brand-navy-muted">
          Courses are being prepared. Check back soon.
        </p>
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
          className="rounded font-body text-base font-medium text-brand-teal underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
        >
          See all courses &rarr;
        </Link>
      </div>
    </Section>
  );
}
