import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { sanityFetch } from '@/lib/sanity/client';
import { COURSES_QUERY } from '@/lib/sanity/queries';
import type { Course } from '@/lib/sanity/types';
import { CourseCard } from '@/components/ui/course-card';
import { Button } from '@/components/ui/button';
import { levelLabel, trackLabel } from '@/lib/nav';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Courses',
  description:
    'Programming fundamentals taught from scratch: Intro to Programming, OOP, Functional Programming, and Data Structures & Algorithms. Private and group sessions.',
  alternates: { canonical: '/courses' },
};

const pathSteps = [
  'Start with the course that matches your current level.',
  'Use the syllabus to understand the exact weekly topics.',
  'Book a free intro call if you want help choosing your path.',
];

export default async function CoursesPage() {
  const courses = await sanityFetch<Course>(COURSES_QUERY);

  return (
    <main>
      <section className="bg-brand-fog px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-end gap-10 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <span className="mb-4 inline-flex rounded-full border border-brand-teal px-3 py-1 text-xs font-medium text-brand-teal">
              Foundations track
            </span>
            <h1 className="font-display text-4xl font-bold text-brand-navy md:text-5xl">
              Courses that build the base before the framework.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-navy/70 md:text-lg">
              Four core subjects every programmer needs: Intro to Programming, OOP, Functional
              Programming, and Data Structures & Algorithms.
            </p>
          </div>

          <div className="rounded-brand border border-brand-navy/10 bg-white p-5">
            <p className="font-display text-lg font-medium text-brand-navy">
              Not sure where to start?
            </p>
            <ul className="mt-4 space-y-3">
              {pathSteps.map((step) => (
                <li key={step} className="flex items-start gap-2.5 text-sm leading-relaxed text-brand-navy/70">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-teal" aria-hidden="true" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <Button size="sm" asChild className="mt-5 gap-2">
              <Link href="/contact">
                Book free intro call
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          {courses.length === 0 ? (
            <div className="mx-auto max-w-xl rounded-brand border border-brand-navy/10 bg-brand-fog p-8 text-center">
              <h2 className="font-display text-2xl font-medium text-brand-navy">
                Courses are being prepared
              </h2>
              <p className="mt-3 text-base leading-relaxed text-brand-navy/70">
                Message us to ask about upcoming cohorts or get a recommended starting point.
              </p>
              <Button asChild className="mt-6">
                <Link href="/contact">Contact CoreCraft</Link>
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-brand-navy/55">
                    Course catalog
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-bold text-brand-navy">
                    Pick your next foundation
                  </h2>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-brand-navy/60">
                  Each card opens a detailed syllabus, outcomes, prerequisites, and the best next step.
                </p>
              </div>

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

              <div className="mt-12 overflow-hidden rounded-xl border border-brand-navy/10">
                <div className="bg-brand-fog px-5 py-4">
                  <h2 className="font-display text-xl font-medium text-brand-navy">
                    Compare the track
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[680px] text-left text-sm">
                    <thead className="border-b border-brand-navy/10 text-brand-navy/60">
                      <tr>
                        <th className="px-5 py-3 font-medium">Course</th>
                        <th className="px-5 py-3 font-medium">Track</th>
                        <th className="px-5 py-3 font-medium">Level</th>
                        <th className="px-5 py-3 font-medium">Duration</th>
                        <th className="px-5 py-3 font-medium">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-navy/5">
                      {courses.map((course) => (
                        <tr key={course._id} className="align-top">
                          <td className="px-5 py-4 font-medium text-brand-navy">{course.title}</td>
                          <td className="px-5 py-4 text-brand-navy/70">{trackLabel[course.track]}</td>
                          <td className="px-5 py-4 text-brand-navy/70">{levelLabel[course.level]}</td>
                          <td className="px-5 py-4 text-brand-navy/70">{course.duration}</td>
                          <td className="px-5 py-4">
                            <Link
                              href={`/courses/${course.slug.current}`}
                              className="inline-flex items-center gap-1 font-medium text-brand-teal underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                            >
                              View syllabus
                              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
