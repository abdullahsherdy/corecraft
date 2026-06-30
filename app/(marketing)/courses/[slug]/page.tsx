import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, Check, ArrowRight } from 'lucide-react';
import { sanityFetch, sanityFetchOne } from '@/lib/sanity/client';
import { COURSE_BY_SLUG_QUERY, COURSE_SLUGS_QUERY } from '@/lib/sanity/queries';
import type { Course } from '@/lib/sanity/types';
import { cn } from '@/lib/utils';
import { JsonLd } from '@/components/seo/json-ld';
import { courseLd, breadcrumbLd } from '@/lib/seo';
import { trackLabel, levelLabel } from '@/lib/nav';

interface Props {
  params: { slug: string };
}

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: string }>(COURSE_SLUGS_QUERY);
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = await sanityFetchOne<Course>(COURSE_BY_SLUG_QUERY, {
    slug: params.slug,
  });

  if (!course) {
    return { title: 'Course not found' };
  }

  return {
    title: course.title,
    description: course.excerpt,
    alternates: { canonical: `/courses/${course.slug.current}` },
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const course = await sanityFetchOne<Course>(COURSE_BY_SLUG_QUERY, {
    slug: params.slug,
  });

  if (!course) {
    notFound();
  }

  const outcomes      = course.outcomes ?? [];
  const syllabus      = course.syllabus ?? [];
  const prerequisites = course.prerequisites ?? [];

  const slug = course.slug.current;

  return (
    <main>
      <JsonLd
        data={[
          courseLd({
            title: course.title,
            slug,
            excerpt: course.excerpt,
            track: course.track,
            level: course.level,
            duration: course.duration,
            outcomes,
          }),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Courses', path: '/courses' },
            { name: course.title, path: `/courses/${slug}` },
          ]),
        ]}
      />
      <section className="bg-brand-navy px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full border border-brand-teal/30 bg-brand-teal/15 px-3 py-1 text-xs font-medium text-brand-teal">
              {trackLabel[course.track]}
            </span>
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/65">
              {levelLabel[course.level]}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/65">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {course.duration}
            </span>
          </div>
          <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
            {course.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            {course.excerpt}
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-10">
              {outcomes.length > 0 && (
                <div>
                  <h2 className="mb-4 font-display text-xl font-medium text-brand-navy">
                    What you&apos;ll learn
                  </h2>
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-teal" aria-hidden="true" />
                        <span className="text-sm leading-relaxed text-brand-navy/70">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {syllabus.length > 0 && (
                <div>
                  <h2 className="mb-4 font-display text-xl font-medium text-brand-navy">
                    Syllabus
                  </h2>
                  <ol className="overflow-hidden rounded-xl border border-brand-navy/10">
                    {syllabus.map((item, i) => (
                      <li
                        key={i}
                        className={cn(
                          'flex items-center gap-3 px-4 py-3.5',
                          i < syllabus.length - 1 && 'border-b border-brand-navy/5'
                        )}
                      >
                        <span className="min-w-[2ch] text-sm font-medium text-brand-teal">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm text-brand-navy/80">{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {prerequisites.length > 0 && (
                <div>
                  <h2 className="mb-4 font-display text-xl font-medium text-brand-navy">
                    Prerequisites
                  </h2>
                  <ul className="space-y-2.5">
                    {prerequisites.map((prereq, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <ArrowRight className="h-4 w-4 flex-shrink-0 text-brand-navy/30" aria-hidden="true" />
                        <span className="text-sm text-brand-navy/70">{prereq}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {course.audience && (
                <div>
                  <h2 className="mb-4 font-display text-xl font-medium text-brand-navy">
                    Who is this for
                  </h2>
                  <p className="max-w-2xl text-base leading-relaxed text-brand-navy/70">
                    {course.audience}
                  </p>
                </div>
              )}
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-xl border border-brand-navy/10 bg-brand-fog p-6">
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-brand-navy/60">
                  Private course
                </p>
                <p className="mb-5 font-display text-lg font-medium text-brand-navy">
                  Enroll or inquire
                </p>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-brand-amber px-6 py-3 text-base font-medium text-brand-midnight transition-colors hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                >
                  Book free intro call
                </Link>
                <p className="mt-2 text-center text-xs text-brand-navy/60">
                  No commitment required
                </p>
                <div className="mt-5 rounded-lg bg-white p-4">
                  <p className="font-display text-sm font-medium text-brand-navy">
                    What happens next
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-navy/65">
                    Share your current level, ask questions, and get a recommended plan for this
                    course or mentorship.
                  </p>
                </div>
                <dl className="mt-6 space-y-3 border-t border-brand-navy/10 pt-5">
                  <div className="flex justify-between">
                    <dt className="text-sm text-brand-navy/60">Duration</dt>
                    <dd className="text-sm font-medium text-brand-navy">{course.duration}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-brand-navy/60">Format</dt>
                    <dd className="text-sm font-medium text-brand-navy">Private / Group</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-brand-navy/60">Language</dt>
                    <dd className="text-sm font-medium text-brand-navy">Arabic / English</dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy px-4 py-12 text-center md:py-14">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-2xl font-medium text-white md:text-3xl">
            Ready to start this course?
          </h2>
          <p className="mt-2 text-base text-white/70">
            Start with a free intro call. No commitment.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-brand-amber px-8 py-3 text-base font-medium text-brand-midnight transition-colors hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
          >
            Book free intro call
          </Link>
        </div>
      </section>
    </main>
  );
}
