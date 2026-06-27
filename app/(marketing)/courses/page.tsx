import type { Metadata } from 'next';
import { sanityFetch } from '@/lib/sanity/client';
import { COURSES_QUERY } from '@/lib/sanity/queries';
import type { Course } from '@/lib/sanity/types';
import { CourseCard } from '@/components/ui/course-card';

export const metadata: Metadata = {
  title: 'Courses — CoreCraft',
  description: 'Programming fundamentals taught from scratch — Intro to Programming, OOP, Functional Programming, and Data Structures & Algorithms.',
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/courses` },
  openGraph: {
    title: 'Courses — CoreCraft',
    description: 'Programming fundamentals taught from scratch.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/courses`,
  },
};

export default async function CoursesPage() {
  const courses = await sanityFetch<Course>(COURSES_QUERY);

  return (
    <main>
      
      <section className="bg-brand-fog px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <span className="mb-3 inline-block rounded-full border border-brand-teal px-3 py-1 text-xs font-medium text-brand-teal">
            Foundations track
          </span>
          <h1 className="font-display text-4xl font-bold text-brand-navy md:text-5xl">
            Our courses
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-brand-navy/60 md:text-lg">
            Four subjects every programmer must know — before they pick a framework or start a job.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-12">
        <div className="mx-auto max-w-6xl">
          {courses.length === 0 ? (
            <p className="text-center text-base text-brand-navy/60">
              Courses are being prepared. Check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </section>
    </main>
  );
}
